var $b = Object.defineProperty;
var Qb = (t, e, n) => (e in t ? $b(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var Hb = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var V = (t, e, n) => Qb(t, typeof e != 'symbol' ? e + '' : e, n);
var xN = Hb((SN, Lf) => {
  function uv(t, e) {
    for (var n = 0; n < e.length; n++) {
      const r = e[n];
      if (typeof r != 'string' && !Array.isArray(r)) {
        for (const i in r)
          if (i !== 'default' && !(i in t)) {
            const s = Object.getOwnPropertyDescriptor(r, i);
            s && Object.defineProperty(t, i, s.get ? s : { enumerable: !0, get: () => r[i] });
          }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
  }
  (function () {
    const e = document.createElement('link').relList;
    if (e && e.supports && e.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i)
        if (s.type === 'childList')
          for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const s = {};
      return (
        i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === 'use-credentials'
          ? (s.credentials = 'include')
          : i.crossOrigin === 'anonymous'
            ? (s.credentials = 'omit')
            : (s.credentials = 'same-origin'),
        s
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  function cv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
  }
  var fv = { exports: {} },
    Ol = {},
    hv = { exports: {} },
    W = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var lo = Symbol.for('react.element'),
    qb = Symbol.for('react.portal'),
    Yb = Symbol.for('react.fragment'),
    Gb = Symbol.for('react.strict_mode'),
    Kb = Symbol.for('react.profiler'),
    Xb = Symbol.for('react.provider'),
    Jb = Symbol.for('react.context'),
    Zb = Symbol.for('react.forward_ref'),
    e_ = Symbol.for('react.suspense'),
    t_ = Symbol.for('react.memo'),
    n_ = Symbol.for('react.lazy'),
    kd = Symbol.iterator;
  function r_(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (kd && t[kd]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var dv = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    pv = Object.assign,
    gv = {};
  function Ti(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = gv), (this.updater = n || dv);
  }
  Ti.prototype.isReactComponent = {};
  Ti.prototype.setState = function (t, e) {
    if (typeof t != 'object' && typeof t != 'function' && t != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
      );
    this.updater.enqueueSetState(this, t, e, 'setState');
  };
  Ti.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
  };
  function mv() {}
  mv.prototype = Ti.prototype;
  function Ff(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = gv), (this.updater = n || dv);
  }
  var jf = (Ff.prototype = new mv());
  jf.constructor = Ff;
  pv(jf, Ti.prototype);
  jf.isPureReactComponent = !0;
  var Ed = Array.isArray,
    vv = Object.prototype.hasOwnProperty,
    zf = { current: null },
    yv = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xv(t, e, n) {
    var r,
      i = {},
      s = null,
      o = null;
    if (e != null)
      for (r in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = '' + e.key), e))
        vv.call(e, r) && !yv.hasOwnProperty(r) && (i[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l;
    }
    if (t && t.defaultProps) for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: lo, type: t, key: s, ref: o, props: i, _owner: zf.current };
  }
  function i_(t, e) {
    return { $$typeof: lo, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
  }
  function Bf(t) {
    return typeof t == 'object' && t !== null && t.$$typeof === lo;
  }
  function s_(t) {
    var e = { '=': '=0', ':': '=2' };
    return (
      '$' +
      t.replace(/[=:]/g, function (n) {
        return e[n];
      })
    );
  }
  var Od = /\/+/g;
  function au(t, e) {
    return typeof t == 'object' && t !== null && t.key != null ? s_('' + t.key) : e.toString(36);
  }
  function aa(t, e, n, r, i) {
    var s = typeof t;
    (s === 'undefined' || s === 'boolean') && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
      switch (s) {
        case 'string':
        case 'number':
          o = !0;
          break;
        case 'object':
          switch (t.$$typeof) {
            case lo:
            case qb:
              o = !0;
          }
      }
    if (o)
      return (
        (o = t),
        (i = i(o)),
        (t = r === '' ? '.' + au(o, 0) : r),
        Ed(i)
          ? ((n = ''),
            t != null && (n = t.replace(Od, '$&/') + '/'),
            aa(i, e, n, '', function (u) {
              return u;
            }))
          : i != null &&
            (Bf(i) &&
              (i = i_(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Od, '$&/') + '/') + t)),
            e.push(i)),
        1
      );
    if (((o = 0), (r = r === '' ? '.' : r + ':'), Ed(t)))
      for (var a = 0; a < t.length; a++) {
        s = t[a];
        var l = r + au(s, a);
        o += aa(s, e, n, l, i);
      }
    else if (((l = r_(t)), typeof l == 'function'))
      for (t = l.call(t), a = 0; !(s = t.next()).done; ) (s = s.value), (l = r + au(s, a++)), (o += aa(s, e, n, l, i));
    else if (s === 'object')
      throw (
        ((e = String(t)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return o;
  }
  function ko(t, e, n) {
    if (t == null) return t;
    var r = [],
      i = 0;
    return (
      aa(t, r, '', '', function (s) {
        return e.call(n, s, i++);
      }),
      r
    );
  }
  function o_(t) {
    if (t._status === -1) {
      var e = t._result;
      (e = e()),
        e.then(
          function (n) {
            (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
          },
          function (n) {
            (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
          },
        ),
        t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var Je = { current: null },
    la = { transition: null },
    a_ = { ReactCurrentDispatcher: Je, ReactCurrentBatchConfig: la, ReactCurrentOwner: zf };
  function bv() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  W.Children = {
    map: ko,
    forEach: function (t, e, n) {
      ko(
        t,
        function () {
          e.apply(this, arguments);
        },
        n,
      );
    },
    count: function (t) {
      var e = 0;
      return (
        ko(t, function () {
          e++;
        }),
        e
      );
    },
    toArray: function (t) {
      return (
        ko(t, function (e) {
          return e;
        }) || []
      );
    },
    only: function (t) {
      if (!Bf(t)) throw Error('React.Children.only expected to receive a single React element child.');
      return t;
    },
  };
  W.Component = Ti;
  W.Fragment = Yb;
  W.Profiler = Kb;
  W.PureComponent = Ff;
  W.StrictMode = Gb;
  W.Suspense = e_;
  W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a_;
  W.act = bv;
  W.cloneElement = function (t, e, n) {
    if (t == null)
      throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.');
    var r = pv({}, t.props),
      i = t.key,
      s = t.ref,
      o = t._owner;
    if (e != null) {
      if (
        (e.ref !== void 0 && ((s = e.ref), (o = zf.current)),
        e.key !== void 0 && (i = '' + e.key),
        t.type && t.type.defaultProps)
      )
        var a = t.type.defaultProps;
      for (l in e) vv.call(e, l) && !yv.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: lo, type: t.type, key: i, ref: s, props: r, _owner: o };
  };
  W.createContext = function (t) {
    return (
      (t = {
        $$typeof: Jb,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (t.Provider = { $$typeof: Xb, _context: t }),
      (t.Consumer = t)
    );
  };
  W.createElement = xv;
  W.createFactory = function (t) {
    var e = xv.bind(null, t);
    return (e.type = t), e;
  };
  W.createRef = function () {
    return { current: null };
  };
  W.forwardRef = function (t) {
    return { $$typeof: Zb, render: t };
  };
  W.isValidElement = Bf;
  W.lazy = function (t) {
    return { $$typeof: n_, _payload: { _status: -1, _result: t }, _init: o_ };
  };
  W.memo = function (t, e) {
    return { $$typeof: t_, type: t, compare: e === void 0 ? null : e };
  };
  W.startTransition = function (t) {
    var e = la.transition;
    la.transition = {};
    try {
      t();
    } finally {
      la.transition = e;
    }
  };
  W.unstable_act = bv;
  W.useCallback = function (t, e) {
    return Je.current.useCallback(t, e);
  };
  W.useContext = function (t) {
    return Je.current.useContext(t);
  };
  W.useDebugValue = function () {};
  W.useDeferredValue = function (t) {
    return Je.current.useDeferredValue(t);
  };
  W.useEffect = function (t, e) {
    return Je.current.useEffect(t, e);
  };
  W.useId = function () {
    return Je.current.useId();
  };
  W.useImperativeHandle = function (t, e, n) {
    return Je.current.useImperativeHandle(t, e, n);
  };
  W.useInsertionEffect = function (t, e) {
    return Je.current.useInsertionEffect(t, e);
  };
  W.useLayoutEffect = function (t, e) {
    return Je.current.useLayoutEffect(t, e);
  };
  W.useMemo = function (t, e) {
    return Je.current.useMemo(t, e);
  };
  W.useReducer = function (t, e, n) {
    return Je.current.useReducer(t, e, n);
  };
  W.useRef = function (t) {
    return Je.current.useRef(t);
  };
  W.useState = function (t) {
    return Je.current.useState(t);
  };
  W.useSyncExternalStore = function (t, e, n) {
    return Je.current.useSyncExternalStore(t, e, n);
  };
  W.useTransition = function () {
    return Je.current.useTransition();
  };
  W.version = '18.3.1';
  hv.exports = W;
  var C = hv.exports;
  const $t = cv(C),
    l_ = uv({ __proto__: null, default: $t }, [C]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var u_ = C,
    c_ = Symbol.for('react.element'),
    f_ = Symbol.for('react.fragment'),
    h_ = Object.prototype.hasOwnProperty,
    d_ = u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p_ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _v(t, e, n) {
    var r,
      i = {},
      s = null,
      o = null;
    n !== void 0 && (s = '' + n), e.key !== void 0 && (s = '' + e.key), e.ref !== void 0 && (o = e.ref);
    for (r in e) h_.call(e, r) && !p_.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps) for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
    return { $$typeof: c_, type: t, key: s, ref: o, props: i, _owner: d_.current };
  }
  Ol.Fragment = f_;
  Ol.jsx = _v;
  Ol.jsxs = _v;
  fv.exports = Ol;
  var w = fv.exports,
    wv = { exports: {} },
    gt = {},
    Sv = { exports: {} },
    kv = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (t) {
    function e(M, I) {
      var B = M.length;
      M.push(I);
      e: for (; 0 < B; ) {
        var ee = (B - 1) >>> 1,
          Y = M[ee];
        if (0 < i(Y, I)) (M[ee] = I), (M[B] = Y), (B = ee);
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var I = M[0],
        B = M.pop();
      if (B !== I) {
        M[0] = B;
        e: for (var ee = 0, Y = M.length, et = Y >>> 1; ee < et; ) {
          var Ne = 2 * (ee + 1) - 1,
            Kt = M[Ne],
            He = Ne + 1,
            So = M[He];
          if (0 > i(Kt, B))
            He < Y && 0 > i(So, Kt) ? ((M[ee] = So), (M[He] = B), (ee = He)) : ((M[ee] = Kt), (M[Ne] = B), (ee = Ne));
          else if (He < Y && 0 > i(So, B)) (M[ee] = So), (M[He] = B), (ee = He);
          else break e;
        }
      }
      return I;
    }
    function i(M, I) {
      var B = M.sortIndex - I.sortIndex;
      return B !== 0 ? B : M.id - I.id;
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
      var s = performance;
      t.unstable_now = function () {
        return s.now();
      };
    } else {
      var o = Date,
        a = o.now();
      t.unstable_now = function () {
        return o.now() - a;
      };
    }
    var l = [],
      u = [],
      c = 1,
      f = null,
      h = 3,
      d = !1,
      g = !1,
      v = !1,
      x = typeof setTimeout == 'function' ? setTimeout : null,
      p = typeof clearTimeout == 'function' ? clearTimeout : null,
      m = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(M) {
      for (var I = n(u); I !== null; ) {
        if (I.callback === null) r(u);
        else if (I.startTime <= M) r(u), (I.sortIndex = I.expirationTime), e(l, I);
        else break;
        I = n(u);
      }
    }
    function b(M) {
      if (((v = !1), y(M), !g))
        if (n(l) !== null) (g = !0), K(_);
        else {
          var I = n(u);
          I !== null && re(b, I.startTime - M);
        }
    }
    function _(M, I) {
      (g = !1), v && ((v = !1), p(O), (O = -1)), (d = !0);
      var B = h;
      try {
        for (y(I), f = n(l); f !== null && (!(f.expirationTime > I) || (M && !j())); ) {
          var ee = f.callback;
          if (typeof ee == 'function') {
            (f.callback = null), (h = f.priorityLevel);
            var Y = ee(f.expirationTime <= I);
            (I = t.unstable_now()), typeof Y == 'function' ? (f.callback = Y) : f === n(l) && r(l), y(I);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var et = !0;
        else {
          var Ne = n(u);
          Ne !== null && re(b, Ne.startTime - I), (et = !1);
        }
        return et;
      } finally {
        (f = null), (h = B), (d = !1);
      }
    }
    var S = !1,
      E = null,
      O = -1,
      D = 5,
      P = -1;
    function j() {
      return !(t.unstable_now() - P < D);
    }
    function z() {
      if (E !== null) {
        var M = t.unstable_now();
        P = M;
        var I = !0;
        try {
          I = E(!0, M);
        } finally {
          I ? U() : ((S = !1), (E = null));
        }
      } else S = !1;
    }
    var U;
    if (typeof m == 'function')
      U = function () {
        m(z);
      };
    else if (typeof MessageChannel < 'u') {
      var le = new MessageChannel(),
        Q = le.port2;
      (le.port1.onmessage = z),
        (U = function () {
          Q.postMessage(null);
        });
    } else
      U = function () {
        x(z, 0);
      };
    function K(M) {
      (E = M), S || ((S = !0), U());
    }
    function re(M, I) {
      O = x(function () {
        M(t.unstable_now());
      }, I);
    }
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (M) {
        M.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        g || d || ((g = !0), K(_));
      }),
      (t.unstable_forceFrameRate = function (M) {
        0 > M || 125 < M
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (D = 0 < M ? Math.floor(1e3 / M) : 5);
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (t.unstable_next = function (M) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = h;
        }
        var B = h;
        h = I;
        try {
          return M();
        } finally {
          h = B;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = function () {}),
      (t.unstable_runWithPriority = function (M, I) {
        switch (M) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            M = 3;
        }
        var B = h;
        h = M;
        try {
          return I();
        } finally {
          h = B;
        }
      }),
      (t.unstable_scheduleCallback = function (M, I, B) {
        var ee = t.unstable_now();
        switch (
          (typeof B == 'object' && B !== null
            ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? ee + B : ee))
            : (B = ee),
          M)
        ) {
          case 1:
            var Y = -1;
            break;
          case 2:
            Y = 250;
            break;
          case 5:
            Y = 1073741823;
            break;
          case 4:
            Y = 1e4;
            break;
          default:
            Y = 5e3;
        }
        return (
          (Y = B + Y),
          (M = { id: c++, callback: I, priorityLevel: M, startTime: B, expirationTime: Y, sortIndex: -1 }),
          B > ee
            ? ((M.sortIndex = B),
              e(u, M),
              n(l) === null && M === n(u) && (v ? (p(O), (O = -1)) : (v = !0), re(b, B - ee)))
            : ((M.sortIndex = Y), e(l, M), g || d || ((g = !0), K(_))),
          M
        );
      }),
      (t.unstable_shouldYield = j),
      (t.unstable_wrapCallback = function (M) {
        var I = h;
        return function () {
          var B = h;
          h = I;
          try {
            return M.apply(this, arguments);
          } finally {
            h = B;
          }
        };
      });
  })(kv);
  Sv.exports = kv;
  var g_ = Sv.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var m_ = C,
    pt = g_;
  function N(t) {
    for (var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1; n < arguments.length; n++)
      e += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var Ev = new Set(),
    Ns = {};
  function Cr(t, e) {
    di(t, e), di(t + 'Capture', e);
  }
  function di(t, e) {
    for (Ns[t] = e, t = 0; t < e.length; t++) Ev.add(e[t]);
  }
  var ln = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    rc = Object.prototype.hasOwnProperty,
    v_ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Td = {},
    Cd = {};
  function y_(t) {
    return rc.call(Cd, t) ? !0 : rc.call(Td, t) ? !1 : v_.test(t) ? (Cd[t] = !0) : ((Td[t] = !0), !1);
  }
  function x_(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
      default:
        return !1;
    }
  }
  function b_(t, e, n, r) {
    if (e === null || typeof e > 'u' || x_(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !e;
        case 4:
          return e === !1;
        case 5:
          return isNaN(e);
        case 6:
          return isNaN(e) || 1 > e;
      }
    return !1;
  }
  function Ze(t, e, n, r, i, s, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = t),
      (this.type = e),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o);
  }
  var Ve = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
      Ve[t] = new Ze(t, 0, !1, t, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (t) {
    var e = t[0];
    Ve[e] = new Ze(e, 1, !1, t[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
    Ve[t] = new Ze(t, 2, !1, t.toLowerCase(), null, !1, !1);
  });
  ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
    Ve[t] = new Ze(t, 2, !1, t, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (t) {
      Ve[t] = new Ze(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
    Ve[t] = new Ze(t, 3, !0, t, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (t) {
    Ve[t] = new Ze(t, 4, !1, t, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (t) {
    Ve[t] = new Ze(t, 6, !1, t, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (t) {
    Ve[t] = new Ze(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var Vf = /[\-:]([a-z])/g;
  function Uf(t) {
    return t[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
      var e = t.replace(Vf, Uf);
      Ve[e] = new Ze(e, 1, !1, t, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (t) {
    var e = t.replace(Vf, Uf);
    Ve[e] = new Ze(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
    var e = t.replace(Vf, Uf);
    Ve[e] = new Ze(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (t) {
    Ve[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !1, !1);
  });
  Ve.xlinkHref = new Ze('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
  ['src', 'href', 'action', 'formAction'].forEach(function (t) {
    Ve[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function Wf(t, e, n, r) {
    var i = Ve.hasOwnProperty(e) ? Ve[e] : null;
    (i !== null
      ? i.type !== 0
      : r || !(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
      (b_(e, n, i, r) && (n = null),
      r || i === null
        ? y_(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
        : i.mustUseProperty
          ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
          : ((e = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? t.removeAttribute(e)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
                r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
  }
  var pn = m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Eo = Symbol.for('react.element'),
    zr = Symbol.for('react.portal'),
    Br = Symbol.for('react.fragment'),
    $f = Symbol.for('react.strict_mode'),
    ic = Symbol.for('react.profiler'),
    Ov = Symbol.for('react.provider'),
    Tv = Symbol.for('react.context'),
    Qf = Symbol.for('react.forward_ref'),
    sc = Symbol.for('react.suspense'),
    oc = Symbol.for('react.suspense_list'),
    Hf = Symbol.for('react.memo'),
    xn = Symbol.for('react.lazy'),
    Cv = Symbol.for('react.offscreen'),
    Dd = Symbol.iterator;
  function Fi(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (Dd && t[Dd]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var ge = Object.assign,
    lu;
  function ts(t) {
    if (lu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        lu = (e && e[1]) || '';
      }
    return (
      `
` +
      lu +
      t
    );
  }
  var uu = !1;
  function cu(t, e) {
    if (!t || uu) return '';
    uu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (e)
        if (
          ((e = function () {
            throw Error();
          }),
          Object.defineProperty(e.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(e, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(t, [], e);
        } else {
          try {
            e.call();
          } catch (u) {
            r = u;
          }
          t.call(e.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        t();
      }
    } catch (u) {
      if (u && r && typeof u.stack == 'string') {
        for (
          var i = u.stack.split(`
`),
            s = r.stack.split(`
`),
            o = i.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && i[o] !== s[a];

        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (i[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || i[o] !== s[a])) {
                  var l =
                    `
` + i[o].replace(' at new ', ' at ');
                  return t.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', t.displayName)), l;
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      (uu = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : '') ? ts(t) : '';
  }
  function __(t) {
    switch (t.tag) {
      case 5:
        return ts(t.type);
      case 16:
        return ts('Lazy');
      case 13:
        return ts('Suspense');
      case 19:
        return ts('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (t = cu(t.type, !1)), t;
      case 11:
        return (t = cu(t.type.render, !1)), t;
      case 1:
        return (t = cu(t.type, !0)), t;
      default:
        return '';
    }
  }
  function ac(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case Br:
        return 'Fragment';
      case zr:
        return 'Portal';
      case ic:
        return 'Profiler';
      case $f:
        return 'StrictMode';
      case sc:
        return 'Suspense';
      case oc:
        return 'SuspenseList';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case Tv:
          return (t.displayName || 'Context') + '.Consumer';
        case Ov:
          return (t._context.displayName || 'Context') + '.Provider';
        case Qf:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case Hf:
          return (e = t.displayName || null), e !== null ? e : ac(t.type) || 'Memo';
        case xn:
          (e = t._payload), (t = t._init);
          try {
            return ac(t(e));
          } catch {}
      }
    return null;
  }
  function w_(t) {
    var e = t.type;
    switch (t.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (e.displayName || 'Context') + '.Consumer';
      case 10:
        return (e._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (t = e.render),
          (t = t.displayName || t.name || ''),
          e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return e;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return ac(e);
      case 8:
        return e === $f ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof e == 'function') return e.displayName || e.name || null;
        if (typeof e == 'string') return e;
    }
    return null;
  }
  function $n(t) {
    switch (typeof t) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function Dv(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function S_(t) {
    var e = Dv(t) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      r = '' + t[e];
    if (!t.hasOwnProperty(e) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (o) {
            (r = '' + o), s.call(this, o);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = '' + o;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Oo(t) {
    t._valueTracker || (t._valueTracker = S_(t));
  }
  function Pv(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      r = '';
    return t && (r = Dv(t) ? (t.checked ? 'true' : 'false') : t.value), (t = r), t !== n ? (e.setValue(t), !0) : !1;
  }
  function Ia(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function lc(t, e) {
    var n = e.checked;
    return ge({}, e, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? t._wrapperState.initialChecked,
    });
  }
  function Pd(t, e) {
    var n = e.defaultValue == null ? '' : e.defaultValue,
      r = e.checked != null ? e.checked : e.defaultChecked;
    (n = $n(e.value != null ? e.value : n)),
      (t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null,
      });
  }
  function Nv(t, e) {
    (e = e.checked), e != null && Wf(t, 'checked', e, !1);
  }
  function uc(t, e) {
    Nv(t, e);
    var n = $n(e.value),
      r = e.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
        : t.value !== '' + n && (t.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      t.removeAttribute('value');
      return;
    }
    e.hasOwnProperty('value')
      ? cc(t, e.type, n)
      : e.hasOwnProperty('defaultValue') && cc(t, e.type, $n(e.defaultValue)),
      e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
  }
  function Nd(t, e, n) {
    if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
      var r = e.type;
      if (!((r !== 'submit' && r !== 'reset') || (e.value !== void 0 && e.value !== null))) return;
      (e = '' + t._wrapperState.initialValue), n || e === t.value || (t.value = e), (t.defaultValue = e);
    }
    (n = t.name),
      n !== '' && (t.name = ''),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      n !== '' && (t.name = n);
  }
  function cc(t, e, n) {
    (e !== 'number' || Ia(t.ownerDocument) !== t) &&
      (n == null
        ? (t.defaultValue = '' + t._wrapperState.initialValue)
        : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
  }
  var ns = Array.isArray;
  function ni(t, e, n, r) {
    if (((t = t.options), e)) {
      e = {};
      for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
      for (n = 0; n < t.length; n++)
        (i = e.hasOwnProperty('$' + t[n].value)),
          t[n].selected !== i && (t[n].selected = i),
          i && r && (t[n].defaultSelected = !0);
    } else {
      for (n = '' + $n(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          (t[i].selected = !0), r && (t[i].defaultSelected = !0);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function fc(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(N(91));
    return ge({}, e, { value: void 0, defaultValue: void 0, children: '' + t._wrapperState.initialValue });
  }
  function Md(t, e) {
    var n = e.value;
    if (n == null) {
      if (((n = e.children), (e = e.defaultValue), n != null)) {
        if (e != null) throw Error(N(92));
        if (ns(n)) {
          if (1 < n.length) throw Error(N(93));
          n = n[0];
        }
        e = n;
      }
      e == null && (e = ''), (n = e);
    }
    t._wrapperState = { initialValue: $n(n) };
  }
  function Mv(t, e) {
    var n = $n(e.value),
      r = $n(e.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== t.value && (t.value = n),
      e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
      r != null && (t.defaultValue = '' + r);
  }
  function Id(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
  }
  function Iv(t) {
    switch (t) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function hc(t, e) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
      ? Iv(e)
      : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : t;
  }
  var To,
    Rv = (function (t) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (e, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(e, n, r, i);
            });
          }
        : t;
    })(function (t, e) {
      if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t) t.innerHTML = e;
      else {
        for (
          To = To || document.createElement('div'),
            To.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
            e = To.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; e.firstChild; ) t.appendChild(e.firstChild);
      }
    });
  function Ms(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var hs = {
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
    k_ = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(hs).forEach(function (t) {
    k_.forEach(function (e) {
      (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (hs[e] = hs[t]);
    });
  });
  function Av(t, e, n) {
    return e == null || typeof e == 'boolean' || e === ''
      ? ''
      : n || typeof e != 'number' || e === 0 || (hs.hasOwnProperty(t) && hs[t])
        ? ('' + e).trim()
        : e + 'px';
  }
  function Lv(t, e) {
    t = t.style;
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          i = Av(n, e[n], r);
        n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
      }
  }
  var E_ = ge(
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
    },
  );
  function dc(t, e) {
    if (e) {
      if (E_[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(N(137, t));
      if (e.dangerouslySetInnerHTML != null) {
        if (e.children != null) throw Error(N(60));
        if (typeof e.dangerouslySetInnerHTML != 'object' || !('__html' in e.dangerouslySetInnerHTML))
          throw Error(N(61));
      }
      if (e.style != null && typeof e.style != 'object') throw Error(N(62));
    }
  }
  function pc(t, e) {
    if (t.indexOf('-') === -1) return typeof e.is == 'string';
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var gc = null;
  function qf(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var mc = null,
    ri = null,
    ii = null;
  function Rd(t) {
    if ((t = fo(t))) {
      if (typeof mc != 'function') throw Error(N(280));
      var e = t.stateNode;
      e && ((e = Nl(e)), mc(t.stateNode, t.type, e));
    }
  }
  function Fv(t) {
    ri ? (ii ? ii.push(t) : (ii = [t])) : (ri = t);
  }
  function jv() {
    if (ri) {
      var t = ri,
        e = ii;
      if (((ii = ri = null), Rd(t), e)) for (t = 0; t < e.length; t++) Rd(e[t]);
    }
  }
  function zv(t, e) {
    return t(e);
  }
  function Bv() {}
  var fu = !1;
  function Vv(t, e, n) {
    if (fu) return t(e, n);
    fu = !0;
    try {
      return zv(t, e, n);
    } finally {
      (fu = !1), (ri !== null || ii !== null) && (Bv(), jv());
    }
  }
  function Is(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = Nl(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
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
        (r = !r.disabled) ||
          ((t = t.type), (r = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !r);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != 'function') throw Error(N(231, e, typeof n));
    return n;
  }
  var vc = !1;
  if (ln)
    try {
      var ji = {};
      Object.defineProperty(ji, 'passive', {
        get: function () {
          vc = !0;
        },
      }),
        window.addEventListener('test', ji, ji),
        window.removeEventListener('test', ji, ji);
    } catch {
      vc = !1;
    }
  function O_(t, e, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      e.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var ds = !1,
    Ra = null,
    Aa = !1,
    yc = null,
    T_ = {
      onError: function (t) {
        (ds = !0), (Ra = t);
      },
    };
  function C_(t, e, n, r, i, s, o, a, l) {
    (ds = !1), (Ra = null), O_.apply(T_, arguments);
  }
  function D_(t, e, n, r, i, s, o, a, l) {
    if ((C_.apply(this, arguments), ds)) {
      if (ds) {
        var u = Ra;
        (ds = !1), (Ra = null);
      } else throw Error(N(198));
      Aa || ((Aa = !0), (yc = u));
    }
  }
  function Dr(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function Uv(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function Ad(t) {
    if (Dr(t) !== t) throw Error(N(188));
  }
  function P_(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = Dr(t)), e === null)) throw Error(N(188));
      return e !== t ? null : t;
    }
    for (var n = t, r = e; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return Ad(i), t;
          if (s === r) return Ad(i), e;
          s = s.sibling;
        }
        throw Error(N(188));
      }
      if (n.return !== r.return) (n = i), (r = s);
      else {
        for (var o = !1, a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              (o = !0), (n = s), (r = i);
              break;
            }
            if (a === r) {
              (o = !0), (r = s), (n = i);
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(N(189));
        }
      }
      if (n.alternate !== r) throw Error(N(190));
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? t : e;
  }
  function Wv(t) {
    return (t = P_(t)), t !== null ? $v(t) : null;
  }
  function $v(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var e = $v(t);
      if (e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var Qv = pt.unstable_scheduleCallback,
    Ld = pt.unstable_cancelCallback,
    N_ = pt.unstable_shouldYield,
    M_ = pt.unstable_requestPaint,
    _e = pt.unstable_now,
    I_ = pt.unstable_getCurrentPriorityLevel,
    Yf = pt.unstable_ImmediatePriority,
    Hv = pt.unstable_UserBlockingPriority,
    La = pt.unstable_NormalPriority,
    R_ = pt.unstable_LowPriority,
    qv = pt.unstable_IdlePriority,
    Tl = null,
    Qt = null;
  function A_(t) {
    if (Qt && typeof Qt.onCommitFiberRoot == 'function')
      try {
        Qt.onCommitFiberRoot(Tl, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  var Mt = Math.clz32 ? Math.clz32 : j_,
    L_ = Math.log,
    F_ = Math.LN2;
  function j_(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((L_(t) / F_) | 0)) | 0;
  }
  var Co = 64,
    Do = 4194304;
  function rs(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Fa(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = t.suspendedLanes,
      s = t.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? (r = rs(a)) : ((s &= o), s !== 0 && (r = rs(s)));
    } else (o = n & ~i), o !== 0 ? (r = rs(o)) : s !== 0 && (r = rs(s));
    if (r === 0) return 0;
    if (e !== 0 && e !== r && !(e & i) && ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0)))
      return e;
    if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
      for (t = t.entanglements, e &= r; 0 < e; ) (n = 31 - Mt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
    return r;
  }
  function z_(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return e + 250;
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
        return e + 5e3;
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
  function B_(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s; ) {
      var o = 31 - Mt(s),
        a = 1 << o,
        l = i[o];
      l === -1 ? (!(a & n) || a & r) && (i[o] = z_(a, e)) : l <= e && (t.expiredLanes |= a), (s &= ~a);
    }
  }
  function xc(t) {
    return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function Yv() {
    var t = Co;
    return (Co <<= 1), !(Co & 4194240) && (Co = 64), t;
  }
  function hu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function uo(t, e, n) {
    (t.pendingLanes |= e),
      e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
      (t = t.eventTimes),
      (e = 31 - Mt(e)),
      (t[e] = n);
  }
  function V_(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= e),
      (t.mutableReadLanes &= e),
      (t.entangledLanes &= e),
      (e = t.entanglements);
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
      var i = 31 - Mt(n),
        s = 1 << i;
      (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
    }
  }
  function Gf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var r = 31 - Mt(n),
        i = 1 << r;
      (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
    }
  }
  var ne = 0;
  function Gv(t) {
    return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
  }
  var Kv,
    Kf,
    Xv,
    Jv,
    Zv,
    bc = !1,
    Po = [],
    In = null,
    Rn = null,
    An = null,
    Rs = new Map(),
    As = new Map(),
    kn = [],
    U_ =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function Fd(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        In = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Rn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        An = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Rs.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        As.delete(e.pointerId);
    }
  }
  function zi(t, e, n, r, i, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
        e !== null && ((e = fo(e)), e !== null && Kf(e)),
        t)
      : ((t.eventSystemFlags |= r), (e = t.targetContainers), i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function W_(t, e, n, r, i) {
    switch (e) {
      case 'focusin':
        return (In = zi(In, t, e, n, r, i)), !0;
      case 'dragenter':
        return (Rn = zi(Rn, t, e, n, r, i)), !0;
      case 'mouseover':
        return (An = zi(An, t, e, n, r, i)), !0;
      case 'pointerover':
        var s = i.pointerId;
        return Rs.set(s, zi(Rs.get(s) || null, t, e, n, r, i)), !0;
      case 'gotpointercapture':
        return (s = i.pointerId), As.set(s, zi(As.get(s) || null, t, e, n, r, i)), !0;
    }
    return !1;
  }
  function ey(t) {
    var e = hr(t.target);
    if (e !== null) {
      var n = Dr(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = Uv(n)), e !== null)) {
            (t.blockedOn = e),
              Zv(t.priority, function () {
                Xv(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ua(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = _c(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var r = new n.constructor(n.type, n);
        (gc = r), n.target.dispatchEvent(r), (gc = null);
      } else return (e = fo(n)), e !== null && Kf(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function jd(t, e, n) {
    ua(t) && n.delete(e);
  }
  function $_() {
    (bc = !1),
      In !== null && ua(In) && (In = null),
      Rn !== null && ua(Rn) && (Rn = null),
      An !== null && ua(An) && (An = null),
      Rs.forEach(jd),
      As.forEach(jd);
  }
  function Bi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), bc || ((bc = !0), pt.unstable_scheduleCallback(pt.unstable_NormalPriority, $_)));
  }
  function Ls(t) {
    function e(i) {
      return Bi(i, t);
    }
    if (0 < Po.length) {
      Bi(Po[0], t);
      for (var n = 1; n < Po.length; n++) {
        var r = Po[n];
        r.blockedOn === t && (r.blockedOn = null);
      }
    }
    for (
      In !== null && Bi(In, t), Rn !== null && Bi(Rn, t), An !== null && Bi(An, t), Rs.forEach(e), As.forEach(e), n = 0;
      n < kn.length;
      n++
    )
      (r = kn[n]), r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); ) ey(n), n.blockedOn === null && kn.shift();
  }
  var si = pn.ReactCurrentBatchConfig,
    ja = !0;
  function Q_(t, e, n, r) {
    var i = ne,
      s = si.transition;
    si.transition = null;
    try {
      (ne = 1), Xf(t, e, n, r);
    } finally {
      (ne = i), (si.transition = s);
    }
  }
  function H_(t, e, n, r) {
    var i = ne,
      s = si.transition;
    si.transition = null;
    try {
      (ne = 4), Xf(t, e, n, r);
    } finally {
      (ne = i), (si.transition = s);
    }
  }
  function Xf(t, e, n, r) {
    if (ja) {
      var i = _c(t, e, n, r);
      if (i === null) wu(t, e, r, za, n), Fd(t, r);
      else if (W_(i, t, e, n, r)) r.stopPropagation();
      else if ((Fd(t, r), e & 4 && -1 < U_.indexOf(t))) {
        for (; i !== null; ) {
          var s = fo(i);
          if ((s !== null && Kv(s), (s = _c(t, e, n, r)), s === null && wu(t, e, r, za, n), s === i)) break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else wu(t, e, r, null, n);
    }
  }
  var za = null;
  function _c(t, e, n, r) {
    if (((za = null), (t = qf(r)), (t = hr(t)), t !== null))
      if (((e = Dr(t)), e === null)) t = null;
      else if (((n = e.tag), n === 13)) {
        if (((t = Uv(e)), t !== null)) return t;
        t = null;
      } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null;
      } else e !== t && (t = null);
    return (za = t), null;
  }
  function ty(t) {
    switch (t) {
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
        return 1;
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
        return 4;
      case 'message':
        switch (I_()) {
          case Yf:
            return 1;
          case Hv:
            return 4;
          case La:
          case R_:
            return 16;
          case qv:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tn = null,
    Jf = null,
    ca = null;
  function ny() {
    if (ca) return ca;
    var t,
      e = Jf,
      n = e.length,
      r,
      i = 'value' in Tn ? Tn.value : Tn.textContent,
      s = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++);
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
    return (ca = i.slice(t, 1 < r ? 1 - r : void 0));
  }
  function fa(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function No() {
    return !0;
  }
  function zd() {
    return !1;
  }
  function mt(t) {
    function e(n, r, i, s, o) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null);
      for (var a in t) t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? No : zd),
        (this.isPropagationStopped = zd),
        this
      );
    }
    return (
      ge(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = No));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = No));
        },
        persist: function () {},
        isPersistent: No,
      }),
      e
    );
  }
  var Ci = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zf = mt(Ci),
    co = ge({}, Ci, { view: 0, detail: 0 }),
    q_ = mt(co),
    du,
    pu,
    Vi,
    Cl = ge({}, co, {
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
      getModifierState: eh,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Vi &&
              (Vi && t.type === 'mousemove'
                ? ((du = t.screenX - Vi.screenX), (pu = t.screenY - Vi.screenY))
                : (pu = du = 0),
              (Vi = t)),
            du);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : pu;
      },
    }),
    Bd = mt(Cl),
    Y_ = ge({}, Cl, { dataTransfer: 0 }),
    G_ = mt(Y_),
    K_ = ge({}, co, { relatedTarget: 0 }),
    gu = mt(K_),
    X_ = ge({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J_ = mt(X_),
    Z_ = ge({}, Ci, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ew = mt(Z_),
    tw = ge({}, Ci, { data: 0 }),
    Vd = mt(tw),
    nw = {
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
    rw = {
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
    iw = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function sw(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = iw[t]) ? !!e[t] : !1;
  }
  function eh() {
    return sw;
  }
  var ow = ge({}, co, {
      key: function (t) {
        if (t.key) {
          var e = nw[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = fa(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? rw[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: eh,
      charCode: function (t) {
        return t.type === 'keypress' ? fa(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress' ? fa(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
    }),
    aw = mt(ow),
    lw = ge({}, Cl, {
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
    Ud = mt(lw),
    uw = ge({}, co, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: eh,
    }),
    cw = mt(uw),
    fw = ge({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hw = mt(fw),
    dw = ge({}, Cl, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pw = mt(dw),
    gw = [9, 13, 27, 32],
    th = ln && 'CompositionEvent' in window,
    ps = null;
  ln && 'documentMode' in document && (ps = document.documentMode);
  var mw = ln && 'TextEvent' in window && !ps,
    ry = ln && (!th || (ps && 8 < ps && 11 >= ps)),
    Wd = ' ',
    $d = !1;
  function iy(t, e) {
    switch (t) {
      case 'keyup':
        return gw.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function sy(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
  }
  var Vr = !1;
  function vw(t, e) {
    switch (t) {
      case 'compositionend':
        return sy(e);
      case 'keypress':
        return e.which !== 32 ? null : (($d = !0), Wd);
      case 'textInput':
        return (t = e.data), t === Wd && $d ? null : t;
      default:
        return null;
    }
  }
  function yw(t, e) {
    if (Vr)
      return t === 'compositionend' || (!th && iy(t, e)) ? ((t = ny()), (ca = Jf = Tn = null), (Vr = !1), t) : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return ry && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var xw = {
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
  };
  function Qd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!xw[t.type] : e === 'textarea';
  }
  function oy(t, e, n, r) {
    Fv(r),
      (e = Ba(e, 'onChange')),
      0 < e.length && ((n = new Zf('onChange', 'change', null, n, r)), t.push({ event: n, listeners: e }));
  }
  var gs = null,
    Fs = null;
  function bw(t) {
    vy(t, 0);
  }
  function Dl(t) {
    var e = $r(t);
    if (Pv(e)) return t;
  }
  function _w(t, e) {
    if (t === 'change') return e;
  }
  var ay = !1;
  if (ln) {
    var mu;
    if (ln) {
      var vu = 'oninput' in document;
      if (!vu) {
        var Hd = document.createElement('div');
        Hd.setAttribute('oninput', 'return;'), (vu = typeof Hd.oninput == 'function');
      }
      mu = vu;
    } else mu = !1;
    ay = mu && (!document.documentMode || 9 < document.documentMode);
  }
  function qd() {
    gs && (gs.detachEvent('onpropertychange', ly), (Fs = gs = null));
  }
  function ly(t) {
    if (t.propertyName === 'value' && Dl(Fs)) {
      var e = [];
      oy(e, Fs, t, qf(t)), Vv(bw, e);
    }
  }
  function ww(t, e, n) {
    t === 'focusin' ? (qd(), (gs = e), (Fs = n), gs.attachEvent('onpropertychange', ly)) : t === 'focusout' && qd();
  }
  function Sw(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Dl(Fs);
  }
  function kw(t, e) {
    if (t === 'click') return Dl(e);
  }
  function Ew(t, e) {
    if (t === 'input' || t === 'change') return Dl(e);
  }
  function Ow(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var At = typeof Object.is == 'function' ? Object.is : Ow;
  function js(t, e) {
    if (At(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var n = Object.keys(t),
      r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!rc.call(e, i) || !At(t[i], e[i])) return !1;
    }
    return !0;
  }
  function Yd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gd(t, e) {
    var n = Yd(t);
    t = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = t + n.textContent.length), t <= e && r >= e)) return { node: n, offset: e - t };
        t = r;
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
      n = Yd(n);
    }
  }
  function uy(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? uy(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function cy() {
    for (var t = window, e = Ia(); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ia(t.document);
    }
    return e;
  }
  function nh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  function Tw(t) {
    var e = cy(),
      n = t.focusedElem,
      r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && uy(n.ownerDocument.documentElement, n)) {
      if (r !== null && nh(n)) {
        if (((e = r.start), (t = r.end), t === void 0 && (t = e), 'selectionStart' in n))
          (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
        else if (((t = ((e = n.ownerDocument || document) && e.defaultView) || window), t.getSelection)) {
          t = t.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          (r = r.end === void 0 ? s : Math.min(r.end, i)),
            !t.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = Gd(n, s));
          var o = Gd(n, r);
          i &&
            o &&
            (t.rangeCount !== 1 ||
              t.anchorNode !== i.node ||
              t.anchorOffset !== i.offset ||
              t.focusNode !== o.node ||
              t.focusOffset !== o.offset) &&
            ((e = e.createRange()),
            e.setStart(i.node, i.offset),
            t.removeAllRanges(),
            s > r ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)));
        }
      }
      for (e = [], t = n; (t = t.parentNode); )
        t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
        (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
    }
  }
  var Cw = ln && 'documentMode' in document && 11 >= document.documentMode,
    Ur = null,
    wc = null,
    ms = null,
    Sc = !1;
  function Kd(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Sc ||
      Ur == null ||
      Ur !== Ia(r) ||
      ((r = Ur),
      'selectionStart' in r && nh(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ms && js(ms, r)) ||
        ((ms = r),
        (r = Ba(wc, 'onSelect')),
        0 < r.length &&
          ((e = new Zf('onSelect', 'select', null, e, n)), t.push({ event: e, listeners: r }), (e.target = Ur))));
  }
  function Mo(t, e) {
    var n = {};
    return (n[t.toLowerCase()] = e.toLowerCase()), (n['Webkit' + t] = 'webkit' + e), (n['Moz' + t] = 'moz' + e), n;
  }
  var Wr = {
      animationend: Mo('Animation', 'AnimationEnd'),
      animationiteration: Mo('Animation', 'AnimationIteration'),
      animationstart: Mo('Animation', 'AnimationStart'),
      transitionend: Mo('Transition', 'TransitionEnd'),
    },
    yu = {},
    fy = {};
  ln &&
    ((fy = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation),
    'TransitionEvent' in window || delete Wr.transitionend.transition);
  function Pl(t) {
    if (yu[t]) return yu[t];
    if (!Wr[t]) return t;
    var e = Wr[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in fy) return (yu[t] = e[n]);
    return t;
  }
  var hy = Pl('animationend'),
    dy = Pl('animationiteration'),
    py = Pl('animationstart'),
    gy = Pl('transitionend'),
    my = new Map(),
    Xd =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Jn(t, e) {
    my.set(t, e), Cr(e, [t]);
  }
  for (var xu = 0; xu < Xd.length; xu++) {
    var bu = Xd[xu],
      Dw = bu.toLowerCase(),
      Pw = bu[0].toUpperCase() + bu.slice(1);
    Jn(Dw, 'on' + Pw);
  }
  Jn(hy, 'onAnimationEnd');
  Jn(dy, 'onAnimationIteration');
  Jn(py, 'onAnimationStart');
  Jn('dblclick', 'onDoubleClick');
  Jn('focusin', 'onFocus');
  Jn('focusout', 'onBlur');
  Jn(gy, 'onTransitionEnd');
  di('onMouseEnter', ['mouseout', 'mouseover']);
  di('onMouseLeave', ['mouseout', 'mouseover']);
  di('onPointerEnter', ['pointerout', 'pointerover']);
  di('onPointerLeave', ['pointerout', 'pointerover']);
  Cr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
  Cr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
  Cr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  Cr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
  Cr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
  Cr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var is =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Nw = new Set('cancel close invalid load scroll toggle'.split(' ').concat(is));
  function Jd(t, e, n) {
    var r = t.type || 'unknown-event';
    (t.currentTarget = n), D_(r, e, void 0, t), (t.currentTarget = null);
  }
  function vy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var r = t[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (e)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
            Jd(i, a, u), (s = l);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== s && i.isPropagationStopped())
            )
              break e;
            Jd(i, a, u), (s = l);
          }
      }
    }
    if (Aa) throw ((t = yc), (Aa = !1), (yc = null), t);
  }
  function ue(t, e) {
    var n = e[Cc];
    n === void 0 && (n = e[Cc] = new Set());
    var r = t + '__bubble';
    n.has(r) || (yy(e, t, 2, !1), n.add(r));
  }
  function _u(t, e, n) {
    var r = 0;
    e && (r |= 4), yy(n, t, r, e);
  }
  var Io = '_reactListening' + Math.random().toString(36).slice(2);
  function zs(t) {
    if (!t[Io]) {
      (t[Io] = !0),
        Ev.forEach(function (n) {
          n !== 'selectionchange' && (Nw.has(n) || _u(n, !1, t), _u(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Io] || ((e[Io] = !0), _u('selectionchange', !1, e));
    }
  }
  function yy(t, e, n, r) {
    switch (ty(e)) {
      case 1:
        var i = Q_;
        break;
      case 4:
        i = H_;
        break;
      default:
        i = Xf;
    }
    (n = i.bind(null, e, n, t)),
      (i = void 0),
      !vc || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (i = !0),
      r
        ? i !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: i })
          : t.addEventListener(e, n, !0)
        : i !== void 0
          ? t.addEventListener(e, n, { passive: i })
          : t.addEventListener(e, n, !1);
  }
  function wu(t, e, n, r, i) {
    var s = r;
    if (!(e & 1) && !(e & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = hr(a)), o === null)) return;
            if (((l = o.tag), l === 5 || l === 6)) {
              r = s = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    Vv(function () {
      var u = s,
        c = qf(n),
        f = [];
      e: {
        var h = my.get(t);
        if (h !== void 0) {
          var d = Zf,
            g = t;
          switch (t) {
            case 'keypress':
              if (fa(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              d = aw;
              break;
            case 'focusin':
              (g = 'focus'), (d = gu);
              break;
            case 'focusout':
              (g = 'blur'), (d = gu);
              break;
            case 'beforeblur':
            case 'afterblur':
              d = gu;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              d = Bd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              d = G_;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              d = cw;
              break;
            case hy:
            case dy:
            case py:
              d = J_;
              break;
            case gy:
              d = hw;
              break;
            case 'scroll':
              d = q_;
              break;
            case 'wheel':
              d = pw;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              d = ew;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              d = Ud;
          }
          var v = (e & 4) !== 0,
            x = !v && t === 'scroll',
            p = v ? (h !== null ? h + 'Capture' : null) : h;
          v = [];
          for (var m = u, y; m !== null; ) {
            y = m;
            var b = y.stateNode;
            if (
              (y.tag === 5 && b !== null && ((y = b), p !== null && ((b = Is(m, p)), b != null && v.push(Bs(m, b, y)))),
              x)
            )
              break;
            m = m.return;
          }
          0 < v.length && ((h = new d(h, g, null, n, c)), f.push({ event: h, listeners: v }));
        }
      }
      if (!(e & 7)) {
        e: {
          if (
            ((h = t === 'mouseover' || t === 'pointerover'),
            (d = t === 'mouseout' || t === 'pointerout'),
            h && n !== gc && (g = n.relatedTarget || n.fromElement) && (hr(g) || g[un]))
          )
            break e;
          if (
            (d || h) &&
            ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
            d
              ? ((g = n.relatedTarget || n.toElement),
                (d = u),
                (g = g ? hr(g) : null),
                g !== null && ((x = Dr(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) && (g = null))
              : ((d = null), (g = u)),
            d !== g)
          ) {
            if (
              ((v = Bd),
              (b = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (m = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((v = Ud), (b = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
              (x = d == null ? h : $r(d)),
              (y = g == null ? h : $r(g)),
              (h = new v(b, m + 'leave', d, n, c)),
              (h.target = x),
              (h.relatedTarget = y),
              (b = null),
              hr(c) === u && ((v = new v(p, m + 'enter', g, n, c)), (v.target = y), (v.relatedTarget = x), (b = v)),
              (x = b),
              d && g)
            )
              t: {
                for (v = d, p = g, m = 0, y = v; y; y = Ir(y)) m++;
                for (y = 0, b = p; b; b = Ir(b)) y++;
                for (; 0 < m - y; ) (v = Ir(v)), m--;
                for (; 0 < y - m; ) (p = Ir(p)), y--;
                for (; m--; ) {
                  if (v === p || (p !== null && v === p.alternate)) break t;
                  (v = Ir(v)), (p = Ir(p));
                }
                v = null;
              }
            else v = null;
            d !== null && Zd(f, h, d, v, !1), g !== null && x !== null && Zd(f, x, g, v, !0);
          }
        }
        e: {
          if (
            ((h = u ? $r(u) : window),
            (d = h.nodeName && h.nodeName.toLowerCase()),
            d === 'select' || (d === 'input' && h.type === 'file'))
          )
            var _ = _w;
          else if (Qd(h))
            if (ay) _ = Ew;
            else {
              _ = Sw;
              var S = ww;
            }
          else
            (d = h.nodeName) &&
              d.toLowerCase() === 'input' &&
              (h.type === 'checkbox' || h.type === 'radio') &&
              (_ = kw);
          if (_ && (_ = _(t, u))) {
            oy(f, _, n, c);
            break e;
          }
          S && S(t, h, u),
            t === 'focusout' &&
              (S = h._wrapperState) &&
              S.controlled &&
              h.type === 'number' &&
              cc(h, 'number', h.value);
        }
        switch (((S = u ? $r(u) : window), t)) {
          case 'focusin':
            (Qd(S) || S.contentEditable === 'true') && ((Ur = S), (wc = u), (ms = null));
            break;
          case 'focusout':
            ms = wc = Ur = null;
            break;
          case 'mousedown':
            Sc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Sc = !1), Kd(f, n, c);
            break;
          case 'selectionchange':
            if (Cw) break;
          case 'keydown':
          case 'keyup':
            Kd(f, n, c);
        }
        var E;
        if (th)
          e: {
            switch (t) {
              case 'compositionstart':
                var O = 'onCompositionStart';
                break e;
              case 'compositionend':
                O = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                O = 'onCompositionUpdate';
                break e;
            }
            O = void 0;
          }
        else
          Vr
            ? iy(t, n) && (O = 'onCompositionEnd')
            : t === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
        O &&
          (ry &&
            n.locale !== 'ko' &&
            (Vr || O !== 'onCompositionStart'
              ? O === 'onCompositionEnd' && Vr && (E = ny())
              : ((Tn = c), (Jf = 'value' in Tn ? Tn.value : Tn.textContent), (Vr = !0))),
          (S = Ba(u, O)),
          0 < S.length &&
            ((O = new Vd(O, t, null, n, c)),
            f.push({ event: O, listeners: S }),
            E ? (O.data = E) : ((E = sy(n)), E !== null && (O.data = E)))),
          (E = mw ? vw(t, n) : yw(t, n)) &&
            ((u = Ba(u, 'onBeforeInput')),
            0 < u.length &&
              ((c = new Vd('onBeforeInput', 'beforeinput', null, n, c)),
              f.push({ event: c, listeners: u }),
              (c.data = E)));
      }
      vy(f, e);
    });
  }
  function Bs(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ba(t, e) {
    for (var n = e + 'Capture', r = []; t !== null; ) {
      var i = t,
        s = i.stateNode;
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = Is(t, n)),
        s != null && r.unshift(Bs(t, s, i)),
        (s = Is(t, e)),
        s != null && r.push(Bs(t, s, i))),
        (t = t.return);
    }
    return r;
  }
  function Ir(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function Zd(t, e, n, r, i) {
    for (var s = e._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        i
          ? ((l = Is(n, s)), l != null && o.unshift(Bs(n, l, a)))
          : i || ((l = Is(n, s)), l != null && o.push(Bs(n, l, a)))),
        (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var Mw = /\r\n?/g,
    Iw = /\u0000|\uFFFD/g;
  function ep(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Mw,
        `
`,
      )
      .replace(Iw, '');
  }
  function Ro(t, e, n) {
    if (((e = ep(e)), ep(t) !== e && n)) throw Error(N(425));
  }
  function Va() {}
  var kc = null,
    Ec = null;
  function Oc(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Tc = typeof setTimeout == 'function' ? setTimeout : void 0,
    Rw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    tp = typeof Promise == 'function' ? Promise : void 0,
    Aw =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof tp < 'u'
          ? function (t) {
              return tp.resolve(null).then(t).catch(Lw);
            }
          : Tc;
  function Lw(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Su(t, e) {
    var n = e,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((t.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$')) {
          if (r === 0) {
            t.removeChild(i), Ls(e);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = i;
    } while (n);
    Ls(e);
  }
  function Ln(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
        if (e === '/$') return null;
      }
    }
    return t;
  }
  function np(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (e === 0) return t;
          e--;
        } else n === '/$' && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Di = Math.random().toString(36).slice(2),
    Ut = '__reactFiber$' + Di,
    Vs = '__reactProps$' + Di,
    un = '__reactContainer$' + Di,
    Cc = '__reactEvents$' + Di,
    Fw = '__reactListeners$' + Di,
    jw = '__reactHandles$' + Di;
  function hr(t) {
    var e = t[Ut];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[un] || n[Ut])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = np(t); t !== null; ) {
            if ((n = t[Ut])) return n;
            t = np(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function fo(t) {
    return (t = t[Ut] || t[un]), !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t;
  }
  function $r(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(N(33));
  }
  function Nl(t) {
    return t[Vs] || null;
  }
  var Dc = [],
    Qr = -1;
  function Zn(t) {
    return { current: t };
  }
  function ce(t) {
    0 > Qr || ((t.current = Dc[Qr]), (Dc[Qr] = null), Qr--);
  }
  function ae(t, e) {
    Qr++, (Dc[Qr] = t.current), (t.current = e);
  }
  var Qn = {},
    Qe = Zn(Qn),
    st = Zn(!1),
    xr = Qn;
  function pi(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Qn;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = e[s];
    return (
      r &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = e),
        (t.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function ot(t) {
    return (t = t.childContextTypes), t != null;
  }
  function Ua() {
    ce(st), ce(Qe);
  }
  function rp(t, e, n) {
    if (Qe.current !== Qn) throw Error(N(168));
    ae(Qe, e), ae(st, n);
  }
  function xy(t, e, n) {
    var r = t.stateNode;
    if (((e = e.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in e)) throw Error(N(108, w_(t) || 'Unknown', i));
    return ge({}, n, r);
  }
  function Wa(t) {
    return (
      (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Qn),
      (xr = Qe.current),
      ae(Qe, t),
      ae(st, st.current),
      !0
    );
  }
  function ip(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(N(169));
    n ? ((t = xy(t, e, xr)), (r.__reactInternalMemoizedMergedChildContext = t), ce(st), ce(Qe), ae(Qe, t)) : ce(st),
      ae(st, n);
  }
  var nn = null,
    Ml = !1,
    ku = !1;
  function by(t) {
    nn === null ? (nn = [t]) : nn.push(t);
  }
  function zw(t) {
    (Ml = !0), by(t);
  }
  function er() {
    if (!ku && nn !== null) {
      ku = !0;
      var t = 0,
        e = ne;
      try {
        var n = nn;
        for (ne = 1; t < n.length; t++) {
          var r = n[t];
          do r = r(!0);
          while (r !== null);
        }
        (nn = null), (Ml = !1);
      } catch (i) {
        throw (nn !== null && (nn = nn.slice(t + 1)), Qv(Yf, er), i);
      } finally {
        (ne = e), (ku = !1);
      }
    }
    return null;
  }
  var Hr = [],
    qr = 0,
    $a = null,
    Qa = 0,
    yt = [],
    xt = 0,
    br = null,
    sn = 1,
    on = '';
  function ar(t, e) {
    (Hr[qr++] = Qa), (Hr[qr++] = $a), ($a = t), (Qa = e);
  }
  function _y(t, e, n) {
    (yt[xt++] = sn), (yt[xt++] = on), (yt[xt++] = br), (br = t);
    var r = sn;
    t = on;
    var i = 32 - Mt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - Mt(e) + i;
    if (30 < s) {
      var o = i - (i % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (sn = (1 << (32 - Mt(e) + i)) | (n << i) | r),
        (on = s + t);
    } else (sn = (1 << s) | (n << i) | r), (on = t);
  }
  function rh(t) {
    t.return !== null && (ar(t, 1), _y(t, 1, 0));
  }
  function ih(t) {
    for (; t === $a; ) ($a = Hr[--qr]), (Hr[qr] = null), (Qa = Hr[--qr]), (Hr[qr] = null);
    for (; t === br; )
      (br = yt[--xt]), (yt[xt] = null), (on = yt[--xt]), (yt[xt] = null), (sn = yt[--xt]), (yt[xt] = null);
  }
  var dt = null,
    ht = null,
    fe = !1,
    Pt = null;
  function wy(t, e) {
    var n = bt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = e),
      (n.return = t),
      (e = t.deletions),
      e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
  }
  function sp(t, e) {
    switch (t.tag) {
      case 5:
        var n = t.type;
        return (
          (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
          e !== null ? ((t.stateNode = e), (dt = t), (ht = Ln(e.firstChild)), !0) : !1
        );
      case 6:
        return (
          (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
          e !== null ? ((t.stateNode = e), (dt = t), (ht = null), !0) : !1
        );
      case 13:
        return (
          (e = e.nodeType !== 8 ? null : e),
          e !== null
            ? ((n = br !== null ? { id: sn, overflow: on } : null),
              (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
              (n = bt(18, null, null, 0)),
              (n.stateNode = e),
              (n.return = t),
              (t.child = n),
              (dt = t),
              (ht = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Pc(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Nc(t) {
    if (fe) {
      var e = ht;
      if (e) {
        var n = e;
        if (!sp(t, e)) {
          if (Pc(t)) throw Error(N(418));
          e = Ln(n.nextSibling);
          var r = dt;
          e && sp(t, e) ? wy(r, n) : ((t.flags = (t.flags & -4097) | 2), (fe = !1), (dt = t));
        }
      } else {
        if (Pc(t)) throw Error(N(418));
        (t.flags = (t.flags & -4097) | 2), (fe = !1), (dt = t);
      }
    }
  }
  function op(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    dt = t;
  }
  function Ao(t) {
    if (t !== dt) return !1;
    if (!fe) return op(t), (fe = !0), !1;
    var e;
    if (
      ((e = t.tag !== 3) &&
        !(e = t.tag !== 5) &&
        ((e = t.type), (e = e !== 'head' && e !== 'body' && !Oc(t.type, t.memoizedProps))),
      e && (e = ht))
    ) {
      if (Pc(t)) throw (Sy(), Error(N(418)));
      for (; e; ) wy(t, e), (e = Ln(e.nextSibling));
    }
    if ((op(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(N(317));
      e: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) {
            var n = t.data;
            if (n === '/$') {
              if (e === 0) {
                ht = Ln(t.nextSibling);
                break e;
              }
              e--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
          }
          t = t.nextSibling;
        }
        ht = null;
      }
    } else ht = dt ? Ln(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Sy() {
    for (var t = ht; t; ) t = Ln(t.nextSibling);
  }
  function gi() {
    (ht = dt = null), (fe = !1);
  }
  function sh(t) {
    Pt === null ? (Pt = [t]) : Pt.push(t);
  }
  var Bw = pn.ReactCurrentBatchConfig;
  function Ui(t, e, n) {
    if (((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(N(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(N(147, t));
        var i = r,
          s = '' + t;
        return e !== null && e.ref !== null && typeof e.ref == 'function' && e.ref._stringRef === s
          ? e.ref
          : ((e = function (o) {
              var a = i.refs;
              o === null ? delete a[s] : (a[s] = o);
            }),
            (e._stringRef = s),
            e);
      }
      if (typeof t != 'string') throw Error(N(284));
      if (!n._owner) throw Error(N(290, t));
    }
    return t;
  }
  function Lo(t, e) {
    throw (
      ((t = Object.prototype.toString.call(e)),
      Error(N(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
    );
  }
  function ap(t) {
    var e = t._init;
    return e(t._payload);
  }
  function ky(t) {
    function e(p, m) {
      if (t) {
        var y = p.deletions;
        y === null ? ((p.deletions = [m]), (p.flags |= 16)) : y.push(m);
      }
    }
    function n(p, m) {
      if (!t) return null;
      for (; m !== null; ) e(p, m), (m = m.sibling);
      return null;
    }
    function r(p, m) {
      for (p = new Map(); m !== null; ) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
      return p;
    }
    function i(p, m) {
      return (p = Bn(p, m)), (p.index = 0), (p.sibling = null), p;
    }
    function s(p, m, y) {
      return (
        (p.index = y),
        t
          ? ((y = p.alternate), y !== null ? ((y = y.index), y < m ? ((p.flags |= 2), m) : y) : ((p.flags |= 2), m))
          : ((p.flags |= 1048576), m)
      );
    }
    function o(p) {
      return t && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, m, y, b) {
      return m === null || m.tag !== 6
        ? ((m = Nu(y, p.mode, b)), (m.return = p), m)
        : ((m = i(m, y)), (m.return = p), m);
    }
    function l(p, m, y, b) {
      var _ = y.type;
      return _ === Br
        ? c(p, m, y.props.children, b, y.key)
        : m !== null &&
            (m.elementType === _ || (typeof _ == 'object' && _ !== null && _.$$typeof === xn && ap(_) === m.type))
          ? ((b = i(m, y.props)), (b.ref = Ui(p, m, y)), (b.return = p), b)
          : ((b = ya(y.type, y.key, y.props, null, p.mode, b)), (b.ref = Ui(p, m, y)), (b.return = p), b);
    }
    function u(p, m, y, b) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== y.containerInfo ||
        m.stateNode.implementation !== y.implementation
        ? ((m = Mu(y, p.mode, b)), (m.return = p), m)
        : ((m = i(m, y.children || [])), (m.return = p), m);
    }
    function c(p, m, y, b, _) {
      return m === null || m.tag !== 7
        ? ((m = vr(y, p.mode, b, _)), (m.return = p), m)
        : ((m = i(m, y)), (m.return = p), m);
    }
    function f(p, m, y) {
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return (m = Nu('' + m, p.mode, y)), (m.return = p), m;
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case Eo:
            return (y = ya(m.type, m.key, m.props, null, p.mode, y)), (y.ref = Ui(p, null, m)), (y.return = p), y;
          case zr:
            return (m = Mu(m, p.mode, y)), (m.return = p), m;
          case xn:
            var b = m._init;
            return f(p, b(m._payload), y);
        }
        if (ns(m) || Fi(m)) return (m = vr(m, p.mode, y, null)), (m.return = p), m;
        Lo(p, m);
      }
      return null;
    }
    function h(p, m, y, b) {
      var _ = m !== null ? m.key : null;
      if ((typeof y == 'string' && y !== '') || typeof y == 'number') return _ !== null ? null : a(p, m, '' + y, b);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case Eo:
            return y.key === _ ? l(p, m, y, b) : null;
          case zr:
            return y.key === _ ? u(p, m, y, b) : null;
          case xn:
            return (_ = y._init), h(p, m, _(y._payload), b);
        }
        if (ns(y) || Fi(y)) return _ !== null ? null : c(p, m, y, b, null);
        Lo(p, y);
      }
      return null;
    }
    function d(p, m, y, b, _) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number') return (p = p.get(y) || null), a(m, p, '' + b, _);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case Eo:
            return (p = p.get(b.key === null ? y : b.key) || null), l(m, p, b, _);
          case zr:
            return (p = p.get(b.key === null ? y : b.key) || null), u(m, p, b, _);
          case xn:
            var S = b._init;
            return d(p, m, y, S(b._payload), _);
        }
        if (ns(b) || Fi(b)) return (p = p.get(y) || null), c(m, p, b, _, null);
        Lo(m, b);
      }
      return null;
    }
    function g(p, m, y, b) {
      for (var _ = null, S = null, E = m, O = (m = 0), D = null; E !== null && O < y.length; O++) {
        E.index > O ? ((D = E), (E = null)) : (D = E.sibling);
        var P = h(p, E, y[O], b);
        if (P === null) {
          E === null && (E = D);
          break;
        }
        t && E && P.alternate === null && e(p, E),
          (m = s(P, m, O)),
          S === null ? (_ = P) : (S.sibling = P),
          (S = P),
          (E = D);
      }
      if (O === y.length) return n(p, E), fe && ar(p, O), _;
      if (E === null) {
        for (; O < y.length; O++)
          (E = f(p, y[O], b)), E !== null && ((m = s(E, m, O)), S === null ? (_ = E) : (S.sibling = E), (S = E));
        return fe && ar(p, O), _;
      }
      for (E = r(p, E); O < y.length; O++)
        (D = d(E, p, O, y[O], b)),
          D !== null &&
            (t && D.alternate !== null && E.delete(D.key === null ? O : D.key),
            (m = s(D, m, O)),
            S === null ? (_ = D) : (S.sibling = D),
            (S = D));
      return (
        t &&
          E.forEach(function (j) {
            return e(p, j);
          }),
        fe && ar(p, O),
        _
      );
    }
    function v(p, m, y, b) {
      var _ = Fi(y);
      if (typeof _ != 'function') throw Error(N(150));
      if (((y = _.call(y)), y == null)) throw Error(N(151));
      for (var S = (_ = null), E = m, O = (m = 0), D = null, P = y.next(); E !== null && !P.done; O++, P = y.next()) {
        E.index > O ? ((D = E), (E = null)) : (D = E.sibling);
        var j = h(p, E, P.value, b);
        if (j === null) {
          E === null && (E = D);
          break;
        }
        t && E && j.alternate === null && e(p, E),
          (m = s(j, m, O)),
          S === null ? (_ = j) : (S.sibling = j),
          (S = j),
          (E = D);
      }
      if (P.done) return n(p, E), fe && ar(p, O), _;
      if (E === null) {
        for (; !P.done; O++, P = y.next())
          (P = f(p, P.value, b)), P !== null && ((m = s(P, m, O)), S === null ? (_ = P) : (S.sibling = P), (S = P));
        return fe && ar(p, O), _;
      }
      for (E = r(p, E); !P.done; O++, P = y.next())
        (P = d(E, p, O, P.value, b)),
          P !== null &&
            (t && P.alternate !== null && E.delete(P.key === null ? O : P.key),
            (m = s(P, m, O)),
            S === null ? (_ = P) : (S.sibling = P),
            (S = P));
      return (
        t &&
          E.forEach(function (z) {
            return e(p, z);
          }),
        fe && ar(p, O),
        _
      );
    }
    function x(p, m, y, b) {
      if (
        (typeof y == 'object' && y !== null && y.type === Br && y.key === null && (y = y.props.children),
        typeof y == 'object' && y !== null)
      ) {
        switch (y.$$typeof) {
          case Eo:
            e: {
              for (var _ = y.key, S = m; S !== null; ) {
                if (S.key === _) {
                  if (((_ = y.type), _ === Br)) {
                    if (S.tag === 7) {
                      n(p, S.sibling), (m = i(S, y.props.children)), (m.return = p), (p = m);
                      break e;
                    }
                  } else if (
                    S.elementType === _ ||
                    (typeof _ == 'object' && _ !== null && _.$$typeof === xn && ap(_) === S.type)
                  ) {
                    n(p, S.sibling), (m = i(S, y.props)), (m.ref = Ui(p, S, y)), (m.return = p), (p = m);
                    break e;
                  }
                  n(p, S);
                  break;
                } else e(p, S);
                S = S.sibling;
              }
              y.type === Br
                ? ((m = vr(y.props.children, p.mode, b, y.key)), (m.return = p), (p = m))
                : ((b = ya(y.type, y.key, y.props, null, p.mode, b)), (b.ref = Ui(p, m, y)), (b.return = p), (p = b));
            }
            return o(p);
          case zr:
            e: {
              for (S = y.key; m !== null; ) {
                if (m.key === S)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === y.containerInfo &&
                    m.stateNode.implementation === y.implementation
                  ) {
                    n(p, m.sibling), (m = i(m, y.children || [])), (m.return = p), (p = m);
                    break e;
                  } else {
                    n(p, m);
                    break;
                  }
                else e(p, m);
                m = m.sibling;
              }
              (m = Mu(y, p.mode, b)), (m.return = p), (p = m);
            }
            return o(p);
          case xn:
            return (S = y._init), x(p, m, S(y._payload), b);
        }
        if (ns(y)) return g(p, m, y, b);
        if (Fi(y)) return v(p, m, y, b);
        Lo(p, y);
      }
      return (typeof y == 'string' && y !== '') || typeof y == 'number'
        ? ((y = '' + y),
          m !== null && m.tag === 6
            ? (n(p, m.sibling), (m = i(m, y)), (m.return = p), (p = m))
            : (n(p, m), (m = Nu(y, p.mode, b)), (m.return = p), (p = m)),
          o(p))
        : n(p, m);
    }
    return x;
  }
  var mi = ky(!0),
    Ey = ky(!1),
    Ha = Zn(null),
    qa = null,
    Yr = null,
    oh = null;
  function ah() {
    oh = Yr = qa = null;
  }
  function lh(t) {
    var e = Ha.current;
    ce(Ha), (t._currentValue = e);
  }
  function Mc(t, e, n) {
    for (; t !== null; ) {
      var r = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
          : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function oi(t, e) {
    (qa = t),
      (oh = Yr = null),
      (t = t.dependencies),
      t !== null && t.firstContext !== null && (t.lanes & e && (it = !0), (t.firstContext = null));
  }
  function St(t) {
    var e = t._currentValue;
    if (oh !== t)
      if (((t = { context: t, memoizedValue: e, next: null }), Yr === null)) {
        if (qa === null) throw Error(N(308));
        (Yr = t), (qa.dependencies = { lanes: 0, firstContext: t });
      } else Yr = Yr.next = t;
    return e;
  }
  var dr = null;
  function uh(t) {
    dr === null ? (dr = [t]) : dr.push(t);
  }
  function Oy(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? ((n.next = n), uh(e)) : ((n.next = i.next), (i.next = n)), (e.interleaved = n), cn(t, r);
  }
  function cn(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
      (t.childLanes |= e), (n = t.alternate), n !== null && (n.childLanes |= e), (n = t), (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var bn = !1;
  function ch(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ty(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function an(t, e) {
    return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Fn(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), q & 2)) {
      var i = r.pending;
      return i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)), (r.pending = e), cn(t, n);
    }
    return (
      (i = r.interleaved),
      i === null ? ((e.next = e), uh(r)) : ((e.next = i.next), (i.next = e)),
      (r.interleaved = e),
      cn(t, n)
    );
  }
  function ha(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
      var r = e.lanes;
      (r &= t.pendingLanes), (n |= r), (e.lanes = n), Gf(t, n);
    }
  }
  function lp(t, e) {
    var n = t.updateQueue,
      r = t.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
        } while (n !== null);
        s === null ? (i = s = e) : (s = s.next = e);
      } else i = s = e;
      (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate), t === null ? (n.firstBaseUpdate = e) : (t.next = e), (n.lastBaseUpdate = e);
  }
  function Ya(t, e, n, r) {
    var i = t.updateQueue;
    bn = !1;
    var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a,
        u = l.next;
      (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
      var c = t.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
    }
    if (s !== null) {
      var f = i.baseState;
      (o = 0), (c = u = l = null), (a = s);
      do {
        var h = a.lane,
          d = a.eventTime;
        if ((r & h) === h) {
          c !== null &&
            (c = c.next = { eventTime: d, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
          e: {
            var g = t,
              v = a;
            switch (((h = e), (d = n), v.tag)) {
              case 1:
                if (((g = v.payload), typeof g == 'function')) {
                  f = g.call(d, f, h);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (((g = v.payload), (h = typeof g == 'function' ? g.call(d, f, h) : g), h == null)) break e;
                f = ge({}, f, h);
                break e;
              case 2:
                bn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((t.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
        } else
          (d = { eventTime: d, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
            c === null ? ((u = c = d), (l = f)) : (c = c.next = d),
            (o |= h);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
        }
      } while (!0);
      if (
        (c === null && (l = f),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (e = i.shared.interleaved),
        e !== null)
      ) {
        i = e;
        do (o |= i.lane), (i = i.next);
        while (i !== e);
      } else s === null && (i.shared.lanes = 0);
      (wr |= o), (t.lanes = o), (t.memoizedState = f);
    }
  }
  function up(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
      for (e = 0; e < t.length; e++) {
        var r = t[e],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(N(191, i));
          i.call(r);
        }
      }
  }
  var ho = {},
    Ht = Zn(ho),
    Us = Zn(ho),
    Ws = Zn(ho);
  function pr(t) {
    if (t === ho) throw Error(N(174));
    return t;
  }
  function fh(t, e) {
    switch ((ae(Ws, e), ae(Us, t), ae(Ht, ho), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) ? e.namespaceURI : hc(null, '');
        break;
      default:
        (t = t === 8 ? e.parentNode : e), (e = t.namespaceURI || null), (t = t.tagName), (e = hc(e, t));
    }
    ce(Ht), ae(Ht, e);
  }
  function vi() {
    ce(Ht), ce(Us), ce(Ws);
  }
  function Cy(t) {
    pr(Ws.current);
    var e = pr(Ht.current),
      n = hc(e, t.type);
    e !== n && (ae(Us, t), ae(Ht, n));
  }
  function hh(t) {
    Us.current === t && (ce(Ht), ce(Us));
  }
  var he = Zn(0);
  function Ga(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Eu = [];
  function dh() {
    for (var t = 0; t < Eu.length; t++) Eu[t]._workInProgressVersionPrimary = null;
    Eu.length = 0;
  }
  var da = pn.ReactCurrentDispatcher,
    Ou = pn.ReactCurrentBatchConfig,
    _r = 0,
    pe = null,
    Ce = null,
    Ie = null,
    Ka = !1,
    vs = !1,
    $s = 0,
    Vw = 0;
  function Ue() {
    throw Error(N(321));
  }
  function ph(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!At(t[n], e[n])) return !1;
    return !0;
  }
  function gh(t, e, n, r, i, s) {
    if (
      ((_r = s),
      (pe = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (da.current = t === null || t.memoizedState === null ? Qw : Hw),
      (t = n(r, i)),
      vs)
    ) {
      s = 0;
      do {
        if (((vs = !1), ($s = 0), 25 <= s)) throw Error(N(301));
        (s += 1), (Ie = Ce = null), (e.updateQueue = null), (da.current = qw), (t = n(r, i));
      } while (vs);
    }
    if (((da.current = Xa), (e = Ce !== null && Ce.next !== null), (_r = 0), (Ie = Ce = pe = null), (Ka = !1), e))
      throw Error(N(300));
    return t;
  }
  function mh() {
    var t = $s !== 0;
    return ($s = 0), t;
  }
  function jt() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? (pe.memoizedState = Ie = t) : (Ie = Ie.next = t), Ie;
  }
  function kt() {
    if (Ce === null) {
      var t = pe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ce.next;
    var e = Ie === null ? pe.memoizedState : Ie.next;
    if (e !== null) (Ie = e), (Ce = t);
    else {
      if (t === null) throw Error(N(310));
      (Ce = t),
        (t = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Ie === null ? (pe.memoizedState = Ie = t) : (Ie = Ie.next = t);
    }
    return Ie;
  }
  function Qs(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function Tu(t) {
    var e = kt(),
      n = e.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = t;
    var r = Ce,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var o = i.next;
        (i.next = s.next), (s.next = o);
      }
      (r.baseQueue = i = s), (n.pending = null);
    }
    if (i !== null) {
      (s = i.next), (r = r.baseState);
      var a = (o = null),
        l = null,
        u = s;
      do {
        var c = u.lane;
        if ((_r & c) === c)
          l !== null &&
            (l = l.next =
              { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
            (r = u.hasEagerState ? u.eagerState : t(r, u.action));
        else {
          var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
          l === null ? ((a = l = f), (o = r)) : (l = l.next = f), (pe.lanes |= c), (wr |= c);
        }
        u = u.next;
      } while (u !== null && u !== s);
      l === null ? (o = r) : (l.next = a),
        At(r, e.memoizedState) || (it = !0),
        (e.memoizedState = r),
        (e.baseState = o),
        (e.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((t = n.interleaved), t !== null)) {
      i = t;
      do (s = i.lane), (pe.lanes |= s), (wr |= s), (i = i.next);
      while (i !== t);
    } else i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
  }
  function Cu(t) {
    var e = kt(),
      n = e.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
      i = n.pending,
      s = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = (i = i.next);
      do (s = t(s, o.action)), (o = o.next);
      while (o !== i);
      At(s, e.memoizedState) || (it = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function Dy() {}
  function Py(t, e) {
    var n = pe,
      r = kt(),
      i = e(),
      s = !At(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (it = !0)),
      (r = r.queue),
      vh(Iy.bind(null, n, r, t), [t]),
      r.getSnapshot !== e || s || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Hs(9, My.bind(null, n, r, i, e), void 0, null), Le === null)) throw Error(N(349));
      _r & 30 || Ny(n, e, i);
    }
    return i;
  }
  function Ny(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = pe.updateQueue),
      e === null
        ? ((e = { lastEffect: null, stores: null }), (pe.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function My(t, e, n, r) {
    (e.value = n), (e.getSnapshot = r), Ry(e) && Ay(t);
  }
  function Iy(t, e, n) {
    return n(function () {
      Ry(e) && Ay(t);
    });
  }
  function Ry(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !At(t, n);
    } catch {
      return !0;
    }
  }
  function Ay(t) {
    var e = cn(t, 1);
    e !== null && It(e, t, 1, -1);
  }
  function cp(t) {
    var e = jt();
    return (
      typeof t == 'function' && (t = t()),
      (e.memoizedState = e.baseState = t),
      (t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qs,
        lastRenderedState: t,
      }),
      (e.queue = t),
      (t = t.dispatch = $w.bind(null, pe, t)),
      [e.memoizedState, t]
    );
  }
  function Hs(t, e, n, r) {
    return (
      (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
      (e = pe.updateQueue),
      e === null
        ? ((e = { lastEffect: null, stores: null }), (pe.updateQueue = e), (e.lastEffect = t.next = t))
        : ((n = e.lastEffect),
          n === null ? (e.lastEffect = t.next = t) : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
      t
    );
  }
  function Ly() {
    return kt().memoizedState;
  }
  function pa(t, e, n, r) {
    var i = jt();
    (pe.flags |= t), (i.memoizedState = Hs(1 | e, n, void 0, r === void 0 ? null : r));
  }
  function Il(t, e, n, r) {
    var i = kt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ce !== null) {
      var o = Ce.memoizedState;
      if (((s = o.destroy), r !== null && ph(r, o.deps))) {
        i.memoizedState = Hs(e, n, s, r);
        return;
      }
    }
    (pe.flags |= t), (i.memoizedState = Hs(1 | e, n, s, r));
  }
  function fp(t, e) {
    return pa(8390656, 8, t, e);
  }
  function vh(t, e) {
    return Il(2048, 8, t, e);
  }
  function Fy(t, e) {
    return Il(4, 2, t, e);
  }
  function jy(t, e) {
    return Il(4, 4, t, e);
  }
  function zy(t, e) {
    if (typeof e == 'function')
      return (
        (t = t()),
        e(t),
        function () {
          e(null);
        }
      );
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function By(t, e, n) {
    return (n = n != null ? n.concat([t]) : null), Il(4, 4, zy.bind(null, e, t), n);
  }
  function yh() {}
  function Vy(t, e) {
    var n = kt();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && ph(e, r[1]) ? r[0] : ((n.memoizedState = [t, e]), t);
  }
  function Uy(t, e) {
    var n = kt();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && ph(e, r[1]) ? r[0] : ((t = t()), (n.memoizedState = [t, e]), t);
  }
  function Wy(t, e, n) {
    return _r & 21
      ? (At(n, e) || ((n = Yv()), (pe.lanes |= n), (wr |= n), (t.baseState = !0)), e)
      : (t.baseState && ((t.baseState = !1), (it = !0)), (t.memoizedState = n));
  }
  function Uw(t, e) {
    var n = ne;
    (ne = n !== 0 && 4 > n ? n : 4), t(!0);
    var r = Ou.transition;
    Ou.transition = {};
    try {
      t(!1), e();
    } finally {
      (ne = n), (Ou.transition = r);
    }
  }
  function $y() {
    return kt().memoizedState;
  }
  function Ww(t, e, n) {
    var r = zn(t);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Qy(t))) Hy(e, n);
    else if (((n = Oy(t, e, n, r)), n !== null)) {
      var i = Ye();
      It(n, t, r, i), qy(n, e, r);
    }
  }
  function $w(t, e, n) {
    var r = zn(t),
      i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qy(t)) Hy(e, i);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
        try {
          var o = e.lastRenderedState,
            a = s(o, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), At(a, o))) {
            var l = e.interleaved;
            l === null ? ((i.next = i), uh(e)) : ((i.next = l.next), (l.next = i)), (e.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Oy(t, e, i, r)), n !== null && ((i = Ye()), It(n, t, r, i), qy(n, e, r));
    }
  }
  function Qy(t) {
    var e = t.alternate;
    return t === pe || (e !== null && e === pe);
  }
  function Hy(t, e) {
    vs = Ka = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
  }
  function qy(t, e, n) {
    if (n & 4194240) {
      var r = e.lanes;
      (r &= t.pendingLanes), (n |= r), (e.lanes = n), Gf(t, n);
    }
  }
  var Xa = {
      readContext: St,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useMutableSource: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      unstable_isNewReconciler: !1,
    },
    Qw = {
      readContext: St,
      useCallback: function (t, e) {
        return (jt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: St,
      useEffect: fp,
      useImperativeHandle: function (t, e, n) {
        return (n = n != null ? n.concat([t]) : null), pa(4194308, 4, zy.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return pa(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        return pa(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = jt();
        return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
      },
      useReducer: function (t, e, n) {
        var r = jt();
        return (
          (e = n !== void 0 ? n(e) : e),
          (r.memoizedState = r.baseState = e),
          (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e,
          }),
          (r.queue = t),
          (t = t.dispatch = Ww.bind(null, pe, t)),
          [r.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = jt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: cp,
      useDebugValue: yh,
      useDeferredValue: function (t) {
        return (jt().memoizedState = t);
      },
      useTransition: function () {
        var t = cp(!1),
          e = t[0];
        return (t = Uw.bind(null, t[1])), (jt().memoizedState = t), [e, t];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (t, e, n) {
        var r = pe,
          i = jt();
        if (fe) {
          if (n === void 0) throw Error(N(407));
          n = n();
        } else {
          if (((n = e()), Le === null)) throw Error(N(349));
          _r & 30 || Ny(r, e, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (i.queue = s),
          fp(Iy.bind(null, r, s, t), [t]),
          (r.flags |= 2048),
          Hs(9, My.bind(null, r, s, n, e), void 0, null),
          n
        );
      },
      useId: function () {
        var t = jt(),
          e = Le.identifierPrefix;
        if (fe) {
          var n = on,
            r = sn;
          (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
            (e = ':' + e + 'R' + n),
            (n = $s++),
            0 < n && (e += 'H' + n.toString(32)),
            (e += ':');
        } else (n = Vw++), (e = ':' + e + 'r' + n.toString(32) + ':');
        return (t.memoizedState = e);
      },
      unstable_isNewReconciler: !1,
    },
    Hw = {
      readContext: St,
      useCallback: Vy,
      useContext: St,
      useEffect: vh,
      useImperativeHandle: By,
      useInsertionEffect: Fy,
      useLayoutEffect: jy,
      useMemo: Uy,
      useReducer: Tu,
      useRef: Ly,
      useState: function () {
        return Tu(Qs);
      },
      useDebugValue: yh,
      useDeferredValue: function (t) {
        var e = kt();
        return Wy(e, Ce.memoizedState, t);
      },
      useTransition: function () {
        var t = Tu(Qs)[0],
          e = kt().memoizedState;
        return [t, e];
      },
      useMutableSource: Dy,
      useSyncExternalStore: Py,
      useId: $y,
      unstable_isNewReconciler: !1,
    },
    qw = {
      readContext: St,
      useCallback: Vy,
      useContext: St,
      useEffect: vh,
      useImperativeHandle: By,
      useInsertionEffect: Fy,
      useLayoutEffect: jy,
      useMemo: Uy,
      useReducer: Cu,
      useRef: Ly,
      useState: function () {
        return Cu(Qs);
      },
      useDebugValue: yh,
      useDeferredValue: function (t) {
        var e = kt();
        return Ce === null ? (e.memoizedState = t) : Wy(e, Ce.memoizedState, t);
      },
      useTransition: function () {
        var t = Cu(Qs)[0],
          e = kt().memoizedState;
        return [t, e];
      },
      useMutableSource: Dy,
      useSyncExternalStore: Py,
      useId: $y,
      unstable_isNewReconciler: !1,
    };
  function Ct(t, e) {
    if (t && t.defaultProps) {
      (e = ge({}, e)), (t = t.defaultProps);
      for (var n in t) e[n] === void 0 && (e[n] = t[n]);
      return e;
    }
    return e;
  }
  function Ic(t, e, n, r) {
    (e = t.memoizedState),
      (n = n(r, e)),
      (n = n == null ? e : ge({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Rl = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? Dr(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var r = Ye(),
        i = zn(t),
        s = an(r, i);
      (s.payload = e), n != null && (s.callback = n), (e = Fn(t, s, i)), e !== null && (It(e, t, i, r), ha(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var r = Ye(),
        i = zn(t),
        s = an(r, i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Fn(t, s, i)),
        e !== null && (It(e, t, i, r), ha(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ye(),
        r = zn(t),
        i = an(n, r);
      (i.tag = 2), e != null && (i.callback = e), (e = Fn(t, i, r)), e !== null && (It(e, t, r, n), ha(e, t, r));
    },
  };
  function hp(t, e, n, r, i, s, o) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(r, s, o)
        : e.prototype && e.prototype.isPureReactComponent
          ? !js(n, r) || !js(i, s)
          : !0
    );
  }
  function Yy(t, e, n) {
    var r = !1,
      i = Qn,
      s = e.contextType;
    return (
      typeof s == 'object' && s !== null
        ? (s = St(s))
        : ((i = ot(e) ? xr : Qe.current), (r = e.contextTypes), (s = (r = r != null) ? pi(t, i) : Qn)),
      (e = new e(n, s)),
      (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
      (e.updater = Rl),
      (t.stateNode = e),
      (e._reactInternals = t),
      r &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = i),
        (t.__reactInternalMemoizedMaskedChildContext = s)),
      e
    );
  }
  function dp(t, e, n, r) {
    (t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, r),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(n, r),
      e.state !== t && Rl.enqueueReplaceState(e, e.state, null);
  }
  function Rc(t, e, n, r) {
    var i = t.stateNode;
    (i.props = n), (i.state = t.memoizedState), (i.refs = {}), ch(t);
    var s = e.contextType;
    typeof s == 'object' && s !== null ? (i.context = St(s)) : ((s = ot(e) ? xr : Qe.current), (i.context = pi(t, s))),
      (i.state = t.memoizedState),
      (s = e.getDerivedStateFromProps),
      typeof s == 'function' && (Ic(t, e, s, n), (i.state = t.memoizedState)),
      typeof e.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
        ((e = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
        e !== i.state && Rl.enqueueReplaceState(i, i.state, null),
        Ya(t, n, i, r),
        (i.state = t.memoizedState)),
      typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
  }
  function yi(t, e) {
    try {
      var n = '',
        r = e;
      do (n += __(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: t, source: e, stack: i, digest: null };
  }
  function Du(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
  }
  function Ac(t, e) {
    try {
      console.error(e.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Yw = typeof WeakMap == 'function' ? WeakMap : Map;
  function Gy(t, e, n) {
    (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = e.value;
    return (
      (n.callback = function () {
        Za || ((Za = !0), (Qc = r)), Ac(t, e);
      }),
      n
    );
  }
  function Ky(t, e, n) {
    (n = an(-1, n)), (n.tag = 3);
    var r = t.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var i = e.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Ac(t, e);
        });
    }
    var s = t.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == 'function' &&
        (n.callback = function () {
          Ac(t, e), typeof r != 'function' && (jn === null ? (jn = new Set([this])) : jn.add(this));
          var o = e.stack;
          this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' });
        }),
      n
    );
  }
  function pp(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new Yw();
      var i = new Set();
      r.set(e, i);
    } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
    i.has(n) || (i.add(n), (t = l1.bind(null, t, e, n)), e.then(t, t));
  }
  function gp(t) {
    do {
      var e;
      if (((e = t.tag === 13) && ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)), e)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function mp(t, e, n, r, i) {
    return t.mode & 1
      ? ((t.flags |= 65536), (t.lanes = i), t)
      : (t === e
          ? (t.flags |= 65536)
          : ((t.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((e = an(-1, 1)), (e.tag = 2), Fn(n, e, 1))),
            (n.lanes |= 1)),
        t);
  }
  var Gw = pn.ReactCurrentOwner,
    it = !1;
  function qe(t, e, n, r) {
    e.child = t === null ? Ey(e, null, n, r) : mi(e, t.child, n, r);
  }
  function vp(t, e, n, r, i) {
    n = n.render;
    var s = e.ref;
    return (
      oi(e, i),
      (r = gh(t, e, n, r, s, i)),
      (n = mh()),
      t !== null && !it
        ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), fn(t, e, i))
        : (fe && n && rh(e), (e.flags |= 1), qe(t, e, r, i), e.child)
    );
  }
  function yp(t, e, n, r, i) {
    if (t === null) {
      var s = n.type;
      return typeof s == 'function' &&
        !Oh(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((e.tag = 15), (e.type = s), Xy(t, e, s, r, i))
        : ((t = ya(n.type, null, r, e, e.mode, i)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((s = t.child), !(t.lanes & i))) {
      var o = s.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : js), n(o, r) && t.ref === e.ref)) return fn(t, e, i);
    }
    return (e.flags |= 1), (t = Bn(s, r)), (t.ref = e.ref), (t.return = e), (e.child = t);
  }
  function Xy(t, e, n, r, i) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (js(s, r) && t.ref === e.ref)
        if (((it = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0)) t.flags & 131072 && (it = !0);
        else return (e.lanes = t.lanes), fn(t, e, i);
    }
    return Lc(t, e, n, r, i);
  }
  function Jy(t, e, n) {
    var r = e.pendingProps,
      i = r.children,
      s = t !== null ? t.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(e.mode & 1))
        (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ae(Kr, ft), (ft |= n);
      else {
        if (!(n & 1073741824))
          return (
            (t = s !== null ? s.baseLanes | n : n),
            (e.lanes = e.childLanes = 1073741824),
            (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
            (e.updateQueue = null),
            ae(Kr, ft),
            (ft |= t),
            null
          );
        (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = s !== null ? s.baseLanes : n),
          ae(Kr, ft),
          (ft |= r);
      }
    else s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n), ae(Kr, ft), (ft |= r);
    return qe(t, e, i, n), e.child;
  }
  function Zy(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) && ((e.flags |= 512), (e.flags |= 2097152));
  }
  function Lc(t, e, n, r, i) {
    var s = ot(n) ? xr : Qe.current;
    return (
      (s = pi(e, s)),
      oi(e, i),
      (n = gh(t, e, n, r, s, i)),
      (r = mh()),
      t !== null && !it
        ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), fn(t, e, i))
        : (fe && r && rh(e), (e.flags |= 1), qe(t, e, n, i), e.child)
    );
  }
  function xp(t, e, n, r, i) {
    if (ot(n)) {
      var s = !0;
      Wa(e);
    } else s = !1;
    if ((oi(e, i), e.stateNode === null)) ga(t, e), Yy(e, n, r), Rc(e, n, r, i), (r = !0);
    else if (t === null) {
      var o = e.stateNode,
        a = e.memoizedProps;
      o.props = a;
      var l = o.context,
        u = n.contextType;
      typeof u == 'object' && u !== null ? (u = St(u)) : ((u = ot(n) ? xr : Qe.current), (u = pi(e, u)));
      var c = n.getDerivedStateFromProps,
        f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
      f ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
        ((a !== r || l !== u) && dp(e, o, r, u)),
        (bn = !1);
      var h = e.memoizedState;
      (o.state = h),
        Ya(e, r, o, i),
        (l = e.memoizedState),
        a !== r || h !== l || st.current || bn
          ? (typeof c == 'function' && (Ic(e, n, c, r), (l = e.memoizedState)),
            (a = bn || hp(e, n, a, r, h, l, u))
              ? (f ||
                  (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = r),
                (e.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = u),
            (r = a))
          : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308), (r = !1));
    } else {
      (o = e.stateNode),
        Ty(t, e),
        (a = e.memoizedProps),
        (u = e.type === e.elementType ? a : Ct(e.type, a)),
        (o.props = u),
        (f = e.pendingProps),
        (h = o.context),
        (l = n.contextType),
        typeof l == 'object' && l !== null ? (l = St(l)) : ((l = ot(n) ? xr : Qe.current), (l = pi(e, l)));
      var d = n.getDerivedStateFromProps;
      (c = typeof d == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
        ((a !== f || h !== l) && dp(e, o, r, l)),
        (bn = !1),
        (h = e.memoizedState),
        (o.state = h),
        Ya(e, r, o, i);
      var g = e.memoizedState;
      a !== f || h !== g || st.current || bn
        ? (typeof d == 'function' && (Ic(e, n, d, r), (g = e.memoizedState)),
          (u = bn || hp(e, n, u, r, h, g, l) || !1)
            ? (c ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, g, l),
                typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, g, l)),
              typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (a === t.memoizedProps && h === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (a === t.memoizedProps && h === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = r),
              (e.memoizedState = g)),
          (o.props = r),
          (o.state = g),
          (o.context = l),
          (r = u))
        : (typeof o.componentDidUpdate != 'function' ||
            (a === t.memoizedProps && h === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (a === t.memoizedProps && h === t.memoizedState) ||
            (e.flags |= 1024),
          (r = !1));
    }
    return Fc(t, e, n, r, s, i);
  }
  function Fc(t, e, n, r, i, s) {
    Zy(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o) return i && ip(e, n, !1), fn(t, e, s);
    (r = e.stateNode), (Gw.current = e);
    var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (e.flags |= 1),
      t !== null && o ? ((e.child = mi(e, t.child, null, s)), (e.child = mi(e, null, a, s))) : qe(t, e, a, s),
      (e.memoizedState = r.state),
      i && ip(e, n, !0),
      e.child
    );
  }
  function e0(t) {
    var e = t.stateNode;
    e.pendingContext ? rp(t, e.pendingContext, e.pendingContext !== e.context) : e.context && rp(t, e.context, !1),
      fh(t, e.containerInfo);
  }
  function bp(t, e, n, r, i) {
    return gi(), sh(i), (e.flags |= 256), qe(t, e, n, r), e.child;
  }
  var jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zc(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function t0(t, e, n) {
    var r = e.pendingProps,
      i = he.current,
      s = !1,
      o = (e.flags & 128) !== 0,
      a;
    if (
      ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
      a ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (i |= 1),
      ae(he, i & 1),
      t === null)
    )
      return (
        Nc(e),
        (t = e.memoizedState),
        t !== null && ((t = t.dehydrated), t !== null)
          ? (e.mode & 1 ? (t.data === '$!' ? (e.lanes = 8) : (e.lanes = 1073741824)) : (e.lanes = 1), null)
          : ((o = r.children),
            (t = r.fallback),
            s
              ? ((r = e.mode),
                (s = e.child),
                (o = { mode: 'hidden', children: o }),
                !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = Fl(o, r, 0, null)),
                (t = vr(t, r, n, null)),
                (s.return = e),
                (t.return = e),
                (s.sibling = t),
                (e.child = s),
                (e.child.memoizedState = zc(n)),
                (e.memoizedState = jc),
                t)
              : xh(e, o))
      );
    if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return Kw(t, e, o, r, a, i, n);
    if (s) {
      (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
      var l = { mode: 'hidden', children: r.children };
      return (
        !(o & 1) && e.child !== i
          ? ((r = e.child), (r.childLanes = 0), (r.pendingProps = l), (e.deletions = null))
          : ((r = Bn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = Bn(a, s)) : ((s = vr(s, o, n, null)), (s.flags |= 2)),
        (s.return = e),
        (r.return = e),
        (r.sibling = s),
        (e.child = r),
        (r = s),
        (s = e.child),
        (o = t.child.memoizedState),
        (o = o === null ? zc(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (s.memoizedState = o),
        (s.childLanes = t.childLanes & ~n),
        (e.memoizedState = jc),
        r
      );
    }
    return (
      (s = t.child),
      (t = s.sibling),
      (r = Bn(s, { mode: 'visible', children: r.children })),
      !(e.mode & 1) && (r.lanes = n),
      (r.return = e),
      (r.sibling = null),
      t !== null && ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
      (e.child = r),
      (e.memoizedState = null),
      r
    );
  }
  function xh(t, e) {
    return (e = Fl({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
  }
  function Fo(t, e, n, r) {
    return (
      r !== null && sh(r),
      mi(e, t.child, null, n),
      (t = xh(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Kw(t, e, n, r, i, s, o) {
    if (n)
      return e.flags & 256
        ? ((e.flags &= -257), (r = Du(Error(N(422)))), Fo(t, e, o, r))
        : e.memoizedState !== null
          ? ((e.child = t.child), (e.flags |= 128), null)
          : ((s = r.fallback),
            (i = e.mode),
            (r = Fl({ mode: 'visible', children: r.children }, i, 0, null)),
            (s = vr(s, i, o, null)),
            (s.flags |= 2),
            (r.return = e),
            (s.return = e),
            (r.sibling = s),
            (e.child = r),
            e.mode & 1 && mi(e, t.child, null, o),
            (e.child.memoizedState = zc(o)),
            (e.memoizedState = jc),
            s);
    if (!(e.mode & 1)) return Fo(t, e, o, null);
    if (i.data === '$!') {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (r = a), (s = Error(N(419))), (r = Du(s, r, void 0)), Fo(t, e, o, r);
    }
    if (((a = (o & t.childLanes) !== 0), it || a)) {
      if (((r = Le), r !== null)) {
        switch (o & -o) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | o) ? 0 : i),
          i !== 0 && i !== s.retryLane && ((s.retryLane = i), cn(t, i), It(r, t, i, -1));
      }
      return Eh(), (r = Du(Error(N(421)))), Fo(t, e, o, r);
    }
    return i.data === '$?'
      ? ((e.flags |= 128), (e.child = t.child), (e = u1.bind(null, t)), (i._reactRetry = e), null)
      : ((t = s.treeContext),
        (ht = Ln(i.nextSibling)),
        (dt = e),
        (fe = !0),
        (Pt = null),
        t !== null && ((yt[xt++] = sn), (yt[xt++] = on), (yt[xt++] = br), (sn = t.id), (on = t.overflow), (br = e)),
        (e = xh(e, r.children)),
        (e.flags |= 4096),
        e);
  }
  function _p(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), Mc(t.return, e, n);
  }
  function Pu(t, e, n, r, i) {
    var s = t.memoizedState;
    s === null
      ? (t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
      : ((s.isBackwards = e),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function n0(t, e, n) {
    var r = e.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((qe(t, e, r.children, n), (r = he.current), r & 2)) (r = (r & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && _p(t, n, e);
          else if (t.tag === 19) _p(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      r &= 1;
    }
    if ((ae(he, r), !(e.mode & 1))) e.memoizedState = null;
    else
      switch (i) {
        case 'forwards':
          for (n = e.child, i = null; n !== null; )
            (t = n.alternate), t !== null && Ga(t) === null && (i = n), (n = n.sibling);
          (n = i),
            n === null ? ((i = e.child), (e.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Pu(e, !1, i, n, s);
          break;
        case 'backwards':
          for (n = null, i = e.child, e.child = null; i !== null; ) {
            if (((t = i.alternate), t !== null && Ga(t) === null)) {
              e.child = i;
              break;
            }
            (t = i.sibling), (i.sibling = n), (n = i), (i = t);
          }
          Pu(e, !0, n, null, s);
          break;
        case 'together':
          Pu(e, !1, null, null, void 0);
          break;
        default:
          e.memoizedState = null;
      }
    return e.child;
  }
  function ga(t, e) {
    !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
  }
  function fn(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (wr |= e.lanes), !(n & e.childLanes))) return null;
    if (t !== null && e.child !== t.child) throw Error(N(153));
    if (e.child !== null) {
      for (t = e.child, n = Bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        (t = t.sibling), (n = n.sibling = Bn(t, t.pendingProps)), (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Xw(t, e, n) {
    switch (e.tag) {
      case 3:
        e0(e), gi();
        break;
      case 5:
        Cy(e);
        break;
      case 1:
        ot(e.type) && Wa(e);
        break;
      case 4:
        fh(e, e.stateNode.containerInfo);
        break;
      case 10:
        var r = e.type._context,
          i = e.memoizedProps.value;
        ae(Ha, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = e.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ae(he, he.current & 1), (e.flags |= 128), null)
            : n & e.child.childLanes
              ? t0(t, e, n)
              : (ae(he, he.current & 1), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        ae(he, he.current & 1);
        break;
      case 19:
        if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
          if (r) return n0(t, e, n);
          e.flags |= 128;
        }
        if (
          ((i = e.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ae(he, he.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Jy(t, e, n);
    }
    return fn(t, e, n);
  }
  var r0, Bc, i0, s0;
  r0 = function (t, e) {
    for (var n = e.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  Bc = function () {};
  i0 = function (t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
      (t = e.stateNode), pr(Ht.current);
      var s = null;
      switch (n) {
        case 'input':
          (i = lc(t, i)), (r = lc(t, r)), (s = []);
          break;
        case 'select':
          (i = ge({}, i, { value: void 0 })), (r = ge({}, r, { value: void 0 })), (s = []);
          break;
        case 'textarea':
          (i = fc(t, i)), (r = fc(t, r)), (s = []);
          break;
        default:
          typeof i.onClick != 'function' && typeof r.onClick == 'function' && (t.onclick = Va);
      }
      dc(n, r);
      var o;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === 'style') {
            var a = i[u];
            for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
          } else
            u !== 'dangerouslySetInnerHTML' &&
              u !== 'children' &&
              u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              u !== 'autoFocus' &&
              (Ns.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
          if (u === 'style')
            if (a) {
              for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
              for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
            } else n || (s || (s = []), s.push(u, n)), (n = l);
          else
            u === 'dangerouslySetInnerHTML'
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (s = s || []).push(u, l))
              : u === 'children'
                ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
                : u !== 'suppressContentEditableWarning' &&
                  u !== 'suppressHydrationWarning' &&
                  (Ns.hasOwnProperty(u)
                    ? (l != null && u === 'onScroll' && ue('scroll', t), s || a === l || (s = []))
                    : (s = s || []).push(u, l));
      }
      n && (s = s || []).push('style', n);
      var u = s;
      (e.updateQueue = u) && (e.flags |= 4);
    }
  };
  s0 = function (t, e, n, r) {
    n !== r && (e.flags |= 4);
  };
  function Wi(t, e) {
    if (!fe)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = t.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
          r === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (r.sibling = null);
      }
  }
  function We(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      r = 0;
    if (e)
      for (var i = t.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = t),
          (i = i.sibling);
    else
      for (i = t.child; i !== null; )
        (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = t), (i = i.sibling);
    return (t.subtreeFlags |= r), (t.childLanes = n), e;
  }
  function Jw(t, e, n) {
    var r = e.pendingProps;
    switch ((ih(e), e.tag)) {
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
        return We(e), null;
      case 1:
        return ot(e.type) && Ua(), We(e), null;
      case 3:
        return (
          (r = e.stateNode),
          vi(),
          ce(st),
          ce(Qe),
          dh(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ao(e)
              ? (e.flags |= 4)
              : t === null ||
                (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                ((e.flags |= 1024), Pt !== null && (Yc(Pt), (Pt = null)))),
          Bc(t, e),
          We(e),
          null
        );
      case 5:
        hh(e);
        var i = pr(Ws.current);
        if (((n = e.type), t !== null && e.stateNode != null))
          i0(t, e, n, r, i), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(N(166));
            return We(e), null;
          }
          if (((t = pr(Ht.current)), Ao(e))) {
            (r = e.stateNode), (n = e.type);
            var s = e.memoizedProps;
            switch (((r[Ut] = e), (r[Vs] = s), (t = (e.mode & 1) !== 0), n)) {
              case 'dialog':
                ue('cancel', r), ue('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < is.length; i++) ue(is[i], r);
                break;
              case 'source':
                ue('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ue('error', r), ue('load', r);
                break;
              case 'details':
                ue('toggle', r);
                break;
              case 'input':
                Pd(r, s), ue('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!s.multiple }), ue('invalid', r);
                break;
              case 'textarea':
                Md(r, s), ue('invalid', r);
            }
            dc(n, s), (i = null);
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === 'children'
                  ? typeof a == 'string'
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 && Ro(r.textContent, a, t), (i = ['children', a]))
                    : typeof a == 'number' &&
                      r.textContent !== '' + a &&
                      (s.suppressHydrationWarning !== !0 && Ro(r.textContent, a, t), (i = ['children', '' + a]))
                  : Ns.hasOwnProperty(o) && a != null && o === 'onScroll' && ue('scroll', r);
              }
            switch (n) {
              case 'input':
                Oo(r), Nd(r, s, !0);
                break;
              case 'textarea':
                Oo(r), Id(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof s.onClick == 'function' && (r.onclick = Va);
            }
            (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
          } else {
            (o = i.nodeType === 9 ? i : i.ownerDocument),
              t === 'http://www.w3.org/1999/xhtml' && (t = Iv(n)),
              t === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((t = o.createElement('div')),
                    (t.innerHTML = '<script><\/script>'),
                    (t = t.removeChild(t.firstChild)))
                  : typeof r.is == 'string'
                    ? (t = o.createElement(n, { is: r.is }))
                    : ((t = o.createElement(n)),
                      n === 'select' && ((o = t), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                : (t = o.createElementNS(t, n)),
              (t[Ut] = e),
              (t[Vs] = r),
              r0(t, e, !1, !1),
              (e.stateNode = t);
            e: {
              switch (((o = pc(n, r)), n)) {
                case 'dialog':
                  ue('cancel', t), ue('close', t), (i = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  ue('load', t), (i = r);
                  break;
                case 'video':
                case 'audio':
                  for (i = 0; i < is.length; i++) ue(is[i], t);
                  i = r;
                  break;
                case 'source':
                  ue('error', t), (i = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  ue('error', t), ue('load', t), (i = r);
                  break;
                case 'details':
                  ue('toggle', t), (i = r);
                  break;
                case 'input':
                  Pd(t, r), (i = lc(t, r)), ue('invalid', t);
                  break;
                case 'option':
                  i = r;
                  break;
                case 'select':
                  (t._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = ge({}, r, { value: void 0 })),
                    ue('invalid', t);
                  break;
                case 'textarea':
                  Md(t, r), (i = fc(t, r)), ue('invalid', t);
                  break;
                default:
                  i = r;
              }
              dc(n, i), (a = i);
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var l = a[s];
                  s === 'style'
                    ? Lv(t, l)
                    : s === 'dangerouslySetInnerHTML'
                      ? ((l = l ? l.__html : void 0), l != null && Rv(t, l))
                      : s === 'children'
                        ? typeof l == 'string'
                          ? (n !== 'textarea' || l !== '') && Ms(t, l)
                          : typeof l == 'number' && Ms(t, '' + l)
                        : s !== 'suppressContentEditableWarning' &&
                          s !== 'suppressHydrationWarning' &&
                          s !== 'autoFocus' &&
                          (Ns.hasOwnProperty(s)
                            ? l != null && s === 'onScroll' && ue('scroll', t)
                            : l != null && Wf(t, s, l, o));
                }
              switch (n) {
                case 'input':
                  Oo(t), Nd(t, r, !1);
                  break;
                case 'textarea':
                  Oo(t), Id(t);
                  break;
                case 'option':
                  r.value != null && t.setAttribute('value', '' + $n(r.value));
                  break;
                case 'select':
                  (t.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? ni(t, !!r.multiple, s, !1)
                      : r.defaultValue != null && ni(t, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == 'function' && (t.onclick = Va);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (e.flags |= 4);
          }
          e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
        }
        return We(e), null;
      case 6:
        if (t && e.stateNode != null) s0(t, e, t.memoizedProps, r);
        else {
          if (typeof r != 'string' && e.stateNode === null) throw Error(N(166));
          if (((n = pr(Ws.current)), pr(Ht.current), Ao(e))) {
            if (
              ((r = e.stateNode), (n = e.memoizedProps), (r[Ut] = e), (s = r.nodeValue !== n) && ((t = dt), t !== null))
            )
              switch (t.tag) {
                case 3:
                  Ro(r.nodeValue, n, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && Ro(r.nodeValue, n, (t.mode & 1) !== 0);
              }
            s && (e.flags |= 4);
          } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ut] = e), (e.stateNode = r);
        }
        return We(e), null;
      case 13:
        if (
          (ce(he),
          (r = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (fe && ht !== null && e.mode & 1 && !(e.flags & 128)) Sy(), gi(), (e.flags |= 98560), (s = !1);
          else if (((s = Ao(e)), r !== null && r.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(N(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(N(317));
              s[Ut] = e;
            } else gi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
            We(e), (s = !1);
          } else Pt !== null && (Yc(Pt), (Pt = null)), (s = !0);
          if (!s) return e.flags & 65536 ? e : null;
        }
        return e.flags & 128
          ? ((e.lanes = n), e)
          : ((r = r !== null),
            r !== (t !== null && t.memoizedState !== null) &&
              r &&
              ((e.child.flags |= 8192), e.mode & 1 && (t === null || he.current & 1 ? De === 0 && (De = 3) : Eh())),
            e.updateQueue !== null && (e.flags |= 4),
            We(e),
            null);
      case 4:
        return vi(), Bc(t, e), t === null && zs(e.stateNode.containerInfo), We(e), null;
      case 10:
        return lh(e.type._context), We(e), null;
      case 17:
        return ot(e.type) && Ua(), We(e), null;
      case 19:
        if ((ce(he), (s = e.memoizedState), s === null)) return We(e), null;
        if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) Wi(s, !1);
          else {
            if (De !== 0 || (t !== null && t.flags & 128))
              for (t = e.child; t !== null; ) {
                if (((o = Ga(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Wi(s, !1),
                      r = o.updateQueue,
                      r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                      e.subtreeFlags = 0,
                      r = n,
                      n = e.child;
                    n !== null;

                  )
                    (s = n),
                      (t = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = t),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (t = o.dependencies),
                          (s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                      (n = n.sibling);
                  return ae(he, (he.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null && _e() > xi && ((e.flags |= 128), (r = !0), Wi(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = Ga(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (n = t.updateQueue),
                n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                Wi(s, !0),
                s.tail === null && s.tailMode === 'hidden' && !o.alternate && !fe)
              )
                return We(e), null;
            } else
              2 * _e() - s.renderingStartTime > xi &&
                n !== 1073741824 &&
                ((e.flags |= 128), (r = !0), Wi(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = _e()),
            (e.sibling = null),
            (n = he.current),
            ae(he, r ? (n & 1) | 2 : n & 1),
            e)
          : (We(e), null);
      case 22:
      case 23:
        return (
          kh(),
          (r = e.memoizedState !== null),
          t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
          r && e.mode & 1 ? ft & 1073741824 && (We(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : We(e),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, e.tag));
  }
  function Zw(t, e) {
    switch ((ih(e), e.tag)) {
      case 1:
        return ot(e.type) && Ua(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 3:
        return (
          vi(),
          ce(st),
          ce(Qe),
          dh(),
          (t = e.flags),
          t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 5:
        return hh(e), null;
      case 13:
        if ((ce(he), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(N(340));
          gi();
        }
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 19:
        return ce(he), null;
      case 4:
        return vi(), null;
      case 10:
        return lh(e.type._context), null;
      case 22:
      case 23:
        return kh(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jo = !1,
    $e = !1,
    e1 = typeof WeakSet == 'function' ? WeakSet : Set,
    R = null;
  function Gr(t, e) {
    var n = t.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          me(t, e, r);
        }
      else n.current = null;
  }
  function Vc(t, e, n) {
    try {
      n();
    } catch (r) {
      me(t, e, r);
    }
  }
  var wp = !1;
  function t1(t, e) {
    if (((kc = ja), (t = cy()), nh(t))) {
      if ('selectionStart' in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              l = -1,
              u = 0,
              c = 0,
              f = t,
              h = null;
            t: for (;;) {
              for (
                var d;
                f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                  f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                  f.nodeType === 3 && (o += f.nodeValue.length),
                  (d = f.firstChild) !== null;

              )
                (h = f), (f = d);
              for (;;) {
                if (f === t) break t;
                if ((h === n && ++u === i && (a = o), h === s && ++c === r && (l = o), (d = f.nextSibling) !== null))
                  break;
                (f = h), (h = f.parentNode);
              }
              f = d;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ec = { focusedElem: t, selectionRange: n }, ja = !1, R = e; R !== null; )
      if (((e = R), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) (t.return = e), (R = t);
      else
        for (; R !== null; ) {
          e = R;
          try {
            var g = e.alternate;
            if (e.flags & 1024)
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var v = g.memoizedProps,
                      x = g.memoizedState,
                      p = e.stateNode,
                      m = p.getSnapshotBeforeUpdate(e.elementType === e.type ? v : Ct(e.type, v), x);
                    p.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var y = e.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = '')
                    : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(N(163));
              }
          } catch (b) {
            me(e, e.return, b);
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (R = t);
            break;
          }
          R = e.return;
        }
    return (g = wp), (wp = !1), g;
  }
  function ys(t, e, n) {
    var r = e.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & t) === t) {
          var s = i.destroy;
          (i.destroy = void 0), s !== void 0 && Vc(e, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Al(t, e) {
    if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
      var n = (e = e.next);
      do {
        if ((n.tag & t) === t) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== e);
    }
  }
  function Uc(t) {
    var e = t.ref;
    if (e !== null) {
      var n = t.stateNode;
      switch (t.tag) {
        case 5:
          t = n;
          break;
        default:
          t = n;
      }
      typeof e == 'function' ? e(t) : (e.current = t);
    }
  }
  function o0(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), o0(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 &&
        ((e = t.stateNode), e !== null && (delete e[Ut], delete e[Vs], delete e[Cc], delete e[Fw], delete e[jw])),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  function a0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Sp(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || a0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Wc(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8 ? ((e = n.parentNode), e.insertBefore(t, n)) : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Va));
    else if (r !== 4 && ((t = t.child), t !== null))
      for (Wc(t, e, n), t = t.sibling; t !== null; ) Wc(t, e, n), (t = t.sibling);
  }
  function $c(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && ((t = t.child), t !== null))
      for ($c(t, e, n), t = t.sibling; t !== null; ) $c(t, e, n), (t = t.sibling);
  }
  var je = null,
    Dt = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; ) l0(t, e, n), (n = n.sibling);
  }
  function l0(t, e, n) {
    if (Qt && typeof Qt.onCommitFiberUnmount == 'function')
      try {
        Qt.onCommitFiberUnmount(Tl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || Gr(n, e);
      case 6:
        var r = je,
          i = Dt;
        (je = null),
          mn(t, e, n),
          (je = r),
          (Dt = i),
          je !== null &&
            (Dt
              ? ((t = je), (n = n.stateNode), t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
              : je.removeChild(n.stateNode));
        break;
      case 18:
        je !== null &&
          (Dt
            ? ((t = je),
              (n = n.stateNode),
              t.nodeType === 8 ? Su(t.parentNode, n) : t.nodeType === 1 && Su(t, n),
              Ls(t))
            : Su(je, n.stateNode));
        break;
      case 4:
        (r = je), (i = Dt), (je = n.stateNode.containerInfo), (Dt = !0), mn(t, e, n), (je = r), (Dt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          i = r = r.next;
          do {
            var s = i,
              o = s.destroy;
            (s = s.tag), o !== void 0 && (s & 2 || s & 4) && Vc(n, e, o), (i = i.next);
          } while (i !== r);
        }
        mn(t, e, n);
        break;
      case 1:
        if (!$e && (Gr(n, e), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (a) {
            me(n, e, a);
          }
        mn(t, e, n);
        break;
      case 21:
        mn(t, e, n);
        break;
      case 22:
        n.mode & 1 ? (($e = (r = $e) || n.memoizedState !== null), mn(t, e, n), ($e = r)) : mn(t, e, n);
        break;
      default:
        mn(t, e, n);
    }
  }
  function kp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      t.updateQueue = null;
      var n = t.stateNode;
      n === null && (n = t.stateNode = new e1()),
        e.forEach(function (r) {
          var i = c1.bind(null, t, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Ot(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = t,
            o = e,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (je = a.stateNode), (Dt = !1);
                break e;
              case 3:
                (je = a.stateNode.containerInfo), (Dt = !0);
                break e;
              case 4:
                (je = a.stateNode.containerInfo), (Dt = !0);
                break e;
            }
            a = a.return;
          }
          if (je === null) throw Error(N(160));
          l0(s, o, i), (je = null), (Dt = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (u) {
          me(i, e, u);
        }
      }
    if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) u0(e, t), (e = e.sibling);
  }
  function u0(t, e) {
    var n = t.alternate,
      r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(e, t), Lt(t), r & 4)) {
          try {
            ys(3, t, t.return), Al(3, t);
          } catch (v) {
            me(t, t.return, v);
          }
          try {
            ys(5, t, t.return);
          } catch (v) {
            me(t, t.return, v);
          }
        }
        break;
      case 1:
        Ot(e, t), Lt(t), r & 512 && n !== null && Gr(n, n.return);
        break;
      case 5:
        if ((Ot(e, t), Lt(t), r & 512 && n !== null && Gr(n, n.return), t.flags & 32)) {
          var i = t.stateNode;
          try {
            Ms(i, '');
          } catch (v) {
            me(t, t.return, v);
          }
        }
        if (r & 4 && ((i = t.stateNode), i != null)) {
          var s = t.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = t.type,
            l = t.updateQueue;
          if (((t.updateQueue = null), l !== null))
            try {
              a === 'input' && s.type === 'radio' && s.name != null && Nv(i, s), pc(a, o);
              var u = pc(a, s);
              for (o = 0; o < l.length; o += 2) {
                var c = l[o],
                  f = l[o + 1];
                c === 'style'
                  ? Lv(i, f)
                  : c === 'dangerouslySetInnerHTML'
                    ? Rv(i, f)
                    : c === 'children'
                      ? Ms(i, f)
                      : Wf(i, c, f, u);
              }
              switch (a) {
                case 'input':
                  uc(i, s);
                  break;
                case 'textarea':
                  Mv(i, s);
                  break;
                case 'select':
                  var h = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var d = s.value;
                  d != null
                    ? ni(i, !!s.multiple, d, !1)
                    : h !== !!s.multiple &&
                      (s.defaultValue != null
                        ? ni(i, !!s.multiple, s.defaultValue, !0)
                        : ni(i, !!s.multiple, s.multiple ? [] : '', !1));
              }
              i[Vs] = s;
            } catch (v) {
              me(t, t.return, v);
            }
        }
        break;
      case 6:
        if ((Ot(e, t), Lt(t), r & 4)) {
          if (t.stateNode === null) throw Error(N(162));
          (i = t.stateNode), (s = t.memoizedProps);
          try {
            i.nodeValue = s;
          } catch (v) {
            me(t, t.return, v);
          }
        }
        break;
      case 3:
        if ((Ot(e, t), Lt(t), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Ls(e.containerInfo);
          } catch (v) {
            me(t, t.return, v);
          }
        break;
      case 4:
        Ot(e, t), Lt(t);
        break;
      case 13:
        Ot(e, t),
          Lt(t),
          (i = t.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (wh = _e())),
          r & 4 && kp(t);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          t.mode & 1 ? (($e = (u = $e) || c), Ot(e, t), ($e = u)) : Ot(e, t),
          Lt(t),
          r & 8192)
        ) {
          if (((u = t.memoizedState !== null), (t.stateNode.isHidden = u) && !c && t.mode & 1))
            for (R = t, c = t.child; c !== null; ) {
              for (f = R = c; R !== null; ) {
                switch (((h = R), (d = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ys(4, h, h.return);
                    break;
                  case 1:
                    Gr(h, h.return);
                    var g = h.stateNode;
                    if (typeof g.componentWillUnmount == 'function') {
                      (r = h), (n = h.return);
                      try {
                        (e = r), (g.props = e.memoizedProps), (g.state = e.memoizedState), g.componentWillUnmount();
                      } catch (v) {
                        me(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    Gr(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      Op(f);
                      continue;
                    }
                }
                d !== null ? ((d.return = h), (R = d)) : Op(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = t; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (i = f.stateNode),
                    u
                      ? ((s = i.style),
                        typeof s.setProperty == 'function'
                          ? s.setProperty('display', 'none', 'important')
                          : (s.display = 'none'))
                      : ((a = f.stateNode),
                        (l = f.memoizedProps.style),
                        (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                        (a.style.display = Av('display', o)));
                } catch (v) {
                  me(t, t.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                } catch (v) {
                  me(t, t.return, v);
                }
            } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === t) && f.child !== null) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === t) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === t) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
          }
        }
        break;
      case 19:
        Ot(e, t), Lt(t), r & 4 && kp(t);
        break;
      case 21:
        break;
      default:
        Ot(e, t), Lt(t);
    }
  }
  function Lt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        e: {
          for (var n = t.return; n !== null; ) {
            if (a0(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(N(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Ms(i, ''), (r.flags &= -33));
            var s = Sp(t);
            $c(t, s, i);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = Sp(t);
            Wc(t, a, o);
            break;
          default:
            throw Error(N(161));
        }
      } catch (l) {
        me(t, t.return, l);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function n1(t, e, n) {
    (R = t), c0(t);
  }
  function c0(t, e, n) {
    for (var r = (t.mode & 1) !== 0; R !== null; ) {
      var i = R,
        s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || jo;
        if (!o) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || $e;
          a = jo;
          var u = $e;
          if (((jo = o), ($e = l) && !u))
            for (R = i; R !== null; )
              (o = R),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null ? Tp(i) : l !== null ? ((l.return = o), (R = l)) : Tp(i);
          for (; s !== null; ) (R = s), c0(s), (s = s.sibling);
          (R = i), (jo = a), ($e = u);
        }
        Ep(t);
      } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Ep(t);
    }
  }
  function Ep(t) {
    for (; R !== null; ) {
      var e = R;
      if (e.flags & 8772) {
        var n = e.alternate;
        try {
          if (e.flags & 8772)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                $e || Al(5, e);
                break;
              case 1:
                var r = e.stateNode;
                if (e.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var i = e.elementType === e.type ? n.memoizedProps : Ct(e.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var s = e.updateQueue;
                s !== null && up(e, s, r);
                break;
              case 3:
                var o = e.updateQueue;
                if (o !== null) {
                  if (((n = null), e.child !== null))
                    switch (e.child.tag) {
                      case 5:
                        n = e.child.stateNode;
                        break;
                      case 1:
                        n = e.child.stateNode;
                    }
                  up(e, o, n);
                }
                break;
              case 5:
                var a = e.stateNode;
                if (n === null && e.flags & 4) {
                  n = a;
                  var l = e.memoizedProps;
                  switch (e.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      l.autoFocus && n.focus();
                      break;
                    case 'img':
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
                if (e.memoizedState === null) {
                  var u = e.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && Ls(f);
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
                throw Error(N(163));
            }
          $e || (e.flags & 512 && Uc(e));
        } catch (h) {
          me(e, e.return, h);
        }
      }
      if (e === t) {
        R = null;
        break;
      }
      if (((n = e.sibling), n !== null)) {
        (n.return = e.return), (R = n);
        break;
      }
      R = e.return;
    }
  }
  function Op(t) {
    for (; R !== null; ) {
      var e = R;
      if (e === t) {
        R = null;
        break;
      }
      var n = e.sibling;
      if (n !== null) {
        (n.return = e.return), (R = n);
        break;
      }
      R = e.return;
    }
  }
  function Tp(t) {
    for (; R !== null; ) {
      var e = R;
      try {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            var n = e.return;
            try {
              Al(4, e);
            } catch (l) {
              me(e, n, l);
            }
            break;
          case 1:
            var r = e.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var i = e.return;
              try {
                r.componentDidMount();
              } catch (l) {
                me(e, i, l);
              }
            }
            var s = e.return;
            try {
              Uc(e);
            } catch (l) {
              me(e, s, l);
            }
            break;
          case 5:
            var o = e.return;
            try {
              Uc(e);
            } catch (l) {
              me(e, o, l);
            }
        }
      } catch (l) {
        me(e, e.return, l);
      }
      if (e === t) {
        R = null;
        break;
      }
      var a = e.sibling;
      if (a !== null) {
        (a.return = e.return), (R = a);
        break;
      }
      R = e.return;
    }
  }
  var r1 = Math.ceil,
    Ja = pn.ReactCurrentDispatcher,
    bh = pn.ReactCurrentOwner,
    wt = pn.ReactCurrentBatchConfig,
    q = 0,
    Le = null,
    Oe = null,
    Be = 0,
    ft = 0,
    Kr = Zn(0),
    De = 0,
    qs = null,
    wr = 0,
    Ll = 0,
    _h = 0,
    xs = null,
    nt = null,
    wh = 0,
    xi = 1 / 0,
    tn = null,
    Za = !1,
    Qc = null,
    jn = null,
    zo = !1,
    Cn = null,
    el = 0,
    bs = 0,
    Hc = null,
    ma = -1,
    va = 0;
  function Ye() {
    return q & 6 ? _e() : ma !== -1 ? ma : (ma = _e());
  }
  function zn(t) {
    return t.mode & 1
      ? q & 2 && Be !== 0
        ? Be & -Be
        : Bw.transition !== null
          ? (va === 0 && (va = Yv()), va)
          : ((t = ne), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : ty(t.type))), t)
      : 1;
  }
  function It(t, e, n, r) {
    if (50 < bs) throw ((bs = 0), (Hc = null), Error(N(185)));
    uo(t, n, r),
      (!(q & 2) || t !== Le) &&
        (t === Le && (!(q & 2) && (Ll |= n), De === 4 && En(t, Be)),
        at(t, r),
        n === 1 && q === 0 && !(e.mode & 1) && ((xi = _e() + 500), Ml && er()));
  }
  function at(t, e) {
    var n = t.callbackNode;
    B_(t, e);
    var r = Fa(t, t === Le ? Be : 0);
    if (r === 0) n !== null && Ld(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = r & -r), t.callbackPriority !== e)) {
      if ((n != null && Ld(n), e === 1))
        t.tag === 0 ? zw(Cp.bind(null, t)) : by(Cp.bind(null, t)),
          Aw(function () {
            !(q & 6) && er();
          }),
          (n = null);
      else {
        switch (Gv(r)) {
          case 1:
            n = Yf;
            break;
          case 4:
            n = Hv;
            break;
          case 16:
            n = La;
            break;
          case 536870912:
            n = qv;
            break;
          default:
            n = La;
        }
        n = y0(n, f0.bind(null, t));
      }
      (t.callbackPriority = e), (t.callbackNode = n);
    }
  }
  function f0(t, e) {
    if (((ma = -1), (va = 0), q & 6)) throw Error(N(327));
    var n = t.callbackNode;
    if (ai() && t.callbackNode !== n) return null;
    var r = Fa(t, t === Le ? Be : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = tl(t, r);
    else {
      e = r;
      var i = q;
      q |= 2;
      var s = d0();
      (Le !== t || Be !== e) && ((tn = null), (xi = _e() + 500), mr(t, e));
      do
        try {
          o1();
          break;
        } catch (a) {
          h0(t, a);
        }
      while (!0);
      ah(), (Ja.current = s), (q = i), Oe !== null ? (e = 0) : ((Le = null), (Be = 0), (e = De));
    }
    if (e !== 0) {
      if ((e === 2 && ((i = xc(t)), i !== 0 && ((r = i), (e = qc(t, i)))), e === 1))
        throw ((n = qs), mr(t, 0), En(t, r), at(t, _e()), n);
      if (e === 6) En(t, r);
      else {
        if (
          ((i = t.current.alternate),
          !(r & 30) &&
            !i1(i) &&
            ((e = tl(t, r)), e === 2 && ((s = xc(t)), s !== 0 && ((r = s), (e = qc(t, s)))), e === 1))
        )
          throw ((n = qs), mr(t, 0), En(t, r), at(t, _e()), n);
        switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            lr(t, nt, tn);
            break;
          case 3:
            if ((En(t, r), (r & 130023424) === r && ((e = wh + 500 - _e()), 10 < e))) {
              if (Fa(t, 0) !== 0) break;
              if (((i = t.suspendedLanes), (i & r) !== r)) {
                Ye(), (t.pingedLanes |= t.suspendedLanes & i);
                break;
              }
              t.timeoutHandle = Tc(lr.bind(null, t, nt, tn), e);
              break;
            }
            lr(t, nt, tn);
            break;
          case 4:
            if ((En(t, r), (r & 4194240) === r)) break;
            for (e = t.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - Mt(r);
              (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
            }
            if (
              ((r = i),
              (r = _e() - r),
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
                            : 1960 * r1(r / 1960)) - r),
              10 < r)
            ) {
              t.timeoutHandle = Tc(lr.bind(null, t, nt, tn), r);
              break;
            }
            lr(t, nt, tn);
            break;
          case 5:
            lr(t, nt, tn);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return at(t, _e()), t.callbackNode === n ? f0.bind(null, t) : null;
  }
  function qc(t, e) {
    var n = xs;
    return (
      t.current.memoizedState.isDehydrated && (mr(t, e).flags |= 256),
      (t = tl(t, e)),
      t !== 2 && ((e = nt), (nt = n), e !== null && Yc(e)),
      t
    );
  }
  function Yc(t) {
    nt === null ? (nt = t) : nt.push.apply(nt, t);
  }
  function i1(t) {
    for (var e = t; ; ) {
      if (e.flags & 16384) {
        var n = e.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!At(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function En(t, e) {
    for (e &= ~_h, e &= ~Ll, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
      var n = 31 - Mt(e),
        r = 1 << n;
      (t[n] = -1), (e &= ~r);
    }
  }
  function Cp(t) {
    if (q & 6) throw Error(N(327));
    ai();
    var e = Fa(t, 0);
    if (!(e & 1)) return at(t, _e()), null;
    var n = tl(t, e);
    if (t.tag !== 0 && n === 2) {
      var r = xc(t);
      r !== 0 && ((e = r), (n = qc(t, r)));
    }
    if (n === 1) throw ((n = qs), mr(t, 0), En(t, e), at(t, _e()), n);
    if (n === 6) throw Error(N(345));
    return (t.finishedWork = t.current.alternate), (t.finishedLanes = e), lr(t, nt, tn), at(t, _e()), null;
  }
  function Sh(t, e) {
    var n = q;
    q |= 1;
    try {
      return t(e);
    } finally {
      (q = n), q === 0 && ((xi = _e() + 500), Ml && er());
    }
  }
  function Sr(t) {
    Cn !== null && Cn.tag === 0 && !(q & 6) && ai();
    var e = q;
    q |= 1;
    var n = wt.transition,
      r = ne;
    try {
      if (((wt.transition = null), (ne = 1), t)) return t();
    } finally {
      (ne = r), (wt.transition = n), (q = e), !(q & 6) && er();
    }
  }
  function kh() {
    (ft = Kr.current), ce(Kr);
  }
  function mr(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), Rw(n)), Oe !== null))
      for (n = Oe.return; n !== null; ) {
        var r = n;
        switch ((ih(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Ua();
            break;
          case 3:
            vi(), ce(st), ce(Qe), dh();
            break;
          case 5:
            hh(r);
            break;
          case 4:
            vi();
            break;
          case 13:
            ce(he);
            break;
          case 19:
            ce(he);
            break;
          case 10:
            lh(r.type._context);
            break;
          case 22:
          case 23:
            kh();
        }
        n = n.return;
      }
    if (
      ((Le = t),
      (Oe = t = Bn(t.current, null)),
      (Be = ft = e),
      (De = 0),
      (qs = null),
      (_h = Ll = wr = 0),
      (nt = xs = null),
      dr !== null)
    ) {
      for (e = 0; e < dr.length; e++)
        if (((n = dr[e]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var o = s.next;
            (s.next = i), (r.next = o);
          }
          n.pending = r;
        }
      dr = null;
    }
    return t;
  }
  function h0(t, e) {
    do {
      var n = Oe;
      try {
        if ((ah(), (da.current = Xa), Ka)) {
          for (var r = pe.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Ka = !1;
        }
        if (
          ((_r = 0), (Ie = Ce = pe = null), (vs = !1), ($s = 0), (bh.current = null), n === null || n.return === null)
        ) {
          (De = 1), (qs = e), (Oe = null);
          break;
        }
        e: {
          var s = t,
            o = n.return,
            a = n,
            l = e;
          if (((e = Be), (a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
            var u = l,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var h = c.alternate;
              h
                ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var d = gp(o);
            if (d !== null) {
              (d.flags &= -257), mp(d, o, a, s, e), d.mode & 1 && pp(s, u, e), (e = d), (l = u);
              var g = e.updateQueue;
              if (g === null) {
                var v = new Set();
                v.add(l), (e.updateQueue = v);
              } else g.add(l);
              break e;
            } else {
              if (!(e & 1)) {
                pp(s, u, e), Eh();
                break e;
              }
              l = Error(N(426));
            }
          } else if (fe && a.mode & 1) {
            var x = gp(o);
            if (x !== null) {
              !(x.flags & 65536) && (x.flags |= 256), mp(x, o, a, s, e), sh(yi(l, a));
              break e;
            }
          }
          (s = l = yi(l, a)), De !== 4 && (De = 2), xs === null ? (xs = [s]) : xs.push(s), (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var p = Gy(s, l, e);
                lp(s, p);
                break e;
              case 1:
                a = l;
                var m = s.type,
                  y = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof m.getDerivedStateFromError == 'function' ||
                    (y !== null && typeof y.componentDidCatch == 'function' && (jn === null || !jn.has(y))))
                ) {
                  (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                  var b = Ky(s, a, e);
                  lp(s, b);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        g0(n);
      } catch (_) {
        (e = _), Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function d0() {
    var t = Ja.current;
    return (Ja.current = Xa), t === null ? Xa : t;
  }
  function Eh() {
    (De === 0 || De === 3 || De === 2) && (De = 4),
      Le === null || (!(wr & 268435455) && !(Ll & 268435455)) || En(Le, Be);
  }
  function tl(t, e) {
    var n = q;
    q |= 2;
    var r = d0();
    (Le !== t || Be !== e) && ((tn = null), mr(t, e));
    do
      try {
        s1();
        break;
      } catch (i) {
        h0(t, i);
      }
    while (!0);
    if ((ah(), (q = n), (Ja.current = r), Oe !== null)) throw Error(N(261));
    return (Le = null), (Be = 0), De;
  }
  function s1() {
    for (; Oe !== null; ) p0(Oe);
  }
  function o1() {
    for (; Oe !== null && !N_(); ) p0(Oe);
  }
  function p0(t) {
    var e = v0(t.alternate, t, ft);
    (t.memoizedProps = t.pendingProps), e === null ? g0(t) : (Oe = e), (bh.current = null);
  }
  function g0(t) {
    var e = t;
    do {
      var n = e.alternate;
      if (((t = e.return), e.flags & 32768)) {
        if (((n = Zw(n, e)), n !== null)) {
          (n.flags &= 32767), (Oe = n);
          return;
        }
        if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
        else {
          (De = 6), (Oe = null);
          return;
        }
      } else if (((n = Jw(n, e, ft)), n !== null)) {
        Oe = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Oe = e;
        return;
      }
      Oe = e = t;
    } while (e !== null);
    De === 0 && (De = 5);
  }
  function lr(t, e, n) {
    var r = ne,
      i = wt.transition;
    try {
      (wt.transition = null), (ne = 1), a1(t, e, n, r);
    } finally {
      (wt.transition = i), (ne = r);
    }
    return null;
  }
  function a1(t, e, n, r) {
    do ai();
    while (Cn !== null);
    if (q & 6) throw Error(N(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(N(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (V_(t, s),
      t === Le && ((Oe = Le = null), (Be = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        zo ||
        ((zo = !0),
        y0(La, function () {
          return ai(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = wt.transition), (wt.transition = null);
      var o = ne;
      ne = 1;
      var a = q;
      (q |= 4),
        (bh.current = null),
        t1(t, n),
        u0(n, t),
        Tw(Ec),
        (ja = !!kc),
        (Ec = kc = null),
        (t.current = n),
        n1(n),
        M_(),
        (q = a),
        (ne = o),
        (wt.transition = s);
    } else t.current = n;
    if (
      (zo && ((zo = !1), (Cn = t), (el = i)),
      (s = t.pendingLanes),
      s === 0 && (jn = null),
      A_(n.stateNode),
      at(t, _e()),
      e !== null)
    )
      for (r = t.onRecoverableError, n = 0; n < e.length; n++)
        (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Za) throw ((Za = !1), (t = Qc), (Qc = null), t);
    return (
      el & 1 && t.tag !== 0 && ai(),
      (s = t.pendingLanes),
      s & 1 ? (t === Hc ? bs++ : ((bs = 0), (Hc = t))) : (bs = 0),
      er(),
      null
    );
  }
  function ai() {
    if (Cn !== null) {
      var t = Gv(el),
        e = wt.transition,
        n = ne;
      try {
        if (((wt.transition = null), (ne = 16 > t ? 16 : t), Cn === null)) var r = !1;
        else {
          if (((t = Cn), (Cn = null), (el = 0), q & 6)) throw Error(N(331));
          var i = q;
          for (q |= 4, R = t.current; R !== null; ) {
            var s = R,
              o = s.child;
            if (R.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (R = u; R !== null; ) {
                    var c = R;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(8, c, s);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (R = f);
                    else
                      for (; R !== null; ) {
                        c = R;
                        var h = c.sibling,
                          d = c.return;
                        if ((o0(c), c === u)) {
                          R = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = d), (R = h);
                          break;
                        }
                        R = d;
                      }
                  }
                }
                var g = s.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var x = v.sibling;
                      (v.sibling = null), (v = x);
                    } while (v !== null);
                  }
                }
                R = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
            else
              e: for (; R !== null; ) {
                if (((s = R), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ys(9, s, s.return);
                  }
                var p = s.sibling;
                if (p !== null) {
                  (p.return = s.return), (R = p);
                  break e;
                }
                R = s.return;
              }
          }
          var m = t.current;
          for (R = m; R !== null; ) {
            o = R;
            var y = o.child;
            if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (R = y);
            else
              e: for (o = m; R !== null; ) {
                if (((a = R), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Al(9, a);
                    }
                  } catch (_) {
                    me(a, a.return, _);
                  }
                if (a === o) {
                  R = null;
                  break e;
                }
                var b = a.sibling;
                if (b !== null) {
                  (b.return = a.return), (R = b);
                  break e;
                }
                R = a.return;
              }
          }
          if (((q = i), er(), Qt && typeof Qt.onPostCommitFiberRoot == 'function'))
            try {
              Qt.onPostCommitFiberRoot(Tl, t);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ne = n), (wt.transition = e);
      }
    }
    return !1;
  }
  function Dp(t, e, n) {
    (e = yi(n, e)), (e = Gy(t, e, 1)), (t = Fn(t, e, 1)), (e = Ye()), t !== null && (uo(t, 1, e), at(t, e));
  }
  function me(t, e, n) {
    if (t.tag === 3) Dp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Dp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var r = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (jn === null || !jn.has(r)))
          ) {
            (t = yi(n, t)), (t = Ky(e, t, 1)), (e = Fn(e, t, 1)), (t = Ye()), e !== null && (uo(e, 1, t), at(e, t));
            break;
          }
        }
        e = e.return;
      }
  }
  function l1(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
      (e = Ye()),
      (t.pingedLanes |= t.suspendedLanes & n),
      Le === t &&
        (Be & n) === n &&
        (De === 4 || (De === 3 && (Be & 130023424) === Be && 500 > _e() - wh) ? mr(t, 0) : (_h |= n)),
      at(t, e);
  }
  function m0(t, e) {
    e === 0 && (t.mode & 1 ? ((e = Do), (Do <<= 1), !(Do & 130023424) && (Do = 4194304)) : (e = 1));
    var n = Ye();
    (t = cn(t, e)), t !== null && (uo(t, e, n), at(t, n));
  }
  function u1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), m0(t, n);
  }
  function c1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode,
          i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    r !== null && r.delete(e), m0(t, n);
  }
  var v0;
  v0 = function (t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps || st.current) it = !0;
      else {
        if (!(t.lanes & n) && !(e.flags & 128)) return (it = !1), Xw(t, e, n);
        it = !!(t.flags & 131072);
      }
    else (it = !1), fe && e.flags & 1048576 && _y(e, Qa, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 2:
        var r = e.type;
        ga(t, e), (t = e.pendingProps);
        var i = pi(e, Qe.current);
        oi(e, n), (i = gh(null, e, r, t, i, n));
        var s = mh();
        return (
          (e.flags |= 1),
          typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
            ? ((e.tag = 1),
              (e.memoizedState = null),
              (e.updateQueue = null),
              ot(r) ? ((s = !0), Wa(e)) : (s = !1),
              (e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
              ch(e),
              (i.updater = Rl),
              (e.stateNode = i),
              (i._reactInternals = e),
              Rc(e, r, t, n),
              (e = Fc(null, e, r, !0, s, n)))
            : ((e.tag = 0), fe && s && rh(e), qe(null, e, i, n), (e = e.child)),
          e
        );
      case 16:
        r = e.elementType;
        e: {
          switch (
            (ga(t, e),
            (t = e.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (e.type = r),
            (i = e.tag = h1(r)),
            (t = Ct(r, t)),
            i)
          ) {
            case 0:
              e = Lc(null, e, r, t, n);
              break e;
            case 1:
              e = xp(null, e, r, t, n);
              break e;
            case 11:
              e = vp(null, e, r, t, n);
              break e;
            case 14:
              e = yp(null, e, r, Ct(r.type, t), n);
              break e;
          }
          throw Error(N(306, r, ''));
        }
        return e;
      case 0:
        return (r = e.type), (i = e.pendingProps), (i = e.elementType === r ? i : Ct(r, i)), Lc(t, e, r, i, n);
      case 1:
        return (r = e.type), (i = e.pendingProps), (i = e.elementType === r ? i : Ct(r, i)), xp(t, e, r, i, n);
      case 3:
        e: {
          if ((e0(e), t === null)) throw Error(N(387));
          (r = e.pendingProps), (s = e.memoizedState), (i = s.element), Ty(t, e), Ya(e, r, null, n);
          var o = e.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              (i = yi(Error(N(423)), e)), (e = bp(t, e, r, n, i));
              break e;
            } else if (r !== i) {
              (i = yi(Error(N(424)), e)), (e = bp(t, e, r, n, i));
              break e;
            } else
              for (
                ht = Ln(e.stateNode.containerInfo.firstChild),
                  dt = e,
                  fe = !0,
                  Pt = null,
                  n = Ey(e, null, r, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((gi(), r === i)) {
              e = fn(t, e, n);
              break e;
            }
            qe(t, e, r, n);
          }
          e = e.child;
        }
        return e;
      case 5:
        return (
          Cy(e),
          t === null && Nc(e),
          (r = e.type),
          (i = e.pendingProps),
          (s = t !== null ? t.memoizedProps : null),
          (o = i.children),
          Oc(r, i) ? (o = null) : s !== null && Oc(r, s) && (e.flags |= 32),
          Zy(t, e),
          qe(t, e, o, n),
          e.child
        );
      case 6:
        return t === null && Nc(e), null;
      case 13:
        return t0(t, e, n);
      case 4:
        return (
          fh(e, e.stateNode.containerInfo),
          (r = e.pendingProps),
          t === null ? (e.child = mi(e, null, r, n)) : qe(t, e, r, n),
          e.child
        );
      case 11:
        return (r = e.type), (i = e.pendingProps), (i = e.elementType === r ? i : Ct(r, i)), vp(t, e, r, i, n);
      case 7:
        return qe(t, e, e.pendingProps, n), e.child;
      case 8:
        return qe(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return qe(t, e, e.pendingProps.children, n), e.child;
      case 10:
        e: {
          if (
            ((r = e.type._context),
            (i = e.pendingProps),
            (s = e.memoizedProps),
            (o = i.value),
            ae(Ha, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (At(s.value, o)) {
              if (s.children === i.children && !st.current) {
                e = fn(t, e, n);
                break e;
              }
            } else
              for (s = e.child, s !== null && (s.return = e); s !== null; ) {
                var a = s.dependencies;
                if (a !== null) {
                  o = s.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (s.tag === 1) {
                        (l = an(-1, n & -n)), (l.tag = 2);
                        var u = s.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                        }
                      }
                      (s.lanes |= n),
                        (l = s.alternate),
                        l !== null && (l.lanes |= n),
                        Mc(s.return, n, e),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(N(341));
                  (o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), Mc(o, n, e), (o = s.sibling);
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === e) {
                      o = null;
                      break;
                    }
                    if (((s = o.sibling), s !== null)) {
                      (s.return = o.return), (o = s);
                      break;
                    }
                    o = o.return;
                  }
                s = o;
              }
          qe(t, e, i.children, n), (e = e.child);
        }
        return e;
      case 9:
        return (
          (i = e.type),
          (r = e.pendingProps.children),
          oi(e, n),
          (i = St(i)),
          (r = r(i)),
          (e.flags |= 1),
          qe(t, e, r, n),
          e.child
        );
      case 14:
        return (r = e.type), (i = Ct(r, e.pendingProps)), (i = Ct(r.type, i)), yp(t, e, r, i, n);
      case 15:
        return Xy(t, e, e.type, e.pendingProps, n);
      case 17:
        return (
          (r = e.type),
          (i = e.pendingProps),
          (i = e.elementType === r ? i : Ct(r, i)),
          ga(t, e),
          (e.tag = 1),
          ot(r) ? ((t = !0), Wa(e)) : (t = !1),
          oi(e, n),
          Yy(e, r, i),
          Rc(e, r, i, n),
          Fc(null, e, r, !0, t, n)
        );
      case 19:
        return n0(t, e, n);
      case 22:
        return Jy(t, e, n);
    }
    throw Error(N(156, e.tag));
  };
  function y0(t, e) {
    return Qv(t, e);
  }
  function f1(t, e, n, r) {
    (this.tag = t),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function bt(t, e, n, r) {
    return new f1(t, e, n, r);
  }
  function Oh(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function h1(t) {
    if (typeof t == 'function') return Oh(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === Qf)) return 11;
      if (t === Hf) return 14;
    }
    return 2;
  }
  function Bn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = bt(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e), (n.type = t.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = t.flags & 14680064),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      n
    );
  }
  function ya(t, e, n, r, i, s) {
    var o = 2;
    if (((r = t), typeof t == 'function')) Oh(t) && (o = 1);
    else if (typeof t == 'string') o = 5;
    else
      e: switch (t) {
        case Br:
          return vr(n.children, i, s, e);
        case $f:
          (o = 8), (i |= 8);
          break;
        case ic:
          return (t = bt(12, n, e, i | 2)), (t.elementType = ic), (t.lanes = s), t;
        case sc:
          return (t = bt(13, n, e, i)), (t.elementType = sc), (t.lanes = s), t;
        case oc:
          return (t = bt(19, n, e, i)), (t.elementType = oc), (t.lanes = s), t;
        case Cv:
          return Fl(n, i, s, e);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case Ov:
                o = 10;
                break e;
              case Tv:
                o = 9;
                break e;
              case Qf:
                o = 11;
                break e;
              case Hf:
                o = 14;
                break e;
              case xn:
                (o = 16), (r = null);
                break e;
            }
          throw Error(N(130, t == null ? t : typeof t, ''));
      }
    return (e = bt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e;
  }
  function vr(t, e, n, r) {
    return (t = bt(7, t, r, e)), (t.lanes = n), t;
  }
  function Fl(t, e, n, r) {
    return (t = bt(22, t, r, e)), (t.elementType = Cv), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t;
  }
  function Nu(t, e, n) {
    return (t = bt(6, t, null, e)), (t.lanes = n), t;
  }
  function Mu(t, e, n) {
    return (
      (e = bt(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  function d1(t, e, n, r, i) {
    (this.tag = e),
      (this.containerInfo = t),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = hu(0)),
      (this.expirationTimes = hu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Th(t, e, n, r, i, s, o, a, l) {
    return (
      (t = new d1(t, e, n, a, l)),
      e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
      (s = bt(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ch(s),
      t
    );
  }
  function p1(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: zr, key: r == null ? null : '' + r, children: t, containerInfo: e, implementation: n };
  }
  function x0(t) {
    if (!t) return Qn;
    t = t._reactInternals;
    e: {
      if (Dr(t) !== t || t.tag !== 1) throw Error(N(170));
      var e = t;
      do {
        switch (e.tag) {
          case 3:
            e = e.stateNode.context;
            break e;
          case 1:
            if (ot(e.type)) {
              e = e.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        e = e.return;
      } while (e !== null);
      throw Error(N(171));
    }
    if (t.tag === 1) {
      var n = t.type;
      if (ot(n)) return xy(t, n, e);
    }
    return e;
  }
  function b0(t, e, n, r, i, s, o, a, l) {
    return (
      (t = Th(n, r, !0, t, i, s, o, a, l)),
      (t.context = x0(null)),
      (n = t.current),
      (r = Ye()),
      (i = zn(n)),
      (s = an(r, i)),
      (s.callback = e ?? null),
      Fn(n, s, i),
      (t.current.lanes = i),
      uo(t, i, r),
      at(t, r),
      t
    );
  }
  function jl(t, e, n, r) {
    var i = e.current,
      s = Ye(),
      o = zn(i);
    return (
      (n = x0(n)),
      e.context === null ? (e.context = n) : (e.pendingContext = n),
      (e = an(s, o)),
      (e.payload = { element: t }),
      (r = r === void 0 ? null : r),
      r !== null && (e.callback = r),
      (t = Fn(i, e, o)),
      t !== null && (It(t, i, o, s), ha(t, i, o)),
      o
    );
  }
  function nl(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Pp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Ch(t, e) {
    Pp(t, e), (t = t.alternate) && Pp(t, e);
  }
  function g1() {
    return null;
  }
  var _0 =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          console.error(t);
        };
  function Dh(t) {
    this._internalRoot = t;
  }
  zl.prototype.render = Dh.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(N(409));
    jl(t, e, null, null);
  };
  zl.prototype.unmount = Dh.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Sr(function () {
        jl(null, t, null, null);
      }),
        (e[un] = null);
    }
  };
  function zl(t) {
    this._internalRoot = t;
  }
  zl.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Jv();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < kn.length && e !== 0 && e < kn[n].priority; n++);
      kn.splice(n, 0, t), n === 0 && ey(t);
    }
  };
  function Ph(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function Bl(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Np() {}
  function m1(t, e, n, r, i) {
    if (i) {
      if (typeof r == 'function') {
        var s = r;
        r = function () {
          var u = nl(o);
          s.call(u);
        };
      }
      var o = b0(e, r, t, 0, null, !1, !1, '', Np);
      return (t._reactRootContainer = o), (t[un] = o.current), zs(t.nodeType === 8 ? t.parentNode : t), Sr(), o;
    }
    for (; (i = t.lastChild); ) t.removeChild(i);
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var u = nl(l);
        a.call(u);
      };
    }
    var l = Th(t, 0, !1, null, null, !1, !1, '', Np);
    return (
      (t._reactRootContainer = l),
      (t[un] = l.current),
      zs(t.nodeType === 8 ? t.parentNode : t),
      Sr(function () {
        jl(e, l, n, r);
      }),
      l
    );
  }
  function Vl(t, e, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof i == 'function') {
        var a = i;
        i = function () {
          var l = nl(o);
          a.call(l);
        };
      }
      jl(e, o, t, i);
    } else o = m1(n, e, t, i, r);
    return nl(o);
  }
  Kv = function (t) {
    switch (t.tag) {
      case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
          var n = rs(e.pendingLanes);
          n !== 0 && (Gf(e, n | 1), at(e, _e()), !(q & 6) && ((xi = _e() + 500), er()));
        }
        break;
      case 13:
        Sr(function () {
          var r = cn(t, 1);
          if (r !== null) {
            var i = Ye();
            It(r, t, 1, i);
          }
        }),
          Ch(t, 1);
    }
  };
  Kf = function (t) {
    if (t.tag === 13) {
      var e = cn(t, 134217728);
      if (e !== null) {
        var n = Ye();
        It(e, t, 134217728, n);
      }
      Ch(t, 134217728);
    }
  };
  Xv = function (t) {
    if (t.tag === 13) {
      var e = zn(t),
        n = cn(t, e);
      if (n !== null) {
        var r = Ye();
        It(n, t, e, r);
      }
      Ch(t, e);
    }
  };
  Jv = function () {
    return ne;
  };
  Zv = function (t, e) {
    var n = ne;
    try {
      return (ne = t), e();
    } finally {
      ne = n;
    }
  };
  mc = function (t, e, n) {
    switch (e) {
      case 'input':
        if ((uc(t, n), (e = n.name), n.type === 'radio' && e != null)) {
          for (n = t; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll('input[name=' + JSON.stringify('' + e) + '][type="radio"]'), e = 0;
            e < n.length;
            e++
          ) {
            var r = n[e];
            if (r !== t && r.form === t.form) {
              var i = Nl(r);
              if (!i) throw Error(N(90));
              Pv(r), uc(r, i);
            }
          }
        }
        break;
      case 'textarea':
        Mv(t, n);
        break;
      case 'select':
        (e = n.value), e != null && ni(t, !!n.multiple, e, !1);
    }
  };
  zv = Sh;
  Bv = Sr;
  var v1 = { usingClientEntryPoint: !1, Events: [fo, $r, Nl, Fv, jv, Sh] },
    $i = { findFiberByHostInstance: hr, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    y1 = {
      bundleType: $i.bundleType,
      version: $i.version,
      rendererPackageName: $i.rendererPackageName,
      rendererConfig: $i.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: pn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return (t = Wv(t)), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: $i.findFiberByHostInstance || g1,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bo.isDisabled && Bo.supportsFiber)
      try {
        (Tl = Bo.inject(y1)), (Qt = Bo);
      } catch {}
  }
  gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v1;
  gt.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ph(e)) throw Error(N(200));
    return p1(t, e, null, n);
  };
  gt.createRoot = function (t, e) {
    if (!Ph(t)) throw Error(N(299));
    var n = !1,
      r = '',
      i = _0;
    return (
      e != null &&
        (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
        e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
      (e = Th(t, 1, !1, null, null, n, !1, r, i)),
      (t[un] = e.current),
      zs(t.nodeType === 8 ? t.parentNode : t),
      new Dh(e)
    );
  };
  gt.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(N(188)) : ((t = Object.keys(t).join(',')), Error(N(268, t)));
    return (t = Wv(e)), (t = t === null ? null : t.stateNode), t;
  };
  gt.flushSync = function (t) {
    return Sr(t);
  };
  gt.hydrate = function (t, e, n) {
    if (!Bl(e)) throw Error(N(200));
    return Vl(null, t, e, !0, n);
  };
  gt.hydrateRoot = function (t, e, n) {
    if (!Ph(t)) throw Error(N(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = '',
      o = _0;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (e = b0(e, null, t, 1, n ?? null, i, !1, s, o)),
      (t[un] = e.current),
      zs(t),
      r)
    )
      for (t = 0; t < r.length; t++)
        (n = r[t]),
          (i = n._getVersion),
          (i = i(n._source)),
          e.mutableSourceEagerHydrationData == null
            ? (e.mutableSourceEagerHydrationData = [n, i])
            : e.mutableSourceEagerHydrationData.push(n, i);
    return new zl(e);
  };
  gt.render = function (t, e, n) {
    if (!Bl(e)) throw Error(N(200));
    return Vl(null, t, e, !1, n);
  };
  gt.unmountComponentAtNode = function (t) {
    if (!Bl(t)) throw Error(N(40));
    return t._reactRootContainer
      ? (Sr(function () {
          Vl(null, null, t, !1, function () {
            (t._reactRootContainer = null), (t[un] = null);
          });
        }),
        !0)
      : !1;
  };
  gt.unstable_batchedUpdates = Sh;
  gt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!Bl(n)) throw Error(N(200));
    if (t == null || t._reactInternals === void 0) throw Error(N(38));
    return Vl(t, e, n, !1, r);
  };
  gt.version = '18.3.1-next-f1338f8080-20240426';
  function w0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0);
      } catch (t) {
        console.error(t);
      }
  }
  w0(), (wv.exports = gt);
  var x1 = wv.exports,
    S0,
    Mp = x1;
  (S0 = Mp.createRoot), Mp.hydrateRoot;
  /**
   * @remix-run/router v1.19.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Ys() {
    return (
      (Ys = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      Ys.apply(this, arguments)
    );
  }
  var Dn;
  (function (t) {
    (t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE');
  })(Dn || (Dn = {}));
  const Ip = 'popstate';
  function b1(t) {
    t === void 0 && (t = {});
    function e(r, i) {
      let { pathname: s, search: o, hash: a } = r.location;
      return Gc(
        '',
        { pathname: s, search: o, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || 'default',
      );
    }
    function n(r, i) {
      return typeof i == 'string' ? i : rl(i);
    }
    return w1(e, n, null, t);
  }
  function ke(t, e) {
    if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
  }
  function k0(t, e) {
    if (!t) {
      typeof console < 'u' && console.warn(e);
      try {
        throw new Error(e);
      } catch {}
    }
  }
  function _1() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Rp(t, e) {
    return { usr: t.state, key: t.key, idx: e };
  }
  function Gc(t, e, n, r) {
    return (
      n === void 0 && (n = null),
      Ys({ pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' }, typeof e == 'string' ? Pi(e) : e, {
        state: n,
        key: (e && e.key) || r || _1(),
      })
    );
  }
  function rl(t) {
    let { pathname: e = '/', search: n = '', hash: r = '' } = t;
    return (
      n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
      r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
      e
    );
  }
  function Pi(t) {
    let e = {};
    if (t) {
      let n = t.indexOf('#');
      n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
      let r = t.indexOf('?');
      r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))), t && (e.pathname = t);
    }
    return e;
  }
  function w1(t, e, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: s = !1 } = r,
      o = i.history,
      a = Dn.Pop,
      l = null,
      u = c();
    u == null && ((u = 0), o.replaceState(Ys({}, o.state, { idx: u }), ''));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function f() {
      a = Dn.Pop;
      let x = c(),
        p = x == null ? null : x - u;
      (u = x), l && l({ action: a, location: v.location, delta: p });
    }
    function h(x, p) {
      a = Dn.Push;
      let m = Gc(v.location, x, p);
      u = c() + 1;
      let y = Rp(m, u),
        b = v.createHref(m);
      try {
        o.pushState(y, '', b);
      } catch (_) {
        if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
        i.location.assign(b);
      }
      s && l && l({ action: a, location: v.location, delta: 1 });
    }
    function d(x, p) {
      a = Dn.Replace;
      let m = Gc(v.location, x, p);
      u = c();
      let y = Rp(m, u),
        b = v.createHref(m);
      o.replaceState(y, '', b), s && l && l({ action: a, location: v.location, delta: 0 });
    }
    function g(x) {
      let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
        m = typeof x == 'string' ? x : rl(x);
      return (
        (m = m.replace(/ $/, '%20')),
        ke(p, 'No window.location.(origin|href) available to create URL for href: ' + m),
        new URL(m, p)
      );
    }
    let v = {
      get action() {
        return a;
      },
      get location() {
        return t(i, o);
      },
      listen(x) {
        if (l) throw new Error('A history only accepts one active listener');
        return (
          i.addEventListener(Ip, f),
          (l = x),
          () => {
            i.removeEventListener(Ip, f), (l = null);
          }
        );
      },
      createHref(x) {
        return e(i, x);
      },
      createURL: g,
      encodeLocation(x) {
        let p = g(x);
        return { pathname: p.pathname, search: p.search, hash: p.hash };
      },
      push: h,
      replace: d,
      go(x) {
        return o.go(x);
      },
    };
    return v;
  }
  var Ap;
  (function (t) {
    (t.data = 'data'), (t.deferred = 'deferred'), (t.redirect = 'redirect'), (t.error = 'error');
  })(Ap || (Ap = {}));
  function S1(t, e, n) {
    return n === void 0 && (n = '/'), k1(t, e, n, !1);
  }
  function k1(t, e, n, r) {
    let i = typeof e == 'string' ? Pi(e) : e,
      s = Nh(i.pathname || '/', n);
    if (s == null) return null;
    let o = E0(t);
    E1(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
      let u = L1(s);
      a = R1(o[l], u, r);
    }
    return a;
  }
  function E0(t, e, n, r) {
    e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = '');
    let i = (s, o, a) => {
      let l = {
        relativePath: a === void 0 ? s.path || '' : a,
        caseSensitive: s.caseSensitive === !0,
        childrenIndex: o,
        route: s,
      };
      l.relativePath.startsWith('/') &&
        (ke(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.',
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = Vn([r, l.relativePath]),
        c = n.concat(l);
      s.children &&
        s.children.length > 0 &&
        (ke(
          s.index !== !0,
          'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".'),
        ),
        E0(s.children, e, c, u)),
        !(s.path == null && !s.index) && e.push({ path: u, score: M1(u, s.index), routesMeta: c });
    };
    return (
      t.forEach((s, o) => {
        var a;
        if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
        else for (let l of O0(s.path)) i(s, o, l);
      }),
      e
    );
  }
  function O0(t) {
    let e = t.split('/');
    if (e.length === 0) return [];
    let [n, ...r] = e,
      i = n.endsWith('?'),
      s = n.replace(/\?$/, '');
    if (r.length === 0) return i ? [s, ''] : [s];
    let o = O0(r.join('/')),
      a = [];
    return (
      a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
      i && a.push(...o),
      a.map((l) => (t.startsWith('/') && l === '' ? '/' : l))
    );
  }
  function E1(t) {
    t.sort((e, n) =>
      e.score !== n.score
        ? n.score - e.score
        : I1(
            e.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const O1 = /^:[\w-]+$/,
    T1 = 3,
    C1 = 2,
    D1 = 1,
    P1 = 10,
    N1 = -2,
    Lp = (t) => t === '*';
  function M1(t, e) {
    let n = t.split('/'),
      r = n.length;
    return (
      n.some(Lp) && (r += N1),
      e && (r += C1),
      n.filter((i) => !Lp(i)).reduce((i, s) => i + (O1.test(s) ? T1 : s === '' ? D1 : P1), r)
    );
  }
  function I1(t, e) {
    return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function R1(t, e, n) {
    let { routesMeta: r } = t,
      i = {},
      s = '/',
      o = [];
    for (let a = 0; a < r.length; ++a) {
      let l = r[a],
        u = a === r.length - 1,
        c = s === '/' ? e : e.slice(s.length) || '/',
        f = Fp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, c),
        h = l.route;
      if (
        (!f &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (f = Fp({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, c)),
        !f)
      )
        return null;
      Object.assign(i, f.params),
        o.push({ params: i, pathname: Vn([s, f.pathname]), pathnameBase: B1(Vn([s, f.pathnameBase])), route: h }),
        f.pathnameBase !== '/' && (s = Vn([s, f.pathnameBase]));
    }
    return o;
  }
  function Fp(t, e) {
    typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, r] = A1(t.path, t.caseSensitive, t.end),
      i = e.match(n);
    if (!i) return null;
    let s = i[0],
      o = s.replace(/(.)\/+$/, '$1'),
      a = i.slice(1);
    return {
      params: r.reduce((u, c, f) => {
        let { paramName: h, isOptional: d } = c;
        if (h === '*') {
          let v = a[f] || '';
          o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, '$1');
        }
        const g = a[f];
        return d && !g ? (u[h] = void 0) : (u[h] = (g || '').replace(/%2F/g, '/')), u;
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: t,
    };
  }
  function A1(t, e, n) {
    e === void 0 && (e = !1),
      n === void 0 && (n = !0),
      k0(
        t === '*' || !t.endsWith('*') || t.endsWith('/*'),
        'Route path "' +
          t +
          '" will be treated as if it were ' +
          ('"' + t.replace(/\*$/, '/*') + '" because the `*` character must ') +
          'always follow a `/` in the pattern. To get rid of this warning, ' +
          ('please change the route path to "' + t.replace(/\*$/, '/*') + '".'),
      );
    let r = [],
      i =
        '^' +
        t
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (o, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'),
          );
    return (
      t.endsWith('*')
        ? (r.push({ paramName: '*' }), (i += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : n
          ? (i += '\\/*$')
          : t !== '' && t !== '/' && (i += '(?:(?=\\/|$))'),
      [new RegExp(i, e ? void 0 : 'i'), r]
    );
  }
  function L1(t) {
    try {
      return t
        .split('/')
        .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
        .join('/');
    } catch (e) {
      return (
        k0(
          !1,
          'The URL path "' +
            t +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ('encoding (' + e + ').'),
        ),
        t
      );
    }
  }
  function Nh(t, e) {
    if (e === '/') return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith('/') ? e.length - 1 : e.length,
      r = t.charAt(n);
    return r && r !== '/' ? null : t.slice(n) || '/';
  }
  function F1(t, e) {
    e === void 0 && (e = '/');
    let { pathname: n, search: r = '', hash: i = '' } = typeof t == 'string' ? Pi(t) : t;
    return { pathname: n ? (n.startsWith('/') ? n : j1(n, e)) : e, search: V1(r), hash: U1(i) };
  }
  function j1(t, e) {
    let n = e.replace(/\/+$/, '').split('/');
    return (
      t.split('/').forEach((i) => {
        i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
      }),
      n.length > 1 ? n.join('/') : '/'
    );
  }
  function Iu(t, e, n, r) {
    return (
      "Cannot include a '" +
      t +
      "' character in a manually specified " +
      ('`to.' + e + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
      ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function z1(t) {
    return t.filter((e, n) => n === 0 || (e.route.path && e.route.path.length > 0));
  }
  function Mh(t, e) {
    let n = z1(t);
    return e ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
  }
  function Ih(t, e, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof t == 'string'
      ? (i = Pi(t))
      : ((i = Ys({}, t)),
        ke(!i.pathname || !i.pathname.includes('?'), Iu('?', 'pathname', 'search', i)),
        ke(!i.pathname || !i.pathname.includes('#'), Iu('#', 'pathname', 'hash', i)),
        ke(!i.search || !i.search.includes('#'), Iu('#', 'search', 'hash', i)));
    let s = t === '' || i.pathname === '',
      o = s ? '/' : i.pathname,
      a;
    if (o == null) a = n;
    else {
      let f = e.length - 1;
      if (!r && o.startsWith('..')) {
        let h = o.split('/');
        for (; h[0] === '..'; ) h.shift(), (f -= 1);
        i.pathname = h.join('/');
      }
      a = f >= 0 ? e[f] : '/';
    }
    let l = F1(i, a),
      u = o && o !== '/' && o.endsWith('/'),
      c = (s || o === '.') && n.endsWith('/');
    return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
  }
  const Vn = (t) => t.join('/').replace(/\/\/+/g, '/'),
    B1 = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
    V1 = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
    U1 = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
  function W1(t) {
    return (
      t != null &&
      typeof t.status == 'number' &&
      typeof t.statusText == 'string' &&
      typeof t.internal == 'boolean' &&
      'data' in t
    );
  }
  const T0 = ['post', 'put', 'patch', 'delete'];
  new Set(T0);
  const $1 = ['get', ...T0];
  new Set($1);
  /**
   * React Router v6.26.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Gs() {
    return (
      (Gs = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      Gs.apply(this, arguments)
    );
  }
  const Rh = C.createContext(null),
    Q1 = C.createContext(null),
    tr = C.createContext(null),
    Ul = C.createContext(null),
    gn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    C0 = C.createContext(null);
  function H1(t, e) {
    let { relative: n } = e === void 0 ? {} : e;
    Ni() || ke(!1);
    let { basename: r, navigator: i } = C.useContext(tr),
      { hash: s, pathname: o, search: a } = P0(t, { relative: n }),
      l = o;
    return r !== '/' && (l = o === '/' ? r : Vn([r, o])), i.createHref({ pathname: l, search: a, hash: s });
  }
  function Ni() {
    return C.useContext(Ul) != null;
  }
  function po() {
    return Ni() || ke(!1), C.useContext(Ul).location;
  }
  function D0(t) {
    C.useContext(tr).static || C.useLayoutEffect(t);
  }
  function Ah() {
    let { isDataRoute: t } = C.useContext(gn);
    return t ? oS() : q1();
  }
  function q1() {
    Ni() || ke(!1);
    let t = C.useContext(Rh),
      { basename: e, future: n, navigator: r } = C.useContext(tr),
      { matches: i } = C.useContext(gn),
      { pathname: s } = po(),
      o = JSON.stringify(Mh(i, n.v7_relativeSplatPath)),
      a = C.useRef(!1);
    return (
      D0(() => {
        a.current = !0;
      }),
      C.useCallback(
        function (u, c) {
          if ((c === void 0 && (c = {}), !a.current)) return;
          if (typeof u == 'number') {
            r.go(u);
            return;
          }
          let f = Ih(u, JSON.parse(o), s, c.relative === 'path');
          t == null && e !== '/' && (f.pathname = f.pathname === '/' ? e : Vn([e, f.pathname])),
            (c.replace ? r.replace : r.push)(f, c.state, c);
        },
        [e, r, o, s, t],
      )
    );
  }
  function Y1() {
    let { matches: t } = C.useContext(gn),
      e = t[t.length - 1];
    return e ? e.params : {};
  }
  function P0(t, e) {
    let { relative: n } = e === void 0 ? {} : e,
      { future: r } = C.useContext(tr),
      { matches: i } = C.useContext(gn),
      { pathname: s } = po(),
      o = JSON.stringify(Mh(i, r.v7_relativeSplatPath));
    return C.useMemo(() => Ih(t, JSON.parse(o), s, n === 'path'), [t, o, s, n]);
  }
  function G1(t, e) {
    return K1(t, e);
  }
  function K1(t, e, n, r) {
    Ni() || ke(!1);
    let { navigator: i } = C.useContext(tr),
      { matches: s } = C.useContext(gn),
      o = s[s.length - 1],
      a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : '/';
    o && o.route;
    let u = po(),
      c;
    if (e) {
      var f;
      let x = typeof e == 'string' ? Pi(e) : e;
      l === '/' || ((f = x.pathname) != null && f.startsWith(l)) || ke(!1), (c = x);
    } else c = u;
    let h = c.pathname || '/',
      d = h;
    if (l !== '/') {
      let x = l.replace(/^\//, '').split('/');
      d = '/' + h.replace(/^\//, '').split('/').slice(x.length).join('/');
    }
    let g = S1(t, { pathname: d }),
      v = tS(
        g &&
          g.map((x) =>
            Object.assign({}, x, {
              params: Object.assign({}, a, x.params),
              pathname: Vn([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
              pathnameBase:
                x.pathnameBase === '/'
                  ? l
                  : Vn([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
            }),
          ),
        s,
        n,
        r,
      );
    return e && v
      ? C.createElement(
          Ul.Provider,
          {
            value: {
              location: Gs({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, c),
              navigationType: Dn.Pop,
            },
          },
          v,
        )
      : v;
  }
  function X1() {
    let t = sS(),
      e = W1(t) ? t.status + ' ' + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
      n = t instanceof Error ? t.stack : null,
      i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
    return C.createElement(
      C.Fragment,
      null,
      C.createElement('h2', null, 'Unexpected Application Error!'),
      C.createElement('h3', { style: { fontStyle: 'italic' } }, e),
      n ? C.createElement('pre', { style: i }, n) : null,
      null,
    );
  }
  const J1 = C.createElement(X1, null);
  class Z1 extends C.Component {
    constructor(e) {
      super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, n) {
      return n.location !== e.location || (n.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation,
          };
    }
    componentDidCatch(e, n) {
      console.error('React Router caught the following error during render', e, n);
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            gn.Provider,
            { value: this.props.routeContext },
            C.createElement(C0.Provider, { value: this.state.error, children: this.props.component }),
          )
        : this.props.children;
    }
  }
  function eS(t) {
    let { routeContext: e, match: n, children: r } = t,
      i = C.useContext(Rh);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      C.createElement(gn.Provider, { value: e }, r)
    );
  }
  function tS(t, e, n, r) {
    var i;
    if ((e === void 0 && (e = []), n === void 0 && (n = null), r === void 0 && (r = null), t == null)) {
      var s;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else if ((s = r) != null && s.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0)
        t = n.matches;
      else return null;
    }
    let o = t,
      a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
      let c = o.findIndex((f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
      c >= 0 || ke(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
    }
    let l = !1,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let c = 0; c < o.length; c++) {
        let f = o[c];
        if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id)) {
          let { loaderData: h, errors: d } = n,
            g = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
          if (f.route.lazy || g) {
            (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
            break;
          }
        }
      }
    return o.reduceRight((c, f, h) => {
      let d,
        g = !1,
        v = null,
        x = null;
      n &&
        ((d = a && f.route.id ? a[f.route.id] : void 0),
        (v = f.route.errorElement || J1),
        l &&
          (u < 0 && h === 0
            ? ((g = !0), (x = null))
            : u === h && ((g = !0), (x = f.route.hydrateFallbackElement || null))));
      let p = e.concat(o.slice(0, h + 1)),
        m = () => {
          let y;
          return (
            d
              ? (y = v)
              : g
                ? (y = x)
                : f.route.Component
                  ? (y = C.createElement(f.route.Component, null))
                  : f.route.element
                    ? (y = f.route.element)
                    : (y = c),
            C.createElement(eS, {
              match: f,
              routeContext: { outlet: c, matches: p, isDataRoute: n != null },
              children: y,
            })
          );
        };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
        ? C.createElement(Z1, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: d,
            children: m(),
            routeContext: { outlet: null, matches: p, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  var N0 = (function (t) {
      return (
        (t.UseBlocker = 'useBlocker'), (t.UseRevalidator = 'useRevalidator'), (t.UseNavigateStable = 'useNavigate'), t
      );
    })(N0 || {}),
    il = (function (t) {
      return (
        (t.UseBlocker = 'useBlocker'),
        (t.UseLoaderData = 'useLoaderData'),
        (t.UseActionData = 'useActionData'),
        (t.UseRouteError = 'useRouteError'),
        (t.UseNavigation = 'useNavigation'),
        (t.UseRouteLoaderData = 'useRouteLoaderData'),
        (t.UseMatches = 'useMatches'),
        (t.UseRevalidator = 'useRevalidator'),
        (t.UseNavigateStable = 'useNavigate'),
        (t.UseRouteId = 'useRouteId'),
        t
      );
    })(il || {});
  function nS(t) {
    let e = C.useContext(Rh);
    return e || ke(!1), e;
  }
  function rS(t) {
    let e = C.useContext(Q1);
    return e || ke(!1), e;
  }
  function iS(t) {
    let e = C.useContext(gn);
    return e || ke(!1), e;
  }
  function M0(t) {
    let e = iS(),
      n = e.matches[e.matches.length - 1];
    return n.route.id || ke(!1), n.route.id;
  }
  function sS() {
    var t;
    let e = C.useContext(C0),
      n = rS(il.UseRouteError),
      r = M0(il.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
  }
  function oS() {
    let { router: t } = nS(N0.UseNavigateStable),
      e = M0(il.UseNavigateStable),
      n = C.useRef(!1);
    return (
      D0(() => {
        n.current = !0;
      }),
      C.useCallback(
        function (i, s) {
          s === void 0 && (s = {}),
            n.current && (typeof i == 'number' ? t.navigate(i) : t.navigate(i, Gs({ fromRouteId: e }, s)));
        },
        [t, e],
      )
    );
  }
  function Vo(t) {
    let { to: e, replace: n, state: r, relative: i } = t;
    Ni() || ke(!1);
    let { future: s, static: o } = C.useContext(tr),
      { matches: a } = C.useContext(gn),
      { pathname: l } = po(),
      u = Ah(),
      c = Ih(e, Mh(a, s.v7_relativeSplatPath), l, i === 'path'),
      f = JSON.stringify(c);
    return C.useEffect(() => u(JSON.parse(f), { replace: n, state: r, relative: i }), [u, f, i, n, r]), null;
  }
  function Lr(t) {
    ke(!1);
  }
  function aS(t) {
    let {
      basename: e = '/',
      children: n = null,
      location: r,
      navigationType: i = Dn.Pop,
      navigator: s,
      static: o = !1,
      future: a,
    } = t;
    Ni() && ke(!1);
    let l = e.replace(/^\/*/, '/'),
      u = C.useMemo(
        () => ({ basename: l, navigator: s, static: o, future: Gs({ v7_relativeSplatPath: !1 }, a) }),
        [l, a, s, o],
      );
    typeof r == 'string' && (r = Pi(r));
    let { pathname: c = '/', search: f = '', hash: h = '', state: d = null, key: g = 'default' } = r,
      v = C.useMemo(() => {
        let x = Nh(c, l);
        return x == null
          ? null
          : { location: { pathname: x, search: f, hash: h, state: d, key: g }, navigationType: i };
      }, [l, c, f, h, d, g, i]);
    return v == null
      ? null
      : C.createElement(tr.Provider, { value: u }, C.createElement(Ul.Provider, { children: n, value: v }));
  }
  function lS(t) {
    let { children: e, location: n } = t;
    return G1(Kc(e), n);
  }
  new Promise(() => {});
  function Kc(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return (
      C.Children.forEach(t, (r, i) => {
        if (!C.isValidElement(r)) return;
        let s = [...e, i];
        if (r.type === C.Fragment) {
          n.push.apply(n, Kc(r.props.children, s));
          return;
        }
        r.type !== Lr && ke(!1), !r.props.index || !r.props.children || ke(!1);
        let o = {
          id: r.props.id || s.join('-'),
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
        r.props.children && (o.children = Kc(r.props.children, s)), n.push(o);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.26.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Xc() {
    return (
      (Xc = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      Xc.apply(this, arguments)
    );
  }
  function uS(t, e) {
    if (t == null) return {};
    var n = {},
      r = Object.keys(t),
      i,
      s;
    for (s = 0; s < r.length; s++) (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n;
  }
  function cS(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function fS(t, e) {
    return t.button === 0 && (!e || e === '_self') && !cS(t);
  }
  const hS = [
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
    dS = '6';
  try {
    window.__reactRouterVersion = dS;
  } catch {}
  const pS = 'startTransition',
    jp = l_[pS];
  function gS(t) {
    let { basename: e, children: n, future: r, window: i } = t,
      s = C.useRef();
    s.current == null && (s.current = b1({ window: i, v5Compat: !0 }));
    let o = s.current,
      [a, l] = C.useState({ action: o.action, location: o.location }),
      { v7_startTransition: u } = r || {},
      c = C.useCallback(
        (f) => {
          u && jp ? jp(() => l(f)) : l(f);
        },
        [l, u],
      );
    return (
      C.useLayoutEffect(() => o.listen(c), [o, c]),
      C.createElement(aS, {
        basename: e,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r,
      })
    );
  }
  const mS = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
    vS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Wl = C.forwardRef(function (e, n) {
      let {
          onClick: r,
          relative: i,
          reloadDocument: s,
          replace: o,
          state: a,
          target: l,
          to: u,
          preventScrollReset: c,
          unstable_viewTransition: f,
        } = e,
        h = uS(e, hS),
        { basename: d } = C.useContext(tr),
        g,
        v = !1;
      if (typeof u == 'string' && vS.test(u) && ((g = u), mS))
        try {
          let y = new URL(window.location.href),
            b = u.startsWith('//') ? new URL(y.protocol + u) : new URL(u),
            _ = Nh(b.pathname, d);
          b.origin === y.origin && _ != null ? (u = _ + b.search + b.hash) : (v = !0);
        } catch {}
      let x = H1(u, { relative: i }),
        p = yS(u, { replace: o, state: a, target: l, preventScrollReset: c, relative: i, unstable_viewTransition: f });
      function m(y) {
        r && r(y), y.defaultPrevented || p(y);
      }
      return C.createElement('a', Xc({}, h, { href: g || x, onClick: v || s ? r : m, ref: n, target: l }));
    });
  var zp;
  (function (t) {
    (t.UseScrollRestoration = 'useScrollRestoration'),
      (t.UseSubmit = 'useSubmit'),
      (t.UseSubmitFetcher = 'useSubmitFetcher'),
      (t.UseFetcher = 'useFetcher'),
      (t.useViewTransitionState = 'useViewTransitionState');
  })(zp || (zp = {}));
  var Bp;
  (function (t) {
    (t.UseFetcher = 'useFetcher'), (t.UseFetchers = 'useFetchers'), (t.UseScrollRestoration = 'useScrollRestoration');
  })(Bp || (Bp = {}));
  function yS(t, e) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: s,
        relative: o,
        unstable_viewTransition: a,
      } = e === void 0 ? {} : e,
      l = Ah(),
      u = po(),
      c = P0(t, { relative: o });
    return C.useCallback(
      (f) => {
        if (fS(f, n)) {
          f.preventDefault();
          let h = r !== void 0 ? r : rl(u) === rl(c);
          l(t, { replace: h, state: i, preventScrollReset: s, relative: o, unstable_viewTransition: a });
        }
      },
      [u, l, c, r, i, n, t, s, o, a],
    );
  }
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */ function go(t) {
    return (t + 0.5) | 0;
  }
  const Pn = (t, e, n) => Math.max(Math.min(t, n), e);
  function ss(t) {
    return Pn(go(t * 2.55), 0, 255);
  }
  function Un(t) {
    return Pn(go(t * 255), 0, 255);
  }
  function rn(t) {
    return Pn(go(t / 2.55) / 100, 0, 1);
  }
  function Vp(t) {
    return Pn(go(t * 100), 0, 100);
  }
  const vt = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    Jc = [...'0123456789ABCDEF'],
    xS = (t) => Jc[t & 15],
    bS = (t) => Jc[(t & 240) >> 4] + Jc[t & 15],
    Uo = (t) => (t & 240) >> 4 === (t & 15),
    _S = (t) => Uo(t.r) && Uo(t.g) && Uo(t.b) && Uo(t.a);
  function wS(t) {
    var e = t.length,
      n;
    return (
      t[0] === '#' &&
        (e === 4 || e === 5
          ? (n = {
              r: 255 & (vt[t[1]] * 17),
              g: 255 & (vt[t[2]] * 17),
              b: 255 & (vt[t[3]] * 17),
              a: e === 5 ? vt[t[4]] * 17 : 255,
            })
          : (e === 7 || e === 9) &&
            (n = {
              r: (vt[t[1]] << 4) | vt[t[2]],
              g: (vt[t[3]] << 4) | vt[t[4]],
              b: (vt[t[5]] << 4) | vt[t[6]],
              a: e === 9 ? (vt[t[7]] << 4) | vt[t[8]] : 255,
            })),
      n
    );
  }
  const SS = (t, e) => (t < 255 ? e(t) : '');
  function kS(t) {
    var e = _S(t) ? xS : bS;
    return t ? '#' + e(t.r) + e(t.g) + e(t.b) + SS(t.a, e) : void 0;
  }
  const ES =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function I0(t, e, n) {
    const r = e * Math.min(n, 1 - n),
      i = (s, o = (s + t / 30) % 12) => n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [i(0), i(8), i(4)];
  }
  function OS(t, e, n) {
    const r = (i, s = (i + t / 60) % 6) => n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [r(5), r(3), r(1)];
  }
  function TS(t, e, n) {
    const r = I0(t, 1, 0.5);
    let i;
    for (e + n > 1 && ((i = 1 / (e + n)), (e *= i), (n *= i)), i = 0; i < 3; i++) (r[i] *= 1 - e - n), (r[i] += e);
    return r;
  }
  function CS(t, e, n, r, i) {
    return t === i ? (e - n) / r + (e < n ? 6 : 0) : e === i ? (n - t) / r + 2 : (t - e) / r + 4;
  }
  function Lh(t) {
    const n = t.r / 255,
      r = t.g / 255,
      i = t.b / 255,
      s = Math.max(n, r, i),
      o = Math.min(n, r, i),
      a = (s + o) / 2;
    let l, u, c;
    return (
      s !== o &&
        ((c = s - o), (u = a > 0.5 ? c / (2 - s - o) : c / (s + o)), (l = CS(n, r, i, c, s)), (l = l * 60 + 0.5)),
      [l | 0, u || 0, a]
    );
  }
  function Fh(t, e, n, r) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(Un);
  }
  function jh(t, e, n) {
    return Fh(I0, t, e, n);
  }
  function DS(t, e, n) {
    return Fh(TS, t, e, n);
  }
  function PS(t, e, n) {
    return Fh(OS, t, e, n);
  }
  function R0(t) {
    return ((t % 360) + 360) % 360;
  }
  function NS(t) {
    const e = ES.exec(t);
    let n = 255,
      r;
    if (!e) return;
    e[5] !== r && (n = e[6] ? ss(+e[5]) : Un(+e[5]));
    const i = R0(+e[2]),
      s = +e[3] / 100,
      o = +e[4] / 100;
    return (
      e[1] === 'hwb' ? (r = DS(i, s, o)) : e[1] === 'hsv' ? (r = PS(i, s, o)) : (r = jh(i, s, o)),
      { r: r[0], g: r[1], b: r[2], a: n }
    );
  }
  function MS(t, e) {
    var n = Lh(t);
    (n[0] = R0(n[0] + e)), (n = jh(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
  }
  function IS(t) {
    if (!t) return;
    const e = Lh(t),
      n = e[0],
      r = Vp(e[1]),
      i = Vp(e[2]);
    return t.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${rn(t.a)})` : `hsl(${n}, ${r}%, ${i}%)`;
  }
  const Up = {
      x: 'dark',
      Z: 'light',
      Y: 're',
      X: 'blu',
      W: 'gr',
      V: 'medium',
      U: 'slate',
      A: 'ee',
      T: 'ol',
      S: 'or',
      B: 'ra',
      C: 'lateg',
      D: 'ights',
      R: 'in',
      Q: 'turquois',
      E: 'hi',
      P: 'ro',
      O: 'al',
      N: 'le',
      M: 'de',
      L: 'yello',
      F: 'en',
      K: 'ch',
      G: 'arks',
      H: 'ea',
      I: 'ightg',
      J: 'wh',
    },
    Wp = {
      OiceXe: 'f0f8ff',
      antiquewEte: 'faebd7',
      aqua: 'ffff',
      aquamarRe: '7fffd4',
      azuY: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '0',
      blanKedOmond: 'ffebcd',
      Xe: 'ff',
      XeviTet: '8a2be2',
      bPwn: 'a52a2a',
      burlywood: 'deb887',
      caMtXe: '5f9ea0',
      KartYuse: '7fff00',
      KocTate: 'd2691e',
      cSO: 'ff7f50',
      cSnflowerXe: '6495ed',
      cSnsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: 'ffff',
      xXe: '8b',
      xcyan: '8b8b',
      xgTMnPd: 'b8860b',
      xWay: 'a9a9a9',
      xgYF: '6400',
      xgYy: 'a9a9a9',
      xkhaki: 'bdb76b',
      xmagFta: '8b008b',
      xTivegYF: '556b2f',
      xSange: 'ff8c00',
      xScEd: '9932cc',
      xYd: '8b0000',
      xsOmon: 'e9967a',
      xsHgYF: '8fbc8f',
      xUXe: '483d8b',
      xUWay: '2f4f4f',
      xUgYy: '2f4f4f',
      xQe: 'ced1',
      xviTet: '9400d3',
      dAppRk: 'ff1493',
      dApskyXe: 'bfff',
      dimWay: '696969',
      dimgYy: '696969',
      dodgerXe: '1e90ff',
      fiYbrick: 'b22222',
      flSOwEte: 'fffaf0',
      foYstWAn: '228b22',
      fuKsia: 'ff00ff',
      gaRsbSo: 'dcdcdc',
      ghostwEte: 'f8f8ff',
      gTd: 'ffd700',
      gTMnPd: 'daa520',
      Way: '808080',
      gYF: '8000',
      gYFLw: 'adff2f',
      gYy: '808080',
      honeyMw: 'f0fff0',
      hotpRk: 'ff69b4',
      RdianYd: 'cd5c5c',
      Rdigo: '4b0082',
      ivSy: 'fffff0',
      khaki: 'f0e68c',
      lavFMr: 'e6e6fa',
      lavFMrXsh: 'fff0f5',
      lawngYF: '7cfc00',
      NmoncEffon: 'fffacd',
      ZXe: 'add8e6',
      ZcSO: 'f08080',
      Zcyan: 'e0ffff',
      ZgTMnPdLw: 'fafad2',
      ZWay: 'd3d3d3',
      ZgYF: '90ee90',
      ZgYy: 'd3d3d3',
      ZpRk: 'ffb6c1',
      ZsOmon: 'ffa07a',
      ZsHgYF: '20b2aa',
      ZskyXe: '87cefa',
      ZUWay: '778899',
      ZUgYy: '778899',
      ZstAlXe: 'b0c4de',
      ZLw: 'ffffe0',
      lime: 'ff00',
      limegYF: '32cd32',
      lRF: 'faf0e6',
      magFta: 'ff00ff',
      maPon: '800000',
      VaquamarRe: '66cdaa',
      VXe: 'cd',
      VScEd: 'ba55d3',
      VpurpN: '9370db',
      VsHgYF: '3cb371',
      VUXe: '7b68ee',
      VsprRggYF: 'fa9a',
      VQe: '48d1cc',
      VviTetYd: 'c71585',
      midnightXe: '191970',
      mRtcYam: 'f5fffa',
      mistyPse: 'ffe4e1',
      moccasR: 'ffe4b5',
      navajowEte: 'ffdead',
      navy: '80',
      Tdlace: 'fdf5e6',
      Tive: '808000',
      TivedBb: '6b8e23',
      Sange: 'ffa500',
      SangeYd: 'ff4500',
      ScEd: 'da70d6',
      pOegTMnPd: 'eee8aa',
      pOegYF: '98fb98',
      pOeQe: 'afeeee',
      pOeviTetYd: 'db7093',
      papayawEp: 'ffefd5',
      pHKpuff: 'ffdab9',
      peru: 'cd853f',
      pRk: 'ffc0cb',
      plum: 'dda0dd',
      powMrXe: 'b0e0e6',
      purpN: '800080',
      YbeccapurpN: '663399',
      Yd: 'ff0000',
      Psybrown: 'bc8f8f',
      PyOXe: '4169e1',
      saddNbPwn: '8b4513',
      sOmon: 'fa8072',
      sandybPwn: 'f4a460',
      sHgYF: '2e8b57',
      sHshell: 'fff5ee',
      siFna: 'a0522d',
      silver: 'c0c0c0',
      skyXe: '87ceeb',
      UXe: '6a5acd',
      UWay: '708090',
      UgYy: '708090',
      snow: 'fffafa',
      sprRggYF: 'ff7f',
      stAlXe: '4682b4',
      tan: 'd2b48c',
      teO: '8080',
      tEstN: 'd8bfd8',
      tomato: 'ff6347',
      Qe: '40e0d0',
      viTet: 'ee82ee',
      JHt: 'f5deb3',
      wEte: 'ffffff',
      wEtesmoke: 'f5f5f5',
      Lw: 'ffff00',
      LwgYF: '9acd32',
    };
  function RS() {
    const t = {},
      e = Object.keys(Wp),
      n = Object.keys(Up);
    let r, i, s, o, a;
    for (r = 0; r < e.length; r++) {
      for (o = a = e[r], i = 0; i < n.length; i++) (s = n[i]), (a = a.replace(s, Up[s]));
      (s = parseInt(Wp[o], 16)), (t[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return t;
  }
  let Wo;
  function AS(t) {
    Wo || ((Wo = RS()), (Wo.transparent = [0, 0, 0, 0]));
    const e = Wo[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
  }
  const LS = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function FS(t) {
    const e = LS.exec(t);
    let n = 255,
      r,
      i,
      s;
    if (e) {
      if (e[7] !== r) {
        const o = +e[7];
        n = e[8] ? ss(o) : Pn(o * 255, 0, 255);
      }
      return (
        (r = +e[1]),
        (i = +e[3]),
        (s = +e[5]),
        (r = 255 & (e[2] ? ss(r) : Pn(r, 0, 255))),
        (i = 255 & (e[4] ? ss(i) : Pn(i, 0, 255))),
        (s = 255 & (e[6] ? ss(s) : Pn(s, 0, 255))),
        { r, g: i, b: s, a: n }
      );
    }
  }
  function jS(t) {
    return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${rn(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
  }
  const Ru = (t) => (t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055),
    Rr = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function zS(t, e, n) {
    const r = Rr(rn(t.r)),
      i = Rr(rn(t.g)),
      s = Rr(rn(t.b));
    return {
      r: Un(Ru(r + n * (Rr(rn(e.r)) - r))),
      g: Un(Ru(i + n * (Rr(rn(e.g)) - i))),
      b: Un(Ru(s + n * (Rr(rn(e.b)) - s))),
      a: t.a + n * (e.a - t.a),
    };
  }
  function $o(t, e, n) {
    if (t) {
      let r = Lh(t);
      (r[e] = Math.max(0, Math.min(r[e] + r[e] * n, e === 0 ? 360 : 1))),
        (r = jh(r)),
        (t.r = r[0]),
        (t.g = r[1]),
        (t.b = r[2]);
    }
  }
  function A0(t, e) {
    return t && Object.assign(e || {}, t);
  }
  function $p(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 && ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = Un(t[3])))
        : ((e = A0(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Un(e.a))),
      e
    );
  }
  function BS(t) {
    return t.charAt(0) === 'r' ? FS(t) : NS(t);
  }
  class Ks {
    constructor(e) {
      if (e instanceof Ks) return e;
      const n = typeof e;
      let r;
      n === 'object' ? (r = $p(e)) : n === 'string' && (r = wS(e) || AS(e) || BS(e)),
        (this._rgb = r),
        (this._valid = !!r);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var e = A0(this._rgb);
      return e && (e.a = rn(e.a)), e;
    }
    set rgb(e) {
      this._rgb = $p(e);
    }
    rgbString() {
      return this._valid ? jS(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? kS(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? IS(this._rgb) : void 0;
    }
    mix(e, n) {
      if (e) {
        const r = this.rgb,
          i = e.rgb;
        let s;
        const o = n === s ? 0.5 : n,
          a = 2 * o - 1,
          l = r.a - i.a,
          u = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
        (s = 1 - u),
          (r.r = 255 & (u * r.r + s * i.r + 0.5)),
          (r.g = 255 & (u * r.g + s * i.g + 0.5)),
          (r.b = 255 & (u * r.b + s * i.b + 0.5)),
          (r.a = o * r.a + (1 - o) * i.a),
          (this.rgb = r);
      }
      return this;
    }
    interpolate(e, n) {
      return e && (this._rgb = zS(this._rgb, e._rgb, n)), this;
    }
    clone() {
      return new Ks(this.rgb);
    }
    alpha(e) {
      return (this._rgb.a = Un(e)), this;
    }
    clearer(e) {
      const n = this._rgb;
      return (n.a *= 1 - e), this;
    }
    greyscale() {
      const e = this._rgb,
        n = go(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
      return (e.r = e.g = e.b = n), this;
    }
    opaquer(e) {
      const n = this._rgb;
      return (n.a *= 1 + e), this;
    }
    negate() {
      const e = this._rgb;
      return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
    }
    lighten(e) {
      return $o(this._rgb, 2, e), this;
    }
    darken(e) {
      return $o(this._rgb, 2, -e), this;
    }
    saturate(e) {
      return $o(this._rgb, 1, e), this;
    }
    desaturate(e) {
      return $o(this._rgb, 1, -e), this;
    }
    rotate(e) {
      return MS(this._rgb, e), this;
    }
  }
  /*!
   * Chart.js v4.4.4
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   */ function Xt() {}
  const VS = (() => {
    let t = 0;
    return () => t++;
  })();
  function de(t) {
    return t === null || typeof t > 'u';
  }
  function we(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
  }
  function G(t) {
    return t !== null && Object.prototype.toString.call(t) === '[object Object]';
  }
  function Ae(t) {
    return (typeof t == 'number' || t instanceof Number) && isFinite(+t);
  }
  function ct(t, e) {
    return Ae(t) ? t : e;
  }
  function Z(t, e) {
    return typeof t > 'u' ? e : t;
  }
  const US = (t, e) => (typeof t == 'string' && t.endsWith('%') ? parseFloat(t) / 100 : +t / e),
    L0 = (t, e) => (typeof t == 'string' && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
  function se(t, e, n) {
    if (t && typeof t.call == 'function') return t.apply(n, e);
  }
  function te(t, e, n, r) {
    let i, s, o;
    if (we(t)) for (s = t.length, i = 0; i < s; i++) e.call(n, t[i], i);
    else if (G(t)) for (o = Object.keys(t), s = o.length, i = 0; i < s; i++) e.call(n, t[o[i]], o[i]);
  }
  function sl(t, e) {
    let n, r, i, s;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, r = t.length; n < r; ++n)
      if (((i = t[n]), (s = e[n]), i.datasetIndex !== s.datasetIndex || i.index !== s.index)) return !1;
    return !0;
  }
  function ol(t) {
    if (we(t)) return t.map(ol);
    if (G(t)) {
      const e = Object.create(null),
        n = Object.keys(t),
        r = n.length;
      let i = 0;
      for (; i < r; ++i) e[n[i]] = ol(t[n[i]]);
      return e;
    }
    return t;
  }
  function F0(t) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(t) === -1;
  }
  function WS(t, e, n, r) {
    if (!F0(t)) return;
    const i = e[t],
      s = n[t];
    G(i) && G(s) ? Xs(i, s, r) : (e[t] = ol(s));
  }
  function Xs(t, e, n) {
    const r = we(e) ? e : [e],
      i = r.length;
    if (!G(t)) return t;
    n = n || {};
    const s = n.merger || WS;
    let o;
    for (let a = 0; a < i; ++a) {
      if (((o = r[a]), !G(o))) continue;
      const l = Object.keys(o);
      for (let u = 0, c = l.length; u < c; ++u) s(l[u], t, o, n);
    }
    return t;
  }
  function _s(t, e) {
    return Xs(t, e, { merger: $S });
  }
  function $S(t, e, n) {
    if (!F0(t)) return;
    const r = e[t],
      i = n[t];
    G(r) && G(i) ? _s(r, i) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ol(i));
  }
  const Qp = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
  function QS(t) {
    const e = t.split('.'),
      n = [];
    let r = '';
    for (const i of e) (r += i), r.endsWith('\\') ? (r = r.slice(0, -1) + '.') : (n.push(r), (r = ''));
    return n;
  }
  function HS(t) {
    const e = QS(t);
    return (n) => {
      for (const r of e) {
        if (r === '') break;
        n = n && n[r];
      }
      return n;
    };
  }
  function Js(t, e) {
    return (Qp[e] || (Qp[e] = HS(e)))(t);
  }
  function zh(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const al = (t) => typeof t < 'u',
    Hn = (t) => typeof t == 'function',
    Hp = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const n of t) if (!e.has(n)) return !1;
      return !0;
    };
  function qS(t) {
    return t.type === 'mouseup' || t.type === 'click' || t.type === 'contextmenu';
  }
  const Te = Math.PI,
    ve = 2 * Te,
    ll = Number.POSITIVE_INFINITY,
    YS = Te / 180,
    Se = Te / 2,
    rr = Te / 4,
    qp = (Te * 2) / 3,
    Nn = Math.log10,
    ul = Math.sign;
  function xa(t, e, n) {
    return Math.abs(t - e) < n;
  }
  function Yp(t) {
    const e = Math.round(t);
    t = xa(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Nn(t))),
      r = t / n;
    return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
  }
  function GS(t) {
    const e = [],
      n = Math.sqrt(t);
    let r;
    for (r = 1; r < n; r++) t % r === 0 && (e.push(r), e.push(t / r));
    return n === (n | 0) && e.push(n), e.sort((i, s) => i - s).pop(), e;
  }
  function cl(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function KS(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t;
  }
  function j0(t, e, n) {
    let r, i, s;
    for (r = 0, i = t.length; r < i; r++)
      (s = t[r][n]), isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
  }
  function Wt(t) {
    return t * (Te / 180);
  }
  function Bh(t) {
    return t * (180 / Te);
  }
  function Gp(t) {
    if (!Ae(t)) return;
    let e = 1,
      n = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
    return n;
  }
  function z0(t, e) {
    const n = e.x - t.x,
      r = e.y - t.y,
      i = Math.sqrt(n * n + r * r);
    let s = Math.atan2(r, n);
    return s < -0.5 * Te && (s += ve), { angle: s, distance: i };
  }
  function XS(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Bt(t) {
    return ((t % ve) + ve) % ve;
  }
  function fl(t, e, n, r) {
    const i = Bt(t),
      s = Bt(e),
      o = Bt(n),
      a = Bt(s - i),
      l = Bt(o - i),
      u = Bt(i - s),
      c = Bt(i - o);
    return i === s || i === o || (r && s === o) || (a > l && u < c);
  }
  function _t(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function JS(t) {
    return _t(t, -32768, 32767);
  }
  function os(t, e, n, r = 1e-6) {
    return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r;
  }
  function Vh(t, e, n) {
    n = n || ((o) => t[o] < e);
    let r = t.length - 1,
      i = 0,
      s;
    for (; r - i > 1; ) (s = (i + r) >> 1), n(s) ? (i = s) : (r = s);
    return { lo: i, hi: r };
  }
  const Zc = (t, e, n, r) =>
      Vh(
        t,
        n,
        r
          ? (i) => {
              const s = t[i][e];
              return s < n || (s === n && t[i + 1][e] === n);
            }
          : (i) => t[i][e] < n,
      ),
    ZS = (t, e, n) => Vh(t, n, (r) => t[r][e] >= n);
  function ek(t, e, n) {
    let r = 0,
      i = t.length;
    for (; r < i && t[r] < e; ) r++;
    for (; i > r && t[i - 1] > n; ) i--;
    return r > 0 || i < t.length ? t.slice(r, i) : t;
  }
  const B0 = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function tk(t, e) {
    if (t._chartjs) {
      t._chartjs.listeners.push(e);
      return;
    }
    Object.defineProperty(t, '_chartjs', { configurable: !0, enumerable: !1, value: { listeners: [e] } }),
      B0.forEach((n) => {
        const r = '_onData' + zh(n),
          i = t[n];
        Object.defineProperty(t, n, {
          configurable: !0,
          enumerable: !1,
          value(...s) {
            const o = i.apply(this, s);
            return (
              t._chartjs.listeners.forEach((a) => {
                typeof a[r] == 'function' && a[r](...s);
              }),
              o
            );
          },
        });
      });
  }
  function Kp(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const r = n.listeners,
      i = r.indexOf(e);
    i !== -1 && r.splice(i, 1),
      !(r.length > 0) &&
        (B0.forEach((s) => {
          delete t[s];
        }),
        delete t._chartjs);
  }
  function nk(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const V0 = (function () {
    return typeof window > 'u'
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  })();
  function U0(t, e) {
    let n = [],
      r = !1;
    return function (...i) {
      (n = i),
        r ||
          ((r = !0),
          V0.call(window, () => {
            (r = !1), t.apply(e, n);
          }));
    };
  }
  function rk(t, e) {
    let n;
    return function (...r) {
      return e ? (clearTimeout(n), (n = setTimeout(t, e, r))) : t.apply(this, r), e;
    };
  }
  const W0 = (t) => (t === 'start' ? 'left' : t === 'end' ? 'right' : 'center'),
    ut = (t, e, n) => (t === 'start' ? e : t === 'end' ? n : (e + n) / 2),
    ik = (t, e, n, r) => (t === (r ? 'left' : 'right') ? n : t === 'center' ? (e + n) / 2 : e),
    Qo = (t) => t === 0 || t === 1,
    Xp = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ve) / n)),
    Jp = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * ve) / n) + 1,
    ws = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)),
      easeInSine: (t) => -Math.cos(t * Se) + 1,
      easeOutSine: (t) => Math.sin(t * Se),
      easeInOutSine: (t) => -0.5 * (Math.cos(Te * t) - 1),
      easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
      easeInOutExpo: (t) =>
        Qo(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (Qo(t) ? t : Xp(t, 0.075, 0.3)),
      easeOutElastic: (t) => (Qo(t) ? t : Jp(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        return Qo(t) ? t : t < 0.5 ? 0.5 * Xp(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * Jp(t * 2 - 1, 0.1125, 0.45);
      },
      easeInBack(t) {
        return t * t * ((1.70158 + 1) * t - 1.70158);
      },
      easeOutBack(t) {
        return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= 0.5) < 1
          ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
          : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - ws.easeOutBounce(1 - t),
      easeOutBounce(t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      easeInOutBounce: (t) => (t < 0.5 ? ws.easeInBounce(t * 2) * 0.5 : ws.easeOutBounce(t * 2 - 1) * 0.5 + 0.5),
    };
  function $0(t) {
    if (t && typeof t == 'object') {
      const e = t.toString();
      return e === '[object CanvasPattern]' || e === '[object CanvasGradient]';
    }
    return !1;
  }
  function Zp(t) {
    return $0(t) ? t : new Ks(t);
  }
  function Au(t) {
    return $0(t) ? t : new Ks(t).saturate(0.5).darken(0.1).hexString();
  }
  const sk = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    ok = ['color', 'borderColor', 'backgroundColor'];
  function ak(t) {
    t.set('animation', {
      delay: void 0,
      duration: 1e3,
      easing: 'easeOutQuart',
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0,
    }),
      t.describe('animation', {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (e) => e !== 'onProgress' && e !== 'onComplete' && e !== 'fn',
      }),
      t.set('animations', { colors: { type: 'color', properties: ok }, numbers: { type: 'number', properties: sk } }),
      t.describe('animations', { _fallback: 'animation' }),
      t.set('transitions', {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: { animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } } },
        hide: {
          animations: {
            colors: { to: 'transparent' },
            visible: { type: 'boolean', easing: 'linear', fn: (e) => e | 0 },
          },
        },
      });
  }
  function lk(t) {
    t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  }
  const eg = new Map();
  function uk(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let r = eg.get(n);
    return r || ((r = new Intl.NumberFormat(t, e)), eg.set(n, r)), r;
  }
  function $l(t, e, n) {
    return uk(e, n).format(t);
  }
  const Q0 = {
    values(t) {
      return we(t) ? t : '' + t;
    },
    numeric(t, e, n) {
      if (t === 0) return '0';
      const r = this.chart.options.locale;
      let i,
        s = t;
      if (n.length > 1) {
        const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
        (u < 1e-4 || u > 1e15) && (i = 'scientific'), (s = ck(t, n));
      }
      const o = Nn(Math.abs(s)),
        a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
        l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
      return Object.assign(l, this.options.ticks.format), $l(t, r, l);
    },
    logarithmic(t, e, n) {
      if (t === 0) return '0';
      const r = n[e].significand || t / Math.pow(10, Math.floor(Nn(t)));
      return [1, 2, 3, 5, 10, 15].includes(r) || e > 0.8 * n.length ? Q0.numeric.call(this, t, e, n) : '';
    },
  };
  function ck(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
  }
  var Ql = { formatters: Q0 };
  function fk(t) {
    t.set('scale', {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: 'ticks',
      clip: !0,
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (e, n) => n.lineWidth,
        tickColor: (e, n) => n.color,
        offset: !1,
      },
      border: { display: !0, dash: [], dashOffset: 0, width: 1 },
      title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: '',
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ql.formatters.values,
        minor: {},
        major: {},
        align: 'center',
        crossAlign: 'near',
        showLabelBackdrop: !1,
        backdropColor: 'rgba(255, 255, 255, 0.75)',
        backdropPadding: 2,
      },
    }),
      t.route('scale.ticks', 'color', '', 'color'),
      t.route('scale.grid', 'color', '', 'borderColor'),
      t.route('scale.border', 'color', '', 'borderColor'),
      t.route('scale.title', 'color', '', 'color'),
      t.describe('scale', {
        _fallback: !1,
        _scriptable: (e) => !e.startsWith('before') && !e.startsWith('after') && e !== 'callback' && e !== 'parser',
        _indexable: (e) => e !== 'borderDash' && e !== 'tickBorderDash' && e !== 'dash',
      }),
      t.describe('scales', { _fallback: 'scale' }),
      t.describe('scale.ticks', {
        _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
        _indexable: (e) => e !== 'backdropPadding',
      });
  }
  const kr = Object.create(null),
    ef = Object.create(null);
  function Ss(t, e) {
    if (!e) return t;
    const n = e.split('.');
    for (let r = 0, i = n.length; r < i; ++r) {
      const s = n[r];
      t = t[s] || (t[s] = Object.create(null));
    }
    return t;
  }
  function Lu(t, e, n) {
    return typeof e == 'string' ? Xs(Ss(t, e), n) : Xs(Ss(t, ''), e);
  }
  class hk {
    constructor(e, n) {
      (this.animation = void 0),
        (this.backgroundColor = 'rgba(0,0,0,0.1)'),
        (this.borderColor = 'rgba(0,0,0,0.1)'),
        (this.color = '#666'),
        (this.datasets = {}),
        (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: 'normal',
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (r, i) => Au(i.backgroundColor)),
        (this.hoverBorderColor = (r, i) => Au(i.borderColor)),
        (this.hoverColor = (r, i) => Au(i.color)),
        (this.indexAxis = 'x'),
        (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(e),
        this.apply(n);
    }
    set(e, n) {
      return Lu(this, e, n);
    }
    get(e) {
      return Ss(this, e);
    }
    describe(e, n) {
      return Lu(ef, e, n);
    }
    override(e, n) {
      return Lu(kr, e, n);
    }
    route(e, n, r, i) {
      const s = Ss(this, e),
        o = Ss(this, r),
        a = '_' + n;
      Object.defineProperties(s, {
        [a]: { value: s[n], writable: !0 },
        [n]: {
          enumerable: !0,
          get() {
            const l = this[a],
              u = o[i];
            return G(l) ? Object.assign({}, u, l) : Z(l, u);
          },
          set(l) {
            this[a] = l;
          },
        },
      });
    }
    apply(e) {
      e.forEach((n) => n(this));
    }
  }
  var ye = new hk(
    {
      _scriptable: (t) => !t.startsWith('on'),
      _indexable: (t) => t !== 'events',
      hover: { _fallback: 'interaction' },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [ak, lk, fk],
  );
  function dk(t) {
    return !t || de(t.size) || de(t.family)
      ? null
      : (t.style ? t.style + ' ' : '') + (t.weight ? t.weight + ' ' : '') + t.size + 'px ' + t.family;
  }
  function hl(t, e, n, r, i) {
    let s = e[i];
    return s || ((s = e[i] = t.measureText(i).width), n.push(i)), s > r && (r = s), r;
  }
  function pk(t, e, n, r) {
    r = r || {};
    let i = (r.data = r.data || {}),
      s = (r.garbageCollect = r.garbageCollect || []);
    r.font !== e && ((i = r.data = {}), (s = r.garbageCollect = []), (r.font = e)), t.save(), (t.font = e);
    let o = 0;
    const a = n.length;
    let l, u, c, f, h;
    for (l = 0; l < a; l++)
      if (((f = n[l]), f != null && !we(f))) o = hl(t, i, s, o, f);
      else if (we(f)) for (u = 0, c = f.length; u < c; u++) (h = f[u]), h != null && !we(h) && (o = hl(t, i, s, o, h));
    t.restore();
    const d = s.length / 2;
    if (d > n.length) {
      for (l = 0; l < d; l++) delete i[s[l]];
      s.splice(0, d);
    }
    return o;
  }
  function ir(t, e, n) {
    const r = t.currentDevicePixelRatio,
      i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - i) * r) / r + i;
  }
  function tg(t, e) {
    (!e && !t) ||
      ((e = e || t.getContext('2d')), e.save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
  }
  function ng(t, e, n, r) {
    H0(t, e, n, r, null);
  }
  function H0(t, e, n, r, i) {
    let s, o, a, l, u, c, f, h;
    const d = e.pointStyle,
      g = e.rotation,
      v = e.radius;
    let x = (g || 0) * YS;
    if (
      d &&
      typeof d == 'object' &&
      ((s = d.toString()), s === '[object HTMLImageElement]' || s === '[object HTMLCanvasElement]')
    ) {
      t.save(),
        t.translate(n, r),
        t.rotate(x),
        t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
        t.restore();
      return;
    }
    if (!(isNaN(v) || v <= 0)) {
      switch ((t.beginPath(), d)) {
        default:
          i ? t.ellipse(n, r, i / 2, v, 0, 0, ve) : t.arc(n, r, v, 0, ve), t.closePath();
          break;
        case 'triangle':
          (c = i ? i / 2 : v),
            t.moveTo(n + Math.sin(x) * c, r - Math.cos(x) * v),
            (x += qp),
            t.lineTo(n + Math.sin(x) * c, r - Math.cos(x) * v),
            (x += qp),
            t.lineTo(n + Math.sin(x) * c, r - Math.cos(x) * v),
            t.closePath();
          break;
        case 'rectRounded':
          (u = v * 0.516),
            (l = v - u),
            (o = Math.cos(x + rr) * l),
            (f = Math.cos(x + rr) * (i ? i / 2 - u : l)),
            (a = Math.sin(x + rr) * l),
            (h = Math.sin(x + rr) * (i ? i / 2 - u : l)),
            t.arc(n - f, r - a, u, x - Te, x - Se),
            t.arc(n + h, r - o, u, x - Se, x),
            t.arc(n + f, r + a, u, x, x + Se),
            t.arc(n - h, r + o, u, x + Se, x + Te),
            t.closePath();
          break;
        case 'rect':
          if (!g) {
            (l = Math.SQRT1_2 * v), (c = i ? i / 2 : l), t.rect(n - c, r - l, 2 * c, 2 * l);
            break;
          }
          x += rr;
        case 'rectRot':
          (f = Math.cos(x) * (i ? i / 2 : v)),
            (o = Math.cos(x) * v),
            (a = Math.sin(x) * v),
            (h = Math.sin(x) * (i ? i / 2 : v)),
            t.moveTo(n - f, r - a),
            t.lineTo(n + h, r - o),
            t.lineTo(n + f, r + a),
            t.lineTo(n - h, r + o),
            t.closePath();
          break;
        case 'crossRot':
          x += rr;
        case 'cross':
          (f = Math.cos(x) * (i ? i / 2 : v)),
            (o = Math.cos(x) * v),
            (a = Math.sin(x) * v),
            (h = Math.sin(x) * (i ? i / 2 : v)),
            t.moveTo(n - f, r - a),
            t.lineTo(n + f, r + a),
            t.moveTo(n + h, r - o),
            t.lineTo(n - h, r + o);
          break;
        case 'star':
          (f = Math.cos(x) * (i ? i / 2 : v)),
            (o = Math.cos(x) * v),
            (a = Math.sin(x) * v),
            (h = Math.sin(x) * (i ? i / 2 : v)),
            t.moveTo(n - f, r - a),
            t.lineTo(n + f, r + a),
            t.moveTo(n + h, r - o),
            t.lineTo(n - h, r + o),
            (x += rr),
            (f = Math.cos(x) * (i ? i / 2 : v)),
            (o = Math.cos(x) * v),
            (a = Math.sin(x) * v),
            (h = Math.sin(x) * (i ? i / 2 : v)),
            t.moveTo(n - f, r - a),
            t.lineTo(n + f, r + a),
            t.moveTo(n + h, r - o),
            t.lineTo(n - h, r + o);
          break;
        case 'line':
          (o = i ? i / 2 : Math.cos(x) * v), (a = Math.sin(x) * v), t.moveTo(n - o, r - a), t.lineTo(n + o, r + a);
          break;
        case 'dash':
          t.moveTo(n, r), t.lineTo(n + Math.cos(x) * (i ? i / 2 : v), r + Math.sin(x) * v);
          break;
        case !1:
          t.closePath();
          break;
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function Xr(t, e, n) {
    return (n = n || 0.5), !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n);
  }
  function Uh(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }
  function Wh(t) {
    t.restore();
  }
  function gk(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
      de(e.rotation) || t.rotate(e.rotation),
      e.color && (t.fillStyle = e.color),
      e.textAlign && (t.textAlign = e.textAlign),
      e.textBaseline && (t.textBaseline = e.textBaseline);
  }
  function mk(t, e, n, r, i) {
    if (i.strikethrough || i.underline) {
      const s = t.measureText(r),
        o = e - s.actualBoundingBoxLeft,
        a = e + s.actualBoundingBoxRight,
        l = n - s.actualBoundingBoxAscent,
        u = n + s.actualBoundingBoxDescent,
        c = i.strikethrough ? (l + u) / 2 : u;
      (t.strokeStyle = t.fillStyle),
        t.beginPath(),
        (t.lineWidth = i.decorationWidth || 2),
        t.moveTo(o, c),
        t.lineTo(a, c),
        t.stroke();
    }
  }
  function vk(t, e) {
    const n = t.fillStyle;
    (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
  }
  function bi(t, e, n, r, i, s = {}) {
    const o = we(e) ? e : [e],
      a = s.strokeWidth > 0 && s.strokeColor !== '';
    let l, u;
    for (t.save(), t.font = i.string, gk(t, s), l = 0; l < o.length; ++l)
      (u = o[l]),
        s.backdrop && vk(t, s.backdrop),
        a &&
          (s.strokeColor && (t.strokeStyle = s.strokeColor),
          de(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
          t.strokeText(u, n, r, s.maxWidth)),
        t.fillText(u, n, r, s.maxWidth),
        mk(t, n, r, u, s),
        (r += Number(i.lineHeight));
    t.restore();
  }
  function dl(t, e) {
    const { x: n, y: r, w: i, h: s, radius: o } = e;
    t.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * Te, Te, !0),
      t.lineTo(n, r + s - o.bottomLeft),
      t.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, Te, Se, !0),
      t.lineTo(n + i - o.bottomRight, r + s),
      t.arc(n + i - o.bottomRight, r + s - o.bottomRight, o.bottomRight, Se, 0, !0),
      t.lineTo(n + i, r + o.topRight),
      t.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -Se, !0),
      t.lineTo(n + o.topLeft, r);
  }
  const yk = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    xk = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function bk(t, e) {
    const n = ('' + t).match(yk);
    if (!n || n[1] === 'normal') return e * 1.2;
    switch (((t = +n[2]), n[3])) {
      case 'px':
        return t;
      case '%':
        t /= 100;
        break;
    }
    return e * t;
  }
  const _k = (t) => +t || 0;
  function $h(t, e) {
    const n = {},
      r = G(e),
      i = r ? Object.keys(e) : e,
      s = G(t) ? (r ? (o) => Z(t[o], t[e[o]]) : (o) => t[o]) : () => t;
    for (const o of i) n[o] = _k(s(o));
    return n;
  }
  function wk(t) {
    return $h(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function li(t) {
    return $h(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function Ge(t) {
    const e = wk(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
  }
  function ze(t, e) {
    (t = t || {}), (e = e || ye.font);
    let n = Z(t.size, e.size);
    typeof n == 'string' && (n = parseInt(n, 10));
    let r = Z(t.style, e.style);
    r && !('' + r).match(xk) && (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
    const i = {
      family: Z(t.family, e.family),
      lineHeight: bk(Z(t.lineHeight, e.lineHeight), n),
      size: n,
      style: r,
      weight: Z(t.weight, e.weight),
      string: '',
    };
    return (i.string = dk(i)), i;
  }
  function Ho(t, e, n, r) {
    let i, s, o;
    for (i = 0, s = t.length; i < s; ++i) if (((o = t[i]), o !== void 0 && o !== void 0)) return o;
  }
  function Sk(t, e, n) {
    const { min: r, max: i } = t,
      s = L0(e, (i - r) / 2),
      o = (a, l) => (n && a === 0 ? 0 : a + l);
    return { min: o(r, -Math.abs(s)), max: o(i, s) };
  }
  function Pr(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Qh(t, e = [''], n, r, i = () => t[0]) {
    const s = n || t;
    typeof r > 'u' && (r = K0('_fallback', t));
    const o = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: t,
      _rootScopes: s,
      _fallback: r,
      _getTarget: i,
      override: (a) => Qh([a, ...t], e, s, r),
    };
    return new Proxy(o, {
      deleteProperty(a, l) {
        return delete a[l], delete a._keys, delete t[0][l], !0;
      },
      get(a, l) {
        return Y0(a, l, () => Nk(l, e, t, a));
      },
      getOwnPropertyDescriptor(a, l) {
        return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(t[0]);
      },
      has(a, l) {
        return ig(a).includes(l);
      },
      ownKeys(a) {
        return ig(a);
      },
      set(a, l, u) {
        const c = a._storage || (a._storage = i());
        return (a[l] = c[l] = u), delete a._keys, !0;
      },
    });
  }
  function _i(t, e, n, r) {
    const i = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: q0(t, r),
      setContext: (s) => _i(t, s, n, r),
      override: (s) => _i(t.override(s), e, n, r),
    };
    return new Proxy(i, {
      deleteProperty(s, o) {
        return delete s[o], delete t[o], !0;
      },
      get(s, o, a) {
        return Y0(s, o, () => Ek(s, o, a));
      },
      getOwnPropertyDescriptor(s, o) {
        return s._descriptors.allKeys
          ? Reflect.has(t, o)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, o);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(t);
      },
      has(s, o) {
        return Reflect.has(t, o);
      },
      ownKeys() {
        return Reflect.ownKeys(t);
      },
      set(s, o, a) {
        return (t[o] = a), delete s[o], !0;
      },
    });
  }
  function q0(t, e = { scriptable: !0, indexable: !0 }) {
    const { _scriptable: n = e.scriptable, _indexable: r = e.indexable, _allKeys: i = e.allKeys } = t;
    return {
      allKeys: i,
      scriptable: n,
      indexable: r,
      isScriptable: Hn(n) ? n : () => n,
      isIndexable: Hn(r) ? r : () => r,
    };
  }
  const kk = (t, e) => (t ? t + zh(e) : e),
    Hh = (t, e) => G(e) && t !== 'adapters' && (Object.getPrototypeOf(e) === null || e.constructor === Object);
  function Y0(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || e === 'constructor') return t[e];
    const r = n();
    return (t[e] = r), r;
  }
  function Ek(t, e, n) {
    const { _proxy: r, _context: i, _subProxy: s, _descriptors: o } = t;
    let a = r[e];
    return (
      Hn(a) && o.isScriptable(e) && (a = Ok(e, a, t, n)),
      we(a) && a.length && (a = Tk(e, a, t, o.isIndexable)),
      Hh(e, a) && (a = _i(a, i, s && s[e], o)),
      a
    );
  }
  function Ok(t, e, n, r) {
    const { _proxy: i, _context: s, _subProxy: o, _stack: a } = n;
    if (a.has(t)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + t);
    a.add(t);
    let l = e(s, o || r);
    return a.delete(t), Hh(t, l) && (l = qh(i._scopes, i, t, l)), l;
  }
  function Tk(t, e, n, r) {
    const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n;
    if (typeof s.index < 'u' && r(t)) return e[s.index % e.length];
    if (G(e[0])) {
      const l = e,
        u = i._scopes.filter((c) => c !== l);
      e = [];
      for (const c of l) {
        const f = qh(u, i, t, c);
        e.push(_i(f, s, o && o[t], a));
      }
    }
    return e;
  }
  function G0(t, e, n) {
    return Hn(t) ? t(e, n) : t;
  }
  const Ck = (t, e) => (t === !0 ? e : typeof t == 'string' ? Js(e, t) : void 0);
  function Dk(t, e, n, r, i) {
    for (const s of e) {
      const o = Ck(n, s);
      if (o) {
        t.add(o);
        const a = G0(o._fallback, n, i);
        if (typeof a < 'u' && a !== n && a !== r) return a;
      } else if (o === !1 && typeof r < 'u' && n !== r) return null;
    }
    return !1;
  }
  function qh(t, e, n, r) {
    const i = e._rootScopes,
      s = G0(e._fallback, n, r),
      o = [...t, ...i],
      a = new Set();
    a.add(r);
    let l = rg(a, o, n, s || n, r);
    return l === null || (typeof s < 'u' && s !== n && ((l = rg(a, o, s, l, r)), l === null))
      ? !1
      : Qh(Array.from(a), [''], i, s, () => Pk(e, n, r));
  }
  function rg(t, e, n, r, i) {
    for (; n; ) n = Dk(t, e, n, r, i);
    return n;
  }
  function Pk(t, e, n) {
    const r = t._getTarget();
    e in r || (r[e] = {});
    const i = r[e];
    return we(i) && G(n) ? n : i || {};
  }
  function Nk(t, e, n, r) {
    let i;
    for (const s of e) if (((i = K0(kk(s, t), n)), typeof i < 'u')) return Hh(t, i) ? qh(n, r, t, i) : i;
  }
  function K0(t, e) {
    for (const n of e) {
      if (!n) continue;
      const r = n[t];
      if (typeof r < 'u') return r;
    }
  }
  function ig(t) {
    let e = t._keys;
    return e || (e = t._keys = Mk(t._scopes)), e;
  }
  function Mk(t) {
    const e = new Set();
    for (const n of t) for (const r of Object.keys(n).filter((i) => !i.startsWith('_'))) e.add(r);
    return Array.from(e);
  }
  function Yh() {
    return typeof window < 'u' && typeof document < 'u';
  }
  function Gh(t) {
    let e = t.parentNode;
    return e && e.toString() === '[object ShadowRoot]' && (e = e.host), e;
  }
  function pl(t, e, n) {
    let r;
    return (
      typeof t == 'string'
        ? ((r = parseInt(t, 10)), t.indexOf('%') !== -1 && (r = (r / 100) * e.parentNode[n]))
        : (r = t),
      r
    );
  }
  const Hl = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  function Ik(t, e) {
    return Hl(t).getPropertyValue(e);
  }
  const Rk = ['top', 'right', 'bottom', 'left'];
  function yr(t, e, n) {
    const r = {};
    n = n ? '-' + n : '';
    for (let i = 0; i < 4; i++) {
      const s = Rk[i];
      r[s] = parseFloat(t[e + '-' + s + n]) || 0;
    }
    return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
  }
  const Ak = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
  function Lk(t, e) {
    const n = t.touches,
      r = n && n.length ? n[0] : t,
      { offsetX: i, offsetY: s } = r;
    let o = !1,
      a,
      l;
    if (Ak(i, s, t.target)) (a = i), (l = s);
    else {
      const u = e.getBoundingClientRect();
      (a = r.clientX - u.left), (l = r.clientY - u.top), (o = !0);
    }
    return { x: a, y: l, box: o };
  }
  function ur(t, e) {
    if ('native' in t) return t;
    const { canvas: n, currentDevicePixelRatio: r } = e,
      i = Hl(n),
      s = i.boxSizing === 'border-box',
      o = yr(i, 'padding'),
      a = yr(i, 'border', 'width'),
      { x: l, y: u, box: c } = Lk(t, n),
      f = o.left + (c && a.left),
      h = o.top + (c && a.top);
    let { width: d, height: g } = e;
    return (
      s && ((d -= o.width + a.width), (g -= o.height + a.height)),
      { x: Math.round((((l - f) / d) * n.width) / r), y: Math.round((((u - h) / g) * n.height) / r) }
    );
  }
  function Fk(t, e, n) {
    let r, i;
    if (e === void 0 || n === void 0) {
      const s = t && Gh(t);
      if (!s) (e = t.clientWidth), (n = t.clientHeight);
      else {
        const o = s.getBoundingClientRect(),
          a = Hl(s),
          l = yr(a, 'border', 'width'),
          u = yr(a, 'padding');
        (e = o.width - u.width - l.width),
          (n = o.height - u.height - l.height),
          (r = pl(a.maxWidth, s, 'clientWidth')),
          (i = pl(a.maxHeight, s, 'clientHeight'));
      }
    }
    return { width: e, height: n, maxWidth: r || ll, maxHeight: i || ll };
  }
  const qo = (t) => Math.round(t * 10) / 10;
  function jk(t, e, n, r) {
    const i = Hl(t),
      s = yr(i, 'margin'),
      o = pl(i.maxWidth, t, 'clientWidth') || ll,
      a = pl(i.maxHeight, t, 'clientHeight') || ll,
      l = Fk(t, e, n);
    let { width: u, height: c } = l;
    if (i.boxSizing === 'content-box') {
      const h = yr(i, 'border', 'width'),
        d = yr(i, 'padding');
      (u -= d.width + h.width), (c -= d.height + h.height);
    }
    return (
      (u = Math.max(0, u - s.width)),
      (c = Math.max(0, r ? u / r : c - s.height)),
      (u = qo(Math.min(u, o, l.maxWidth))),
      (c = qo(Math.min(c, a, l.maxHeight))),
      u && !c && (c = qo(u / 2)),
      (e !== void 0 || n !== void 0) && r && l.height && c > l.height && ((c = l.height), (u = qo(Math.floor(c * r)))),
      { width: u, height: c }
    );
  }
  function sg(t, e, n) {
    const r = e || 1,
      i = Math.floor(t.height * r),
      s = Math.floor(t.width * r);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const o = t.canvas;
    return (
      o.style &&
        (n || (!o.style.height && !o.style.width)) &&
        ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
      t.currentDevicePixelRatio !== r || o.height !== i || o.width !== s
        ? ((t.currentDevicePixelRatio = r), (o.height = i), (o.width = s), t.ctx.setTransform(r, 0, 0, r, 0, 0), !0)
        : !1
    );
  }
  const zk = (function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return (t = !0), !1;
        },
      };
      Yh() && (window.addEventListener('test', null, e), window.removeEventListener('test', null, e));
    } catch {}
    return t;
  })();
  function og(t, e) {
    const n = Ik(t, e),
      r = n && n.match(/^(\d+)(\.\d+)?px$/);
    return r ? +r[1] : void 0;
  }
  const Bk = function (t, e) {
      return {
        x(n) {
          return t + t + e - n;
        },
        setWidth(n) {
          e = n;
        },
        textAlign(n) {
          return n === 'center' ? n : n === 'right' ? 'left' : 'right';
        },
        xPlus(n, r) {
          return n - r;
        },
        leftForLtr(n, r) {
          return n - r;
        },
      };
    },
    Vk = function () {
      return {
        x(t) {
          return t;
        },
        setWidth(t) {},
        textAlign(t) {
          return t;
        },
        xPlus(t, e) {
          return t + e;
        },
        leftForLtr(t, e) {
          return t;
        },
      };
    };
  function ui(t, e, n) {
    return t ? Bk(e, n) : Vk();
  }
  function X0(t, e) {
    let n, r;
    (e === 'ltr' || e === 'rtl') &&
      ((n = t.canvas.style),
      (r = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
      n.setProperty('direction', e, 'important'),
      (t.prevTextDirection = r));
  }
  function J0(t, e) {
    e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
  }
  /*!
   * Chart.js v4.4.4
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   */ class Uk {
    constructor() {
      (this._request = null), (this._charts = new Map()), (this._running = !1), (this._lastDate = void 0);
    }
    _notify(e, n, r, i) {
      const s = n.listeners[i],
        o = n.duration;
      s.forEach((a) => a({ chart: e, initial: n.initial, numSteps: o, currentStep: Math.min(r - n.start, o) }));
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = V0.call(window, () => {
          this._update(), (this._request = null), this._running && this._refresh();
        })));
    }
    _update(e = Date.now()) {
      let n = 0;
      this._charts.forEach((r, i) => {
        if (!r.running || !r.items.length) return;
        const s = r.items;
        let o = s.length - 1,
          a = !1,
          l;
        for (; o >= 0; --o)
          (l = s[o]),
            l._active
              ? (l._total > r.duration && (r.duration = l._total), l.tick(e), (a = !0))
              : ((s[o] = s[s.length - 1]), s.pop());
        a && (i.draw(), this._notify(i, r, e, 'progress')),
          s.length || ((r.running = !1), this._notify(i, r, e, 'complete'), (r.initial = !1)),
          (n += s.length);
      }),
        (this._lastDate = e),
        n === 0 && (this._running = !1);
    }
    _getAnims(e) {
      const n = this._charts;
      let r = n.get(e);
      return (
        r || ((r = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }), n.set(e, r)), r
      );
    }
    listen(e, n, r) {
      this._getAnims(e).listeners[n].push(r);
    }
    add(e, n) {
      !n || !n.length || this._getAnims(e).items.push(...n);
    }
    has(e) {
      return this._getAnims(e).items.length > 0;
    }
    start(e) {
      const n = this._charts.get(e);
      n &&
        ((n.running = !0),
        (n.start = Date.now()),
        (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
        this._refresh());
    }
    running(e) {
      if (!this._running) return !1;
      const n = this._charts.get(e);
      return !(!n || !n.running || !n.items.length);
    }
    stop(e) {
      const n = this._charts.get(e);
      if (!n || !n.items.length) return;
      const r = n.items;
      let i = r.length - 1;
      for (; i >= 0; --i) r[i].cancel();
      (n.items = []), this._notify(e, n, Date.now(), 'complete');
    }
    remove(e) {
      return this._charts.delete(e);
    }
  }
  var Zt = new Uk();
  const ag = 'transparent',
    Wk = {
      boolean(t, e, n) {
        return n > 0.5 ? e : t;
      },
      color(t, e, n) {
        const r = Zp(t || ag),
          i = r.valid && Zp(e || ag);
        return i && i.valid ? i.mix(r, n).hexString() : e;
      },
      number(t, e, n) {
        return t + (e - t) * n;
      },
    };
  class $k {
    constructor(e, n, r, i) {
      const s = n[r];
      i = Ho([e.to, i, s, e.from]);
      const o = Ho([e.from, s, i]);
      (this._active = !0),
        (this._fn = e.fn || Wk[e.type || typeof o]),
        (this._easing = ws[e.easing] || ws.linear),
        (this._start = Math.floor(Date.now() + (e.delay || 0))),
        (this._duration = this._total = Math.floor(e.duration)),
        (this._loop = !!e.loop),
        (this._target = n),
        (this._prop = r),
        (this._from = o),
        (this._to = i),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(e, n, r) {
      if (this._active) {
        this._notify(!1);
        const i = this._target[this._prop],
          s = r - this._start,
          o = this._duration - s;
        (this._start = r),
          (this._duration = Math.floor(Math.max(o, e.duration))),
          (this._total += s),
          (this._loop = !!e.loop),
          (this._to = Ho([e.to, n, i, e.from])),
          (this._from = Ho([e.from, i, n]));
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(e) {
      const n = e - this._start,
        r = this._duration,
        i = this._prop,
        s = this._from,
        o = this._loop,
        a = this._to;
      let l;
      if (((this._active = s !== a && (o || n < r)), !this._active)) {
        (this._target[i] = a), this._notify(!0);
        return;
      }
      if (n < 0) {
        this._target[i] = s;
        return;
      }
      (l = (n / r) % 2),
        (l = o && l > 1 ? 2 - l : l),
        (l = this._easing(Math.min(1, Math.max(0, l)))),
        (this._target[i] = this._fn(s, a, l));
    }
    wait() {
      const e = this._promises || (this._promises = []);
      return new Promise((n, r) => {
        e.push({ res: n, rej: r });
      });
    }
    _notify(e) {
      const n = e ? 'res' : 'rej',
        r = this._promises || [];
      for (let i = 0; i < r.length; i++) r[i][n]();
    }
  }
  class Z0 {
    constructor(e, n) {
      (this._chart = e), (this._properties = new Map()), this.configure(n);
    }
    configure(e) {
      if (!G(e)) return;
      const n = Object.keys(ye.animation),
        r = this._properties;
      Object.getOwnPropertyNames(e).forEach((i) => {
        const s = e[i];
        if (!G(s)) return;
        const o = {};
        for (const a of n) o[a] = s[a];
        ((we(s.properties) && s.properties) || [i]).forEach((a) => {
          (a === i || !r.has(a)) && r.set(a, o);
        });
      });
    }
    _animateOptions(e, n) {
      const r = n.options,
        i = Hk(e, r);
      if (!i) return [];
      const s = this._createAnimations(i, r);
      return (
        r.$shared &&
          Qk(e.options.$animations, r).then(
            () => {
              e.options = r;
            },
            () => {},
          ),
        s
      );
    }
    _createAnimations(e, n) {
      const r = this._properties,
        i = [],
        s = e.$animations || (e.$animations = {}),
        o = Object.keys(n),
        a = Date.now();
      let l;
      for (l = o.length - 1; l >= 0; --l) {
        const u = o[l];
        if (u.charAt(0) === '$') continue;
        if (u === 'options') {
          i.push(...this._animateOptions(e, n));
          continue;
        }
        const c = n[u];
        let f = s[u];
        const h = r.get(u);
        if (f)
          if (h && f.active()) {
            f.update(h, c, a);
            continue;
          } else f.cancel();
        if (!h || !h.duration) {
          e[u] = c;
          continue;
        }
        (s[u] = f = new $k(h, e, u, c)), i.push(f);
      }
      return i;
    }
    update(e, n) {
      if (this._properties.size === 0) {
        Object.assign(e, n);
        return;
      }
      const r = this._createAnimations(e, n);
      if (r.length) return Zt.add(this._chart, r), !0;
    }
  }
  function Qk(t, e) {
    const n = [],
      r = Object.keys(e);
    for (let i = 0; i < r.length; i++) {
      const s = t[r[i]];
      s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
  }
  function Hk(t, e) {
    if (!e) return;
    let n = t.options;
    if (!n) {
      t.options = e;
      return;
    }
    return n.$shared && (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
  }
  function lg(t, e) {
    const n = (t && t.options) || {},
      r = n.reverse,
      i = n.min === void 0 ? e : 0,
      s = n.max === void 0 ? e : 0;
    return { start: r ? s : i, end: r ? i : s };
  }
  function qk(t, e, n) {
    if (n === !1) return !1;
    const r = lg(t, n),
      i = lg(e, n);
    return { top: i.end, right: r.end, bottom: i.start, left: r.start };
  }
  function Yk(t) {
    let e, n, r, i;
    return (
      G(t) ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left)) : (e = n = r = i = t),
      { top: e, right: n, bottom: r, left: i, disabled: t === !1 }
    );
  }
  function ex(t, e) {
    const n = [],
      r = t._getSortedDatasetMetas(e);
    let i, s;
    for (i = 0, s = r.length; i < s; ++i) n.push(r[i].index);
    return n;
  }
  function ug(t, e, n, r = {}) {
    const i = t.keys,
      s = r.mode === 'single';
    let o, a, l, u;
    if (e !== null) {
      for (o = 0, a = i.length; o < a; ++o) {
        if (((l = +i[o]), l === n)) {
          if (r.all) continue;
          break;
        }
        (u = t.values[l]), Ae(u) && (s || e === 0 || ul(e) === ul(u)) && (e += u);
      }
      return e;
    }
  }
  function Gk(t, e) {
    const { iScale: n, vScale: r } = e,
      i = n.axis === 'x' ? 'x' : 'y',
      s = r.axis === 'x' ? 'x' : 'y',
      o = Object.keys(t),
      a = new Array(o.length);
    let l, u, c;
    for (l = 0, u = o.length; l < u; ++l) (c = o[l]), (a[l] = { [i]: c, [s]: t[c] });
    return a;
  }
  function cg(t, e) {
    const n = t && t.options.stacked;
    return n || (n === void 0 && e.stack !== void 0);
  }
  function Kk(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`;
  }
  function Xk(t) {
    const { min: e, max: n, minDefined: r, maxDefined: i } = t.getUserBounds();
    return { min: r ? e : Number.NEGATIVE_INFINITY, max: i ? n : Number.POSITIVE_INFINITY };
  }
  function Jk(t, e, n) {
    const r = t[e] || (t[e] = {});
    return r[n] || (r[n] = {});
  }
  function fg(t, e, n, r) {
    for (const i of e.getMatchingVisibleMetas(r).reverse()) {
      const s = t[i.index];
      if ((n && s > 0) || (!n && s < 0)) return i.index;
    }
    return null;
  }
  function hg(t, e) {
    const { chart: n, _cachedMeta: r } = t,
      i = n._stacks || (n._stacks = {}),
      { iScale: s, vScale: o, index: a } = r,
      l = s.axis,
      u = o.axis,
      c = Kk(s, o, r),
      f = e.length;
    let h;
    for (let d = 0; d < f; ++d) {
      const g = e[d],
        { [l]: v, [u]: x } = g,
        p = g._stacks || (g._stacks = {});
      (h = p[u] = Jk(i, c, v)), (h[a] = x), (h._top = fg(h, o, !0, r.type)), (h._bottom = fg(h, o, !1, r.type));
      const m = h._visualValues || (h._visualValues = {});
      m[a] = x;
    }
  }
  function Fu(t, e) {
    const n = t.scales;
    return Object.keys(n)
      .filter((r) => n[r].axis === e)
      .shift();
  }
  function Zk(t, e) {
    return Pr(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: 'default', type: 'dataset' });
  }
  function eE(t, e, n) {
    return Pr(t, {
      active: !1,
      dataIndex: e,
      parsed: void 0,
      raw: void 0,
      element: n,
      index: e,
      mode: 'default',
      type: 'data',
    });
  }
  function Qi(t, e) {
    const n = t.controller.index,
      r = t.vScale && t.vScale.axis;
    if (r) {
      e = e || t._parsed;
      for (const i of e) {
        const s = i._stacks;
        if (!s || s[r] === void 0 || s[r][n] === void 0) return;
        delete s[r][n],
          s[r]._visualValues !== void 0 && s[r]._visualValues[n] !== void 0 && delete s[r]._visualValues[n];
      }
    }
  }
  const ju = (t) => t === 'reset' || t === 'none',
    dg = (t, e) => (e ? t : Object.assign({}, t)),
    tE = (t, e, n) => t && !e.hidden && e._stacked && { keys: ex(n, !0), values: null };
  class ks {
    constructor(e, n) {
      (this.chart = e),
        (this._ctx = e.ctx),
        (this.index = n),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        (this.datasetElementType = new.target.datasetElementType),
        (this.dataElementType = new.target.dataElementType),
        this.initialize();
    }
    initialize() {
      const e = this._cachedMeta;
      this.configure(),
        this.linkScales(),
        (e._stacked = cg(e.vScale, e)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled('filler') &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
          );
    }
    updateIndex(e) {
      this.index !== e && Qi(this._cachedMeta), (this.index = e);
    }
    linkScales() {
      const e = this.chart,
        n = this._cachedMeta,
        r = this.getDataset(),
        i = (f, h, d, g) => (f === 'x' ? h : f === 'r' ? g : d),
        s = (n.xAxisID = Z(r.xAxisID, Fu(e, 'x'))),
        o = (n.yAxisID = Z(r.yAxisID, Fu(e, 'y'))),
        a = (n.rAxisID = Z(r.rAxisID, Fu(e, 'r'))),
        l = n.indexAxis,
        u = (n.iAxisID = i(l, s, o, a)),
        c = (n.vAxisID = i(l, o, s, a));
      (n.xScale = this.getScaleForId(s)),
        (n.yScale = this.getScaleForId(o)),
        (n.rScale = this.getScaleForId(a)),
        (n.iScale = this.getScaleForId(u)),
        (n.vScale = this.getScaleForId(c));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(e) {
      return this.chart.scales[e];
    }
    _getOtherScale(e) {
      const n = this._cachedMeta;
      return e === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
      this._update('reset');
    }
    _destroy() {
      const e = this._cachedMeta;
      this._data && Kp(this._data, this), e._stacked && Qi(e);
    }
    _dataCheck() {
      const e = this.getDataset(),
        n = e.data || (e.data = []),
        r = this._data;
      if (G(n)) {
        const i = this._cachedMeta;
        this._data = Gk(n, i);
      } else if (r !== n) {
        if (r) {
          Kp(r, this);
          const i = this._cachedMeta;
          Qi(i), (i._parsed = []);
        }
        n && Object.isExtensible(n) && tk(n, this), (this._syncList = []), (this._data = n);
      }
    }
    addElements() {
      const e = this._cachedMeta;
      this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(e) {
      const n = this._cachedMeta,
        r = this.getDataset();
      let i = !1;
      this._dataCheck();
      const s = n._stacked;
      (n._stacked = cg(n.vScale, n)),
        n.stack !== r.stack && ((i = !0), Qi(n), (n.stack = r.stack)),
        this._resyncElements(e),
        (i || s !== n._stacked) && hg(this, n._parsed);
    }
    configure() {
      const e = this.chart.config,
        n = e.datasetScopeKeys(this._type),
        r = e.getOptionScopes(this.getDataset(), n, !0);
      (this.options = e.createResolver(r, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {});
    }
    parse(e, n) {
      const { _cachedMeta: r, _data: i } = this,
        { iScale: s, _stacked: o } = r,
        a = s.axis;
      let l = e === 0 && n === i.length ? !0 : r._sorted,
        u = e > 0 && r._parsed[e - 1],
        c,
        f,
        h;
      if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (h = i);
      else {
        we(i[e])
          ? (h = this.parseArrayData(r, i, e, n))
          : G(i[e])
            ? (h = this.parseObjectData(r, i, e, n))
            : (h = this.parsePrimitiveData(r, i, e, n));
        const d = () => f[a] === null || (u && f[a] < u[a]);
        for (c = 0; c < n; ++c) (r._parsed[c + e] = f = h[c]), l && (d() && (l = !1), (u = f));
        r._sorted = l;
      }
      o && hg(this, h);
    }
    parsePrimitiveData(e, n, r, i) {
      const { iScale: s, vScale: o } = e,
        a = s.axis,
        l = o.axis,
        u = s.getLabels(),
        c = s === o,
        f = new Array(i);
      let h, d, g;
      for (h = 0, d = i; h < d; ++h) (g = h + r), (f[h] = { [a]: c || s.parse(u[g], g), [l]: o.parse(n[g], g) });
      return f;
    }
    parseArrayData(e, n, r, i) {
      const { xScale: s, yScale: o } = e,
        a = new Array(i);
      let l, u, c, f;
      for (l = 0, u = i; l < u; ++l) (c = l + r), (f = n[c]), (a[l] = { x: s.parse(f[0], c), y: o.parse(f[1], c) });
      return a;
    }
    parseObjectData(e, n, r, i) {
      const { xScale: s, yScale: o } = e,
        { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
        u = new Array(i);
      let c, f, h, d;
      for (c = 0, f = i; c < f; ++c)
        (h = c + r), (d = n[h]), (u[c] = { x: s.parse(Js(d, a), h), y: o.parse(Js(d, l), h) });
      return u;
    }
    getParsed(e) {
      return this._cachedMeta._parsed[e];
    }
    getDataElement(e) {
      return this._cachedMeta.data[e];
    }
    applyStack(e, n, r) {
      const i = this.chart,
        s = this._cachedMeta,
        o = n[e.axis],
        a = { keys: ex(i, !0), values: n._stacks[e.axis]._visualValues };
      return ug(a, o, s.index, { mode: r });
    }
    updateRangeFromParsed(e, n, r, i) {
      const s = r[n.axis];
      let o = s === null ? NaN : s;
      const a = i && r._stacks[n.axis];
      i && a && ((i.values = a), (o = ug(i, s, this._cachedMeta.index))),
        (e.min = Math.min(e.min, o)),
        (e.max = Math.max(e.max, o));
    }
    getMinMax(e, n) {
      const r = this._cachedMeta,
        i = r._parsed,
        s = r._sorted && e === r.iScale,
        o = i.length,
        a = this._getOtherScale(e),
        l = tE(n, r, this.chart),
        u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: c, max: f } = Xk(a);
      let h, d;
      function g() {
        d = i[h];
        const v = d[a.axis];
        return !Ae(d[e.axis]) || c > v || f < v;
      }
      for (h = 0; h < o && !(!g() && (this.updateRangeFromParsed(u, e, d, l), s)); ++h);
      if (s) {
        for (h = o - 1; h >= 0; --h)
          if (!g()) {
            this.updateRangeFromParsed(u, e, d, l);
            break;
          }
      }
      return u;
    }
    getAllParsedValues(e) {
      const n = this._cachedMeta._parsed,
        r = [];
      let i, s, o;
      for (i = 0, s = n.length; i < s; ++i) (o = n[i][e.axis]), Ae(o) && r.push(o);
      return r;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(e) {
      const n = this._cachedMeta,
        r = n.iScale,
        i = n.vScale,
        s = this.getParsed(e);
      return { label: r ? '' + r.getLabelForValue(s[r.axis]) : '', value: i ? '' + i.getLabelForValue(s[i.axis]) : '' };
    }
    _update(e) {
      const n = this._cachedMeta;
      this.update(e || 'default'), (n._clip = Yk(Z(this.options.clip, qk(n.xScale, n.yScale, this.getMaxOverflow()))));
    }
    update(e) {}
    draw() {
      const e = this._ctx,
        n = this.chart,
        r = this._cachedMeta,
        i = r.data || [],
        s = n.chartArea,
        o = [],
        a = this._drawStart || 0,
        l = this._drawCount || i.length - a,
        u = this.options.drawActiveElementsOnTop;
      let c;
      for (r.dataset && r.dataset.draw(e, s, a, l), c = a; c < a + l; ++c) {
        const f = i[c];
        f.hidden || (f.active && u ? o.push(f) : f.draw(e, s));
      }
      for (c = 0; c < o.length; ++c) o[c].draw(e, s);
    }
    getStyle(e, n) {
      const r = n ? 'active' : 'default';
      return e === void 0 && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(r)
        : this.resolveDataElementOptions(e || 0, r);
    }
    getContext(e, n, r) {
      const i = this.getDataset();
      let s;
      if (e >= 0 && e < this._cachedMeta.data.length) {
        const o = this._cachedMeta.data[e];
        (s = o.$context || (o.$context = eE(this.getContext(), e, o))),
          (s.parsed = this.getParsed(e)),
          (s.raw = i.data[e]),
          (s.index = s.dataIndex = e);
      } else
        (s = this.$context || (this.$context = Zk(this.chart.getContext(), this.index))),
          (s.dataset = i),
          (s.index = s.datasetIndex = this.index);
      return (s.active = !!n), (s.mode = r), s;
    }
    resolveDatasetElementOptions(e) {
      return this._resolveElementOptions(this.datasetElementType.id, e);
    }
    resolveDataElementOptions(e, n) {
      return this._resolveElementOptions(this.dataElementType.id, n, e);
    }
    _resolveElementOptions(e, n = 'default', r) {
      const i = n === 'active',
        s = this._cachedDataOpts,
        o = e + '-' + n,
        a = s[o],
        l = this.enableOptionSharing && al(r);
      if (a) return dg(a, l);
      const u = this.chart.config,
        c = u.datasetElementScopeKeys(this._type, e),
        f = i ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
        h = u.getOptionScopes(this.getDataset(), c),
        d = Object.keys(ye.elements[e]),
        g = () => this.getContext(r, i, n),
        v = u.resolveNamedOptions(h, d, g, f);
      return v.$shared && ((v.$shared = l), (s[o] = Object.freeze(dg(v, l)))), v;
    }
    _resolveAnimations(e, n, r) {
      const i = this.chart,
        s = this._cachedDataOpts,
        o = `animation-${n}`,
        a = s[o];
      if (a) return a;
      let l;
      if (i.options.animation !== !1) {
        const c = this.chart.config,
          f = c.datasetAnimationScopeKeys(this._type, n),
          h = c.getOptionScopes(this.getDataset(), f);
        l = c.createResolver(h, this.getContext(e, r, n));
      }
      const u = new Z0(i, l && l.animations);
      return l && l._cacheable && (s[o] = Object.freeze(u)), u;
    }
    getSharedOptions(e) {
      if (e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
    }
    includeOptions(e, n) {
      return !n || ju(e) || this.chart._animationsDisabled;
    }
    _getSharedOptions(e, n) {
      const r = this.resolveDataElementOptions(e, n),
        i = this._sharedOptions,
        s = this.getSharedOptions(r),
        o = this.includeOptions(n, s) || s !== i;
      return this.updateSharedOptions(s, n, r), { sharedOptions: s, includeOptions: o };
    }
    updateElement(e, n, r, i) {
      ju(i) ? Object.assign(e, r) : this._resolveAnimations(n, i).update(e, r);
    }
    updateSharedOptions(e, n, r) {
      e && !ju(n) && this._resolveAnimations(void 0, n).update(e, r);
    }
    _setStyle(e, n, r, i) {
      e.active = i;
      const s = this.getStyle(n, i);
      this._resolveAnimations(n, r, i).update(e, { options: (!i && this.getSharedOptions(s)) || s });
    }
    removeHoverStyle(e, n, r) {
      this._setStyle(e, r, 'active', !1);
    }
    setHoverStyle(e, n, r) {
      this._setStyle(e, r, 'active', !0);
    }
    _removeDatasetHoverStyle() {
      const e = this._cachedMeta.dataset;
      e && this._setStyle(e, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
      const e = this._cachedMeta.dataset;
      e && this._setStyle(e, void 0, 'active', !0);
    }
    _resyncElements(e) {
      const n = this._data,
        r = this._cachedMeta.data;
      for (const [a, l, u] of this._syncList) this[a](l, u);
      this._syncList = [];
      const i = r.length,
        s = n.length,
        o = Math.min(s, i);
      o && this.parse(0, o), s > i ? this._insertElements(i, s - i, e) : s < i && this._removeElements(s, i - s);
    }
    _insertElements(e, n, r = !0) {
      const i = this._cachedMeta,
        s = i.data,
        o = e + n;
      let a;
      const l = (u) => {
        for (u.length += n, a = u.length - 1; a >= o; a--) u[a] = u[a - n];
      };
      for (l(s), a = e; a < o; ++a) s[a] = new this.dataElementType();
      this._parsing && l(i._parsed), this.parse(e, n), r && this.updateElements(s, e, n, 'reset');
    }
    updateElements(e, n, r, i) {}
    _removeElements(e, n) {
      const r = this._cachedMeta;
      if (this._parsing) {
        const i = r._parsed.splice(e, n);
        r._stacked && Qi(r, i);
      }
      r.data.splice(e, n);
    }
    _sync(e) {
      if (this._parsing) this._syncList.push(e);
      else {
        const [n, r, i] = e;
        this[n](r, i);
      }
      this.chart._dataChanges.push([this.index, ...e]);
    }
    _onDataPush() {
      const e = arguments.length;
      this._sync(['_insertElements', this.getDataset().data.length - e, e]);
    }
    _onDataPop() {
      this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(e, n) {
      n && this._sync(['_removeElements', e, n]);
      const r = arguments.length - 2;
      r && this._sync(['_insertElements', e, r]);
    }
    _onDataUnshift() {
      this._sync(['_insertElements', 0, arguments.length]);
    }
  }
  V(ks, 'defaults', {}), V(ks, 'datasetElementType', null), V(ks, 'dataElementType', null);
  function nE(t, e, n) {
    let r = 1,
      i = 1,
      s = 0,
      o = 0;
    if (e < ve) {
      const a = t,
        l = a + e,
        u = Math.cos(a),
        c = Math.sin(a),
        f = Math.cos(l),
        h = Math.sin(l),
        d = (y, b, _) => (fl(y, a, l, !0) ? 1 : Math.max(b, b * n, _, _ * n)),
        g = (y, b, _) => (fl(y, a, l, !0) ? -1 : Math.min(b, b * n, _, _ * n)),
        v = d(0, u, f),
        x = d(Se, c, h),
        p = g(Te, u, f),
        m = g(Te + Se, c, h);
      (r = (v - p) / 2), (i = (x - m) / 2), (s = -(v + p) / 2), (o = -(x + m) / 2);
    }
    return { ratioX: r, ratioY: i, offsetX: s, offsetY: o };
  }
  class as extends ks {
    constructor(e, n) {
      super(e, n),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0);
    }
    linkScales() {}
    parse(e, n) {
      const r = this.getDataset().data,
        i = this._cachedMeta;
      if (this._parsing === !1) i._parsed = r;
      else {
        let s = (l) => +r[l];
        if (G(r[e])) {
          const { key: l = 'value' } = this._parsing;
          s = (u) => +Js(r[u], l);
        }
        let o, a;
        for (o = e, a = e + n; o < a; ++o) i._parsed[o] = s(o);
      }
    }
    _getRotation() {
      return Wt(this.options.rotation - 90);
    }
    _getCircumference() {
      return Wt(this.options.circumference);
    }
    _getRotationExtents() {
      let e = ve,
        n = -ve;
      for (let r = 0; r < this.chart.data.datasets.length; ++r)
        if (this.chart.isDatasetVisible(r) && this.chart.getDatasetMeta(r).type === this._type) {
          const i = this.chart.getDatasetMeta(r).controller,
            s = i._getRotation(),
            o = i._getCircumference();
          (e = Math.min(e, s)), (n = Math.max(n, s + o));
        }
      return { rotation: e, circumference: n - e };
    }
    update(e) {
      const n = this.chart,
        { chartArea: r } = n,
        i = this._cachedMeta,
        s = i.data,
        o = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
        a = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
        l = Math.min(US(this.options.cutout, a), 1),
        u = this._getRingWeight(this.index),
        { circumference: c, rotation: f } = this._getRotationExtents(),
        { ratioX: h, ratioY: d, offsetX: g, offsetY: v } = nE(f, c, l),
        x = (r.width - o) / h,
        p = (r.height - o) / d,
        m = Math.max(Math.min(x, p) / 2, 0),
        y = L0(this.options.radius, m),
        b = Math.max(y * l, 0),
        _ = (y - b) / this._getVisibleDatasetWeightTotal();
      (this.offsetX = g * y),
        (this.offsetY = v * y),
        (i.total = this.calculateTotal()),
        (this.outerRadius = y - _ * this._getRingWeightOffset(this.index)),
        (this.innerRadius = Math.max(this.outerRadius - _ * u, 0)),
        this.updateElements(s, 0, s.length, e);
    }
    _circumference(e, n) {
      const r = this.options,
        i = this._cachedMeta,
        s = this._getCircumference();
      return (n && r.animation.animateRotate) ||
        !this.chart.getDataVisibility(e) ||
        i._parsed[e] === null ||
        i.data[e].hidden
        ? 0
        : this.calculateCircumference((i._parsed[e] * s) / ve);
    }
    updateElements(e, n, r, i) {
      const s = i === 'reset',
        o = this.chart,
        a = o.chartArea,
        u = o.options.animation,
        c = (a.left + a.right) / 2,
        f = (a.top + a.bottom) / 2,
        h = s && u.animateScale,
        d = h ? 0 : this.innerRadius,
        g = h ? 0 : this.outerRadius,
        { sharedOptions: v, includeOptions: x } = this._getSharedOptions(n, i);
      let p = this._getRotation(),
        m;
      for (m = 0; m < n; ++m) p += this._circumference(m, s);
      for (m = n; m < n + r; ++m) {
        const y = this._circumference(m, s),
          b = e[m],
          _ = {
            x: c + this.offsetX,
            y: f + this.offsetY,
            startAngle: p,
            endAngle: p + y,
            circumference: y,
            outerRadius: g,
            innerRadius: d,
          };
        x && (_.options = v || this.resolveDataElementOptions(m, b.active ? 'active' : i)),
          (p += y),
          this.updateElement(b, m, _, i);
      }
    }
    calculateTotal() {
      const e = this._cachedMeta,
        n = e.data;
      let r = 0,
        i;
      for (i = 0; i < n.length; i++) {
        const s = e._parsed[i];
        s !== null && !isNaN(s) && this.chart.getDataVisibility(i) && !n[i].hidden && (r += Math.abs(s));
      }
      return r;
    }
    calculateCircumference(e) {
      const n = this._cachedMeta.total;
      return n > 0 && !isNaN(e) ? ve * (Math.abs(e) / n) : 0;
    }
    getLabelAndValue(e) {
      const n = this._cachedMeta,
        r = this.chart,
        i = r.data.labels || [],
        s = $l(n._parsed[e], r.options.locale);
      return { label: i[e] || '', value: s };
    }
    getMaxBorderWidth(e) {
      let n = 0;
      const r = this.chart;
      let i, s, o, a, l;
      if (!e) {
        for (i = 0, s = r.data.datasets.length; i < s; ++i)
          if (r.isDatasetVisible(i)) {
            (o = r.getDatasetMeta(i)), (e = o.data), (a = o.controller);
            break;
          }
      }
      if (!e) return 0;
      for (i = 0, s = e.length; i < s; ++i)
        (l = a.resolveDataElementOptions(i)),
          l.borderAlign !== 'inner' && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
      return n;
    }
    getMaxOffset(e) {
      let n = 0;
      for (let r = 0, i = e.length; r < i; ++r) {
        const s = this.resolveDataElementOptions(r);
        n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
      }
      return n;
    }
    _getRingWeightOffset(e) {
      let n = 0;
      for (let r = 0; r < e; ++r) this.chart.isDatasetVisible(r) && (n += this._getRingWeight(r));
      return n;
    }
    _getRingWeight(e) {
      return Math.max(Z(this.chart.data.datasets[e].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  V(as, 'id', 'doughnut'),
    V(as, 'defaults', {
      datasetElementType: !1,
      dataElementType: 'arc',
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: 'number',
          properties: [
            'circumference',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'startAngle',
            'x',
            'y',
            'offset',
            'borderWidth',
            'spacing',
          ],
        },
      },
      cutout: '50%',
      rotation: 0,
      circumference: 360,
      radius: '100%',
      spacing: 0,
      indexAxis: 'r',
    }),
    V(as, 'descriptors', {
      _scriptable: (e) => e !== 'spacing',
      _indexable: (e) => e !== 'spacing' && !e.startsWith('borderDash') && !e.startsWith('hoverBorderDash'),
    }),
    V(as, 'overrides', {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(e) {
              const n = e.data;
              if (n.labels.length && n.datasets.length) {
                const {
                  labels: { pointStyle: r, color: i },
                } = e.legend.options;
                return n.labels.map((s, o) => {
                  const l = e.getDatasetMeta(0).controller.getStyle(o);
                  return {
                    text: s,
                    fillStyle: l.backgroundColor,
                    strokeStyle: l.borderColor,
                    fontColor: i,
                    lineWidth: l.borderWidth,
                    pointStyle: r,
                    hidden: !e.getDataVisibility(o),
                    index: o,
                  };
                });
              }
              return [];
            },
          },
          onClick(e, n, r) {
            r.chart.toggleDataVisibility(n.index), r.chart.update();
          },
        },
      },
    });
  function sr() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
  }
  class Kh {
    constructor(e) {
      V(this, 'options');
      this.options = e || {};
    }
    static override(e) {
      Object.assign(Kh.prototype, e);
    }
    init() {}
    formats() {
      return sr();
    }
    parse() {
      return sr();
    }
    format() {
      return sr();
    }
    add() {
      return sr();
    }
    diff() {
      return sr();
    }
    startOf() {
      return sr();
    }
    endOf() {
      return sr();
    }
  }
  var rE = { _date: Kh };
  function iE(t, e, n, r) {
    const { controller: i, data: s, _sorted: o } = t,
      a = i._cachedMeta.iScale;
    if (a && e === a.axis && e !== 'r' && o && s.length) {
      const l = a._reversePixels ? ZS : Zc;
      if (r) {
        if (i._sharedOptions) {
          const u = s[0],
            c = typeof u.getRange == 'function' && u.getRange(e);
          if (c) {
            const f = l(s, e, n - c),
              h = l(s, e, n + c);
            return { lo: f.lo, hi: h.hi };
          }
        }
      } else return l(s, e, n);
    }
    return { lo: 0, hi: s.length - 1 };
  }
  function mo(t, e, n, r, i) {
    const s = t.getSortedVisibleDatasetMetas(),
      o = n[e];
    for (let a = 0, l = s.length; a < l; ++a) {
      const { index: u, data: c } = s[a],
        { lo: f, hi: h } = iE(s[a], e, o, i);
      for (let d = f; d <= h; ++d) {
        const g = c[d];
        g.skip || r(g, u, d);
      }
    }
  }
  function sE(t) {
    const e = t.indexOf('x') !== -1,
      n = t.indexOf('y') !== -1;
    return function (r, i) {
      const s = e ? Math.abs(r.x - i.x) : 0,
        o = n ? Math.abs(r.y - i.y) : 0;
      return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
    };
  }
  function zu(t, e, n, r, i) {
    const s = [];
    return (
      (!i && !t.isPointInArea(e)) ||
        mo(
          t,
          n,
          e,
          function (a, l, u) {
            (!i && !Xr(a, t.chartArea, 0)) ||
              (a.inRange(e.x, e.y, r) && s.push({ element: a, datasetIndex: l, index: u }));
          },
          !0,
        ),
      s
    );
  }
  function oE(t, e, n, r) {
    let i = [];
    function s(o, a, l) {
      const { startAngle: u, endAngle: c } = o.getProps(['startAngle', 'endAngle'], r),
        { angle: f } = z0(o, { x: e.x, y: e.y });
      fl(f, u, c) && i.push({ element: o, datasetIndex: a, index: l });
    }
    return mo(t, n, e, s), i;
  }
  function aE(t, e, n, r, i, s) {
    let o = [];
    const a = sE(n);
    let l = Number.POSITIVE_INFINITY;
    function u(c, f, h) {
      const d = c.inRange(e.x, e.y, i);
      if (r && !d) return;
      const g = c.getCenterPoint(i);
      if (!(!!s || t.isPointInArea(g)) && !d) return;
      const x = a(e, g);
      x < l
        ? ((o = [{ element: c, datasetIndex: f, index: h }]), (l = x))
        : x === l && o.push({ element: c, datasetIndex: f, index: h });
    }
    return mo(t, n, e, u), o;
  }
  function Bu(t, e, n, r, i, s) {
    return !s && !t.isPointInArea(e) ? [] : n === 'r' && !r ? oE(t, e, n, i) : aE(t, e, n, r, i, s);
  }
  function pg(t, e, n, r, i) {
    const s = [],
      o = n === 'x' ? 'inXRange' : 'inYRange';
    let a = !1;
    return (
      mo(t, n, e, (l, u, c) => {
        l[o] && l[o](e[n], i) && (s.push({ element: l, datasetIndex: u, index: c }), (a = a || l.inRange(e.x, e.y, i)));
      }),
      r && !a ? [] : s
    );
  }
  var lE = {
    evaluateInteractionItems: mo,
    modes: {
      index(t, e, n, r) {
        const i = ur(e, t),
          s = n.axis || 'x',
          o = n.includeInvisible || !1,
          a = n.intersect ? zu(t, i, s, r, o) : Bu(t, i, s, !1, r, o),
          l = [];
        return a.length
          ? (t.getSortedVisibleDatasetMetas().forEach((u) => {
              const c = a[0].index,
                f = u.data[c];
              f && !f.skip && l.push({ element: f, datasetIndex: u.index, index: c });
            }),
            l)
          : [];
      },
      dataset(t, e, n, r) {
        const i = ur(e, t),
          s = n.axis || 'xy',
          o = n.includeInvisible || !1;
        let a = n.intersect ? zu(t, i, s, r, o) : Bu(t, i, s, !1, r, o);
        if (a.length > 0) {
          const l = a[0].datasetIndex,
            u = t.getDatasetMeta(l).data;
          a = [];
          for (let c = 0; c < u.length; ++c) a.push({ element: u[c], datasetIndex: l, index: c });
        }
        return a;
      },
      point(t, e, n, r) {
        const i = ur(e, t),
          s = n.axis || 'xy',
          o = n.includeInvisible || !1;
        return zu(t, i, s, r, o);
      },
      nearest(t, e, n, r) {
        const i = ur(e, t),
          s = n.axis || 'xy',
          o = n.includeInvisible || !1;
        return Bu(t, i, s, n.intersect, r, o);
      },
      x(t, e, n, r) {
        const i = ur(e, t);
        return pg(t, i, 'x', n.intersect, r);
      },
      y(t, e, n, r) {
        const i = ur(e, t);
        return pg(t, i, 'y', n.intersect, r);
      },
    },
  };
  const tx = ['left', 'top', 'right', 'bottom'];
  function Hi(t, e) {
    return t.filter((n) => n.pos === e);
  }
  function gg(t, e) {
    return t.filter((n) => tx.indexOf(n.pos) === -1 && n.box.axis === e);
  }
  function qi(t, e) {
    return t.sort((n, r) => {
      const i = e ? r : n,
        s = e ? n : r;
      return i.weight === s.weight ? i.index - s.index : i.weight - s.weight;
    });
  }
  function uE(t) {
    const e = [];
    let n, r, i, s, o, a;
    for (n = 0, r = (t || []).length; n < r; ++n)
      (i = t[n]),
        ({
          position: s,
          options: { stack: o, stackWeight: a = 1 },
        } = i),
        e.push({
          index: n,
          box: i,
          pos: s,
          horizontal: i.isHorizontal(),
          weight: i.weight,
          stack: o && s + o,
          stackWeight: a,
        });
    return e;
  }
  function cE(t) {
    const e = {};
    for (const n of t) {
      const { stack: r, pos: i, stackWeight: s } = n;
      if (!r || !tx.includes(i)) continue;
      const o = e[r] || (e[r] = { count: 0, placed: 0, weight: 0, size: 0 });
      o.count++, (o.weight += s);
    }
    return e;
  }
  function fE(t, e) {
    const n = cE(t),
      { vBoxMaxWidth: r, hBoxMaxHeight: i } = e;
    let s, o, a;
    for (s = 0, o = t.length; s < o; ++s) {
      a = t[s];
      const { fullSize: l } = a.box,
        u = n[a.stack],
        c = u && a.stackWeight / u.weight;
      a.horizontal
        ? ((a.width = c ? c * r : l && e.availableWidth), (a.height = i))
        : ((a.width = r), (a.height = c ? c * i : l && e.availableHeight));
    }
    return n;
  }
  function hE(t) {
    const e = uE(t),
      n = qi(
        e.filter((u) => u.box.fullSize),
        !0,
      ),
      r = qi(Hi(e, 'left'), !0),
      i = qi(Hi(e, 'right')),
      s = qi(Hi(e, 'top'), !0),
      o = qi(Hi(e, 'bottom')),
      a = gg(e, 'x'),
      l = gg(e, 'y');
    return {
      fullSize: n,
      leftAndTop: r.concat(s),
      rightAndBottom: i.concat(l).concat(o).concat(a),
      chartArea: Hi(e, 'chartArea'),
      vertical: r.concat(i).concat(l),
      horizontal: s.concat(o).concat(a),
    };
  }
  function mg(t, e, n, r) {
    return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
  }
  function nx(t, e) {
    (t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right));
  }
  function dE(t, e, n, r) {
    const { pos: i, box: s } = n,
      o = t.maxPadding;
    if (!G(i)) {
      n.size && (t[i] -= n.size);
      const f = r[n.stack] || { size: 0, count: 1 };
      (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)), (n.size = f.size / f.count), (t[i] += n.size);
    }
    s.getPadding && nx(o, s.getPadding());
    const a = Math.max(0, e.outerWidth - mg(o, t, 'left', 'right')),
      l = Math.max(0, e.outerHeight - mg(o, t, 'top', 'bottom')),
      u = a !== t.w,
      c = l !== t.h;
    return (t.w = a), (t.h = l), n.horizontal ? { same: u, other: c } : { same: c, other: u };
  }
  function pE(t) {
    const e = t.maxPadding;
    function n(r) {
      const i = Math.max(e[r] - t[r], 0);
      return (t[r] += i), i;
    }
    (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
  }
  function gE(t, e) {
    const n = e.maxPadding;
    function r(i) {
      const s = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        i.forEach((o) => {
          s[o] = Math.max(e[o], n[o]);
        }),
        s
      );
    }
    return r(t ? ['left', 'right'] : ['top', 'bottom']);
  }
  function ls(t, e, n, r) {
    const i = [];
    let s, o, a, l, u, c;
    for (s = 0, o = t.length, u = 0; s < o; ++s) {
      (a = t[s]), (l = a.box), l.update(a.width || e.w, a.height || e.h, gE(a.horizontal, e));
      const { same: f, other: h } = dE(e, n, a, r);
      (u |= f && i.length), (c = c || h), l.fullSize || i.push(a);
    }
    return (u && ls(i, e, n, r)) || c;
  }
  function Yo(t, e, n, r, i) {
    (t.top = n), (t.left = e), (t.right = e + r), (t.bottom = n + i), (t.width = r), (t.height = i);
  }
  function vg(t, e, n, r) {
    const i = n.padding;
    let { x: s, y: o } = e;
    for (const a of t) {
      const l = a.box,
        u = r[a.stack] || { count: 1, placed: 0, weight: 1 },
        c = a.stackWeight / u.weight || 1;
      if (a.horizontal) {
        const f = e.w * c,
          h = u.size || l.height;
        al(u.start) && (o = u.start),
          l.fullSize ? Yo(l, i.left, o, n.outerWidth - i.right - i.left, h) : Yo(l, e.left + u.placed, o, f, h),
          (u.start = o),
          (u.placed += f),
          (o = l.bottom);
      } else {
        const f = e.h * c,
          h = u.size || l.width;
        al(u.start) && (s = u.start),
          l.fullSize ? Yo(l, s, i.top, h, n.outerHeight - i.bottom - i.top) : Yo(l, s, e.top + u.placed, h, f),
          (u.start = s),
          (u.placed += f),
          (s = l.right);
      }
    }
    (e.x = s), (e.y = o);
  }
  var Mn = {
    addBox(t, e) {
      t.boxes || (t.boxes = []),
        (e.fullSize = e.fullSize || !1),
        (e.position = e.position || 'top'),
        (e.weight = e.weight || 0),
        (e._layers =
          e._layers ||
          function () {
            return [
              {
                z: 0,
                draw(n) {
                  e.draw(n);
                },
              },
            ];
          }),
        t.boxes.push(e);
    },
    removeBox(t, e) {
      const n = t.boxes ? t.boxes.indexOf(e) : -1;
      n !== -1 && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
      (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
    },
    update(t, e, n, r) {
      if (!t) return;
      const i = Ge(t.options.layout.padding),
        s = Math.max(e - i.width, 0),
        o = Math.max(n - i.height, 0),
        a = hE(t.boxes),
        l = a.vertical,
        u = a.horizontal;
      te(t.boxes, (v) => {
        typeof v.beforeLayout == 'function' && v.beforeLayout();
      });
      const c = l.reduce((v, x) => (x.box.options && x.box.options.display === !1 ? v : v + 1), 0) || 1,
        f = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: i,
          availableWidth: s,
          availableHeight: o,
          vBoxMaxWidth: s / 2 / c,
          hBoxMaxHeight: o / 2,
        }),
        h = Object.assign({}, i);
      nx(h, Ge(r));
      const d = Object.assign({ maxPadding: h, w: s, h: o, x: i.left, y: i.top }, i),
        g = fE(l.concat(u), f);
      ls(a.fullSize, d, f, g),
        ls(l, d, f, g),
        ls(u, d, f, g) && ls(l, d, f, g),
        pE(d),
        vg(a.leftAndTop, d, f, g),
        (d.x += d.w),
        (d.y += d.h),
        vg(a.rightAndBottom, d, f, g),
        (t.chartArea = { left: d.left, top: d.top, right: d.left + d.w, bottom: d.top + d.h, height: d.h, width: d.w }),
        te(a.chartArea, (v) => {
          const x = v.box;
          Object.assign(x, t.chartArea), x.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class rx {
    acquireContext(e, n) {}
    releaseContext(e) {
      return !1;
    }
    addEventListener(e, n, r) {}
    removeEventListener(e, n, r) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(e, n, r, i) {
      return (
        (n = Math.max(0, n || e.width)),
        (r = r || e.height),
        { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
      );
    }
    isAttached(e) {
      return !0;
    }
    updateConfig(e) {}
  }
  class mE extends rx {
    acquireContext(e) {
      return (e && e.getContext && e.getContext('2d')) || null;
    }
    updateConfig(e) {
      e.options.animation = !1;
    }
  }
  const ba = '$chartjs',
    vE = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      pointerenter: 'mouseenter',
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointerleave: 'mouseout',
      pointerout: 'mouseout',
    },
    yg = (t) => t === null || t === '';
  function yE(t, e) {
    const n = t.style,
      r = t.getAttribute('height'),
      i = t.getAttribute('width');
    if (
      ((t[ba] = { initial: { height: r, width: i, style: { display: n.display, height: n.height, width: n.width } } }),
      (n.display = n.display || 'block'),
      (n.boxSizing = n.boxSizing || 'border-box'),
      yg(i))
    ) {
      const s = og(t, 'width');
      s !== void 0 && (t.width = s);
    }
    if (yg(r))
      if (t.style.height === '') t.height = t.width / (e || 2);
      else {
        const s = og(t, 'height');
        s !== void 0 && (t.height = s);
      }
    return t;
  }
  const ix = zk ? { passive: !0 } : !1;
  function xE(t, e, n) {
    t && t.addEventListener(e, n, ix);
  }
  function bE(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, ix);
  }
  function _E(t, e) {
    const n = vE[t.type] || t.type,
      { x: r, y: i } = ur(t, e);
    return { type: n, chart: e, native: t, x: r !== void 0 ? r : null, y: i !== void 0 ? i : null };
  }
  function gl(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
  }
  function wE(t, e, n) {
    const r = t.canvas,
      i = new MutationObserver((s) => {
        let o = !1;
        for (const a of s) (o = o || gl(a.addedNodes, r)), (o = o && !gl(a.removedNodes, r));
        o && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  function SE(t, e, n) {
    const r = t.canvas,
      i = new MutationObserver((s) => {
        let o = !1;
        for (const a of s) (o = o || gl(a.removedNodes, r)), (o = o && !gl(a.addedNodes, r));
        o && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  const Zs = new Map();
  let xg = 0;
  function sx() {
    const t = window.devicePixelRatio;
    t !== xg &&
      ((xg = t),
      Zs.forEach((e, n) => {
        n.currentDevicePixelRatio !== t && e();
      }));
  }
  function kE(t, e) {
    Zs.size || window.addEventListener('resize', sx), Zs.set(t, e);
  }
  function EE(t) {
    Zs.delete(t), Zs.size || window.removeEventListener('resize', sx);
  }
  function OE(t, e, n) {
    const r = t.canvas,
      i = r && Gh(r);
    if (!i) return;
    const s = U0((a, l) => {
        const u = i.clientWidth;
        n(a, l), u < i.clientWidth && n();
      }, window),
      o = new ResizeObserver((a) => {
        const l = a[0],
          u = l.contentRect.width,
          c = l.contentRect.height;
        (u === 0 && c === 0) || s(u, c);
      });
    return o.observe(i), kE(t, s), o;
  }
  function Vu(t, e, n) {
    n && n.disconnect(), e === 'resize' && EE(t);
  }
  function TE(t, e, n) {
    const r = t.canvas,
      i = U0((s) => {
        t.ctx !== null && n(_E(s, t));
      }, t);
    return xE(r, e, i), i;
  }
  class CE extends rx {
    acquireContext(e, n) {
      const r = e && e.getContext && e.getContext('2d');
      return r && r.canvas === e ? (yE(e, n), r) : null;
    }
    releaseContext(e) {
      const n = e.canvas;
      if (!n[ba]) return !1;
      const r = n[ba].initial;
      ['height', 'width'].forEach((s) => {
        const o = r[s];
        de(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
      });
      const i = r.style || {};
      return (
        Object.keys(i).forEach((s) => {
          n.style[s] = i[s];
        }),
        (n.width = n.width),
        delete n[ba],
        !0
      );
    }
    addEventListener(e, n, r) {
      this.removeEventListener(e, n);
      const i = e.$proxies || (e.$proxies = {}),
        o = { attach: wE, detach: SE, resize: OE }[n] || TE;
      i[n] = o(e, n, r);
    }
    removeEventListener(e, n) {
      const r = e.$proxies || (e.$proxies = {}),
        i = r[n];
      if (!i) return;
      (({ attach: Vu, detach: Vu, resize: Vu })[n] || bE)(e, n, i), (r[n] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(e, n, r, i) {
      return jk(e, n, r, i);
    }
    isAttached(e) {
      const n = e && Gh(e);
      return !!(n && n.isConnected);
    }
  }
  function DE(t) {
    return !Yh() || (typeof OffscreenCanvas < 'u' && t instanceof OffscreenCanvas) ? mE : CE;
  }
  class Er {
    constructor() {
      V(this, 'x');
      V(this, 'y');
      V(this, 'active', !1);
      V(this, 'options');
      V(this, '$animations');
    }
    tooltipPosition(e) {
      const { x: n, y: r } = this.getProps(['x', 'y'], e);
      return { x: n, y: r };
    }
    hasValue() {
      return cl(this.x) && cl(this.y);
    }
    getProps(e, n) {
      const r = this.$animations;
      if (!n || !r) return this;
      const i = {};
      return (
        e.forEach((s) => {
          i[s] = r[s] && r[s].active() ? r[s]._to : this[s];
        }),
        i
      );
    }
  }
  V(Er, 'defaults', {}), V(Er, 'defaultRoutes');
  function PE(t, e) {
    const n = t.options.ticks,
      r = NE(t),
      i = Math.min(n.maxTicksLimit || r, r),
      s = n.major.enabled ? IE(e) : [],
      o = s.length,
      a = s[0],
      l = s[o - 1],
      u = [];
    if (o > i) return RE(e, u, s, o / i), u;
    const c = ME(s, e, i);
    if (o > 0) {
      let f, h;
      const d = o > 1 ? Math.round((l - a) / (o - 1)) : null;
      for (Go(e, u, c, de(d) ? 0 : a - d, a), f = 0, h = o - 1; f < h; f++) Go(e, u, c, s[f], s[f + 1]);
      return Go(e, u, c, l, de(d) ? e.length : l + d), u;
    }
    return Go(e, u, c), u;
  }
  function NE(t) {
    const e = t.options.offset,
      n = t._tickSize(),
      r = t._length / n + (e ? 0 : 1),
      i = t._maxLength / n;
    return Math.floor(Math.min(r, i));
  }
  function ME(t, e, n) {
    const r = AE(t),
      i = e.length / n;
    if (!r) return Math.max(i, 1);
    const s = GS(r);
    for (let o = 0, a = s.length - 1; o < a; o++) {
      const l = s[o];
      if (l > i) return l;
    }
    return Math.max(i, 1);
  }
  function IE(t) {
    const e = [];
    let n, r;
    for (n = 0, r = t.length; n < r; n++) t[n].major && e.push(n);
    return e;
  }
  function RE(t, e, n, r) {
    let i = 0,
      s = n[0],
      o;
    for (r = Math.ceil(r), o = 0; o < t.length; o++) o === s && (e.push(t[o]), i++, (s = n[i * r]));
  }
  function Go(t, e, n, r, i) {
    const s = Z(r, 0),
      o = Math.min(Z(i, t.length), t.length);
    let a = 0,
      l,
      u,
      c;
    for (n = Math.ceil(n), i && ((l = i - r), (n = l / Math.floor(l / n))), c = s; c < 0; )
      a++, (c = Math.round(s + a * n));
    for (u = Math.max(s, 0); u < o; u++) u === c && (e.push(t[u]), a++, (c = Math.round(s + a * n)));
  }
  function AE(t) {
    const e = t.length;
    let n, r;
    if (e < 2) return !1;
    for (r = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== r) return !1;
    return r;
  }
  const LE = (t) => (t === 'left' ? 'right' : t === 'right' ? 'left' : t),
    bg = (t, e, n) => (e === 'top' || e === 'left' ? t[e] + n : t[e] - n),
    _g = (t, e) => Math.min(e || t, t);
  function wg(t, e) {
    const n = [],
      r = t.length / e,
      i = t.length;
    let s = 0;
    for (; s < i; s += r) n.push(t[Math.floor(s)]);
    return n;
  }
  function FE(t, e, n) {
    const r = t.ticks.length,
      i = Math.min(e, r - 1),
      s = t._startPixel,
      o = t._endPixel,
      a = 1e-6;
    let l = t.getPixelForTick(i),
      u;
    if (
      !(
        n &&
        (r === 1
          ? (u = Math.max(l - s, o - l))
          : e === 0
            ? (u = (t.getPixelForTick(1) - l) / 2)
            : (u = (l - t.getPixelForTick(i - 1)) / 2),
        (l += i < e ? u : -u),
        l < s - a || l > o + a)
      )
    )
      return l;
  }
  function jE(t, e) {
    te(t, (n) => {
      const r = n.gc,
        i = r.length / 2;
      let s;
      if (i > e) {
        for (s = 0; s < i; ++s) delete n.data[r[s]];
        r.splice(0, i);
      }
    });
  }
  function Yi(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Sg(t, e) {
    if (!t.display) return 0;
    const n = ze(t.font, e),
      r = Ge(t.padding);
    return (we(t.text) ? t.text.length : 1) * n.lineHeight + r.height;
  }
  function zE(t, e) {
    return Pr(t, { scale: e, type: 'scale' });
  }
  function BE(t, e, n) {
    return Pr(t, { tick: n, index: e, type: 'tick' });
  }
  function VE(t, e, n) {
    let r = W0(t);
    return ((n && e !== 'right') || (!n && e === 'right')) && (r = LE(r)), r;
  }
  function UE(t, e, n, r) {
    const { top: i, left: s, bottom: o, right: a, chart: l } = t,
      { chartArea: u, scales: c } = l;
    let f = 0,
      h,
      d,
      g;
    const v = o - i,
      x = a - s;
    if (t.isHorizontal()) {
      if (((d = ut(r, s, a)), G(n))) {
        const p = Object.keys(n)[0],
          m = n[p];
        g = c[p].getPixelForValue(m) + v - e;
      } else n === 'center' ? (g = (u.bottom + u.top) / 2 + v - e) : (g = bg(t, n, e));
      h = a - s;
    } else {
      if (G(n)) {
        const p = Object.keys(n)[0],
          m = n[p];
        d = c[p].getPixelForValue(m) - x + e;
      } else n === 'center' ? (d = (u.left + u.right) / 2 - x + e) : (d = bg(t, n, e));
      (g = ut(r, o, i)), (f = n === 'left' ? -Se : Se);
    }
    return { titleX: d, titleY: g, maxWidth: h, rotation: f };
  }
  class Mi extends Er {
    constructor(e) {
      super(),
        (this.id = e.id),
        (this.type = e.type),
        (this.options = void 0),
        (this.ctx = e.ctx),
        (this.chart = e.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(e) {
      (this.options = e.setContext(this.getContext())),
        (this.axis = e.axis),
        (this._userMin = this.parse(e.min)),
        (this._userMax = this.parse(e.max)),
        (this._suggestedMin = this.parse(e.suggestedMin)),
        (this._suggestedMax = this.parse(e.suggestedMax));
    }
    parse(e, n) {
      return e;
    }
    getUserBounds() {
      let { _userMin: e, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this;
      return (
        (e = ct(e, Number.POSITIVE_INFINITY)),
        (n = ct(n, Number.NEGATIVE_INFINITY)),
        (r = ct(r, Number.POSITIVE_INFINITY)),
        (i = ct(i, Number.NEGATIVE_INFINITY)),
        { min: ct(e, r), max: ct(n, i), minDefined: Ae(e), maxDefined: Ae(n) }
      );
    }
    getMinMax(e) {
      let { min: n, max: r, minDefined: i, maxDefined: s } = this.getUserBounds(),
        o;
      if (i && s) return { min: n, max: r };
      const a = this.getMatchingVisibleMetas();
      for (let l = 0, u = a.length; l < u; ++l)
        (o = a[l].controller.getMinMax(this, e)), i || (n = Math.min(n, o.min)), s || (r = Math.max(r, o.max));
      return (n = s && n > r ? r : n), (r = i && n > r ? n : r), { min: ct(n, ct(r, n)), max: ct(r, ct(n, r)) };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const e = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
    }
    getLabelItems(e = this.chart.chartArea) {
      return this._labelItems || (this._labelItems = this._computeLabelItems(e));
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      se(this.options.beforeUpdate, [this]);
    }
    update(e, n, r) {
      const { beginAtZero: i, grace: s, ticks: o } = this.options,
        a = o.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = e),
        (this.maxHeight = n),
        (this._margins = r = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal() ? this.width + r.left + r.right : this.height + r.top + r.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = Sk(this, s, i)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const l = a < this.ticks.length;
      this._convertTicksToLabels(l ? wg(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || o.source === 'auto') &&
          ((this.ticks = PE(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
        l && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let e = this.options.reverse,
        n,
        r;
      this.isHorizontal() ? ((n = this.left), (r = this.right)) : ((n = this.top), (r = this.bottom), (e = !e)),
        (this._startPixel = n),
        (this._endPixel = r),
        (this._reversePixels = e),
        (this._length = r - n),
        (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
      se(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      se(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
        : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0);
    }
    afterSetDimensions() {
      se(this.options.afterSetDimensions, [this]);
    }
    _callHooks(e) {
      this.chart.notifyPlugins(e, this.getContext()), se(this.options[e], [this]);
    }
    beforeDataLimits() {
      this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
      this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
      se(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(e) {
      const n = this.options.ticks;
      let r, i, s;
      for (r = 0, i = e.length; r < i; r++) (s = e[r]), (s.label = se(n.callback, [s.value, r, e], this));
    }
    afterTickToLabelConversion() {
      se(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      se(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const e = this.options,
        n = e.ticks,
        r = _g(this.ticks.length, e.ticks.maxTicksLimit),
        i = n.minRotation || 0,
        s = n.maxRotation;
      let o = i,
        a,
        l,
        u;
      if (!this._isVisible() || !n.display || i >= s || r <= 1 || !this.isHorizontal()) {
        this.labelRotation = i;
        return;
      }
      const c = this._getLabelSizes(),
        f = c.widest.width,
        h = c.highest.height,
        d = _t(this.chart.width - f, 0, this.maxWidth);
      (a = e.offset ? this.maxWidth / r : d / (r - 1)),
        f + 6 > a &&
          ((a = d / (r - (e.offset ? 0.5 : 1))),
          (l = this.maxHeight - Yi(e.grid) - n.padding - Sg(e.title, this.chart.options.font)),
          (u = Math.sqrt(f * f + h * h)),
          (o = Bh(
            Math.min(
              Math.asin(_t((c.highest.height + 6) / a, -1, 1)),
              Math.asin(_t(l / u, -1, 1)) - Math.asin(_t(h / u, -1, 1)),
            ),
          )),
          (o = Math.max(i, Math.min(s, o)))),
        (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
      se(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      se(this.options.beforeFit, [this]);
    }
    fit() {
      const e = { width: 0, height: 0 },
        {
          chart: n,
          options: { ticks: r, title: i, grid: s },
        } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const l = Sg(i, n.options.font);
        if (
          (a
            ? ((e.width = this.maxWidth), (e.height = Yi(s) + l))
            : ((e.height = this.maxHeight), (e.width = Yi(s) + l)),
          r.display && this.ticks.length)
        ) {
          const { first: u, last: c, widest: f, highest: h } = this._getLabelSizes(),
            d = r.padding * 2,
            g = Wt(this.labelRotation),
            v = Math.cos(g),
            x = Math.sin(g);
          if (a) {
            const p = r.mirror ? 0 : x * f.width + v * h.height;
            e.height = Math.min(this.maxHeight, e.height + p + d);
          } else {
            const p = r.mirror ? 0 : v * f.width + x * h.height;
            e.width = Math.min(this.maxWidth, e.width + p + d);
          }
          this._calculatePadding(u, c, x, v);
        }
      }
      this._handleMargins(),
        a
          ? ((this.width = this._length = n.width - this._margins.left - this._margins.right), (this.height = e.height))
          : ((this.width = e.width),
            (this.height = this._length = n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(e, n, r, i) {
      const {
          ticks: { align: s, padding: o },
          position: a,
        } = this.options,
        l = this.labelRotation !== 0,
        u = a !== 'top' && this.axis === 'x';
      if (this.isHorizontal()) {
        const c = this.getPixelForTick(0) - this.left,
          f = this.right - this.getPixelForTick(this.ticks.length - 1);
        let h = 0,
          d = 0;
        l
          ? u
            ? ((h = i * e.width), (d = r * n.height))
            : ((h = r * e.height), (d = i * n.width))
          : s === 'start'
            ? (d = n.width)
            : s === 'end'
              ? (h = e.width)
              : s !== 'inner' && ((h = e.width / 2), (d = n.width / 2)),
          (this.paddingLeft = Math.max(((h - c + o) * this.width) / (this.width - c), 0)),
          (this.paddingRight = Math.max(((d - f + o) * this.width) / (this.width - f), 0));
      } else {
        let c = n.height / 2,
          f = e.height / 2;
        s === 'start' ? ((c = 0), (f = e.height)) : s === 'end' && ((c = n.height), (f = 0)),
          (this.paddingTop = c + o),
          (this.paddingBottom = f + o);
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
        (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
    }
    afterFit() {
      se(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: e, position: n } = this.options;
      return n === 'top' || n === 'bottom' || e === 'x';
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(e) {
      this.beforeTickToLabelConversion(), this.generateTickLabels(e);
      let n, r;
      for (n = 0, r = e.length; n < r; n++) de(e[n].label) && (e.splice(n, 1), r--, n--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let e = this._labelSizes;
      if (!e) {
        const n = this.options.ticks.sampleSize;
        let r = this.ticks;
        n < r.length && (r = wg(r, n)),
          (this._labelSizes = e = this._computeLabelSizes(r, r.length, this.options.ticks.maxTicksLimit));
      }
      return e;
    }
    _computeLabelSizes(e, n, r) {
      const { ctx: i, _longestTextCache: s } = this,
        o = [],
        a = [],
        l = Math.floor(n / _g(n, r));
      let u = 0,
        c = 0,
        f,
        h,
        d,
        g,
        v,
        x,
        p,
        m,
        y,
        b,
        _;
      for (f = 0; f < n; f += l) {
        if (
          ((g = e[f].label),
          (v = this._resolveTickFontOptions(f)),
          (i.font = x = v.string),
          (p = s[x] = s[x] || { data: {}, gc: [] }),
          (m = v.lineHeight),
          (y = b = 0),
          !de(g) && !we(g))
        )
          (y = hl(i, p.data, p.gc, y, g)), (b = m);
        else if (we(g))
          for (h = 0, d = g.length; h < d; ++h)
            (_ = g[h]), !de(_) && !we(_) && ((y = hl(i, p.data, p.gc, y, _)), (b += m));
        o.push(y), a.push(b), (u = Math.max(y, u)), (c = Math.max(b, c));
      }
      jE(s, n);
      const S = o.indexOf(u),
        E = a.indexOf(c),
        O = (D) => ({ width: o[D] || 0, height: a[D] || 0 });
      return { first: O(0), last: O(n - 1), widest: O(S), highest: O(E), widths: o, heights: a };
    }
    getLabelForValue(e) {
      return e;
    }
    getPixelForValue(e, n) {
      return NaN;
    }
    getValueForPixel(e) {}
    getPixelForTick(e) {
      const n = this.ticks;
      return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
    }
    getPixelForDecimal(e) {
      this._reversePixels && (e = 1 - e);
      const n = this._startPixel + e * this._length;
      return JS(this._alignToPixels ? ir(this.chart, n, 0) : n);
    }
    getDecimalForPixel(e) {
      const n = (e - this._startPixel) / this._length;
      return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: e, max: n } = this;
      return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
    }
    getContext(e) {
      const n = this.ticks || [];
      if (e >= 0 && e < n.length) {
        const r = n[e];
        return r.$context || (r.$context = BE(this.getContext(), e, r));
      }
      return this.$context || (this.$context = zE(this.chart.getContext(), this));
    }
    _tickSize() {
      const e = this.options.ticks,
        n = Wt(this.labelRotation),
        r = Math.abs(Math.cos(n)),
        i = Math.abs(Math.sin(n)),
        s = this._getLabelSizes(),
        o = e.autoSkipPadding || 0,
        a = s ? s.widest.width + o : 0,
        l = s ? s.highest.height + o : 0;
      return this.isHorizontal() ? (l * r > a * i ? a / r : l / i) : l * i < a * r ? l / r : a / i;
    }
    _isVisible() {
      const e = this.options.display;
      return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(e) {
      const n = this.axis,
        r = this.chart,
        i = this.options,
        { grid: s, position: o, border: a } = i,
        l = s.offset,
        u = this.isHorizontal(),
        f = this.ticks.length + (l ? 1 : 0),
        h = Yi(s),
        d = [],
        g = a.setContext(this.getContext()),
        v = g.display ? g.width : 0,
        x = v / 2,
        p = function (K) {
          return ir(r, K, v);
        };
      let m, y, b, _, S, E, O, D, P, j, z, U;
      if (o === 'top') (m = p(this.bottom)), (E = this.bottom - h), (D = m - x), (j = p(e.top) + x), (U = e.bottom);
      else if (o === 'bottom') (m = p(this.top)), (j = e.top), (U = p(e.bottom) - x), (E = m + x), (D = this.top + h);
      else if (o === 'left') (m = p(this.right)), (S = this.right - h), (O = m - x), (P = p(e.left) + x), (z = e.right);
      else if (o === 'right') (m = p(this.left)), (P = e.left), (z = p(e.right) - x), (S = m + x), (O = this.left + h);
      else if (n === 'x') {
        if (o === 'center') m = p((e.top + e.bottom) / 2 + 0.5);
        else if (G(o)) {
          const K = Object.keys(o)[0],
            re = o[K];
          m = p(this.chart.scales[K].getPixelForValue(re));
        }
        (j = e.top), (U = e.bottom), (E = m + x), (D = E + h);
      } else if (n === 'y') {
        if (o === 'center') m = p((e.left + e.right) / 2);
        else if (G(o)) {
          const K = Object.keys(o)[0],
            re = o[K];
          m = p(this.chart.scales[K].getPixelForValue(re));
        }
        (S = m - x), (O = S - h), (P = e.left), (z = e.right);
      }
      const le = Z(i.ticks.maxTicksLimit, f),
        Q = Math.max(1, Math.ceil(f / le));
      for (y = 0; y < f; y += Q) {
        const K = this.getContext(y),
          re = s.setContext(K),
          M = a.setContext(K),
          I = re.lineWidth,
          B = re.color,
          ee = M.dash || [],
          Y = M.dashOffset,
          et = re.tickWidth,
          Ne = re.tickColor,
          Kt = re.tickBorderDash || [],
          He = re.tickBorderDashOffset;
        (b = FE(this, y, l)),
          b !== void 0 &&
            ((_ = ir(r, b, I)),
            u ? (S = O = P = z = _) : (E = D = j = U = _),
            d.push({
              tx1: S,
              ty1: E,
              tx2: O,
              ty2: D,
              x1: P,
              y1: j,
              x2: z,
              y2: U,
              width: I,
              color: B,
              borderDash: ee,
              borderDashOffset: Y,
              tickWidth: et,
              tickColor: Ne,
              tickBorderDash: Kt,
              tickBorderDashOffset: He,
            }));
      }
      return (this._ticksLength = f), (this._borderValue = m), d;
    }
    _computeLabelItems(e) {
      const n = this.axis,
        r = this.options,
        { position: i, ticks: s } = r,
        o = this.isHorizontal(),
        a = this.ticks,
        { align: l, crossAlign: u, padding: c, mirror: f } = s,
        h = Yi(r.grid),
        d = h + c,
        g = f ? -c : d,
        v = -Wt(this.labelRotation),
        x = [];
      let p,
        m,
        y,
        b,
        _,
        S,
        E,
        O,
        D,
        P,
        j,
        z,
        U = 'middle';
      if (i === 'top') (S = this.bottom - g), (E = this._getXAxisLabelAlignment());
      else if (i === 'bottom') (S = this.top + g), (E = this._getXAxisLabelAlignment());
      else if (i === 'left') {
        const Q = this._getYAxisLabelAlignment(h);
        (E = Q.textAlign), (_ = Q.x);
      } else if (i === 'right') {
        const Q = this._getYAxisLabelAlignment(h);
        (E = Q.textAlign), (_ = Q.x);
      } else if (n === 'x') {
        if (i === 'center') S = (e.top + e.bottom) / 2 + d;
        else if (G(i)) {
          const Q = Object.keys(i)[0],
            K = i[Q];
          S = this.chart.scales[Q].getPixelForValue(K) + d;
        }
        E = this._getXAxisLabelAlignment();
      } else if (n === 'y') {
        if (i === 'center') _ = (e.left + e.right) / 2 - d;
        else if (G(i)) {
          const Q = Object.keys(i)[0],
            K = i[Q];
          _ = this.chart.scales[Q].getPixelForValue(K);
        }
        E = this._getYAxisLabelAlignment(h).textAlign;
      }
      n === 'y' && (l === 'start' ? (U = 'top') : l === 'end' && (U = 'bottom'));
      const le = this._getLabelSizes();
      for (p = 0, m = a.length; p < m; ++p) {
        (y = a[p]), (b = y.label);
        const Q = s.setContext(this.getContext(p));
        (O = this.getPixelForTick(p) + s.labelOffset),
          (D = this._resolveTickFontOptions(p)),
          (P = D.lineHeight),
          (j = we(b) ? b.length : 1);
        const K = j / 2,
          re = Q.color,
          M = Q.textStrokeColor,
          I = Q.textStrokeWidth;
        let B = E;
        o
          ? ((_ = O),
            E === 'inner' &&
              (p === m - 1
                ? (B = this.options.reverse ? 'left' : 'right')
                : p === 0
                  ? (B = this.options.reverse ? 'right' : 'left')
                  : (B = 'center')),
            i === 'top'
              ? u === 'near' || v !== 0
                ? (z = -j * P + P / 2)
                : u === 'center'
                  ? (z = -le.highest.height / 2 - K * P + P)
                  : (z = -le.highest.height + P / 2)
              : u === 'near' || v !== 0
                ? (z = P / 2)
                : u === 'center'
                  ? (z = le.highest.height / 2 - K * P)
                  : (z = le.highest.height - j * P),
            f && (z *= -1),
            v !== 0 && !Q.showLabelBackdrop && (_ += (P / 2) * Math.sin(v)))
          : ((S = O), (z = ((1 - j) * P) / 2));
        let ee;
        if (Q.showLabelBackdrop) {
          const Y = Ge(Q.backdropPadding),
            et = le.heights[p],
            Ne = le.widths[p];
          let Kt = z - Y.top,
            He = 0 - Y.left;
          switch (U) {
            case 'middle':
              Kt -= et / 2;
              break;
            case 'bottom':
              Kt -= et;
              break;
          }
          switch (E) {
            case 'center':
              He -= Ne / 2;
              break;
            case 'right':
              He -= Ne;
              break;
            case 'inner':
              p === m - 1 ? (He -= Ne) : p > 0 && (He -= Ne / 2);
              break;
          }
          ee = { left: He, top: Kt, width: Ne + Y.width, height: et + Y.height, color: Q.backdropColor };
        }
        x.push({
          label: b,
          font: D,
          textOffset: z,
          options: {
            rotation: v,
            color: re,
            strokeColor: M,
            strokeWidth: I,
            textAlign: B,
            textBaseline: U,
            translation: [_, S],
            backdrop: ee,
          },
        });
      }
      return x;
    }
    _getXAxisLabelAlignment() {
      const { position: e, ticks: n } = this.options;
      if (-Wt(this.labelRotation)) return e === 'top' ? 'left' : 'right';
      let i = 'center';
      return (
        n.align === 'start' ? (i = 'left') : n.align === 'end' ? (i = 'right') : n.align === 'inner' && (i = 'inner'), i
      );
    }
    _getYAxisLabelAlignment(e) {
      const {
          position: n,
          ticks: { crossAlign: r, mirror: i, padding: s },
        } = this.options,
        o = this._getLabelSizes(),
        a = e + s,
        l = o.widest.width;
      let u, c;
      return (
        n === 'left'
          ? i
            ? ((c = this.right + s),
              r === 'near' ? (u = 'left') : r === 'center' ? ((u = 'center'), (c += l / 2)) : ((u = 'right'), (c += l)))
            : ((c = this.right - a),
              r === 'near'
                ? (u = 'right')
                : r === 'center'
                  ? ((u = 'center'), (c -= l / 2))
                  : ((u = 'left'), (c = this.left)))
          : n === 'right'
            ? i
              ? ((c = this.left + s),
                r === 'near'
                  ? (u = 'right')
                  : r === 'center'
                    ? ((u = 'center'), (c -= l / 2))
                    : ((u = 'left'), (c -= l)))
              : ((c = this.left + a),
                r === 'near'
                  ? (u = 'left')
                  : r === 'center'
                    ? ((u = 'center'), (c += l / 2))
                    : ((u = 'right'), (c = this.right)))
            : (u = 'right'),
        { textAlign: u, x: c }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const e = this.chart,
        n = this.options.position;
      if (n === 'left' || n === 'right') return { top: 0, left: this.left, bottom: e.height, right: this.right };
      if (n === 'top' || n === 'bottom') return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
    }
    drawBackground() {
      const {
        ctx: e,
        options: { backgroundColor: n },
        left: r,
        top: i,
        width: s,
        height: o,
      } = this;
      n && (e.save(), (e.fillStyle = n), e.fillRect(r, i, s, o), e.restore());
    }
    getLineWidthForValue(e) {
      const n = this.options.grid;
      if (!this._isVisible() || !n.display) return 0;
      const i = this.ticks.findIndex((s) => s.value === e);
      return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
    }
    drawGrid(e) {
      const n = this.options.grid,
        r = this.ctx,
        i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
      let s, o;
      const a = (l, u, c) => {
        !c.width ||
          !c.color ||
          (r.save(),
          (r.lineWidth = c.width),
          (r.strokeStyle = c.color),
          r.setLineDash(c.borderDash || []),
          (r.lineDashOffset = c.borderDashOffset),
          r.beginPath(),
          r.moveTo(l.x, l.y),
          r.lineTo(u.x, u.y),
          r.stroke(),
          r.restore());
      };
      if (n.display)
        for (s = 0, o = i.length; s < o; ++s) {
          const l = i[s];
          n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
            n.drawTicks &&
              a(
                { x: l.tx1, y: l.ty1 },
                { x: l.tx2, y: l.ty2 },
                {
                  color: l.tickColor,
                  width: l.tickWidth,
                  borderDash: l.tickBorderDash,
                  borderDashOffset: l.tickBorderDashOffset,
                },
              );
        }
    }
    drawBorder() {
      const {
          chart: e,
          ctx: n,
          options: { border: r, grid: i },
        } = this,
        s = r.setContext(this.getContext()),
        o = r.display ? s.width : 0;
      if (!o) return;
      const a = i.setContext(this.getContext(0)).lineWidth,
        l = this._borderValue;
      let u, c, f, h;
      this.isHorizontal()
        ? ((u = ir(e, this.left, o) - o / 2), (c = ir(e, this.right, a) + a / 2), (f = h = l))
        : ((f = ir(e, this.top, o) - o / 2), (h = ir(e, this.bottom, a) + a / 2), (u = c = l)),
        n.save(),
        (n.lineWidth = s.width),
        (n.strokeStyle = s.color),
        n.beginPath(),
        n.moveTo(u, f),
        n.lineTo(c, h),
        n.stroke(),
        n.restore();
    }
    drawLabels(e) {
      if (!this.options.ticks.display) return;
      const r = this.ctx,
        i = this._computeLabelArea();
      i && Uh(r, i);
      const s = this.getLabelItems(e);
      for (const o of s) {
        const a = o.options,
          l = o.font,
          u = o.label,
          c = o.textOffset;
        bi(r, u, 0, c, l, a);
      }
      i && Wh(r);
    }
    drawTitle() {
      const {
        ctx: e,
        options: { position: n, title: r, reverse: i },
      } = this;
      if (!r.display) return;
      const s = ze(r.font),
        o = Ge(r.padding),
        a = r.align;
      let l = s.lineHeight / 2;
      n === 'bottom' || n === 'center' || G(n)
        ? ((l += o.bottom), we(r.text) && (l += s.lineHeight * (r.text.length - 1)))
        : (l += o.top);
      const { titleX: u, titleY: c, maxWidth: f, rotation: h } = UE(this, l, n, a);
      bi(e, r.text, 0, 0, s, {
        color: r.color,
        maxWidth: f,
        rotation: h,
        textAlign: VE(a, n, i),
        textBaseline: 'middle',
        translation: [u, c],
      });
    }
    draw(e) {
      this._isVisible() &&
        (this.drawBackground(), this.drawGrid(e), this.drawBorder(), this.drawTitle(), this.drawLabels(e));
    }
    _layers() {
      const e = this.options,
        n = (e.ticks && e.ticks.z) || 0,
        r = Z(e.grid && e.grid.z, -1),
        i = Z(e.border && e.border.z, 0);
      return !this._isVisible() || this.draw !== Mi.prototype.draw
        ? [
            {
              z: n,
              draw: (s) => {
                this.draw(s);
              },
            },
          ]
        : [
            {
              z: r,
              draw: (s) => {
                this.drawBackground(), this.drawGrid(s), this.drawTitle();
              },
            },
            {
              z: i,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: n,
              draw: (s) => {
                this.drawLabels(s);
              },
            },
          ];
    }
    getMatchingVisibleMetas(e) {
      const n = this.chart.getSortedVisibleDatasetMetas(),
        r = this.axis + 'AxisID',
        i = [];
      let s, o;
      for (s = 0, o = n.length; s < o; ++s) {
        const a = n[s];
        a[r] === this.id && (!e || a.type === e) && i.push(a);
      }
      return i;
    }
    _resolveTickFontOptions(e) {
      const n = this.options.ticks.setContext(this.getContext(e));
      return ze(n.font);
    }
    _maxDigits() {
      const e = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / e;
    }
  }
  class Ko {
    constructor(e, n, r) {
      (this.type = e), (this.scope = n), (this.override = r), (this.items = Object.create(null));
    }
    isForType(e) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
    }
    register(e) {
      const n = Object.getPrototypeOf(e);
      let r;
      QE(n) && (r = this.register(n));
      const i = this.items,
        s = e.id,
        o = this.scope + '.' + s;
      if (!s) throw new Error('class does not have id: ' + e);
      return s in i || ((i[s] = e), WE(e, o, r), this.override && ye.override(e.id, e.overrides)), o;
    }
    get(e) {
      return this.items[e];
    }
    unregister(e) {
      const n = this.items,
        r = e.id,
        i = this.scope;
      r in n && delete n[r], i && r in ye[i] && (delete ye[i][r], this.override && delete kr[r]);
    }
  }
  function WE(t, e, n) {
    const r = Xs(Object.create(null), [n ? ye.get(n) : {}, ye.get(e), t.defaults]);
    ye.set(e, r), t.defaultRoutes && $E(e, t.defaultRoutes), t.descriptors && ye.describe(e, t.descriptors);
  }
  function $E(t, e) {
    Object.keys(e).forEach((n) => {
      const r = n.split('.'),
        i = r.pop(),
        s = [t].concat(r).join('.'),
        o = e[n].split('.'),
        a = o.pop(),
        l = o.join('.');
      ye.route(s, i, l, a);
    });
  }
  function QE(t) {
    return 'id' in t && 'defaults' in t;
  }
  class HE {
    constructor() {
      (this.controllers = new Ko(ks, 'datasets', !0)),
        (this.elements = new Ko(Er, 'elements')),
        (this.plugins = new Ko(Object, 'plugins')),
        (this.scales = new Ko(Mi, 'scales')),
        (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...e) {
      this._each('register', e);
    }
    remove(...e) {
      this._each('unregister', e);
    }
    addControllers(...e) {
      this._each('register', e, this.controllers);
    }
    addElements(...e) {
      this._each('register', e, this.elements);
    }
    addPlugins(...e) {
      this._each('register', e, this.plugins);
    }
    addScales(...e) {
      this._each('register', e, this.scales);
    }
    getController(e) {
      return this._get(e, this.controllers, 'controller');
    }
    getElement(e) {
      return this._get(e, this.elements, 'element');
    }
    getPlugin(e) {
      return this._get(e, this.plugins, 'plugin');
    }
    getScale(e) {
      return this._get(e, this.scales, 'scale');
    }
    removeControllers(...e) {
      this._each('unregister', e, this.controllers);
    }
    removeElements(...e) {
      this._each('unregister', e, this.elements);
    }
    removePlugins(...e) {
      this._each('unregister', e, this.plugins);
    }
    removeScales(...e) {
      this._each('unregister', e, this.scales);
    }
    _each(e, n, r) {
      [...n].forEach((i) => {
        const s = r || this._getRegistryForType(i);
        r || s.isForType(i) || (s === this.plugins && i.id)
          ? this._exec(e, s, i)
          : te(i, (o) => {
              const a = r || this._getRegistryForType(o);
              this._exec(e, a, o);
            });
      });
    }
    _exec(e, n, r) {
      const i = zh(e);
      se(r['before' + i], [], r), n[e](r), se(r['after' + i], [], r);
    }
    _getRegistryForType(e) {
      for (let n = 0; n < this._typedRegistries.length; n++) {
        const r = this._typedRegistries[n];
        if (r.isForType(e)) return r;
      }
      return this.plugins;
    }
    _get(e, n, r) {
      const i = n.get(e);
      if (i === void 0) throw new Error('"' + e + '" is not a registered ' + r + '.');
      return i;
    }
  }
  var zt = new HE();
  class qE {
    constructor() {
      this._init = [];
    }
    notify(e, n, r, i) {
      n === 'beforeInit' && ((this._init = this._createDescriptors(e, !0)), this._notify(this._init, e, 'install'));
      const s = i ? this._descriptors(e).filter(i) : this._descriptors(e),
        o = this._notify(s, e, n, r);
      return n === 'afterDestroy' && (this._notify(s, e, 'stop'), this._notify(this._init, e, 'uninstall')), o;
    }
    _notify(e, n, r, i) {
      i = i || {};
      for (const s of e) {
        const o = s.plugin,
          a = o[r],
          l = [n, i, s.options];
        if (se(a, l, o) === !1 && i.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      de(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(e) {
      if (this._cache) return this._cache;
      const n = (this._cache = this._createDescriptors(e));
      return this._notifyStateChanges(e), n;
    }
    _createDescriptors(e, n) {
      const r = e && e.config,
        i = Z(r.options && r.options.plugins, {}),
        s = YE(r);
      return i === !1 && !n ? [] : KE(e, s, i, n);
    }
    _notifyStateChanges(e) {
      const n = this._oldCache || [],
        r = this._cache,
        i = (s, o) => s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
      this._notify(i(n, r), e, 'stop'), this._notify(i(r, n), e, 'start');
    }
  }
  function YE(t) {
    const e = {},
      n = [],
      r = Object.keys(zt.plugins.items);
    for (let s = 0; s < r.length; s++) n.push(zt.getPlugin(r[s]));
    const i = t.plugins || [];
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
    }
    return { plugins: n, localIds: e };
  }
  function GE(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t;
  }
  function KE(t, { plugins: e, localIds: n }, r, i) {
    const s = [],
      o = t.getContext();
    for (const a of e) {
      const l = a.id,
        u = GE(r[l], i);
      u !== null && s.push({ plugin: a, options: XE(t.config, { plugin: a, local: n[l] }, u, o) });
    }
    return s;
  }
  function XE(t, { plugin: e, local: n }, r, i) {
    const s = t.pluginScopeKeys(e),
      o = t.getOptionScopes(r, s);
    return (
      n && e.defaults && o.push(e.defaults),
      t.createResolver(o, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
  }
  function tf(t, e) {
    const n = ye.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x';
  }
  function JE(t, e) {
    let n = t;
    return t === '_index_' ? (n = e) : t === '_value_' && (n = e === 'x' ? 'y' : 'x'), n;
  }
  function ZE(t, e) {
    return t === e ? '_index_' : '_value_';
  }
  function kg(t) {
    if (t === 'x' || t === 'y' || t === 'r') return t;
  }
  function eO(t) {
    if (t === 'top' || t === 'bottom') return 'x';
    if (t === 'left' || t === 'right') return 'y';
  }
  function nf(t, ...e) {
    if (kg(t)) return t;
    for (const n of e) {
      const r = n.axis || eO(n.position) || (t.length > 1 && kg(t[0].toLowerCase()));
      if (r) return r;
    }
    throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
  }
  function Eg(t, e, n) {
    if (n[e + 'AxisID'] === t) return { axis: e };
  }
  function tO(t, e) {
    if (e.data && e.data.datasets) {
      const n = e.data.datasets.filter((r) => r.xAxisID === t || r.yAxisID === t);
      if (n.length) return Eg(t, 'x', n[0]) || Eg(t, 'y', n[0]);
    }
    return {};
  }
  function nO(t, e) {
    const n = kr[t.type] || { scales: {} },
      r = e.scales || {},
      i = tf(t.type, e),
      s = Object.create(null);
    return (
      Object.keys(r).forEach((o) => {
        const a = r[o];
        if (!G(a)) return console.error(`Invalid scale configuration for scale: ${o}`);
        if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
        const l = nf(o, a, tO(o, t), ye.scales[a.type]),
          u = ZE(l, i),
          c = n.scales || {};
        s[o] = _s(Object.create(null), [{ axis: l }, a, c[l], c[u]]);
      }),
      t.data.datasets.forEach((o) => {
        const a = o.type || t.type,
          l = o.indexAxis || tf(a, e),
          c = (kr[a] || {}).scales || {};
        Object.keys(c).forEach((f) => {
          const h = JE(f, l),
            d = o[h + 'AxisID'] || h;
          (s[d] = s[d] || Object.create(null)), _s(s[d], [{ axis: h }, r[d], c[f]]);
        });
      }),
      Object.keys(s).forEach((o) => {
        const a = s[o];
        _s(a, [ye.scales[a.type], ye.scale]);
      }),
      s
    );
  }
  function ox(t) {
    const e = t.options || (t.options = {});
    (e.plugins = Z(e.plugins, {})), (e.scales = nO(t, e));
  }
  function ax(t) {
    return (t = t || {}), (t.datasets = t.datasets || []), (t.labels = t.labels || []), t;
  }
  function rO(t) {
    return (t = t || {}), (t.data = ax(t.data)), ox(t), t;
  }
  const Og = new Map(),
    lx = new Set();
  function Xo(t, e) {
    let n = Og.get(t);
    return n || ((n = e()), Og.set(t, n), lx.add(n)), n;
  }
  const Gi = (t, e, n) => {
    const r = Js(e, n);
    r !== void 0 && t.add(r);
  };
  class iO {
    constructor(e) {
      (this._config = rO(e)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(e) {
      this._config.type = e;
    }
    get data() {
      return this._config.data;
    }
    set data(e) {
      this._config.data = ax(e);
    }
    get options() {
      return this._config.options;
    }
    set options(e) {
      this._config.options = e;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const e = this._config;
      this.clearCache(), ox(e);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(e) {
      return Xo(e, () => [[`datasets.${e}`, '']]);
    }
    datasetAnimationScopeKeys(e, n) {
      return Xo(`${e}.transition.${n}`, () => [
        [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
        [`datasets.${e}`, ''],
      ]);
    }
    datasetElementScopeKeys(e, n) {
      return Xo(`${e}-${n}`, () => [[`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, '']]);
    }
    pluginScopeKeys(e) {
      const n = e.id,
        r = this.type;
      return Xo(`${r}-plugin-${n}`, () => [[`plugins.${n}`, ...(e.additionalOptionScopes || [])]]);
    }
    _cachedScopes(e, n) {
      const r = this._scopeCache;
      let i = r.get(e);
      return (!i || n) && ((i = new Map()), r.set(e, i)), i;
    }
    getOptionScopes(e, n, r) {
      const { options: i, type: s } = this,
        o = this._cachedScopes(e, r),
        a = o.get(n);
      if (a) return a;
      const l = new Set();
      n.forEach((c) => {
        e && (l.add(e), c.forEach((f) => Gi(l, e, f))),
          c.forEach((f) => Gi(l, i, f)),
          c.forEach((f) => Gi(l, kr[s] || {}, f)),
          c.forEach((f) => Gi(l, ye, f)),
          c.forEach((f) => Gi(l, ef, f));
      });
      const u = Array.from(l);
      return u.length === 0 && u.push(Object.create(null)), lx.has(n) && o.set(n, u), u;
    }
    chartOptionScopes() {
      const { options: e, type: n } = this;
      return [e, kr[n] || {}, ye.datasets[n] || {}, { type: n }, ye, ef];
    }
    resolveNamedOptions(e, n, r, i = ['']) {
      const s = { $shared: !0 },
        { resolver: o, subPrefixes: a } = Tg(this._resolverCache, e, i);
      let l = o;
      if (oO(o, n)) {
        (s.$shared = !1), (r = Hn(r) ? r() : r);
        const u = this.createResolver(e, r, a);
        l = _i(o, r, u);
      }
      for (const u of n) s[u] = l[u];
      return s;
    }
    createResolver(e, n, r = [''], i) {
      const { resolver: s } = Tg(this._resolverCache, e, r);
      return G(n) ? _i(s, n, void 0, i) : s;
    }
  }
  function Tg(t, e, n) {
    let r = t.get(e);
    r || ((r = new Map()), t.set(e, r));
    const i = n.join();
    let s = r.get(i);
    return (
      s ||
        ((s = { resolver: Qh(e, n), subPrefixes: n.filter((a) => !a.toLowerCase().includes('hover')) }), r.set(i, s)),
      s
    );
  }
  const sO = (t) => G(t) && Object.getOwnPropertyNames(t).some((e) => Hn(t[e]));
  function oO(t, e) {
    const { isScriptable: n, isIndexable: r } = q0(t);
    for (const i of e) {
      const s = n(i),
        o = r(i),
        a = (o || s) && t[i];
      if ((s && (Hn(a) || sO(a))) || (o && we(a))) return !0;
    }
    return !1;
  }
  var aO = '4.4.4';
  const lO = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function Cg(t, e) {
    return t === 'top' || t === 'bottom' || (lO.indexOf(t) === -1 && e === 'x');
  }
  function Dg(t, e) {
    return function (n, r) {
      return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
    };
  }
  function Pg(t) {
    const e = t.chart,
      n = e.options.animation;
    e.notifyPlugins('afterRender'), se(n && n.onComplete, [t], e);
  }
  function uO(t) {
    const e = t.chart,
      n = e.options.animation;
    se(n && n.onProgress, [t], e);
  }
  function ux(t) {
    return (
      Yh() && typeof t == 'string' ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const _a = {},
    Ng = (t) => {
      const e = ux(t);
      return Object.values(_a)
        .filter((n) => n.canvas === e)
        .pop();
    };
  function cO(t, e, n) {
    const r = Object.keys(t);
    for (const i of r) {
      const s = +i;
      if (s >= e) {
        const o = t[i];
        delete t[i], (n > 0 || s > e) && (t[s + n] = o);
      }
    }
  }
  function fO(t, e, n, r) {
    return !n || t.type === 'mouseout' ? null : r ? e : t;
  }
  function Jo(t, e, n) {
    return t.options.clip ? t[n] : e[n];
  }
  function hO(t, e) {
    const { xScale: n, yScale: r } = t;
    return n && r
      ? { left: Jo(n, e, 'left'), right: Jo(n, e, 'right'), top: Jo(r, e, 'top'), bottom: Jo(r, e, 'bottom') }
      : e;
  }
  var vn;
  let ql =
    ((vn = class {
      static register(...e) {
        zt.add(...e), Mg();
      }
      static unregister(...e) {
        zt.remove(...e), Mg();
      }
      constructor(e, n) {
        const r = (this.config = new iO(n)),
          i = ux(e),
          s = Ng(i);
        if (s)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              s.id +
              "' must be destroyed before the canvas with ID '" +
              s.canvas.id +
              "' can be reused.",
          );
        const o = r.createResolver(r.chartOptionScopes(), this.getContext());
        (this.platform = new (r.platform || DE(i))()), this.platform.updateConfig(r);
        const a = this.platform.acquireContext(i, o.aspectRatio),
          l = a && a.canvas,
          u = l && l.height,
          c = l && l.width;
        if (
          ((this.id = VS()),
          (this.ctx = a),
          (this.canvas = l),
          (this.width = c),
          (this.height = u),
          (this._options = o),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new qE()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = rk((f) => this.update(f), o.resizeDelay || 0)),
          (this._dataChanges = []),
          (_a[this.id] = this),
          !a || !l)
        ) {
          console.error("Failed to create chart: can't acquire context from the given item");
          return;
        }
        Zt.listen(this, 'complete', Pg),
          Zt.listen(this, 'progress', uO),
          this._initialize(),
          this.attached && this.update();
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: e, maintainAspectRatio: n },
          width: r,
          height: i,
          _aspectRatio: s,
        } = this;
        return de(e) ? (n && s ? s : i ? r / i : null) : e;
      }
      get data() {
        return this.config.data;
      }
      set data(e) {
        this.config.data = e;
      }
      get options() {
        return this._options;
      }
      set options(e) {
        this.config.options = e;
      }
      get registry() {
        return zt;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive ? this.resize() : sg(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return tg(this.canvas, this.ctx), this;
      }
      stop() {
        return Zt.stop(this), this;
      }
      resize(e, n) {
        Zt.running(this) ? (this._resizeBeforeDraw = { width: e, height: n }) : this._resize(e, n);
      }
      _resize(e, n) {
        const r = this.options,
          i = this.canvas,
          s = r.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(i, e, n, s),
          a = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
          l = this.width ? 'resize' : 'attach';
        (this.width = o.width),
          (this.height = o.height),
          (this._aspectRatio = this.aspectRatio),
          sg(this, a, !0) &&
            (this.notifyPlugins('resize', { size: o }),
            se(r.onResize, [this, o], this),
            this.attached && this._doResize(l) && this.render());
      }
      ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        te(n, (r, i) => {
          r.id = i;
        });
      }
      buildOrUpdateScales() {
        const e = this.options,
          n = e.scales,
          r = this.scales,
          i = Object.keys(r).reduce((o, a) => ((o[a] = !1), o), {});
        let s = [];
        n &&
          (s = s.concat(
            Object.keys(n).map((o) => {
              const a = n[o],
                l = nf(o, a),
                u = l === 'r',
                c = l === 'x';
              return {
                options: a,
                dposition: u ? 'chartArea' : c ? 'bottom' : 'left',
                dtype: u ? 'radialLinear' : c ? 'category' : 'linear',
              };
            }),
          )),
          te(s, (o) => {
            const a = o.options,
              l = a.id,
              u = nf(l, a),
              c = Z(a.type, o.dtype);
            (a.position === void 0 || Cg(a.position, u) !== Cg(o.dposition)) && (a.position = o.dposition), (i[l] = !0);
            let f = null;
            if (l in r && r[l].type === c) f = r[l];
            else {
              const h = zt.getScale(c);
              (f = new h({ id: l, type: c, ctx: this.ctx, chart: this })), (r[f.id] = f);
            }
            f.init(a, e);
          }),
          te(i, (o, a) => {
            o || delete r[a];
          }),
          te(r, (o) => {
            Mn.configure(this, o, o.options), Mn.addBox(this, o);
          });
      }
      _updateMetasets() {
        const e = this._metasets,
          n = this.data.datasets.length,
          r = e.length;
        if ((e.sort((i, s) => i.index - s.index), r > n)) {
          for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
          e.splice(n, r - n);
        }
        this._sortedMetasets = e.slice(0).sort(Dg('order', 'index'));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: e,
          data: { datasets: n },
        } = this;
        e.length > n.length && delete this._stacks,
          e.forEach((r, i) => {
            n.filter((s) => s === r._dataset).length === 0 && this._destroyDatasetMeta(i);
          });
      }
      buildOrUpdateControllers() {
        const e = [],
          n = this.data.datasets;
        let r, i;
        for (this._removeUnreferencedMetasets(), r = 0, i = n.length; r < i; r++) {
          const s = n[r];
          let o = this.getDatasetMeta(r);
          const a = s.type || this.config.type;
          if (
            (o.type && o.type !== a && (this._destroyDatasetMeta(r), (o = this.getDatasetMeta(r))),
            (o.type = a),
            (o.indexAxis = s.indexAxis || tf(a, this.options)),
            (o.order = s.order || 0),
            (o.index = r),
            (o.label = '' + s.label),
            (o.visible = this.isDatasetVisible(r)),
            o.controller)
          )
            o.controller.updateIndex(r), o.controller.linkScales();
          else {
            const l = zt.getController(a),
              { datasetElementType: u, dataElementType: c } = ye.datasets[a];
            Object.assign(l, { dataElementType: zt.getElement(c), datasetElementType: u && zt.getElement(u) }),
              (o.controller = new l(this, r)),
              e.push(o.controller);
          }
        }
        return this._updateMetasets(), e;
      }
      _resetElements() {
        te(
          this.data.datasets,
          (e, n) => {
            this.getDatasetMeta(n).controller.reset();
          },
          this,
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins('reset');
      }
      update(e) {
        const n = this.config;
        n.update();
        const r = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
          i = (this._animationsDisabled = !r.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          this.notifyPlugins('beforeUpdate', { mode: e, cancelable: !0 }) === !1)
        )
          return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let u = 0, c = this.data.datasets.length; u < c; u++) {
          const { controller: f } = this.getDatasetMeta(u),
            h = !i && s.indexOf(f) === -1;
          f.buildOrUpdateElements(h), (o = Math.max(+f.getMaxOverflow(), o));
        }
        (o = this._minPadding = r.layout.autoPadding ? o : 0),
          this._updateLayout(o),
          i ||
            te(s, (u) => {
              u.reset();
            }),
          this._updateDatasets(e),
          this.notifyPlugins('afterUpdate', { mode: e }),
          this._layers.sort(Dg('z', '_idx'));
        const { _active: a, _lastEvent: l } = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
      }
      _updateScales() {
        te(this.scales, (e) => {
          Mn.removeBox(this, e);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const e = this.options,
          n = new Set(Object.keys(this._listeners)),
          r = new Set(e.events);
        (!Hp(n, r) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: e } = this,
          n = this._getUniformDataChanges() || [];
        for (const { method: r, start: i, count: s } of n) {
          const o = r === '_removeElements' ? -s : s;
          cO(e, i, o);
        }
      }
      _getUniformDataChanges() {
        const e = this._dataChanges;
        if (!e || !e.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
          r = (s) => new Set(e.filter((o) => o[0] === s).map((o, a) => a + ',' + o.splice(1).join(','))),
          i = r(0);
        for (let s = 1; s < n; s++) if (!Hp(i, r(s))) return;
        return Array.from(i)
          .map((s) => s.split(','))
          .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
      }
      _updateLayout(e) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        Mn.update(this, this.width, this.height, e);
        const n = this.chartArea,
          r = n.width <= 0 || n.height <= 0;
        (this._layers = []),
          te(
            this.boxes,
            (i) => {
              (r && i.position === 'chartArea') || (i.configure && i.configure(), this._layers.push(...i._layers()));
            },
            this,
          ),
          this._layers.forEach((i, s) => {
            i._idx = s;
          }),
          this.notifyPlugins('afterLayout');
      }
      _updateDatasets(e) {
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: e, cancelable: !0 }) !== !1) {
          for (let n = 0, r = this.data.datasets.length; n < r; ++n) this.getDatasetMeta(n).controller.configure();
          for (let n = 0, r = this.data.datasets.length; n < r; ++n)
            this._updateDataset(n, Hn(e) ? e({ datasetIndex: n }) : e);
          this.notifyPlugins('afterDatasetsUpdate', { mode: e });
        }
      }
      _updateDataset(e, n) {
        const r = this.getDatasetMeta(e),
          i = { meta: r, index: e, mode: n, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', i) !== !1 &&
          (r.controller._update(n), (i.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', i));
      }
      render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
          (Zt.has(this) ? this.attached && !Zt.running(this) && Zt.start(this) : (this.draw(), Pg({ chart: this })));
      }
      draw() {
        let e;
        if (this._resizeBeforeDraw) {
          const { width: r, height: i } = this._resizeBeforeDraw;
          (this._resizeBeforeDraw = null), this._resize(r, i);
        }
        if (
          (this.clear(),
          this.width <= 0 || this.height <= 0 || this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
        )
          return;
        const n = this._layers;
        for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
        for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
      }
      _getSortedDatasetMetas(e) {
        const n = this._sortedMetasets,
          r = [];
        let i, s;
        for (i = 0, s = n.length; i < s; ++i) {
          const o = n[i];
          (!e || o.visible) && r.push(o);
        }
        return r;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const e = this.getSortedVisibleDatasetMetas();
        for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(e) {
        const n = this.ctx,
          r = e._clip,
          i = !r.disabled,
          s = hO(e, this.chartArea),
          o = { meta: e, index: e.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
          (i &&
            Uh(n, {
              left: r.left === !1 ? 0 : s.left - r.left,
              right: r.right === !1 ? this.width : s.right + r.right,
              top: r.top === !1 ? 0 : s.top - r.top,
              bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom,
            }),
          e.controller.draw(),
          i && Wh(n),
          (o.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', o));
      }
      isPointInArea(e) {
        return Xr(e, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(e, n, r, i) {
        const s = lE.modes[n];
        return typeof s == 'function' ? s(this, e, r, i) : [];
      }
      getDatasetMeta(e) {
        const n = this.data.datasets[e],
          r = this._metasets;
        let i = r.filter((s) => s && s._dataset === n).pop();
        return (
          i ||
            ((i = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (n && n.order) || 0,
              index: e,
              _dataset: n,
              _parsed: [],
              _sorted: !1,
            }),
            r.push(i)),
          i
        );
      }
      getContext() {
        return this.$context || (this.$context = Pr(null, { chart: this, type: 'chart' }));
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(e) {
        const n = this.data.datasets[e];
        if (!n) return !1;
        const r = this.getDatasetMeta(e);
        return typeof r.hidden == 'boolean' ? !r.hidden : !n.hidden;
      }
      setDatasetVisibility(e, n) {
        const r = this.getDatasetMeta(e);
        r.hidden = !n;
      }
      toggleDataVisibility(e) {
        this._hiddenIndices[e] = !this._hiddenIndices[e];
      }
      getDataVisibility(e) {
        return !this._hiddenIndices[e];
      }
      _updateVisibility(e, n, r) {
        const i = r ? 'show' : 'hide',
          s = this.getDatasetMeta(e),
          o = s.controller._resolveAnimations(void 0, i);
        al(n)
          ? ((s.data[n].hidden = !r), this.update())
          : (this.setDatasetVisibility(e, r),
            o.update(s, { visible: r }),
            this.update((a) => (a.datasetIndex === e ? i : void 0)));
      }
      hide(e, n) {
        this._updateVisibility(e, n, !1);
      }
      show(e, n) {
        this._updateVisibility(e, n, !0);
      }
      _destroyDatasetMeta(e) {
        const n = this._metasets[e];
        n && n.controller && n.controller._destroy(), delete this._metasets[e];
      }
      _stop() {
        let e, n;
        for (this.stop(), Zt.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e)
          this._destroyDatasetMeta(e);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: e, ctx: n } = this;
        this._stop(),
          this.config.clearCache(),
          e &&
            (this.unbindEvents(), tg(e, n), this.platform.releaseContext(n), (this.canvas = null), (this.ctx = null)),
          delete _a[this.id],
          this.notifyPlugins('afterDestroy');
      }
      toBase64Image(...e) {
        return this.canvas.toDataURL(...e);
      }
      bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
      }
      bindUserEvents() {
        const e = this._listeners,
          n = this.platform,
          r = (s, o) => {
            n.addEventListener(this, s, o), (e[s] = o);
          },
          i = (s, o, a) => {
            (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
          };
        te(this.options.events, (s) => r(s, i));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const e = this._responsiveListeners,
          n = this.platform,
          r = (l, u) => {
            n.addEventListener(this, l, u), (e[l] = u);
          },
          i = (l, u) => {
            e[l] && (n.removeEventListener(this, l, u), delete e[l]);
          },
          s = (l, u) => {
            this.canvas && this.resize(l, u);
          };
        let o;
        const a = () => {
          i('attach', a), (this.attached = !0), this.resize(), r('resize', s), r('detach', o);
        };
        (o = () => {
          (this.attached = !1), i('resize', s), this._stop(), this._resize(0, 0), r('attach', a);
        }),
          n.isAttached(this.canvas) ? a() : o();
      }
      unbindEvents() {
        te(this._listeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
          (this._listeners = {}),
          te(this._responsiveListeners, (e, n) => {
            this.platform.removeEventListener(this, n, e);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(e, n, r) {
        const i = r ? 'set' : 'remove';
        let s, o, a, l;
        for (
          n === 'dataset' &&
            ((s = this.getDatasetMeta(e[0].datasetIndex)), s.controller['_' + i + 'DatasetHoverStyle']()),
            a = 0,
            l = e.length;
          a < l;
          ++a
        ) {
          o = e[a];
          const u = o && this.getDatasetMeta(o.datasetIndex).controller;
          u && u[i + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(e) {
        const n = this._active || [],
          r = e.map(({ datasetIndex: s, index: o }) => {
            const a = this.getDatasetMeta(s);
            if (!a) throw new Error('No dataset found at index ' + s);
            return { datasetIndex: s, element: a.data[o], index: o };
          });
        !sl(r, n) && ((this._active = r), (this._lastEvent = null), this._updateHoverStyles(r, n));
      }
      notifyPlugins(e, n, r) {
        return this._plugins.notify(this, e, n, r);
      }
      isPluginEnabled(e) {
        return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
      }
      _updateHoverStyles(e, n, r) {
        const i = this.options.hover,
          s = (l, u) => l.filter((c) => !u.some((f) => c.datasetIndex === f.datasetIndex && c.index === f.index)),
          o = s(n, e),
          a = r ? e : s(e, n);
        o.length && this.updateHoverStyle(o, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
      }
      _eventHandler(e, n) {
        const r = { event: e, replay: n, cancelable: !0, inChartArea: this.isPointInArea(e) },
          i = (o) => (o.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', r, i) === !1) return;
        const s = this._handleEvent(e, n, r.inChartArea);
        return (r.cancelable = !1), this.notifyPlugins('afterEvent', r, i), (s || r.changed) && this.render(), this;
      }
      _handleEvent(e, n, r) {
        const { _active: i = [], options: s } = this,
          o = n,
          a = this._getActiveElements(e, i, r, o),
          l = qS(e),
          u = fO(e, this._lastEvent, r, l);
        r && ((this._lastEvent = null), se(s.onHover, [e, a, this], this), l && se(s.onClick, [e, a, this], this));
        const c = !sl(a, i);
        return (c || n) && ((this._active = a), this._updateHoverStyles(a, i, n)), (this._lastEvent = u), c;
      }
      _getActiveElements(e, n, r, i) {
        if (e.type === 'mouseout') return [];
        if (!r) return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(e, s.mode, s, i);
      }
    }),
    V(vn, 'defaults', ye),
    V(vn, 'instances', _a),
    V(vn, 'overrides', kr),
    V(vn, 'registry', zt),
    V(vn, 'version', aO),
    V(vn, 'getChart', Ng),
    vn);
  function Mg() {
    return te(ql.instances, (t) => t._plugins.invalidate());
  }
  function dO(t, e, n) {
    const { startAngle: r, pixelMargin: i, x: s, y: o, outerRadius: a, innerRadius: l } = e;
    let u = i / a;
    t.beginPath(),
      t.arc(s, o, a, r - u, n + u),
      l > i ? ((u = i / l), t.arc(s, o, l, n + u, r - u, !0)) : t.arc(s, o, i, n + Se, r - Se),
      t.closePath(),
      t.clip();
  }
  function pO(t) {
    return $h(t, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
  }
  function gO(t, e, n, r) {
    const i = pO(t.options.borderRadius),
      s = (n - e) / 2,
      o = Math.min(s, (r * e) / 2),
      a = (l) => {
        const u = ((n - Math.min(s, l)) * r) / 2;
        return _t(l, 0, Math.min(s, u));
      };
    return {
      outerStart: a(i.outerStart),
      outerEnd: a(i.outerEnd),
      innerStart: _t(i.innerStart, 0, o),
      innerEnd: _t(i.innerEnd, 0, o),
    };
  }
  function Ar(t, e, n, r) {
    return { x: n + t * Math.cos(e), y: r + t * Math.sin(e) };
  }
  function ml(t, e, n, r, i, s) {
    const { x: o, y: a, startAngle: l, pixelMargin: u, innerRadius: c } = e,
      f = Math.max(e.outerRadius + r + n - u, 0),
      h = c > 0 ? c + r + n + u : 0;
    let d = 0;
    const g = i - l;
    if (r) {
      const Q = c > 0 ? c - r : 0,
        K = f > 0 ? f - r : 0,
        re = (Q + K) / 2,
        M = re !== 0 ? (g * re) / (re + r) : g;
      d = (g - M) / 2;
    }
    const v = Math.max(0.001, g * f - n / Te) / f,
      x = (g - v) / 2,
      p = l + x + d,
      m = i - x - d,
      { outerStart: y, outerEnd: b, innerStart: _, innerEnd: S } = gO(e, h, f, m - p),
      E = f - y,
      O = f - b,
      D = p + y / E,
      P = m - b / O,
      j = h + _,
      z = h + S,
      U = p + _ / j,
      le = m - S / z;
    if ((t.beginPath(), s)) {
      const Q = (D + P) / 2;
      if ((t.arc(o, a, f, D, Q), t.arc(o, a, f, Q, P), b > 0)) {
        const I = Ar(O, P, o, a);
        t.arc(I.x, I.y, b, P, m + Se);
      }
      const K = Ar(z, m, o, a);
      if ((t.lineTo(K.x, K.y), S > 0)) {
        const I = Ar(z, le, o, a);
        t.arc(I.x, I.y, S, m + Se, le + Math.PI);
      }
      const re = (m - S / h + (p + _ / h)) / 2;
      if ((t.arc(o, a, h, m - S / h, re, !0), t.arc(o, a, h, re, p + _ / h, !0), _ > 0)) {
        const I = Ar(j, U, o, a);
        t.arc(I.x, I.y, _, U + Math.PI, p - Se);
      }
      const M = Ar(E, p, o, a);
      if ((t.lineTo(M.x, M.y), y > 0)) {
        const I = Ar(E, D, o, a);
        t.arc(I.x, I.y, y, p - Se, D);
      }
    } else {
      t.moveTo(o, a);
      const Q = Math.cos(D) * f + o,
        K = Math.sin(D) * f + a;
      t.lineTo(Q, K);
      const re = Math.cos(P) * f + o,
        M = Math.sin(P) * f + a;
      t.lineTo(re, M);
    }
    t.closePath();
  }
  function mO(t, e, n, r, i) {
    const { fullCircles: s, startAngle: o, circumference: a } = e;
    let l = e.endAngle;
    if (s) {
      ml(t, e, n, r, l, i);
      for (let u = 0; u < s; ++u) t.fill();
      isNaN(a) || (l = o + (a % ve || ve));
    }
    return ml(t, e, n, r, l, i), t.fill(), l;
  }
  function vO(t, e, n, r, i) {
    const { fullCircles: s, startAngle: o, circumference: a, options: l } = e,
      { borderWidth: u, borderJoinStyle: c, borderDash: f, borderDashOffset: h } = l,
      d = l.borderAlign === 'inner';
    if (!u) return;
    t.setLineDash(f || []),
      (t.lineDashOffset = h),
      d ? ((t.lineWidth = u * 2), (t.lineJoin = c || 'round')) : ((t.lineWidth = u), (t.lineJoin = c || 'bevel'));
    let g = e.endAngle;
    if (s) {
      ml(t, e, n, r, g, i);
      for (let v = 0; v < s; ++v) t.stroke();
      isNaN(a) || (g = o + (a % ve || ve));
    }
    d && dO(t, e, g), s || (ml(t, e, n, r, g, i), t.stroke());
  }
  class us extends Er {
    constructor(n) {
      super();
      V(this, 'circumference');
      V(this, 'endAngle');
      V(this, 'fullCircles');
      V(this, 'innerRadius');
      V(this, 'outerRadius');
      V(this, 'pixelMargin');
      V(this, 'startAngle');
      (this.options = void 0),
        (this.circumference = void 0),
        (this.startAngle = void 0),
        (this.endAngle = void 0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.pixelMargin = 0),
        (this.fullCircles = 0),
        n && Object.assign(this, n);
    }
    inRange(n, r, i) {
      const s = this.getProps(['x', 'y'], i),
        { angle: o, distance: a } = z0(s, { x: n, y: r }),
        {
          startAngle: l,
          endAngle: u,
          innerRadius: c,
          outerRadius: f,
          circumference: h,
        } = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], i),
        d = (this.options.spacing + this.options.borderWidth) / 2,
        g = Z(h, u - l),
        v = fl(o, l, u) && l !== u,
        x = g >= ve || v,
        p = os(a, c + d, f + d);
      return x && p;
    }
    getCenterPoint(n) {
      const {
          x: r,
          y: i,
          startAngle: s,
          endAngle: o,
          innerRadius: a,
          outerRadius: l,
        } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], n),
        { offset: u, spacing: c } = this.options,
        f = (s + o) / 2,
        h = (a + l + c + u) / 2;
      return { x: r + Math.cos(f) * h, y: i + Math.sin(f) * h };
    }
    tooltipPosition(n) {
      return this.getCenterPoint(n);
    }
    draw(n) {
      const { options: r, circumference: i } = this,
        s = (r.offset || 0) / 4,
        o = (r.spacing || 0) / 2,
        a = r.circular;
      if (
        ((this.pixelMargin = r.borderAlign === 'inner' ? 0.33 : 0),
        (this.fullCircles = i > ve ? Math.floor(i / ve) : 0),
        i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      )
        return;
      n.save();
      const l = (this.startAngle + this.endAngle) / 2;
      n.translate(Math.cos(l) * s, Math.sin(l) * s);
      const u = 1 - Math.sin(Math.min(Te, i || 0)),
        c = s * u;
      (n.fillStyle = r.backgroundColor),
        (n.strokeStyle = r.borderColor),
        mO(n, this, c, o, a),
        vO(n, this, c, o, a),
        n.restore();
    }
  }
  V(us, 'id', 'arc'),
    V(us, 'defaults', {
      borderAlign: 'center',
      borderColor: '#fff',
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: !0,
    }),
    V(us, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
    V(us, 'descriptors', { _scriptable: !0, _indexable: (n) => n !== 'borderDash' });
  const Ig = (t, e) => {
      let { boxHeight: n = e, boxWidth: r = e } = t;
      return (
        t.usePointStyle && ((n = Math.min(n, e)), (r = t.pointStyleWidth || Math.min(r, e))),
        { boxWidth: r, boxHeight: n, itemHeight: Math.max(e, n) }
      );
    },
    yO = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
  class Rg extends Er {
    constructor(e) {
      super(),
        (this._added = !1),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1),
        (this.chart = e.chart),
        (this.options = e.options),
        (this.ctx = e.ctx),
        (this.legendItems = void 0),
        (this.columnSizes = void 0),
        (this.lineWidths = void 0),
        (this.maxHeight = void 0),
        (this.maxWidth = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this._margins = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(e, n, r) {
      (this.maxWidth = e),
        (this.maxHeight = n),
        (this._margins = r),
        this.setDimensions(),
        this.buildLabels(),
        this.fit();
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
        : ((this.height = this.maxHeight), (this.top = this._margins.top), (this.bottom = this.height));
    }
    buildLabels() {
      const e = this.options.labels || {};
      let n = se(e.generateLabels, [this.chart], this) || [];
      e.filter && (n = n.filter((r) => e.filter(r, this.chart.data))),
        e.sort && (n = n.sort((r, i) => e.sort(r, i, this.chart.data))),
        this.options.reverse && n.reverse(),
        (this.legendItems = n);
    }
    fit() {
      const { options: e, ctx: n } = this;
      if (!e.display) {
        this.width = this.height = 0;
        return;
      }
      const r = e.labels,
        i = ze(r.font),
        s = i.size,
        o = this._computeTitleHeight(),
        { boxWidth: a, itemHeight: l } = Ig(r, s);
      let u, c;
      (n.font = i.string),
        this.isHorizontal()
          ? ((u = this.maxWidth), (c = this._fitRows(o, s, a, l) + 10))
          : ((c = this.maxHeight), (u = this._fitCols(o, i, a, l) + 10)),
        (this.width = Math.min(u, e.maxWidth || this.maxWidth)),
        (this.height = Math.min(c, e.maxHeight || this.maxHeight));
    }
    _fitRows(e, n, r, i) {
      const {
          ctx: s,
          maxWidth: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        l = (this.legendHitBoxes = []),
        u = (this.lineWidths = [0]),
        c = i + a;
      let f = e;
      (s.textAlign = 'left'), (s.textBaseline = 'middle');
      let h = -1,
        d = -c;
      return (
        this.legendItems.forEach((g, v) => {
          const x = r + n / 2 + s.measureText(g.text).width;
          (v === 0 || u[u.length - 1] + x + 2 * a > o) &&
            ((f += c), (u[u.length - (v > 0 ? 0 : 1)] = 0), (d += c), h++),
            (l[v] = { left: 0, top: d, row: h, width: x, height: i }),
            (u[u.length - 1] += x + a);
        }),
        f
      );
    }
    _fitCols(e, n, r, i) {
      const {
          ctx: s,
          maxHeight: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        l = (this.legendHitBoxes = []),
        u = (this.columnSizes = []),
        c = o - e;
      let f = a,
        h = 0,
        d = 0,
        g = 0,
        v = 0;
      return (
        this.legendItems.forEach((x, p) => {
          const { itemWidth: m, itemHeight: y } = xO(r, n, s, x, i);
          p > 0 && d + y + 2 * a > c && ((f += h + a), u.push({ width: h, height: d }), (g += h + a), v++, (h = d = 0)),
            (l[p] = { left: g, top: d, col: v, width: m, height: y }),
            (h = Math.max(h, m)),
            (d += y + a);
        }),
        (f += h),
        u.push({ width: h, height: d }),
        f
      );
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const e = this._computeTitleHeight(),
        {
          legendHitBoxes: n,
          options: {
            align: r,
            labels: { padding: i },
            rtl: s,
          },
        } = this,
        o = ui(s, this.left, this.width);
      if (this.isHorizontal()) {
        let a = 0,
          l = ut(r, this.left + i, this.right - this.lineWidths[a]);
        for (const u of n)
          a !== u.row && ((a = u.row), (l = ut(r, this.left + i, this.right - this.lineWidths[a]))),
            (u.top += this.top + e + i),
            (u.left = o.leftForLtr(o.x(l), u.width)),
            (l += u.width + i);
      } else {
        let a = 0,
          l = ut(r, this.top + e + i, this.bottom - this.columnSizes[a].height);
        for (const u of n)
          u.col !== a && ((a = u.col), (l = ut(r, this.top + e + i, this.bottom - this.columnSizes[a].height))),
            (u.top = l),
            (u.left += this.left + i),
            (u.left = o.leftForLtr(o.x(u.left), u.width)),
            (l += u.height + i);
      }
    }
    isHorizontal() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
      if (this.options.display) {
        const e = this.ctx;
        Uh(e, this), this._draw(), Wh(e);
      }
    }
    _draw() {
      const { options: e, columnSizes: n, lineWidths: r, ctx: i } = this,
        { align: s, labels: o } = e,
        a = ye.color,
        l = ui(e.rtl, this.left, this.width),
        u = ze(o.font),
        { padding: c } = o,
        f = u.size,
        h = f / 2;
      let d;
      this.drawTitle(),
        (i.textAlign = l.textAlign('left')),
        (i.textBaseline = 'middle'),
        (i.lineWidth = 0.5),
        (i.font = u.string);
      const { boxWidth: g, boxHeight: v, itemHeight: x } = Ig(o, f),
        p = function (S, E, O) {
          if (isNaN(g) || g <= 0 || isNaN(v) || v < 0) return;
          i.save();
          const D = Z(O.lineWidth, 1);
          if (
            ((i.fillStyle = Z(O.fillStyle, a)),
            (i.lineCap = Z(O.lineCap, 'butt')),
            (i.lineDashOffset = Z(O.lineDashOffset, 0)),
            (i.lineJoin = Z(O.lineJoin, 'miter')),
            (i.lineWidth = D),
            (i.strokeStyle = Z(O.strokeStyle, a)),
            i.setLineDash(Z(O.lineDash, [])),
            o.usePointStyle)
          ) {
            const P = { radius: (v * Math.SQRT2) / 2, pointStyle: O.pointStyle, rotation: O.rotation, borderWidth: D },
              j = l.xPlus(S, g / 2),
              z = E + h;
            H0(i, P, j, z, o.pointStyleWidth && g);
          } else {
            const P = E + Math.max((f - v) / 2, 0),
              j = l.leftForLtr(S, g),
              z = li(O.borderRadius);
            i.beginPath(),
              Object.values(z).some((U) => U !== 0) ? dl(i, { x: j, y: P, w: g, h: v, radius: z }) : i.rect(j, P, g, v),
              i.fill(),
              D !== 0 && i.stroke();
          }
          i.restore();
        },
        m = function (S, E, O) {
          bi(i, O.text, S, E + x / 2, u, { strikethrough: O.hidden, textAlign: l.textAlign(O.textAlign) });
        },
        y = this.isHorizontal(),
        b = this._computeTitleHeight();
      y
        ? (d = { x: ut(s, this.left + c, this.right - r[0]), y: this.top + c + b, line: 0 })
        : (d = { x: this.left + c, y: ut(s, this.top + b + c, this.bottom - n[0].height), line: 0 }),
        X0(this.ctx, e.textDirection);
      const _ = x + c;
      this.legendItems.forEach((S, E) => {
        (i.strokeStyle = S.fontColor), (i.fillStyle = S.fontColor);
        const O = i.measureText(S.text).width,
          D = l.textAlign(S.textAlign || (S.textAlign = o.textAlign)),
          P = g + h + O;
        let j = d.x,
          z = d.y;
        l.setWidth(this.width),
          y
            ? E > 0 &&
              j + P + c > this.right &&
              ((z = d.y += _), d.line++, (j = d.x = ut(s, this.left + c, this.right - r[d.line])))
            : E > 0 &&
              z + _ > this.bottom &&
              ((j = d.x = j + n[d.line].width + c),
              d.line++,
              (z = d.y = ut(s, this.top + b + c, this.bottom - n[d.line].height)));
        const U = l.x(j);
        if ((p(U, z, S), (j = ik(D, j + g + h, y ? j + P : this.right, e.rtl)), m(l.x(j), z, S), y)) d.x += P + c;
        else if (typeof S.text != 'string') {
          const le = u.lineHeight;
          d.y += cx(S, le) + c;
        } else d.y += _;
      }),
        J0(this.ctx, e.textDirection);
    }
    drawTitle() {
      const e = this.options,
        n = e.title,
        r = ze(n.font),
        i = Ge(n.padding);
      if (!n.display) return;
      const s = ui(e.rtl, this.left, this.width),
        o = this.ctx,
        a = n.position,
        l = r.size / 2,
        u = i.top + l;
      let c,
        f = this.left,
        h = this.width;
      if (this.isHorizontal())
        (h = Math.max(...this.lineWidths)), (c = this.top + u), (f = ut(e.align, f, this.right - h));
      else {
        const g = this.columnSizes.reduce((v, x) => Math.max(v, x.height), 0);
        c = u + ut(e.align, this.top, this.bottom - g - e.labels.padding - this._computeTitleHeight());
      }
      const d = ut(a, f, f + h);
      (o.textAlign = s.textAlign(W0(a))),
        (o.textBaseline = 'middle'),
        (o.strokeStyle = n.color),
        (o.fillStyle = n.color),
        (o.font = r.string),
        bi(o, n.text, d, c, r);
    }
    _computeTitleHeight() {
      const e = this.options.title,
        n = ze(e.font),
        r = Ge(e.padding);
      return e.display ? n.lineHeight + r.height : 0;
    }
    _getLegendItemAt(e, n) {
      let r, i, s;
      if (os(e, this.left, this.right) && os(n, this.top, this.bottom)) {
        for (s = this.legendHitBoxes, r = 0; r < s.length; ++r)
          if (((i = s[r]), os(e, i.left, i.left + i.width) && os(n, i.top, i.top + i.height)))
            return this.legendItems[r];
      }
      return null;
    }
    handleEvent(e) {
      const n = this.options;
      if (!wO(e.type, n)) return;
      const r = this._getLegendItemAt(e.x, e.y);
      if (e.type === 'mousemove' || e.type === 'mouseout') {
        const i = this._hoveredItem,
          s = yO(i, r);
        i && !s && se(n.onLeave, [e, i, this], this),
          (this._hoveredItem = r),
          r && !s && se(n.onHover, [e, r, this], this);
      } else r && se(n.onClick, [e, r, this], this);
    }
  }
  function xO(t, e, n, r, i) {
    const s = bO(r, t, e, n),
      o = _O(i, r, e.lineHeight);
    return { itemWidth: s, itemHeight: o };
  }
  function bO(t, e, n, r) {
    let i = t.text;
    return (
      i && typeof i != 'string' && (i = i.reduce((s, o) => (s.length > o.length ? s : o))),
      e + n.size / 2 + r.measureText(i).width
    );
  }
  function _O(t, e, n) {
    let r = t;
    return typeof e.text != 'string' && (r = cx(e, n)), r;
  }
  function cx(t, e) {
    const n = t.text ? t.text.length : 0;
    return e * n;
  }
  function wO(t, e) {
    return !!(
      ((t === 'mousemove' || t === 'mouseout') && (e.onHover || e.onLeave)) ||
      (e.onClick && (t === 'click' || t === 'mouseup'))
    );
  }
  var SO = {
    id: 'legend',
    _element: Rg,
    start(t, e, n) {
      const r = (t.legend = new Rg({ ctx: t.ctx, options: n, chart: t }));
      Mn.configure(t, r, n), Mn.addBox(t, r);
    },
    stop(t) {
      Mn.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
      const r = t.legend;
      Mn.configure(t, r, n), (r.options = n);
    },
    afterUpdate(t) {
      const e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: 'top',
      align: 'center',
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, n) {
        const r = e.datasetIndex,
          i = n.chart;
        i.isDatasetVisible(r) ? (i.hide(r), (e.hidden = !0)) : (i.show(r), (e.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (t) => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: { usePointStyle: n, pointStyle: r, textAlign: i, color: s, useBorderRadius: o, borderRadius: a },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((l) => {
            const u = l.controller.getStyle(n ? 0 : void 0),
              c = Ge(u.borderWidth);
            return {
              text: e[l.index].label,
              fillStyle: u.backgroundColor,
              fontColor: s,
              hidden: !l.visible,
              lineCap: u.borderCapStyle,
              lineDash: u.borderDash,
              lineDashOffset: u.borderDashOffset,
              lineJoin: u.borderJoinStyle,
              lineWidth: (c.width + c.height) / 4,
              strokeStyle: u.borderColor,
              pointStyle: r || u.pointStyle,
              rotation: u.rotation,
              textAlign: i || u.textAlign,
              borderRadius: o && (a || u.borderRadius),
              datasetIndex: l.index,
            };
          }, this);
        },
      },
      title: { color: (t) => t.chart.options.color, display: !1, position: 'center', text: '' },
    },
    descriptors: {
      _scriptable: (t) => !t.startsWith('on'),
      labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
    },
  };
  const cs = {
    average(t) {
      if (!t.length) return !1;
      let e,
        n,
        r = new Set(),
        i = 0,
        s = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        const a = t[e].element;
        if (a && a.hasValue()) {
          const l = a.tooltipPosition();
          r.add(l.x), (i += l.y), ++s;
        }
      }
      return s === 0 || r.size === 0 ? !1 : { x: [...r].reduce((a, l) => a + l) / r.size, y: i / s };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let n = e.x,
        r = e.y,
        i = Number.POSITIVE_INFINITY,
        s,
        o,
        a;
      for (s = 0, o = t.length; s < o; ++s) {
        const l = t[s].element;
        if (l && l.hasValue()) {
          const u = l.getCenterPoint(),
            c = XS(e, u);
          c < i && ((i = c), (a = l));
        }
      }
      if (a) {
        const l = a.tooltipPosition();
        (n = l.x), (r = l.y);
      }
      return { x: n, y: r };
    },
  };
  function Ft(t, e) {
    return e && (we(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function en(t) {
    return (typeof t == 'string' || t instanceof String) &&
      t.indexOf(`
`) > -1
      ? t.split(`
`)
      : t;
  }
  function kO(t, e) {
    const { element: n, datasetIndex: r, index: i } = e,
      s = t.getDatasetMeta(r).controller,
      { label: o, value: a } = s.getLabelAndValue(i);
    return {
      chart: t,
      label: o,
      parsed: s.getParsed(i),
      raw: t.data.datasets[r].data[i],
      formattedValue: a,
      dataset: s.getDataset(),
      dataIndex: i,
      datasetIndex: r,
      element: n,
    };
  }
  function Ag(t, e) {
    const n = t.chart.ctx,
      { body: r, footer: i, title: s } = t,
      { boxWidth: o, boxHeight: a } = e,
      l = ze(e.bodyFont),
      u = ze(e.titleFont),
      c = ze(e.footerFont),
      f = s.length,
      h = i.length,
      d = r.length,
      g = Ge(e.padding);
    let v = g.height,
      x = 0,
      p = r.reduce((b, _) => b + _.before.length + _.lines.length + _.after.length, 0);
    if (
      ((p += t.beforeBody.length + t.afterBody.length),
      f && (v += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom),
      p)
    ) {
      const b = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
      v += d * b + (p - d) * l.lineHeight + (p - 1) * e.bodySpacing;
    }
    h && (v += e.footerMarginTop + h * c.lineHeight + (h - 1) * e.footerSpacing);
    let m = 0;
    const y = function (b) {
      x = Math.max(x, n.measureText(b).width + m);
    };
    return (
      n.save(),
      (n.font = u.string),
      te(t.title, y),
      (n.font = l.string),
      te(t.beforeBody.concat(t.afterBody), y),
      (m = e.displayColors ? o + 2 + e.boxPadding : 0),
      te(r, (b) => {
        te(b.before, y), te(b.lines, y), te(b.after, y);
      }),
      (m = 0),
      (n.font = c.string),
      te(t.footer, y),
      n.restore(),
      (x += g.width),
      { width: x, height: v }
    );
  }
  function EO(t, e) {
    const { y: n, height: r } = e;
    return n < r / 2 ? 'top' : n > t.height - r / 2 ? 'bottom' : 'center';
  }
  function OO(t, e, n, r) {
    const { x: i, width: s } = r,
      o = n.caretSize + n.caretPadding;
    if ((t === 'left' && i + s + o > e.width) || (t === 'right' && i - s - o < 0)) return !0;
  }
  function TO(t, e, n, r) {
    const { x: i, width: s } = n,
      {
        width: o,
        chartArea: { left: a, right: l },
      } = t;
    let u = 'center';
    return (
      r === 'center'
        ? (u = i <= (a + l) / 2 ? 'left' : 'right')
        : i <= s / 2
          ? (u = 'left')
          : i >= o - s / 2 && (u = 'right'),
      OO(u, t, e, n) && (u = 'center'),
      u
    );
  }
  function Lg(t, e, n) {
    const r = n.yAlign || e.yAlign || EO(t, n);
    return { xAlign: n.xAlign || e.xAlign || TO(t, e, n, r), yAlign: r };
  }
  function CO(t, e) {
    let { x: n, width: r } = t;
    return e === 'right' ? (n -= r) : e === 'center' && (n -= r / 2), n;
  }
  function DO(t, e, n) {
    let { y: r, height: i } = t;
    return e === 'top' ? (r += n) : e === 'bottom' ? (r -= i + n) : (r -= i / 2), r;
  }
  function Fg(t, e, n, r) {
    const { caretSize: i, caretPadding: s, cornerRadius: o } = t,
      { xAlign: a, yAlign: l } = n,
      u = i + s,
      { topLeft: c, topRight: f, bottomLeft: h, bottomRight: d } = li(o);
    let g = CO(e, a);
    const v = DO(e, l, u);
    return (
      l === 'center'
        ? a === 'left'
          ? (g += u)
          : a === 'right' && (g -= u)
        : a === 'left'
          ? (g -= Math.max(c, h) + i)
          : a === 'right' && (g += Math.max(f, d) + i),
      { x: _t(g, 0, r.width - e.width), y: _t(v, 0, r.height - e.height) }
    );
  }
  function Zo(t, e, n) {
    const r = Ge(n.padding);
    return e === 'center' ? t.x + t.width / 2 : e === 'right' ? t.x + t.width - r.right : t.x + r.left;
  }
  function jg(t) {
    return Ft([], en(t));
  }
  function PO(t, e, n) {
    return Pr(t, { tooltip: e, tooltipItems: n, type: 'tooltip' });
  }
  function zg(t, e) {
    const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
  }
  const fx = {
    beforeTitle: Xt,
    title(t) {
      if (t.length > 0) {
        const e = t[0],
          n = e.chart.data.labels,
          r = n ? n.length : 0;
        if (this && this.options && this.options.mode === 'dataset') return e.dataset.label || '';
        if (e.label) return e.label;
        if (r > 0 && e.dataIndex < r) return n[e.dataIndex];
      }
      return '';
    },
    afterTitle: Xt,
    beforeBody: Xt,
    beforeLabel: Xt,
    label(t) {
      if (this && this.options && this.options.mode === 'dataset')
        return t.label + ': ' + t.formattedValue || t.formattedValue;
      let e = t.dataset.label || '';
      e && (e += ': ');
      const n = t.formattedValue;
      return de(n) || (e += n), e;
    },
    labelColor(t) {
      const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return {
        borderColor: n.borderColor,
        backgroundColor: n.backgroundColor,
        borderWidth: n.borderWidth,
        borderDash: n.borderDash,
        borderDashOffset: n.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(t) {
      const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: Xt,
    afterBody: Xt,
    beforeFooter: Xt,
    footer: Xt,
    afterFooter: Xt,
  };
  function tt(t, e, n, r) {
    const i = t[e].call(n, r);
    return typeof i > 'u' ? fx[e].call(n, r) : i;
  }
  class rf extends Er {
    constructor(e) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = e.chart),
        (this.options = e.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(e) {
      (this.options = e), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
      const e = this._cachedAnimations;
      if (e) return e;
      const n = this.chart,
        r = this.options.setContext(this.getContext()),
        i = r.enabled && n.options.animation && r.animations,
        s = new Z0(this.chart, i);
      return i._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return this.$context || (this.$context = PO(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(e, n) {
      const { callbacks: r } = n,
        i = tt(r, 'beforeTitle', this, e),
        s = tt(r, 'title', this, e),
        o = tt(r, 'afterTitle', this, e);
      let a = [];
      return (a = Ft(a, en(i))), (a = Ft(a, en(s))), (a = Ft(a, en(o))), a;
    }
    getBeforeBody(e, n) {
      return jg(tt(n.callbacks, 'beforeBody', this, e));
    }
    getBody(e, n) {
      const { callbacks: r } = n,
        i = [];
      return (
        te(e, (s) => {
          const o = { before: [], lines: [], after: [] },
            a = zg(r, s);
          Ft(o.before, en(tt(a, 'beforeLabel', this, s))),
            Ft(o.lines, tt(a, 'label', this, s)),
            Ft(o.after, en(tt(a, 'afterLabel', this, s))),
            i.push(o);
        }),
        i
      );
    }
    getAfterBody(e, n) {
      return jg(tt(n.callbacks, 'afterBody', this, e));
    }
    getFooter(e, n) {
      const { callbacks: r } = n,
        i = tt(r, 'beforeFooter', this, e),
        s = tt(r, 'footer', this, e),
        o = tt(r, 'afterFooter', this, e);
      let a = [];
      return (a = Ft(a, en(i))), (a = Ft(a, en(s))), (a = Ft(a, en(o))), a;
    }
    _createItems(e) {
      const n = this._active,
        r = this.chart.data,
        i = [],
        s = [],
        o = [];
      let a = [],
        l,
        u;
      for (l = 0, u = n.length; l < u; ++l) a.push(kO(this.chart, n[l]));
      return (
        e.filter && (a = a.filter((c, f, h) => e.filter(c, f, h, r))),
        e.itemSort && (a = a.sort((c, f) => e.itemSort(c, f, r))),
        te(a, (c) => {
          const f = zg(e.callbacks, c);
          i.push(tt(f, 'labelColor', this, c)),
            s.push(tt(f, 'labelPointStyle', this, c)),
            o.push(tt(f, 'labelTextColor', this, c));
        }),
        (this.labelColors = i),
        (this.labelPointStyles = s),
        (this.labelTextColors = o),
        (this.dataPoints = a),
        a
      );
    }
    update(e, n) {
      const r = this.options.setContext(this.getContext()),
        i = this._active;
      let s,
        o = [];
      if (!i.length) this.opacity !== 0 && (s = { opacity: 0 });
      else {
        const a = cs[r.position].call(this, i, this._eventPosition);
        (o = this._createItems(r)),
          (this.title = this.getTitle(o, r)),
          (this.beforeBody = this.getBeforeBody(o, r)),
          (this.body = this.getBody(o, r)),
          (this.afterBody = this.getAfterBody(o, r)),
          (this.footer = this.getFooter(o, r));
        const l = (this._size = Ag(this, r)),
          u = Object.assign({}, a, l),
          c = Lg(this.chart, r, u),
          f = Fg(r, u, c, this.chart);
        (this.xAlign = c.xAlign),
          (this.yAlign = c.yAlign),
          (s = { opacity: 1, x: f.x, y: f.y, width: l.width, height: l.height, caretX: a.x, caretY: a.y });
      }
      (this._tooltipItems = o),
        (this.$context = void 0),
        s && this._resolveAnimations().update(this, s),
        e && r.external && r.external.call(this, { chart: this.chart, tooltip: this, replay: n });
    }
    drawCaret(e, n, r, i) {
      const s = this.getCaretPosition(e, r, i);
      n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, r) {
      const { xAlign: i, yAlign: s } = this,
        { caretSize: o, cornerRadius: a } = r,
        { topLeft: l, topRight: u, bottomLeft: c, bottomRight: f } = li(a),
        { x: h, y: d } = e,
        { width: g, height: v } = n;
      let x, p, m, y, b, _;
      return (
        s === 'center'
          ? ((b = d + v / 2),
            i === 'left'
              ? ((x = h), (p = x - o), (y = b + o), (_ = b - o))
              : ((x = h + g), (p = x + o), (y = b - o), (_ = b + o)),
            (m = x))
          : (i === 'left'
              ? (p = h + Math.max(l, c) + o)
              : i === 'right'
                ? (p = h + g - Math.max(u, f) - o)
                : (p = this.caretX),
            s === 'top'
              ? ((y = d), (b = y - o), (x = p - o), (m = p + o))
              : ((y = d + v), (b = y + o), (x = p + o), (m = p - o)),
            (_ = y)),
        { x1: x, x2: p, x3: m, y1: y, y2: b, y3: _ }
      );
    }
    drawTitle(e, n, r) {
      const i = this.title,
        s = i.length;
      let o, a, l;
      if (s) {
        const u = ui(r.rtl, this.x, this.width);
        for (
          e.x = Zo(this, r.titleAlign, r),
            n.textAlign = u.textAlign(r.titleAlign),
            n.textBaseline = 'middle',
            o = ze(r.titleFont),
            a = r.titleSpacing,
            n.fillStyle = r.titleColor,
            n.font = o.string,
            l = 0;
          l < s;
          ++l
        )
          n.fillText(i[l], u.x(e.x), e.y + o.lineHeight / 2),
            (e.y += o.lineHeight + a),
            l + 1 === s && (e.y += r.titleMarginBottom - a);
      }
    }
    _drawColorBox(e, n, r, i, s) {
      const o = this.labelColors[r],
        a = this.labelPointStyles[r],
        { boxHeight: l, boxWidth: u } = s,
        c = ze(s.bodyFont),
        f = Zo(this, 'left', s),
        h = i.x(f),
        d = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
        g = n.y + d;
      if (s.usePointStyle) {
        const v = { radius: Math.min(u, l) / 2, pointStyle: a.pointStyle, rotation: a.rotation, borderWidth: 1 },
          x = i.leftForLtr(h, u) + u / 2,
          p = g + l / 2;
        (e.strokeStyle = s.multiKeyBackground),
          (e.fillStyle = s.multiKeyBackground),
          ng(e, v, x, p),
          (e.strokeStyle = o.borderColor),
          (e.fillStyle = o.backgroundColor),
          ng(e, v, x, p);
      } else {
        (e.lineWidth = G(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1),
          (e.strokeStyle = o.borderColor),
          e.setLineDash(o.borderDash || []),
          (e.lineDashOffset = o.borderDashOffset || 0);
        const v = i.leftForLtr(h, u),
          x = i.leftForLtr(i.xPlus(h, 1), u - 2),
          p = li(o.borderRadius);
        Object.values(p).some((m) => m !== 0)
          ? (e.beginPath(),
            (e.fillStyle = s.multiKeyBackground),
            dl(e, { x: v, y: g, w: u, h: l, radius: p }),
            e.fill(),
            e.stroke(),
            (e.fillStyle = o.backgroundColor),
            e.beginPath(),
            dl(e, { x, y: g + 1, w: u - 2, h: l - 2, radius: p }),
            e.fill())
          : ((e.fillStyle = s.multiKeyBackground),
            e.fillRect(v, g, u, l),
            e.strokeRect(v, g, u, l),
            (e.fillStyle = o.backgroundColor),
            e.fillRect(x, g + 1, u - 2, l - 2));
      }
      e.fillStyle = this.labelTextColors[r];
    }
    drawBody(e, n, r) {
      const { body: i } = this,
        { bodySpacing: s, bodyAlign: o, displayColors: a, boxHeight: l, boxWidth: u, boxPadding: c } = r,
        f = ze(r.bodyFont);
      let h = f.lineHeight,
        d = 0;
      const g = ui(r.rtl, this.x, this.width),
        v = function (O) {
          n.fillText(O, g.x(e.x + d), e.y + h / 2), (e.y += h + s);
        },
        x = g.textAlign(o);
      let p, m, y, b, _, S, E;
      for (
        n.textAlign = o,
          n.textBaseline = 'middle',
          n.font = f.string,
          e.x = Zo(this, x, r),
          n.fillStyle = r.bodyColor,
          te(this.beforeBody, v),
          d = a && x !== 'right' ? (o === 'center' ? u / 2 + c : u + 2 + c) : 0,
          b = 0,
          S = i.length;
        b < S;
        ++b
      ) {
        for (
          p = i[b],
            m = this.labelTextColors[b],
            n.fillStyle = m,
            te(p.before, v),
            y = p.lines,
            a && y.length && (this._drawColorBox(n, e, b, g, r), (h = Math.max(f.lineHeight, l))),
            _ = 0,
            E = y.length;
          _ < E;
          ++_
        )
          v(y[_]), (h = f.lineHeight);
        te(p.after, v);
      }
      (d = 0), (h = f.lineHeight), te(this.afterBody, v), (e.y -= s);
    }
    drawFooter(e, n, r) {
      const i = this.footer,
        s = i.length;
      let o, a;
      if (s) {
        const l = ui(r.rtl, this.x, this.width);
        for (
          e.x = Zo(this, r.footerAlign, r),
            e.y += r.footerMarginTop,
            n.textAlign = l.textAlign(r.footerAlign),
            n.textBaseline = 'middle',
            o = ze(r.footerFont),
            n.fillStyle = r.footerColor,
            n.font = o.string,
            a = 0;
          a < s;
          ++a
        )
          n.fillText(i[a], l.x(e.x), e.y + o.lineHeight / 2), (e.y += o.lineHeight + r.footerSpacing);
      }
    }
    drawBackground(e, n, r, i) {
      const { xAlign: s, yAlign: o } = this,
        { x: a, y: l } = e,
        { width: u, height: c } = r,
        { topLeft: f, topRight: h, bottomLeft: d, bottomRight: g } = li(i.cornerRadius);
      (n.fillStyle = i.backgroundColor),
        (n.strokeStyle = i.borderColor),
        (n.lineWidth = i.borderWidth),
        n.beginPath(),
        n.moveTo(a + f, l),
        o === 'top' && this.drawCaret(e, n, r, i),
        n.lineTo(a + u - h, l),
        n.quadraticCurveTo(a + u, l, a + u, l + h),
        o === 'center' && s === 'right' && this.drawCaret(e, n, r, i),
        n.lineTo(a + u, l + c - g),
        n.quadraticCurveTo(a + u, l + c, a + u - g, l + c),
        o === 'bottom' && this.drawCaret(e, n, r, i),
        n.lineTo(a + d, l + c),
        n.quadraticCurveTo(a, l + c, a, l + c - d),
        o === 'center' && s === 'left' && this.drawCaret(e, n, r, i),
        n.lineTo(a, l + f),
        n.quadraticCurveTo(a, l, a + f, l),
        n.closePath(),
        n.fill(),
        i.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
      const n = this.chart,
        r = this.$animations,
        i = r && r.x,
        s = r && r.y;
      if (i || s) {
        const o = cs[e.position].call(this, this._active, this._eventPosition);
        if (!o) return;
        const a = (this._size = Ag(this, e)),
          l = Object.assign({}, o, this._size),
          u = Lg(n, e, l),
          c = Fg(e, l, u, n);
        (i._to !== c.x || s._to !== c.y) &&
          ((this.xAlign = u.xAlign),
          (this.yAlign = u.yAlign),
          (this.width = a.width),
          (this.height = a.height),
          (this.caretX = o.x),
          (this.caretY = o.y),
          this._resolveAnimations().update(this, c));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(e) {
      const n = this.options.setContext(this.getContext());
      let r = this.opacity;
      if (!r) return;
      this._updateAnimationTarget(n);
      const i = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      r = Math.abs(r) < 0.001 ? 0 : r;
      const o = Ge(n.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      n.enabled &&
        a &&
        (e.save(),
        (e.globalAlpha = r),
        this.drawBackground(s, e, i, n),
        X0(e, n.textDirection),
        (s.y += o.top),
        this.drawTitle(s, e, n),
        this.drawBody(s, e, n),
        this.drawFooter(s, e, n),
        J0(e, n.textDirection),
        e.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e, n) {
      const r = this._active,
        i = e.map(({ datasetIndex: a, index: l }) => {
          const u = this.chart.getDatasetMeta(a);
          if (!u) throw new Error('Cannot find a dataset at index ' + a);
          return { datasetIndex: a, element: u.data[l], index: l };
        }),
        s = !sl(r, i),
        o = this._positionChanged(i, n);
      (s || o) && ((this._active = i), (this._eventPosition = n), (this._ignoreReplayEvents = !0), this.update(!0));
    }
    handleEvent(e, n, r = !0) {
      if (n && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const i = this.options,
        s = this._active || [],
        o = this._getActiveElements(e, s, n, r),
        a = this._positionChanged(o, e),
        l = n || !sl(o, s) || a;
      return (
        l &&
          ((this._active = o),
          (i.enabled || i.external) && ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
        l
      );
    }
    _getActiveElements(e, n, r, i) {
      const s = this.options;
      if (e.type === 'mouseout') return [];
      if (!i)
        return n.filter(
          (a) =>
            this.chart.data.datasets[a.datasetIndex] &&
            this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0,
        );
      const o = this.chart.getElementsAtEventForMode(e, s.mode, s, r);
      return s.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
      const { caretX: r, caretY: i, options: s } = this,
        o = cs[s.position].call(this, e, n);
      return o !== !1 && (r !== o.x || i !== o.y);
    }
  }
  V(rf, 'positioners', cs);
  var NO = {
    id: 'tooltip',
    _element: rf,
    positioners: cs,
    afterInit(t, e, n) {
      n && (t.tooltip = new rf({ chart: t, options: n }));
    },
    beforeUpdate(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    reset(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    afterDraw(t) {
      const e = t.tooltip;
      if (e && e._willRender()) {
        const n = { tooltip: e };
        if (t.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1) return;
        e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
      }
    },
    afterEvent(t, e) {
      if (t.tooltip) {
        const n = e.replay;
        t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: fx,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (t) => t !== 'filter' && t !== 'itemSort' && t !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  };
  function MO(t, e) {
    const n = [],
      { bounds: i, step: s, min: o, max: a, precision: l, count: u, maxTicks: c, maxDigits: f, includeBounds: h } = t,
      d = s || 1,
      g = c - 1,
      { min: v, max: x } = e,
      p = !de(o),
      m = !de(a),
      y = !de(u),
      b = (x - v) / (f + 1);
    let _ = Yp((x - v) / g / d) * d,
      S,
      E,
      O,
      D;
    if (_ < 1e-14 && !p && !m) return [{ value: v }, { value: x }];
    (D = Math.ceil(x / _) - Math.floor(v / _)),
      D > g && (_ = Yp((D * _) / g / d) * d),
      de(l) || ((S = Math.pow(10, l)), (_ = Math.ceil(_ * S) / S)),
      i === 'ticks' ? ((E = Math.floor(v / _) * _), (O = Math.ceil(x / _) * _)) : ((E = v), (O = x)),
      p && m && s && KS((a - o) / s, _ / 1e3)
        ? ((D = Math.round(Math.min((a - o) / _, c))), (_ = (a - o) / D), (E = o), (O = a))
        : y
          ? ((E = p ? o : E), (O = m ? a : O), (D = u - 1), (_ = (O - E) / D))
          : ((D = (O - E) / _), xa(D, Math.round(D), _ / 1e3) ? (D = Math.round(D)) : (D = Math.ceil(D)));
    const P = Math.max(Gp(_), Gp(E));
    (S = Math.pow(10, de(l) ? P : l)), (E = Math.round(E * S) / S), (O = Math.round(O * S) / S);
    let j = 0;
    for (
      p &&
      (h && E !== o
        ? (n.push({ value: o }), E < o && j++, xa(Math.round((E + j * _) * S) / S, o, Bg(o, b, t)) && j++)
        : E < o && j++);
      j < D;
      ++j
    ) {
      const z = Math.round((E + j * _) * S) / S;
      if (m && z > a) break;
      n.push({ value: z });
    }
    return (
      m && h && O !== a
        ? n.length && xa(n[n.length - 1].value, a, Bg(a, b, t))
          ? (n[n.length - 1].value = a)
          : n.push({ value: a })
        : (!m || O === a) && n.push({ value: O }),
      n
    );
  }
  function Bg(t, e, { horizontal: n, minRotation: r }) {
    const i = Wt(r),
      s = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = 0.75 * e * ('' + t).length;
    return Math.min(e / s, o);
  }
  class vl extends Mi {
    constructor(e) {
      super(e),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(e, n) {
      return de(e) || ((typeof e == 'number' || e instanceof Number) && !isFinite(+e)) ? null : +e;
    }
    handleTickRangeOptions() {
      const { beginAtZero: e } = this.options,
        { minDefined: n, maxDefined: r } = this.getUserBounds();
      let { min: i, max: s } = this;
      const o = (l) => (i = n ? i : l),
        a = (l) => (s = r ? s : l);
      if (e) {
        const l = ul(i),
          u = ul(s);
        l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && o(0);
      }
      if (i === s) {
        let l = s === 0 ? 1 : Math.abs(s * 0.05);
        a(s + l), e || o(i - l);
      }
      (this.min = i), (this.max = s);
    }
    getTickLimit() {
      const e = this.options.ticks;
      let { maxTicksLimit: n, stepSize: r } = e,
        i;
      return (
        r
          ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
            i > 1e3 &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`,
              ),
              (i = 1e3)))
          : ((i = this.computeTickLimit()), (n = n || 11)),
        n && (i = Math.min(n, i)),
        i
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const e = this.options,
        n = e.ticks;
      let r = this.getTickLimit();
      r = Math.max(2, r);
      const i = {
          maxTicks: r,
          bounds: e.bounds,
          min: e.min,
          max: e.max,
          precision: n.precision,
          step: n.stepSize,
          count: n.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: n.minRotation || 0,
          includeBounds: n.includeBounds !== !1,
        },
        s = this._range || this,
        o = MO(i, s);
      return (
        e.bounds === 'ticks' && j0(o, this, 'value'),
        e.reverse
          ? (o.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        o
      );
    }
    configure() {
      const e = this.ticks;
      let n = this.min,
        r = this.max;
      if ((super.configure(), this.options.offset && e.length)) {
        const i = (r - n) / Math.max(e.length - 1, 1) / 2;
        (n -= i), (r += i);
      }
      (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
    }
    getLabelForValue(e) {
      return $l(e, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class Vg extends vl {
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!0);
      (this.min = Ae(e) ? e : 0), (this.max = Ae(n) ? n : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const e = this.isHorizontal(),
        n = e ? this.width : this.height,
        r = Wt(this.options.ticks.minRotation),
        i = (e ? Math.sin(r) : Math.cos(r)) || 0.001,
        s = this._resolveTickFontOptions(0);
      return Math.ceil(n / Math.min(40, s.lineHeight / i));
    }
    getPixelForValue(e) {
      return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
    getValueForPixel(e) {
      return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
    }
  }
  V(Vg, 'id', 'linear'), V(Vg, 'defaults', { ticks: { callback: Ql.formatters.numeric } });
  const eo = (t) => Math.floor(Nn(t)),
    or = (t, e) => Math.pow(10, eo(t) + e);
  function Ug(t) {
    return t / Math.pow(10, eo(t)) === 1;
  }
  function Wg(t, e, n) {
    const r = Math.pow(10, n),
      i = Math.floor(t / r);
    return Math.ceil(e / r) - i;
  }
  function IO(t, e) {
    const n = e - t;
    let r = eo(n);
    for (; Wg(t, e, r) > 10; ) r++;
    for (; Wg(t, e, r) < 10; ) r--;
    return Math.min(r, eo(t));
  }
  function RO(t, { min: e, max: n }) {
    e = ct(t.min, e);
    const r = [],
      i = eo(e);
    let s = IO(e, n),
      o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const a = Math.pow(10, s),
      l = i > s ? Math.pow(10, i) : 0,
      u = Math.round((e - l) * o) / o,
      c = Math.floor((e - l) / a / 10) * a * 10;
    let f = Math.floor((u - c) / Math.pow(10, s)),
      h = ct(t.min, Math.round((l + c + f * Math.pow(10, s)) * o) / o);
    for (; h < n; )
      r.push({ value: h, major: Ug(h), significand: f }),
        f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
        f >= 20 && (s++, (f = 2), (o = s >= 0 ? 1 : o)),
        (h = Math.round((l + c + f * Math.pow(10, s)) * o) / o);
    const d = ct(t.max, h);
    return r.push({ value: d, major: Ug(d), significand: f }), r;
  }
  class $g extends Mi {
    constructor(e) {
      super(e), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._valueRange = 0);
    }
    parse(e, n) {
      const r = vl.prototype.parse.apply(this, [e, n]);
      if (r === 0) {
        this._zero = !0;
        return;
      }
      return Ae(r) && r > 0 ? r : null;
    }
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!0);
      (this.min = Ae(e) ? Math.max(0, e) : null),
        (this.max = Ae(n) ? Math.max(0, n) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !Ae(this._userMin) &&
          (this.min = e === or(this.min, 0) ? or(this.min, -1) : or(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: e, maxDefined: n } = this.getUserBounds();
      let r = this.min,
        i = this.max;
      const s = (a) => (r = e ? r : a),
        o = (a) => (i = n ? i : a);
      r === i && (r <= 0 ? (s(1), o(10)) : (s(or(r, -1)), o(or(i, 1)))),
        r <= 0 && s(or(i, -1)),
        i <= 0 && o(or(r, 1)),
        (this.min = r),
        (this.max = i);
    }
    buildTicks() {
      const e = this.options,
        n = { min: this._userMin, max: this._userMax },
        r = RO(n, this);
      return (
        e.bounds === 'ticks' && j0(r, this, 'value'),
        e.reverse
          ? (r.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        r
      );
    }
    getLabelForValue(e) {
      return e === void 0 ? '0' : $l(e, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const e = this.min;
      super.configure(), (this._startValue = Nn(e)), (this._valueRange = Nn(this.max) - Nn(e));
    }
    getPixelForValue(e) {
      return (
        (e === void 0 || e === 0) && (e = this.min),
        e === null || isNaN(e)
          ? NaN
          : this.getPixelForDecimal(e === this.min ? 0 : (Nn(e) - this._startValue) / this._valueRange)
      );
    }
    getValueForPixel(e) {
      const n = this.getDecimalForPixel(e);
      return Math.pow(10, this._startValue + n * this._valueRange);
    }
  }
  V($g, 'id', 'logarithmic'),
    V($g, 'defaults', { ticks: { callback: Ql.formatters.logarithmic, major: { enabled: !0 } } });
  function sf(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const n = Ge(e.backdropPadding);
      return Z(e.font && e.font.size, ye.font.size) + n.height;
    }
    return 0;
  }
  function AO(t, e, n) {
    return (n = we(n) ? n : [n]), { w: pk(t, e.string, n), h: n.length * e.lineHeight };
  }
  function Qg(t, e, n, r, i) {
    return t === r || t === i
      ? { start: e - n / 2, end: e + n / 2 }
      : t < r || t > i
        ? { start: e - n, end: e }
        : { start: e, end: e + n };
  }
  function LO(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      n = Object.assign({}, e),
      r = [],
      i = [],
      s = t._pointLabels.length,
      o = t.options.pointLabels,
      a = o.centerPointLabels ? Te / s : 0;
    for (let l = 0; l < s; l++) {
      const u = o.setContext(t.getPointLabelContext(l));
      i[l] = u.padding;
      const c = t.getPointPosition(l, t.drawingArea + i[l], a),
        f = ze(u.font),
        h = AO(t.ctx, f, t._pointLabels[l]);
      r[l] = h;
      const d = Bt(t.getIndexAngle(l) + a),
        g = Math.round(Bh(d)),
        v = Qg(g, c.x, h.w, 0, 180),
        x = Qg(g, c.y, h.h, 90, 270);
      FO(n, e, d, v, x);
    }
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b), (t._pointLabelItems = BO(t, r, i));
  }
  function FO(t, e, n, r, i) {
    const s = Math.abs(Math.sin(n)),
      o = Math.abs(Math.cos(n));
    let a = 0,
      l = 0;
    r.start < e.l
      ? ((a = (e.l - r.start) / s), (t.l = Math.min(t.l, e.l - a)))
      : r.end > e.r && ((a = (r.end - e.r) / s), (t.r = Math.max(t.r, e.r + a))),
      i.start < e.t
        ? ((l = (e.t - i.start) / o), (t.t = Math.min(t.t, e.t - l)))
        : i.end > e.b && ((l = (i.end - e.b) / o), (t.b = Math.max(t.b, e.b + l)));
  }
  function jO(t, e, n) {
    const r = t.drawingArea,
      { extra: i, additionalAngle: s, padding: o, size: a } = n,
      l = t.getPointPosition(e, r + i + o, s),
      u = Math.round(Bh(Bt(l.angle + Se))),
      c = WO(l.y, a.h, u),
      f = VO(u),
      h = UO(l.x, a.w, f);
    return { visible: !0, x: l.x, y: c, textAlign: f, left: h, top: c, right: h + a.w, bottom: c + a.h };
  }
  function zO(t, e) {
    if (!e) return !0;
    const { left: n, top: r, right: i, bottom: s } = t;
    return !(Xr({ x: n, y: r }, e) || Xr({ x: n, y: s }, e) || Xr({ x: i, y: r }, e) || Xr({ x: i, y: s }, e));
  }
  function BO(t, e, n) {
    const r = [],
      i = t._pointLabels.length,
      s = t.options,
      { centerPointLabels: o, display: a } = s.pointLabels,
      l = { extra: sf(s) / 2, additionalAngle: o ? Te / i : 0 };
    let u;
    for (let c = 0; c < i; c++) {
      (l.padding = n[c]), (l.size = e[c]);
      const f = jO(t, c, l);
      r.push(f), a === 'auto' && ((f.visible = zO(f, u)), f.visible && (u = f));
    }
    return r;
  }
  function VO(t) {
    return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right';
  }
  function UO(t, e, n) {
    return n === 'right' ? (t -= e) : n === 'center' && (t -= e / 2), t;
  }
  function WO(t, e, n) {
    return n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
  }
  function $O(t, e, n) {
    const { left: r, top: i, right: s, bottom: o } = n,
      { backdropColor: a } = e;
    if (!de(a)) {
      const l = li(e.borderRadius),
        u = Ge(e.backdropPadding);
      t.fillStyle = a;
      const c = r - u.left,
        f = i - u.top,
        h = s - r + u.width,
        d = o - i + u.height;
      Object.values(l).some((g) => g !== 0)
        ? (t.beginPath(), dl(t, { x: c, y: f, w: h, h: d, radius: l }), t.fill())
        : t.fillRect(c, f, h, d);
    }
  }
  function QO(t, e) {
    const {
      ctx: n,
      options: { pointLabels: r },
    } = t;
    for (let i = e - 1; i >= 0; i--) {
      const s = t._pointLabelItems[i];
      if (!s.visible) continue;
      const o = r.setContext(t.getPointLabelContext(i));
      $O(n, o, s);
      const a = ze(o.font),
        { x: l, y: u, textAlign: c } = s;
      bi(n, t._pointLabels[i], l, u + a.lineHeight / 2, a, { color: o.color, textAlign: c, textBaseline: 'middle' });
    }
  }
  function hx(t, e, n, r) {
    const { ctx: i } = t;
    if (n) i.arc(t.xCenter, t.yCenter, e, 0, ve);
    else {
      let s = t.getPointPosition(0, e);
      i.moveTo(s.x, s.y);
      for (let o = 1; o < r; o++) (s = t.getPointPosition(o, e)), i.lineTo(s.x, s.y);
    }
  }
  function HO(t, e, n, r, i) {
    const s = t.ctx,
      o = e.circular,
      { color: a, lineWidth: l } = e;
    (!o && !r) ||
      !a ||
      !l ||
      n < 0 ||
      (s.save(),
      (s.strokeStyle = a),
      (s.lineWidth = l),
      s.setLineDash(i.dash),
      (s.lineDashOffset = i.dashOffset),
      s.beginPath(),
      hx(t, n, o, r),
      s.closePath(),
      s.stroke(),
      s.restore());
  }
  function qO(t, e, n) {
    return Pr(t, { label: n, index: e, type: 'pointLabel' });
  }
  class ea extends vl {
    constructor(e) {
      super(e),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const e = (this._padding = Ge(sf(this.options) / 2)),
        n = (this.width = this.maxWidth - e.width),
        r = (this.height = this.maxHeight - e.height);
      (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
        (this.yCenter = Math.floor(this.top + r / 2 + e.top)),
        (this.drawingArea = Math.floor(Math.min(n, r) / 2));
    }
    determineDataLimits() {
      const { min: e, max: n } = this.getMinMax(!1);
      (this.min = Ae(e) && !isNaN(e) ? e : 0), (this.max = Ae(n) && !isNaN(n) ? n : 0), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / sf(this.options));
    }
    generateTickLabels(e) {
      vl.prototype.generateTickLabels.call(this, e),
        (this._pointLabels = this.getLabels()
          .map((n, r) => {
            const i = se(this.options.pointLabels.callback, [n, r], this);
            return i || i === 0 ? i : '';
          })
          .filter((n, r) => this.chart.getDataVisibility(r)));
    }
    fit() {
      const e = this.options;
      e.display && e.pointLabels.display ? LO(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(e, n, r, i) {
      (this.xCenter += Math.floor((e - n) / 2)),
        (this.yCenter += Math.floor((r - i) / 2)),
        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, r, i)));
    }
    getIndexAngle(e) {
      const n = ve / (this._pointLabels.length || 1),
        r = this.options.startAngle || 0;
      return Bt(e * n + Wt(r));
    }
    getDistanceFromCenterForValue(e) {
      if (de(e)) return NaN;
      const n = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
    }
    getValueForDistanceFromCenter(e) {
      if (de(e)) return NaN;
      const n = e / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(e) {
      const n = this._pointLabels || [];
      if (e >= 0 && e < n.length) {
        const r = n[e];
        return qO(this.getContext(), e, r);
      }
    }
    getPointPosition(e, n, r = 0) {
      const i = this.getIndexAngle(e) - Se + r;
      return { x: Math.cos(i) * n + this.xCenter, y: Math.sin(i) * n + this.yCenter, angle: i };
    }
    getPointPositionForValue(e, n) {
      return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(e) {
      return this.getPointPositionForValue(e || 0, this.getBaseValue());
    }
    getPointLabelPosition(e) {
      const { left: n, top: r, right: i, bottom: s } = this._pointLabelItems[e];
      return { left: n, top: r, right: i, bottom: s };
    }
    drawBackground() {
      const {
        backgroundColor: e,
        grid: { circular: n },
      } = this.options;
      if (e) {
        const r = this.ctx;
        r.save(),
          r.beginPath(),
          hx(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
          r.closePath(),
          (r.fillStyle = e),
          r.fill(),
          r.restore();
      }
    }
    drawGrid() {
      const e = this.ctx,
        n = this.options,
        { angleLines: r, grid: i, border: s } = n,
        o = this._pointLabels.length;
      let a, l, u;
      if (
        (n.pointLabels.display && QO(this, o),
        i.display &&
          this.ticks.forEach((c, f) => {
            if (f !== 0 || (f === 0 && this.min < 0)) {
              l = this.getDistanceFromCenterForValue(c.value);
              const h = this.getContext(f),
                d = i.setContext(h),
                g = s.setContext(h);
              HO(this, d, l, o, g);
            }
          }),
        r.display)
      ) {
        for (e.save(), a = o - 1; a >= 0; a--) {
          const c = r.setContext(this.getPointLabelContext(a)),
            { color: f, lineWidth: h } = c;
          !h ||
            !f ||
            ((e.lineWidth = h),
            (e.strokeStyle = f),
            e.setLineDash(c.borderDash),
            (e.lineDashOffset = c.borderDashOffset),
            (l = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max)),
            (u = this.getPointPosition(a, l)),
            e.beginPath(),
            e.moveTo(this.xCenter, this.yCenter),
            e.lineTo(u.x, u.y),
            e.stroke());
        }
        e.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const e = this.ctx,
        n = this.options,
        r = n.ticks;
      if (!r.display) return;
      const i = this.getIndexAngle(0);
      let s, o;
      e.save(),
        e.translate(this.xCenter, this.yCenter),
        e.rotate(i),
        (e.textAlign = 'center'),
        (e.textBaseline = 'middle'),
        this.ticks.forEach((a, l) => {
          if (l === 0 && this.min >= 0 && !n.reverse) return;
          const u = r.setContext(this.getContext(l)),
            c = ze(u.font);
          if (((s = this.getDistanceFromCenterForValue(this.ticks[l].value)), u.showLabelBackdrop)) {
            (e.font = c.string), (o = e.measureText(a.label).width), (e.fillStyle = u.backdropColor);
            const f = Ge(u.backdropPadding);
            e.fillRect(-o / 2 - f.left, -s - c.size / 2 - f.top, o + f.width, c.size + f.height);
          }
          bi(e, a.label, 0, -s, c, { color: u.color, strokeColor: u.textStrokeColor, strokeWidth: u.textStrokeWidth });
        }),
        e.restore();
    }
    drawTitle() {}
  }
  V(ea, 'id', 'radialLinear'),
    V(ea, 'defaults', {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: Ql.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(e) {
          return e;
        },
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    V(ea, 'defaultRoutes', { 'angleLines.color': 'borderColor', 'pointLabels.color': 'color', 'ticks.color': 'color' }),
    V(ea, 'descriptors', { angleLines: { _fallback: 'grid' } });
  const Yl = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    rt = Object.keys(Yl);
  function Hg(t, e) {
    return t - e;
  }
  function qg(t, e) {
    if (de(e)) return null;
    const n = t._adapter,
      { parser: r, round: i, isoWeekday: s } = t._parseOpts;
    let o = e;
    return (
      typeof r == 'function' && (o = r(o)),
      Ae(o) || (o = typeof r == 'string' ? n.parse(o, r) : n.parse(o)),
      o === null
        ? null
        : (i && (o = i === 'week' && (cl(s) || s === !0) ? n.startOf(o, 'isoWeek', s) : n.startOf(o, i)), +o)
    );
  }
  function Yg(t, e, n, r) {
    const i = rt.length;
    for (let s = rt.indexOf(t); s < i - 1; ++s) {
      const o = Yl[rt[s]],
        a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
      if (o.common && Math.ceil((n - e) / (a * o.size)) <= r) return rt[s];
    }
    return rt[i - 1];
  }
  function YO(t, e, n, r, i) {
    for (let s = rt.length - 1; s >= rt.indexOf(n); s--) {
      const o = rt[s];
      if (Yl[o].common && t._adapter.diff(i, r, o) >= e - 1) return o;
    }
    return rt[n ? rt.indexOf(n) : 0];
  }
  function GO(t) {
    for (let e = rt.indexOf(t) + 1, n = rt.length; e < n; ++e) if (Yl[rt[e]].common) return rt[e];
  }
  function Gg(t, e, n) {
    if (!n) t[e] = !0;
    else if (n.length) {
      const { lo: r, hi: i } = Vh(n, e),
        s = n[r] >= e ? n[r] : n[i];
      t[s] = !0;
    }
  }
  function KO(t, e, n, r) {
    const i = t._adapter,
      s = +i.startOf(e[0].value, r),
      o = e[e.length - 1].value;
    let a, l;
    for (a = s; a <= o; a = +i.add(a, 1, r)) (l = n[a]), l >= 0 && (e[l].major = !0);
    return e;
  }
  function Kg(t, e, n) {
    const r = [],
      i = {},
      s = e.length;
    let o, a;
    for (o = 0; o < s; ++o) (a = e[o]), (i[a] = o), r.push({ value: a, major: !1 });
    return s === 0 || !n ? r : KO(t, r, i, n);
  }
  class yl extends Mi {
    constructor(e) {
      super(e),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(e, n = {}) {
      const r = e.time || (e.time = {}),
        i = (this._adapter = new rE._date(e.adapters.date));
      i.init(n),
        _s(r.displayFormats, i.formats()),
        (this._parseOpts = { parser: r.parser, round: r.round, isoWeekday: r.isoWeekday }),
        super.init(e),
        (this._normalized = n.normalized);
    }
    parse(e, n) {
      return e === void 0 ? null : qg(this, e);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const e = this.options,
        n = this._adapter,
        r = e.time.unit || 'day';
      let { min: i, max: s, minDefined: o, maxDefined: a } = this.getUserBounds();
      function l(u) {
        !o && !isNaN(u.min) && (i = Math.min(i, u.min)), !a && !isNaN(u.max) && (s = Math.max(s, u.max));
      }
      (!o || !a) &&
        (l(this._getLabelBounds()), (e.bounds !== 'ticks' || e.ticks.source !== 'labels') && l(this.getMinMax(!1))),
        (i = Ae(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
        (s = Ae(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1),
        (this.min = Math.min(i, s - 1)),
        (this.max = Math.max(i + 1, s));
    }
    _getLabelBounds() {
      const e = this.getLabelTimestamps();
      let n = Number.POSITIVE_INFINITY,
        r = Number.NEGATIVE_INFINITY;
      return e.length && ((n = e[0]), (r = e[e.length - 1])), { min: n, max: r };
    }
    buildTicks() {
      const e = this.options,
        n = e.time,
        r = e.ticks,
        i = r.source === 'labels' ? this.getLabelTimestamps() : this._generate();
      e.bounds === 'ticks' &&
        i.length &&
        ((this.min = this._userMin || i[0]), (this.max = this._userMax || i[i.length - 1]));
      const s = this.min,
        o = this.max,
        a = ek(i, s, o);
      return (
        (this._unit =
          n.unit ||
          (r.autoSkip
            ? Yg(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
            : YO(this, a.length, n.minUnit, this.min, this.max))),
        (this._majorUnit = !r.major.enabled || this._unit === 'year' ? void 0 : GO(this._unit)),
        this.initOffsets(i),
        e.reverse && a.reverse(),
        Kg(this, a, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
    }
    initOffsets(e = []) {
      let n = 0,
        r = 0,
        i,
        s;
      this.options.offset &&
        e.length &&
        ((i = this.getDecimalForValue(e[0])),
        e.length === 1 ? (n = 1 - i) : (n = (this.getDecimalForValue(e[1]) - i) / 2),
        (s = this.getDecimalForValue(e[e.length - 1])),
        e.length === 1 ? (r = s) : (r = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
      const o = e.length < 3 ? 0.5 : 0.25;
      (n = _t(n, 0, o)), (r = _t(r, 0, o)), (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
    }
    _generate() {
      const e = this._adapter,
        n = this.min,
        r = this.max,
        i = this.options,
        s = i.time,
        o = s.unit || Yg(s.minUnit, n, r, this._getLabelCapacity(n)),
        a = Z(i.ticks.stepSize, 1),
        l = o === 'week' ? s.isoWeekday : !1,
        u = cl(l) || l === !0,
        c = {};
      let f = n,
        h,
        d;
      if ((u && (f = +e.startOf(f, 'isoWeek', l)), (f = +e.startOf(f, u ? 'day' : o)), e.diff(r, n, o) > 1e5 * a))
        throw new Error(n + ' and ' + r + ' are too far apart with stepSize of ' + a + ' ' + o);
      const g = i.ticks.source === 'data' && this.getDataTimestamps();
      for (h = f, d = 0; h < r; h = +e.add(h, a, o), d++) Gg(c, h, g);
      return (
        (h === r || i.bounds === 'ticks' || d === 1) && Gg(c, h, g),
        Object.keys(c)
          .sort(Hg)
          .map((v) => +v)
      );
    }
    getLabelForValue(e) {
      const n = this._adapter,
        r = this.options.time;
      return r.tooltipFormat ? n.format(e, r.tooltipFormat) : n.format(e, r.displayFormats.datetime);
    }
    format(e, n) {
      const i = this.options.time.displayFormats,
        s = this._unit,
        o = n || i[s];
      return this._adapter.format(e, o);
    }
    _tickFormatFunction(e, n, r, i) {
      const s = this.options,
        o = s.ticks.callback;
      if (o) return se(o, [e, n, r], this);
      const a = s.time.displayFormats,
        l = this._unit,
        u = this._majorUnit,
        c = l && a[l],
        f = u && a[u],
        h = r[n],
        d = u && f && h && h.major;
      return this._adapter.format(e, i || (d ? f : c));
    }
    generateTickLabels(e) {
      let n, r, i;
      for (n = 0, r = e.length; n < r; ++n) (i = e[n]), (i.label = this._tickFormatFunction(i.value, n, e));
    }
    getDecimalForValue(e) {
      return e === null ? NaN : (e - this.min) / (this.max - this.min);
    }
    getPixelForValue(e) {
      const n = this._offsets,
        r = this.getDecimalForValue(e);
      return this.getPixelForDecimal((n.start + r) * n.factor);
    }
    getValueForPixel(e) {
      const n = this._offsets,
        r = this.getDecimalForPixel(e) / n.factor - n.end;
      return this.min + r * (this.max - this.min);
    }
    _getLabelSize(e) {
      const n = this.options.ticks,
        r = this.ctx.measureText(e).width,
        i = Wt(this.isHorizontal() ? n.maxRotation : n.minRotation),
        s = Math.cos(i),
        o = Math.sin(i),
        a = this._resolveTickFontOptions(0).size;
      return { w: r * s + a * o, h: r * o + a * s };
    }
    _getLabelCapacity(e) {
      const n = this.options.time,
        r = n.displayFormats,
        i = r[n.unit] || r.millisecond,
        s = this._tickFormatFunction(e, 0, Kg(this, [e], this._majorUnit), i),
        o = this._getLabelSize(s),
        a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let e = this._cache.data || [],
        n,
        r;
      if (e.length) return e;
      const i = this.getMatchingVisibleMetas();
      if (this._normalized && i.length) return (this._cache.data = i[0].controller.getAllParsedValues(this));
      for (n = 0, r = i.length; n < r; ++n) e = e.concat(i[n].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(e));
    }
    getLabelTimestamps() {
      const e = this._cache.labels || [];
      let n, r;
      if (e.length) return e;
      const i = this.getLabels();
      for (n = 0, r = i.length; n < r; ++n) e.push(qg(this, i[n]));
      return (this._cache.labels = this._normalized ? e : this.normalize(e));
    }
    normalize(e) {
      return nk(e.sort(Hg));
    }
  }
  V(yl, 'id', 'time'),
    V(yl, 'defaults', {
      bounds: 'data',
      adapters: {},
      time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: 'millisecond', displayFormats: {} },
      ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    });
  function ta(t, e, n) {
    let r = 0,
      i = t.length - 1,
      s,
      o,
      a,
      l;
    n
      ? (e >= t[r].pos && e <= t[i].pos && ({ lo: r, hi: i } = Zc(t, 'pos', e)),
        ({ pos: s, time: a } = t[r]),
        ({ pos: o, time: l } = t[i]))
      : (e >= t[r].time && e <= t[i].time && ({ lo: r, hi: i } = Zc(t, 'time', e)),
        ({ time: s, pos: a } = t[r]),
        ({ time: o, pos: l } = t[i]));
    const u = o - s;
    return u ? a + ((l - a) * (e - s)) / u : a;
  }
  class Xg extends yl {
    constructor(e) {
      super(e), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
      const e = this._getTimestampsForTable(),
        n = (this._table = this.buildLookupTable(e));
      (this._minPos = ta(n, this.min)), (this._tableRange = ta(n, this.max) - this._minPos), super.initOffsets(e);
    }
    buildLookupTable(e) {
      const { min: n, max: r } = this,
        i = [],
        s = [];
      let o, a, l, u, c;
      for (o = 0, a = e.length; o < a; ++o) (u = e[o]), u >= n && u <= r && i.push(u);
      if (i.length < 2)
        return [
          { time: n, pos: 0 },
          { time: r, pos: 1 },
        ];
      for (o = 0, a = i.length; o < a; ++o)
        (c = i[o + 1]),
          (l = i[o - 1]),
          (u = i[o]),
          Math.round((c + l) / 2) !== u && s.push({ time: u, pos: o / (a - 1) });
      return s;
    }
    _generate() {
      const e = this.min,
        n = this.max;
      let r = super.getDataTimestamps();
      return (
        (!r.includes(e) || !r.length) && r.splice(0, 0, e),
        (!r.includes(n) || r.length === 1) && r.push(n),
        r.sort((i, s) => i - s)
      );
    }
    _getTimestampsForTable() {
      let e = this._cache.all || [];
      if (e.length) return e;
      const n = this.getDataTimestamps(),
        r = this.getLabelTimestamps();
      return (
        n.length && r.length ? (e = this.normalize(n.concat(r))) : (e = n.length ? n : r), (e = this._cache.all = e), e
      );
    }
    getDecimalForValue(e) {
      return (ta(this._table, e) - this._minPos) / this._tableRange;
    }
    getValueForPixel(e) {
      const n = this._offsets,
        r = this.getDecimalForPixel(e) / n.factor - n.end;
      return ta(this._table, r * this._tableRange + this._minPos, !0);
    }
  }
  V(Xg, 'id', 'timeseries'), V(Xg, 'defaults', yl.defaults);
  const dx = 'label';
  function Jg(t, e) {
    typeof t == 'function' ? t(e) : t && (t.current = e);
  }
  function XO(t, e) {
    const n = t.options;
    n && e && Object.assign(n, e);
  }
  function px(t, e) {
    t.labels = e;
  }
  function gx(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dx;
    const r = [];
    t.datasets = e.map((i) => {
      const s = t.datasets.find((o) => o[n] === i[n]);
      return !s || !i.data || r.includes(s) ? { ...i } : (r.push(s), Object.assign(s, i), s);
    });
  }
  function JO(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dx;
    const n = { labels: [], datasets: [] };
    return px(n, t.labels), gx(n, t.datasets, e), n;
  }
  function ZO(t, e) {
    const {
        height: n = 150,
        width: r = 300,
        redraw: i = !1,
        datasetIdKey: s,
        type: o,
        data: a,
        options: l,
        plugins: u = [],
        fallbackContent: c,
        updateMode: f,
        ...h
      } = t,
      d = C.useRef(null),
      g = C.useRef(),
      v = () => {
        d.current &&
          ((g.current = new ql(d.current, { type: o, data: JO(a, s), options: l && { ...l }, plugins: u })),
          Jg(e, g.current));
      },
      x = () => {
        Jg(e, null), g.current && (g.current.destroy(), (g.current = null));
      };
    return (
      C.useEffect(() => {
        !i && g.current && l && XO(g.current, l);
      }, [i, l]),
      C.useEffect(() => {
        !i && g.current && px(g.current.config.data, a.labels);
      }, [i, a.labels]),
      C.useEffect(() => {
        !i && g.current && a.datasets && gx(g.current.config.data, a.datasets, s);
      }, [i, a.datasets]),
      C.useEffect(() => {
        g.current && (i ? (x(), setTimeout(v)) : g.current.update(f));
      }, [i, l, a.labels, a.datasets, f]),
      C.useEffect(() => {
        g.current && (x(), setTimeout(v));
      }, [o]),
      C.useEffect(() => (v(), () => x()), []),
      $t.createElement('canvas', Object.assign({ ref: d, role: 'img', height: n, width: r }, h), c)
    );
  }
  const eT = C.forwardRef(ZO);
  function tT(t, e) {
    return ql.register(e), C.forwardRef((n, r) => $t.createElement(eT, Object.assign({}, n, { ref: r, type: t })));
  }
  const nT = tT('doughnut', as);
  var mx = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    Zg = $t.createContext && $t.createContext(mx),
    rT = ['attr', 'size', 'title'];
  function iT(t, e) {
    if (t == null) return {};
    var n = sT(t, e),
      r,
      i;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      for (i = 0; i < s.length; i++)
        (r = s[i]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }
  function sT(t, e) {
    if (t == null) return {};
    var n = {};
    for (var r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        if (e.indexOf(r) >= 0) continue;
        n[r] = t[r];
      }
    return n;
  }
  function xl() {
    return (
      (xl = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      xl.apply(this, arguments)
    );
  }
  function em(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function bl(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? em(Object(n), !0).forEach(function (r) {
            oT(t, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : em(Object(n)).forEach(function (r) {
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
            });
    }
    return t;
  }
  function oT(t, e, n) {
    return (
      (e = aT(e)),
      e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
      t
    );
  }
  function aT(t) {
    var e = lT(t, 'string');
    return typeof e == 'symbol' ? e : e + '';
  }
  function lT(t, e) {
    if (typeof t != 'object' || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(t, e || 'default');
      if (typeof r != 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
  }
  function vx(t) {
    return t && t.map((e, n) => $t.createElement(e.tag, bl({ key: n }, e.attr), vx(e.child)));
  }
  function Nr(t) {
    return (e) => $t.createElement(uT, xl({ attr: bl({}, t.attr) }, e), vx(t.child));
  }
  function uT(t) {
    var e = (n) => {
      var { attr: r, size: i, title: s } = t,
        o = iT(t, rT),
        a = i || n.size || '1em',
        l;
      return (
        n.className && (l = n.className),
        t.className && (l = (l ? l + ' ' : '') + t.className),
        $t.createElement(
          'svg',
          xl({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, r, o, {
            className: l,
            style: bl(bl({ color: t.color || n.color }, n.style), t.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          }),
          s && $t.createElement('title', null, s),
          t.children,
        )
      );
    };
    return Zg !== void 0 ? $t.createElement(Zg.Consumer, null, (n) => e(n)) : e(mx);
  }
  function cT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 384 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
          },
          child: [],
        },
      ],
    })(t);
  }
  function fT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 512 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z',
          },
          child: [],
        },
      ],
    })(t);
  }
  function hT(t) {
    return Nr({
      tag: 'svg',
      attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z',
          },
          child: [],
        },
        {
          tag: 'path',
          attr: {
            d: 'M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5',
          },
          child: [],
        },
      ],
    })(t);
  }
  function dT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
        {
          tag: 'path',
          attr: {
            d: 'm17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
          },
          child: [],
        },
      ],
    })(t);
  }
  function pT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
        {
          tag: 'path',
          attr: {
            d: 'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z',
          },
          child: [],
        },
      ],
    })(t);
  }
  function gT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 448 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z',
          },
          child: [],
        },
      ],
    })(t);
  }
  function mT(t) {
    return Nr({
      tag: 'svg',
      attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
      child: [
        {
          tag: 'path',
          attr: { d: 'M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' },
          child: [],
        },
        {
          tag: 'path',
          attr: {
            fillRule: 'evenodd',
            d: 'M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z',
            clipRule: 'evenodd',
          },
          child: [],
        },
      ],
    })(t);
  }
  const vT = (t) => {
    const e = new Date(parseInt(t)),
      n = { day: '2-digit', month: 'short', year: 'numeric' };
    return e.toLocaleDateString('en-US', n);
  };
  var of = function (t, e) {
    return (
      (of =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      of(t, e)
    );
  };
  function Gt(t, e) {
    if (typeof e != 'function' && e !== null)
      throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
    of(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
  }
  var k = function () {
    return (
      (k =
        Object.assign ||
        function (e) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
      k.apply(this, arguments)
    );
  };
  function Rt(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n;
  }
  function _n(t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (o) {
            o(s);
          });
    }
    return new (n || (n = Promise))(function (s, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (f) {
          o(f);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (f) {
          o(f);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function wn(t, e) {
    var n = {
        label: 0,
        sent: function () {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      },
      r,
      i,
      s,
      o = Object.create((typeof Iterator == 'function' ? Iterator : Object).prototype);
    return (
      (o.next = a(0)),
      (o.throw = a(1)),
      (o.return = a(2)),
      typeof Symbol == 'function' &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(u) {
      return function (c) {
        return l([u, c]);
      };
    }
    function l(u) {
      if (r) throw new TypeError('Generator is already executing.');
      for (; o && ((o = 0), u[0] && (n = 0)), n; )
        try {
          if (
            ((r = 1),
            i &&
              (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) &&
              !(s = s.call(i, u[1])).done)
          )
            return s;
          switch (((i = 0), s && (u = [u[0] & 2, s.value]), u[0])) {
            case 0:
            case 1:
              s = u;
              break;
            case 4:
              return n.label++, { value: u[1], done: !1 };
            case 5:
              n.label++, (i = u[1]), (u = [0]);
              continue;
            case 7:
              (u = n.ops.pop()), n.trys.pop();
              continue;
            default:
              if (((s = n.trys), !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2))) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!s || (u[1] > s[0] && u[1] < s[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < s[1]) {
                (n.label = s[1]), (s = u);
                break;
              }
              if (s && n.label < s[2]) {
                (n.label = s[2]), n.ops.push(u);
                break;
              }
              s[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          u = e.call(t, n);
        } catch (c) {
          (u = [6, c]), (i = 0);
        } finally {
          r = s = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  }
  function lt(t, e, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = e.length, s; r < i; r++)
        (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), (s[r] = e[r]));
    return t.concat(s || Array.prototype.slice.call(e));
  }
  var Uu = 'Invariant Violation',
    tm = Object.setPrototypeOf,
    yT =
      tm === void 0
        ? function (t, e) {
            return (t.__proto__ = e), t;
          }
        : tm,
    yx = (function (t) {
      Gt(e, t);
      function e(n) {
        n === void 0 && (n = Uu);
        var r =
          t.call(
            this,
            typeof n == 'number' ? Uu + ': ' + n + ' (see https://github.com/apollographql/invariant-packages)' : n,
          ) || this;
        return (r.framesToPop = 1), (r.name = Uu), yT(r, e.prototype), r;
      }
      return e;
    })(Error);
  function fr(t, e) {
    if (!t) throw new yx(e);
  }
  var xx = ['debug', 'log', 'warn', 'error', 'silent'],
    xT = xx.indexOf('log');
  function na(t) {
    return function () {
      if (xx.indexOf(t) >= xT) {
        var e = console[t] || console.log;
        return e.apply(console, arguments);
      }
    };
  }
  (function (t) {
    (t.debug = na('debug')), (t.log = na('log')), (t.warn = na('warn')), (t.error = na('error'));
  })(fr || (fr = {}));
  var Xh = '3.11.8';
  function Nt(t) {
    try {
      return t();
    } catch {}
  }
  const af =
    Nt(function () {
      return globalThis;
    }) ||
    Nt(function () {
      return window;
    }) ||
    Nt(function () {
      return self;
    }) ||
    Nt(function () {
      return global;
    }) ||
    Nt(function () {
      return Nt.constructor('return this')();
    });
  var nm = new Map();
  function lf(t) {
    var e = nm.get(t) || 1;
    return nm.set(t, e + 1), ''.concat(t, ':').concat(e, ':').concat(Math.random().toString(36).slice(2));
  }
  function bx(t, e) {
    e === void 0 && (e = 0);
    var n = lf('stringifyForDisplay');
    return JSON.stringify(
      t,
      function (r, i) {
        return i === void 0 ? n : i;
      },
      e,
    )
      .split(JSON.stringify(n))
      .join('<undefined>');
  }
  function ra(t) {
    return function (e) {
      for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
      if (typeof e == 'number') {
        var i = e;
        (e = Jh(i)), e || ((e = Zh(i, n)), (n = []));
      }
      t.apply(void 0, [e].concat(n));
    };
  }
  var F = Object.assign(
    function (e, n) {
      for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
      e || fr(e, Jh(n, r) || Zh(n, r));
    },
    { debug: ra(fr.debug), log: ra(fr.log), warn: ra(fr.warn), error: ra(fr.error) },
  );
  function Ke(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return new yx(Jh(t, e) || Zh(t, e));
  }
  var rm = Symbol.for('ApolloErrorMessageHandler_' + Xh);
  function _x(t) {
    if (typeof t == 'string') return t;
    try {
      return bx(t, 2).slice(0, 1e3);
    } catch {
      return '<non-serializable>';
    }
  }
  function Jh(t, e) {
    if ((e === void 0 && (e = []), !!t)) return af[rm] && af[rm](t, e.map(_x));
  }
  function Zh(t, e) {
    if ((e === void 0 && (e = []), !!t))
      return 'An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#'.concat(
        encodeURIComponent(JSON.stringify({ version: Xh, message: t, args: e.map(_x) })),
      );
  }
  function wa(t, e) {
    if (!!!t) throw new Error(e);
  }
  function bT(t) {
    return typeof t == 'object' && t !== null;
  }
  function _T(t, e) {
    if (!!!t) throw new Error('Unexpected invariant triggered.');
  }
  const wT = /\r\n|[\n\r]/g;
  function uf(t, e) {
    let n = 0,
      r = 1;
    for (const i of t.body.matchAll(wT)) {
      if ((typeof i.index == 'number' || _T(!1), i.index >= e)) break;
      (n = i.index + i[0].length), (r += 1);
    }
    return { line: r, column: e + 1 - n };
  }
  function ST(t) {
    return wx(t.source, uf(t.source, t.start));
  }
  function wx(t, e) {
    const n = t.locationOffset.column - 1,
      r = ''.padStart(n) + t.body,
      i = e.line - 1,
      s = t.locationOffset.line - 1,
      o = e.line + s,
      a = e.line === 1 ? n : 0,
      l = e.column + a,
      u = `${t.name}:${o}:${l}
`,
      c = r.split(/\r\n|[\n\r]/g),
      f = c[i];
    if (f.length > 120) {
      const h = Math.floor(l / 80),
        d = l % 80,
        g = [];
      for (let v = 0; v < f.length; v += 80) g.push(f.slice(v, v + 80));
      return (
        u + im([[`${o} |`, g[0]], ...g.slice(1, h + 1).map((v) => ['|', v]), ['|', '^'.padStart(d)], ['|', g[h + 1]]])
      );
    }
    return (
      u +
      im([
        [`${o - 1} |`, c[i - 1]],
        [`${o} |`, f],
        ['|', '^'.padStart(l)],
        [`${o + 1} |`, c[i + 1]],
      ])
    );
  }
  function im(t) {
    const e = t.filter(([r, i]) => i !== void 0),
      n = Math.max(...e.map(([r]) => r.length));
    return e.map(([r, i]) => r.padStart(n) + (i ? ' ' + i : '')).join(`
`);
  }
  function kT(t) {
    const e = t[0];
    return e == null || 'kind' in e || 'length' in e
      ? { nodes: e, source: t[1], positions: t[2], path: t[3], originalError: t[4], extensions: t[5] }
      : e;
  }
  class ed extends Error {
    constructor(e, ...n) {
      var r, i, s;
      const { nodes: o, source: a, positions: l, path: u, originalError: c, extensions: f } = kT(n);
      super(e),
        (this.name = 'GraphQLError'),
        (this.path = u ?? void 0),
        (this.originalError = c ?? void 0),
        (this.nodes = sm(Array.isArray(o) ? o : o ? [o] : void 0));
      const h = sm((r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null));
      (this.source = a ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source)),
        (this.positions = l ?? (h == null ? void 0 : h.map((g) => g.start))),
        (this.locations = l && a ? l.map((g) => uf(a, g)) : h == null ? void 0 : h.map((g) => uf(g.source, g.start)));
      const d = bT(c == null ? void 0 : c.extensions) ? (c == null ? void 0 : c.extensions) : void 0;
      (this.extensions = (s = f ?? d) !== null && s !== void 0 ? s : Object.create(null)),
        Object.defineProperties(this, {
          message: { writable: !0, enumerable: !0 },
          name: { enumerable: !1 },
          nodes: { enumerable: !1 },
          source: { enumerable: !1 },
          positions: { enumerable: !1 },
          originalError: { enumerable: !1 },
        }),
        c != null && c.stack
          ? Object.defineProperty(this, 'stack', { value: c.stack, writable: !0, configurable: !0 })
          : Error.captureStackTrace
            ? Error.captureStackTrace(this, ed)
            : Object.defineProperty(this, 'stack', { value: Error().stack, writable: !0, configurable: !0 });
    }
    get [Symbol.toStringTag]() {
      return 'GraphQLError';
    }
    toString() {
      let e = this.message;
      if (this.nodes)
        for (const n of this.nodes)
          n.loc &&
            (e +=
              `

` + ST(n.loc));
      else if (this.source && this.locations)
        for (const n of this.locations)
          e +=
            `

` + wx(this.source, n);
      return e;
    }
    toJSON() {
      const e = { message: this.message };
      return (
        this.locations != null && (e.locations = this.locations),
        this.path != null && (e.path = this.path),
        this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions),
        e
      );
    }
  }
  function sm(t) {
    return t === void 0 || t.length === 0 ? void 0 : t;
  }
  function Re(t, e, n) {
    return new ed(`Syntax Error: ${n}`, { source: t, positions: [e] });
  }
  class ET {
    constructor(e, n, r) {
      (this.start = e.start), (this.end = n.end), (this.startToken = e), (this.endToken = n), (this.source = r);
    }
    get [Symbol.toStringTag]() {
      return 'Location';
    }
    toJSON() {
      return { start: this.start, end: this.end };
    }
  }
  class Sx {
    constructor(e, n, r, i, s, o) {
      (this.kind = e),
        (this.start = n),
        (this.end = r),
        (this.line = i),
        (this.column = s),
        (this.value = o),
        (this.prev = null),
        (this.next = null);
    }
    get [Symbol.toStringTag]() {
      return 'Token';
    }
    toJSON() {
      return { kind: this.kind, value: this.value, line: this.line, column: this.column };
    }
  }
  const kx = {
      Name: [],
      Document: ['definitions'],
      OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
      VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
      Variable: ['name'],
      SelectionSet: ['selections'],
      Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
      Argument: ['name', 'value'],
      FragmentSpread: ['name', 'directives'],
      InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
      FragmentDefinition: ['name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ['values'],
      ObjectValue: ['fields'],
      ObjectField: ['name', 'value'],
      Directive: ['name', 'arguments'],
      NamedType: ['name'],
      ListType: ['type'],
      NonNullType: ['type'],
      SchemaDefinition: ['description', 'directives', 'operationTypes'],
      OperationTypeDefinition: ['type'],
      ScalarTypeDefinition: ['description', 'name', 'directives'],
      ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
      InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
      InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
      EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
      EnumValueDefinition: ['description', 'name', 'directives'],
      InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
      DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
      SchemaExtension: ['directives', 'operationTypes'],
      ScalarTypeExtension: ['name', 'directives'],
      ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      UnionTypeExtension: ['name', 'directives', 'types'],
      EnumTypeExtension: ['name', 'directives', 'values'],
      InputObjectTypeExtension: ['name', 'directives', 'fields'],
    },
    OT = new Set(Object.keys(kx));
  function om(t) {
    const e = t == null ? void 0 : t.kind;
    return typeof e == 'string' && OT.has(e);
  }
  var Jr;
  (function (t) {
    (t.QUERY = 'query'), (t.MUTATION = 'mutation'), (t.SUBSCRIPTION = 'subscription');
  })(Jr || (Jr = {}));
  var cf;
  (function (t) {
    (t.QUERY = 'QUERY'),
      (t.MUTATION = 'MUTATION'),
      (t.SUBSCRIPTION = 'SUBSCRIPTION'),
      (t.FIELD = 'FIELD'),
      (t.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
      (t.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
      (t.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
      (t.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
      (t.SCHEMA = 'SCHEMA'),
      (t.SCALAR = 'SCALAR'),
      (t.OBJECT = 'OBJECT'),
      (t.FIELD_DEFINITION = 'FIELD_DEFINITION'),
      (t.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
      (t.INTERFACE = 'INTERFACE'),
      (t.UNION = 'UNION'),
      (t.ENUM = 'ENUM'),
      (t.ENUM_VALUE = 'ENUM_VALUE'),
      (t.INPUT_OBJECT = 'INPUT_OBJECT'),
      (t.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
  })(cf || (cf = {}));
  var A;
  (function (t) {
    (t.NAME = 'Name'),
      (t.DOCUMENT = 'Document'),
      (t.OPERATION_DEFINITION = 'OperationDefinition'),
      (t.VARIABLE_DEFINITION = 'VariableDefinition'),
      (t.SELECTION_SET = 'SelectionSet'),
      (t.FIELD = 'Field'),
      (t.ARGUMENT = 'Argument'),
      (t.FRAGMENT_SPREAD = 'FragmentSpread'),
      (t.INLINE_FRAGMENT = 'InlineFragment'),
      (t.FRAGMENT_DEFINITION = 'FragmentDefinition'),
      (t.VARIABLE = 'Variable'),
      (t.INT = 'IntValue'),
      (t.FLOAT = 'FloatValue'),
      (t.STRING = 'StringValue'),
      (t.BOOLEAN = 'BooleanValue'),
      (t.NULL = 'NullValue'),
      (t.ENUM = 'EnumValue'),
      (t.LIST = 'ListValue'),
      (t.OBJECT = 'ObjectValue'),
      (t.OBJECT_FIELD = 'ObjectField'),
      (t.DIRECTIVE = 'Directive'),
      (t.NAMED_TYPE = 'NamedType'),
      (t.LIST_TYPE = 'ListType'),
      (t.NON_NULL_TYPE = 'NonNullType'),
      (t.SCHEMA_DEFINITION = 'SchemaDefinition'),
      (t.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
      (t.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
      (t.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
      (t.FIELD_DEFINITION = 'FieldDefinition'),
      (t.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
      (t.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
      (t.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
      (t.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
      (t.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
      (t.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
      (t.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
      (t.SCHEMA_EXTENSION = 'SchemaExtension'),
      (t.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
      (t.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
      (t.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
      (t.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
      (t.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
      (t.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
  })(A || (A = {}));
  function ff(t) {
    return t === 9 || t === 32;
  }
  function to(t) {
    return t >= 48 && t <= 57;
  }
  function Ex(t) {
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
  }
  function Ox(t) {
    return Ex(t) || t === 95;
  }
  function TT(t) {
    return Ex(t) || to(t) || t === 95;
  }
  function CT(t) {
    var e;
    let n = Number.MAX_SAFE_INTEGER,
      r = null,
      i = -1;
    for (let o = 0; o < t.length; ++o) {
      var s;
      const a = t[o],
        l = DT(a);
      l !== a.length && ((r = (s = r) !== null && s !== void 0 ? s : o), (i = o), o !== 0 && l < n && (n = l));
    }
    return t.map((o, a) => (a === 0 ? o : o.slice(n))).slice((e = r) !== null && e !== void 0 ? e : 0, i + 1);
  }
  function DT(t) {
    let e = 0;
    for (; e < t.length && ff(t.charCodeAt(e)); ) ++e;
    return e;
  }
  function PT(t, e) {
    const n = t.replace(/"""/g, '\\"""'),
      r = n.split(/\r\n|[\n\r]/g),
      i = r.length === 1,
      s = r.length > 1 && r.slice(1).every((d) => d.length === 0 || ff(d.charCodeAt(0))),
      o = n.endsWith('\\"""'),
      a = t.endsWith('"') && !o,
      l = t.endsWith('\\'),
      u = a || l,
      c = !i || t.length > 70 || u || s || o;
    let f = '';
    const h = i && ff(t.charCodeAt(0));
    return (
      ((c && !h) || s) &&
        (f += `
`),
      (f += n),
      (c || u) &&
        (f += `
`),
      '"""' + f + '"""'
    );
  }
  var T;
  (function (t) {
    (t.SOF = '<SOF>'),
      (t.EOF = '<EOF>'),
      (t.BANG = '!'),
      (t.DOLLAR = '$'),
      (t.AMP = '&'),
      (t.PAREN_L = '('),
      (t.PAREN_R = ')'),
      (t.SPREAD = '...'),
      (t.COLON = ':'),
      (t.EQUALS = '='),
      (t.AT = '@'),
      (t.BRACKET_L = '['),
      (t.BRACKET_R = ']'),
      (t.BRACE_L = '{'),
      (t.PIPE = '|'),
      (t.BRACE_R = '}'),
      (t.NAME = 'Name'),
      (t.INT = 'Int'),
      (t.FLOAT = 'Float'),
      (t.STRING = 'String'),
      (t.BLOCK_STRING = 'BlockString'),
      (t.COMMENT = 'Comment');
  })(T || (T = {}));
  class NT {
    constructor(e) {
      const n = new Sx(T.SOF, 0, 0, 0, 0);
      (this.source = e), (this.lastToken = n), (this.token = n), (this.line = 1), (this.lineStart = 0);
    }
    get [Symbol.toStringTag]() {
      return 'Lexer';
    }
    advance() {
      return (this.lastToken = this.token), (this.token = this.lookahead());
    }
    lookahead() {
      let e = this.token;
      if (e.kind !== T.EOF)
        do
          if (e.next) e = e.next;
          else {
            const n = IT(this, e.end);
            (e.next = n), (n.prev = e), (e = n);
          }
        while (e.kind === T.COMMENT);
      return e;
    }
  }
  function MT(t) {
    return (
      t === T.BANG ||
      t === T.DOLLAR ||
      t === T.AMP ||
      t === T.PAREN_L ||
      t === T.PAREN_R ||
      t === T.SPREAD ||
      t === T.COLON ||
      t === T.EQUALS ||
      t === T.AT ||
      t === T.BRACKET_L ||
      t === T.BRACKET_R ||
      t === T.BRACE_L ||
      t === T.PIPE ||
      t === T.BRACE_R
    );
  }
  function Ii(t) {
    return (t >= 0 && t <= 55295) || (t >= 57344 && t <= 1114111);
  }
  function Gl(t, e) {
    return Tx(t.charCodeAt(e)) && Cx(t.charCodeAt(e + 1));
  }
  function Tx(t) {
    return t >= 55296 && t <= 56319;
  }
  function Cx(t) {
    return t >= 56320 && t <= 57343;
  }
  function Or(t, e) {
    const n = t.source.body.codePointAt(e);
    if (n === void 0) return T.EOF;
    if (n >= 32 && n <= 126) {
      const r = String.fromCodePoint(n);
      return r === '"' ? `'"'` : `"${r}"`;
    }
    return 'U+' + n.toString(16).toUpperCase().padStart(4, '0');
  }
  function Ee(t, e, n, r, i) {
    const s = t.line,
      o = 1 + n - t.lineStart;
    return new Sx(e, n, r, s, o, i);
  }
  function IT(t, e) {
    const n = t.source.body,
      r = n.length;
    let i = e;
    for (; i < r; ) {
      const s = n.charCodeAt(i);
      switch (s) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++i;
          continue;
        case 10:
          ++i, ++t.line, (t.lineStart = i);
          continue;
        case 13:
          n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i, ++t.line, (t.lineStart = i);
          continue;
        case 35:
          return RT(t, i);
        case 33:
          return Ee(t, T.BANG, i, i + 1);
        case 36:
          return Ee(t, T.DOLLAR, i, i + 1);
        case 38:
          return Ee(t, T.AMP, i, i + 1);
        case 40:
          return Ee(t, T.PAREN_L, i, i + 1);
        case 41:
          return Ee(t, T.PAREN_R, i, i + 1);
        case 46:
          if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return Ee(t, T.SPREAD, i, i + 3);
          break;
        case 58:
          return Ee(t, T.COLON, i, i + 1);
        case 61:
          return Ee(t, T.EQUALS, i, i + 1);
        case 64:
          return Ee(t, T.AT, i, i + 1);
        case 91:
          return Ee(t, T.BRACKET_L, i, i + 1);
        case 93:
          return Ee(t, T.BRACKET_R, i, i + 1);
        case 123:
          return Ee(t, T.BRACE_L, i, i + 1);
        case 124:
          return Ee(t, T.PIPE, i, i + 1);
        case 125:
          return Ee(t, T.BRACE_R, i, i + 1);
        case 34:
          return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? BT(t, i) : LT(t, i);
      }
      if (to(s) || s === 45) return AT(t, i, s);
      if (Ox(s)) return VT(t, i);
      throw Re(
        t.source,
        i,
        s === 39
          ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
          : Ii(s) || Gl(n, i)
            ? `Unexpected character: ${Or(t, i)}.`
            : `Invalid character: ${Or(t, i)}.`,
      );
    }
    return Ee(t, T.EOF, r, r);
  }
  function RT(t, e) {
    const n = t.source.body,
      r = n.length;
    let i = e + 1;
    for (; i < r; ) {
      const s = n.charCodeAt(i);
      if (s === 10 || s === 13) break;
      if (Ii(s)) ++i;
      else if (Gl(n, i)) i += 2;
      else break;
    }
    return Ee(t, T.COMMENT, e, i, n.slice(e + 1, i));
  }
  function AT(t, e, n) {
    const r = t.source.body;
    let i = e,
      s = n,
      o = !1;
    if ((s === 45 && (s = r.charCodeAt(++i)), s === 48)) {
      if (((s = r.charCodeAt(++i)), to(s)))
        throw Re(t.source, i, `Invalid number, unexpected digit after 0: ${Or(t, i)}.`);
    } else (i = Wu(t, i, s)), (s = r.charCodeAt(i));
    if (
      (s === 46 && ((o = !0), (s = r.charCodeAt(++i)), (i = Wu(t, i, s)), (s = r.charCodeAt(i))),
      (s === 69 || s === 101) &&
        ((o = !0),
        (s = r.charCodeAt(++i)),
        (s === 43 || s === 45) && (s = r.charCodeAt(++i)),
        (i = Wu(t, i, s)),
        (s = r.charCodeAt(i))),
      s === 46 || Ox(s))
    )
      throw Re(t.source, i, `Invalid number, expected digit but got: ${Or(t, i)}.`);
    return Ee(t, o ? T.FLOAT : T.INT, e, i, r.slice(e, i));
  }
  function Wu(t, e, n) {
    if (!to(n)) throw Re(t.source, e, `Invalid number, expected digit but got: ${Or(t, e)}.`);
    const r = t.source.body;
    let i = e + 1;
    for (; to(r.charCodeAt(i)); ) ++i;
    return i;
  }
  function LT(t, e) {
    const n = t.source.body,
      r = n.length;
    let i = e + 1,
      s = i,
      o = '';
    for (; i < r; ) {
      const a = n.charCodeAt(i);
      if (a === 34) return (o += n.slice(s, i)), Ee(t, T.STRING, e, i + 1, o);
      if (a === 92) {
        o += n.slice(s, i);
        const l = n.charCodeAt(i + 1) === 117 ? (n.charCodeAt(i + 2) === 123 ? FT(t, i) : jT(t, i)) : zT(t, i);
        (o += l.value), (i += l.size), (s = i);
        continue;
      }
      if (a === 10 || a === 13) break;
      if (Ii(a)) ++i;
      else if (Gl(n, i)) i += 2;
      else throw Re(t.source, i, `Invalid character within String: ${Or(t, i)}.`);
    }
    throw Re(t.source, i, 'Unterminated string.');
  }
  function FT(t, e) {
    const n = t.source.body;
    let r = 0,
      i = 3;
    for (; i < 12; ) {
      const s = n.charCodeAt(e + i++);
      if (s === 125) {
        if (i < 5 || !Ii(r)) break;
        return { value: String.fromCodePoint(r), size: i };
      }
      if (((r = (r << 4) | fs(s)), r < 0)) break;
    }
    throw Re(t.source, e, `Invalid Unicode escape sequence: "${n.slice(e, e + i)}".`);
  }
  function jT(t, e) {
    const n = t.source.body,
      r = am(n, e + 2);
    if (Ii(r)) return { value: String.fromCodePoint(r), size: 6 };
    if (Tx(r) && n.charCodeAt(e + 6) === 92 && n.charCodeAt(e + 7) === 117) {
      const i = am(n, e + 8);
      if (Cx(i)) return { value: String.fromCodePoint(r, i), size: 12 };
    }
    throw Re(t.source, e, `Invalid Unicode escape sequence: "${n.slice(e, e + 6)}".`);
  }
  function am(t, e) {
    return (
      (fs(t.charCodeAt(e)) << 12) |
      (fs(t.charCodeAt(e + 1)) << 8) |
      (fs(t.charCodeAt(e + 2)) << 4) |
      fs(t.charCodeAt(e + 3))
    );
  }
  function fs(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : -1;
  }
  function zT(t, e) {
    const n = t.source.body;
    switch (n.charCodeAt(e + 1)) {
      case 34:
        return { value: '"', size: 2 };
      case 92:
        return { value: '\\', size: 2 };
      case 47:
        return { value: '/', size: 2 };
      case 98:
        return { value: '\b', size: 2 };
      case 102:
        return { value: '\f', size: 2 };
      case 110:
        return {
          value: `
`,
          size: 2,
        };
      case 114:
        return { value: '\r', size: 2 };
      case 116:
        return { value: '	', size: 2 };
    }
    throw Re(t.source, e, `Invalid character escape sequence: "${n.slice(e, e + 2)}".`);
  }
  function BT(t, e) {
    const n = t.source.body,
      r = n.length;
    let i = t.lineStart,
      s = e + 3,
      o = s,
      a = '';
    const l = [];
    for (; s < r; ) {
      const u = n.charCodeAt(s);
      if (u === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
        (a += n.slice(o, s)), l.push(a);
        const c = Ee(
          t,
          T.BLOCK_STRING,
          e,
          s + 3,
          CT(l).join(`
`),
        );
        return (t.line += l.length - 1), (t.lineStart = i), c;
      }
      if (u === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
        (a += n.slice(o, s)), (o = s + 1), (s += 4);
        continue;
      }
      if (u === 10 || u === 13) {
        (a += n.slice(o, s)),
          l.push(a),
          u === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s,
          (a = ''),
          (o = s),
          (i = s);
        continue;
      }
      if (Ii(u)) ++s;
      else if (Gl(n, s)) s += 2;
      else throw Re(t.source, s, `Invalid character within String: ${Or(t, s)}.`);
    }
    throw Re(t.source, s, 'Unterminated string.');
  }
  function VT(t, e) {
    const n = t.source.body,
      r = n.length;
    let i = e + 1;
    for (; i < r; ) {
      const s = n.charCodeAt(i);
      if (TT(s)) ++i;
      else break;
    }
    return Ee(t, T.NAME, e, i, n.slice(e, i));
  }
  const UT = 10,
    Dx = 2;
  function td(t) {
    return Kl(t, []);
  }
  function Kl(t, e) {
    switch (typeof t) {
      case 'string':
        return JSON.stringify(t);
      case 'function':
        return t.name ? `[function ${t.name}]` : '[function]';
      case 'object':
        return WT(t, e);
      default:
        return String(t);
    }
  }
  function WT(t, e) {
    if (t === null) return 'null';
    if (e.includes(t)) return '[Circular]';
    const n = [...e, t];
    if ($T(t)) {
      const r = t.toJSON();
      if (r !== t) return typeof r == 'string' ? r : Kl(r, n);
    } else if (Array.isArray(t)) return HT(t, n);
    return QT(t, n);
  }
  function $T(t) {
    return typeof t.toJSON == 'function';
  }
  function QT(t, e) {
    const n = Object.entries(t);
    return n.length === 0
      ? '{}'
      : e.length > Dx
        ? '[' + qT(t) + ']'
        : '{ ' + n.map(([i, s]) => i + ': ' + Kl(s, e)).join(', ') + ' }';
  }
  function HT(t, e) {
    if (t.length === 0) return '[]';
    if (e.length > Dx) return '[Array]';
    const n = Math.min(UT, t.length),
      r = t.length - n,
      i = [];
    for (let s = 0; s < n; ++s) i.push(Kl(t[s], e));
    return r === 1 ? i.push('... 1 more item') : r > 1 && i.push(`... ${r} more items`), '[' + i.join(', ') + ']';
  }
  function qT(t) {
    const e = Object.prototype.toString
      .call(t)
      .replace(/^\[object /, '')
      .replace(/]$/, '');
    if (e === 'Object' && typeof t.constructor == 'function') {
      const n = t.constructor.name;
      if (typeof n == 'string' && n !== '') return n;
    }
    return e;
  }
  const YT = globalThis.process && !0,
    GT = YT
      ? function (e, n) {
          return e instanceof n;
        }
      : function (e, n) {
          if (e instanceof n) return !0;
          if (typeof e == 'object' && e !== null) {
            var r;
            const i = n.prototype[Symbol.toStringTag],
              s =
                Symbol.toStringTag in e
                  ? e[Symbol.toStringTag]
                  : (r = e.constructor) === null || r === void 0
                    ? void 0
                    : r.name;
            if (i === s) {
              const o = td(e);
              throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
            }
          }
          return !1;
        };
  class Px {
    constructor(e, n = 'GraphQL request', r = { line: 1, column: 1 }) {
      typeof e == 'string' || wa(!1, `Body must be a string. Received: ${td(e)}.`),
        (this.body = e),
        (this.name = n),
        (this.locationOffset = r),
        this.locationOffset.line > 0 || wa(!1, 'line in locationOffset is 1-indexed and must be positive.'),
        this.locationOffset.column > 0 || wa(!1, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
      return 'Source';
    }
  }
  function KT(t) {
    return GT(t, Px);
  }
  function XT(t, e) {
    return new JT(t, e).parseDocument();
  }
  class JT {
    constructor(e, n = {}) {
      const r = KT(e) ? e : new Px(e);
      (this._lexer = new NT(r)), (this._options = n), (this._tokenCounter = 0);
    }
    parseName() {
      const e = this.expectToken(T.NAME);
      return this.node(e, { kind: A.NAME, value: e.value });
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: A.DOCUMENT,
        definitions: this.many(T.SOF, this.parseDefinition, T.EOF),
      });
    }
    parseDefinition() {
      if (this.peek(T.BRACE_L)) return this.parseOperationDefinition();
      const e = this.peekDescription(),
        n = e ? this._lexer.lookahead() : this._lexer.token;
      if (n.kind === T.NAME) {
        switch (n.value) {
          case 'schema':
            return this.parseSchemaDefinition();
          case 'scalar':
            return this.parseScalarTypeDefinition();
          case 'type':
            return this.parseObjectTypeDefinition();
          case 'interface':
            return this.parseInterfaceTypeDefinition();
          case 'union':
            return this.parseUnionTypeDefinition();
          case 'enum':
            return this.parseEnumTypeDefinition();
          case 'input':
            return this.parseInputObjectTypeDefinition();
          case 'directive':
            return this.parseDirectiveDefinition();
        }
        if (e)
          throw Re(
            this._lexer.source,
            this._lexer.token.start,
            'Unexpected description, descriptions are supported only on type definitions.',
          );
        switch (n.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();
          case 'fragment':
            return this.parseFragmentDefinition();
          case 'extend':
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(n);
    }
    parseOperationDefinition() {
      const e = this._lexer.token;
      if (this.peek(T.BRACE_L))
        return this.node(e, {
          kind: A.OPERATION_DEFINITION,
          operation: Jr.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
        });
      const n = this.parseOperationType();
      let r;
      return (
        this.peek(T.NAME) && (r = this.parseName()),
        this.node(e, {
          kind: A.OPERATION_DEFINITION,
          operation: n,
          name: r,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        })
      );
    }
    parseOperationType() {
      const e = this.expectToken(T.NAME);
      switch (e.value) {
        case 'query':
          return Jr.QUERY;
        case 'mutation':
          return Jr.MUTATION;
        case 'subscription':
          return Jr.SUBSCRIPTION;
      }
      throw this.unexpected(e);
    }
    parseVariableDefinitions() {
      return this.optionalMany(T.PAREN_L, this.parseVariableDefinition, T.PAREN_R);
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: A.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(T.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(T.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives(),
      });
    }
    parseVariable() {
      const e = this._lexer.token;
      return this.expectToken(T.DOLLAR), this.node(e, { kind: A.VARIABLE, name: this.parseName() });
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: A.SELECTION_SET,
        selections: this.many(T.BRACE_L, this.parseSelection, T.BRACE_R),
      });
    }
    parseSelection() {
      return this.peek(T.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
      const e = this._lexer.token,
        n = this.parseName();
      let r, i;
      return (
        this.expectOptionalToken(T.COLON) ? ((r = n), (i = this.parseName())) : (i = n),
        this.node(e, {
          kind: A.FIELD,
          alias: r,
          name: i,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(T.BRACE_L) ? this.parseSelectionSet() : void 0,
        })
      );
    }
    parseArguments(e) {
      const n = e ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(T.PAREN_L, n, T.PAREN_R);
    }
    parseArgument(e = !1) {
      const n = this._lexer.token,
        r = this.parseName();
      return this.expectToken(T.COLON), this.node(n, { kind: A.ARGUMENT, name: r, value: this.parseValueLiteral(e) });
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    parseFragment() {
      const e = this._lexer.token;
      this.expectToken(T.SPREAD);
      const n = this.expectOptionalKeyword('on');
      return !n && this.peek(T.NAME)
        ? this.node(e, {
            kind: A.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
          })
        : this.node(e, {
            kind: A.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          });
    }
    parseFragmentDefinition() {
      const e = this._lexer.token;
      return (
        this.expectKeyword('fragment'),
        this._options.allowLegacyFragmentVariables === !0
          ? this.node(e, {
              kind: A.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
          : this.node(e, {
              kind: A.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
      );
    }
    parseFragmentName() {
      if (this._lexer.token.value === 'on') throw this.unexpected();
      return this.parseName();
    }
    parseValueLiteral(e) {
      const n = this._lexer.token;
      switch (n.kind) {
        case T.BRACKET_L:
          return this.parseList(e);
        case T.BRACE_L:
          return this.parseObject(e);
        case T.INT:
          return this.advanceLexer(), this.node(n, { kind: A.INT, value: n.value });
        case T.FLOAT:
          return this.advanceLexer(), this.node(n, { kind: A.FLOAT, value: n.value });
        case T.STRING:
        case T.BLOCK_STRING:
          return this.parseStringLiteral();
        case T.NAME:
          switch ((this.advanceLexer(), n.value)) {
            case 'true':
              return this.node(n, { kind: A.BOOLEAN, value: !0 });
            case 'false':
              return this.node(n, { kind: A.BOOLEAN, value: !1 });
            case 'null':
              return this.node(n, { kind: A.NULL });
            default:
              return this.node(n, { kind: A.ENUM, value: n.value });
          }
        case T.DOLLAR:
          if (e)
            if ((this.expectToken(T.DOLLAR), this._lexer.token.kind === T.NAME)) {
              const r = this._lexer.token.value;
              throw Re(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`);
            } else throw this.unexpected(n);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      const e = this._lexer.token;
      return this.advanceLexer(), this.node(e, { kind: A.STRING, value: e.value, block: e.kind === T.BLOCK_STRING });
    }
    parseList(e) {
      const n = () => this.parseValueLiteral(e);
      return this.node(this._lexer.token, { kind: A.LIST, values: this.any(T.BRACKET_L, n, T.BRACKET_R) });
    }
    parseObject(e) {
      const n = () => this.parseObjectField(e);
      return this.node(this._lexer.token, { kind: A.OBJECT, fields: this.any(T.BRACE_L, n, T.BRACE_R) });
    }
    parseObjectField(e) {
      const n = this._lexer.token,
        r = this.parseName();
      return (
        this.expectToken(T.COLON), this.node(n, { kind: A.OBJECT_FIELD, name: r, value: this.parseValueLiteral(e) })
      );
    }
    parseDirectives(e) {
      const n = [];
      for (; this.peek(T.AT); ) n.push(this.parseDirective(e));
      return n;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    parseDirective(e) {
      const n = this._lexer.token;
      return (
        this.expectToken(T.AT),
        this.node(n, { kind: A.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e) })
      );
    }
    parseTypeReference() {
      const e = this._lexer.token;
      let n;
      if (this.expectOptionalToken(T.BRACKET_L)) {
        const r = this.parseTypeReference();
        this.expectToken(T.BRACKET_R), (n = this.node(e, { kind: A.LIST_TYPE, type: r }));
      } else n = this.parseNamedType();
      return this.expectOptionalToken(T.BANG) ? this.node(e, { kind: A.NON_NULL_TYPE, type: n }) : n;
    }
    parseNamedType() {
      return this.node(this._lexer.token, { kind: A.NAMED_TYPE, name: this.parseName() });
    }
    peekDescription() {
      return this.peek(T.STRING) || this.peek(T.BLOCK_STRING);
    }
    parseDescription() {
      if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('schema');
      const r = this.parseConstDirectives(),
        i = this.many(T.BRACE_L, this.parseOperationTypeDefinition, T.BRACE_R);
      return this.node(e, { kind: A.SCHEMA_DEFINITION, description: n, directives: r, operationTypes: i });
    }
    parseOperationTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseOperationType();
      this.expectToken(T.COLON);
      const r = this.parseNamedType();
      return this.node(e, { kind: A.OPERATION_TYPE_DEFINITION, operation: n, type: r });
    }
    parseScalarTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('scalar');
      const r = this.parseName(),
        i = this.parseConstDirectives();
      return this.node(e, { kind: A.SCALAR_TYPE_DEFINITION, description: n, name: r, directives: i });
    }
    parseObjectTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('type');
      const r = this.parseName(),
        i = this.parseImplementsInterfaces(),
        s = this.parseConstDirectives(),
        o = this.parseFieldsDefinition();
      return this.node(e, {
        kind: A.OBJECT_TYPE_DEFINITION,
        description: n,
        name: r,
        interfaces: i,
        directives: s,
        fields: o,
      });
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements') ? this.delimitedMany(T.AMP, this.parseNamedType) : [];
    }
    parseFieldsDefinition() {
      return this.optionalMany(T.BRACE_L, this.parseFieldDefinition, T.BRACE_R);
    }
    parseFieldDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription(),
        r = this.parseName(),
        i = this.parseArgumentDefs();
      this.expectToken(T.COLON);
      const s = this.parseTypeReference(),
        o = this.parseConstDirectives();
      return this.node(e, { kind: A.FIELD_DEFINITION, description: n, name: r, arguments: i, type: s, directives: o });
    }
    parseArgumentDefs() {
      return this.optionalMany(T.PAREN_L, this.parseInputValueDef, T.PAREN_R);
    }
    parseInputValueDef() {
      const e = this._lexer.token,
        n = this.parseDescription(),
        r = this.parseName();
      this.expectToken(T.COLON);
      const i = this.parseTypeReference();
      let s;
      this.expectOptionalToken(T.EQUALS) && (s = this.parseConstValueLiteral());
      const o = this.parseConstDirectives();
      return this.node(e, {
        kind: A.INPUT_VALUE_DEFINITION,
        description: n,
        name: r,
        type: i,
        defaultValue: s,
        directives: o,
      });
    }
    parseInterfaceTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('interface');
      const r = this.parseName(),
        i = this.parseImplementsInterfaces(),
        s = this.parseConstDirectives(),
        o = this.parseFieldsDefinition();
      return this.node(e, {
        kind: A.INTERFACE_TYPE_DEFINITION,
        description: n,
        name: r,
        interfaces: i,
        directives: s,
        fields: o,
      });
    }
    parseUnionTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('union');
      const r = this.parseName(),
        i = this.parseConstDirectives(),
        s = this.parseUnionMemberTypes();
      return this.node(e, { kind: A.UNION_TYPE_DEFINITION, description: n, name: r, directives: i, types: s });
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(T.EQUALS) ? this.delimitedMany(T.PIPE, this.parseNamedType) : [];
    }
    parseEnumTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('enum');
      const r = this.parseName(),
        i = this.parseConstDirectives(),
        s = this.parseEnumValuesDefinition();
      return this.node(e, { kind: A.ENUM_TYPE_DEFINITION, description: n, name: r, directives: i, values: s });
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(T.BRACE_L, this.parseEnumValueDefinition, T.BRACE_R);
    }
    parseEnumValueDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription(),
        r = this.parseEnumValueName(),
        i = this.parseConstDirectives();
      return this.node(e, { kind: A.ENUM_VALUE_DEFINITION, description: n, name: r, directives: i });
    }
    parseEnumValueName() {
      if (
        this._lexer.token.value === 'true' ||
        this._lexer.token.value === 'false' ||
        this._lexer.token.value === 'null'
      )
        throw Re(
          this._lexer.source,
          this._lexer.token.start,
          `${ia(this._lexer.token)} is reserved and cannot be used for an enum value.`,
        );
      return this.parseName();
    }
    parseInputObjectTypeDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('input');
      const r = this.parseName(),
        i = this.parseConstDirectives(),
        s = this.parseInputFieldsDefinition();
      return this.node(e, { kind: A.INPUT_OBJECT_TYPE_DEFINITION, description: n, name: r, directives: i, fields: s });
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(T.BRACE_L, this.parseInputValueDef, T.BRACE_R);
    }
    parseTypeSystemExtension() {
      const e = this._lexer.lookahead();
      if (e.kind === T.NAME)
        switch (e.value) {
          case 'schema':
            return this.parseSchemaExtension();
          case 'scalar':
            return this.parseScalarTypeExtension();
          case 'type':
            return this.parseObjectTypeExtension();
          case 'interface':
            return this.parseInterfaceTypeExtension();
          case 'union':
            return this.parseUnionTypeExtension();
          case 'enum':
            return this.parseEnumTypeExtension();
          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(e);
    }
    parseSchemaExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('schema');
      const n = this.parseConstDirectives(),
        r = this.optionalMany(T.BRACE_L, this.parseOperationTypeDefinition, T.BRACE_R);
      if (n.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.SCHEMA_EXTENSION, directives: n, operationTypes: r });
    }
    parseScalarTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('scalar');
      const n = this.parseName(),
        r = this.parseConstDirectives();
      if (r.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.SCALAR_TYPE_EXTENSION, name: n, directives: r });
    }
    parseObjectTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('type');
      const n = this.parseName(),
        r = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        s = this.parseFieldsDefinition();
      if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.OBJECT_TYPE_EXTENSION, name: n, interfaces: r, directives: i, fields: s });
    }
    parseInterfaceTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('interface');
      const n = this.parseName(),
        r = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        s = this.parseFieldsDefinition();
      if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.INTERFACE_TYPE_EXTENSION, name: n, interfaces: r, directives: i, fields: s });
    }
    parseUnionTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('union');
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseUnionMemberTypes();
      if (r.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.UNION_TYPE_EXTENSION, name: n, directives: r, types: i });
    }
    parseEnumTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('enum');
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseEnumValuesDefinition();
      if (r.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.ENUM_TYPE_EXTENSION, name: n, directives: r, values: i });
    }
    parseInputObjectTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('input');
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseInputFieldsDefinition();
      if (r.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(e, { kind: A.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: r, fields: i });
    }
    parseDirectiveDefinition() {
      const e = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('directive'), this.expectToken(T.AT);
      const r = this.parseName(),
        i = this.parseArgumentDefs(),
        s = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      const o = this.parseDirectiveLocations();
      return this.node(e, {
        kind: A.DIRECTIVE_DEFINITION,
        description: n,
        name: r,
        arguments: i,
        repeatable: s,
        locations: o,
      });
    }
    parseDirectiveLocations() {
      return this.delimitedMany(T.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
      const e = this._lexer.token,
        n = this.parseName();
      if (Object.prototype.hasOwnProperty.call(cf, n.value)) return n;
      throw this.unexpected(e);
    }
    node(e, n) {
      return this._options.noLocation !== !0 && (n.loc = new ET(e, this._lexer.lastToken, this._lexer.source)), n;
    }
    peek(e) {
      return this._lexer.token.kind === e;
    }
    expectToken(e) {
      const n = this._lexer.token;
      if (n.kind === e) return this.advanceLexer(), n;
      throw Re(this._lexer.source, n.start, `Expected ${Nx(e)}, found ${ia(n)}.`);
    }
    expectOptionalToken(e) {
      return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(e) {
      const n = this._lexer.token;
      if (n.kind === T.NAME && n.value === e) this.advanceLexer();
      else throw Re(this._lexer.source, n.start, `Expected "${e}", found ${ia(n)}.`);
    }
    expectOptionalKeyword(e) {
      const n = this._lexer.token;
      return n.kind === T.NAME && n.value === e ? (this.advanceLexer(), !0) : !1;
    }
    unexpected(e) {
      const n = e ?? this._lexer.token;
      return Re(this._lexer.source, n.start, `Unexpected ${ia(n)}.`);
    }
    any(e, n, r) {
      this.expectToken(e);
      const i = [];
      for (; !this.expectOptionalToken(r); ) i.push(n.call(this));
      return i;
    }
    optionalMany(e, n, r) {
      if (this.expectOptionalToken(e)) {
        const i = [];
        do i.push(n.call(this));
        while (!this.expectOptionalToken(r));
        return i;
      }
      return [];
    }
    many(e, n, r) {
      this.expectToken(e);
      const i = [];
      do i.push(n.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    delimitedMany(e, n) {
      this.expectOptionalToken(e);
      const r = [];
      do r.push(n.call(this));
      while (this.expectOptionalToken(e));
      return r;
    }
    advanceLexer() {
      const { maxTokens: e } = this._options,
        n = this._lexer.advance();
      if (e !== void 0 && n.kind !== T.EOF && (++this._tokenCounter, this._tokenCounter > e))
        throw Re(this._lexer.source, n.start, `Document contains more that ${e} tokens. Parsing aborted.`);
    }
  }
  function ia(t) {
    const e = t.value;
    return Nx(t.kind) + (e != null ? ` "${e}"` : '');
  }
  function Nx(t) {
    return MT(t) ? `"${t}"` : t;
  }
  function ZT(t) {
    return `"${t.replace(eC, tC)}"`;
  }
  const eC = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function tC(t) {
    return nC[t.charCodeAt(0)];
  }
  const nC = [
      '\\u0000',
      '\\u0001',
      '\\u0002',
      '\\u0003',
      '\\u0004',
      '\\u0005',
      '\\u0006',
      '\\u0007',
      '\\b',
      '\\t',
      '\\n',
      '\\u000B',
      '\\f',
      '\\r',
      '\\u000E',
      '\\u000F',
      '\\u0010',
      '\\u0011',
      '\\u0012',
      '\\u0013',
      '\\u0014',
      '\\u0015',
      '\\u0016',
      '\\u0017',
      '\\u0018',
      '\\u0019',
      '\\u001A',
      '\\u001B',
      '\\u001C',
      '\\u001D',
      '\\u001E',
      '\\u001F',
      '',
      '',
      '\\"',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\\\',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\u007F',
      '\\u0080',
      '\\u0081',
      '\\u0082',
      '\\u0083',
      '\\u0084',
      '\\u0085',
      '\\u0086',
      '\\u0087',
      '\\u0088',
      '\\u0089',
      '\\u008A',
      '\\u008B',
      '\\u008C',
      '\\u008D',
      '\\u008E',
      '\\u008F',
      '\\u0090',
      '\\u0091',
      '\\u0092',
      '\\u0093',
      '\\u0094',
      '\\u0095',
      '\\u0096',
      '\\u0097',
      '\\u0098',
      '\\u0099',
      '\\u009A',
      '\\u009B',
      '\\u009C',
      '\\u009D',
      '\\u009E',
      '\\u009F',
    ],
    nd = Object.freeze({});
  function hn(t, e, n = kx) {
    const r = new Map();
    for (const p of Object.values(A)) r.set(p, rC(e, p));
    let i,
      s = Array.isArray(t),
      o = [t],
      a = -1,
      l = [],
      u = t,
      c,
      f;
    const h = [],
      d = [];
    do {
      a++;
      const p = a === o.length,
        m = p && l.length !== 0;
      if (p) {
        if (((c = d.length === 0 ? void 0 : h[h.length - 1]), (u = f), (f = d.pop()), m))
          if (s) {
            u = u.slice();
            let b = 0;
            for (const [_, S] of l) {
              const E = _ - b;
              S === null ? (u.splice(E, 1), b++) : (u[E] = S);
            }
          } else {
            u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
            for (const [b, _] of l) u[b] = _;
          }
        (a = i.index), (o = i.keys), (l = i.edits), (s = i.inArray), (i = i.prev);
      } else if (f) {
        if (((c = s ? a : o[a]), (u = f[c]), u == null)) continue;
        h.push(c);
      }
      let y;
      if (!Array.isArray(u)) {
        var g, v;
        om(u) || wa(!1, `Invalid AST Node: ${td(u)}.`);
        const b = p
          ? (g = r.get(u.kind)) === null || g === void 0
            ? void 0
            : g.leave
          : (v = r.get(u.kind)) === null || v === void 0
            ? void 0
            : v.enter;
        if (((y = b == null ? void 0 : b.call(e, u, c, f, h, d)), y === nd)) break;
        if (y === !1) {
          if (!p) {
            h.pop();
            continue;
          }
        } else if (y !== void 0 && (l.push([c, y]), !p))
          if (om(y)) u = y;
          else {
            h.pop();
            continue;
          }
      }
      if ((y === void 0 && m && l.push([c, u]), p)) h.pop();
      else {
        var x;
        (i = { inArray: s, index: a, keys: o, edits: l, prev: i }),
          (s = Array.isArray(u)),
          (o = s ? u : (x = n[u.kind]) !== null && x !== void 0 ? x : []),
          (a = -1),
          (l = []),
          f && d.push(f),
          (f = u);
      }
    } while (i !== void 0);
    return l.length !== 0 ? l[l.length - 1][1] : t;
  }
  function rC(t, e) {
    const n = t[e];
    return typeof n == 'object'
      ? n
      : typeof n == 'function'
        ? { enter: n, leave: void 0 }
        : { enter: t.enter, leave: t.leave };
  }
  function iC(t) {
    return hn(t, oC);
  }
  const sC = 80,
    oC = {
      Name: { leave: (t) => t.value },
      Variable: { leave: (t) => '$' + t.name },
      Document: {
        leave: (t) =>
          L(
            t.definitions,
            `

`,
          ),
      },
      OperationDefinition: {
        leave(t) {
          const e = $('(', L(t.variableDefinitions, ', '), ')'),
            n = L([t.operation, L([t.name, e]), L(t.directives, ' ')], ' ');
          return (n === 'query' ? '' : n + ' ') + t.selectionSet;
        },
      },
      VariableDefinition: {
        leave: ({ variable: t, type: e, defaultValue: n, directives: r }) =>
          t + ': ' + e + $(' = ', n) + $(' ', L(r, ' ')),
      },
      SelectionSet: { leave: ({ selections: t }) => Tt(t) },
      Field: {
        leave({ alias: t, name: e, arguments: n, directives: r, selectionSet: i }) {
          const s = $('', t, ': ') + e;
          let o = s + $('(', L(n, ', '), ')');
          return (
            o.length > sC &&
              (o =
                s +
                $(
                  `(
`,
                  Sa(
                    L(
                      n,
                      `
`,
                    ),
                  ),
                  `
)`,
                )),
            L([o, L(r, ' '), i], ' ')
          );
        },
      },
      Argument: { leave: ({ name: t, value: e }) => t + ': ' + e },
      FragmentSpread: { leave: ({ name: t, directives: e }) => '...' + t + $(' ', L(e, ' ')) },
      InlineFragment: {
        leave: ({ typeCondition: t, directives: e, selectionSet: n }) => L(['...', $('on ', t), L(e, ' '), n], ' '),
      },
      FragmentDefinition: {
        leave: ({ name: t, typeCondition: e, variableDefinitions: n, directives: r, selectionSet: i }) =>
          `fragment ${t}${$('(', L(n, ', '), ')')} on ${e} ${$('', L(r, ' '), ' ')}` + i,
      },
      IntValue: { leave: ({ value: t }) => t },
      FloatValue: { leave: ({ value: t }) => t },
      StringValue: { leave: ({ value: t, block: e }) => (e ? PT(t) : ZT(t)) },
      BooleanValue: { leave: ({ value: t }) => (t ? 'true' : 'false') },
      NullValue: { leave: () => 'null' },
      EnumValue: { leave: ({ value: t }) => t },
      ListValue: { leave: ({ values: t }) => '[' + L(t, ', ') + ']' },
      ObjectValue: { leave: ({ fields: t }) => '{' + L(t, ', ') + '}' },
      ObjectField: { leave: ({ name: t, value: e }) => t + ': ' + e },
      Directive: { leave: ({ name: t, arguments: e }) => '@' + t + $('(', L(e, ', '), ')') },
      NamedType: { leave: ({ name: t }) => t },
      ListType: { leave: ({ type: t }) => '[' + t + ']' },
      NonNullType: { leave: ({ type: t }) => t + '!' },
      SchemaDefinition: {
        leave: ({ description: t, directives: e, operationTypes: n }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['schema', L(e, ' '), Tt(n)], ' '),
      },
      OperationTypeDefinition: { leave: ({ operation: t, type: e }) => t + ': ' + e },
      ScalarTypeDefinition: {
        leave: ({ description: t, name: e, directives: n }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['scalar', e, L(n, ' ')], ' '),
      },
      ObjectTypeDefinition: {
        leave: ({ description: t, name: e, interfaces: n, directives: r, fields: i }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['type', e, $('implements ', L(n, ' & ')), L(r, ' '), Tt(i)], ' '),
      },
      FieldDefinition: {
        leave: ({ description: t, name: e, arguments: n, type: r, directives: i }) =>
          $(
            '',
            t,
            `
`,
          ) +
          e +
          (lm(n)
            ? $(
                `(
`,
                Sa(
                  L(
                    n,
                    `
`,
                  ),
                ),
                `
)`,
              )
            : $('(', L(n, ', '), ')')) +
          ': ' +
          r +
          $(' ', L(i, ' ')),
      },
      InputValueDefinition: {
        leave: ({ description: t, name: e, type: n, defaultValue: r, directives: i }) =>
          $(
            '',
            t,
            `
`,
          ) + L([e + ': ' + n, $('= ', r), L(i, ' ')], ' '),
      },
      InterfaceTypeDefinition: {
        leave: ({ description: t, name: e, interfaces: n, directives: r, fields: i }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['interface', e, $('implements ', L(n, ' & ')), L(r, ' '), Tt(i)], ' '),
      },
      UnionTypeDefinition: {
        leave: ({ description: t, name: e, directives: n, types: r }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['union', e, L(n, ' '), $('= ', L(r, ' | '))], ' '),
      },
      EnumTypeDefinition: {
        leave: ({ description: t, name: e, directives: n, values: r }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['enum', e, L(n, ' '), Tt(r)], ' '),
      },
      EnumValueDefinition: {
        leave: ({ description: t, name: e, directives: n }) =>
          $(
            '',
            t,
            `
`,
          ) + L([e, L(n, ' ')], ' '),
      },
      InputObjectTypeDefinition: {
        leave: ({ description: t, name: e, directives: n, fields: r }) =>
          $(
            '',
            t,
            `
`,
          ) + L(['input', e, L(n, ' '), Tt(r)], ' '),
      },
      DirectiveDefinition: {
        leave: ({ description: t, name: e, arguments: n, repeatable: r, locations: i }) =>
          $(
            '',
            t,
            `
`,
          ) +
          'directive @' +
          e +
          (lm(n)
            ? $(
                `(
`,
                Sa(
                  L(
                    n,
                    `
`,
                  ),
                ),
                `
)`,
              )
            : $('(', L(n, ', '), ')')) +
          (r ? ' repeatable' : '') +
          ' on ' +
          L(i, ' | '),
      },
      SchemaExtension: { leave: ({ directives: t, operationTypes: e }) => L(['extend schema', L(t, ' '), Tt(e)], ' ') },
      ScalarTypeExtension: { leave: ({ name: t, directives: e }) => L(['extend scalar', t, L(e, ' ')], ' ') },
      ObjectTypeExtension: {
        leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
          L(['extend type', t, $('implements ', L(e, ' & ')), L(n, ' '), Tt(r)], ' '),
      },
      InterfaceTypeExtension: {
        leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
          L(['extend interface', t, $('implements ', L(e, ' & ')), L(n, ' '), Tt(r)], ' '),
      },
      UnionTypeExtension: {
        leave: ({ name: t, directives: e, types: n }) => L(['extend union', t, L(e, ' '), $('= ', L(n, ' | '))], ' '),
      },
      EnumTypeExtension: {
        leave: ({ name: t, directives: e, values: n }) => L(['extend enum', t, L(e, ' '), Tt(n)], ' '),
      },
      InputObjectTypeExtension: {
        leave: ({ name: t, directives: e, fields: n }) => L(['extend input', t, L(e, ' '), Tt(n)], ' '),
      },
    };
  function L(t, e = '') {
    var n;
    return (n = t == null ? void 0 : t.filter((r) => r).join(e)) !== null && n !== void 0 ? n : '';
  }
  function Tt(t) {
    return $(
      `{
`,
      Sa(
        L(
          t,
          `
`,
        ),
      ),
      `
}`,
    );
  }
  function $(t, e, n = '') {
    return e != null && e !== '' ? t + e + n : '';
  }
  function Sa(t) {
    return $(
      '  ',
      t.replace(
        /\n/g,
        `
  `,
      ),
    );
  }
  function lm(t) {
    var e;
    return (e =
      t == null
        ? void 0
        : t.some((n) =>
            n.includes(`
`),
          )) !== null && e !== void 0
      ? e
      : !1;
  }
  function um(t) {
    return t.kind === A.FIELD || t.kind === A.FRAGMENT_SPREAD || t.kind === A.INLINE_FRAGMENT;
  }
  function vo(t, e) {
    var n = t.directives;
    return !n || !n.length
      ? !0
      : uC(n).every(function (r) {
          var i = r.directive,
            s = r.ifArgument,
            o = !1;
          return (
            s.value.kind === 'Variable'
              ? ((o = e && e[s.value.name.value]), F(o !== void 0, 70, i.name.value))
              : (o = s.value.value),
            i.name.value === 'skip' ? !o : o
          );
        });
  }
  function no(t, e, n) {
    var r = new Set(t),
      i = r.size;
    return (
      hn(e, {
        Directive: function (s) {
          if (r.delete(s.name.value) && (!n || !r.size)) return nd;
        },
      }),
      n ? !r.size : r.size < i
    );
  }
  function aC(t) {
    return t && no(['client', 'export'], t, !0);
  }
  function lC(t) {
    var e = t.name.value;
    return e === 'skip' || e === 'include';
  }
  function uC(t) {
    var e = [];
    return (
      t &&
        t.length &&
        t.forEach(function (n) {
          if (lC(n)) {
            var r = n.arguments,
              i = n.name.value;
            F(r && r.length === 1, 71, i);
            var s = r[0];
            F(s.name && s.name.value === 'if', 72, i);
            var o = s.value;
            F(o && (o.kind === 'Variable' || o.kind === 'BooleanValue'), 73, i),
              e.push({ directive: n, ifArgument: s });
          }
        }),
      e
    );
  }
  const cC = () => Object.create(null),
    { forEach: fC, slice: cm } = Array.prototype,
    { hasOwnProperty: hC } = Object.prototype;
  let Ri = class Mx {
    constructor(e = !0, n = cC) {
      (this.weakness = e), (this.makeData = n);
    }
    lookup() {
      return this.lookupArray(arguments);
    }
    lookupArray(e) {
      let n = this;
      return (
        fC.call(e, (r) => (n = n.getChildTrie(r))), hC.call(n, 'data') ? n.data : (n.data = this.makeData(cm.call(e)))
      );
    }
    peek() {
      return this.peekArray(arguments);
    }
    peekArray(e) {
      let n = this;
      for (let r = 0, i = e.length; n && r < i; ++r) {
        const s = n.mapFor(e[r], !1);
        n = s && s.get(e[r]);
      }
      return n && n.data;
    }
    remove() {
      return this.removeArray(arguments);
    }
    removeArray(e) {
      let n;
      if (e.length) {
        const r = e[0],
          i = this.mapFor(r, !1),
          s = i && i.get(r);
        s && ((n = s.removeArray(cm.call(e, 1))), !s.data && !s.weak && !(s.strong && s.strong.size) && i.delete(r));
      } else (n = this.data), delete this.data;
      return n;
    }
    getChildTrie(e) {
      const n = this.mapFor(e, !0);
      let r = n.get(e);
      return r || n.set(e, (r = new Mx(this.weakness, this.makeData))), r;
    }
    mapFor(e, n) {
      return this.weakness && dC(e)
        ? this.weak || (n ? (this.weak = new WeakMap()) : void 0)
        : this.strong || (n ? (this.strong = new Map()) : void 0);
    }
  };
  function dC(t) {
    switch (typeof t) {
      case 'object':
        if (t === null) break;
      case 'function':
        return !0;
    }
    return !1;
  }
  var Ix =
      Nt(function () {
        return navigator.product;
      }) == 'ReactNative',
    Ai = typeof WeakMap == 'function' && !(Ix && !global.HermesInternal),
    Rx = typeof WeakSet == 'function',
    rd = typeof Symbol == 'function' && typeof Symbol.for == 'function',
    Xl = rd && Symbol.asyncIterator,
    Ax =
      typeof Nt(function () {
        return window.document.createElement;
      }) == 'function',
    pC =
      Nt(function () {
        return navigator.userAgent.indexOf('jsdom') >= 0;
      }) || !1,
    gC = (Ax || Ix) && !pC;
  function xe(t) {
    return t !== null && typeof t == 'object';
  }
  function mC(t, e) {
    var n = e,
      r = [];
    t.definitions.forEach(function (s) {
      if (s.kind === 'OperationDefinition')
        throw Ke(74, s.operation, s.name ? " named '".concat(s.name.value, "'") : '');
      s.kind === 'FragmentDefinition' && r.push(s);
    }),
      typeof n > 'u' && (F(r.length === 1, 75, r.length), (n = r[0].name.value));
    var i = k(k({}, t), {
      definitions: lt(
        [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: n } }],
            },
          },
        ],
        t.definitions,
        !0,
      ),
    });
    return i;
  }
  function Jl(t) {
    t === void 0 && (t = []);
    var e = {};
    return (
      t.forEach(function (n) {
        e[n.name.value] = n;
      }),
      e
    );
  }
  function Zl(t, e) {
    switch (t.kind) {
      case 'InlineFragment':
        return t;
      case 'FragmentSpread': {
        var n = t.name.value;
        if (typeof e == 'function') return e(n);
        var r = e && e[n];
        return F(r, 76, n), r || null;
      }
      default:
        return null;
    }
  }
  function vC() {}
  class hf {
    constructor(e = 1 / 0, n = vC) {
      (this.max = e), (this.dispose = n), (this.map = new Map()), (this.newest = null), (this.oldest = null);
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      const n = this.getNode(e);
      return n && n.value;
    }
    get size() {
      return this.map.size;
    }
    getNode(e) {
      const n = this.map.get(e);
      if (n && n !== this.newest) {
        const { older: r, newer: i } = n;
        i && (i.older = r),
          r && (r.newer = i),
          (n.older = this.newest),
          (n.older.newer = n),
          (n.newer = null),
          (this.newest = n),
          n === this.oldest && (this.oldest = i);
      }
      return n;
    }
    set(e, n) {
      let r = this.getNode(e);
      return r
        ? (r.value = n)
        : ((r = { key: e, value: n, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = r),
          (this.newest = r),
          (this.oldest = this.oldest || r),
          this.map.set(e, r),
          r.value);
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key);
    }
    delete(e) {
      const n = this.map.get(e);
      return n
        ? (n === this.newest && (this.newest = n.older),
          n === this.oldest && (this.oldest = n.newer),
          n.newer && (n.newer.older = n.older),
          n.older && (n.older.newer = n.newer),
          this.map.delete(e),
          this.dispose(n.value, e),
          !0)
        : !1;
    }
  }
  function df() {}
  const yC = df,
    xC =
      typeof WeakRef < 'u'
        ? WeakRef
        : function (t) {
            return { deref: () => t };
          },
    bC = typeof WeakMap < 'u' ? WeakMap : Map,
    _C =
      typeof FinalizationRegistry < 'u'
        ? FinalizationRegistry
        : function () {
            return { register: df, unregister: df };
          },
    wC = 10024;
  class _l {
    constructor(e = 1 / 0, n = yC) {
      (this.max = e),
        (this.dispose = n),
        (this.map = new bC()),
        (this.newest = null),
        (this.oldest = null),
        (this.unfinalizedNodes = new Set()),
        (this.finalizationScheduled = !1),
        (this.size = 0),
        (this.finalize = () => {
          const r = this.unfinalizedNodes.values();
          for (let i = 0; i < wC; i++) {
            const s = r.next().value;
            if (!s) break;
            this.unfinalizedNodes.delete(s);
            const o = s.key;
            delete s.key, (s.keyRef = new xC(o)), this.registry.register(o, s, s);
          }
          this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : (this.finalizationScheduled = !1);
        }),
        (this.registry = new _C(this.deleteNode.bind(this)));
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      const n = this.getNode(e);
      return n && n.value;
    }
    getNode(e) {
      const n = this.map.get(e);
      if (n && n !== this.newest) {
        const { older: r, newer: i } = n;
        i && (i.older = r),
          r && (r.newer = i),
          (n.older = this.newest),
          (n.older.newer = n),
          (n.newer = null),
          (this.newest = n),
          n === this.oldest && (this.oldest = i);
      }
      return n;
    }
    set(e, n) {
      let r = this.getNode(e);
      return r
        ? (r.value = n)
        : ((r = { key: e, value: n, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = r),
          (this.newest = r),
          (this.oldest = this.oldest || r),
          this.scheduleFinalization(r),
          this.map.set(e, r),
          this.size++,
          r.value);
    }
    clean() {
      for (; this.oldest && this.size > this.max; ) this.deleteNode(this.oldest);
    }
    deleteNode(e) {
      e === this.newest && (this.newest = e.older),
        e === this.oldest && (this.oldest = e.newer),
        e.newer && (e.newer.older = e.older),
        e.older && (e.older.newer = e.newer),
        this.size--;
      const n = e.key || (e.keyRef && e.keyRef.deref());
      this.dispose(e.value, n),
        e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e),
        n && this.map.delete(n);
    }
    delete(e) {
      const n = this.map.get(e);
      return n ? (this.deleteNode(n), !0) : !1;
    }
    scheduleFinalization(e) {
      this.unfinalizedNodes.add(e),
        this.finalizationScheduled || ((this.finalizationScheduled = !0), queueMicrotask(this.finalize));
    }
  }
  var $u = new WeakSet();
  function Lx(t) {
    t.size <= (t.max || -1) ||
      $u.has(t) ||
      ($u.add(t),
      setTimeout(function () {
        t.clean(), $u.delete(t);
      }, 100));
  }
  var id = function (t, e) {
      var n = new _l(t, e);
      return (
        (n.set = function (r, i) {
          var s = _l.prototype.set.call(this, r, i);
          return Lx(this), s;
        }),
        n
      );
    },
    SC = function (t, e) {
      var n = new hf(t, e);
      return (
        (n.set = function (r, i) {
          var s = hf.prototype.set.call(this, r, i);
          return Lx(this), s;
        }),
        n
      );
    },
    kC = Symbol.for('apollo.cacheSize'),
    Yt = k({}, af[kC]),
    cr = {};
  function sd(t, e) {
    cr[t] = e;
  }
  var EC = globalThis.__DEV__ !== !1 ? DC : void 0,
    OC = globalThis.__DEV__ !== !1 ? PC : void 0,
    TC = globalThis.__DEV__ !== !1 ? Fx : void 0;
  function CC() {
    var t = {
      parser: 1e3,
      canonicalStringify: 1e3,
      print: 2e3,
      'documentTransform.cache': 2e3,
      'queryManager.getDocumentInfo': 2e3,
      'PersistedQueryLink.persistedQueryHashes': 2e3,
      'fragmentRegistry.transform': 2e3,
      'fragmentRegistry.lookup': 1e3,
      'fragmentRegistry.findFragmentSpreads': 4e3,
      'cache.fragmentQueryDocuments': 1e3,
      'removeTypenameFromVariables.getVariableDefinitions': 2e3,
      'inMemoryCache.maybeBroadcastWatch': 5e3,
      'inMemoryCache.executeSelectionSet': 5e4,
      'inMemoryCache.executeSubSelectedArray': 1e4,
    };
    return Object.fromEntries(
      Object.entries(t).map(function (e) {
        var n = e[0],
          r = e[1];
        return [n, Yt[n] || r];
      }),
    );
  }
  function DC() {
    var t, e, n, r, i;
    if (globalThis.__DEV__ === !1) throw new Error('only supported in development mode');
    return {
      limits: CC(),
      sizes: k(
        {
          print: (t = cr.print) === null || t === void 0 ? void 0 : t.call(cr),
          parser: (e = cr.parser) === null || e === void 0 ? void 0 : e.call(cr),
          canonicalStringify: (n = cr.canonicalStringify) === null || n === void 0 ? void 0 : n.call(cr),
          links: gf(this.link),
          queryManager: {
            getDocumentInfo: this.queryManager.transformCache.size,
            documentTransforms: zx(this.queryManager.documentTransform),
          },
        },
        (i = (r = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(r),
      ),
    };
  }
  function Fx() {
    return { cache: { fragmentQueryDocuments: Sn(this.getFragmentDoc) } };
  }
  function PC() {
    var t = this.config.fragments;
    return k(k({}, Fx.apply(this)), {
      addTypenameDocumentTransform: zx(this.addTypenameTransform),
      inMemoryCache: {
        executeSelectionSet: Sn(this.storeReader.executeSelectionSet),
        executeSubSelectedArray: Sn(this.storeReader.executeSubSelectedArray),
        maybeBroadcastWatch: Sn(this.maybeBroadcastWatch),
      },
      fragmentRegistry: {
        findFragmentSpreads: Sn(t == null ? void 0 : t.findFragmentSpreads),
        lookup: Sn(t == null ? void 0 : t.lookup),
        transform: Sn(t == null ? void 0 : t.transform),
      },
    });
  }
  function NC(t) {
    return !!t && 'dirtyKey' in t;
  }
  function Sn(t) {
    return NC(t) ? t.size : void 0;
  }
  function jx(t) {
    return t != null;
  }
  function zx(t) {
    return pf(t).map(function (e) {
      return { cache: e };
    });
  }
  function pf(t) {
    return t
      ? lt(
          lt([Sn(t == null ? void 0 : t.performWork)], pf(t == null ? void 0 : t.left), !0),
          pf(t == null ? void 0 : t.right),
          !0,
        ).filter(jx)
      : [];
  }
  function gf(t) {
    var e;
    return t
      ? lt(
          lt(
            [(e = t == null ? void 0 : t.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)],
            gf(t == null ? void 0 : t.left),
            !0,
          ),
          gf(t == null ? void 0 : t.right),
          !0,
        ).filter(jx)
      : [];
  }
  var Wn = Object.assign(
    function (e) {
      return JSON.stringify(e, MC);
    },
    {
      reset: function () {
        Zr = new SC(Yt.canonicalStringify || 1e3);
      },
    },
  );
  globalThis.__DEV__ !== !1 &&
    sd('canonicalStringify', function () {
      return Zr.size;
    });
  var Zr;
  Wn.reset();
  function MC(t, e) {
    if (e && typeof e == 'object') {
      var n = Object.getPrototypeOf(e);
      if (n === Object.prototype || n === null) {
        var r = Object.keys(e);
        if (r.every(IC)) return e;
        var i = JSON.stringify(r),
          s = Zr.get(i);
        if (!s) {
          r.sort();
          var o = JSON.stringify(r);
          (s = Zr.get(o) || r), Zr.set(i, s), Zr.set(o, s);
        }
        var a = Object.create(n);
        return (
          s.forEach(function (l) {
            a[l] = e[l];
          }),
          a
        );
      }
    }
    return e;
  }
  function IC(t, e, n) {
    return e === 0 || n[e - 1] <= t;
  }
  function ci(t) {
    return { __ref: String(t) };
  }
  function J(t) {
    return !!(t && typeof t == 'object' && typeof t.__ref == 'string');
  }
  function RC(t) {
    return xe(t) && t.kind === 'Document' && Array.isArray(t.definitions);
  }
  function AC(t) {
    return t.kind === 'StringValue';
  }
  function LC(t) {
    return t.kind === 'BooleanValue';
  }
  function FC(t) {
    return t.kind === 'IntValue';
  }
  function jC(t) {
    return t.kind === 'FloatValue';
  }
  function zC(t) {
    return t.kind === 'Variable';
  }
  function BC(t) {
    return t.kind === 'ObjectValue';
  }
  function VC(t) {
    return t.kind === 'ListValue';
  }
  function UC(t) {
    return t.kind === 'EnumValue';
  }
  function WC(t) {
    return t.kind === 'NullValue';
  }
  function wi(t, e, n, r) {
    if (FC(n) || jC(n)) t[e.value] = Number(n.value);
    else if (LC(n) || AC(n)) t[e.value] = n.value;
    else if (BC(n)) {
      var i = {};
      n.fields.map(function (o) {
        return wi(i, o.name, o.value, r);
      }),
        (t[e.value] = i);
    } else if (zC(n)) {
      var s = (r || {})[n.name.value];
      t[e.value] = s;
    } else if (VC(n))
      t[e.value] = n.values.map(function (o) {
        var a = {};
        return wi(a, e, o, r), a[e.value];
      });
    else if (UC(n)) t[e.value] = n.value;
    else if (WC(n)) t[e.value] = null;
    else throw Ke(85, e.value, n.kind);
  }
  function $C(t, e) {
    var n = null;
    t.directives &&
      ((n = {}),
      t.directives.forEach(function (i) {
        (n[i.name.value] = {}),
          i.arguments &&
            i.arguments.forEach(function (s) {
              var o = s.name,
                a = s.value;
              return wi(n[i.name.value], o, a, e);
            });
      }));
    var r = null;
    return (
      t.arguments &&
        t.arguments.length &&
        ((r = {}),
        t.arguments.forEach(function (i) {
          var s = i.name,
            o = i.value;
          return wi(r, s, o, e);
        })),
      Bx(t.name.value, r, n)
    );
  }
  var QC = ['connection', 'include', 'skip', 'client', 'rest', 'export', 'nonreactive'],
    Ki = Wn,
    Bx = Object.assign(
      function (t, e, n) {
        if (e && n && n.connection && n.connection.key)
          if (n.connection.filter && n.connection.filter.length > 0) {
            var r = n.connection.filter ? n.connection.filter : [];
            r.sort();
            var i = {};
            return (
              r.forEach(function (a) {
                i[a] = e[a];
              }),
              ''.concat(n.connection.key, '(').concat(Ki(i), ')')
            );
          } else return n.connection.key;
        var s = t;
        if (e) {
          var o = Ki(e);
          s += '('.concat(o, ')');
        }
        return (
          n &&
            Object.keys(n).forEach(function (a) {
              QC.indexOf(a) === -1 &&
                (n[a] && Object.keys(n[a]).length
                  ? (s += '@'.concat(a, '(').concat(Ki(n[a]), ')'))
                  : (s += '@'.concat(a)));
            }),
          s
        );
      },
      {
        setStringify: function (t) {
          var e = Ki;
          return (Ki = t), e;
        },
      },
    );
  function eu(t, e) {
    if (t.arguments && t.arguments.length) {
      var n = {};
      return (
        t.arguments.forEach(function (r) {
          var i = r.name,
            s = r.value;
          return wi(n, i, s, e);
        }),
        n
      );
    }
    return null;
  }
  function qn(t) {
    return t.alias ? t.alias.value : t.name.value;
  }
  function mf(t, e, n) {
    for (var r, i = 0, s = e.selections; i < s.length; i++) {
      var o = s[i];
      if (Yn(o)) {
        if (o.name.value === '__typename') return t[qn(o)];
      } else r ? r.push(o) : (r = [o]);
    }
    if (typeof t.__typename == 'string') return t.__typename;
    if (r)
      for (var a = 0, l = r; a < l.length; a++) {
        var o = l[a],
          u = mf(t, Zl(o, n).selectionSet, n);
        if (typeof u == 'string') return u;
      }
  }
  function Yn(t) {
    return t.kind === 'Field';
  }
  function HC(t) {
    return t.kind === 'InlineFragment';
  }
  function yo(t) {
    F(t && t.kind === 'Document', 77);
    var e = t.definitions
      .filter(function (n) {
        return n.kind !== 'FragmentDefinition';
      })
      .map(function (n) {
        if (n.kind !== 'OperationDefinition') throw Ke(78, n.kind);
        return n;
      });
    return F(e.length <= 1, 79, e.length), t;
  }
  function xo(t) {
    return (
      yo(t),
      t.definitions.filter(function (e) {
        return e.kind === 'OperationDefinition';
      })[0]
    );
  }
  function vf(t) {
    return (
      t.definitions
        .filter(function (e) {
          return e.kind === 'OperationDefinition' && !!e.name;
        })
        .map(function (e) {
          return e.name.value;
        })[0] || null
    );
  }
  function tu(t) {
    return t.definitions.filter(function (e) {
      return e.kind === 'FragmentDefinition';
    });
  }
  function Vx(t) {
    var e = xo(t);
    return F(e && e.operation === 'query', 80), e;
  }
  function qC(t) {
    F(t.kind === 'Document', 81), F(t.definitions.length <= 1, 82);
    var e = t.definitions[0];
    return F(e.kind === 'FragmentDefinition', 83), e;
  }
  function bo(t) {
    yo(t);
    for (var e, n = 0, r = t.definitions; n < r.length; n++) {
      var i = r[n];
      if (i.kind === 'OperationDefinition') {
        var s = i.operation;
        if (s === 'query' || s === 'mutation' || s === 'subscription') return i;
      }
      i.kind === 'FragmentDefinition' && !e && (e = i);
    }
    if (e) return e;
    throw Ke(84);
  }
  function od(t) {
    var e = Object.create(null),
      n = t && t.variableDefinitions;
    return (
      n &&
        n.length &&
        n.forEach(function (r) {
          r.defaultValue && wi(e, r.variable.name, r.defaultValue);
        }),
      e
    );
  }
  const YC = () => Object.create(null),
    { forEach: GC, slice: KC } = Array.prototype,
    { hasOwnProperty: XC } = Object.prototype;
  class ad {
    constructor(e = !0, n = YC) {
      (this.weakness = e), (this.makeData = n);
    }
    lookup(...e) {
      return this.lookupArray(e);
    }
    lookupArray(e) {
      let n = this;
      return (
        GC.call(e, (r) => (n = n.getChildTrie(r))), XC.call(n, 'data') ? n.data : (n.data = this.makeData(KC.call(e)))
      );
    }
    peek(...e) {
      return this.peekArray(e);
    }
    peekArray(e) {
      let n = this;
      for (let r = 0, i = e.length; n && r < i; ++r) {
        const s = this.weakness && fm(e[r]) ? n.weak : n.strong;
        n = s && s.get(e[r]);
      }
      return n && n.data;
    }
    getChildTrie(e) {
      const n =
        this.weakness && fm(e) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
      let r = n.get(e);
      return r || n.set(e, (r = new ad(this.weakness, this.makeData))), r;
    }
  }
  function fm(t) {
    switch (typeof t) {
      case 'object':
        if (t === null) break;
      case 'function':
        return !0;
    }
    return !1;
  }
  let Fe = null;
  const hm = {};
  let JC = 1;
  const ZC = () =>
    class {
      constructor() {
        this.id = ['slot', JC++, Date.now(), Math.random().toString(36).slice(2)].join(':');
      }
      hasValue() {
        for (let e = Fe; e; e = e.parent)
          if (this.id in e.slots) {
            const n = e.slots[this.id];
            if (n === hm) break;
            return e !== Fe && (Fe.slots[this.id] = n), !0;
          }
        return Fe && (Fe.slots[this.id] = hm), !1;
      }
      getValue() {
        if (this.hasValue()) return Fe.slots[this.id];
      }
      withValue(e, n, r, i) {
        const s = { __proto__: null, [this.id]: e },
          o = Fe;
        Fe = { parent: o, slots: s };
        try {
          return n.apply(i, r);
        } finally {
          Fe = o;
        }
      }
      static bind(e) {
        const n = Fe;
        return function () {
          const r = Fe;
          try {
            return (Fe = n), e.apply(this, arguments);
          } finally {
            Fe = r;
          }
        };
      }
      static noContext(e, n, r) {
        if (Fe) {
          const i = Fe;
          try {
            return (Fe = null), e.apply(r, n);
          } finally {
            Fe = i;
          }
        } else return e.apply(r, n);
      }
    };
  function dm(t) {
    try {
      return t();
    } catch {}
  }
  const Qu = '@wry/context:Slot',
    e2 = dm(() => globalThis) || dm(() => global) || Object.create(null),
    pm = e2,
    Ux =
      pm[Qu] ||
      Array[Qu] ||
      (function (t) {
        try {
          Object.defineProperty(pm, Qu, { value: t, enumerable: !1, writable: !1, configurable: !0 });
        } finally {
          return t;
        }
      })(ZC()),
    nu = new Ux(),
    { hasOwnProperty: t2 } = Object.prototype,
    ld =
      Array.from ||
      function (t) {
        const e = [];
        return t.forEach((n) => e.push(n)), e;
      };
  function ud(t) {
    const { unsubscribe: e } = t;
    typeof e == 'function' && ((t.unsubscribe = void 0), e());
  }
  const ro = [],
    n2 = 100;
  function Si(t, e) {
    if (!t) throw new Error(e || 'assertion failure');
  }
  function Wx(t, e) {
    const n = t.length;
    return n > 0 && n === e.length && t[n - 1] === e[n - 1];
  }
  function $x(t) {
    switch (t.length) {
      case 0:
        throw new Error('unknown value');
      case 1:
        return t[0];
      case 2:
        throw t[1];
    }
  }
  function Qx(t) {
    return t.slice(0);
  }
  class ru {
    constructor(e) {
      (this.fn = e),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++ru.count;
    }
    peek() {
      if (this.value.length === 1 && !Gn(this)) return gm(this), this.value[0];
    }
    recompute(e) {
      return Si(!this.recomputing, 'already recomputing'), gm(this), Gn(this) ? r2(this, e) : $x(this.value);
    }
    setDirty() {
      this.dirty || ((this.dirty = !0), Hx(this), ud(this));
    }
    dispose() {
      this.setDirty(),
        Xx(this),
        cd(this, (e, n) => {
          e.setDirty(), Jx(e, this);
        });
    }
    forget() {
      this.dispose();
    }
    dependOn(e) {
      e.add(this), this.deps || (this.deps = ro.pop() || new Set()), this.deps.add(e);
    }
    forgetDeps() {
      this.deps &&
        (ld(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), ro.push(this.deps), (this.deps = null));
    }
  }
  ru.count = 0;
  function gm(t) {
    const e = nu.getValue();
    if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), Gn(t) ? Yx(e, t) : Gx(e, t), e;
  }
  function r2(t, e) {
    return Xx(t), nu.withValue(t, i2, [t, e]), o2(t, e) && s2(t), $x(t.value);
  }
  function i2(t, e) {
    t.recomputing = !0;
    const { normalizeResult: n } = t;
    let r;
    n && t.value.length === 1 && (r = Qx(t.value)), (t.value.length = 0);
    try {
      if (((t.value[0] = t.fn.apply(null, e)), n && r && !Wx(r, t.value)))
        try {
          t.value[0] = n(t.value[0], r[0]);
        } catch {}
    } catch (i) {
      t.value[1] = i;
    }
    t.recomputing = !1;
  }
  function Gn(t) {
    return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
  }
  function s2(t) {
    (t.dirty = !1), !Gn(t) && qx(t);
  }
  function Hx(t) {
    cd(t, Yx);
  }
  function qx(t) {
    cd(t, Gx);
  }
  function cd(t, e) {
    const n = t.parents.size;
    if (n) {
      const r = ld(t.parents);
      for (let i = 0; i < n; ++i) e(r[i], t);
    }
  }
  function Yx(t, e) {
    Si(t.childValues.has(e)), Si(Gn(e));
    const n = !Gn(t);
    if (!t.dirtyChildren) t.dirtyChildren = ro.pop() || new Set();
    else if (t.dirtyChildren.has(e)) return;
    t.dirtyChildren.add(e), n && Hx(t);
  }
  function Gx(t, e) {
    Si(t.childValues.has(e)), Si(!Gn(e));
    const n = t.childValues.get(e);
    n.length === 0 ? t.childValues.set(e, Qx(e.value)) : Wx(n, e.value) || t.setDirty(), Kx(t, e), !Gn(t) && qx(t);
  }
  function Kx(t, e) {
    const n = t.dirtyChildren;
    n && (n.delete(e), n.size === 0 && (ro.length < n2 && ro.push(n), (t.dirtyChildren = null)));
  }
  function Xx(t) {
    t.childValues.size > 0 &&
      t.childValues.forEach((e, n) => {
        Jx(t, n);
      }),
      t.forgetDeps(),
      Si(t.dirtyChildren === null);
  }
  function Jx(t, e) {
    e.parents.delete(t), t.childValues.delete(e), Kx(t, e);
  }
  function o2(t, e) {
    if (typeof t.subscribe == 'function')
      try {
        ud(t), (t.unsubscribe = t.subscribe.apply(null, e));
      } catch {
        return t.setDirty(), !1;
      }
    return !0;
  }
  const a2 = { setDirty: !0, dispose: !0, forget: !0 };
  function Zx(t) {
    const e = new Map();
    function n(r) {
      const i = nu.getValue();
      if (i) {
        let s = e.get(r);
        s || e.set(r, (s = new Set())), i.dependOn(s);
      }
    }
    return (
      (n.dirty = function (i, s) {
        const o = e.get(i);
        if (o) {
          const a = s && t2.call(a2, s) ? s : 'setDirty';
          ld(o).forEach((l) => l[a]()), e.delete(i), ud(o);
        }
      }),
      n
    );
  }
  let mm;
  function l2(...t) {
    return (mm || (mm = new ad(typeof WeakMap == 'function'))).lookupArray(t);
  }
  const Hu = new Set();
  function io(
    t,
    {
      max: e = Math.pow(2, 16),
      keyArgs: n,
      makeCacheKey: r = l2,
      normalizeResult: i,
      subscribe: s,
      cache: o = hf,
    } = Object.create(null),
  ) {
    const a = typeof o == 'function' ? new o(e, (h) => h.dispose()) : o,
      l = function () {
        const h = r.apply(null, n ? n.apply(null, arguments) : arguments);
        if (h === void 0) return t.apply(null, arguments);
        let d = a.get(h);
        d || (a.set(h, (d = new ru(t))), (d.normalizeResult = i), (d.subscribe = s), (d.forget = () => a.delete(h)));
        const g = d.recompute(Array.prototype.slice.call(arguments));
        return a.set(h, d), Hu.add(a), nu.hasValue() || (Hu.forEach((v) => v.clean()), Hu.clear()), g;
      };
    Object.defineProperty(l, 'size', { get: () => a.size, configurable: !1, enumerable: !1 }),
      Object.freeze((l.options = { max: e, keyArgs: n, makeCacheKey: r, normalizeResult: i, subscribe: s, cache: a }));
    function u(h) {
      const d = h && a.get(h);
      d && d.setDirty();
    }
    (l.dirtyKey = u),
      (l.dirty = function () {
        u(r.apply(null, arguments));
      });
    function c(h) {
      const d = h && a.get(h);
      if (d) return d.peek();
    }
    (l.peekKey = c),
      (l.peek = function () {
        return c(r.apply(null, arguments));
      });
    function f(h) {
      return h ? a.delete(h) : !1;
    }
    return (
      (l.forgetKey = f),
      (l.forget = function () {
        return f(r.apply(null, arguments));
      }),
      (l.makeCacheKey = r),
      (l.getKey = n
        ? function () {
            return r.apply(null, n.apply(null, arguments));
          }
        : r),
      Object.freeze(l)
    );
  }
  function u2(t) {
    return t;
  }
  var eb = (function () {
      function t(e, n) {
        n === void 0 && (n = Object.create(null)),
          (this.resultCache = Rx ? new WeakSet() : new Set()),
          (this.transform = e),
          n.getCacheKey && (this.getCacheKey = n.getCacheKey),
          (this.cached = n.cache !== !1),
          this.resetCache();
      }
      return (
        (t.prototype.getCacheKey = function (e) {
          return [e];
        }),
        (t.identity = function () {
          return new t(u2, { cache: !1 });
        }),
        (t.split = function (e, n, r) {
          return (
            r === void 0 && (r = t.identity()),
            Object.assign(
              new t(
                function (i) {
                  var s = e(i) ? n : r;
                  return s.transformDocument(i);
                },
                { cache: !1 },
              ),
              { left: n, right: r },
            )
          );
        }),
        (t.prototype.resetCache = function () {
          var e = this;
          if (this.cached) {
            var n = new Ri(Ai);
            this.performWork = io(t.prototype.performWork.bind(this), {
              makeCacheKey: function (r) {
                var i = e.getCacheKey(r);
                if (i) return F(Array.isArray(i), 69), n.lookupArray(i);
              },
              max: Yt['documentTransform.cache'],
              cache: _l,
            });
          }
        }),
        (t.prototype.performWork = function (e) {
          return yo(e), this.transform(e);
        }),
        (t.prototype.transformDocument = function (e) {
          if (this.resultCache.has(e)) return e;
          var n = this.performWork(e);
          return this.resultCache.add(n), n;
        }),
        (t.prototype.concat = function (e) {
          var n = this;
          return Object.assign(
            new t(
              function (r) {
                return e.transformDocument(n.transformDocument(r));
              },
              { cache: !1 },
            ),
            { left: this, right: e },
          );
        }),
        t
      );
    })(),
    Es,
    iu = Object.assign(
      function (t) {
        var e = Es.get(t);
        return e || ((e = iC(t)), Es.set(t, e)), e;
      },
      {
        reset: function () {
          Es = new id(Yt.print || 2e3);
        },
      },
    );
  iu.reset();
  globalThis.__DEV__ !== !1 &&
    sd('print', function () {
      return Es ? Es.size : 0;
    });
  var be = Array.isArray;
  function Et(t) {
    return Array.isArray(t) && t.length > 0;
  }
  var vm = { kind: A.FIELD, name: { kind: A.NAME, value: '__typename' } };
  function tb(t, e) {
    return (
      !t ||
      t.selectionSet.selections.every(function (n) {
        return n.kind === A.FRAGMENT_SPREAD && tb(e[n.name.value], e);
      })
    );
  }
  function c2(t) {
    return tb(xo(t) || qC(t), Jl(tu(t))) ? null : t;
  }
  function f2(t) {
    var e = new Map(),
      n = new Map();
    return (
      t.forEach(function (r) {
        r && (r.name ? e.set(r.name, r) : r.test && n.set(r.test, r));
      }),
      function (r) {
        var i = e.get(r.name.value);
        return (
          !i &&
            n.size &&
            n.forEach(function (s, o) {
              o(r) && (i = s);
            }),
          i
        );
      }
    );
  }
  function ym(t) {
    var e = new Map();
    return function (r) {
      r === void 0 && (r = t);
      var i = e.get(r);
      return i || e.set(r, (i = { variables: new Set(), fragmentSpreads: new Set() })), i;
    };
  }
  function nb(t, e) {
    yo(e);
    for (
      var n = ym(''),
        r = ym(''),
        i = function (p) {
          for (var m = 0, y = void 0; m < p.length && (y = p[m]); ++m)
            if (!be(y)) {
              if (y.kind === A.OPERATION_DEFINITION) return n(y.name && y.name.value);
              if (y.kind === A.FRAGMENT_DEFINITION) return r(y.name.value);
            }
          return globalThis.__DEV__ !== !1 && F.error(86), null;
        },
        s = 0,
        o = e.definitions.length - 1;
      o >= 0;
      --o
    )
      e.definitions[o].kind === A.OPERATION_DEFINITION && ++s;
    var a = f2(t),
      l = function (p) {
        return (
          Et(p) &&
          p.map(a).some(function (m) {
            return m && m.remove;
          })
        );
      },
      u = new Map(),
      c = !1,
      f = {
        enter: function (p) {
          if (l(p.directives)) return (c = !0), null;
        },
      },
      h = hn(e, {
        Field: f,
        InlineFragment: f,
        VariableDefinition: {
          enter: function () {
            return !1;
          },
        },
        Variable: {
          enter: function (p, m, y, b, _) {
            var S = i(_);
            S && S.variables.add(p.name.value);
          },
        },
        FragmentSpread: {
          enter: function (p, m, y, b, _) {
            if (l(p.directives)) return (c = !0), null;
            var S = i(_);
            S && S.fragmentSpreads.add(p.name.value);
          },
        },
        FragmentDefinition: {
          enter: function (p, m, y, b) {
            u.set(JSON.stringify(b), p);
          },
          leave: function (p, m, y, b) {
            var _ = u.get(JSON.stringify(b));
            if (p === _) return p;
            if (
              s > 0 &&
              p.selectionSet.selections.every(function (S) {
                return S.kind === A.FIELD && S.name.value === '__typename';
              })
            )
              return (r(p.name.value).removed = !0), (c = !0), null;
          },
        },
        Directive: {
          leave: function (p) {
            if (a(p)) return (c = !0), null;
          },
        },
      });
    if (!c) return e;
    var d = function (p) {
        return (
          p.transitiveVars ||
            ((p.transitiveVars = new Set(p.variables)),
            p.removed ||
              p.fragmentSpreads.forEach(function (m) {
                d(r(m)).transitiveVars.forEach(function (y) {
                  p.transitiveVars.add(y);
                });
              })),
          p
        );
      },
      g = new Set();
    h.definitions.forEach(function (p) {
      p.kind === A.OPERATION_DEFINITION
        ? d(n(p.name && p.name.value)).fragmentSpreads.forEach(function (m) {
            g.add(m);
          })
        : p.kind === A.FRAGMENT_DEFINITION && s === 0 && !r(p.name.value).removed && g.add(p.name.value);
    }),
      g.forEach(function (p) {
        d(r(p)).fragmentSpreads.forEach(function (m) {
          g.add(m);
        });
      });
    var v = function (p) {
        return !!(!g.has(p) || r(p).removed);
      },
      x = {
        enter: function (p) {
          if (v(p.name.value)) return null;
        },
      };
    return c2(
      hn(h, {
        FragmentSpread: x,
        FragmentDefinition: x,
        OperationDefinition: {
          leave: function (p) {
            if (p.variableDefinitions) {
              var m = d(n(p.name && p.name.value)).transitiveVars;
              if (m.size < p.variableDefinitions.length)
                return k(k({}, p), {
                  variableDefinitions: p.variableDefinitions.filter(function (y) {
                    return m.has(y.variable.name.value);
                  }),
                });
            }
          },
        },
      }),
    );
  }
  var fd = Object.assign(
    function (t) {
      return hn(t, {
        SelectionSet: {
          enter: function (e, n, r) {
            if (!(r && r.kind === A.OPERATION_DEFINITION)) {
              var i = e.selections;
              if (i) {
                var s = i.some(function (a) {
                  return Yn(a) && (a.name.value === '__typename' || a.name.value.lastIndexOf('__', 0) === 0);
                });
                if (!s) {
                  var o = r;
                  if (
                    !(
                      Yn(o) &&
                      o.directives &&
                      o.directives.some(function (a) {
                        return a.name.value === 'export';
                      })
                    )
                  )
                    return k(k({}, e), { selections: lt(lt([], i, !0), [vm], !1) });
                }
              }
            }
          },
        },
      });
    },
    {
      added: function (t) {
        return t === vm;
      },
    },
  );
  function h2(t) {
    var e = bo(t),
      n = e.operation;
    if (n === 'query') return t;
    var r = hn(t, {
      OperationDefinition: {
        enter: function (i) {
          return k(k({}, i), { operation: 'query' });
        },
      },
    });
    return r;
  }
  function rb(t) {
    yo(t);
    var e = nb(
      [
        {
          test: function (n) {
            return n.name.value === 'client';
          },
          remove: !0,
        },
      ],
      t,
    );
    return e;
  }
  var d2 = Object.prototype.hasOwnProperty;
  function xm() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return su(t);
  }
  function su(t) {
    var e = t[0] || {},
      n = t.length;
    if (n > 1) for (var r = new Kn(), i = 1; i < n; ++i) e = r.merge(e, t[i]);
    return e;
  }
  var p2 = function (t, e, n) {
      return this.merge(t[n], e[n]);
    },
    Kn = (function () {
      function t(e) {
        e === void 0 && (e = p2), (this.reconciler = e), (this.isObject = xe), (this.pastCopies = new Set());
      }
      return (
        (t.prototype.merge = function (e, n) {
          for (var r = this, i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
          return xe(n) && xe(e)
            ? (Object.keys(n).forEach(function (o) {
                if (d2.call(e, o)) {
                  var a = e[o];
                  if (n[o] !== a) {
                    var l = r.reconciler.apply(r, lt([e, n, o], i, !1));
                    l !== a && ((e = r.shallowCopyForMerge(e)), (e[o] = l));
                  }
                } else (e = r.shallowCopyForMerge(e)), (e[o] = n[o]);
              }),
              e)
            : n;
        }),
        (t.prototype.shallowCopyForMerge = function (e) {
          return (
            xe(e) &&
              (this.pastCopies.has(e) ||
                (Array.isArray(e) ? (e = e.slice(0)) : (e = k({ __proto__: Object.getPrototypeOf(e) }, e)),
                this.pastCopies.add(e))),
            e
          );
        }),
        t
      );
    })();
  function g2(t, e) {
    var n = (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
    if (n) return (n = n.call(t)).next.bind(n);
    if (Array.isArray(t) || (n = m2(t)) || e) {
      n && (t = n);
      var r = 0;
      return function () {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function m2(t, e) {
    if (t) {
      if (typeof t == 'string') return bm(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if ((n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(t);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bm(t, e);
    }
  }
  function bm(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function _m(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function hd(t, e, n) {
    return e && _m(t.prototype, e), n && _m(t, n), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
  }
  var dd = function () {
      return typeof Symbol == 'function';
    },
    pd = function (t) {
      return dd() && !!Symbol[t];
    },
    gd = function (t) {
      return pd(t) ? Symbol[t] : '@@' + t;
    };
  dd() && !pd('observable') && (Symbol.observable = Symbol('observable'));
  var v2 = gd('iterator'),
    yf = gd('observable'),
    ib = gd('species');
  function wl(t, e) {
    var n = t[e];
    if (n != null) {
      if (typeof n != 'function') throw new TypeError(n + ' is not a function');
      return n;
    }
  }
  function Xi(t) {
    var e = t.constructor;
    return e !== void 0 && ((e = e[ib]), e === null && (e = void 0)), e !== void 0 ? e : oe;
  }
  function y2(t) {
    return t instanceof oe;
  }
  function ki(t) {
    ki.log
      ? ki.log(t)
      : setTimeout(function () {
          throw t;
        });
  }
  function ka(t) {
    Promise.resolve().then(function () {
      try {
        t();
      } catch (e) {
        ki(e);
      }
    });
  }
  function sb(t) {
    var e = t._cleanup;
    if (e !== void 0 && ((t._cleanup = void 0), !!e))
      try {
        if (typeof e == 'function') e();
        else {
          var n = wl(e, 'unsubscribe');
          n && n.call(e);
        }
      } catch (r) {
        ki(r);
      }
  }
  function xf(t) {
    (t._observer = void 0), (t._queue = void 0), (t._state = 'closed');
  }
  function x2(t) {
    var e = t._queue;
    if (e) {
      (t._queue = void 0), (t._state = 'ready');
      for (var n = 0; n < e.length && (ob(t, e[n].type, e[n].value), t._state !== 'closed'); ++n);
    }
  }
  function ob(t, e, n) {
    t._state = 'running';
    var r = t._observer;
    try {
      var i = wl(r, e);
      switch (e) {
        case 'next':
          i && i.call(r, n);
          break;
        case 'error':
          if ((xf(t), i)) i.call(r, n);
          else throw n;
          break;
        case 'complete':
          xf(t), i && i.call(r);
          break;
      }
    } catch (s) {
      ki(s);
    }
    t._state === 'closed' ? sb(t) : t._state === 'running' && (t._state = 'ready');
  }
  function qu(t, e, n) {
    if (t._state !== 'closed') {
      if (t._state === 'buffering') {
        t._queue.push({ type: e, value: n });
        return;
      }
      if (t._state !== 'ready') {
        (t._state = 'buffering'),
          (t._queue = [{ type: e, value: n }]),
          ka(function () {
            return x2(t);
          });
        return;
      }
      ob(t, e, n);
    }
  }
  var b2 = (function () {
      function t(n, r) {
        (this._cleanup = void 0), (this._observer = n), (this._queue = void 0), (this._state = 'initializing');
        var i = new _2(this);
        try {
          this._cleanup = r.call(void 0, i);
        } catch (s) {
          i.error(s);
        }
        this._state === 'initializing' && (this._state = 'ready');
      }
      var e = t.prototype;
      return (
        (e.unsubscribe = function () {
          this._state !== 'closed' && (xf(this), sb(this));
        }),
        hd(t, [
          {
            key: 'closed',
            get: function () {
              return this._state === 'closed';
            },
          },
        ]),
        t
      );
    })(),
    _2 = (function () {
      function t(n) {
        this._subscription = n;
      }
      var e = t.prototype;
      return (
        (e.next = function (r) {
          qu(this._subscription, 'next', r);
        }),
        (e.error = function (r) {
          qu(this._subscription, 'error', r);
        }),
        (e.complete = function () {
          qu(this._subscription, 'complete');
        }),
        hd(t, [
          {
            key: 'closed',
            get: function () {
              return this._subscription._state === 'closed';
            },
          },
        ]),
        t
      );
    })(),
    oe = (function () {
      function t(n) {
        if (!(this instanceof t)) throw new TypeError('Observable cannot be called as a function');
        if (typeof n != 'function') throw new TypeError('Observable initializer must be a function');
        this._subscriber = n;
      }
      var e = t.prototype;
      return (
        (e.subscribe = function (r) {
          return (
            (typeof r != 'object' || r === null) && (r = { next: r, error: arguments[1], complete: arguments[2] }),
            new b2(r, this._subscriber)
          );
        }),
        (e.forEach = function (r) {
          var i = this;
          return new Promise(function (s, o) {
            if (typeof r != 'function') {
              o(new TypeError(r + ' is not a function'));
              return;
            }
            function a() {
              l.unsubscribe(), s();
            }
            var l = i.subscribe({
              next: function (u) {
                try {
                  r(u, a);
                } catch (c) {
                  o(c), l.unsubscribe();
                }
              },
              error: o,
              complete: s,
            });
          });
        }),
        (e.map = function (r) {
          var i = this;
          if (typeof r != 'function') throw new TypeError(r + ' is not a function');
          var s = Xi(this);
          return new s(function (o) {
            return i.subscribe({
              next: function (a) {
                try {
                  a = r(a);
                } catch (l) {
                  return o.error(l);
                }
                o.next(a);
              },
              error: function (a) {
                o.error(a);
              },
              complete: function () {
                o.complete();
              },
            });
          });
        }),
        (e.filter = function (r) {
          var i = this;
          if (typeof r != 'function') throw new TypeError(r + ' is not a function');
          var s = Xi(this);
          return new s(function (o) {
            return i.subscribe({
              next: function (a) {
                try {
                  if (!r(a)) return;
                } catch (l) {
                  return o.error(l);
                }
                o.next(a);
              },
              error: function (a) {
                o.error(a);
              },
              complete: function () {
                o.complete();
              },
            });
          });
        }),
        (e.reduce = function (r) {
          var i = this;
          if (typeof r != 'function') throw new TypeError(r + ' is not a function');
          var s = Xi(this),
            o = arguments.length > 1,
            a = !1,
            l = arguments[1],
            u = l;
          return new s(function (c) {
            return i.subscribe({
              next: function (f) {
                var h = !a;
                if (((a = !0), !h || o))
                  try {
                    u = r(u, f);
                  } catch (d) {
                    return c.error(d);
                  }
                else u = f;
              },
              error: function (f) {
                c.error(f);
              },
              complete: function () {
                if (!a && !o) return c.error(new TypeError('Cannot reduce an empty sequence'));
                c.next(u), c.complete();
              },
            });
          });
        }),
        (e.concat = function () {
          for (var r = this, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
          var a = Xi(this);
          return new a(function (l) {
            var u,
              c = 0;
            function f(h) {
              u = h.subscribe({
                next: function (d) {
                  l.next(d);
                },
                error: function (d) {
                  l.error(d);
                },
                complete: function () {
                  c === s.length ? ((u = void 0), l.complete()) : f(a.from(s[c++]));
                },
              });
            }
            return (
              f(r),
              function () {
                u && (u.unsubscribe(), (u = void 0));
              }
            );
          });
        }),
        (e.flatMap = function (r) {
          var i = this;
          if (typeof r != 'function') throw new TypeError(r + ' is not a function');
          var s = Xi(this);
          return new s(function (o) {
            var a = [],
              l = i.subscribe({
                next: function (c) {
                  if (r)
                    try {
                      c = r(c);
                    } catch (h) {
                      return o.error(h);
                    }
                  var f = s.from(c).subscribe({
                    next: function (h) {
                      o.next(h);
                    },
                    error: function (h) {
                      o.error(h);
                    },
                    complete: function () {
                      var h = a.indexOf(f);
                      h >= 0 && a.splice(h, 1), u();
                    },
                  });
                  a.push(f);
                },
                error: function (c) {
                  o.error(c);
                },
                complete: function () {
                  u();
                },
              });
            function u() {
              l.closed && a.length === 0 && o.complete();
            }
            return function () {
              a.forEach(function (c) {
                return c.unsubscribe();
              }),
                l.unsubscribe();
            };
          });
        }),
        (e[yf] = function () {
          return this;
        }),
        (t.from = function (r) {
          var i = typeof this == 'function' ? this : t;
          if (r == null) throw new TypeError(r + ' is not an object');
          var s = wl(r, yf);
          if (s) {
            var o = s.call(r);
            if (Object(o) !== o) throw new TypeError(o + ' is not an object');
            return y2(o) && o.constructor === i
              ? o
              : new i(function (a) {
                  return o.subscribe(a);
                });
          }
          if (pd('iterator') && ((s = wl(r, v2)), s))
            return new i(function (a) {
              ka(function () {
                if (!a.closed) {
                  for (var l = g2(s.call(r)), u; !(u = l()).done; ) {
                    var c = u.value;
                    if ((a.next(c), a.closed)) return;
                  }
                  a.complete();
                }
              });
            });
          if (Array.isArray(r))
            return new i(function (a) {
              ka(function () {
                if (!a.closed) {
                  for (var l = 0; l < r.length; ++l) if ((a.next(r[l]), a.closed)) return;
                  a.complete();
                }
              });
            });
          throw new TypeError(r + ' is not observable');
        }),
        (t.of = function () {
          for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          var o = typeof this == 'function' ? this : t;
          return new o(function (a) {
            ka(function () {
              if (!a.closed) {
                for (var l = 0; l < i.length; ++l) if ((a.next(i[l]), a.closed)) return;
                a.complete();
              }
            });
          });
        }),
        hd(t, null, [
          {
            key: ib,
            get: function () {
              return this;
            },
          },
        ]),
        t
      );
    })();
  dd() &&
    Object.defineProperty(oe, Symbol('extensions'), { value: { symbol: yf, hostReportError: ki }, configurable: !0 });
  function w2(t) {
    var e,
      n = t.Symbol;
    if (typeof n == 'function')
      if (n.observable) e = n.observable;
      else {
        typeof n.for == 'function'
          ? (e = n.for('https://github.com/benlesh/symbol-observable'))
          : (e = n('https://github.com/benlesh/symbol-observable'));
        try {
          n.observable = e;
        } catch {}
      }
    else e = '@@observable';
    return e;
  }
  var Fr;
  typeof self < 'u'
    ? (Fr = self)
    : typeof window < 'u'
      ? (Fr = window)
      : typeof global < 'u'
        ? (Fr = global)
        : typeof Lf < 'u'
          ? (Fr = Lf)
          : (Fr = Function('return this')());
  w2(Fr);
  var wm = oe.prototype,
    Sm = '@@observable';
  wm[Sm] ||
    (wm[Sm] = function () {
      return this;
    });
  var S2 = Object.prototype.toString;
  function ab(t) {
    return bf(t);
  }
  function bf(t, e) {
    switch (S2.call(t)) {
      case '[object Array]': {
        if (((e = e || new Map()), e.has(t))) return e.get(t);
        var n = t.slice(0);
        return (
          e.set(t, n),
          n.forEach(function (i, s) {
            n[s] = bf(i, e);
          }),
          n
        );
      }
      case '[object Object]': {
        if (((e = e || new Map()), e.has(t))) return e.get(t);
        var r = Object.create(Object.getPrototypeOf(t));
        return (
          e.set(t, r),
          Object.keys(t).forEach(function (i) {
            r[i] = bf(t[i], e);
          }),
          r
        );
      }
      default:
        return t;
    }
  }
  function k2(t) {
    var e = new Set([t]);
    return (
      e.forEach(function (n) {
        xe(n) &&
          E2(n) === n &&
          Object.getOwnPropertyNames(n).forEach(function (r) {
            xe(n[r]) && e.add(n[r]);
          });
      }),
      t
    );
  }
  function E2(t) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t))
      try {
        Object.freeze(t);
      } catch (e) {
        if (e instanceof TypeError) return null;
        throw e;
      }
    return t;
  }
  function so(t) {
    return globalThis.__DEV__ !== !1 && k2(t), t;
  }
  function Os(t, e, n) {
    var r = [];
    t.forEach(function (i) {
      return i[e] && r.push(i);
    }),
      r.forEach(function (i) {
        return i[e](n);
      });
  }
  function Yu(t, e, n) {
    return new oe(function (r) {
      var i = {
        then: function (l) {
          return new Promise(function (u) {
            return u(l());
          });
        },
      };
      function s(l, u) {
        return function (c) {
          if (l) {
            var f = function () {
              return r.closed ? 0 : l(c);
            };
            i = i.then(f, f).then(
              function (h) {
                return r.next(h);
              },
              function (h) {
                return r.error(h);
              },
            );
          } else r[u](c);
        };
      }
      var o = {
          next: s(e, 'next'),
          error: s(n, 'error'),
          complete: function () {
            i.then(function () {
              return r.complete();
            });
          },
        },
        a = t.subscribe(o);
      return function () {
        return a.unsubscribe();
      };
    });
  }
  function lb(t) {
    function e(n) {
      Object.defineProperty(t, n, { value: oe });
    }
    return rd && Symbol.species && e(Symbol.species), e('@@species'), t;
  }
  function km(t) {
    return t && typeof t.then == 'function';
  }
  var jr = (function (t) {
    Gt(e, t);
    function e(n) {
      var r =
        t.call(this, function (i) {
          return (
            r.addObserver(i),
            function () {
              return r.removeObserver(i);
            }
          );
        }) || this;
      return (
        (r.observers = new Set()),
        (r.promise = new Promise(function (i, s) {
          (r.resolve = i), (r.reject = s);
        })),
        (r.handlers = {
          next: function (i) {
            r.sub !== null && ((r.latest = ['next', i]), r.notify('next', i), Os(r.observers, 'next', i));
          },
          error: function (i) {
            var s = r.sub;
            s !== null &&
              (s &&
                setTimeout(function () {
                  return s.unsubscribe();
                }),
              (r.sub = null),
              (r.latest = ['error', i]),
              r.reject(i),
              r.notify('error', i),
              Os(r.observers, 'error', i));
          },
          complete: function () {
            var i = r,
              s = i.sub,
              o = i.sources,
              a = o === void 0 ? [] : o;
            if (s !== null) {
              var l = a.shift();
              l
                ? km(l)
                  ? l.then(function (u) {
                      return (r.sub = u.subscribe(r.handlers));
                    }, r.handlers.error)
                  : (r.sub = l.subscribe(r.handlers))
                : (s &&
                    setTimeout(function () {
                      return s.unsubscribe();
                    }),
                  (r.sub = null),
                  r.latest && r.latest[0] === 'next' ? r.resolve(r.latest[1]) : r.resolve(),
                  r.notify('complete'),
                  Os(r.observers, 'complete'));
            }
          },
        }),
        (r.nextResultListeners = new Set()),
        (r.cancel = function (i) {
          r.reject(i), (r.sources = []), r.handlers.error(i);
        }),
        r.promise.catch(function (i) {}),
        typeof n == 'function' && (n = [new oe(n)]),
        km(n)
          ? n.then(function (i) {
              return r.start(i);
            }, r.handlers.error)
          : r.start(n),
        r
      );
    }
    return (
      (e.prototype.start = function (n) {
        this.sub === void 0 && ((this.sources = Array.from(n)), this.handlers.complete());
      }),
      (e.prototype.deliverLastMessage = function (n) {
        if (this.latest) {
          var r = this.latest[0],
            i = n[r];
          i && i.call(n, this.latest[1]), this.sub === null && r === 'next' && n.complete && n.complete();
        }
      }),
      (e.prototype.addObserver = function (n) {
        this.observers.has(n) || (this.deliverLastMessage(n), this.observers.add(n));
      }),
      (e.prototype.removeObserver = function (n) {
        this.observers.delete(n) && this.observers.size < 1 && this.handlers.complete();
      }),
      (e.prototype.notify = function (n, r) {
        var i = this.nextResultListeners;
        i.size &&
          ((this.nextResultListeners = new Set()),
          i.forEach(function (s) {
            return s(n, r);
          }));
      }),
      (e.prototype.beforeNext = function (n) {
        var r = !1;
        this.nextResultListeners.add(function (i, s) {
          r || ((r = !0), n(i, s));
        });
      }),
      e
    );
  })(oe);
  lb(jr);
  function fi(t) {
    return 'incremental' in t;
  }
  function O2(t) {
    return 'hasNext' in t && 'data' in t;
  }
  function T2(t) {
    return fi(t) || O2(t);
  }
  function C2(t) {
    return xe(t) && 'payload' in t;
  }
  function ub(t, e) {
    var n = t,
      r = new Kn();
    return (
      fi(e) &&
        Et(e.incremental) &&
        e.incremental.forEach(function (i) {
          for (var s = i.data, o = i.path, a = o.length - 1; a >= 0; --a) {
            var l = o[a],
              u = !isNaN(+l),
              c = u ? [] : {};
            (c[l] = s), (s = c);
          }
          n = r.merge(n, s);
        }),
      n
    );
  }
  function Ea(t) {
    var e = _f(t);
    return Et(e);
  }
  function _f(t) {
    var e = Et(t.errors) ? t.errors.slice(0) : [];
    return (
      fi(t) &&
        Et(t.incremental) &&
        t.incremental.forEach(function (n) {
          n.errors && e.push.apply(e, n.errors);
        }),
      e
    );
  }
  function Tr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = Object.create(null);
    return (
      t.forEach(function (r) {
        r &&
          Object.keys(r).forEach(function (i) {
            var s = r[i];
            s !== void 0 && (n[i] = s);
          });
      }),
      n
    );
  }
  function Ts(t, e) {
    return Tr(t, e, e.variables && { variables: Tr(k(k({}, t && t.variables), e.variables)) });
  }
  function Gu(t) {
    return new oe(function (e) {
      e.error(t);
    });
  }
  var cb = function (t, e, n) {
    var r = new Error(n);
    throw ((r.name = 'ServerError'), (r.response = t), (r.statusCode = t.status), (r.result = e), r);
  };
  function D2(t) {
    for (
      var e = ['query', 'operationName', 'variables', 'extensions', 'context'], n = 0, r = Object.keys(t);
      n < r.length;
      n++
    ) {
      var i = r[n];
      if (e.indexOf(i) < 0) throw Ke(44, i);
    }
    return t;
  }
  function P2(t, e) {
    var n = k({}, t),
      r = function (s) {
        typeof s == 'function' ? (n = k(k({}, n), s(n))) : (n = k(k({}, n), s));
      },
      i = function () {
        return k({}, n);
      };
    return (
      Object.defineProperty(e, 'setContext', { enumerable: !1, value: r }),
      Object.defineProperty(e, 'getContext', { enumerable: !1, value: i }),
      e
    );
  }
  function N2(t) {
    var e = {
      variables: t.variables || {},
      extensions: t.extensions || {},
      operationName: t.operationName,
      query: t.query,
    };
    return e.operationName || (e.operationName = typeof e.query != 'string' ? vf(e.query) || void 0 : ''), e;
  }
  function M2(t, e) {
    var n = k({}, t),
      r = new Set(Object.keys(t));
    return (
      hn(e, {
        Variable: function (i, s, o) {
          o && o.kind !== 'VariableDefinition' && r.delete(i.name.value);
        },
      }),
      r.forEach(function (i) {
        delete n[i];
      }),
      n
    );
  }
  function Em(t, e) {
    return e ? e(t) : oe.of();
  }
  function Ji(t) {
    return typeof t == 'function' ? new _o(t) : t;
  }
  function sa(t) {
    return t.request.length <= 1;
  }
  var _o = (function () {
      function t(e) {
        e && (this.request = e);
      }
      return (
        (t.empty = function () {
          return new t(function () {
            return oe.of();
          });
        }),
        (t.from = function (e) {
          return e.length === 0
            ? t.empty()
            : e.map(Ji).reduce(function (n, r) {
                return n.concat(r);
              });
        }),
        (t.split = function (e, n, r) {
          var i = Ji(n),
            s = Ji(r || new t(Em)),
            o;
          return (
            sa(i) && sa(s)
              ? (o = new t(function (a) {
                  return e(a) ? i.request(a) || oe.of() : s.request(a) || oe.of();
                }))
              : (o = new t(function (a, l) {
                  return e(a) ? i.request(a, l) || oe.of() : s.request(a, l) || oe.of();
                })),
            Object.assign(o, { left: i, right: s })
          );
        }),
        (t.execute = function (e, n) {
          return e.request(P2(n.context, N2(D2(n)))) || oe.of();
        }),
        (t.concat = function (e, n) {
          var r = Ji(e);
          if (sa(r)) return globalThis.__DEV__ !== !1 && F.warn(36, r), r;
          var i = Ji(n),
            s;
          return (
            sa(i)
              ? (s = new t(function (o) {
                  return (
                    r.request(o, function (a) {
                      return i.request(a) || oe.of();
                    }) || oe.of()
                  );
                }))
              : (s = new t(function (o, a) {
                  return (
                    r.request(o, function (l) {
                      return i.request(l, a) || oe.of();
                    }) || oe.of()
                  );
                })),
            Object.assign(s, { left: r, right: i })
          );
        }),
        (t.prototype.split = function (e, n, r) {
          return this.concat(t.split(e, n, r || new t(Em)));
        }),
        (t.prototype.concat = function (e) {
          return t.concat(this, e);
        }),
        (t.prototype.request = function (e, n) {
          throw Ke(37);
        }),
        (t.prototype.onError = function (e, n) {
          if (n && n.error) return n.error(e), !1;
          throw e;
        }),
        (t.prototype.setOnError = function (e) {
          return (this.onError = e), this;
        }),
        t
      );
    })(),
    wf = _o.execute;
  function I2(t) {
    var e,
      n = t[Symbol.asyncIterator]();
    return (
      (e = {
        next: function () {
          return n.next();
        },
      }),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e
    );
  }
  function R2(t) {
    var e = null,
      n = null,
      r = !1,
      i = [],
      s = [];
    function o(f) {
      if (!n) {
        if (s.length) {
          var h = s.shift();
          if (Array.isArray(h) && h[0]) return h[0]({ value: f, done: !1 });
        }
        i.push(f);
      }
    }
    function a(f) {
      n = f;
      var h = s.slice();
      h.forEach(function (d) {
        d[1](f);
      }),
        !e || e();
    }
    function l() {
      r = !0;
      var f = s.slice();
      f.forEach(function (h) {
        h[0]({ value: void 0, done: !0 });
      }),
        !e || e();
    }
    (e = function () {
      (e = null),
        t.removeListener('data', o),
        t.removeListener('error', a),
        t.removeListener('end', l),
        t.removeListener('finish', l),
        t.removeListener('close', l);
    }),
      t.on('data', o),
      t.on('error', a),
      t.on('end', l),
      t.on('finish', l),
      t.on('close', l);
    function u() {
      return new Promise(function (f, h) {
        if (n) return h(n);
        if (i.length) return f({ value: i.shift(), done: !1 });
        if (r) return f({ value: void 0, done: !0 });
        s.push([f, h]);
      });
    }
    var c = {
      next: function () {
        return u();
      },
    };
    return (
      Xl &&
        (c[Symbol.asyncIterator] = function () {
          return this;
        }),
      c
    );
  }
  function A2(t) {
    var e = !1,
      n = {
        next: function () {
          return e
            ? Promise.resolve({ value: void 0, done: !0 })
            : ((e = !0),
              new Promise(function (r, i) {
                t.then(function (s) {
                  r({ value: s, done: !1 });
                }).catch(i);
              }));
        },
      };
    return (
      Xl &&
        (n[Symbol.asyncIterator] = function () {
          return this;
        }),
      n
    );
  }
  function Om(t) {
    var e = {
      next: function () {
        return t.read();
      },
    };
    return (
      Xl &&
        (e[Symbol.asyncIterator] = function () {
          return this;
        }),
      e
    );
  }
  function L2(t) {
    return !!t.body;
  }
  function F2(t) {
    return !!t.getReader;
  }
  function j2(t) {
    return !!(Xl && t[Symbol.asyncIterator]);
  }
  function z2(t) {
    return !!t.stream;
  }
  function B2(t) {
    return !!t.arrayBuffer;
  }
  function V2(t) {
    return !!t.pipe;
  }
  function U2(t) {
    var e = t;
    if ((L2(t) && (e = t.body), j2(e))) return I2(e);
    if (F2(e)) return Om(e.getReader());
    if (z2(e)) return Om(e.stream().getReader());
    if (B2(e)) return A2(e.arrayBuffer());
    if (V2(e)) return R2(e);
    throw new Error('Unknown body type for responseIterator. Please pass a streamable response.');
  }
  var md = Symbol();
  function W2(t) {
    return t.extensions ? Array.isArray(t.extensions[md]) : !1;
  }
  function fb(t) {
    return t.hasOwnProperty('graphQLErrors');
  }
  var $2 = function (t) {
      var e = lt(lt(lt([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
      return (
        t.networkError && e.push(t.networkError),
        e.map(function (n) {
          return (xe(n) && n.message) || 'Error message not found.';
        }).join(`
`)
      );
    },
    Vt = (function (t) {
      Gt(e, t);
      function e(n) {
        var r = n.graphQLErrors,
          i = n.protocolErrors,
          s = n.clientErrors,
          o = n.networkError,
          a = n.errorMessage,
          l = n.extraInfo,
          u = t.call(this, a) || this;
        return (
          (u.name = 'ApolloError'),
          (u.graphQLErrors = r || []),
          (u.protocolErrors = i || []),
          (u.clientErrors = s || []),
          (u.networkError = o || null),
          (u.message = a || $2(u)),
          (u.extraInfo = l),
          (u.cause =
            lt(lt(lt([o], r || [], !0), i || [], !0), s || [], !0).find(function (c) {
              return !!c;
            }) || null),
          (u.__proto__ = e.prototype),
          u
        );
      }
      return e;
    })(Error),
    Tm = Object.prototype.hasOwnProperty;
  function Q2(t, e) {
    return _n(this, void 0, void 0, function () {
      var n, r, i, s, o, a, l, u, c, f, h, d, g, v, x, p, m, y, b, _, S, E, O, D;
      return wn(this, function (P) {
        switch (P.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error('TextDecoder must be defined in the environment: please import a polyfill.');
            (n = new TextDecoder('utf-8')),
              (r = (D = t.headers) === null || D === void 0 ? void 0 : D.get('content-type')),
              (i = 'boundary='),
              (s =
                r != null && r.includes(i)
                  ? r == null
                    ? void 0
                    : r
                        .substring((r == null ? void 0 : r.indexOf(i)) + i.length)
                        .replace(/['"]/g, '')
                        .replace(/\;(.*)/gm, '')
                        .trim()
                  : '-'),
              (o = `\r
--`.concat(s)),
              (a = ''),
              (l = U2(t)),
              (u = !0),
              (P.label = 1);
          case 1:
            return u ? [4, l.next()] : [3, 3];
          case 2:
            for (
              c = P.sent(),
                f = c.value,
                h = c.done,
                d = typeof f == 'string' ? f : n.decode(f),
                g = a.length - o.length + 1,
                u = !h,
                a += d,
                v = a.indexOf(o, g);
              v > -1;

            ) {
              if (
                ((x = void 0),
                (E = [a.slice(0, v), a.slice(v + o.length)]),
                (x = E[0]),
                (a = E[1]),
                (p = x.indexOf(`\r
\r
`)),
                (m = H2(x.slice(0, p))),
                (y = m['content-type']),
                y && y.toLowerCase().indexOf('application/json') === -1)
              )
                throw new Error('Unsupported patch content type: application/json is required.');
              if (((b = x.slice(p)), b)) {
                if (
                  ((_ = hb(t, b)),
                  Object.keys(_).length > 1 || 'data' in _ || 'incremental' in _ || 'errors' in _ || 'payload' in _)
                )
                  if (C2(_)) {
                    if (((S = {}), 'payload' in _)) {
                      if (Object.keys(_).length === 1 && _.payload === null) return [2];
                      S = k({}, _.payload);
                    }
                    'errors' in _ &&
                      (S = k(k({}, S), {
                        extensions: k(
                          k({}, 'extensions' in S ? S.extensions : null),
                          ((O = {}), (O[md] = _.errors), O),
                        ),
                      })),
                      e(S);
                  } else e(_);
                else if (Object.keys(_).length === 1 && 'hasNext' in _ && !_.hasNext) return [2];
              }
              v = a.indexOf(o);
            }
            return [3, 1];
          case 3:
            return [2];
        }
      });
    });
  }
  function H2(t) {
    var e = {};
    return (
      t
        .split(
          `
`,
        )
        .forEach(function (n) {
          var r = n.indexOf(':');
          if (r > -1) {
            var i = n.slice(0, r).trim().toLowerCase(),
              s = n.slice(r + 1).trim();
            e[i] = s;
          }
        }),
      e
    );
  }
  function hb(t, e) {
    if (t.status >= 300) {
      var n = function () {
        try {
          return JSON.parse(e);
        } catch {
          return e;
        }
      };
      cb(t, n(), 'Response not successful: Received status code '.concat(t.status));
    }
    try {
      return JSON.parse(e);
    } catch (i) {
      var r = i;
      throw ((r.name = 'ServerParseError'), (r.response = t), (r.statusCode = t.status), (r.bodyText = e), r);
    }
  }
  function q2(t, e) {
    t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
  }
  function Y2(t) {
    return function (e) {
      return e
        .text()
        .then(function (n) {
          return hb(e, n);
        })
        .then(function (n) {
          return (
            !Array.isArray(n) &&
              !Tm.call(n, 'data') &&
              !Tm.call(n, 'errors') &&
              cb(
                e,
                n,
                "Server response was missing for query '".concat(
                  Array.isArray(t)
                    ? t.map(function (r) {
                        return r.operationName;
                      })
                    : t.operationName,
                  "'.",
                ),
              ),
            n
          );
        });
    };
  }
  var Sf = function (t, e) {
      var n;
      try {
        n = JSON.stringify(t);
      } catch (i) {
        var r = Ke(40, e, i.message);
        throw ((r.parseError = i), r);
      }
      return n;
    },
    G2 = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
    K2 = { accept: '*/*', 'content-type': 'application/json' },
    X2 = { method: 'POST' },
    J2 = { http: G2, headers: K2, options: X2 },
    Z2 = function (t, e) {
      return e(t);
    };
  function eD(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = {},
      s = {};
    n.forEach(function (f) {
      (i = k(k(k({}, i), f.options), { headers: k(k({}, i.headers), f.headers) })),
        f.credentials && (i.credentials = f.credentials),
        (s = k(k({}, s), f.http));
    }),
      i.headers && (i.headers = tD(i.headers, s.preserveHeaderCase));
    var o = t.operationName,
      a = t.extensions,
      l = t.variables,
      u = t.query,
      c = { operationName: o, variables: l };
    return s.includeExtensions && (c.extensions = a), s.includeQuery && (c.query = e(u, iu)), { options: i, body: c };
  }
  function tD(t, e) {
    if (!e) {
      var n = {};
      return (
        Object.keys(Object(t)).forEach(function (s) {
          n[s.toLowerCase()] = t[s];
        }),
        n
      );
    }
    var r = {};
    Object.keys(Object(t)).forEach(function (s) {
      r[s.toLowerCase()] = { originalName: s, value: t[s] };
    });
    var i = {};
    return (
      Object.keys(r).forEach(function (s) {
        i[r[s].originalName] = r[s].value;
      }),
      i
    );
  }
  var nD = function (t) {
      if (!t && typeof fetch > 'u') throw Ke(38);
    },
    rD = function (t, e) {
      var n = t.getContext(),
        r = n.uri;
      return r || (typeof e == 'function' ? e(t) : e || '/graphql');
    };
  function iD(t, e) {
    var n = [],
      r = function (f, h) {
        n.push(''.concat(f, '=').concat(encodeURIComponent(h)));
      };
    if (('query' in e && r('query', e.query), e.operationName && r('operationName', e.operationName), e.variables)) {
      var i = void 0;
      try {
        i = Sf(e.variables, 'Variables map');
      } catch (f) {
        return { parseError: f };
      }
      r('variables', i);
    }
    if (e.extensions) {
      var s = void 0;
      try {
        s = Sf(e.extensions, 'Extensions map');
      } catch (f) {
        return { parseError: f };
      }
      r('extensions', s);
    }
    var o = '',
      a = t,
      l = t.indexOf('#');
    l !== -1 && ((o = t.substr(l)), (a = t.substr(0, l)));
    var u = a.indexOf('?') === -1 ? '?' : '&',
      c = a + u + n.join('&') + o;
    return { newURI: c };
  }
  var Cm = Nt(function () {
      return fetch;
    }),
    sD = function (t) {
      t === void 0 && (t = {});
      var e = t.uri,
        n = e === void 0 ? '/graphql' : e,
        r = t.fetch,
        i = t.print,
        s = i === void 0 ? Z2 : i,
        o = t.includeExtensions,
        a = t.preserveHeaderCase,
        l = t.useGETForQueries,
        u = t.includeUnusedVariables,
        c = u === void 0 ? !1 : u,
        f = Rt(t, [
          'uri',
          'fetch',
          'print',
          'includeExtensions',
          'preserveHeaderCase',
          'useGETForQueries',
          'includeUnusedVariables',
        ]);
      globalThis.__DEV__ !== !1 && nD(r || Cm);
      var h = {
        http: { includeExtensions: o, preserveHeaderCase: a },
        options: f.fetchOptions,
        credentials: f.credentials,
        headers: f.headers,
      };
      return new _o(function (d) {
        var g = rD(d, n),
          v = d.getContext(),
          x = {};
        if (v.clientAwareness) {
          var p = v.clientAwareness,
            m = p.name,
            y = p.version;
          m && (x['apollographql-client-name'] = m), y && (x['apollographql-client-version'] = y);
        }
        var b = k(k({}, x), v.headers),
          _ = { http: v.http, options: v.fetchOptions, credentials: v.credentials, headers: b };
        if (no(['client'], d.query)) {
          var S = rb(d.query);
          if (!S)
            return Gu(
              new Error(
                'HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`.',
              ),
            );
          d.query = S;
        }
        var E = eD(d, s, J2, h, _),
          O = E.options,
          D = E.body;
        D.variables && !c && (D.variables = M2(D.variables, d.query));
        var P;
        !O.signal && typeof AbortController < 'u' && ((P = new AbortController()), (O.signal = P.signal));
        var j = function (I) {
            return I.kind === 'OperationDefinition' && I.operation === 'mutation';
          },
          z = function (I) {
            return I.kind === 'OperationDefinition' && I.operation === 'subscription';
          },
          U = z(bo(d.query)),
          le = no(['defer'], d.query);
        if ((l && !d.query.definitions.some(j) && (O.method = 'GET'), le || U)) {
          O.headers = O.headers || {};
          var Q = 'multipart/mixed;';
          U && le && globalThis.__DEV__ !== !1 && F.warn(39),
            U
              ? (Q += 'boundary=graphql;subscriptionSpec=1.0,application/json')
              : le && (Q += 'deferSpec=20220824,application/json'),
            (O.headers.accept = Q);
        }
        if (O.method === 'GET') {
          var K = iD(g, D),
            re = K.newURI,
            M = K.parseError;
          if (M) return Gu(M);
          g = re;
        } else
          try {
            O.body = Sf(D, 'Payload');
          } catch (I) {
            return Gu(I);
          }
        return new oe(function (I) {
          var B =
              r ||
              Nt(function () {
                return fetch;
              }) ||
              Cm,
            ee = I.next.bind(I);
          return (
            B(g, O)
              .then(function (Y) {
                var et;
                d.setContext({ response: Y });
                var Ne = (et = Y.headers) === null || et === void 0 ? void 0 : et.get('content-type');
                return Ne !== null && /^multipart\/mixed/i.test(Ne) ? Q2(Y, ee) : Y2(d)(Y).then(ee);
              })
              .then(function () {
                (P = void 0), I.complete();
              })
              .catch(function (Y) {
                (P = void 0), q2(Y, I);
              }),
            function () {
              P && P.abort();
            }
          );
        });
      });
    },
    oD = (function (t) {
      Gt(e, t);
      function e(n) {
        n === void 0 && (n = {});
        var r = t.call(this, sD(n).request) || this;
        return (r.options = n), r;
      }
      return e;
    })(_o);
  const { toString: Dm, hasOwnProperty: aD } = Object.prototype,
    Pm = Function.prototype.toString,
    kf = new Map();
  function X(t, e) {
    try {
      return Ef(t, e);
    } finally {
      kf.clear();
    }
  }
  function Ef(t, e) {
    if (t === e) return !0;
    const n = Dm.call(t),
      r = Dm.call(e);
    if (n !== r) return !1;
    switch (n) {
      case '[object Array]':
        if (t.length !== e.length) return !1;
      case '[object Object]': {
        if (Mm(t, e)) return !0;
        const i = Nm(t),
          s = Nm(e),
          o = i.length;
        if (o !== s.length) return !1;
        for (let a = 0; a < o; ++a) if (!aD.call(e, i[a])) return !1;
        for (let a = 0; a < o; ++a) {
          const l = i[a];
          if (!Ef(t[l], e[l])) return !1;
        }
        return !0;
      }
      case '[object Error]':
        return t.name === e.name && t.message === e.message;
      case '[object Number]':
        if (t !== t) return e !== e;
      case '[object Boolean]':
      case '[object Date]':
        return +t == +e;
      case '[object RegExp]':
      case '[object String]':
        return t == `${e}`;
      case '[object Map]':
      case '[object Set]': {
        if (t.size !== e.size) return !1;
        if (Mm(t, e)) return !0;
        const i = t.entries(),
          s = n === '[object Map]';
        for (;;) {
          const o = i.next();
          if (o.done) break;
          const [a, l] = o.value;
          if (!e.has(a) || (s && !Ef(l, e.get(a)))) return !1;
        }
        return !0;
      }
      case '[object Uint16Array]':
      case '[object Uint8Array]':
      case '[object Uint32Array]':
      case '[object Int32Array]':
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object ArrayBuffer]':
        (t = new Uint8Array(t)), (e = new Uint8Array(e));
      case '[object DataView]': {
        let i = t.byteLength;
        if (i === e.byteLength) for (; i-- && t[i] === e[i]; );
        return i === -1;
      }
      case '[object AsyncFunction]':
      case '[object GeneratorFunction]':
      case '[object AsyncGeneratorFunction]':
      case '[object Function]': {
        const i = Pm.call(t);
        return i !== Pm.call(e) ? !1 : !cD(i, uD);
      }
    }
    return !1;
  }
  function Nm(t) {
    return Object.keys(t).filter(lD, t);
  }
  function lD(t) {
    return this[t] !== void 0;
  }
  const uD = '{ [native code] }';
  function cD(t, e) {
    const n = t.length - e.length;
    return n >= 0 && t.indexOf(e, n) === n;
  }
  function Mm(t, e) {
    let n = kf.get(t);
    if (n) {
      if (n.has(e)) return !0;
    } else kf.set(t, (n = new Set()));
    return n.add(e), !1;
  }
  function db(t, e, n, r) {
    var i = e.data,
      s = Rt(e, ['data']),
      o = n.data,
      a = Rt(n, ['data']);
    return X(s, a) && Oa(bo(t).selectionSet, i, o, { fragmentMap: Jl(tu(t)), variables: r });
  }
  function Oa(t, e, n, r) {
    if (e === n) return !0;
    var i = new Set();
    return t.selections.every(function (s) {
      if (i.has(s) || (i.add(s), !vo(s, r.variables)) || Im(s)) return !0;
      if (Yn(s)) {
        var o = qn(s),
          a = e && e[o],
          l = n && n[o],
          u = s.selectionSet;
        if (!u) return X(a, l);
        var c = Array.isArray(a),
          f = Array.isArray(l);
        if (c !== f) return !1;
        if (c && f) {
          var h = a.length;
          if (l.length !== h) return !1;
          for (var d = 0; d < h; ++d) if (!Oa(u, a[d], l[d], r)) return !1;
          return !0;
        }
        return Oa(u, a, l, r);
      } else {
        var g = Zl(s, r.fragmentMap);
        if (g) return Im(g) ? !0 : Oa(g.selectionSet, e, n, r);
      }
    });
  }
  function Im(t) {
    return !!t.directives && t.directives.some(fD);
  }
  function fD(t) {
    return t.name.value === 'nonreactive';
  }
  var pb = (function () {
    function t() {
      (this.assumeImmutableResults = !1),
        (this.getFragmentDoc = io(mC, { max: Yt['cache.fragmentQueryDocuments'] || 1e3, cache: _l }));
    }
    return (
      (t.prototype.batch = function (e) {
        var n = this,
          r = typeof e.optimistic == 'string' ? e.optimistic : e.optimistic === !1 ? null : void 0,
          i;
        return (
          this.performTransaction(function () {
            return (i = e.update(n));
          }, r),
          i
        );
      }),
      (t.prototype.recordOptimisticTransaction = function (e, n) {
        this.performTransaction(e, n);
      }),
      (t.prototype.transformDocument = function (e) {
        return e;
      }),
      (t.prototype.transformForLink = function (e) {
        return e;
      }),
      (t.prototype.identify = function (e) {}),
      (t.prototype.gc = function () {
        return [];
      }),
      (t.prototype.modify = function (e) {
        return !1;
      }),
      (t.prototype.readQuery = function (e, n) {
        return (
          n === void 0 && (n = !!e.optimistic), this.read(k(k({}, e), { rootId: e.id || 'ROOT_QUERY', optimistic: n }))
        );
      }),
      (t.prototype.watchFragment = function (e) {
        var n = this,
          r = e.fragment,
          i = e.fragmentName,
          s = e.from,
          o = e.optimistic,
          a = o === void 0 ? !0 : o,
          l = Rt(e, ['fragment', 'fragmentName', 'from', 'optimistic']),
          u = this.getFragmentDoc(r, i),
          c = k(k({}, l), {
            returnPartialData: !0,
            id: typeof s > 'u' || typeof s == 'string' ? s : this.identify(s),
            query: u,
            optimistic: a,
          }),
          f;
        return new oe(function (h) {
          return n.watch(
            k(k({}, c), {
              immediate: !0,
              callback: function (d) {
                if (!(f && db(u, { data: f == null ? void 0 : f.result }, { data: d.result }))) {
                  var g = { data: d.result, complete: !!d.complete };
                  d.missing &&
                    (g.missing = su(
                      d.missing.map(function (v) {
                        return v.missing;
                      }),
                    )),
                    (f = d),
                    h.next(g);
                }
              },
            }),
          );
        });
      }),
      (t.prototype.readFragment = function (e, n) {
        return (
          n === void 0 && (n = !!e.optimistic),
          this.read(
            k(k({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: n }),
          )
        );
      }),
      (t.prototype.writeQuery = function (e) {
        var n = e.id,
          r = e.data,
          i = Rt(e, ['id', 'data']);
        return this.write(Object.assign(i, { dataId: n || 'ROOT_QUERY', result: r }));
      }),
      (t.prototype.writeFragment = function (e) {
        var n = e.id,
          r = e.data,
          i = e.fragment,
          s = e.fragmentName,
          o = Rt(e, ['id', 'data', 'fragment', 'fragmentName']);
        return this.write(Object.assign(o, { query: this.getFragmentDoc(i, s), dataId: n, result: r }));
      }),
      (t.prototype.updateQuery = function (e, n) {
        return this.batch({
          update: function (r) {
            var i = r.readQuery(e),
              s = n(i);
            return s == null ? i : (r.writeQuery(k(k({}, e), { data: s })), s);
          },
        });
      }),
      (t.prototype.updateFragment = function (e, n) {
        return this.batch({
          update: function (r) {
            var i = r.readFragment(e),
              s = n(i);
            return s == null ? i : (r.writeFragment(k(k({}, e), { data: s })), s);
          },
        });
      }),
      t
    );
  })();
  globalThis.__DEV__ !== !1 && (pb.prototype.getMemoryInternals = TC);
  var gb = (function (t) {
      Gt(e, t);
      function e(n, r, i, s) {
        var o,
          a = t.call(this, n) || this;
        if (((a.message = n), (a.path = r), (a.query = i), (a.variables = s), Array.isArray(a.path))) {
          a.missing = a.message;
          for (var l = a.path.length - 1; l >= 0; --l) a.missing = ((o = {}), (o[a.path[l]] = a.missing), o);
        } else a.missing = a.path;
        return (a.__proto__ = e.prototype), a;
      }
      return e;
    })(Error),
    Me = Object.prototype.hasOwnProperty;
  function Zi(t) {
    return t == null;
  }
  function mb(t, e) {
    var n = t.__typename,
      r = t.id,
      i = t._id;
    if (
      typeof n == 'string' &&
      (e && (e.keyObject = Zi(r) ? (Zi(i) ? void 0 : { _id: i }) : { id: r }), Zi(r) && !Zi(i) && (r = i), !Zi(r))
    )
      return ''.concat(n, ':').concat(typeof r == 'number' || typeof r == 'string' ? r : JSON.stringify(r));
  }
  var vb = { dataIdFromObject: mb, addTypename: !0, resultCaching: !0, canonizeResults: !1 };
  function hD(t) {
    return Tr(vb, t);
  }
  function yb(t) {
    var e = t.canonizeResults;
    return e === void 0 ? vb.canonizeResults : e;
  }
  function dD(t, e) {
    return J(e) ? t.get(e.__ref, '__typename') : e && e.__typename;
  }
  var xb = /^[_a-z][_0-9a-z]*/i;
  function Xn(t) {
    var e = t.match(xb);
    return e ? e[0] : t;
  }
  function Of(t, e, n) {
    return xe(e)
      ? be(e)
        ? e.every(function (r) {
            return Of(t, r, n);
          })
        : t.selections.every(function (r) {
            if (Yn(r) && vo(r, n)) {
              var i = qn(r);
              return Me.call(e, i) && (!r.selectionSet || Of(r.selectionSet, e[i], n));
            }
            return !0;
          })
      : !1;
  }
  function ei(t) {
    return xe(t) && !J(t) && !be(t);
  }
  function pD() {
    return new Kn();
  }
  function bb(t, e) {
    var n = Jl(tu(t));
    return {
      fragmentMap: n,
      lookupFragment: function (r) {
        var i = n[r];
        return !i && e && (i = e.lookup(r)), i || null;
      },
    };
  }
  var Ta = Object.create(null),
    Ku = function () {
      return Ta;
    },
    Rm = Object.create(null),
    oo = (function () {
      function t(e, n) {
        var r = this;
        (this.policies = e),
          (this.group = n),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (i, s) {
            return so(J(i) ? r.get(i.__ref, s) : i && i[s]);
          }),
          (this.canRead = function (i) {
            return J(i) ? r.has(i.__ref) : typeof i == 'object';
          }),
          (this.toReference = function (i, s) {
            if (typeof i == 'string') return ci(i);
            if (J(i)) return i;
            var o = r.policies.identify(i)[0];
            if (o) {
              var a = ci(o);
              return s && r.merge(o, i), a;
            }
          });
      }
      return (
        (t.prototype.toObject = function () {
          return k({}, this.data);
        }),
        (t.prototype.has = function (e) {
          return this.lookup(e, !0) !== void 0;
        }),
        (t.prototype.get = function (e, n) {
          if ((this.group.depend(e, n), Me.call(this.data, e))) {
            var r = this.data[e];
            if (r && Me.call(r, n)) return r[n];
          }
          if (n === '__typename' && Me.call(this.policies.rootTypenamesById, e))
            return this.policies.rootTypenamesById[e];
          if (this instanceof yn) return this.parent.get(e, n);
        }),
        (t.prototype.lookup = function (e, n) {
          if ((n && this.group.depend(e, '__exists'), Me.call(this.data, e))) return this.data[e];
          if (this instanceof yn) return this.parent.lookup(e, n);
          if (this.policies.rootTypenamesById[e]) return Object.create(null);
        }),
        (t.prototype.merge = function (e, n) {
          var r = this,
            i;
          J(e) && (e = e.__ref), J(n) && (n = n.__ref);
          var s = typeof e == 'string' ? this.lookup((i = e)) : e,
            o = typeof n == 'string' ? this.lookup((i = n)) : n;
          if (o) {
            F(typeof i == 'string', 1);
            var a = new Kn(mD).merge(s, o);
            if (((this.data[i] = a), a !== s && (delete this.refs[i], this.group.caching))) {
              var l = Object.create(null);
              s || (l.__exists = 1),
                Object.keys(o).forEach(function (u) {
                  if (!s || s[u] !== a[u]) {
                    l[u] = 1;
                    var c = Xn(u);
                    c !== u && !r.policies.hasKeyArgs(a.__typename, c) && (l[c] = 1),
                      a[u] === void 0 && !(r instanceof yn) && delete a[u];
                  }
                }),
                l.__typename &&
                  !(s && s.__typename) &&
                  this.policies.rootTypenamesById[i] === a.__typename &&
                  delete l.__typename,
                Object.keys(l).forEach(function (u) {
                  return r.group.dirty(i, u);
                });
            }
          }
        }),
        (t.prototype.modify = function (e, n) {
          var r = this,
            i = this.lookup(e);
          if (i) {
            var s = Object.create(null),
              o = !1,
              a = !0,
              l = {
                DELETE: Ta,
                INVALIDATE: Rm,
                isReference: J,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (u, c) {
                  return r.policies.readField(typeof u == 'string' ? { fieldName: u, from: c || ci(e) } : u, {
                    store: r,
                  });
                },
              };
            if (
              (Object.keys(i).forEach(function (u) {
                var c = Xn(u),
                  f = i[u];
                if (f !== void 0) {
                  var h = typeof n == 'function' ? n : n[u] || n[c];
                  if (h) {
                    var d =
                      h === Ku
                        ? Ta
                        : h(so(f), k(k({}, l), { fieldName: c, storeFieldName: u, storage: r.getStorage(e, u) }));
                    if (d === Rm) r.group.dirty(e, u);
                    else if (
                      (d === Ta && (d = void 0), d !== f && ((s[u] = d), (o = !0), (f = d), globalThis.__DEV__ !== !1))
                    ) {
                      var g = function (_) {
                        if (r.lookup(_.__ref) === void 0) return globalThis.__DEV__ !== !1 && F.warn(2, _), !0;
                      };
                      if (J(d)) g(d);
                      else if (Array.isArray(d))
                        for (var v = !1, x = void 0, p = 0, m = d; p < m.length; p++) {
                          var y = m[p];
                          if (J(y)) {
                            if (((v = !0), g(y))) break;
                          } else if (typeof y == 'object' && y) {
                            var b = r.policies.identify(y)[0];
                            b && (x = y);
                          }
                          if (v && x !== void 0) {
                            globalThis.__DEV__ !== !1 && F.warn(3, x);
                            break;
                          }
                        }
                    }
                  }
                  f !== void 0 && (a = !1);
                }
              }),
              o)
            )
              return (
                this.merge(e, s),
                a &&
                  (this instanceof yn ? (this.data[e] = void 0) : delete this.data[e], this.group.dirty(e, '__exists')),
                !0
              );
          }
          return !1;
        }),
        (t.prototype.delete = function (e, n, r) {
          var i,
            s = this.lookup(e);
          if (s) {
            var o = this.getFieldValue(s, '__typename'),
              a = n && r ? this.policies.getStoreFieldName({ typename: o, fieldName: n, args: r }) : n;
            return this.modify(e, a ? ((i = {}), (i[a] = Ku), i) : Ku);
          }
          return !1;
        }),
        (t.prototype.evict = function (e, n) {
          var r = !1;
          return (
            e.id &&
              (Me.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)),
              this instanceof yn && this !== n && (r = this.parent.evict(e, n) || r),
              (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || '__exists')),
            r
          );
        }),
        (t.prototype.clear = function () {
          this.replace(null);
        }),
        (t.prototype.extract = function () {
          var e = this,
            n = this.toObject(),
            r = [];
          return (
            this.getRootIdSet().forEach(function (i) {
              Me.call(e.policies.rootTypenamesById, i) || r.push(i);
            }),
            r.length && (n.__META = { extraRootIds: r.sort() }),
            n
          );
        }),
        (t.prototype.replace = function (e) {
          var n = this;
          if (
            (Object.keys(this.data).forEach(function (s) {
              (e && Me.call(e, s)) || n.delete(s);
            }),
            e)
          ) {
            var r = e.__META,
              i = Rt(e, ['__META']);
            Object.keys(i).forEach(function (s) {
              n.merge(s, i[s]);
            }),
              r && r.extraRootIds.forEach(this.retain, this);
          }
        }),
        (t.prototype.retain = function (e) {
          return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
        }),
        (t.prototype.release = function (e) {
          if (this.rootIds[e] > 0) {
            var n = --this.rootIds[e];
            return n || delete this.rootIds[e], n;
          }
          return 0;
        }),
        (t.prototype.getRootIdSet = function (e) {
          return (
            e === void 0 && (e = new Set()),
            Object.keys(this.rootIds).forEach(e.add, e),
            this instanceof yn
              ? this.parent.getRootIdSet(e)
              : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
            e
          );
        }),
        (t.prototype.gc = function () {
          var e = this,
            n = this.getRootIdSet(),
            r = this.toObject();
          n.forEach(function (o) {
            Me.call(r, o) && (Object.keys(e.findChildRefIds(o)).forEach(n.add, n), delete r[o]);
          });
          var i = Object.keys(r);
          if (i.length) {
            for (var s = this; s instanceof yn; ) s = s.parent;
            i.forEach(function (o) {
              return s.delete(o);
            });
          }
          return i;
        }),
        (t.prototype.findChildRefIds = function (e) {
          if (!Me.call(this.refs, e)) {
            var n = (this.refs[e] = Object.create(null)),
              r = this.data[e];
            if (!r) return n;
            var i = new Set([r]);
            i.forEach(function (s) {
              J(s) && (n[s.__ref] = !0),
                xe(s) &&
                  Object.keys(s).forEach(function (o) {
                    var a = s[o];
                    xe(a) && i.add(a);
                  });
            });
          }
          return this.refs[e];
        }),
        (t.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        }),
        t
      );
    })(),
    _b = (function () {
      function t(e, n) {
        n === void 0 && (n = null), (this.caching = e), (this.parent = n), (this.d = null), this.resetCaching();
      }
      return (
        (t.prototype.resetCaching = function () {
          (this.d = this.caching ? Zx() : null), (this.keyMaker = new Ri(Ai));
        }),
        (t.prototype.depend = function (e, n) {
          if (this.d) {
            this.d(Xu(e, n));
            var r = Xn(n);
            r !== n && this.d(Xu(e, r)), this.parent && this.parent.depend(e, n);
          }
        }),
        (t.prototype.dirty = function (e, n) {
          this.d && this.d.dirty(Xu(e, n), n === '__exists' ? 'forget' : 'setDirty');
        }),
        t
      );
    })();
  function Xu(t, e) {
    return e + '#' + t;
  }
  function Am(t, e) {
    Cs(t) && t.group.depend(e, '__exists');
  }
  (function (t) {
    var e = (function (n) {
      Gt(r, n);
      function r(i) {
        var s = i.policies,
          o = i.resultCaching,
          a = o === void 0 ? !0 : o,
          l = i.seed,
          u = n.call(this, s, new _b(a)) || this;
        return (u.stump = new gD(u)), (u.storageTrie = new Ri(Ai)), l && u.replace(l), u;
      }
      return (
        (r.prototype.addLayer = function (i, s) {
          return this.stump.addLayer(i, s);
        }),
        (r.prototype.removeLayer = function () {
          return this;
        }),
        (r.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        r
      );
    })(t);
    t.Root = e;
  })(oo || (oo = {}));
  var yn = (function (t) {
      Gt(e, t);
      function e(n, r, i, s) {
        var o = t.call(this, r.policies, s) || this;
        return (o.id = n), (o.parent = r), (o.replay = i), (o.group = s), i(o), o;
      }
      return (
        (e.prototype.addLayer = function (n, r) {
          return new e(n, this, r, this.group);
        }),
        (e.prototype.removeLayer = function (n) {
          var r = this,
            i = this.parent.removeLayer(n);
          return n === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (s) {
                  var o = r.data[s],
                    a = i.lookup(s);
                  a
                    ? o
                      ? o !== a &&
                        Object.keys(o).forEach(function (l) {
                          X(o[l], a[l]) || r.group.dirty(s, l);
                        })
                      : (r.group.dirty(s, '__exists'),
                        Object.keys(a).forEach(function (l) {
                          r.group.dirty(s, l);
                        }))
                    : r.delete(s);
                }),
              i)
            : i === this.parent
              ? this
              : i.addLayer(this.id, this.replay);
        }),
        (e.prototype.toObject = function () {
          return k(k({}, this.parent.toObject()), this.data);
        }),
        (e.prototype.findChildRefIds = function (n) {
          var r = this.parent.findChildRefIds(n);
          return Me.call(this.data, n) ? k(k({}, r), t.prototype.findChildRefIds.call(this, n)) : r;
        }),
        (e.prototype.getStorage = function () {
          for (var n = this.parent; n.parent; ) n = n.parent;
          return n.getStorage.apply(n, arguments);
        }),
        e
      );
    })(oo),
    gD = (function (t) {
      Gt(e, t);
      function e(n) {
        return t.call(this, 'EntityStore.Stump', n, function () {}, new _b(n.group.caching, n.group)) || this;
      }
      return (
        (e.prototype.removeLayer = function () {
          return this;
        }),
        (e.prototype.merge = function (n, r) {
          return this.parent.merge(n, r);
        }),
        e
      );
    })(yn);
  function mD(t, e, n) {
    var r = t[n],
      i = e[n];
    return X(r, i) ? r : i;
  }
  function Cs(t) {
    return !!(t instanceof oo && t.group.caching);
  }
  function vD(t) {
    return xe(t) ? (be(t) ? t.slice(0) : k({ __proto__: Object.getPrototypeOf(t) }, t)) : t;
  }
  var Lm = (function () {
    function t() {
      (this.known = new (Rx ? WeakSet : Set)()),
        (this.pool = new Ri(Ai)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({}));
    }
    return (
      (t.prototype.isKnown = function (e) {
        return xe(e) && this.known.has(e);
      }),
      (t.prototype.pass = function (e) {
        if (xe(e)) {
          var n = vD(e);
          return this.passes.set(n, e), n;
        }
        return e;
      }),
      (t.prototype.admit = function (e) {
        var n = this;
        if (xe(e)) {
          var r = this.passes.get(e);
          if (r) return r;
          var i = Object.getPrototypeOf(e);
          switch (i) {
            case Array.prototype: {
              if (this.known.has(e)) return e;
              var s = e.map(this.admit, this),
                o = this.pool.lookupArray(s);
              return o.array || (this.known.add((o.array = s)), globalThis.__DEV__ !== !1 && Object.freeze(s)), o.array;
            }
            case null:
            case Object.prototype: {
              if (this.known.has(e)) return e;
              var a = Object.getPrototypeOf(e),
                l = [a],
                u = this.sortedKeys(e);
              l.push(u.json);
              var c = l.length;
              u.sorted.forEach(function (d) {
                l.push(n.admit(e[d]));
              });
              var o = this.pool.lookupArray(l);
              if (!o.object) {
                var f = (o.object = Object.create(a));
                this.known.add(f),
                  u.sorted.forEach(function (d, g) {
                    f[d] = l[c + g];
                  }),
                  globalThis.__DEV__ !== !1 && Object.freeze(f);
              }
              return o.object;
            }
          }
        }
        return e;
      }),
      (t.prototype.sortedKeys = function (e) {
        var n = Object.keys(e),
          r = this.pool.lookupArray(n);
        if (!r.keys) {
          n.sort();
          var i = JSON.stringify(n);
          (r.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, (r.keys = { sorted: n, json: i }));
        }
        return r.keys;
      }),
      t
    );
  })();
  function Fm(t) {
    return [t.selectionSet, t.objectOrReference, t.context, t.context.canonizeResults];
  }
  var yD = (function () {
    function t(e) {
      var n = this;
      (this.knownResults = new (Ai ? WeakMap : Map)()),
        (this.config = Tr(e, { addTypename: e.addTypename !== !1, canonizeResults: yb(e) })),
        (this.canon = e.canon || new Lm()),
        (this.executeSelectionSet = io(
          function (r) {
            var i,
              s = r.context.canonizeResults,
              o = Fm(r);
            o[3] = !s;
            var a = (i = n.executeSelectionSet).peek.apply(i, o);
            return a
              ? s
                ? k(k({}, a), { result: n.canon.admit(a.result) })
                : a
              : (Am(r.context.store, r.enclosingRef.__ref), n.execSelectionSetImpl(r));
          },
          {
            max: this.config.resultCacheMaxSize || Yt['inMemoryCache.executeSelectionSet'] || 5e4,
            keyArgs: Fm,
            makeCacheKey: function (r, i, s, o) {
              if (Cs(s.store)) return s.store.makeCacheKey(r, J(i) ? i.__ref : i, s.varString, o);
            },
          },
        )),
        (this.executeSubSelectedArray = io(
          function (r) {
            return Am(r.context.store, r.enclosingRef.__ref), n.execSubSelectedArrayImpl(r);
          },
          {
            max: this.config.resultCacheMaxSize || Yt['inMemoryCache.executeSubSelectedArray'] || 1e4,
            makeCacheKey: function (r) {
              var i = r.field,
                s = r.array,
                o = r.context;
              if (Cs(o.store)) return o.store.makeCacheKey(i, s, o.varString);
            },
          },
        ));
    }
    return (
      (t.prototype.resetCanon = function () {
        this.canon = new Lm();
      }),
      (t.prototype.diffQueryAgainstStore = function (e) {
        var n = e.store,
          r = e.query,
          i = e.rootId,
          s = i === void 0 ? 'ROOT_QUERY' : i,
          o = e.variables,
          a = e.returnPartialData,
          l = a === void 0 ? !0 : a,
          u = e.canonizeResults,
          c = u === void 0 ? this.config.canonizeResults : u,
          f = this.config.cache.policies;
        o = k(k({}, od(Vx(r))), o);
        var h = ci(s),
          d = this.executeSelectionSet({
            selectionSet: bo(r).selectionSet,
            objectOrReference: h,
            enclosingRef: h,
            context: k(
              { store: n, query: r, policies: f, variables: o, varString: Wn(o), canonizeResults: c },
              bb(r, this.config.fragments),
            ),
          }),
          g;
        if (d.missing && ((g = [new gb(xD(d.missing), d.missing, r, o)]), !l)) throw g[0];
        return { result: d.result, complete: !g, missing: g };
      }),
      (t.prototype.isFresh = function (e, n, r, i) {
        if (Cs(i.store) && this.knownResults.get(e) === r) {
          var s = this.executeSelectionSet.peek(r, n, i, this.canon.isKnown(e));
          if (s && e === s.result) return !0;
        }
        return !1;
      }),
      (t.prototype.execSelectionSetImpl = function (e) {
        var n = this,
          r = e.selectionSet,
          i = e.objectOrReference,
          s = e.enclosingRef,
          o = e.context;
        if (J(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
          return { result: this.canon.empty, missing: 'Dangling reference to missing '.concat(i.__ref, ' object') };
        var a = o.variables,
          l = o.policies,
          u = o.store,
          c = u.getFieldValue(i, '__typename'),
          f = [],
          h,
          d = new Kn();
        this.config.addTypename && typeof c == 'string' && !l.rootIdsByTypename[c] && f.push({ __typename: c });
        function g(y, b) {
          var _;
          return y.missing && (h = d.merge(h, ((_ = {}), (_[b] = y.missing), _))), y.result;
        }
        var v = new Set(r.selections);
        v.forEach(function (y) {
          var b, _;
          if (vo(y, a))
            if (Yn(y)) {
              var S = l.readField({ fieldName: y.name.value, field: y, variables: o.variables, from: i }, o),
                E = qn(y);
              S === void 0
                ? fd.added(y) ||
                  (h = d.merge(
                    h,
                    ((b = {}),
                    (b[E] = "Can't find field '"
                      .concat(y.name.value, "' on ")
                      .concat(J(i) ? i.__ref + ' object' : 'object ' + JSON.stringify(i, null, 2))),
                    b),
                  ))
                : be(S)
                  ? S.length > 0 &&
                    (S = g(n.executeSubSelectedArray({ field: y, array: S, enclosingRef: s, context: o }), E))
                  : y.selectionSet
                    ? S != null &&
                      (S = g(
                        n.executeSelectionSet({
                          selectionSet: y.selectionSet,
                          objectOrReference: S,
                          enclosingRef: J(S) ? S : s,
                          context: o,
                        }),
                        E,
                      ))
                    : o.canonizeResults && (S = n.canon.pass(S)),
                S !== void 0 && f.push(((_ = {}), (_[E] = S), _));
            } else {
              var O = Zl(y, o.lookupFragment);
              if (!O && y.kind === A.FRAGMENT_SPREAD) throw Ke(9, y.name.value);
              O && l.fragmentMatches(O, c) && O.selectionSet.selections.forEach(v.add, v);
            }
        });
        var x = su(f),
          p = { result: x, missing: h },
          m = o.canonizeResults ? this.canon.admit(p) : so(p);
        return m.result && this.knownResults.set(m.result, r), m;
      }),
      (t.prototype.execSubSelectedArrayImpl = function (e) {
        var n = this,
          r = e.field,
          i = e.array,
          s = e.enclosingRef,
          o = e.context,
          a,
          l = new Kn();
        function u(c, f) {
          var h;
          return c.missing && (a = l.merge(a, ((h = {}), (h[f] = c.missing), h))), c.result;
        }
        return (
          r.selectionSet && (i = i.filter(o.store.canRead)),
          (i = i.map(function (c, f) {
            return c === null
              ? null
              : be(c)
                ? u(n.executeSubSelectedArray({ field: r, array: c, enclosingRef: s, context: o }), f)
                : r.selectionSet
                  ? u(
                      n.executeSelectionSet({
                        selectionSet: r.selectionSet,
                        objectOrReference: c,
                        enclosingRef: J(c) ? c : s,
                        context: o,
                      }),
                      f,
                    )
                  : (globalThis.__DEV__ !== !1 && bD(o.store, r, c), c);
          })),
          { result: o.canonizeResults ? this.canon.admit(i) : i, missing: a }
        );
      }),
      t
    );
  })();
  function xD(t) {
    try {
      JSON.stringify(t, function (e, n) {
        if (typeof n == 'string') throw n;
        return n;
      });
    } catch (e) {
      return e;
    }
  }
  function bD(t, e, n) {
    if (!e.selectionSet) {
      var r = new Set([n]);
      r.forEach(function (i) {
        xe(i) && (F(!J(i), 10, dD(t, i), e.name.value), Object.values(i).forEach(r.add, r));
      });
    }
  }
  var vd = new Ux(),
    jm = new WeakMap();
  function Ds(t) {
    var e = jm.get(t);
    return e || jm.set(t, (e = { vars: new Set(), dep: Zx() })), e;
  }
  function zm(t) {
    Ds(t).vars.forEach(function (e) {
      return e.forgetCache(t);
    });
  }
  function _D(t) {
    Ds(t).vars.forEach(function (e) {
      return e.attachCache(t);
    });
  }
  function wD(t) {
    var e = new Set(),
      n = new Set(),
      r = function (s) {
        if (arguments.length > 0) {
          if (t !== s) {
            (t = s),
              e.forEach(function (l) {
                Ds(l).dep.dirty(r), SD(l);
              });
            var o = Array.from(n);
            n.clear(),
              o.forEach(function (l) {
                return l(t);
              });
          }
        } else {
          var a = vd.getValue();
          a && (i(a), Ds(a).dep(r));
        }
        return t;
      };
    r.onNextChange = function (s) {
      return (
        n.add(s),
        function () {
          n.delete(s);
        }
      );
    };
    var i = (r.attachCache = function (s) {
      return e.add(s), Ds(s).vars.add(r), r;
    });
    return (
      (r.forgetCache = function (s) {
        return e.delete(s);
      }),
      r
    );
  }
  function SD(t) {
    t.broadcastWatches && t.broadcastWatches();
  }
  var Bm = Object.create(null);
  function yd(t) {
    var e = JSON.stringify(t);
    return Bm[e] || (Bm[e] = Object.create(null));
  }
  function Vm(t) {
    var e = yd(t);
    return (
      e.keyFieldsFn ||
      (e.keyFieldsFn = function (n, r) {
        var i = function (o, a) {
            return r.readField(a, o);
          },
          s = (r.keyObject = xd(t, function (o) {
            var a = hi(r.storeObject, o, i);
            return (
              a === void 0 && n !== r.storeObject && Me.call(n, o[0]) && (a = hi(n, o, Sb)),
              F(a !== void 0, 4, o.join('.'), n),
              a
            );
          }));
        return ''.concat(r.typename, ':').concat(JSON.stringify(s));
      })
    );
  }
  function Um(t) {
    var e = yd(t);
    return (
      e.keyArgsFn ||
      (e.keyArgsFn = function (n, r) {
        var i = r.field,
          s = r.variables,
          o = r.fieldName,
          a = xd(t, function (u) {
            var c = u[0],
              f = c.charAt(0);
            if (f === '@') {
              if (i && Et(i.directives)) {
                var h = c.slice(1),
                  d = i.directives.find(function (p) {
                    return p.name.value === h;
                  }),
                  g = d && eu(d, s);
                return g && hi(g, u.slice(1));
              }
              return;
            }
            if (f === '$') {
              var v = c.slice(1);
              if (s && Me.call(s, v)) {
                var x = u.slice(0);
                return (x[0] = v), hi(s, x);
              }
              return;
            }
            if (n) return hi(n, u);
          }),
          l = JSON.stringify(a);
        return (n || l !== '{}') && (o += ':' + l), o;
      })
    );
  }
  function xd(t, e) {
    var n = new Kn();
    return wb(t).reduce(function (r, i) {
      var s,
        o = e(i);
      if (o !== void 0) {
        for (var a = i.length - 1; a >= 0; --a) o = ((s = {}), (s[i[a]] = o), s);
        r = n.merge(r, o);
      }
      return r;
    }, Object.create(null));
  }
  function wb(t) {
    var e = yd(t);
    if (!e.paths) {
      var n = (e.paths = []),
        r = [];
      t.forEach(function (i, s) {
        be(i)
          ? (wb(i).forEach(function (o) {
              return n.push(r.concat(o));
            }),
            (r.length = 0))
          : (r.push(i), be(t[s + 1]) || (n.push(r.slice(0)), (r.length = 0)));
      });
    }
    return e.paths;
  }
  function Sb(t, e) {
    return t[e];
  }
  function hi(t, e, n) {
    return (
      (n = n || Sb),
      kb(
        e.reduce(function r(i, s) {
          return be(i)
            ? i.map(function (o) {
                return r(o, s);
              })
            : i && n(i, s);
        }, t),
      )
    );
  }
  function kb(t) {
    return xe(t)
      ? be(t)
        ? t.map(kb)
        : xd(Object.keys(t).sort(), function (e) {
            return hi(t, e);
          })
      : t;
  }
  function Tf(t) {
    return t.args !== void 0 ? t.args : t.field ? eu(t.field, t.variables) : null;
  }
  var kD = function () {},
    Wm = function (t, e) {
      return e.fieldName;
    },
    $m = function (t, e, n) {
      var r = n.mergeObjects;
      return r(t, e);
    },
    Qm = function (t, e) {
      return e;
    },
    ED = (function () {
      function t(e) {
        (this.config = e),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = k({ dataIdFromObject: mb }, e)),
          (this.cache = this.config.cache),
          this.setRootTypename('Query'),
          this.setRootTypename('Mutation'),
          this.setRootTypename('Subscription'),
          e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
          e.typePolicies && this.addTypePolicies(e.typePolicies);
      }
      return (
        (t.prototype.identify = function (e, n) {
          var r,
            i = this,
            s =
              (n && (n.typename || ((r = n.storeObject) === null || r === void 0 ? void 0 : r.__typename))) ||
              e.__typename;
          if (s === this.rootTypenamesById.ROOT_QUERY) return ['ROOT_QUERY'];
          for (
            var o = (n && n.storeObject) || e,
              a = k(k({}, n), {
                typename: s,
                storeObject: o,
                readField:
                  (n && n.readField) ||
                  function () {
                    var h = bd(arguments, o);
                    return i.readField(h, { store: i.cache.data, variables: h.variables });
                  },
              }),
              l,
              u = s && this.getTypePolicy(s),
              c = (u && u.keyFn) || this.config.dataIdFromObject;
            c;

          ) {
            var f = c(k(k({}, e), o), a);
            if (be(f)) c = Vm(f);
            else {
              l = f;
              break;
            }
          }
          return (l = l ? String(l) : void 0), a.keyObject ? [l, a.keyObject] : [l];
        }),
        (t.prototype.addTypePolicies = function (e) {
          var n = this;
          Object.keys(e).forEach(function (r) {
            var i = e[r],
              s = i.queryType,
              o = i.mutationType,
              a = i.subscriptionType,
              l = Rt(i, ['queryType', 'mutationType', 'subscriptionType']);
            s && n.setRootTypename('Query', r),
              o && n.setRootTypename('Mutation', r),
              a && n.setRootTypename('Subscription', r),
              Me.call(n.toBeAdded, r) ? n.toBeAdded[r].push(l) : (n.toBeAdded[r] = [l]);
          });
        }),
        (t.prototype.updateTypePolicy = function (e, n) {
          var r = this,
            i = this.getTypePolicy(e),
            s = n.keyFields,
            o = n.fields;
          function a(l, u) {
            l.merge = typeof u == 'function' ? u : u === !0 ? $m : u === !1 ? Qm : l.merge;
          }
          a(i, n.merge),
            (i.keyFn = s === !1 ? kD : be(s) ? Vm(s) : typeof s == 'function' ? s : i.keyFn),
            o &&
              Object.keys(o).forEach(function (l) {
                var u = r.getFieldPolicy(e, l, !0),
                  c = o[l];
                if (typeof c == 'function') u.read = c;
                else {
                  var f = c.keyArgs,
                    h = c.read,
                    d = c.merge;
                  (u.keyFn = f === !1 ? Wm : be(f) ? Um(f) : typeof f == 'function' ? f : u.keyFn),
                    typeof h == 'function' && (u.read = h),
                    a(u, d);
                }
                u.read && u.merge && (u.keyFn = u.keyFn || Wm);
              });
        }),
        (t.prototype.setRootTypename = function (e, n) {
          n === void 0 && (n = e);
          var r = 'ROOT_' + e.toUpperCase(),
            i = this.rootTypenamesById[r];
          n !== i &&
            (F(!i || i === e, 5, e),
            i && delete this.rootIdsByTypename[i],
            (this.rootIdsByTypename[n] = r),
            (this.rootTypenamesById[r] = n));
        }),
        (t.prototype.addPossibleTypes = function (e) {
          var n = this;
          (this.usingPossibleTypes = !0),
            Object.keys(e).forEach(function (r) {
              n.getSupertypeSet(r, !0),
                e[r].forEach(function (i) {
                  n.getSupertypeSet(i, !0).add(r);
                  var s = i.match(xb);
                  (!s || s[0] !== i) && n.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }),
        (t.prototype.getTypePolicy = function (e) {
          var n = this;
          if (!Me.call(this.typePolicies, e)) {
            var r = (this.typePolicies[e] = Object.create(null));
            r.fields = Object.create(null);
            var i = this.supertypeMap.get(e);
            !i &&
              this.fuzzySubtypes.size &&
              ((i = this.getSupertypeSet(e, !0)),
              this.fuzzySubtypes.forEach(function (o, a) {
                if (o.test(e)) {
                  var l = n.supertypeMap.get(a);
                  l &&
                    l.forEach(function (u) {
                      return i.add(u);
                    });
                }
              })),
              i &&
                i.size &&
                i.forEach(function (o) {
                  var a = n.getTypePolicy(o),
                    l = a.fields,
                    u = Rt(a, ['fields']);
                  Object.assign(r, u), Object.assign(r.fields, l);
                });
          }
          var s = this.toBeAdded[e];
          return (
            s &&
              s.length &&
              s.splice(0).forEach(function (o) {
                n.updateTypePolicy(e, o);
              }),
            this.typePolicies[e]
          );
        }),
        (t.prototype.getFieldPolicy = function (e, n, r) {
          if (e) {
            var i = this.getTypePolicy(e).fields;
            return i[n] || (r && (i[n] = Object.create(null)));
          }
        }),
        (t.prototype.getSupertypeSet = function (e, n) {
          var r = this.supertypeMap.get(e);
          return !r && n && this.supertypeMap.set(e, (r = new Set())), r;
        }),
        (t.prototype.fragmentMatches = function (e, n, r, i) {
          var s = this;
          if (!e.typeCondition) return !0;
          if (!n) return !1;
          var o = e.typeCondition.name.value;
          if (n === o) return !0;
          if (this.usingPossibleTypes && this.supertypeMap.has(o))
            for (
              var a = this.getSupertypeSet(n, !0),
                l = [a],
                u = function (g) {
                  var v = s.getSupertypeSet(g, !1);
                  v && v.size && l.indexOf(v) < 0 && l.push(v);
                },
                c = !!(r && this.fuzzySubtypes.size),
                f = !1,
                h = 0;
              h < l.length;
              ++h
            ) {
              var d = l[h];
              if (d.has(o)) return a.has(o) || (f && globalThis.__DEV__ !== !1 && F.warn(6, n, o), a.add(o)), !0;
              d.forEach(u),
                c &&
                  h === l.length - 1 &&
                  Of(e.selectionSet, r, i) &&
                  ((c = !1),
                  (f = !0),
                  this.fuzzySubtypes.forEach(function (g, v) {
                    var x = n.match(g);
                    x && x[0] === n && u(v);
                  }));
            }
          return !1;
        }),
        (t.prototype.hasKeyArgs = function (e, n) {
          var r = this.getFieldPolicy(e, n, !1);
          return !!(r && r.keyFn);
        }),
        (t.prototype.getStoreFieldName = function (e) {
          var n = e.typename,
            r = e.fieldName,
            i = this.getFieldPolicy(n, r, !1),
            s,
            o = i && i.keyFn;
          if (o && n)
            for (
              var a = { typename: n, fieldName: r, field: e.field || null, variables: e.variables }, l = Tf(e);
              o;

            ) {
              var u = o(l, a);
              if (be(u)) o = Um(u);
              else {
                s = u || r;
                break;
              }
            }
          return (
            s === void 0 && (s = e.field ? $C(e.field, e.variables) : Bx(r, Tf(e))),
            s === !1 ? r : r === Xn(s) ? s : r + ':' + s
          );
        }),
        (t.prototype.readField = function (e, n) {
          var r = e.from;
          if (r) {
            var i = e.field || e.fieldName;
            if (i) {
              if (e.typename === void 0) {
                var s = n.store.getFieldValue(r, '__typename');
                s && (e.typename = s);
              }
              var o = this.getStoreFieldName(e),
                a = Xn(o),
                l = n.store.getFieldValue(r, o),
                u = this.getFieldPolicy(e.typename, a, !1),
                c = u && u.read;
              if (c) {
                var f = Hm(this, r, e, n, n.store.getStorage(J(r) ? r.__ref : r, o));
                return vd.withValue(this.cache, c, [l, f]);
              }
              return l;
            }
          }
        }),
        (t.prototype.getReadFunction = function (e, n) {
          var r = this.getFieldPolicy(e, n, !1);
          return r && r.read;
        }),
        (t.prototype.getMergeFunction = function (e, n, r) {
          var i = this.getFieldPolicy(e, n, !1),
            s = i && i.merge;
          return !s && r && ((i = this.getTypePolicy(r)), (s = i && i.merge)), s;
        }),
        (t.prototype.runMergeFunction = function (e, n, r, i, s) {
          var o = r.field,
            a = r.typename,
            l = r.merge;
          return l === $m
            ? Eb(i.store)(e, n)
            : l === Qm
              ? n
              : (i.overwrite && (e = void 0),
                l(
                  e,
                  n,
                  Hm(
                    this,
                    void 0,
                    { typename: a, fieldName: o.name.value, field: o, variables: i.variables },
                    i,
                    s || Object.create(null),
                  ),
                ));
        }),
        t
      );
    })();
  function Hm(t, e, n, r, i) {
    var s = t.getStoreFieldName(n),
      o = Xn(s),
      a = n.variables || r.variables,
      l = r.store,
      u = l.toReference,
      c = l.canRead;
    return {
      args: Tf(n),
      field: n.field || null,
      fieldName: o,
      storeFieldName: s,
      variables: a,
      isReference: J,
      toReference: u,
      storage: i,
      cache: t.cache,
      canRead: c,
      readField: function () {
        return t.readField(bd(arguments, e, a), r);
      },
      mergeObjects: Eb(r.store),
    };
  }
  function bd(t, e, n) {
    var r = t[0],
      i = t[1],
      s = t.length,
      o;
    return (
      typeof r == 'string'
        ? (o = { fieldName: r, from: s > 1 ? i : e })
        : ((o = k({}, r)), Me.call(o, 'from') || (o.from = e)),
      globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && F.warn(7, bx(Array.from(t))),
      o.variables === void 0 && (o.variables = n),
      o
    );
  }
  function Eb(t) {
    return function (n, r) {
      if (be(n) || be(r)) throw Ke(8);
      if (xe(n) && xe(r)) {
        var i = t.getFieldValue(n, '__typename'),
          s = t.getFieldValue(r, '__typename'),
          o = i && s && i !== s;
        if (o) return r;
        if (J(n) && ei(r)) return t.merge(n.__ref, r), n;
        if (ei(n) && J(r)) return t.merge(n, r.__ref), r;
        if (ei(n) && ei(r)) return k(k({}, n), r);
      }
      return r;
    };
  }
  function Ju(t, e, n) {
    var r = ''.concat(e).concat(n),
      i = t.flavors.get(r);
    return (
      i ||
        t.flavors.set(
          r,
          (i = t.clientOnly === e && t.deferred === n ? t : k(k({}, t), { clientOnly: e, deferred: n })),
        ),
      i
    );
  }
  var OD = (function () {
      function t(e, n, r) {
        (this.cache = e), (this.reader = n), (this.fragments = r);
      }
      return (
        (t.prototype.writeToStore = function (e, n) {
          var r = this,
            i = n.query,
            s = n.result,
            o = n.dataId,
            a = n.variables,
            l = n.overwrite,
            u = xo(i),
            c = pD();
          a = k(k({}, od(u)), a);
          var f = k(
              k(
                {
                  store: e,
                  written: Object.create(null),
                  merge: function (d, g) {
                    return c.merge(d, g);
                  },
                  variables: a,
                  varString: Wn(a),
                },
                bb(i, this.fragments),
              ),
              { overwrite: !!l, incomingById: new Map(), clientOnly: !1, deferred: !1, flavors: new Map() },
            ),
            h = this.processSelectionSet({
              result: s || Object.create(null),
              dataId: o,
              selectionSet: u.selectionSet,
              mergeTree: { map: new Map() },
              context: f,
            });
          if (!J(h)) throw Ke(11, s);
          return (
            f.incomingById.forEach(function (d, g) {
              var v = d.storeObject,
                x = d.mergeTree,
                p = d.fieldNodeSet,
                m = ci(g);
              if (x && x.map.size) {
                var y = r.applyMerges(x, m, v, f);
                if (J(y)) return;
                v = y;
              }
              if (globalThis.__DEV__ !== !1 && !f.overwrite) {
                var b = Object.create(null);
                p.forEach(function (E) {
                  E.selectionSet && (b[E.name.value] = !0);
                });
                var _ = function (E) {
                    return b[Xn(E)] === !0;
                  },
                  S = function (E) {
                    var O = x && x.map.get(E);
                    return !!(O && O.info && O.info.merge);
                  };
                Object.keys(v).forEach(function (E) {
                  _(E) && !S(E) && TD(m, v, E, f.store);
                });
              }
              e.merge(g, v);
            }),
            e.retain(h.__ref),
            h
          );
        }),
        (t.prototype.processSelectionSet = function (e) {
          var n = this,
            r = e.dataId,
            i = e.result,
            s = e.selectionSet,
            o = e.context,
            a = e.mergeTree,
            l = this.cache.policies,
            u = Object.create(null),
            c = (r && l.rootTypenamesById[r]) || mf(i, s, o.fragmentMap) || (r && o.store.get(r, '__typename'));
          typeof c == 'string' && (u.__typename = c);
          var f = function () {
              var y = bd(arguments, u, o.variables);
              if (J(y.from)) {
                var b = o.incomingById.get(y.from.__ref);
                if (b) {
                  var _ = l.readField(k(k({}, y), { from: b.storeObject }), o);
                  if (_ !== void 0) return _;
                }
              }
              return l.readField(y, o);
            },
            h = new Set();
          this.flattenFields(s, i, o, c).forEach(function (y, b) {
            var _,
              S = qn(b),
              E = i[S];
            if ((h.add(b), E !== void 0)) {
              var O = l.getStoreFieldName({ typename: c, fieldName: b.name.value, field: b, variables: y.variables }),
                D = qm(a, O),
                P = n.processFieldValue(E, b, b.selectionSet ? Ju(y, !1, !1) : y, D),
                j = void 0;
              b.selectionSet && (J(P) || ei(P)) && (j = f('__typename', P));
              var z = l.getMergeFunction(c, b.name.value, j);
              z ? (D.info = { field: b, typename: c, merge: z }) : Ym(a, O),
                (u = y.merge(u, ((_ = {}), (_[O] = P), _)));
            } else
              globalThis.__DEV__ !== !1 &&
                !y.clientOnly &&
                !y.deferred &&
                !fd.added(b) &&
                !l.getReadFunction(c, b.name.value) &&
                globalThis.__DEV__ !== !1 &&
                F.error(12, qn(b), i);
          });
          try {
            var d = l.identify(i, {
                typename: c,
                selectionSet: s,
                fragmentMap: o.fragmentMap,
                storeObject: u,
                readField: f,
              }),
              g = d[0],
              v = d[1];
            (r = r || g), v && (u = o.merge(u, v));
          } catch (y) {
            if (!r) throw y;
          }
          if (typeof r == 'string') {
            var x = ci(r),
              p = o.written[r] || (o.written[r] = []);
            if (p.indexOf(s) >= 0 || (p.push(s), this.reader && this.reader.isFresh(i, x, s, o))) return x;
            var m = o.incomingById.get(r);
            return (
              m
                ? ((m.storeObject = o.merge(m.storeObject, u)),
                  (m.mergeTree = Cf(m.mergeTree, a)),
                  h.forEach(function (y) {
                    return m.fieldNodeSet.add(y);
                  }))
                : o.incomingById.set(r, { storeObject: u, mergeTree: Sl(a) ? void 0 : a, fieldNodeSet: h }),
              x
            );
          }
          return u;
        }),
        (t.prototype.processFieldValue = function (e, n, r, i) {
          var s = this;
          return !n.selectionSet || e === null
            ? globalThis.__DEV__ !== !1
              ? ab(e)
              : e
            : be(e)
              ? e.map(function (o, a) {
                  var l = s.processFieldValue(o, n, r, qm(i, a));
                  return Ym(i, a), l;
                })
              : this.processSelectionSet({ result: e, selectionSet: n.selectionSet, context: r, mergeTree: i });
        }),
        (t.prototype.flattenFields = function (e, n, r, i) {
          i === void 0 && (i = mf(n, e, r.fragmentMap));
          var s = new Map(),
            o = this.cache.policies,
            a = new Ri(!1);
          return (
            (function l(u, c) {
              var f = a.lookup(u, c.clientOnly, c.deferred);
              f.visited ||
                ((f.visited = !0),
                u.selections.forEach(function (h) {
                  if (vo(h, r.variables)) {
                    var d = c.clientOnly,
                      g = c.deferred;
                    if (
                      (!(d && g) &&
                        Et(h.directives) &&
                        h.directives.forEach(function (p) {
                          var m = p.name.value;
                          if ((m === 'client' && (d = !0), m === 'defer')) {
                            var y = eu(p, r.variables);
                            (!y || y.if !== !1) && (g = !0);
                          }
                        }),
                      Yn(h))
                    ) {
                      var v = s.get(h);
                      v && ((d = d && v.clientOnly), (g = g && v.deferred)), s.set(h, Ju(r, d, g));
                    } else {
                      var x = Zl(h, r.lookupFragment);
                      if (!x && h.kind === A.FRAGMENT_SPREAD) throw Ke(13, h.name.value);
                      x && o.fragmentMatches(x, i, n, r.variables) && l(x.selectionSet, Ju(r, d, g));
                    }
                  }
                }));
            })(e, r),
            s
          );
        }),
        (t.prototype.applyMerges = function (e, n, r, i, s) {
          var o,
            a = this;
          if (e.map.size && !J(r)) {
            var l = !be(r) && (J(n) || ei(n)) ? n : void 0,
              u = r;
            l && !s && (s = [J(l) ? l.__ref : l]);
            var c,
              f = function (h, d) {
                return be(h) ? (typeof d == 'number' ? h[d] : void 0) : i.store.getFieldValue(h, String(d));
              };
            e.map.forEach(function (h, d) {
              var g = f(l, d),
                v = f(u, d);
              if (v !== void 0) {
                s && s.push(d);
                var x = a.applyMerges(h, g, v, i, s);
                x !== v && ((c = c || new Map()), c.set(d, x)), s && F(s.pop() === d);
              }
            }),
              c &&
                ((r = be(u) ? u.slice(0) : k({}, u)),
                c.forEach(function (h, d) {
                  r[d] = h;
                }));
          }
          return e.info
            ? this.cache.policies.runMergeFunction(n, r, e.info, i, s && (o = i.store).getStorage.apply(o, s))
            : r;
        }),
        t
      );
    })(),
    Ob = [];
  function qm(t, e) {
    var n = t.map;
    return n.has(e) || n.set(e, Ob.pop() || { map: new Map() }), n.get(e);
  }
  function Cf(t, e) {
    if (t === e || !e || Sl(e)) return t;
    if (!t || Sl(t)) return e;
    var n = t.info && e.info ? k(k({}, t.info), e.info) : t.info || e.info,
      r = t.map.size && e.map.size,
      i = r ? new Map() : t.map.size ? t.map : e.map,
      s = { info: n, map: i };
    if (r) {
      var o = new Set(e.map.keys());
      t.map.forEach(function (a, l) {
        s.map.set(l, Cf(a, e.map.get(l))), o.delete(l);
      }),
        o.forEach(function (a) {
          s.map.set(a, Cf(e.map.get(a), t.map.get(a)));
        });
    }
    return s;
  }
  function Sl(t) {
    return !t || !(t.info || t.map.size);
  }
  function Ym(t, e) {
    var n = t.map,
      r = n.get(e);
    r && Sl(r) && (Ob.push(r), n.delete(e));
  }
  var Gm = new Set();
  function TD(t, e, n, r) {
    var i = function (f) {
        var h = r.getFieldValue(f, n);
        return typeof h == 'object' && h;
      },
      s = i(t);
    if (s) {
      var o = i(e);
      if (
        o &&
        !J(s) &&
        !X(s, o) &&
        !Object.keys(s).every(function (f) {
          return r.getFieldValue(o, f) !== void 0;
        })
      ) {
        var a = r.getFieldValue(t, '__typename') || r.getFieldValue(e, '__typename'),
          l = Xn(n),
          u = ''.concat(a, '.').concat(l);
        if (!Gm.has(u)) {
          Gm.add(u);
          var c = [];
          !be(s) &&
            !be(o) &&
            [s, o].forEach(function (f) {
              var h = r.getFieldValue(f, '__typename');
              typeof h == 'string' && !c.includes(h) && c.push(h);
            }),
            globalThis.__DEV__ !== !1 &&
              F.warn(
                14,
                l,
                a,
                c.length
                  ? 'either ensure all objects of type ' +
                      c.join(' and ') +
                      ' have an ID or a custom merge function, or '
                  : '',
                u,
                k({}, s),
                k({}, o),
              );
        }
      }
    }
  }
  var Tb = (function (t) {
    Gt(e, t);
    function e(n) {
      n === void 0 && (n = {});
      var r = t.call(this) || this;
      return (
        (r.watches = new Set()),
        (r.addTypenameTransform = new eb(fd)),
        (r.assumeImmutableResults = !0),
        (r.makeVar = wD),
        (r.txCount = 0),
        (r.config = hD(n)),
        (r.addTypename = !!r.config.addTypename),
        (r.policies = new ED({
          cache: r,
          dataIdFromObject: r.config.dataIdFromObject,
          possibleTypes: r.config.possibleTypes,
          typePolicies: r.config.typePolicies,
        })),
        r.init(),
        r
      );
    }
    return (
      (e.prototype.init = function () {
        var n = (this.data = new oo.Root({ policies: this.policies, resultCaching: this.config.resultCaching }));
        (this.optimisticData = n.stump), this.resetResultCache();
      }),
      (e.prototype.resetResultCache = function (n) {
        var r = this,
          i = this.storeReader,
          s = this.config.fragments;
        (this.storeWriter = new OD(
          this,
          (this.storeReader = new yD({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: yb(this.config),
            canon: n ? void 0 : i && i.canon,
            fragments: s,
          })),
          s,
        )),
          (this.maybeBroadcastWatch = io(
            function (o, a) {
              return r.broadcastWatch(o, a);
            },
            {
              max: this.config.resultCacheMaxSize || Yt['inMemoryCache.maybeBroadcastWatch'] || 5e3,
              makeCacheKey: function (o) {
                var a = o.optimistic ? r.optimisticData : r.data;
                if (Cs(a)) {
                  var l = o.optimistic,
                    u = o.id,
                    c = o.variables;
                  return a.makeCacheKey(o.query, o.callback, Wn({ optimistic: l, id: u, variables: c }));
                }
              },
            },
          )),
          new Set([this.data.group, this.optimisticData.group]).forEach(function (o) {
            return o.resetCaching();
          });
      }),
      (e.prototype.restore = function (n) {
        return this.init(), n && this.data.replace(n), this;
      }),
      (e.prototype.extract = function (n) {
        return n === void 0 && (n = !1), (n ? this.optimisticData : this.data).extract();
      }),
      (e.prototype.read = function (n) {
        var r = n.returnPartialData,
          i = r === void 0 ? !1 : r;
        try {
          return (
            this.storeReader.diffQueryAgainstStore(
              k(k({}, n), {
                store: n.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: i,
              }),
            ).result || null
          );
        } catch (s) {
          if (s instanceof gb) return null;
          throw s;
        }
      }),
      (e.prototype.write = function (n) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
        } finally {
          !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.modify = function (n) {
        if (Me.call(n, 'id') && !n.id) return !1;
        var r = n.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, r.modify(n.id || 'ROOT_QUERY', n.fields);
        } finally {
          !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.diff = function (n) {
        return this.storeReader.diffQueryAgainstStore(
          k(k({}, n), {
            store: n.optimistic ? this.optimisticData : this.data,
            rootId: n.id || 'ROOT_QUERY',
            config: this.config,
          }),
        );
      }),
      (e.prototype.watch = function (n) {
        var r = this;
        return (
          this.watches.size || _D(this),
          this.watches.add(n),
          n.immediate && this.maybeBroadcastWatch(n),
          function () {
            r.watches.delete(n) && !r.watches.size && zm(r), r.maybeBroadcastWatch.forget(n);
          }
        );
      }),
      (e.prototype.gc = function (n) {
        var r;
        Wn.reset(),
          iu.reset(),
          this.addTypenameTransform.resetCache(),
          (r = this.config.fragments) === null || r === void 0 || r.resetCaches();
        var i = this.optimisticData.gc();
        return (
          n &&
            !this.txCount &&
            (n.resetResultCache
              ? this.resetResultCache(n.resetResultIdentities)
              : n.resetResultIdentities && this.storeReader.resetCanon()),
          i
        );
      }),
      (e.prototype.retain = function (n, r) {
        return (r ? this.optimisticData : this.data).retain(n);
      }),
      (e.prototype.release = function (n, r) {
        return (r ? this.optimisticData : this.data).release(n);
      }),
      (e.prototype.identify = function (n) {
        if (J(n)) return n.__ref;
        try {
          return this.policies.identify(n)[0];
        } catch (r) {
          globalThis.__DEV__ !== !1 && F.warn(r);
        }
      }),
      (e.prototype.evict = function (n) {
        if (!n.id) {
          if (Me.call(n, 'id')) return !1;
          n = k(k({}, n), { id: 'ROOT_QUERY' });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(n, this.data);
        } finally {
          !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (e.prototype.reset = function (n) {
        var r = this;
        return (
          this.init(),
          Wn.reset(),
          n && n.discardWatches
            ? (this.watches.forEach(function (i) {
                return r.maybeBroadcastWatch.forget(i);
              }),
              this.watches.clear(),
              zm(this))
            : this.broadcastWatches(),
          Promise.resolve()
        );
      }),
      (e.prototype.removeOptimistic = function (n) {
        var r = this.optimisticData.removeLayer(n);
        r !== this.optimisticData && ((this.optimisticData = r), this.broadcastWatches());
      }),
      (e.prototype.batch = function (n) {
        var r = this,
          i = n.update,
          s = n.optimistic,
          o = s === void 0 ? !0 : s,
          a = n.removeOptimistic,
          l = n.onWatchUpdated,
          u,
          c = function (h) {
            var d = r,
              g = d.data,
              v = d.optimisticData;
            ++r.txCount, h && (r.data = r.optimisticData = h);
            try {
              return (u = i(r));
            } finally {
              --r.txCount, (r.data = g), (r.optimisticData = v);
            }
          },
          f = new Set();
        return (
          l &&
            !this.txCount &&
            this.broadcastWatches(
              k(k({}, n), {
                onWatchUpdated: function (h) {
                  return f.add(h), !1;
                },
              }),
            ),
          typeof o == 'string'
            ? (this.optimisticData = this.optimisticData.addLayer(o, c))
            : o === !1
              ? c(this.data)
              : c(),
          typeof a == 'string' && (this.optimisticData = this.optimisticData.removeLayer(a)),
          l && f.size
            ? (this.broadcastWatches(
                k(k({}, n), {
                  onWatchUpdated: function (h, d) {
                    var g = l.call(this, h, d);
                    return g !== !1 && f.delete(h), g;
                  },
                }),
              ),
              f.size &&
                f.forEach(function (h) {
                  return r.maybeBroadcastWatch.dirty(h);
                }))
            : this.broadcastWatches(n),
          u
        );
      }),
      (e.prototype.performTransaction = function (n, r) {
        return this.batch({ update: n, optimistic: r || r !== null });
      }),
      (e.prototype.transformDocument = function (n) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(n));
      }),
      (e.prototype.broadcastWatches = function (n) {
        var r = this;
        this.txCount ||
          this.watches.forEach(function (i) {
            return r.maybeBroadcastWatch(i, n);
          });
      }),
      (e.prototype.addFragmentsToDocument = function (n) {
        var r = this.config.fragments;
        return r ? r.transform(n) : n;
      }),
      (e.prototype.addTypenameToDocument = function (n) {
        return this.addTypename ? this.addTypenameTransform.transformDocument(n) : n;
      }),
      (e.prototype.broadcastWatch = function (n, r) {
        var i = n.lastDiff,
          s = this.diff(n);
        (r &&
          (n.optimistic && typeof r.optimistic == 'string' && (s.fromOptimisticTransaction = !0),
          r.onWatchUpdated && r.onWatchUpdated.call(this, n, s, i) === !1)) ||
          ((!i || !X(i.result, s.result)) && n.callback((n.lastDiff = s), i));
      }),
      e
    );
  })(pb);
  globalThis.__DEV__ !== !1 && (Tb.prototype.getMemoryInternals = OC);
  var H;
  (function (t) {
    (t[(t.loading = 1)] = 'loading'),
      (t[(t.setVariables = 2)] = 'setVariables'),
      (t[(t.fetchMore = 3)] = 'fetchMore'),
      (t[(t.refetch = 4)] = 'refetch'),
      (t[(t.poll = 6)] = 'poll'),
      (t[(t.ready = 7)] = 'ready'),
      (t[(t.error = 8)] = 'error');
  })(H || (H = {}));
  function ao(t) {
    return t ? t < 7 : !1;
  }
  var Km = Object.assign,
    CD = Object.hasOwnProperty,
    Df = (function (t) {
      Gt(e, t);
      function e(n) {
        var r = n.queryManager,
          i = n.queryInfo,
          s = n.options,
          o =
            t.call(this, function (x) {
              try {
                var p = x._subscription._observer;
                p && !p.error && (p.error = DD);
              } catch {}
              var m = !o.observers.size;
              o.observers.add(x);
              var y = o.last;
              return (
                y && y.error ? x.error && x.error(y.error) : y && y.result && x.next && x.next(y.result),
                m && o.reobserve().catch(function () {}),
                function () {
                  o.observers.delete(x) && !o.observers.size && o.tearDownQuery();
                }
              );
            }) || this;
        (o.observers = new Set()),
          (o.subscriptions = new Set()),
          (o.queryInfo = i),
          (o.queryManager = r),
          (o.waitForOwnResult = Zu(s.fetchPolicy)),
          (o.isTornDown = !1),
          (o.subscribeToMore = o.subscribeToMore.bind(o));
        var a = r.defaultOptions.watchQuery,
          l = a === void 0 ? {} : a,
          u = l.fetchPolicy,
          c = u === void 0 ? 'cache-first' : u,
          f = s.fetchPolicy,
          h = f === void 0 ? c : f,
          d = s.initialFetchPolicy,
          g = d === void 0 ? (h === 'standby' ? c : h) : d;
        (o.options = k(k({}, s), { initialFetchPolicy: g, fetchPolicy: h })),
          (o.queryId = i.queryId || r.generateQueryId());
        var v = xo(o.query);
        return (o.queryName = v && v.name && v.name.value), o;
      }
      return (
        Object.defineProperty(e.prototype, 'query', {
          get: function () {
            return this.lastQuery || this.options.query;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'variables', {
          get: function () {
            return this.options.variables;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.result = function () {
          var n = this;
          return new Promise(function (r, i) {
            var s = {
                next: function (a) {
                  r(a),
                    n.observers.delete(s),
                    n.observers.size || n.queryManager.removeQuery(n.queryId),
                    setTimeout(function () {
                      o.unsubscribe();
                    }, 0);
                },
                error: i,
              },
              o = n.subscribe(s);
          });
        }),
        (e.prototype.resetDiff = function () {
          this.queryInfo.resetDiff();
        }),
        (e.prototype.getCurrentResult = function (n) {
          n === void 0 && (n = !0);
          var r = this.getLastResult(!0),
            i = this.queryInfo.networkStatus || (r && r.networkStatus) || H.ready,
            s = k(k({}, r), { loading: ao(i), networkStatus: i }),
            o = this.options.fetchPolicy,
            a = o === void 0 ? 'cache-first' : o;
          if (!(Zu(a) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
            if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var l = this.queryInfo.getDiff();
              (l.complete || this.options.returnPartialData) && (s.data = l.result),
                X(s.data, {}) && (s.data = void 0),
                l.complete
                  ? (delete s.partial,
                    l.complete &&
                      s.networkStatus === H.loading &&
                      (a === 'cache-first' || a === 'cache-only') &&
                      ((s.networkStatus = H.ready), (s.loading = !1)))
                  : (s.partial = !0),
                globalThis.__DEV__ !== !1 &&
                  !l.complete &&
                  !this.options.partialRefetch &&
                  !s.loading &&
                  !s.data &&
                  !s.error &&
                  Db(l.missing);
            }
          return n && this.updateLastResult(s), s;
        }),
        (e.prototype.isDifferentFromLastResult = function (n, r) {
          if (!this.last) return !0;
          var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective
            ? !db(this.query, this.last.result, n, this.variables)
            : !X(this.last.result, n);
          return i || (r && !X(this.last.variables, r));
        }),
        (e.prototype.getLast = function (n, r) {
          var i = this.last;
          if (i && i[n] && (!r || X(i.variables, this.variables))) return i[n];
        }),
        (e.prototype.getLastResult = function (n) {
          return this.getLast('result', n);
        }),
        (e.prototype.getLastError = function (n) {
          return this.getLast('error', n);
        }),
        (e.prototype.resetLastResults = function () {
          delete this.last, (this.isTornDown = !1);
        }),
        (e.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        }),
        (e.prototype.refetch = function (n) {
          var r,
            i = { pollInterval: 0 },
            s = this.options.fetchPolicy;
          if (
            (s === 'cache-and-network'
              ? (i.fetchPolicy = s)
              : s === 'no-cache'
                ? (i.fetchPolicy = 'no-cache')
                : (i.fetchPolicy = 'network-only'),
            globalThis.__DEV__ !== !1 && n && CD.call(n, 'variables'))
          ) {
            var o = Vx(this.query),
              a = o.variableDefinitions;
            (!a ||
              !a.some(function (l) {
                return l.variable.name.value === 'variables';
              })) &&
              globalThis.__DEV__ !== !1 &&
              F.warn(20, n, ((r = o.name) === null || r === void 0 ? void 0 : r.value) || o);
          }
          return (
            n &&
              !X(this.options.variables, n) &&
              (i.variables = this.options.variables = k(k({}, this.options.variables), n)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(i, H.refetch)
          );
        }),
        (e.prototype.fetchMore = function (n) {
          var r = this,
            i = k(
              k(
                {},
                n.query
                  ? n
                  : k(k(k(k({}, this.options), { query: this.options.query }), n), {
                      variables: k(k({}, this.options.variables), n.variables),
                    }),
              ),
              { fetchPolicy: 'no-cache' },
            );
          i.query = this.transformDocument(i.query);
          var s = this.queryManager.generateQueryId();
          this.lastQuery = n.query ? this.transformDocument(this.options.query) : i.query;
          var o = this.queryInfo,
            a = o.networkStatus;
          (o.networkStatus = H.fetchMore), i.notifyOnNetworkStatusChange && this.observe();
          var l = new Set(),
            u = n == null ? void 0 : n.updateQuery,
            c = this.options.fetchPolicy !== 'no-cache';
          return (
            c || F(u, 21),
            this.queryManager
              .fetchQuery(s, i, H.fetchMore)
              .then(function (f) {
                if ((r.queryManager.removeQuery(s), o.networkStatus === H.fetchMore && (o.networkStatus = a), c))
                  r.queryManager.cache.batch({
                    update: function (g) {
                      var v = n.updateQuery;
                      v
                        ? g.updateQuery(
                            { query: r.query, variables: r.variables, returnPartialData: !0, optimistic: !1 },
                            function (x) {
                              return v(x, { fetchMoreResult: f.data, variables: i.variables });
                            },
                          )
                        : g.writeQuery({ query: i.query, variables: i.variables, data: f.data });
                    },
                    onWatchUpdated: function (g) {
                      l.add(g.query);
                    },
                  });
                else {
                  var h = r.getLast('result'),
                    d = u(h.data, { fetchMoreResult: f.data, variables: i.variables });
                  r.reportResult(k(k({}, h), { data: d }), r.variables);
                }
                return f;
              })
              .finally(function () {
                c && !l.has(r.query) && Cb(r);
              })
          );
        }),
        (e.prototype.subscribeToMore = function (n) {
          var r = this,
            i = this.queryManager
              .startGraphQLSubscription({ query: n.document, variables: n.variables, context: n.context })
              .subscribe({
                next: function (s) {
                  var o = n.updateQuery;
                  o &&
                    r.updateQuery(function (a, l) {
                      var u = l.variables;
                      return o(a, { subscriptionData: s, variables: u });
                    });
                },
                error: function (s) {
                  if (n.onError) {
                    n.onError(s);
                    return;
                  }
                  globalThis.__DEV__ !== !1 && F.error(22, s);
                },
              });
          return (
            this.subscriptions.add(i),
            function () {
              r.subscriptions.delete(i) && i.unsubscribe();
            }
          );
        }),
        (e.prototype.setOptions = function (n) {
          return this.reobserve(n);
        }),
        (e.prototype.silentSetOptions = function (n) {
          var r = Tr(this.options, n || {});
          Km(this.options, r);
        }),
        (e.prototype.setVariables = function (n) {
          return X(this.variables, n)
            ? this.observers.size
              ? this.result()
              : Promise.resolve()
            : ((this.options.variables = n),
              this.observers.size
                ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: n }, H.setVariables)
                : Promise.resolve());
        }),
        (e.prototype.updateQuery = function (n) {
          var r = this.queryManager,
            i = r.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }).result,
            s = n(i, { variables: this.variables });
          s &&
            (r.cache.writeQuery({ query: this.options.query, data: s, variables: this.variables }),
            r.broadcastQueries());
        }),
        (e.prototype.startPolling = function (n) {
          (this.options.pollInterval = n), this.updatePolling();
        }),
        (e.prototype.stopPolling = function () {
          (this.options.pollInterval = 0), this.updatePolling();
        }),
        (e.prototype.applyNextFetchPolicy = function (n, r) {
          if (r.nextFetchPolicy) {
            var i = r.fetchPolicy,
              s = i === void 0 ? 'cache-first' : i,
              o = r.initialFetchPolicy,
              a = o === void 0 ? s : o;
            s === 'standby' ||
              (typeof r.nextFetchPolicy == 'function'
                ? (r.fetchPolicy = r.nextFetchPolicy(s, {
                    reason: n,
                    options: r,
                    observable: this,
                    initialFetchPolicy: a,
                  }))
                : n === 'variables-changed'
                  ? (r.fetchPolicy = a)
                  : (r.fetchPolicy = r.nextFetchPolicy));
          }
          return r.fetchPolicy;
        }),
        (e.prototype.fetch = function (n, r, i) {
          return (
            this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, n, r, i)
          );
        }),
        (e.prototype.updatePolling = function () {
          var n = this;
          if (!this.queryManager.ssrMode) {
            var r = this,
              i = r.pollingInfo,
              s = r.options.pollInterval;
            if (!s || !this.hasObservers()) {
              i && (clearTimeout(i.timeout), delete this.pollingInfo);
              return;
            }
            if (!(i && i.interval === s)) {
              F(s, 23);
              var o = i || (this.pollingInfo = {});
              o.interval = s;
              var a = function () {
                  var u, c;
                  n.pollingInfo &&
                    (!ao(n.queryInfo.networkStatus) &&
                    !(!((c = (u = n.options).skipPollAttempt) === null || c === void 0) && c.call(u))
                      ? n
                          .reobserve(
                            { fetchPolicy: n.options.initialFetchPolicy === 'no-cache' ? 'no-cache' : 'network-only' },
                            H.poll,
                          )
                          .then(l, l)
                      : l());
                },
                l = function () {
                  var u = n.pollingInfo;
                  u && (clearTimeout(u.timeout), (u.timeout = setTimeout(a, u.interval)));
                };
              l();
            }
          }
        }),
        (e.prototype.updateLastResult = function (n, r) {
          r === void 0 && (r = this.variables);
          var i = this.getLastError();
          return (
            i && this.last && !X(r, this.last.variables) && (i = void 0),
            (this.last = k(
              { result: this.queryManager.assumeImmutableResults ? n : ab(n), variables: r },
              i ? { error: i } : null,
            ))
          );
        }),
        (e.prototype.reobserveAsConcast = function (n, r) {
          var i = this;
          this.isTornDown = !1;
          var s = r === H.refetch || r === H.fetchMore || r === H.poll,
            o = this.options.variables,
            a = this.options.fetchPolicy,
            l = Tr(this.options, n || {}),
            u = s ? l : Km(this.options, l),
            c = this.transformDocument(u.query);
          (this.lastQuery = c),
            s ||
              (this.updatePolling(),
              n &&
                n.variables &&
                !X(n.variables, o) &&
                u.fetchPolicy !== 'standby' &&
                (u.fetchPolicy === a || typeof u.nextFetchPolicy == 'function') &&
                (this.applyNextFetchPolicy('variables-changed', u), r === void 0 && (r = H.setVariables))),
            this.waitForOwnResult && (this.waitForOwnResult = Zu(u.fetchPolicy));
          var f = function () {
              i.concast === g && (i.waitForOwnResult = !1);
            },
            h = u.variables && k({}, u.variables),
            d = this.fetch(u, r, c),
            g = d.concast,
            v = d.fromLink,
            x = {
              next: function (p) {
                X(i.variables, h) && (f(), i.reportResult(p, h));
              },
              error: function (p) {
                X(i.variables, h) && (fb(p) || (p = new Vt({ networkError: p })), f(), i.reportError(p, h));
              },
            };
          return (
            !s &&
              (v || !this.concast) &&
              (this.concast && this.observer && this.concast.removeObserver(this.observer),
              (this.concast = g),
              (this.observer = x)),
            g.addObserver(x),
            g
          );
        }),
        (e.prototype.reobserve = function (n, r) {
          return this.reobserveAsConcast(n, r).promise;
        }),
        (e.prototype.resubscribeAfterError = function () {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          var i = this.last;
          this.resetLastResults();
          var s = this.subscribe.apply(this, n);
          return (this.last = i), s;
        }),
        (e.prototype.observe = function () {
          this.reportResult(this.getCurrentResult(!1), this.variables);
        }),
        (e.prototype.reportResult = function (n, r) {
          var i = this.getLastError(),
            s = this.isDifferentFromLastResult(n, r);
          (i || !n.partial || this.options.returnPartialData) && this.updateLastResult(n, r),
            (i || s) && Os(this.observers, 'next', n);
        }),
        (e.prototype.reportError = function (n, r) {
          var i = k(k({}, this.getLastResult()), {
            error: n,
            errors: n.graphQLErrors,
            networkStatus: H.error,
            loading: !1,
          });
          this.updateLastResult(i, r), Os(this.observers, 'error', (this.last.error = n));
        }),
        (e.prototype.hasObservers = function () {
          return this.observers.size > 0;
        }),
        (e.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (n) {
              return n.unsubscribe();
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0));
        }),
        (e.prototype.transformDocument = function (n) {
          return this.queryManager.transform(n);
        }),
        e
      );
    })(oe);
  lb(Df);
  function Cb(t) {
    var e = t.options,
      n = e.fetchPolicy,
      r = e.nextFetchPolicy;
    return n === 'cache-and-network' || n === 'network-only'
      ? t.reobserve({
          fetchPolicy: 'cache-first',
          nextFetchPolicy: function (i, s) {
            return (
              (this.nextFetchPolicy = r), typeof this.nextFetchPolicy == 'function' ? this.nextFetchPolicy(i, s) : n
            );
          },
        })
      : t.reobserve();
  }
  function DD(t) {
    globalThis.__DEV__ !== !1 && F.error(24, t.message, t.stack);
  }
  function Db(t) {
    globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && F.debug(25, t);
  }
  function Zu(t) {
    return t === 'network-only' || t === 'no-cache' || t === 'standby';
  }
  var ti = new (Ai ? WeakMap : Map)();
  function ec(t, e) {
    var n = t[e];
    typeof n == 'function' &&
      (t[e] = function () {
        return ti.set(t, (ti.get(t) + 1) % 1e15), n.apply(this, arguments);
      });
  }
  function Xm(t) {
    t.notifyTimeout && (clearTimeout(t.notifyTimeout), (t.notifyTimeout = void 0));
  }
  var tc = (function () {
    function t(e, n) {
      n === void 0 && (n = e.generateQueryId()),
        (this.queryId = n),
        (this.listeners = new Set()),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.stopped = !1),
        (this.dirty = !1),
        (this.observableQuery = null);
      var r = (this.cache = e.cache);
      ti.has(r) || (ti.set(r, 0), ec(r, 'evict'), ec(r, 'modify'), ec(r, 'reset'));
    }
    return (
      (t.prototype.init = function (e) {
        var n = e.networkStatus || H.loading;
        return (
          this.variables && this.networkStatus !== H.loading && !X(this.variables, e.variables) && (n = H.setVariables),
          X(e.variables, this.variables) || (this.lastDiff = void 0),
          Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: n,
          }),
          e.observableQuery && this.setObservableQuery(e.observableQuery),
          e.lastRequestId && (this.lastRequestId = e.lastRequestId),
          this
        );
      }),
      (t.prototype.reset = function () {
        Xm(this), (this.dirty = !1);
      }),
      (t.prototype.resetDiff = function () {
        this.lastDiff = void 0;
      }),
      (t.prototype.getDiff = function () {
        var e = this.getDiffOptions();
        if (this.lastDiff && X(e, this.lastDiff.options)) return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var n = this.observableQuery;
        if (n && n.options.fetchPolicy === 'no-cache') return { complete: !1 };
        var r = this.cache.diff(e);
        return this.updateLastDiff(r, e), r;
      }),
      (t.prototype.updateLastDiff = function (e, n) {
        this.lastDiff = e ? { diff: e, options: n || this.getDiffOptions() } : void 0;
      }),
      (t.prototype.getDiffOptions = function (e) {
        var n;
        return (
          e === void 0 && (e = this.variables),
          {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: (n = this.observableQuery) === null || n === void 0 ? void 0 : n.options.canonizeResults,
          }
        );
      }),
      (t.prototype.setDiff = function (e) {
        var n = this,
          r,
          i = this.lastDiff && this.lastDiff.diff;
        (e && !e.complete && !((r = this.observableQuery) === null || r === void 0) && r.getLastError()) ||
          (this.updateLastDiff(e),
          !this.dirty &&
            !X(i && i.result, e && e.result) &&
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return n.notify();
              }, 0))));
      }),
      (t.prototype.setObservableQuery = function (e) {
        var n = this;
        e !== this.observableQuery &&
          (this.oqListener && this.listeners.delete(this.oqListener),
          (this.observableQuery = e),
          e
            ? ((e.queryInfo = this),
              this.listeners.add(
                (this.oqListener = function () {
                  var r = n.getDiff();
                  r.fromOptimisticTransaction ? e.observe() : Cb(e);
                }),
              ))
            : delete this.oqListener);
      }),
      (t.prototype.notify = function () {
        var e = this;
        Xm(this),
          this.shouldNotify() &&
            this.listeners.forEach(function (n) {
              return n(e);
            }),
          (this.dirty = !1);
      }),
      (t.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) return !1;
        if (ao(this.networkStatus) && this.observableQuery) {
          var e = this.observableQuery.options.fetchPolicy;
          if (e !== 'cache-only' && e !== 'cache-and-network') return !1;
        }
        return !0;
      }),
      (t.prototype.stop = function () {
        if (!this.stopped) {
          (this.stopped = !0), this.reset(), this.cancel(), (this.cancel = t.prototype.cancel);
          var e = this.observableQuery;
          e && e.stopPolling();
        }
      }),
      (t.prototype.cancel = function () {}),
      (t.prototype.updateWatch = function (e) {
        var n = this;
        e === void 0 && (e = this.variables);
        var r = this.observableQuery;
        if (!(r && r.options.fetchPolicy === 'no-cache')) {
          var i = k(k({}, this.getDiffOptions(e)), {
            watcher: this,
            callback: function (s) {
              return n.setDiff(s);
            },
          });
          (!this.lastWatch || !X(i, this.lastWatch)) &&
            (this.cancel(), (this.cancel = this.cache.watch((this.lastWatch = i))));
        }
      }),
      (t.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
      }),
      (t.prototype.shouldWrite = function (e, n) {
        var r = this.lastWrite;
        return !(r && r.dmCount === ti.get(this.cache) && X(n, r.variables) && X(e.data, r.result.data));
      }),
      (t.prototype.markResult = function (e, n, r, i) {
        var s = this,
          o = new Kn(),
          a = Et(e.errors) ? e.errors.slice(0) : [];
        if ((this.reset(), 'incremental' in e && Et(e.incremental))) {
          var l = ub(this.getDiff().result, e);
          e.data = l;
        } else if ('hasNext' in e && e.hasNext) {
          var u = this.getDiff();
          e.data = o.merge(u.result, e.data);
        }
        (this.graphQLErrors = a),
          r.fetchPolicy === 'no-cache'
            ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(r.variables))
            : i !== 0 &&
              (Pf(e, r.errorPolicy)
                ? this.cache.performTransaction(function (c) {
                    if (s.shouldWrite(e, r.variables))
                      c.writeQuery({ query: n, data: e.data, variables: r.variables, overwrite: i === 1 }),
                        (s.lastWrite = { result: e, variables: r.variables, dmCount: ti.get(s.cache) });
                    else if (s.lastDiff && s.lastDiff.diff.complete) {
                      e.data = s.lastDiff.diff.result;
                      return;
                    }
                    var f = s.getDiffOptions(r.variables),
                      h = c.diff(f);
                    !s.stopped && X(s.variables, r.variables) && s.updateWatch(r.variables),
                      s.updateLastDiff(h, f),
                      h.complete && (e.data = h.result);
                  })
                : (this.lastWrite = void 0));
      }),
      (t.prototype.markReady = function () {
        return (this.networkError = null), (this.networkStatus = H.ready);
      }),
      (t.prototype.markError = function (e) {
        return (
          (this.networkStatus = H.error),
          (this.lastWrite = void 0),
          this.reset(),
          e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
          e.networkError && (this.networkError = e.networkError),
          e
        );
      }),
      t
    );
  })();
  function Pf(t, e) {
    e === void 0 && (e = 'none');
    var n = e === 'ignore' || e === 'all',
      r = !Ea(t);
    return !r && n && t.data && (r = !0), r;
  }
  var PD = Object.prototype.hasOwnProperty,
    Jm = Object.create(null),
    ND = (function () {
      function t(e) {
        var n = this;
        (this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new id(Yt['queryManager.getDocumentInfo'] || 2e3)),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new Ri(!1));
        var r = new eb(
          function (s) {
            return n.cache.transformDocument(s);
          },
          { cache: !1 },
        );
        (this.cache = e.cache),
          (this.link = e.link),
          (this.defaultOptions = e.defaultOptions),
          (this.queryDeduplication = e.queryDeduplication),
          (this.clientAwareness = e.clientAwareness),
          (this.localState = e.localState),
          (this.ssrMode = e.ssrMode),
          (this.assumeImmutableResults = e.assumeImmutableResults);
        var i = e.documentTransform;
        (this.documentTransform = i ? r.concat(i).concat(r) : r),
          (this.defaultContext = e.defaultContext || Object.create(null)),
          (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null));
      }
      return (
        (t.prototype.stop = function () {
          var e = this;
          this.queries.forEach(function (n, r) {
            e.stopQueryNoBroadcast(r);
          }),
            this.cancelPendingFetches(Ke(26));
        }),
        (t.prototype.cancelPendingFetches = function (e) {
          this.fetchCancelFns.forEach(function (n) {
            return n(e);
          }),
            this.fetchCancelFns.clear();
        }),
        (t.prototype.mutate = function (e) {
          return _n(this, arguments, void 0, function (n) {
            var r,
              i,
              s,
              o,
              a,
              l,
              u,
              c = n.mutation,
              f = n.variables,
              h = n.optimisticResponse,
              d = n.updateQueries,
              g = n.refetchQueries,
              v = g === void 0 ? [] : g,
              x = n.awaitRefetchQueries,
              p = x === void 0 ? !1 : x,
              m = n.update,
              y = n.onQueryUpdated,
              b = n.fetchPolicy,
              _ =
                b === void 0
                  ? ((l = this.defaultOptions.mutate) === null || l === void 0 ? void 0 : l.fetchPolicy) ||
                    'network-only'
                  : b,
              S = n.errorPolicy,
              E =
                S === void 0
                  ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.errorPolicy) || 'none'
                  : S,
              O = n.keepRootFields,
              D = n.context;
            return wn(this, function (P) {
              switch (P.label) {
                case 0:
                  return (
                    F(c, 27),
                    F(_ === 'network-only' || _ === 'no-cache', 28),
                    (r = this.generateMutationId()),
                    (c = this.cache.transformForLink(this.transform(c))),
                    (i = this.getDocumentInfo(c).hasClientExports),
                    (f = this.getVariables(c, f)),
                    i ? [4, this.localState.addExportedVariables(c, f, D)] : [3, 2]
                  );
                case 1:
                  (f = P.sent()), (P.label = 2);
                case 2:
                  return (
                    (s =
                      this.mutationStore &&
                      (this.mutationStore[r] = { mutation: c, variables: f, loading: !0, error: null })),
                    (o =
                      h &&
                      this.markMutationOptimistic(h, {
                        mutationId: r,
                        document: c,
                        variables: f,
                        fetchPolicy: _,
                        errorPolicy: E,
                        context: D,
                        updateQueries: d,
                        update: m,
                        keepRootFields: O,
                      })),
                    this.broadcastQueries(),
                    (a = this),
                    [
                      2,
                      new Promise(function (j, z) {
                        return Yu(
                          a.getObservableFromLink(c, k(k({}, D), { optimisticResponse: o ? h : void 0 }), f, {}, !1),
                          function (U) {
                            if (Ea(U) && E === 'none') throw new Vt({ graphQLErrors: _f(U) });
                            s && ((s.loading = !1), (s.error = null));
                            var le = k({}, U);
                            return (
                              typeof v == 'function' && (v = v(le)),
                              E === 'ignore' && Ea(le) && delete le.errors,
                              a.markMutationResult({
                                mutationId: r,
                                result: le,
                                document: c,
                                variables: f,
                                fetchPolicy: _,
                                errorPolicy: E,
                                context: D,
                                update: m,
                                updateQueries: d,
                                awaitRefetchQueries: p,
                                refetchQueries: v,
                                removeOptimistic: o ? r : void 0,
                                onQueryUpdated: y,
                                keepRootFields: O,
                              })
                            );
                          },
                        ).subscribe({
                          next: function (U) {
                            a.broadcastQueries(), (!('hasNext' in U) || U.hasNext === !1) && j(U);
                          },
                          error: function (U) {
                            s && ((s.loading = !1), (s.error = U)),
                              o && a.cache.removeOptimistic(r),
                              a.broadcastQueries(),
                              z(U instanceof Vt ? U : new Vt({ networkError: U }));
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (t.prototype.markMutationResult = function (e, n) {
          var r = this;
          n === void 0 && (n = this.cache);
          var i = e.result,
            s = [],
            o = e.fetchPolicy === 'no-cache';
          if (!o && Pf(i, e.errorPolicy)) {
            if (
              (fi(i) || s.push({ result: i.data, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }),
              fi(i) && Et(i.incremental))
            ) {
              var a = n.diff({
                  id: 'ROOT_MUTATION',
                  query: this.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0,
                }),
                l = void 0;
              a.result && (l = ub(a.result, i)),
                typeof l < 'u' &&
                  ((i.data = l),
                  s.push({ result: l, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }));
            }
            var u = e.updateQueries;
            u &&
              this.queries.forEach(function (f, h) {
                var d = f.observableQuery,
                  g = d && d.queryName;
                if (!(!g || !PD.call(u, g))) {
                  var v = u[g],
                    x = r.queries.get(h),
                    p = x.document,
                    m = x.variables,
                    y = n.diff({ query: p, variables: m, returnPartialData: !0, optimistic: !1 }),
                    b = y.result,
                    _ = y.complete;
                  if (_ && b) {
                    var S = v(b, { mutationResult: i, queryName: (p && vf(p)) || void 0, queryVariables: m });
                    S && s.push({ result: S, dataId: 'ROOT_QUERY', query: p, variables: m });
                  }
                }
              });
          }
          if (
            s.length > 0 ||
            (e.refetchQueries || '').length > 0 ||
            e.update ||
            e.onQueryUpdated ||
            e.removeOptimistic
          ) {
            var c = [];
            if (
              (this.refetchQueries({
                updateCache: function (f) {
                  o ||
                    s.forEach(function (v) {
                      return f.write(v);
                    });
                  var h = e.update,
                    d = !T2(i) || (fi(i) && !i.hasNext);
                  if (h) {
                    if (!o) {
                      var g = f.diff({
                        id: 'ROOT_MUTATION',
                        query: r.getDocumentInfo(e.document).asQuery,
                        variables: e.variables,
                        optimistic: !1,
                        returnPartialData: !0,
                      });
                      g.complete &&
                        ((i = k(k({}, i), { data: g.result })),
                        'incremental' in i && delete i.incremental,
                        'hasNext' in i && delete i.hasNext);
                    }
                    d && h(f, i, { context: e.context, variables: e.variables });
                  }
                  !o &&
                    !e.keepRootFields &&
                    d &&
                    f.modify({
                      id: 'ROOT_MUTATION',
                      fields: function (v, x) {
                        var p = x.fieldName,
                          m = x.DELETE;
                        return p === '__typename' ? v : m;
                      },
                    });
                },
                include: e.refetchQueries,
                optimistic: !1,
                removeOptimistic: e.removeOptimistic,
                onQueryUpdated: e.onQueryUpdated || null,
              }).forEach(function (f) {
                return c.push(f);
              }),
              e.awaitRefetchQueries || e.onQueryUpdated)
            )
              return Promise.all(c).then(function () {
                return i;
              });
          }
          return Promise.resolve(i);
        }),
        (t.prototype.markMutationOptimistic = function (e, n) {
          var r = this,
            i = typeof e == 'function' ? e(n.variables, { IGNORE: Jm }) : e;
          return i === Jm
            ? !1
            : (this.cache.recordOptimisticTransaction(function (s) {
                try {
                  r.markMutationResult(k(k({}, n), { result: { data: i } }), s);
                } catch (o) {
                  globalThis.__DEV__ !== !1 && F.error(o);
                }
              }, n.mutationId),
              !0);
        }),
        (t.prototype.fetchQuery = function (e, n, r) {
          return this.fetchConcastWithInfo(e, n, r).concast.promise;
        }),
        (t.prototype.getQueryStore = function () {
          var e = Object.create(null);
          return (
            this.queries.forEach(function (n, r) {
              e[r] = {
                variables: n.variables,
                networkStatus: n.networkStatus,
                networkError: n.networkError,
                graphQLErrors: n.graphQLErrors,
              };
            }),
            e
          );
        }),
        (t.prototype.resetErrors = function (e) {
          var n = this.queries.get(e);
          n && ((n.networkError = void 0), (n.graphQLErrors = []));
        }),
        (t.prototype.transform = function (e) {
          return this.documentTransform.transformDocument(e);
        }),
        (t.prototype.getDocumentInfo = function (e) {
          var n = this.transformCache;
          if (!n.has(e)) {
            var r = {
              hasClientExports: aC(e),
              hasForcedResolvers: this.localState.shouldForceResolvers(e),
              hasNonreactiveDirective: no(['nonreactive'], e),
              clientQuery: this.localState.clientQuery(e),
              serverQuery: nb([{ name: 'client', remove: !0 }, { name: 'connection' }, { name: 'nonreactive' }], e),
              defaultVars: od(xo(e)),
              asQuery: k(k({}, e), {
                definitions: e.definitions.map(function (i) {
                  return i.kind === 'OperationDefinition' && i.operation !== 'query'
                    ? k(k({}, i), { operation: 'query' })
                    : i;
                }),
              }),
            };
            n.set(e, r);
          }
          return n.get(e);
        }),
        (t.prototype.getVariables = function (e, n) {
          return k(k({}, this.getDocumentInfo(e).defaultVars), n);
        }),
        (t.prototype.watchQuery = function (e) {
          var n = this.transform(e.query);
          (e = k(k({}, e), { variables: this.getVariables(n, e.variables) })),
            typeof e.notifyOnNetworkStatusChange > 'u' && (e.notifyOnNetworkStatusChange = !1);
          var r = new tc(this),
            i = new Df({ queryManager: this, queryInfo: r, options: e });
          return (
            (i.lastQuery = n),
            this.queries.set(i.queryId, r),
            r.init({ document: n, observableQuery: i, variables: i.variables }),
            i
          );
        }),
        (t.prototype.query = function (e, n) {
          var r = this;
          return (
            n === void 0 && (n = this.generateQueryId()),
            F(e.query, 29),
            F(e.query.kind === 'Document', 30),
            F(!e.returnPartialData, 31),
            F(!e.pollInterval, 32),
            this.fetchQuery(n, k(k({}, e), { query: this.transform(e.query) })).finally(function () {
              return r.stopQuery(n);
            })
          );
        }),
        (t.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        }),
        (t.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        }),
        (t.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        }),
        (t.prototype.stopQueryInStore = function (e) {
          this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
        }),
        (t.prototype.stopQueryInStoreNoBroadcast = function (e) {
          var n = this.queries.get(e);
          n && n.stop();
        }),
        (t.prototype.clearStore = function (e) {
          return (
            e === void 0 && (e = { discardWatches: !0 }),
            this.cancelPendingFetches(Ke(33)),
            this.queries.forEach(function (n) {
              n.observableQuery ? (n.networkStatus = H.loading) : n.stop();
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(e)
          );
        }),
        (t.prototype.getObservableQueries = function (e) {
          var n = this;
          e === void 0 && (e = 'active');
          var r = new Map(),
            i = new Map(),
            s = new Set();
          return (
            Array.isArray(e) &&
              e.forEach(function (o) {
                typeof o == 'string' ? i.set(o, !1) : RC(o) ? i.set(n.transform(o), !1) : xe(o) && o.query && s.add(o);
              }),
            this.queries.forEach(function (o, a) {
              var l = o.observableQuery,
                u = o.document;
              if (l) {
                if (e === 'all') {
                  r.set(a, l);
                  return;
                }
                var c = l.queryName,
                  f = l.options.fetchPolicy;
                if (f === 'standby' || (e === 'active' && !l.hasObservers())) return;
                (e === 'active' || (c && i.has(c)) || (u && i.has(u))) &&
                  (r.set(a, l), c && i.set(c, !0), u && i.set(u, !0));
              }
            }),
            s.size &&
              s.forEach(function (o) {
                var a = lf('legacyOneTimeQuery'),
                  l = n.getQuery(a).init({ document: o.query, variables: o.variables }),
                  u = new Df({ queryManager: n, queryInfo: l, options: k(k({}, o), { fetchPolicy: 'network-only' }) });
                F(u.queryId === a), l.setObservableQuery(u), r.set(a, u);
              }),
            globalThis.__DEV__ !== !1 &&
              i.size &&
              i.forEach(function (o, a) {
                o || (globalThis.__DEV__ !== !1 && F.warn(typeof a == 'string' ? 34 : 35, a));
              }),
            r
          );
        }),
        (t.prototype.reFetchObservableQueries = function (e) {
          var n = this;
          e === void 0 && (e = !1);
          var r = [];
          return (
            this.getObservableQueries(e ? 'all' : 'active').forEach(function (i, s) {
              var o = i.options.fetchPolicy;
              i.resetLastResults(),
                (e || (o !== 'standby' && o !== 'cache-only')) && r.push(i.refetch()),
                n.getQuery(s).setDiff(null);
            }),
            this.broadcastQueries(),
            Promise.all(r)
          );
        }),
        (t.prototype.setObservableQuery = function (e) {
          this.getQuery(e.queryId).setObservableQuery(e);
        }),
        (t.prototype.startGraphQLSubscription = function (e) {
          var n = this,
            r = e.query,
            i = e.fetchPolicy,
            s = e.errorPolicy,
            o = s === void 0 ? 'none' : s,
            a = e.variables,
            l = e.context,
            u = l === void 0 ? {} : l,
            c = e.extensions,
            f = c === void 0 ? {} : c;
          (r = this.transform(r)), (a = this.getVariables(r, a));
          var h = function (g) {
            return n.getObservableFromLink(r, u, g, f).map(function (v) {
              i !== 'no-cache' &&
                (Pf(v, o) && n.cache.write({ query: r, result: v.data, dataId: 'ROOT_SUBSCRIPTION', variables: g }),
                n.broadcastQueries());
              var x = Ea(v),
                p = W2(v);
              if (x || p) {
                var m = {};
                if ((x && (m.graphQLErrors = v.errors), p && (m.protocolErrors = v.extensions[md]), o === 'none' || p))
                  throw new Vt(m);
              }
              return o === 'ignore' && delete v.errors, v;
            });
          };
          if (this.getDocumentInfo(r).hasClientExports) {
            var d = this.localState.addExportedVariables(r, a, u).then(h);
            return new oe(function (g) {
              var v = null;
              return (
                d.then(function (x) {
                  return (v = x.subscribe(g));
                }, g.error),
                function () {
                  return v && v.unsubscribe();
                }
              );
            });
          }
          return h(a);
        }),
        (t.prototype.stopQuery = function (e) {
          this.stopQueryNoBroadcast(e), this.broadcastQueries();
        }),
        (t.prototype.stopQueryNoBroadcast = function (e) {
          this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
        }),
        (t.prototype.removeQuery = function (e) {
          this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
        }),
        (t.prototype.broadcastQueries = function () {
          this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (e) {
              return e.notify();
            });
        }),
        (t.prototype.getLocalState = function () {
          return this.localState;
        }),
        (t.prototype.getObservableFromLink = function (e, n, r, i, s) {
          var o = this,
            a;
          s === void 0 &&
            (s =
              (a = n == null ? void 0 : n.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
          var l,
            u = this.getDocumentInfo(e),
            c = u.serverQuery,
            f = u.clientQuery;
          if (c) {
            var h = this,
              d = h.inFlightLinkObservables,
              g = h.link,
              v = {
                query: c,
                variables: r,
                operationName: vf(c) || void 0,
                context: this.prepareContext(k(k({}, n), { forceFetch: !s })),
                extensions: i,
              };
            if (((n = v.context), s)) {
              var x = iu(c),
                p = Wn(r),
                m = d.lookup(x, p);
              if (((l = m.observable), !l)) {
                var y = new jr([wf(g, v)]);
                (l = m.observable = y),
                  y.beforeNext(function () {
                    d.remove(x, p);
                  });
              }
            } else l = new jr([wf(g, v)]);
          } else (l = new jr([oe.of({ data: {} })])), (n = this.prepareContext(n));
          return (
            f &&
              (l = Yu(l, function (b) {
                return o.localState.runResolvers({ document: f, remoteResult: b, context: n, variables: r });
              })),
            l
          );
        }),
        (t.prototype.getResultsFromLink = function (e, n, r) {
          var i = (e.lastRequestId = this.generateRequestId()),
            s = this.cache.transformForLink(r.query);
          return Yu(
            this.getObservableFromLink(s, r.context, r.variables),
            function (o) {
              var a = _f(o),
                l = a.length > 0,
                u = r.errorPolicy;
              if (i >= e.lastRequestId) {
                if (l && u === 'none') throw e.markError(new Vt({ graphQLErrors: a }));
                e.markResult(o, s, r, n), e.markReady();
              }
              var c = { data: o.data, loading: !1, networkStatus: H.ready };
              return (
                l && u === 'none' && (c.data = void 0),
                l && u !== 'ignore' && ((c.errors = a), (c.networkStatus = H.error)),
                c
              );
            },
            function (o) {
              var a = fb(o) ? o : new Vt({ networkError: o });
              throw (i >= e.lastRequestId && e.markError(a), a);
            },
          );
        }),
        (t.prototype.fetchConcastWithInfo = function (e, n, r, i) {
          var s = this;
          r === void 0 && (r = H.loading), i === void 0 && (i = n.query);
          var o = this.getVariables(i, n.variables),
            a = this.getQuery(e),
            l = this.defaultOptions.watchQuery,
            u = n.fetchPolicy,
            c = u === void 0 ? (l && l.fetchPolicy) || 'cache-first' : u,
            f = n.errorPolicy,
            h = f === void 0 ? (l && l.errorPolicy) || 'none' : f,
            d = n.returnPartialData,
            g = d === void 0 ? !1 : d,
            v = n.notifyOnNetworkStatusChange,
            x = v === void 0 ? !1 : v,
            p = n.context,
            m = p === void 0 ? {} : p,
            y = Object.assign({}, n, {
              query: i,
              variables: o,
              fetchPolicy: c,
              errorPolicy: h,
              returnPartialData: g,
              notifyOnNetworkStatusChange: x,
              context: m,
            }),
            b = function (D) {
              y.variables = D;
              var P = s.fetchQueryByPolicy(a, y, r);
              return (
                y.fetchPolicy !== 'standby' &&
                  P.sources.length > 0 &&
                  a.observableQuery &&
                  a.observableQuery.applyNextFetchPolicy('after-fetch', n),
                P
              );
            },
            _ = function () {
              return s.fetchCancelFns.delete(e);
            };
          this.fetchCancelFns.set(e, function (D) {
            _(),
              setTimeout(function () {
                return S.cancel(D);
              });
          });
          var S, E;
          if (this.getDocumentInfo(y.query).hasClientExports)
            (S = new jr(
              this.localState
                .addExportedVariables(y.query, y.variables, y.context)
                .then(b)
                .then(function (D) {
                  return D.sources;
                }),
            )),
              (E = !0);
          else {
            var O = b(y.variables);
            (E = O.fromLink), (S = new jr(O.sources));
          }
          return S.promise.then(_, _), { concast: S, fromLink: E };
        }),
        (t.prototype.refetchQueries = function (e) {
          var n = this,
            r = e.updateCache,
            i = e.include,
            s = e.optimistic,
            o = s === void 0 ? !1 : s,
            a = e.removeOptimistic,
            l = a === void 0 ? (o ? lf('refetchQueries') : void 0) : a,
            u = e.onQueryUpdated,
            c = new Map();
          i &&
            this.getObservableQueries(i).forEach(function (h, d) {
              c.set(d, { oq: h, lastDiff: n.getQuery(d).getDiff() });
            });
          var f = new Map();
          return (
            r &&
              this.cache.batch({
                update: r,
                optimistic: (o && l) || !1,
                removeOptimistic: l,
                onWatchUpdated: function (h, d, g) {
                  var v = h.watcher instanceof tc && h.watcher.observableQuery;
                  if (v) {
                    if (u) {
                      c.delete(v.queryId);
                      var x = u(v, d, g);
                      return x === !0 && (x = v.refetch()), x !== !1 && f.set(v, x), x;
                    }
                    u !== null && c.set(v.queryId, { oq: v, lastDiff: g, diff: d });
                  }
                },
              }),
            c.size &&
              c.forEach(function (h, d) {
                var g = h.oq,
                  v = h.lastDiff,
                  x = h.diff,
                  p;
                if (u) {
                  if (!x) {
                    var m = g.queryInfo;
                    m.reset(), (x = m.getDiff());
                  }
                  p = u(g, x, v);
                }
                (!u || p === !0) && (p = g.refetch()),
                  p !== !1 && f.set(g, p),
                  d.indexOf('legacyOneTimeQuery') >= 0 && n.stopQueryNoBroadcast(d);
              }),
            l && this.cache.removeOptimistic(l),
            f
          );
        }),
        (t.prototype.fetchQueryByPolicy = function (e, n, r) {
          var i = this,
            s = n.query,
            o = n.variables,
            a = n.fetchPolicy,
            l = n.refetchWritePolicy,
            u = n.errorPolicy,
            c = n.returnPartialData,
            f = n.context,
            h = n.notifyOnNetworkStatusChange,
            d = e.networkStatus;
          e.init({ document: s, variables: o, networkStatus: r });
          var g = function () {
              return e.getDiff();
            },
            v = function (b, _) {
              _ === void 0 && (_ = e.networkStatus || H.loading);
              var S = b.result;
              globalThis.__DEV__ !== !1 && !c && !X(S, {}) && Db(b.missing);
              var E = function (O) {
                return oe.of(k({ data: O, loading: ao(_), networkStatus: _ }, b.complete ? null : { partial: !0 }));
              };
              return S && i.getDocumentInfo(s).hasForcedResolvers
                ? i.localState
                    .runResolvers({
                      document: s,
                      remoteResult: { data: S },
                      context: f,
                      variables: o,
                      onlyRunForcedResolvers: !0,
                    })
                    .then(function (O) {
                      return E(O.data || void 0);
                    })
                : u === 'none' && _ === H.refetch && Array.isArray(b.missing)
                  ? E(void 0)
                  : E(S);
            },
            x = a === 'no-cache' ? 0 : r === H.refetch && l !== 'merge' ? 1 : 2,
            p = function () {
              return i.getResultsFromLink(e, x, { query: s, variables: o, context: f, fetchPolicy: a, errorPolicy: u });
            },
            m = h && typeof d == 'number' && d !== r && ao(r);
          switch (a) {
            default:
            case 'cache-first': {
              var y = g();
              return y.complete
                ? { fromLink: !1, sources: [v(y, e.markReady())] }
                : c || m
                  ? { fromLink: !0, sources: [v(y), p()] }
                  : { fromLink: !0, sources: [p()] };
            }
            case 'cache-and-network': {
              var y = g();
              return y.complete || c || m ? { fromLink: !0, sources: [v(y), p()] } : { fromLink: !0, sources: [p()] };
            }
            case 'cache-only':
              return { fromLink: !1, sources: [v(g(), e.markReady())] };
            case 'network-only':
              return m ? { fromLink: !0, sources: [v(g()), p()] } : { fromLink: !0, sources: [p()] };
            case 'no-cache':
              return m ? { fromLink: !0, sources: [v(e.getDiff()), p()] } : { fromLink: !0, sources: [p()] };
            case 'standby':
              return { fromLink: !1, sources: [] };
          }
        }),
        (t.prototype.getQuery = function (e) {
          return e && !this.queries.has(e) && this.queries.set(e, new tc(this, e)), this.queries.get(e);
        }),
        (t.prototype.prepareContext = function (e) {
          e === void 0 && (e = {});
          var n = this.localState.prepareContext(e);
          return k(k(k({}, this.defaultContext), n), { clientAwareness: this.clientAwareness });
        }),
        t
      );
    })(),
    MD = (function () {
      function t(e) {
        var n = e.cache,
          r = e.client,
          i = e.resolvers,
          s = e.fragmentMatcher;
        (this.selectionsToResolveCache = new WeakMap()),
          (this.cache = n),
          r && (this.client = r),
          i && this.addResolvers(i),
          s && this.setFragmentMatcher(s);
      }
      return (
        (t.prototype.addResolvers = function (e) {
          var n = this;
          (this.resolvers = this.resolvers || {}),
            Array.isArray(e)
              ? e.forEach(function (r) {
                  n.resolvers = xm(n.resolvers, r);
                })
              : (this.resolvers = xm(this.resolvers, e));
        }),
        (t.prototype.setResolvers = function (e) {
          (this.resolvers = {}), this.addResolvers(e);
        }),
        (t.prototype.getResolvers = function () {
          return this.resolvers || {};
        }),
        (t.prototype.runResolvers = function (e) {
          return _n(this, arguments, void 0, function (n) {
            var r = n.document,
              i = n.remoteResult,
              s = n.context,
              o = n.variables,
              a = n.onlyRunForcedResolvers,
              l = a === void 0 ? !1 : a;
            return wn(this, function (u) {
              return r
                ? [
                    2,
                    this.resolveDocument(r, i.data, s, o, this.fragmentMatcher, l).then(function (c) {
                      return k(k({}, i), { data: c.result });
                    }),
                  ]
                : [2, i];
            });
          });
        }),
        (t.prototype.setFragmentMatcher = function (e) {
          this.fragmentMatcher = e;
        }),
        (t.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher;
        }),
        (t.prototype.clientQuery = function (e) {
          return no(['client'], e) && this.resolvers ? e : null;
        }),
        (t.prototype.serverQuery = function (e) {
          return rb(e);
        }),
        (t.prototype.prepareContext = function (e) {
          var n = this.cache;
          return k(k({}, e), {
            cache: n,
            getCacheKey: function (r) {
              return n.identify(r);
            },
          });
        }),
        (t.prototype.addExportedVariables = function (e) {
          return _n(this, arguments, void 0, function (n, r, i) {
            return (
              r === void 0 && (r = {}),
              i === void 0 && (i = {}),
              wn(this, function (s) {
                return n
                  ? [
                      2,
                      this.resolveDocument(n, this.buildRootValueFromCache(n, r) || {}, this.prepareContext(i), r).then(
                        function (o) {
                          return k(k({}, r), o.exportedVariables);
                        },
                      ),
                    ]
                  : [2, k({}, r)];
              })
            );
          });
        }),
        (t.prototype.shouldForceResolvers = function (e) {
          var n = !1;
          return (
            hn(e, {
              Directive: {
                enter: function (r) {
                  if (
                    r.name.value === 'client' &&
                    r.arguments &&
                    ((n = r.arguments.some(function (i) {
                      return i.name.value === 'always' && i.value.kind === 'BooleanValue' && i.value.value === !0;
                    })),
                    n)
                  )
                    return nd;
                },
              },
            }),
            n
          );
        }),
        (t.prototype.buildRootValueFromCache = function (e, n) {
          return this.cache.diff({ query: h2(e), variables: n, returnPartialData: !0, optimistic: !1 }).result;
        }),
        (t.prototype.resolveDocument = function (e, n) {
          return _n(this, arguments, void 0, function (r, i, s, o, a, l) {
            var u, c, f, h, d, g, v, x, p, m, y;
            return (
              s === void 0 && (s = {}),
              o === void 0 && (o = {}),
              a === void 0 &&
                (a = function () {
                  return !0;
                }),
              l === void 0 && (l = !1),
              wn(this, function (b) {
                return (
                  (u = bo(r)),
                  (c = tu(r)),
                  (f = Jl(c)),
                  (h = this.collectSelectionsToResolve(u, f)),
                  (d = u.operation),
                  (g = d ? d.charAt(0).toUpperCase() + d.slice(1) : 'Query'),
                  (v = this),
                  (x = v.cache),
                  (p = v.client),
                  (m = {
                    fragmentMap: f,
                    context: k(k({}, s), { cache: x, client: p }),
                    variables: o,
                    fragmentMatcher: a,
                    defaultOperationType: g,
                    exportedVariables: {},
                    selectionsToResolve: h,
                    onlyRunForcedResolvers: l,
                  }),
                  (y = !1),
                  [
                    2,
                    this.resolveSelectionSet(u.selectionSet, y, i, m).then(function (_) {
                      return { result: _, exportedVariables: m.exportedVariables };
                    }),
                  ]
                );
              })
            );
          });
        }),
        (t.prototype.resolveSelectionSet = function (e, n, r, i) {
          return _n(this, void 0, void 0, function () {
            var s,
              o,
              a,
              l,
              u,
              c = this;
            return wn(this, function (f) {
              return (
                (s = i.fragmentMap),
                (o = i.context),
                (a = i.variables),
                (l = [r]),
                (u = function (h) {
                  return _n(c, void 0, void 0, function () {
                    var d, g;
                    return wn(this, function (v) {
                      return !n && !i.selectionsToResolve.has(h)
                        ? [2]
                        : vo(h, a)
                          ? Yn(h)
                            ? [
                                2,
                                this.resolveField(h, n, r, i).then(function (x) {
                                  var p;
                                  typeof x < 'u' && l.push(((p = {}), (p[qn(h)] = x), p));
                                }),
                              ]
                            : (HC(h) ? (d = h) : ((d = s[h.name.value]), F(d, 18, h.name.value)),
                              d && d.typeCondition && ((g = d.typeCondition.name.value), i.fragmentMatcher(r, g, o))
                                ? [
                                    2,
                                    this.resolveSelectionSet(d.selectionSet, n, r, i).then(function (x) {
                                      l.push(x);
                                    }),
                                  ]
                                : [2])
                          : [2];
                    });
                  });
                }),
                [
                  2,
                  Promise.all(e.selections.map(u)).then(function () {
                    return su(l);
                  }),
                ]
              );
            });
          });
        }),
        (t.prototype.resolveField = function (e, n, r, i) {
          return _n(this, void 0, void 0, function () {
            var s,
              o,
              a,
              l,
              u,
              c,
              f,
              h,
              d,
              g = this;
            return wn(this, function (v) {
              return r
                ? ((s = i.variables),
                  (o = e.name.value),
                  (a = qn(e)),
                  (l = o !== a),
                  (u = r[a] || r[o]),
                  (c = Promise.resolve(u)),
                  (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) &&
                    ((f = r.__typename || i.defaultOperationType),
                    (h = this.resolvers && this.resolvers[f]),
                    h &&
                      ((d = h[l ? o : a]),
                      d &&
                        (c = Promise.resolve(
                          vd.withValue(this.cache, d, [
                            r,
                            eu(e, s),
                            i.context,
                            { field: e, fragmentMap: i.fragmentMap },
                          ]),
                        )))),
                  [
                    2,
                    c.then(function (x) {
                      var p, m;
                      if (
                        (x === void 0 && (x = u),
                        e.directives &&
                          e.directives.forEach(function (b) {
                            b.name.value === 'export' &&
                              b.arguments &&
                              b.arguments.forEach(function (_) {
                                _.name.value === 'as' &&
                                  _.value.kind === 'StringValue' &&
                                  (i.exportedVariables[_.value.value] = x);
                              });
                          }),
                        !e.selectionSet || x == null)
                      )
                        return x;
                      var y =
                        (m =
                          (p = e.directives) === null || p === void 0
                            ? void 0
                            : p.some(function (b) {
                                return b.name.value === 'client';
                              })) !== null && m !== void 0
                          ? m
                          : !1;
                      if (Array.isArray(x)) return g.resolveSubSelectedArray(e, n || y, x, i);
                      if (e.selectionSet) return g.resolveSelectionSet(e.selectionSet, n || y, x, i);
                    }),
                  ])
                : [2, null];
            });
          });
        }),
        (t.prototype.resolveSubSelectedArray = function (e, n, r, i) {
          var s = this;
          return Promise.all(
            r.map(function (o) {
              if (o === null) return null;
              if (Array.isArray(o)) return s.resolveSubSelectedArray(e, n, o, i);
              if (e.selectionSet) return s.resolveSelectionSet(e.selectionSet, n, o, i);
            }),
          );
        }),
        (t.prototype.collectSelectionsToResolve = function (e, n) {
          var r = function (o) {
              return !Array.isArray(o);
            },
            i = this.selectionsToResolveCache;
          function s(o) {
            if (!i.has(o)) {
              var a = new Set();
              i.set(o, a),
                hn(o, {
                  Directive: function (l, u, c, f, h) {
                    l.name.value === 'client' &&
                      h.forEach(function (d) {
                        r(d) && um(d) && a.add(d);
                      });
                  },
                  FragmentSpread: function (l, u, c, f, h) {
                    var d = n[l.name.value];
                    F(d, 19, l.name.value);
                    var g = s(d);
                    g.size > 0 &&
                      (h.forEach(function (v) {
                        r(v) && um(v) && a.add(v);
                      }),
                      a.add(l),
                      g.forEach(function (v) {
                        a.add(v);
                      }));
                  },
                });
            }
            return i.get(o);
          }
          return s(e);
        }),
        t
      );
    })(),
    Zm = !1,
    Pb = (function () {
      function t(e) {
        var n = this;
        if (((this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []), !e.cache)) throw Ke(15);
        var r = e.uri,
          i = e.credentials,
          s = e.headers,
          o = e.cache,
          a = e.documentTransform,
          l = e.ssrMode,
          u = l === void 0 ? !1 : l,
          c = e.ssrForceFetchDelay,
          f = c === void 0 ? 0 : c,
          h = e.connectToDevTools,
          d = e.queryDeduplication,
          g = d === void 0 ? !0 : d,
          v = e.defaultOptions,
          x = e.defaultContext,
          p = e.assumeImmutableResults,
          m = p === void 0 ? o.assumeImmutableResults : p,
          y = e.resolvers,
          b = e.typeDefs,
          _ = e.fragmentMatcher,
          S = e.name,
          E = e.version,
          O = e.devtools,
          D = e.link;
        D || (D = r ? new oD({ uri: r, credentials: i, headers: s }) : _o.empty()),
          (this.link = D),
          (this.cache = o),
          (this.disableNetworkFetches = u || f > 0),
          (this.queryDeduplication = g),
          (this.defaultOptions = v || Object.create(null)),
          (this.typeDefs = b),
          (this.devtoolsConfig = k(k({}, O), { enabled: (O == null ? void 0 : O.enabled) || h })),
          this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1),
          f &&
            setTimeout(function () {
              return (n.disableNetworkFetches = !1);
            }, f),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.watchFragment = this.watchFragment.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
          (this.version = Xh),
          (this.localState = new MD({ cache: o, client: this, resolvers: y, fragmentMatcher: _ })),
          (this.queryManager = new ND({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            defaultContext: x,
            documentTransform: a,
            queryDeduplication: g,
            ssrMode: u,
            clientAwareness: { name: S, version: E },
            localState: this.localState,
            assumeImmutableResults: m,
            onBroadcast: this.devtoolsConfig.enabled
              ? function () {
                  n.devToolsHookCb &&
                    n.devToolsHookCb({
                      action: {},
                      state: { queries: n.queryManager.getQueryStore(), mutations: n.queryManager.mutationStore || {} },
                      dataWithOptimisticResults: n.cache.extract(!0),
                    });
                }
              : void 0,
          })),
          this.devtoolsConfig.enabled && this.connectToDevTools();
      }
      return (
        (t.prototype.connectToDevTools = function () {
          if (!(typeof window > 'u')) {
            var e = window,
              n = Symbol.for('apollo.devtools');
            (e[n] = e[n] || []).push(this),
              (e.__APOLLO_CLIENT__ = this),
              !Zm &&
                globalThis.__DEV__ !== !1 &&
                ((Zm = !0),
                window.document &&
                  window.top === window.self &&
                  /^(https?|file):$/.test(window.location.protocol) &&
                  setTimeout(function () {
                    if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                      var r = window.navigator,
                        i = r && r.userAgent,
                        s = void 0;
                      typeof i == 'string' &&
                        (i.indexOf('Chrome/') > -1
                          ? (s =
                              'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm')
                          : i.indexOf('Firefox/') > -1 &&
                            (s = 'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/')),
                        s &&
                          globalThis.__DEV__ !== !1 &&
                          F.log('Download the Apollo DevTools for a better development experience: %s', s);
                    }
                  }, 1e4));
          }
        }),
        Object.defineProperty(t.prototype, 'documentTransform', {
          get: function () {
            return this.queryManager.documentTransform;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.stop = function () {
          this.queryManager.stop();
        }),
        (t.prototype.watchQuery = function (e) {
          return (
            this.defaultOptions.watchQuery && (e = Ts(this.defaultOptions.watchQuery, e)),
            this.disableNetworkFetches &&
              (e.fetchPolicy === 'network-only' || e.fetchPolicy === 'cache-and-network') &&
              (e = k(k({}, e), { fetchPolicy: 'cache-first' })),
            this.queryManager.watchQuery(e)
          );
        }),
        (t.prototype.query = function (e) {
          return (
            this.defaultOptions.query && (e = Ts(this.defaultOptions.query, e)),
            F(e.fetchPolicy !== 'cache-and-network', 16),
            this.disableNetworkFetches &&
              e.fetchPolicy === 'network-only' &&
              (e = k(k({}, e), { fetchPolicy: 'cache-first' })),
            this.queryManager.query(e)
          );
        }),
        (t.prototype.mutate = function (e) {
          return this.defaultOptions.mutate && (e = Ts(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
        }),
        (t.prototype.subscribe = function (e) {
          return this.queryManager.startGraphQLSubscription(e);
        }),
        (t.prototype.readQuery = function (e, n) {
          return n === void 0 && (n = !1), this.cache.readQuery(e, n);
        }),
        (t.prototype.watchFragment = function (e) {
          return this.cache.watchFragment(e);
        }),
        (t.prototype.readFragment = function (e, n) {
          return n === void 0 && (n = !1), this.cache.readFragment(e, n);
        }),
        (t.prototype.writeQuery = function (e) {
          var n = this.cache.writeQuery(e);
          return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (t.prototype.writeFragment = function (e) {
          var n = this.cache.writeFragment(e);
          return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (t.prototype.__actionHookForDevTools = function (e) {
          this.devToolsHookCb = e;
        }),
        (t.prototype.__requestRaw = function (e) {
          return wf(this.link, e);
        }),
        (t.prototype.resetStore = function () {
          var e = this;
          return Promise.resolve()
            .then(function () {
              return e.queryManager.clearStore({ discardWatches: !1 });
            })
            .then(function () {
              return Promise.all(
                e.resetStoreCallbacks.map(function (n) {
                  return n();
                }),
              );
            })
            .then(function () {
              return e.reFetchObservableQueries();
            });
        }),
        (t.prototype.clearStore = function () {
          var e = this;
          return Promise.resolve()
            .then(function () {
              return e.queryManager.clearStore({ discardWatches: !0 });
            })
            .then(function () {
              return Promise.all(
                e.clearStoreCallbacks.map(function (n) {
                  return n();
                }),
              );
            });
        }),
        (t.prototype.onResetStore = function (e) {
          var n = this;
          return (
            this.resetStoreCallbacks.push(e),
            function () {
              n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function (r) {
                return r !== e;
              });
            }
          );
        }),
        (t.prototype.onClearStore = function (e) {
          var n = this;
          return (
            this.clearStoreCallbacks.push(e),
            function () {
              n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function (r) {
                return r !== e;
              });
            }
          );
        }),
        (t.prototype.reFetchObservableQueries = function (e) {
          return this.queryManager.reFetchObservableQueries(e);
        }),
        (t.prototype.refetchQueries = function (e) {
          var n = this.queryManager.refetchQueries(e),
            r = [],
            i = [];
          n.forEach(function (o, a) {
            r.push(a), i.push(o);
          });
          var s = Promise.all(i);
          return (
            (s.queries = r),
            (s.results = i),
            s.catch(function (o) {
              globalThis.__DEV__ !== !1 && F.debug(17, o);
            }),
            s
          );
        }),
        (t.prototype.getObservableQueries = function (e) {
          return e === void 0 && (e = 'active'), this.queryManager.getObservableQueries(e);
        }),
        (t.prototype.extract = function (e) {
          return this.cache.extract(e);
        }),
        (t.prototype.restore = function (e) {
          return this.cache.restore(e);
        }),
        (t.prototype.addResolvers = function (e) {
          this.localState.addResolvers(e);
        }),
        (t.prototype.setResolvers = function (e) {
          this.localState.setResolvers(e);
        }),
        (t.prototype.getResolvers = function () {
          return this.localState.getResolvers();
        }),
        (t.prototype.setLocalStateFragmentMatcher = function (e) {
          this.localState.setFragmentMatcher(e);
        }),
        (t.prototype.setLink = function (e) {
          this.link = this.queryManager.link = e;
        }),
        Object.defineProperty(t.prototype, 'defaultContext', {
          get: function () {
            return this.queryManager.defaultContext;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
  globalThis.__DEV__ !== !1 && (Pb.prototype.getMemoryInternals = EC);
  var Ca = new Map(),
    Nf = new Map(),
    Nb = !0,
    kl = !1;
  function Mb(t) {
    return t.replace(/[\s,]+/g, ' ').trim();
  }
  function ID(t) {
    return Mb(t.source.body.substring(t.start, t.end));
  }
  function RD(t) {
    var e = new Set(),
      n = [];
    return (
      t.definitions.forEach(function (r) {
        if (r.kind === 'FragmentDefinition') {
          var i = r.name.value,
            s = ID(r.loc),
            o = Nf.get(i);
          o && !o.has(s)
            ? Nb &&
              console.warn(
                'Warning: fragment with name ' +
                  i +
                  ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`,
              )
            : o || Nf.set(i, (o = new Set())),
            o.add(s),
            e.has(s) || (e.add(s), n.push(r));
        } else n.push(r);
      }),
      k(k({}, t), { definitions: n })
    );
  }
  function AD(t) {
    var e = new Set(t.definitions);
    e.forEach(function (r) {
      r.loc && delete r.loc,
        Object.keys(r).forEach(function (i) {
          var s = r[i];
          s && typeof s == 'object' && e.add(s);
        });
    });
    var n = t.loc;
    return n && (delete n.startToken, delete n.endToken), t;
  }
  function LD(t) {
    var e = Mb(t);
    if (!Ca.has(e)) {
      var n = XT(t, { experimentalFragmentVariables: kl, allowLegacyFragmentVariables: kl });
      if (!n || n.kind !== 'Document') throw new Error('Not a valid GraphQL document.');
      Ca.set(e, AD(RD(n)));
    }
    return Ca.get(e);
  }
  function Xe(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    typeof t == 'string' && (t = [t]);
    var r = t[0];
    return (
      e.forEach(function (i, s) {
        i && i.kind === 'Document' ? (r += i.loc.source.body) : (r += i), (r += t[s + 1]);
      }),
      LD(r)
    );
  }
  function FD() {
    Ca.clear(), Nf.clear();
  }
  function jD() {
    Nb = !1;
  }
  function zD() {
    kl = !0;
  }
  function BD() {
    kl = !1;
  }
  var es = {
    gql: Xe,
    resetCaches: FD,
    disableFragmentWarnings: jD,
    enableExperimentalFragmentVariables: zD,
    disableExperimentalFragmentVariables: BD,
  };
  (function (t) {
    (t.gql = es.gql),
      (t.resetCaches = es.resetCaches),
      (t.disableFragmentWarnings = es.disableFragmentWarnings),
      (t.enableExperimentalFragmentVariables = es.enableExperimentalFragmentVariables),
      (t.disableExperimentalFragmentVariables = es.disableExperimentalFragmentVariables);
  })(Xe || (Xe = {}));
  Xe.default = Xe;
  var Ib = { exports: {} };
  (function (t) {
    (t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
      (t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
      (t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
      Object.assign(t.exports, C);
  })(Ib);
  var ie = Ib.exports;
  const VD = cv(ie),
    Rb = uv({ __proto__: null, default: VD }, [ie]);
  var ev = rd ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
  function _d() {
    F('createContext' in Rb, 46);
    var t = ie.createContext[ev];
    return (
      t ||
        (Object.defineProperty(ie.createContext, ev, {
          value: (t = ie.createContext({})),
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        (t.displayName = 'ApolloContext')),
      t
    );
  }
  var UD = function (t) {
    var e = t.client,
      n = t.children,
      r = _d(),
      i = ie.useContext(r),
      s = ie.useMemo(
        function () {
          return k(k({}, i), { client: e || i.client });
        },
        [i, e],
      );
    return F(s.client, 47), ie.createElement(r.Provider, { value: s }, n);
  };
  function wd(t) {
    var e = ie.useContext(_d()),
      n = t || e.client;
    return F(!!n, 50), n;
  }
  var tv = !1,
    WD = 'useSyncExternalStore',
    $D = Rb[WD],
    QD =
      $D ||
      function (t, e, n) {
        var r = e();
        globalThis.__DEV__ !== !1 && !tv && r !== e() && ((tv = !0), globalThis.__DEV__ !== !1 && F.error(60));
        var i = ie.useState({ inst: { value: r, getSnapshot: e } }),
          s = i[0].inst,
          o = i[1];
        return (
          gC
            ? ie.useLayoutEffect(
                function () {
                  Object.assign(s, { value: r, getSnapshot: e }), nc(s) && o({ inst: s });
                },
                [t, r, e],
              )
            : Object.assign(s, { value: r, getSnapshot: e }),
          ie.useEffect(
            function () {
              return (
                nc(s) && o({ inst: s }),
                t(function () {
                  nc(s) && o({ inst: s });
                })
              );
            },
            [t],
          ),
          r
        );
      };
  function nc(t) {
    var e = t.value,
      n = t.getSnapshot;
    try {
      return e !== n();
    } catch {
      return !0;
    }
  }
  var qt;
  (function (t) {
    (t[(t.Query = 0)] = 'Query'), (t[(t.Mutation = 1)] = 'Mutation'), (t[(t.Subscription = 2)] = 'Subscription');
  })(qt || (qt = {}));
  var gr;
  function nv(t) {
    var e;
    switch (t) {
      case qt.Query:
        e = 'Query';
        break;
      case qt.Mutation:
        e = 'Mutation';
        break;
      case qt.Subscription:
        e = 'Subscription';
        break;
    }
    return e;
  }
  function Ab(t) {
    gr || (gr = new id(Yt.parser || 1e3));
    var e = gr.get(t);
    if (e) return e;
    var n, r, i;
    F(!!t && !!t.kind, 62, t);
    for (var s = [], o = [], a = [], l = [], u = 0, c = t.definitions; u < c.length; u++) {
      var f = c[u];
      if (f.kind === 'FragmentDefinition') {
        s.push(f);
        continue;
      }
      if (f.kind === 'OperationDefinition')
        switch (f.operation) {
          case 'query':
            o.push(f);
            break;
          case 'mutation':
            a.push(f);
            break;
          case 'subscription':
            l.push(f);
            break;
        }
    }
    F(!s.length || o.length || a.length || l.length, 63),
      F(o.length + a.length + l.length <= 1, 64, t, o.length, l.length, a.length),
      (r = o.length ? qt.Query : qt.Mutation),
      !o.length && !a.length && (r = qt.Subscription);
    var h = o.length ? o : a.length ? a : l;
    F(h.length === 1, 65, t, h.length);
    var d = h[0];
    (n = d.variableDefinitions || []), d.name && d.name.kind === 'Name' ? (i = d.name.value) : (i = 'data');
    var g = { name: i, type: r, variables: n };
    return gr.set(t, g), g;
  }
  Ab.resetCache = function () {
    gr = void 0;
  };
  globalThis.__DEV__ !== !1 &&
    sd('parser', function () {
      return gr ? gr.size : 0;
    });
  function Lb(t, e) {
    var n = Ab(t),
      r = nv(e),
      i = nv(n.type);
    F(n.type === e, 66, r, r, i);
  }
  var HD = Ax ? ie.useLayoutEffect : ie.useEffect,
    qD = Symbol.for('apollo.hook.wrappers');
  function YD(t, e, n) {
    var r = n.queryManager,
      i = r && r[qD],
      s = i && i[t];
    return s ? s(e) : e;
  }
  var GD = Object.prototype.hasOwnProperty;
  function rv() {}
  var Da = Symbol();
  function Ei(t, e) {
    return e === void 0 && (e = Object.create(null)), YD('useQuery', KD, wd(e && e.client))(t, e);
  }
  function KD(t, e) {
    var n = JD(t, e),
      r = n.result,
      i = n.obsQueryFields;
    return ie.useMemo(
      function () {
        return k(k({}, r), i);
      },
      [r, i],
    );
  }
  function XD(t, e, n, r, i) {
    function s(f) {
      var h;
      Lb(e, qt.Query);
      var d = {
        client: t,
        query: e,
        observable: (r && r.getSSRObservable(i())) || t.watchQuery(Fb(void 0, t, n, i())),
        resultData: {
          previousData: (h = f == null ? void 0 : f.resultData.current) === null || h === void 0 ? void 0 : h.data,
        },
      };
      return d;
    }
    var o = ie.useState(s),
      a = o[0],
      l = o[1];
    function u(f) {
      var h, d;
      Object.assign(a.observable, ((h = {}), (h[Da] = f), h));
      var g = a.resultData;
      l(
        k(k({}, a), {
          query: f.query,
          resultData: Object.assign(g, {
            previousData: ((d = g.current) === null || d === void 0 ? void 0 : d.data) || g.previousData,
            current: void 0,
          }),
        }),
      );
    }
    if (t !== a.client || e !== a.query) {
      var c = s(a);
      return l(c), [c, u];
    }
    return [a, u];
  }
  function JD(t, e) {
    var n = wd(e.client),
      r = ie.useContext(_d()).renderPromises,
      i = !!r,
      s = n.disableNetworkFetches,
      o = e.ssr !== !1 && !e.skip,
      a = e.partialRefetch,
      l = nP(n, t, e, i),
      u = XD(n, t, e, r, l),
      c = u[0],
      f = c.observable,
      h = c.resultData,
      d = u[1],
      g = l(f);
    tP(h, f, n, e, g);
    var v = ie.useMemo(
      function () {
        return oP(f);
      },
      [f],
    );
    eP(f, r, o);
    var x = ZD(h, f, n, e, g, s, a, i, { onCompleted: e.onCompleted || rv, onError: e.onError || rv });
    return { result: x, obsQueryFields: v, observable: f, resultData: h, client: n, onQueryExecuted: d };
  }
  function ZD(t, e, n, r, i, s, o, a, l) {
    var u = ie.useRef(l);
    ie.useEffect(function () {
      u.current = l;
    });
    var c = (a || s) && r.ssr === !1 && !r.skip ? zb : r.skip || i.fetchPolicy === 'standby' ? Bb : void 0,
      f = t.previousData,
      h = ie.useMemo(
        function () {
          return c && jb(c, f, e, n);
        },
        [n, e, c, f],
      );
    return QD(
      ie.useCallback(
        function (d) {
          if (a) return function () {};
          var g = function () {
              var p = t.current,
                m = e.getCurrentResult();
              (p && p.loading === m.loading && p.networkStatus === m.networkStatus && X(p.data, m.data)) ||
                Mf(m, t, e, n, o, d, u.current);
            },
            v = function (p) {
              if ((x.current.unsubscribe(), (x.current = e.resubscribeAfterError(g, v)), !GD.call(p, 'graphQLErrors')))
                throw p;
              var m = t.current;
              (!m || (m && m.loading) || !X(p, m.error)) &&
                Mf({ data: m && m.data, error: p, loading: !1, networkStatus: H.error }, t, e, n, o, d, u.current);
            },
            x = { current: e.subscribe(g, v) };
          return function () {
            setTimeout(function () {
              return x.current.unsubscribe();
            });
          };
        },
        [s, a, e, t, o, n],
      ),
      function () {
        return h || iv(t, e, u.current, o, n);
      },
      function () {
        return h || iv(t, e, u.current, o, n);
      },
    );
  }
  function eP(t, e, n) {
    e && n && (e.registerSSRObservable(t), t.getCurrentResult().loading && e.addObservableQueryPromise(t));
  }
  function tP(t, e, n, r, i) {
    var s;
    e[Da] &&
      !X(e[Da], i) &&
      (e.reobserve(Fb(e, n, r, i)),
      (t.previousData = ((s = t.current) === null || s === void 0 ? void 0 : s.data) || t.previousData),
      (t.current = void 0)),
      (e[Da] = i);
  }
  function nP(t, e, n, r) {
    n === void 0 && (n = {});
    var i = n.skip;
    n.ssr, n.onCompleted, n.onError;
    var s = n.defaultOptions,
      o = Rt(n, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions']);
    return function (a) {
      var l = Object.assign(o, { query: e });
      return (
        r &&
          (l.fetchPolicy === 'network-only' || l.fetchPolicy === 'cache-and-network') &&
          (l.fetchPolicy = 'cache-first'),
        l.variables || (l.variables = {}),
        i
          ? ((l.initialFetchPolicy = l.initialFetchPolicy || l.fetchPolicy || sv(s, t.defaultOptions)),
            (l.fetchPolicy = 'standby'))
          : l.fetchPolicy ||
            (l.fetchPolicy = (a == null ? void 0 : a.options.initialFetchPolicy) || sv(s, t.defaultOptions)),
        l
      );
    };
  }
  function Fb(t, e, n, r) {
    var i = [],
      s = e.defaultOptions.watchQuery;
    return s && i.push(s), n.defaultOptions && i.push(n.defaultOptions), i.push(Tr(t && t.options, r)), i.reduce(Ts);
  }
  function Mf(t, e, n, r, i, s, o) {
    var a = e.current;
    a && a.data && (e.previousData = a.data),
      !t.error && Et(t.errors) && (t.error = new Vt({ graphQLErrors: t.errors })),
      (e.current = jb(sP(t, n, i), e.previousData, n, r)),
      s(),
      rP(t, a == null ? void 0 : a.networkStatus, o);
  }
  function rP(t, e, n) {
    if (!t.loading) {
      var r = iP(t);
      Promise.resolve()
        .then(function () {
          r ? n.onError(r) : t.data && e !== t.networkStatus && t.networkStatus === H.ready && n.onCompleted(t.data);
        })
        .catch(function (i) {
          globalThis.__DEV__ !== !1 && F.warn(i);
        });
    }
  }
  function iv(t, e, n, r, i) {
    return t.current || Mf(e.getCurrentResult(), t, e, i, r, function () {}, n), t.current;
  }
  function sv(t, e) {
    var n;
    return (
      (t == null ? void 0 : t.fetchPolicy) ||
      ((n = e == null ? void 0 : e.watchQuery) === null || n === void 0 ? void 0 : n.fetchPolicy) ||
      'cache-first'
    );
  }
  function iP(t) {
    return Et(t.errors) ? new Vt({ graphQLErrors: t.errors }) : t.error;
  }
  function jb(t, e, n, r) {
    var i = t.data;
    t.partial;
    var s = Rt(t, ['data', 'partial']),
      o = k(k({ data: i }, s), {
        client: r,
        observable: n,
        variables: n.variables,
        called: t !== zb && t !== Bb,
        previousData: e,
      });
    return o;
  }
  function sP(t, e, n) {
    return t.partial &&
      n &&
      !t.loading &&
      (!t.data || Object.keys(t.data).length === 0) &&
      e.options.fetchPolicy !== 'cache-only'
      ? (e.refetch(), k(k({}, t), { loading: !0, networkStatus: H.refetch }))
      : t;
  }
  var zb = so({ loading: !0, data: void 0, error: void 0, networkStatus: H.loading }),
    Bb = so({ loading: !1, data: void 0, error: void 0, networkStatus: H.ready });
  function oP(t) {
    return {
      refetch: t.refetch.bind(t),
      reobserve: t.reobserve.bind(t),
      fetchMore: t.fetchMore.bind(t),
      updateQuery: t.updateQuery.bind(t),
      startPolling: t.startPolling.bind(t),
      stopPolling: t.stopPolling.bind(t),
      subscribeToMore: t.subscribeToMore.bind(t),
    };
  }
  function Li(t, e) {
    var n = wd(e == null ? void 0 : e.client);
    Lb(t, qt.Mutation);
    var r = ie.useState({ called: !1, loading: !1, client: n }),
      i = r[0],
      s = r[1],
      o = ie.useRef({ result: i, mutationId: 0, isMounted: !0, client: n, mutation: t, options: e });
    HD(function () {
      Object.assign(o.current, { client: n, options: e, mutation: t });
    });
    var a = ie.useCallback(function (u) {
        u === void 0 && (u = {});
        var c = o.current,
          f = c.options,
          h = c.mutation,
          d = k(k({}, f), { mutation: h }),
          g = u.client || o.current.client;
        !o.current.result.loading &&
          !d.ignoreResults &&
          o.current.isMounted &&
          s((o.current.result = { loading: !0, error: void 0, data: void 0, called: !0, client: g }));
        var v = ++o.current.mutationId,
          x = Ts(d, u);
        return g
          .mutate(x)
          .then(function (p) {
            var m,
              y,
              b = p.data,
              _ = p.errors,
              S = _ && _.length > 0 ? new Vt({ graphQLErrors: _ }) : void 0,
              E = u.onError || ((m = o.current.options) === null || m === void 0 ? void 0 : m.onError);
            if ((S && E && E(S, x), v === o.current.mutationId && !x.ignoreResults)) {
              var O = { called: !0, loading: !1, data: b, error: S, client: g };
              o.current.isMounted && !X(o.current.result, O) && s((o.current.result = O));
            }
            var D = u.onCompleted || ((y = o.current.options) === null || y === void 0 ? void 0 : y.onCompleted);
            return S || D == null || D(p.data, x), p;
          })
          .catch(function (p) {
            var m;
            if (v === o.current.mutationId && o.current.isMounted) {
              var y = { loading: !1, error: p, data: void 0, called: !0, client: g };
              X(o.current.result, y) || s((o.current.result = y));
            }
            var b = u.onError || ((m = o.current.options) === null || m === void 0 ? void 0 : m.onError);
            if (b) return b(p, x), { data: void 0, errors: p };
            throw p;
          });
      }, []),
      l = ie.useCallback(function () {
        if (o.current.isMounted) {
          var u = { called: !1, loading: !1, client: o.current.client };
          Object.assign(o.current, { mutationId: 0, result: u }), s(u);
        }
      }, []);
    return (
      ie.useEffect(function () {
        var u = o.current;
        return (
          (u.isMounted = !0),
          function () {
            u.isMounted = !1;
          }
        );
      }, []),
      [a, k({ reset: l }, i)]
    );
  }
  let aP = { data: '' },
    lP = (t) =>
      typeof window == 'object'
        ? (
            (t ? t.querySelector('#_goober') : window._goober) ||
            Object.assign((t || document.head).appendChild(document.createElement('style')), {
              innerHTML: ' ',
              id: '_goober',
            })
          ).firstChild
        : t || aP,
    uP = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    cP = /\/\*[^]*?\*\/|  +/g,
    ov = /\n+/g,
    On = (t, e) => {
      let n = '',
        r = '',
        i = '';
      for (let s in t) {
        let o = t[s];
        s[0] == '@'
          ? s[1] == 'i'
            ? (n = s + ' ' + o + ';')
            : (r += s[1] == 'f' ? On(o, s) : s + '{' + On(o, s[1] == 'k' ? '' : e) + '}')
          : typeof o == 'object'
            ? (r += On(
                o,
                e
                  ? e.replace(/([^,])+/g, (a) =>
                      s.replace(/(^:.*)|([^,])+/g, (l) => (/&/.test(l) ? l.replace(/&/g, a) : a ? a + ' ' + l : l)),
                    )
                  : s,
              ))
            : o != null &&
              ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, '-$&').toLowerCase()),
              (i += On.p ? On.p(s, o) : s + ':' + o + ';'));
      }
      return n + (e && i ? e + '{' + i + '}' : i) + r;
    },
    Jt = {},
    Vb = (t) => {
      if (typeof t == 'object') {
        let e = '';
        for (let n in t) e += n + Vb(t[n]);
        return e;
      }
      return t;
    },
    fP = (t, e, n, r, i) => {
      let s = Vb(t),
        o =
          Jt[s] ||
          (Jt[s] = ((l) => {
            let u = 0,
              c = 11;
            for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
            return 'go' + c;
          })(s));
      if (!Jt[o]) {
        let l =
          s !== t
            ? t
            : ((u) => {
                let c,
                  f,
                  h = [{}];
                for (; (c = uP.exec(u.replace(cP, ''))); )
                  c[4]
                    ? h.shift()
                    : c[3]
                      ? ((f = c[3].replace(ov, ' ').trim()), h.unshift((h[0][f] = h[0][f] || {})))
                      : (h[0][c[1]] = c[2].replace(ov, ' ').trim());
                return h[0];
              })(t);
        Jt[o] = On(i ? { ['@keyframes ' + o]: l } : l, n ? '' : '.' + o);
      }
      let a = n && Jt.g ? Jt.g : null;
      return (
        n && (Jt.g = Jt[o]),
        ((l, u, c, f) => {
          f ? (u.data = u.data.replace(f, l)) : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
        })(Jt[o], e, r, a),
        o
      );
    },
    hP = (t, e, n) =>
      t.reduce((r, i, s) => {
        let o = e[s];
        if (o && o.call) {
          let a = o(n),
            l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
          o = l ? '.' + l : a && typeof a == 'object' ? (a.props ? '' : On(a, '')) : a === !1 ? '' : a;
        }
        return r + i + (o ?? '');
      }, '');
  function ou(t) {
    let e = this || {},
      n = t.call ? t(e.p) : t;
    return fP(
      n.unshift
        ? n.raw
          ? hP(n, [].slice.call(arguments, 1), e.p)
          : n.reduce((r, i) => Object.assign(r, i && i.call ? i(e.p) : i), {})
        : n,
      lP(e.target),
      e.g,
      e.o,
      e.k,
    );
  }
  let Ub, If, Rf;
  ou.bind({ g: 1 });
  let dn = ou.bind({ k: 1 });
  function dP(t, e, n, r) {
    (On.p = e), (Ub = t), (If = n), (Rf = r);
  }
  function nr(t, e) {
    let n = this || {};
    return function () {
      let r = arguments;
      function i(s, o) {
        let a = Object.assign({}, s),
          l = a.className || i.className;
        (n.p = Object.assign({ theme: If && If() }, a)),
          (n.o = / *go\d+/.test(l)),
          (a.className = ou.apply(n, r) + (l ? ' ' + l : ''));
        let u = t;
        return t[0] && ((u = a.as || t), delete a.as), Rf && u[0] && Rf(a), Ub(u, a);
      }
      return i;
    };
  }
  var pP = (t) => typeof t == 'function',
    El = (t, e) => (pP(t) ? t(e) : t),
    gP = (() => {
      let t = 0;
      return () => (++t).toString();
    })(),
    Wb = (() => {
      let t;
      return () => {
        if (t === void 0 && typeof window < 'u') {
          let e = matchMedia('(prefers-reduced-motion: reduce)');
          t = !e || e.matches;
        }
        return t;
      };
    })(),
    mP = 20,
    Pa = new Map(),
    vP = 1e3,
    av = (t) => {
      if (Pa.has(t)) return;
      let e = setTimeout(() => {
        Pa.delete(t), Mr({ type: 4, toastId: t });
      }, vP);
      Pa.set(t, e);
    },
    yP = (t) => {
      let e = Pa.get(t);
      e && clearTimeout(e);
    },
    Af = (t, e) => {
      switch (e.type) {
        case 0:
          return { ...t, toasts: [e.toast, ...t.toasts].slice(0, mP) };
        case 1:
          return (
            e.toast.id && yP(e.toast.id),
            { ...t, toasts: t.toasts.map((s) => (s.id === e.toast.id ? { ...s, ...e.toast } : s)) }
          );
        case 2:
          let { toast: n } = e;
          return t.toasts.find((s) => s.id === n.id) ? Af(t, { type: 1, toast: n }) : Af(t, { type: 0, toast: n });
        case 3:
          let { toastId: r } = e;
          return (
            r
              ? av(r)
              : t.toasts.forEach((s) => {
                  av(s.id);
                }),
            { ...t, toasts: t.toasts.map((s) => (s.id === r || r === void 0 ? { ...s, visible: !1 } : s)) }
          );
        case 4:
          return e.toastId === void 0
            ? { ...t, toasts: [] }
            : { ...t, toasts: t.toasts.filter((s) => s.id !== e.toastId) };
        case 5:
          return { ...t, pausedAt: e.time };
        case 6:
          let i = e.time - (t.pausedAt || 0);
          return {
            ...t,
            pausedAt: void 0,
            toasts: t.toasts.map((s) => ({ ...s, pauseDuration: s.pauseDuration + i })),
          };
      }
    },
    Na = [],
    Ma = { toasts: [], pausedAt: void 0 },
    Mr = (t) => {
      (Ma = Af(Ma, t)),
        Na.forEach((e) => {
          e(Ma);
        });
    },
    xP = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    bP = (t = {}) => {
      let [e, n] = C.useState(Ma);
      C.useEffect(
        () => (
          Na.push(n),
          () => {
            let i = Na.indexOf(n);
            i > -1 && Na.splice(i, 1);
          }
        ),
        [e],
      );
      let r = e.toasts.map((i) => {
        var s, o;
        return {
          ...t,
          ...t[i.type],
          ...i,
          duration:
            i.duration ||
            ((s = t[i.type]) == null ? void 0 : s.duration) ||
            (t == null ? void 0 : t.duration) ||
            xP[i.type],
          style: { ...t.style, ...((o = t[i.type]) == null ? void 0 : o.style), ...i.style },
        };
      });
      return { ...e, toasts: r };
    },
    _P = (t, e = 'blank', n) => ({
      createdAt: Date.now(),
      visible: !0,
      type: e,
      ariaProps: { role: 'status', 'aria-live': 'polite' },
      message: t,
      pauseDuration: 0,
      ...n,
      id: (n == null ? void 0 : n.id) || gP(),
    }),
    wo = (t) => (e, n) => {
      let r = _P(e, t, n);
      return Mr({ type: 2, toast: r }), r.id;
    },
    Pe = (t, e) => wo('blank')(t, e);
  Pe.error = wo('error');
  Pe.success = wo('success');
  Pe.loading = wo('loading');
  Pe.custom = wo('custom');
  Pe.dismiss = (t) => {
    Mr({ type: 3, toastId: t });
  };
  Pe.remove = (t) => Mr({ type: 4, toastId: t });
  Pe.promise = (t, e, n) => {
    let r = Pe.loading(e.loading, { ...n, ...(n == null ? void 0 : n.loading) });
    return (
      t
        .then((i) => (Pe.success(El(e.success, i), { id: r, ...n, ...(n == null ? void 0 : n.success) }), i))
        .catch((i) => {
          Pe.error(El(e.error, i), { id: r, ...n, ...(n == null ? void 0 : n.error) });
        }),
      t
    );
  };
  var wP = (t, e) => {
      Mr({ type: 1, toast: { id: t, height: e } });
    },
    SP = () => {
      Mr({ type: 5, time: Date.now() });
    },
    kP = (t) => {
      let { toasts: e, pausedAt: n } = bP(t);
      C.useEffect(() => {
        if (n) return;
        let s = Date.now(),
          o = e.map((a) => {
            if (a.duration === 1 / 0) return;
            let l = (a.duration || 0) + a.pauseDuration - (s - a.createdAt);
            if (l < 0) {
              a.visible && Pe.dismiss(a.id);
              return;
            }
            return setTimeout(() => Pe.dismiss(a.id), l);
          });
        return () => {
          o.forEach((a) => a && clearTimeout(a));
        };
      }, [e, n]);
      let r = C.useCallback(() => {
          n && Mr({ type: 6, time: Date.now() });
        }, [n]),
        i = C.useCallback(
          (s, o) => {
            let { reverseOrder: a = !1, gutter: l = 8, defaultPosition: u } = o || {},
              c = e.filter((d) => (d.position || u) === (s.position || u) && d.height),
              f = c.findIndex((d) => d.id === s.id),
              h = c.filter((d, g) => g < f && d.visible).length;
            return c
              .filter((d) => d.visible)
              .slice(...(a ? [h + 1] : [0, h]))
              .reduce((d, g) => d + (g.height || 0) + l, 0);
          },
          [e],
        );
      return { toasts: e, handlers: { updateHeight: wP, startPause: SP, endPause: r, calculateOffset: i } };
    },
    EP = dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    OP = dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    TP = dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    CP = nr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${EP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${OP} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${TP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    DP = dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    PP = nr('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || '#e0e0e0'};
  border-right-color: ${(t) => t.primary || '#616161'};
  animation: ${DP} 1s linear infinite;
`,
    NP = dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    MP = dn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    IP = nr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${NP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${MP} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    RP = nr('div')`
  position: absolute;
`,
    AP = nr('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    LP = dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    FP = nr('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${LP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    jP = ({ toast: t }) => {
      let { icon: e, type: n, iconTheme: r } = t;
      return e !== void 0
        ? typeof e == 'string'
          ? C.createElement(FP, null, e)
          : e
        : n === 'blank'
          ? null
          : C.createElement(
              AP,
              null,
              C.createElement(PP, { ...r }),
              n !== 'loading' &&
                C.createElement(
                  RP,
                  null,
                  n === 'error' ? C.createElement(CP, { ...r }) : C.createElement(IP, { ...r }),
                ),
            );
    },
    zP = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    BP = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`,
    VP = '0%{opacity:0;} 100%{opacity:1;}',
    UP = '0%{opacity:1;} 100%{opacity:0;}',
    WP = nr('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    $P = nr('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    QP = (t, e) => {
      let n = t.includes('top') ? 1 : -1,
        [r, i] = Wb() ? [VP, UP] : [zP(n), BP(n)];
      return {
        animation: e
          ? `${dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
          : `${dn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
      };
    },
    HP = C.memo(({ toast: t, position: e, style: n, children: r }) => {
      let i = t.height ? QP(t.position || e || 'top-center', t.visible) : { opacity: 0 },
        s = C.createElement(jP, { toast: t }),
        o = C.createElement($P, { ...t.ariaProps }, El(t.message, t));
      return C.createElement(
        WP,
        { className: t.className, style: { ...i, ...n, ...t.style } },
        typeof r == 'function' ? r({ icon: s, message: o }) : C.createElement(C.Fragment, null, s, o),
      );
    });
  dP(C.createElement);
  var qP = ({ id: t, className: e, style: n, onHeightUpdate: r, children: i }) => {
      let s = C.useCallback(
        (o) => {
          if (o) {
            let a = () => {
              let l = o.getBoundingClientRect().height;
              r(t, l);
            };
            a(), new MutationObserver(a).observe(o, { subtree: !0, childList: !0, characterData: !0 });
          }
        },
        [t, r],
      );
      return C.createElement('div', { ref: s, className: e, style: n }, i);
    },
    YP = (t, e) => {
      let n = t.includes('top'),
        r = n ? { top: 0 } : { bottom: 0 },
        i = t.includes('center')
          ? { justifyContent: 'center' }
          : t.includes('right')
            ? { justifyContent: 'flex-end' }
            : {};
      return {
        left: 0,
        right: 0,
        display: 'flex',
        position: 'absolute',
        transition: Wb() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
        transform: `translateY(${e * (n ? 1 : -1)}px)`,
        ...r,
        ...i,
      };
    },
    GP = ou`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    oa = 16,
    KP = ({
      reverseOrder: t,
      position: e = 'top-center',
      toastOptions: n,
      gutter: r,
      children: i,
      containerStyle: s,
      containerClassName: o,
    }) => {
      let { toasts: a, handlers: l } = kP(n);
      return C.createElement(
        'div',
        {
          style: {
            position: 'fixed',
            zIndex: 9999,
            top: oa,
            left: oa,
            right: oa,
            bottom: oa,
            pointerEvents: 'none',
            ...s,
          },
          className: o,
          onMouseEnter: l.startPause,
          onMouseLeave: l.endPause,
        },
        a.map((u) => {
          let c = u.position || e,
            f = l.calculateOffset(u, { reverseOrder: t, gutter: r, defaultPosition: e }),
            h = YP(c, f);
          return C.createElement(
            qP,
            { id: u.id, key: u.id, onHeightUpdate: l.updateHeight, className: u.visible ? GP : '', style: h },
            u.type === 'custom' ? El(u.message, u) : i ? i(u) : C.createElement(HP, { toast: u, position: c }),
          );
        }),
      );
    },
    Oi = Pe;
  const XP = Xe`
  mutation CreateTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      date
      location
    }
  }
`,
    JP = Xe`
  mutation UpdateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`,
    ZP = Xe`
  mutation DeleteTransaction($transactionId: ID!) {
    deleteTransaction(transactionId: $transactionId) {
      _id
    }
  }
`,
    Sd = Xe`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`,
    eN = {
      saving: 'from-green-700 to-green-400',
      expense: 'from-pink-800 to-pink-600',
      investment: 'from-blue-700 to-blue-400',
    },
    tN = ({ transaction: t }) => {
      var d, g, v;
      const { data: e } = Ei(Sd);
      let { category: n, amount: r, location: i, date: s, paymentType: o, description: a } = t;
      const l = eN[n],
        [u, { loading: c }] = Li(ZP, { refetchQueries: ['GetTransactions', 'GetCategoryStatistics'] });
      (a = ((d = a[0]) == null ? void 0 : d.toUpperCase()) + a.slice(1)),
        (n = ((g = n[0]) == null ? void 0 : g.toUpperCase()) + n.slice(1)),
        (o = ((v = o[0]) == null ? void 0 : v.toUpperCase()) + o.slice(1));
      const f = vT(s),
        h = async () => {
          try {
            await u({ variables: { transactionId: t._id } }), Pe.success('Transaction Deleted Successfully');
          } catch (x) {
            Pe.error(x.message);
          }
        };
      return w.jsx('div', {
        className: `rounded-md p-4 bg-gradient-to-br ${l}`,
        children: w.jsxs('div', {
          className: 'flex flex-col gap-3',
          children: [
            w.jsxs('div', {
              className: 'flex flex-row items-center justify-between',
              children: [
                w.jsx('h2', { className: 'text-lg font-bold text-white', children: n }),
                w.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    !c && w.jsx(gT, { className: 'cursor-pointer', onClick: h }),
                    c && w.jsx('div', { className: 'font-semibold', children: 'Deleting' }),
                    w.jsx(Wl, {
                      to: `/transaction/${t._id}`,
                      children: w.jsx(mT, { className: 'cursor-pointer', size: 20 }),
                    }),
                  ],
                }),
              ],
            }),
            w.jsxs('p', {
              className: 'text-white flex items-center gap-1',
              children: [w.jsx(hT, {}), 'Description: ', a],
            }),
            w.jsxs('p', {
              className: 'text-white flex items-center gap-1',
              children: [w.jsx(pT, {}), 'Payment Type: ', o],
            }),
            w.jsxs('p', { className: 'text-white flex items-center gap-1', children: [w.jsx(fT, {}), 'Amount: ', r] }),
            w.jsxs('p', {
              className: 'text-white flex items-center gap-1',
              children: [w.jsx(cT, {}), 'Location: ', i || 'N/A'],
            }),
            w.jsxs('div', {
              className: 'flex justify-between items-center',
              children: [
                w.jsx('p', { className: 'text-xs text-black font-bold', children: f }),
                w.jsx('img', {
                  src: e == null ? void 0 : e.authUser.profilePicture,
                  className: 'h-8 w-8 border rounded-full',
                  alt: e == null ? void 0 : e.authUser.name,
                }),
              ],
            }),
          ],
        }),
      });
    },
    nN = Xe`
  query GetTransactions {
    transactions {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`,
    rN = Xe`
  query GetTransaction($id: ID!) {
    transaction(transactionId: $id) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`,
    iN = Xe`
  query GetCategoryStatistics {
    categoryStatistics {
      category
      totalAmount
    }
  }
`,
    sN = () => {
      var n;
      const { data: t, loading: e } = Ei(nN);
      return w.jsxs('div', {
        className: 'w-full px-10 min-h-[40vh]',
        children: [
          w.jsx('p', { className: 'text-5xl font-bold text-center my-10', children: 'History' }),
          w.jsx('div', {
            className: 'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20',
            children: !e && t.transactions.map((r) => w.jsx(tN, { transaction: r }, r._id)),
          }),
          !e &&
            ((n = t == null ? void 0 : t.transactions) == null ? void 0 : n.length) === 0 &&
            w.jsx('p', {
              className: 'text-2xl font-bold text-center w-full',
              children: 'No transaction history found.',
            }),
        ],
      });
    },
    oN = () => {
      const [t, { loading: e }] = Li(XP, { refetchQueries: ['GetTransactions', 'GetCategoryStatistics'] }),
        n = async (r) => {
          r.preventDefault();
          const i = r.target,
            s = new FormData(i),
            o = {
              description: s.get('description'),
              paymentType: s.get('paymentType'),
              category: s.get('category'),
              amount: parseFloat(s.get('amount')),
              location: s.get('location'),
              date: s.get('date'),
            };
          try {
            await t({ variables: { input: o } }), i.reset(), Pe.success('Transaction created successfully');
          } catch (a) {
            Pe.error(a.message);
          }
        };
      return w.jsxs('form', {
        className: 'w-full max-w-lg flex flex-col gap-5 px-3',
        onSubmit: n,
        children: [
          w.jsx('div', {
            className: 'flex flex-wrap',
            children: w.jsxs('div', {
              className: 'w-full',
              children: [
                w.jsx('label', {
                  className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                  htmlFor: 'description',
                  children: 'Transaction',
                }),
                w.jsx('input', {
                  className:
                    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                  id: 'description',
                  name: 'description',
                  type: 'text',
                  required: !0,
                  placeholder: 'Rent, Groceries, Salary, etc.',
                }),
              ],
            }),
          }),
          w.jsxs('div', {
            className: 'flex flex-wrap gap-3',
            children: [
              w.jsxs('div', {
                className: 'w-full flex-1 mb-6 md:mb-0',
                children: [
                  w.jsx('label', {
                    className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                    htmlFor: 'paymentType',
                    children: 'Payment Type',
                  }),
                  w.jsxs('div', {
                    className: 'relative',
                    children: [
                      w.jsxs('select', {
                        className:
                          'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                        id: 'paymentType',
                        name: 'paymentType',
                        children: [
                          w.jsx('option', { value: 'card', children: 'Card' }),
                          w.jsx('option', { value: 'cash', children: 'Cash' }),
                          w.jsx('option', { value: 'upi', children: 'UPI' }),
                        ],
                      }),
                      w.jsx('div', {
                        className:
                          'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
                        children: w.jsx('svg', {
                          className: 'fill-current h-4 w-4',
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                          children: w.jsx('path', {
                            d: 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs('div', {
                className: 'w-full flex-1 mb-6 md:mb-0',
                children: [
                  w.jsx('label', {
                    className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                    htmlFor: 'category',
                    children: 'Category',
                  }),
                  w.jsxs('div', {
                    className: 'relative',
                    children: [
                      w.jsxs('select', {
                        className:
                          'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                        id: 'category',
                        name: 'category',
                        children: [
                          w.jsx('option', { value: 'saving', children: 'Saving' }),
                          w.jsx('option', { value: 'expense', children: 'Expense' }),
                          w.jsx('option', { value: 'investment', children: 'Investment' }),
                        ],
                      }),
                      w.jsx('div', {
                        className:
                          'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
                        children: w.jsx('svg', {
                          className: 'fill-current h-4 w-4',
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                          children: w.jsx('path', {
                            d: 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs('div', {
                className: 'w-full flex-1 mb-6 md:mb-0',
                children: [
                  w.jsx('label', {
                    className: 'block uppercase text-white text-xs font-bold mb-2',
                    htmlFor: 'amount',
                    children: 'Amount($)',
                  }),
                  w.jsx('input', {
                    className:
                      'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                    id: 'amount',
                    name: 'amount',
                    type: 'number',
                    placeholder: '150',
                  }),
                ],
              }),
            ],
          }),
          w.jsxs('div', {
            className: 'flex flex-wrap gap-3',
            children: [
              w.jsxs('div', {
                className: 'w-full flex-1 mb-6 md:mb-0',
                children: [
                  w.jsx('label', {
                    className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                    htmlFor: 'location',
                    children: 'Location',
                  }),
                  w.jsx('input', {
                    className:
                      'appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
                    id: 'location',
                    name: 'location',
                    type: 'text',
                    placeholder: 'New York',
                  }),
                ],
              }),
              w.jsxs('div', {
                className: 'w-full flex-1',
                children: [
                  w.jsx('label', {
                    className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                    htmlFor: 'date',
                    children: 'Date',
                  }),
                  w.jsx('input', {
                    type: 'date',
                    name: 'date',
                    id: 'date',
                    className: `appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-[11px] px-4 mb-3 leading-tight focus:outline-none\r
						 focus:bg-white`,
                    placeholder: 'Select date',
                  }),
                ],
              }),
            ],
          }),
          w.jsx('button', {
            className: `text-white font-bold w-full rounded px-4 py-2 bg-gradient-to-br\r
          from-pink-500 to-pink-500 hover:from-green-600 hover:to-green-600\r
						disabled:opacity-70 disabled:cursor-not-allowed`,
            type: 'submit',
            disabled: e,
            children: e ? 'Loading...' : 'Add Transaction',
          }),
        ],
      });
    },
    aN = Xe`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      _id
      name
      username
    }
  }
`,
    lN = Xe`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      username
      password
    }
  }
`,
    uN = Xe`
  mutation Logout {
    logout {
      message
    }
  }
`;
  ql.register(us, NO, SO);
  const cN = () => {
      const { data: t } = Ei(iN),
        { data: e } = Ei(Sd),
        [n, { loading: r, client: i }] = Li(uN, { refetchQueries: ['GetAuthenticatedUser'] }),
        [s, o] = C.useState({
          labels: [],
          datasets: [
            {
              label: '%',
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1,
              borderRadius: 30,
              spacing: 10,
              cutout: 130,
            },
          ],
        });
      C.useEffect(() => {
        if (t != null && t.categoryStatistics) {
          const l = t.categoryStatistics.map((h) => h.category),
            u = t.categoryStatistics.map((h) => h.totalAmount),
            c = [],
            f = [];
          l.forEach((h) => {
            h === 'saving'
              ? (c.push('rgba(76, 175, 80)'), f.push('rgba(76, 175, 80)'))
              : h === 'expense'
                ? (c.push('rgba(255, 87, 34)'), f.push('rgba(255, 87, 34)'))
                : h === 'investment' && (c.push('rgba(33, 150, 243)'), f.push('rgba(33, 150, 243)'));
          }),
            o((h) => ({ labels: l, datasets: [{ ...h.datasets[0], data: u, backgroundColor: c, borderColor: f }] }));
        }
      }, [t]);
      const a = async () => {
        try {
          await n(), i.resetStore(), Pe.success('Logged out successfully');
        } catch (l) {
          Pe.error(l.message);
        }
      };
      return w.jsx(w.Fragment, {
        children: w.jsxs('div', {
          className: 'flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center',
          children: [
            w.jsxs('div', {
              className: 'flex items-center',
              children: [
                w.jsx('p', {
                  className:
                    'md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 inline-block text-transparent bg-clip-text',
                  children: 'Spend wisely, track wisely',
                }),
                w.jsx('img', {
                  src: e == null ? void 0 : e.authUser.profilePicture,
                  className: 'w-11 h-11 rounded-full border cursor-pointer',
                  alt: e == null ? void 0 : e.authUser.name,
                }),
                !r &&
                  w.jsxs('div', {
                    className: 'flex items-center cursor-pointer',
                    onClick: a,
                    children: [w.jsx(dT, { className: 'mx-2 w-5 h-5' }), w.jsx('p', { children: 'Logout' })],
                  }),
              ],
            }),
            w.jsxs('div', {
              className: 'flex flex-wrap w-full justify-center items-center gap-6',
              children: [
                (t == null ? void 0 : t.categoryStatistics) &&
                  w.jsx('div', {
                    className: 'h-[330px] w-[330px] md:h-[360px] md:w-[360px]',
                    children: w.jsx(nT, { data: s }),
                  }),
                w.jsx(oN, {}),
              ],
            }),
            w.jsx(sN, {}),
          ],
        }),
      });
    },
    Ps = ({ label: t, id: e, name: n, type: r = 'text', onChange: i, value: s }) =>
      w.jsxs('div', {
        children: [
          w.jsx('label', { htmlFor: e, className: 'block text-sm font-medium text-gray-700', children: t }),
          w.jsx('input', {
            className:
              'mt-1 p-2 w-full border rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300',
            id: e,
            type: r,
            name: n,
            value: s,
            onChange: i,
          }),
        ],
      }),
    fN = () => {
      const [t, e] = C.useState({ username: '', password: '' }),
        n = (o) => {
          const { name: a, value: l } = o.target;
          e((u) => ({ ...u, [a]: l }));
        },
        [r, { loading: i }] = Li(lN, { refetchQueries: ['GetAuthenticatedUser'] }),
        s = async (o) => {
          o.preventDefault();
          try {
            await r({ variables: { input: t } }), Oi.success('User LogIn Successfully');
          } catch (a) {
            Oi.error(a.message);
          }
        };
      return w.jsx('div', {
        className: 'flex justify-center items-center h-screen',
        children: w.jsx('div', {
          className: 'flex rounded-lg overflow-hidden z-50 bg-gray-300',
          children: w.jsx('div', {
            className: 'w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center',
            children: w.jsxs('div', {
              className: 'max-w-md w-full p-6',
              children: [
                w.jsx('h1', { className: 'text-3xl font-semibold mb-6 text-black text-center', children: 'Login' }),
                w.jsx('h1', {
                  className: 'text-sm font-semibold mb-6 text-gray-500 text-center',
                  children: 'Welcome back! Log in to your account',
                }),
                w.jsxs('form', {
                  className: 'space-y-4',
                  onSubmit: s,
                  children: [
                    w.jsx(Ps, { label: 'Username', id: 'username', name: 'username', value: t.username, onChange: n }),
                    w.jsx(Ps, {
                      label: 'Password',
                      id: 'password',
                      name: 'password',
                      type: 'password',
                      value: t.password,
                      onChange: n,
                    }),
                    w.jsx('div', {
                      children: w.jsx('button', {
                        type: 'submit',
                        className: `w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300\r
										disabled:opacity-50 disabled:cursor-not-allowed\r
									`,
                        disabled: i,
                        children: i ? 'loading' : 'Login',
                      }),
                    }),
                  ],
                }),
                w.jsx('div', {
                  className: 'mt-4 text-sm text-gray-600 text-center',
                  children: w.jsxs('p', {
                    children: [
                      "Don't have an account?",
                      w.jsx(Wl, { to: '/signup', className: 'text-black hover:underline pl-2', children: 'Sign Up' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    },
    lv = ({ id: t, label: e, onChange: n, value: r, checked: i }) =>
      w.jsxs('div', {
        className: 'inline-flex items-center',
        children: [
          w.jsxs('label', {
            className: 'relative flex items-center p-3 rounded-full cursor-pointer',
            htmlFor: t,
            children: [
              w.jsx('input', {
                name: 'type',
                type: 'radio',
                className:
                  "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10",
                id: t,
                value: r,
                onChange: n,
                checked: i,
              }),
              w.jsx('span', {
                className:
                  'absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100',
                children: w.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-3.5 w-3.5',
                  viewBox: '0 0 16 16',
                  fill: 'currentColor',
                  children: w.jsx('circle', { 'data-name': 'ellipse', cx: '8', cy: '8', r: '8' }),
                }),
              }),
            ],
          }),
          w.jsx('label', {
            className: 'mt-px font-light text-gray-700 cursor-pointer select-none',
            htmlFor: t,
            children: e,
          }),
        ],
      }),
    hN = () => {
      const [t, e] = C.useState({ name: '', username: '', password: '', gender: '' }),
        [n, { loading: r }] = Li(aN, { refetchQueries: ['GetAuthenticatedUser'] }),
        i = (o) => {
          const { name: a, value: l, type: u } = o.target;
          e(u === 'radio' ? (c) => ({ ...c, gender: l }) : (c) => ({ ...c, [a]: l }));
        },
        s = async (o) => {
          o.preventDefault();
          try {
            await n({ variables: { input: t } }), Oi.success('User SignUP Successfully');
          } catch (a) {
            Oi.error(a.message);
          }
        };
      return w.jsx('div', {
        className: 'h-screen flex justify-center items-center',
        children: w.jsx('div', {
          className: 'flex rounded-lg overflow-hidden z-50 bg-gray-300',
          children: w.jsx('div', {
            className: 'w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center',
            children: w.jsxs('div', {
              className: 'max-w-md w-full p-6',
              children: [
                w.jsx('h1', { className: 'text-3xl font-semibold mb-6 text-black text-center', children: 'Sign Up' }),
                w.jsx('h1', {
                  className: 'text-sm font-semibold mb-6 text-gray-500 text-center',
                  children: 'Join to keep track of your expenses',
                }),
                w.jsxs('form', {
                  className: 'space-y-4',
                  onSubmit: s,
                  children: [
                    w.jsx(Ps, { label: 'Full Name', id: 'name', name: 'name', value: t.name, onChange: i }),
                    w.jsx(Ps, { label: 'Username', id: 'username', name: 'username', value: t.username, onChange: i }),
                    w.jsx(Ps, {
                      label: 'Password',
                      id: 'password',
                      name: 'password',
                      type: 'password',
                      value: t.password,
                      onChange: i,
                    }),
                    w.jsxs('div', {
                      className: 'flex gap-10',
                      children: [
                        w.jsx(lv, {
                          id: 'male',
                          label: 'Male',
                          name: 'gender',
                          value: 'male',
                          onChange: i,
                          checked: t.gender === 'male',
                        }),
                        w.jsx(lv, {
                          id: 'female',
                          label: 'Female',
                          name: 'gender',
                          value: 'female',
                          onChange: i,
                          checked: t.gender === 'female',
                        }),
                      ],
                    }),
                    w.jsx('div', {
                      children: w.jsx('button', {
                        type: 'submit',
                        className:
                          'w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
                        disabled: r,
                        children: r ? 'Loading...' : 'Sign Up',
                      }),
                    }),
                  ],
                }),
                w.jsx('div', {
                  className: 'mt-4 text-sm text-gray-600 text-center',
                  children: w.jsxs('p', {
                    children: [
                      'Already have an account?',
                      w.jsx(Wl, { to: '/login', className: 'text-black hover:underline pl-2', children: 'Login here' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    },
    dN = () => {
      var l, u, c, f, h, d;
      const { id: t } = Y1(),
        e = Ah(),
        { data: n } = Ei(rN, { variables: { id: t } }),
        [r] = Li(JP, {
          refetchQueries: [{ query: 'GetCategoryStatistics' }],
          onCompleted: () => {
            e('/');
          },
        });
      console.log('Transaction', n);
      const [i, s] = C.useState({
        description: ((l = n == null ? void 0 : n.transaction) == null ? void 0 : l.description) || '',
        paymentType: ((u = n == null ? void 0 : n.transaction) == null ? void 0 : u.paymentType) || '',
        category: ((c = n == null ? void 0 : n.transaction) == null ? void 0 : c.category) || '',
        amount: ((f = n == null ? void 0 : n.transaction) == null ? void 0 : f.amount) || '',
        location: ((h = n == null ? void 0 : n.transaction) == null ? void 0 : h.location) || '',
        date: ((d = n == null ? void 0 : n.transaction) == null ? void 0 : d.date) || '',
      });
      C.useEffect(() => {
        n &&
          s({
            description: n.transaction.description,
            paymentType: n.transaction.paymentType,
            category: n.transaction.category,
            amount: n.transaction.amount,
            location: n.transaction.location,
            date: new Date(+n.transaction.date).toISOString().substring(0, 10),
          });
      }, [n]);
      const o = async (g) => {
          g.preventDefault();
          const v = parseFloat(i.amount);
          try {
            await r({ variables: { input: { ...i, amount: v, transactionId: t } } }),
              Oi.success('Transaction updated successfully');
          } catch (x) {
            Oi.error(x.message);
          }
        },
        a = (g) => {
          const { name: v, value: x } = g.target;
          s((p) => ({ ...p, [v]: x }));
        };
      return w.jsxs('div', {
        className: 'h-screen max-w-4xl mx-auto flex flex-col items-center',
        children: [
          w.jsx('p', {
            className:
              'md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text',
            children: 'Update this transaction',
          }),
          w.jsxs('form', {
            className: 'w-full max-w-lg flex flex-col gap-5 px-3 ',
            onSubmit: o,
            children: [
              w.jsx('div', {
                className: 'flex flex-wrap',
                children: w.jsxs('div', {
                  className: 'w-full',
                  children: [
                    w.jsx('label', {
                      className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                      htmlFor: 'description',
                      children: 'Transaction',
                    }),
                    w.jsx('input', {
                      className:
                        'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                      id: 'description',
                      name: 'description',
                      type: 'text',
                      placeholder: 'Rent, Groceries, Salary, etc.',
                      value: i.description,
                      onChange: a,
                    }),
                  ],
                }),
              }),
              w.jsxs('div', {
                className: 'flex flex-wrap gap-3',
                children: [
                  w.jsxs('div', {
                    className: 'w-full flex-1 mb-6 md:mb-0',
                    children: [
                      w.jsx('label', {
                        className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                        htmlFor: 'paymentType',
                        children: 'Payment Type',
                      }),
                      w.jsxs('div', {
                        className: 'relative',
                        children: [
                          w.jsxs('select', {
                            className:
                              'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                            id: 'paymentType',
                            name: 'paymentType',
                            onChange: a,
                            defaultValue: i.paymentType,
                            children: [
                              w.jsx('option', { value: 'card', children: 'Card' }),
                              w.jsx('option', { value: 'cash', children: 'Cash' }),
                              w.jsx('option', { value: 'upi', children: 'UPI' }),
                            ],
                          }),
                          w.jsx('div', {
                            className:
                              'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
                            children: w.jsx('svg', {
                              className: 'fill-current h-4 w-4',
                              xmlns: 'http://www.w3.org/2000/svg',
                              viewBox: '0 0 20 20',
                              children: w.jsx('path', {
                                d: 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs('div', {
                    className: 'w-full flex-1 mb-6 md:mb-0',
                    children: [
                      w.jsx('label', {
                        className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                        htmlFor: 'category',
                        children: 'Category',
                      }),
                      w.jsxs('div', {
                        className: 'relative',
                        children: [
                          w.jsxs('select', {
                            className:
                              'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                            id: 'category',
                            name: 'category',
                            onChange: a,
                            defaultValue: i.category,
                            children: [
                              w.jsx('option', { value: 'saving', children: 'Saving' }),
                              w.jsx('option', { value: 'expense', children: 'Expense' }),
                              w.jsx('option', { value: 'investment', children: 'Investment' }),
                            ],
                          }),
                          w.jsx('div', {
                            className:
                              'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
                            children: w.jsx('svg', {
                              className: 'fill-current h-4 w-4',
                              xmlns: 'http://www.w3.org/2000/svg',
                              viewBox: '0 0 20 20',
                              children: w.jsx('path', {
                                d: 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs('div', {
                    className: 'w-full flex-1 mb-6 md:mb-0',
                    children: [
                      w.jsx('label', {
                        className: 'block uppercase text-white text-xs font-bold mb-2',
                        htmlFor: 'amount',
                        children: 'Amount($)',
                      }),
                      w.jsx('input', {
                        className:
                          'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                        id: 'amount',
                        name: 'amount',
                        type: 'number',
                        placeholder: '150',
                        value: i.amount,
                        onChange: a,
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs('div', {
                className: 'flex flex-wrap gap-3',
                children: [
                  w.jsxs('div', {
                    className: 'w-full flex-1 mb-6 md:mb-0',
                    children: [
                      w.jsx('label', {
                        className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                        htmlFor: 'location',
                        children: 'Location',
                      }),
                      w.jsx('input', {
                        className:
                          'appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
                        id: 'location',
                        name: 'location',
                        type: 'text',
                        placeholder: 'New York',
                        value: i.location,
                        onChange: a,
                      }),
                    ],
                  }),
                  w.jsxs('div', {
                    className: 'w-full flex-1',
                    children: [
                      w.jsx('label', {
                        className: 'block uppercase tracking-wide text-white text-xs font-bold mb-2',
                        htmlFor: 'date',
                        children: 'Date',
                      }),
                      w.jsx('input', {
                        type: 'date',
                        name: 'date',
                        id: 'date',
                        className: `appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-[11px] px-4 mb-3 leading-tight focus:outline-none\r
						 focus:bg-white`,
                        placeholder: 'Select date',
                        value: i.date,
                        onChange: a,
                      }),
                    ],
                  }),
                ],
              }),
              w.jsx('button', {
                className: `text-white font-bold w-full rounded px-4 py-2 bg-gradient-to-br\r
          from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600`,
                type: 'submit',
                children: 'Update Transaction',
              }),
            ],
          }),
        ],
      });
    },
    pN = () =>
      w.jsx('section', {
        children: w.jsx('div', {
          className: ' text-white',
          children: w.jsx('div', {
            className: 'flex h-screen',
            children: w.jsxs('div', {
              className: 'm-auto text-center',
              children: [
                w.jsx('div', { children: w.jsx('img', { src: '/404.svg', alt: '404' }) }),
                w.jsx('p', {
                  className: 'text-sm md:text-base text-[#F6009B] p-2 mb-4',
                  children: "The stuff you were looking for doesn't exist",
                }),
                w.jsx('a', {
                  href: '/',
                  className:
                    'bg-transparent hover:bg-[#F6009B] text-[#F6009B] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#F6009B] hover:border-transparent',
                  children: 'Take me home',
                }),
              ],
            }),
          }),
        }),
      }),
    gN = () =>
      w.jsxs('div', {
        className: 'mb-10',
        children: [
          w.jsxs('h1', {
            className: 'md:text-6xl text-4xl lg:text-7xl font-bold text-center  relative z-50 text-white pt-10',
            children: ['Expensify ', w.jsx(Wl, { to: '/', children: 'Execution' })],
          }),
          w.jsxs('div', {
            className: 'relative mb-10 w-1/2 mx-auto hidden md:block',
            children: [
              w.jsx('div', {
                className:
                  'absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm',
              }),
              w.jsx('div', {
                className:
                  'absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4',
              }),
              w.jsx('div', {
                className:
                  'absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm',
              }),
              w.jsx('div', {
                className:
                  'absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4',
              }),
            ],
          }),
        ],
      });
  function mN() {
    const { loading: t, data: e } = Ei(Sd);
    return (
      console.log(e),
      t
        ? w.jsx('p', { className: 'flex justify-center text-center text-xl', children: 'Loading....' })
        : w.jsxs(w.Fragment, {
            children: [
              (e == null ? void 0 : e.authUser) && w.jsx(gN, {}),
              w.jsxs(lS, {
                children: [
                  w.jsx(Lr, { path: '/', element: e.authUser ? w.jsx(cN, {}) : w.jsx(Vo, { to: '/login' }) }),
                  w.jsx(Lr, { path: '/login', element: e.authUser ? w.jsx(Vo, { to: '/' }) : w.jsx(fN, {}) }),
                  w.jsx(Lr, { path: '/signup', element: e.authUser ? w.jsx(Vo, { to: '/' }) : w.jsx(hN, {}) }),
                  w.jsx(Lr, {
                    path: '/transaction/:id',
                    element: e.authUser ? w.jsx(dN, {}) : w.jsx(Vo, { to: '/login' }),
                  }),
                  w.jsx(Lr, { path: '*', element: w.jsx(pN, {}) }),
                ],
              }),
              w.jsx(KP, {}),
            ],
          })
    );
  }
  const vN = ({ children: t }) =>
      w.jsxs('div', {
        className: 'w-full bg-black text-white bg-grid-white/[0.2] relative',
        children: [
          w.jsx('div', {
            className:
              'absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
          }),
          t,
        ],
      }),
    yN = new Pb({ uri: '/graphql', cache: new Tb(), credentials: 'include' });
  S0(document.getElementById('root')).render(
    w.jsx(C.StrictMode, {
      children: w.jsx(gS, { children: w.jsx(vN, { children: w.jsx(UD, { client: yN, children: w.jsx(mN, {}) }) }) }),
    }),
  );
});
export default xN();
