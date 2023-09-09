var y0 = { exports: {} }, f0 = {}, Hm = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function cD() {
  if (J1)
    return Rt;
  J1 = 1;
  var M = Symbol.for("react.element"), Q = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), S = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), B = Symbol.iterator;
  function Z(T) {
    return T === null || typeof T != "object" ? null : (T = B && T[B] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, de = {};
  function $(T, I, pe) {
    this.props = T, this.context = I, this.refs = de, this.updater = pe || W;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(T, I) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, I, "setState");
  }, $.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function _t() {
  }
  _t.prototype = $.prototype;
  function mt(T, I, pe) {
    this.props = T, this.context = I, this.refs = de, this.updater = pe || W;
  }
  var re = mt.prototype = new _t();
  re.constructor = mt, ie(re, $.prototype), re.isPureReactComponent = !0;
  var ae = Array.isArray, U = Object.prototype.hasOwnProperty, fe = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function it(T, I, pe) {
    var We, je = {}, dt = null, rt = null;
    if (I != null)
      for (We in I.ref !== void 0 && (rt = I.ref), I.key !== void 0 && (dt = "" + I.key), I)
        U.call(I, We) && !ge.hasOwnProperty(We) && (je[We] = I[We]);
    var pt = arguments.length - 2;
    if (pt === 1)
      je.children = pe;
    else if (1 < pt) {
      for (var at = Array(pt), Nt = 0; Nt < pt; Nt++)
        at[Nt] = arguments[Nt + 2];
      je.children = at;
    }
    if (T && T.defaultProps)
      for (We in pt = T.defaultProps, pt)
        je[We] === void 0 && (je[We] = pt[We]);
    return { $$typeof: M, type: T, key: dt, ref: rt, props: je, _owner: fe.current };
  }
  function yt(T, I) {
    return { $$typeof: M, type: T.type, key: I, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function gt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === M;
  }
  function ft(T) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(pe) {
      return I[pe];
    });
  }
  var Ft = /\/+/g;
  function Ie(T, I) {
    return typeof T == "object" && T !== null && T.key != null ? ft("" + T.key) : I.toString(36);
  }
  function Je(T, I, pe, We, je) {
    var dt = typeof T;
    (dt === "undefined" || dt === "boolean") && (T = null);
    var rt = !1;
    if (T === null)
      rt = !0;
    else
      switch (dt) {
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case M:
            case Q:
              rt = !0;
          }
      }
    if (rt)
      return rt = T, je = je(rt), T = We === "" ? "." + Ie(rt, 0) : We, ae(je) ? (pe = "", T != null && (pe = T.replace(Ft, "$&/") + "/"), Je(je, I, pe, "", function(Nt) {
        return Nt;
      })) : je != null && (gt(je) && (je = yt(je, pe + (!je.key || rt && rt.key === je.key ? "" : ("" + je.key).replace(Ft, "$&/") + "/") + T)), I.push(je)), 1;
    if (rt = 0, We = We === "" ? "." : We + ":", ae(T))
      for (var pt = 0; pt < T.length; pt++) {
        dt = T[pt];
        var at = We + Ie(dt, pt);
        rt += Je(dt, I, pe, at, je);
      }
    else if (at = Z(T), typeof at == "function")
      for (T = at.call(T), pt = 0; !(dt = T.next()).done; )
        dt = dt.value, at = We + Ie(dt, pt++), rt += Je(dt, I, pe, at, je);
    else if (dt === "object")
      throw I = String(T), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return rt;
  }
  function Lt(T, I, pe) {
    if (T == null)
      return T;
    var We = [], je = 0;
    return Je(T, We, "", "", function(dt) {
      return I.call(pe, dt, je++);
    }), We;
  }
  function lt(T) {
    if (T._status === -1) {
      var I = T._result;
      I = I(), I.then(function(pe) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = pe);
      }, function(pe) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = pe);
      }), T._status === -1 && (T._status = 0, T._result = I);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var Se = { current: null }, ee = { transition: null }, Oe = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ee, ReactCurrentOwner: fe };
  return Rt.Children = { map: Lt, forEach: function(T, I, pe) {
    Lt(T, function() {
      I.apply(this, arguments);
    }, pe);
  }, count: function(T) {
    var I = 0;
    return Lt(T, function() {
      I++;
    }), I;
  }, toArray: function(T) {
    return Lt(T, function(I) {
      return I;
    }) || [];
  }, only: function(T) {
    if (!gt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Rt.Component = $, Rt.Fragment = b, Rt.Profiler = Ye, Rt.PureComponent = mt, Rt.StrictMode = Ve, Rt.Suspense = oe, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Rt.cloneElement = function(T, I, pe) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var We = ie({}, T.props), je = T.key, dt = T.ref, rt = T._owner;
    if (I != null) {
      if (I.ref !== void 0 && (dt = I.ref, rt = fe.current), I.key !== void 0 && (je = "" + I.key), T.type && T.type.defaultProps)
        var pt = T.type.defaultProps;
      for (at in I)
        U.call(I, at) && !ge.hasOwnProperty(at) && (We[at] = I[at] === void 0 && pt !== void 0 ? pt[at] : I[at]);
    }
    var at = arguments.length - 2;
    if (at === 1)
      We.children = pe;
    else if (1 < at) {
      pt = Array(at);
      for (var Nt = 0; Nt < at; Nt++)
        pt[Nt] = arguments[Nt + 2];
      We.children = pt;
    }
    return { $$typeof: M, type: T.type, key: je, ref: dt, props: We, _owner: rt };
  }, Rt.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: we, _context: T }, T.Consumer = T;
  }, Rt.createElement = it, Rt.createFactory = function(T) {
    var I = it.bind(null, T);
    return I.type = T, I;
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(T) {
    return { $$typeof: nt, render: T };
  }, Rt.isValidElement = gt, Rt.lazy = function(T) {
    return { $$typeof: Re, _payload: { _status: -1, _result: T }, _init: lt };
  }, Rt.memo = function(T, I) {
    return { $$typeof: J, type: T, compare: I === void 0 ? null : I };
  }, Rt.startTransition = function(T) {
    var I = ee.transition;
    ee.transition = {};
    try {
      T();
    } finally {
      ee.transition = I;
    }
  }, Rt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Rt.useCallback = function(T, I) {
    return Se.current.useCallback(T, I);
  }, Rt.useContext = function(T) {
    return Se.current.useContext(T);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(T) {
    return Se.current.useDeferredValue(T);
  }, Rt.useEffect = function(T, I) {
    return Se.current.useEffect(T, I);
  }, Rt.useId = function() {
    return Se.current.useId();
  }, Rt.useImperativeHandle = function(T, I, pe) {
    return Se.current.useImperativeHandle(T, I, pe);
  }, Rt.useInsertionEffect = function(T, I) {
    return Se.current.useInsertionEffect(T, I);
  }, Rt.useLayoutEffect = function(T, I) {
    return Se.current.useLayoutEffect(T, I);
  }, Rt.useMemo = function(T, I) {
    return Se.current.useMemo(T, I);
  }, Rt.useReducer = function(T, I, pe) {
    return Se.current.useReducer(T, I, pe);
  }, Rt.useRef = function(T) {
    return Se.current.useRef(T);
  }, Rt.useState = function(T) {
    return Se.current.useState(T);
  }, Rt.useSyncExternalStore = function(T, I, pe) {
    return Se.current.useSyncExternalStore(T, I, pe);
  }, Rt.useTransition = function() {
    return Se.current.useTransition();
  }, Rt.version = "18.2.0", Rt;
}
var Kp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Kp.exports;
var eT;
function fD() {
  return eT || (eT = 1, function(M, Q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var b = "18.2.0", Ve = Symbol.for("react.element"), Ye = Symbol.for("react.portal"), we = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), J = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), $ = Symbol.iterator, _t = "@@iterator";
      function mt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = $ && h[$] || h[_t];
        return typeof C == "function" ? C : null;
      }
      var re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ae = {
        transition: null
      }, U = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, it = null;
      function yt(h) {
        it = h;
      }
      ge.setExtraStackFrame = function(h) {
        it = h;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var h = "";
        it && (h += it);
        var C = ge.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var gt = !1, ft = !1, Ft = !1, Ie = !1, Je = !1, Lt = {
        ReactCurrentDispatcher: re,
        ReactCurrentBatchConfig: ae,
        ReactCurrentOwner: fe
      };
      Lt.ReactDebugCurrentFrame = ge, Lt.ReactCurrentActQueue = U;
      function lt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ee("warn", h, z);
        }
      }
      function Se(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ee("error", h, z);
        }
      }
      function ee(h, C, z) {
        {
          var H = Lt.ReactDebugCurrentFrame, te = H.getStackAddendum();
          te !== "" && (C += "%s", z = z.concat([te]));
          var Pe = z.map(function(ce) {
            return String(ce);
          });
          Pe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Pe);
        }
      }
      var Oe = {};
      function T(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", te = H + "." + C;
          if (Oe[te])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), Oe[te] = !0;
        }
      }
      var I = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          T(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, H) {
          T(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, H) {
          T(h, "setState");
        }
      }, pe = Object.assign, We = {};
      Object.freeze(We);
      function je(h, C, z) {
        this.props = h, this.context = C, this.refs = We, this.updater = z || I;
      }
      je.prototype.isReactComponent = {}, je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(h, C) {
          Object.defineProperty(je.prototype, h, {
            get: function() {
              lt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var pt in dt)
          dt.hasOwnProperty(pt) && rt(pt, dt[pt]);
      }
      function at() {
      }
      at.prototype = je.prototype;
      function Nt(h, C, z) {
        this.props = h, this.context = C, this.refs = We, this.updater = z || I;
      }
      var qr = Nt.prototype = new at();
      qr.constructor = Nt, pe(qr, je.prototype), qr.isPureReactComponent = !0;
      function Vn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Te = Array.isArray;
      function Wt(h) {
        return Te(h);
      }
      function ve(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Cn(h) {
        try {
          return Mn(h), !1;
        } catch {
          return !0;
        }
      }
      function Mn(h) {
        return "" + h;
      }
      function Tn(h) {
        if (Cn(h))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ve(h)), Mn(h);
      }
      function La(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var te = C.displayName || C.name || "";
        return te !== "" ? z + "(" + te + ")" : z;
      }
      function hi(h) {
        return h.displayName || "Context";
      }
      function ur(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case we:
            return "Fragment";
          case Ye:
            return "Portal";
          case nt:
            return "Profiler";
          case S:
            return "StrictMode";
          case B:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case J:
              var C = h;
              return hi(C) + ".Consumer";
            case oe:
              var z = h;
              return hi(z._context) + ".Provider";
            case Re:
              return La(h, h.render, "ForwardRef");
            case W:
              var H = h.displayName || null;
              return H !== null ? H : ur(h.type) || "Memo";
            case ie: {
              var te = h, Pe = te._payload, ce = te._init;
              try {
                return ur(ce(Pe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Dr = Object.prototype.hasOwnProperty, qa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, kr, Na, Or;
      Or = {};
      function za(h) {
        if (Dr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Gn(h) {
        if (Dr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Kr(h, C) {
        var z = function() {
          kr || (kr = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function Vl(h, C) {
        var z = function() {
          Na || (Na = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function Ka(h) {
        if (typeof h.ref == "string" && fe.current && h.__self && fe.current.stateNode !== h.__self) {
          var C = ur(fe.current.type);
          Or[C] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Or[C] = !0);
        }
      }
      var se = function(h, C, z, H, te, Pe, ce) {
        var Fe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ve,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ce,
          // Record the component responsible for creating this element.
          _owner: Pe
        };
        return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Fe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Fe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
      };
      function ze(h, C, z) {
        var H, te = {}, Pe = null, ce = null, Fe = null, st = null;
        if (C != null) {
          za(C) && (ce = C.ref, Ka(C)), Gn(C) && (Tn(C.key), Pe = "" + C.key), Fe = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Dr.call(C, H) && !qa.hasOwnProperty(H) && (te[H] = C[H]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          te.children = z;
        else if (xt > 1) {
          for (var Gt = Array(xt), Vt = 0; Vt < xt; Vt++)
            Gt[Vt] = arguments[Vt + 2];
          Object.freeze && Object.freeze(Gt), te.children = Gt;
        }
        if (h && h.defaultProps) {
          var qt = h.defaultProps;
          for (H in qt)
            te[H] === void 0 && (te[H] = qt[H]);
        }
        if (Pe || ce) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Pe && Kr(te, Jt), ce && Vl(te, Jt);
        }
        return se(h, Pe, ce, Fe, st, fe.current, te);
      }
      function ut(h, C) {
        var z = se(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Ht(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, te = pe({}, h.props), Pe = h.key, ce = h.ref, Fe = h._self, st = h._source, xt = h._owner;
        if (C != null) {
          za(C) && (ce = C.ref, xt = fe.current), Gn(C) && (Tn(C.key), Pe = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (H in C)
            Dr.call(C, H) && !qa.hasOwnProperty(H) && (C[H] === void 0 && Gt !== void 0 ? te[H] = Gt[H] : te[H] = C[H]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          te.children = z;
        else if (Vt > 1) {
          for (var qt = Array(Vt), Jt = 0; Jt < Vt; Jt++)
            qt[Jt] = arguments[Jt + 2];
          te.children = qt;
        }
        return se(h.type, Pe, ce, Fe, st, xt, te);
      }
      function jt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ve;
      }
      var Ln = ".", Rn = ":";
      function Mr(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(te) {
          return z[te];
        });
        return "$" + H;
      }
      var en = !1, sa = /\/+/g;
      function cn(h) {
        return h.replace(sa, "$&/");
      }
      function Zt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Tn(h.key), Mr("" + h.key)) : C.toString(36);
      }
      function jl(h, C, z, H, te) {
        var Pe = typeof h;
        (Pe === "undefined" || Pe === "boolean") && (h = null);
        var ce = !1;
        if (h === null)
          ce = !0;
        else
          switch (Pe) {
            case "string":
            case "number":
              ce = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ve:
                case Ye:
                  ce = !0;
              }
          }
        if (ce) {
          var Fe = h, st = te(Fe), xt = H === "" ? Ln + Zt(Fe, 0) : H;
          if (Wt(st)) {
            var Gt = "";
            xt != null && (Gt = cn(xt) + "/"), jl(st, C, Gt, "", function(Yf) {
              return Yf;
            });
          } else
            st != null && (jt(st) && (st.key && (!Fe || Fe.key !== st.key) && Tn(st.key), st = ut(
              st,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (st.key && (!Fe || Fe.key !== st.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                cn("" + st.key) + "/"
              ) : "") + xt
            )), C.push(st));
          return 1;
        }
        var Vt, qt, Jt = 0, St = H === "" ? Ln : H + Rn;
        if (Wt(h))
          for (var Si = 0; Si < h.length; Si++)
            Vt = h[Si], qt = St + Zt(Vt, Si), Jt += jl(Vt, C, z, qt, te);
        else {
          var Yu = mt(h);
          if (typeof Yu == "function") {
            var Qo = h;
            Yu === Qo.entries && (en || lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var $f = Yu.call(Qo), ja, Wo = 0; !(ja = $f.next()).done; )
              Vt = ja.value, qt = St + Zt(Vt, Wo++), Jt += jl(Vt, C, z, qt, te);
          } else if (Pe === "object") {
            var Go = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Go === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Go) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function mi(h, C, z) {
        if (h == null)
          return h;
        var H = [], te = 0;
        return jl(h, H, "", "", function(Pe) {
          return C.call(z, Pe, te++);
        }), H;
      }
      function Mu(h) {
        var C = 0;
        return mi(h, function() {
          C++;
        }), C;
      }
      function Ws(h, C, z) {
        mi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Gs(h) {
        return mi(h, function(C) {
          return C;
        }) || [];
      }
      function Lu(h) {
        if (!jt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Vo(h) {
        var C = {
          $$typeof: J,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: oe,
          _context: C
        };
        var z = !1, H = !1, te = !1;
        {
          var Pe = {
            $$typeof: J,
            _context: C
          };
          Object.defineProperties(Pe, {
            Provider: {
              get: function() {
                return H || (H = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ce) {
                C.Provider = ce;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ce) {
                C._currentValue = ce;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ce) {
                C._currentValue2 = ce;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ce) {
                C._threadCount = ce;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ce) {
                te || (lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), te = !0);
              }
            }
          }), C.Consumer = Pe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Aa = -1, Qi = 0, Xa = 1, Wi = 2;
      function Xr(h) {
        if (h._status === Aa) {
          var C = h._result, z = C();
          if (z.then(function(Pe) {
            if (h._status === Qi || h._status === Aa) {
              var ce = h;
              ce._status = Xa, ce._result = Pe;
            }
          }, function(Pe) {
            if (h._status === Qi || h._status === Aa) {
              var ce = h;
              ce._status = Wi, ce._result = Pe;
            }
          }), h._status === Aa) {
            var H = h;
            H._status = Qi, H._result = z;
          }
        }
        if (h._status === Xa) {
          var te = h._result;
          return te === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
        } else
          throw h._result;
      }
      function Ua(h) {
        var C = {
          // We use these fields to store the result.
          _status: Aa,
          _result: h
        }, z = {
          $$typeof: ie,
          _payload: C,
          _init: Xr
        };
        {
          var H, te;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Pe) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Pe, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(Pe) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = Pe, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function Gi(h) {
        h != null && h.$$typeof === W ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Se("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Re,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var qi;
      qi = Symbol.for("react.module.reference");
      function Nu(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === we || h === nt || Je || h === S || h === B || h === Z || Ie || h === de || gt || ft || Ft || typeof h == "object" && h !== null && (h.$$typeof === ie || h.$$typeof === W || h.$$typeof === oe || h.$$typeof === J || h.$$typeof === Re || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === qi || h.getModuleId !== void 0));
      }
      function jo(h, C) {
        Nu(h) || Se("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: W,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(te) {
              H = te, !h.name && !h.displayName && (h.displayName = te);
            }
          });
        }
        return z;
      }
      function mn() {
        var h = re.current;
        return h === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ca(h) {
        var C = mn();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Pl(h) {
        var C = mn();
        return C.useState(h);
      }
      function Ki(h, C, z) {
        var H = mn();
        return H.useReducer(h, C, z);
      }
      function qn(h) {
        var C = mn();
        return C.useRef(h);
      }
      function qs(h, C) {
        var z = mn();
        return z.useEffect(h, C);
      }
      function Ks(h, C) {
        var z = mn();
        return z.useInsertionEffect(h, C);
      }
      function Po(h, C) {
        var z = mn();
        return z.useLayoutEffect(h, C);
      }
      function Xs(h, C) {
        var z = mn();
        return z.useCallback(h, C);
      }
      function Vf(h, C) {
        var z = mn();
        return z.useMemo(h, C);
      }
      function jf(h, C, z) {
        var H = mn();
        return H.useImperativeHandle(h, C, z);
      }
      function un(h, C) {
        {
          var z = mn();
          return z.useDebugValue(h, C);
        }
      }
      function Pf() {
        var h = mn();
        return h.useTransition();
      }
      function Fa(h) {
        var C = mn();
        return C.useDeferredValue(h);
      }
      function ot() {
        var h = mn();
        return h.useId();
      }
      function Za(h, C, z) {
        var H = mn();
        return H.useSyncExternalStore(h, C, z);
      }
      var Xi = 0, zu, Zi, Lr, Bo, hr, $o, Yo;
      function Zs() {
      }
      Zs.__reactDisabledLog = !0;
      function Au() {
        {
          if (Xi === 0) {
            zu = console.log, Zi = console.info, Lr = console.warn, Bo = console.error, hr = console.group, $o = console.groupCollapsed, Yo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Zs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Xi++;
        }
      }
      function Ji() {
        {
          if (Xi--, Xi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: pe({}, h, {
                value: zu
              }),
              info: pe({}, h, {
                value: Zi
              }),
              warn: pe({}, h, {
                value: Lr
              }),
              error: pe({}, h, {
                value: Bo
              }),
              group: pe({}, h, {
                value: hr
              }),
              groupCollapsed: pe({}, h, {
                value: $o
              }),
              groupEnd: pe({}, h, {
                value: Yo
              })
            });
          }
          Xi < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ha = Lt.ReactCurrentDispatcher, mr;
      function el(h, C, z) {
        {
          if (mr === void 0)
            try {
              throw Error();
            } catch (te) {
              var H = te.stack.trim().match(/\n( *(at )?)/);
              mr = H && H[1] || "";
            }
          return `
` + mr + h;
        }
      }
      var tl = !1, nl;
      {
        var Uu = typeof WeakMap == "function" ? WeakMap : Map;
        nl = new Uu();
      }
      function Fu(h, C) {
        if (!h || tl)
          return "";
        {
          var z = nl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        tl = !0;
        var te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Pe;
        Pe = Ha.current, Ha.current = null, Au();
        try {
          if (C) {
            var ce = function() {
              throw Error();
            };
            if (Object.defineProperty(ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ce, []);
              } catch (St) {
                H = St;
              }
              Reflect.construct(h, [], ce);
            } else {
              try {
                ce.call();
              } catch (St) {
                H = St;
              }
              h.call(ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (St) {
              H = St;
            }
            h();
          }
        } catch (St) {
          if (St && H && typeof St.stack == "string") {
            for (var Fe = St.stack.split(`
`), st = H.stack.split(`
`), xt = Fe.length - 1, Gt = st.length - 1; xt >= 1 && Gt >= 0 && Fe[xt] !== st[Gt]; )
              Gt--;
            for (; xt >= 1 && Gt >= 0; xt--, Gt--)
              if (Fe[xt] !== st[Gt]) {
                if (xt !== 1 || Gt !== 1)
                  do
                    if (xt--, Gt--, Gt < 0 || Fe[xt] !== st[Gt]) {
                      var Vt = `
` + Fe[xt].replace(" at new ", " at ");
                      return h.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", h.displayName)), typeof h == "function" && nl.set(h, Vt), Vt;
                    }
                  while (xt >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          tl = !1, Ha.current = Pe, Ji(), Error.prepareStackTrace = te;
        }
        var qt = h ? h.displayName || h.name : "", Jt = qt ? el(qt) : "";
        return typeof h == "function" && nl.set(h, Jt), Jt;
      }
      function yi(h, C, z) {
        return Fu(h, !1);
      }
      function Bf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Ja(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Fu(h, Bf(h));
        if (typeof h == "string")
          return el(h);
        switch (h) {
          case B:
            return el("Suspense");
          case Z:
            return el("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Re:
              return yi(h.render);
            case W:
              return Ja(h.type, C, z);
            case ie: {
              var H = h, te = H._payload, Pe = H._init;
              try {
                return Ja(Pe(te), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Hu = Lt.ReactDebugCurrentFrame;
      function Bl(h) {
        if (h) {
          var C = h._owner, z = Ja(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function Vu(h, C, z, H, te) {
        {
          var Pe = Function.call.bind(Dr);
          for (var ce in h)
            if (Pe(h, ce)) {
              var Fe = void 0;
              try {
                if (typeof h[ce] != "function") {
                  var st = Error((H || "React class") + ": " + z + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Fe = h[ce](C, ce, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Fe = xt;
              }
              Fe && !(Fe instanceof Error) && (Bl(te), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, ce, typeof Fe), Bl(null)), Fe instanceof Error && !(Fe.message in Dt) && (Dt[Fe.message] = !0, Bl(te), Se("Failed %s type: %s", z, Fe.message), Bl(null));
            }
        }
      }
      function wt(h) {
        if (h) {
          var C = h._owner, z = Ja(h.type, h._source, C ? C.type : null);
          yt(z);
        } else
          yt(null);
      }
      var ju;
      ju = !1;
      function Pu() {
        if (fe.current) {
          var h = ur(fe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ke(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function $l(h) {
        return h != null ? Ke(h.__source) : "";
      }
      var fn = {};
      function Nr(h) {
        var C = Pu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function yr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Nr(C);
          if (!fn[z]) {
            fn[z] = !0;
            var H = "";
            h && h._owner && h._owner !== fe.current && (H = " It was passed a child from " + ur(h._owner.type) + "."), wt(h), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), wt(null);
          }
        }
      }
      function rl(h, C) {
        if (typeof h == "object") {
          if (Wt(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              jt(H) && yr(H, C);
            }
          else if (jt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var te = mt(h);
            if (typeof te == "function" && te !== h.entries)
              for (var Pe = te.call(h), ce; !(ce = Pe.next()).done; )
                jt(ce.value) && yr(ce.value, C);
          }
        }
      }
      function yn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Re || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === W))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = ur(C);
            Vu(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !ju) {
            ju = !0;
            var te = ur(C);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zt(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              wt(h), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), wt(null);
              break;
            }
          }
          h.ref !== null && (wt(h), Se("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
        }
      }
      function Js(h, C, z) {
        var H = Nu(h);
        if (!H) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = $l(C);
          Pe ? te += Pe : te += Pu();
          var ce;
          h === null ? ce = "null" : Wt(h) ? ce = "array" : h !== void 0 && h.$$typeof === Ve ? (ce = "<" + (ur(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof h, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, te);
        }
        var Fe = ze.apply(this, arguments);
        if (Fe == null)
          return Fe;
        if (H)
          for (var st = 2; st < arguments.length; st++)
            rl(arguments[st], h);
        return h === we ? zt(Fe) : yn(Fe), Fe;
      }
      var zr = !1;
      function jn(h) {
        var C = Js.bind(null, h);
        return C.type = h, zr || (zr = !0, lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function ei(h, C, z) {
        for (var H = Ht.apply(this, arguments), te = 2; te < arguments.length; te++)
          rl(arguments[te], H.type);
        return yn(H), H;
      }
      function ec(h, C) {
        var z = ae.transition;
        ae.transition = {};
        var H = ae.transition;
        ae.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ae.transition = z, z === null && H._updatedFibers) {
            var te = H._updatedFibers.size;
            te > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var gi = !1, al = null;
      function tc(h) {
        if (al === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = M && M[C];
            al = z.call(M, "timers").setImmediate;
          } catch {
            al = function(te) {
              gi === !1 && (gi = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Pe = new MessageChannel();
              Pe.port1.onmessage = te, Pe.port2.postMessage(void 0);
            };
          }
        return al(h);
      }
      var fa = 0, il = !1;
      function ll(h) {
        {
          var C = fa;
          fa++, U.current === null && (U.current = []);
          var z = U.isBatchingLegacy, H;
          try {
            if (U.isBatchingLegacy = !0, H = h(), !z && U.didScheduleLegacyUpdate) {
              var te = U.current;
              te !== null && (U.didScheduleLegacyUpdate = !1, ol(te));
            }
          } catch (qt) {
            throw da(C), qt;
          } finally {
            U.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Pe = H, ce = !1, Fe = {
              then: function(qt, Jt) {
                ce = !0, Pe.then(function(St) {
                  da(C), fa === 0 ? Bu(St, qt, Jt) : qt(St);
                }, function(St) {
                  da(C), Jt(St);
                });
              }
            };
            return !il && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ce || (il = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Fe;
          } else {
            var st = H;
            if (da(C), fa === 0) {
              var xt = U.current;
              xt !== null && (ol(xt), U.current = null);
              var Gt = {
                then: function(qt, Jt) {
                  U.current === null ? (U.current = [], Bu(st, qt, Jt)) : qt(st);
                }
              };
              return Gt;
            } else {
              var Vt = {
                then: function(qt, Jt) {
                  qt(st);
                }
              };
              return Vt;
            }
          }
        }
      }
      function da(h) {
        h !== fa - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), fa = h;
      }
      function Bu(h, C, z) {
        {
          var H = U.current;
          if (H !== null)
            try {
              ol(H), tc(function() {
                H.length === 0 ? (U.current = null, C(h)) : Bu(h, C, z);
              });
            } catch (te) {
              z(te);
            }
          else
            C(h);
        }
      }
      var ul = !1;
      function ol(h) {
        if (!ul) {
          ul = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            ul = !1;
          }
        }
      }
      var Yl = Js, $u = ei, Io = jn, Va = {
        map: mi,
        forEach: Ws,
        count: Mu,
        toArray: Gs,
        only: Lu
      };
      Q.Children = Va, Q.Component = je, Q.Fragment = we, Q.Profiler = nt, Q.PureComponent = Nt, Q.StrictMode = S, Q.Suspense = B, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, Q.cloneElement = $u, Q.createContext = Vo, Q.createElement = Yl, Q.createFactory = Io, Q.createRef = Vn, Q.forwardRef = Gi, Q.isValidElement = jt, Q.lazy = Ua, Q.memo = jo, Q.startTransition = ec, Q.unstable_act = ll, Q.useCallback = Xs, Q.useContext = ca, Q.useDebugValue = un, Q.useDeferredValue = Fa, Q.useEffect = qs, Q.useId = ot, Q.useImperativeHandle = jf, Q.useInsertionEffect = Ks, Q.useLayoutEffect = Po, Q.useMemo = Vf, Q.useReducer = Ki, Q.useRef = qn, Q.useState = Pl, Q.useSyncExternalStore = Za, Q.useTransition = Pf, Q.version = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
var tT;
function Qs() {
  return tT || (tT = 1, process.env.NODE_ENV === "production" ? Hm.exports = cD() : Hm.exports = fD()), Hm.exports;
}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function dD() {
  if (nT)
    return f0;
  nT = 1;
  var M = Qs();
  function Q(B, Z) {
    return B === Z && (B !== 0 || 1 / B === 1 / Z) || B !== B && Z !== Z;
  }
  var b = typeof Object.is == "function" ? Object.is : Q, Ve = M.useState, Ye = M.useEffect, we = M.useLayoutEffect, S = M.useDebugValue;
  function nt(B, Z) {
    var W = Z(), ie = Ve({ inst: { value: W, getSnapshot: Z } }), de = ie[0].inst, $ = ie[1];
    return we(function() {
      de.value = W, de.getSnapshot = Z, oe(de) && $({ inst: de });
    }, [B, W, Z]), Ye(function() {
      return oe(de) && $({ inst: de }), B(function() {
        oe(de) && $({ inst: de });
      });
    }, [B]), S(W), W;
  }
  function oe(B) {
    var Z = B.getSnapshot;
    B = B.value;
    try {
      var W = Z();
      return !b(B, W);
    } catch {
      return !0;
    }
  }
  function J(B, Z) {
    return Z();
  }
  var Re = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? J : nt;
  return f0.useSyncExternalStore = M.useSyncExternalStore !== void 0 ? M.useSyncExternalStore : Re, f0;
}
var d0 = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function pD() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var M = Qs(), Q = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(re) {
      {
        for (var ae = arguments.length, U = new Array(ae > 1 ? ae - 1 : 0), fe = 1; fe < ae; fe++)
          U[fe - 1] = arguments[fe];
        Ve("error", re, U);
      }
    }
    function Ve(re, ae, U) {
      {
        var fe = Q.ReactDebugCurrentFrame, ge = fe.getStackAddendum();
        ge !== "" && (ae += "%s", U = U.concat([ge]));
        var it = U.map(function(yt) {
          return String(yt);
        });
        it.unshift("Warning: " + ae), Function.prototype.apply.call(console[re], console, it);
      }
    }
    function Ye(re, ae) {
      return re === ae && (re !== 0 || 1 / re === 1 / ae) || re !== re && ae !== ae;
    }
    var we = typeof Object.is == "function" ? Object.is : Ye, S = M.useState, nt = M.useEffect, oe = M.useLayoutEffect, J = M.useDebugValue, Re = !1, B = !1;
    function Z(re, ae, U) {
      Re || M.startTransition !== void 0 && (Re = !0, b("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var fe = ae();
      if (!B) {
        var ge = ae();
        we(fe, ge) || (b("The result of getSnapshot should be cached to avoid an infinite loop"), B = !0);
      }
      var it = S({
        inst: {
          value: fe,
          getSnapshot: ae
        }
      }), yt = it[0].inst, gt = it[1];
      return oe(function() {
        yt.value = fe, yt.getSnapshot = ae, W(yt) && gt({
          inst: yt
        });
      }, [re, fe, ae]), nt(function() {
        W(yt) && gt({
          inst: yt
        });
        var ft = function() {
          W(yt) && gt({
            inst: yt
          });
        };
        return re(ft);
      }, [re]), J(fe), fe;
    }
    function W(re) {
      var ae = re.getSnapshot, U = re.value;
      try {
        var fe = ae();
        return !we(U, fe);
      } catch {
        return !0;
      }
    }
    function ie(re, ae, U) {
      return ae();
    }
    var de = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $ = !de, _t = $ ? ie : Z, mt = M.useSyncExternalStore !== void 0 ? M.useSyncExternalStore : _t;
    d0.useSyncExternalStore = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), d0;
}
process.env.NODE_ENV === "production" ? y0.exports = dD() : y0.exports = pD();
var yT = y0.exports, p0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function vD() {
  if (aT)
    return p0;
  aT = 1;
  var M = Qs(), Q = yT;
  function b(J, Re) {
    return J === Re && (J !== 0 || 1 / J === 1 / Re) || J !== J && Re !== Re;
  }
  var Ve = typeof Object.is == "function" ? Object.is : b, Ye = Q.useSyncExternalStore, we = M.useRef, S = M.useEffect, nt = M.useMemo, oe = M.useDebugValue;
  return p0.useSyncExternalStoreWithSelector = function(J, Re, B, Z, W) {
    var ie = we(null);
    if (ie.current === null) {
      var de = { hasValue: !1, value: null };
      ie.current = de;
    } else
      de = ie.current;
    ie = nt(function() {
      function _t(fe) {
        if (!mt) {
          if (mt = !0, re = fe, fe = Z(fe), W !== void 0 && de.hasValue) {
            var ge = de.value;
            if (W(ge, fe))
              return ae = ge;
          }
          return ae = fe;
        }
        if (ge = ae, Ve(re, fe))
          return ge;
        var it = Z(fe);
        return W !== void 0 && W(ge, it) ? ge : (re = fe, ae = it);
      }
      var mt = !1, re, ae, U = B === void 0 ? null : B;
      return [function() {
        return _t(Re());
      }, U === null ? void 0 : function() {
        return _t(U());
      }];
    }, [Re, B, Z, W]);
    var $ = Ye(J, ie[0], ie[1]);
    return S(function() {
      de.hasValue = !0, de.value = $;
    }, [$]), oe($), $;
  }, p0;
}
var v0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function hD() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var M = Qs(), Q = yT;
    function b(Re, B) {
      return Re === B && (Re !== 0 || 1 / Re === 1 / B) || Re !== Re && B !== B;
    }
    var Ve = typeof Object.is == "function" ? Object.is : b, Ye = Q.useSyncExternalStore, we = M.useRef, S = M.useEffect, nt = M.useMemo, oe = M.useDebugValue;
    function J(Re, B, Z, W, ie) {
      var de = we(null), $;
      de.current === null ? ($ = {
        hasValue: !1,
        value: null
      }, de.current = $) : $ = de.current;
      var _t = nt(function() {
        var U = !1, fe, ge, it = function(Ft) {
          if (!U) {
            U = !0, fe = Ft;
            var Ie = W(Ft);
            if (ie !== void 0 && $.hasValue) {
              var Je = $.value;
              if (ie(Je, Ie))
                return ge = Je, Je;
            }
            return ge = Ie, Ie;
          }
          var Lt = fe, lt = ge;
          if (Ve(Lt, Ft))
            return lt;
          var Se = W(Ft);
          return ie !== void 0 && ie(lt, Se) ? lt : (fe = Ft, ge = Se, Se);
        }, yt = Z === void 0 ? null : Z, gt = function() {
          return it(B());
        }, ft = yt === null ? void 0 : function() {
          return it(yt());
        };
        return [gt, ft];
      }, [B, Z, W, ie]), mt = _t[0], re = _t[1], ae = Ye(Re, mt, re);
      return S(function() {
        $.hasValue = !0, $.value = ae;
      }, [ae]), oe(ae), ae;
    }
    v0.useSyncExternalStoreWithSelector = J, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), v0;
}
process.env.NODE_ENV === "production" ? vD() : hD();
var Oa = {}, Vm = { exports: {} }, h0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function mD() {
  return lT || (lT = 1, function(M) {
    function Q(ee, Oe) {
      var T = ee.length;
      ee.push(Oe);
      e:
        for (; 0 < T; ) {
          var I = T - 1 >>> 1, pe = ee[I];
          if (0 < Ye(pe, Oe))
            ee[I] = Oe, ee[T] = pe, T = I;
          else
            break e;
        }
    }
    function b(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function Ve(ee) {
      if (ee.length === 0)
        return null;
      var Oe = ee[0], T = ee.pop();
      if (T !== Oe) {
        ee[0] = T;
        e:
          for (var I = 0, pe = ee.length, We = pe >>> 1; I < We; ) {
            var je = 2 * (I + 1) - 1, dt = ee[je], rt = je + 1, pt = ee[rt];
            if (0 > Ye(dt, T))
              rt < pe && 0 > Ye(pt, dt) ? (ee[I] = pt, ee[rt] = T, I = rt) : (ee[I] = dt, ee[je] = T, I = je);
            else if (rt < pe && 0 > Ye(pt, T))
              ee[I] = pt, ee[rt] = T, I = rt;
            else
              break e;
          }
      }
      return Oe;
    }
    function Ye(ee, Oe) {
      var T = ee.sortIndex - Oe.sortIndex;
      return T !== 0 ? T : ee.id - Oe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var we = performance;
      M.unstable_now = function() {
        return we.now();
      };
    } else {
      var S = Date, nt = S.now();
      M.unstable_now = function() {
        return S.now() - nt;
      };
    }
    var oe = [], J = [], Re = 1, B = null, Z = 3, W = !1, ie = !1, de = !1, $ = typeof setTimeout == "function" ? setTimeout : null, _t = typeof clearTimeout == "function" ? clearTimeout : null, mt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function re(ee) {
      for (var Oe = b(J); Oe !== null; ) {
        if (Oe.callback === null)
          Ve(J);
        else if (Oe.startTime <= ee)
          Ve(J), Oe.sortIndex = Oe.expirationTime, Q(oe, Oe);
        else
          break;
        Oe = b(J);
      }
    }
    function ae(ee) {
      if (de = !1, re(ee), !ie)
        if (b(oe) !== null)
          ie = !0, lt(U);
        else {
          var Oe = b(J);
          Oe !== null && Se(ae, Oe.startTime - ee);
        }
    }
    function U(ee, Oe) {
      ie = !1, de && (de = !1, _t(it), it = -1), W = !0;
      var T = Z;
      try {
        for (re(Oe), B = b(oe); B !== null && (!(B.expirationTime > Oe) || ee && !ft()); ) {
          var I = B.callback;
          if (typeof I == "function") {
            B.callback = null, Z = B.priorityLevel;
            var pe = I(B.expirationTime <= Oe);
            Oe = M.unstable_now(), typeof pe == "function" ? B.callback = pe : B === b(oe) && Ve(oe), re(Oe);
          } else
            Ve(oe);
          B = b(oe);
        }
        if (B !== null)
          var We = !0;
        else {
          var je = b(J);
          je !== null && Se(ae, je.startTime - Oe), We = !1;
        }
        return We;
      } finally {
        B = null, Z = T, W = !1;
      }
    }
    var fe = !1, ge = null, it = -1, yt = 5, gt = -1;
    function ft() {
      return !(M.unstable_now() - gt < yt);
    }
    function Ft() {
      if (ge !== null) {
        var ee = M.unstable_now();
        gt = ee;
        var Oe = !0;
        try {
          Oe = ge(!0, ee);
        } finally {
          Oe ? Ie() : (fe = !1, ge = null);
        }
      } else
        fe = !1;
    }
    var Ie;
    if (typeof mt == "function")
      Ie = function() {
        mt(Ft);
      };
    else if (typeof MessageChannel < "u") {
      var Je = new MessageChannel(), Lt = Je.port2;
      Je.port1.onmessage = Ft, Ie = function() {
        Lt.postMessage(null);
      };
    } else
      Ie = function() {
        $(Ft, 0);
      };
    function lt(ee) {
      ge = ee, fe || (fe = !0, Ie());
    }
    function Se(ee, Oe) {
      it = $(function() {
        ee(M.unstable_now());
      }, Oe);
    }
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, M.unstable_continueExecution = function() {
      ie || W || (ie = !0, lt(U));
    }, M.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : yt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, M.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, M.unstable_getFirstCallbackNode = function() {
      return b(oe);
    }, M.unstable_next = function(ee) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var Oe = 3;
          break;
        default:
          Oe = Z;
      }
      var T = Z;
      Z = Oe;
      try {
        return ee();
      } finally {
        Z = T;
      }
    }, M.unstable_pauseExecution = function() {
    }, M.unstable_requestPaint = function() {
    }, M.unstable_runWithPriority = function(ee, Oe) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var T = Z;
      Z = ee;
      try {
        return Oe();
      } finally {
        Z = T;
      }
    }, M.unstable_scheduleCallback = function(ee, Oe, T) {
      var I = M.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? I + T : I) : T = I, ee) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = T + pe, ee = { id: Re++, callback: Oe, priorityLevel: ee, startTime: T, expirationTime: pe, sortIndex: -1 }, T > I ? (ee.sortIndex = T, Q(J, ee), b(oe) === null && ee === b(J) && (de ? (_t(it), it = -1) : de = !0, Se(ae, T - I))) : (ee.sortIndex = pe, Q(oe, ee), ie || W || (ie = !0, lt(U))), ee;
    }, M.unstable_shouldYield = ft, M.unstable_wrapCallback = function(ee) {
      var Oe = Z;
      return function() {
        var T = Z;
        Z = Oe;
        try {
          return ee.apply(this, arguments);
        } finally {
          Z = T;
        }
      };
    };
  }(h0)), h0;
}
var m0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function yD() {
  return uT || (uT = 1, function(M) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Q = !1, b = !1, Ve = 5;
      function Ye(se, ze) {
        var ut = se.length;
        se.push(ze), nt(se, ze, ut);
      }
      function we(se) {
        return se.length === 0 ? null : se[0];
      }
      function S(se) {
        if (se.length === 0)
          return null;
        var ze = se[0], ut = se.pop();
        return ut !== ze && (se[0] = ut, oe(se, ut, 0)), ze;
      }
      function nt(se, ze, ut) {
        for (var Ht = ut; Ht > 0; ) {
          var jt = Ht - 1 >>> 1, Ln = se[jt];
          if (J(Ln, ze) > 0)
            se[jt] = ze, se[Ht] = Ln, Ht = jt;
          else
            return;
        }
      }
      function oe(se, ze, ut) {
        for (var Ht = ut, jt = se.length, Ln = jt >>> 1; Ht < Ln; ) {
          var Rn = (Ht + 1) * 2 - 1, Mr = se[Rn], en = Rn + 1, sa = se[en];
          if (J(Mr, ze) < 0)
            en < jt && J(sa, Mr) < 0 ? (se[Ht] = sa, se[en] = ze, Ht = en) : (se[Ht] = Mr, se[Rn] = ze, Ht = Rn);
          else if (en < jt && J(sa, ze) < 0)
            se[Ht] = sa, se[en] = ze, Ht = en;
          else
            return;
        }
      }
      function J(se, ze) {
        var ut = se.sortIndex - ze.sortIndex;
        return ut !== 0 ? ut : se.id - ze.id;
      }
      var Re = 1, B = 2, Z = 3, W = 4, ie = 5;
      function de(se, ze) {
      }
      var $ = typeof performance == "object" && typeof performance.now == "function";
      if ($) {
        var _t = performance;
        M.unstable_now = function() {
          return _t.now();
        };
      } else {
        var mt = Date, re = mt.now();
        M.unstable_now = function() {
          return mt.now() - re;
        };
      }
      var ae = 1073741823, U = -1, fe = 250, ge = 5e3, it = 1e4, yt = ae, gt = [], ft = [], Ft = 1, Ie = null, Je = Z, Lt = !1, lt = !1, Se = !1, ee = typeof setTimeout == "function" ? setTimeout : null, Oe = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function I(se) {
        for (var ze = we(ft); ze !== null; ) {
          if (ze.callback === null)
            S(ft);
          else if (ze.startTime <= se)
            S(ft), ze.sortIndex = ze.expirationTime, Ye(gt, ze);
          else
            return;
          ze = we(ft);
        }
      }
      function pe(se) {
        if (Se = !1, I(se), !lt)
          if (we(gt) !== null)
            lt = !0, za(We);
          else {
            var ze = we(ft);
            ze !== null && Gn(pe, ze.startTime - se);
          }
      }
      function We(se, ze) {
        lt = !1, Se && (Se = !1, Kr()), Lt = !0;
        var ut = Je;
        try {
          var Ht;
          if (!b)
            return je(se, ze);
        } finally {
          Ie = null, Je = ut, Lt = !1;
        }
      }
      function je(se, ze) {
        var ut = ze;
        for (I(ut), Ie = we(gt); Ie !== null && !Q && !(Ie.expirationTime > ut && (!se || hi())); ) {
          var Ht = Ie.callback;
          if (typeof Ht == "function") {
            Ie.callback = null, Je = Ie.priorityLevel;
            var jt = Ie.expirationTime <= ut, Ln = Ht(jt);
            ut = M.unstable_now(), typeof Ln == "function" ? Ie.callback = Ln : Ie === we(gt) && S(gt), I(ut);
          } else
            S(gt);
          Ie = we(gt);
        }
        if (Ie !== null)
          return !0;
        var Rn = we(ft);
        return Rn !== null && Gn(pe, Rn.startTime - ut), !1;
      }
      function dt(se, ze) {
        switch (se) {
          case Re:
          case B:
          case Z:
          case W:
          case ie:
            break;
          default:
            se = Z;
        }
        var ut = Je;
        Je = se;
        try {
          return ze();
        } finally {
          Je = ut;
        }
      }
      function rt(se) {
        var ze;
        switch (Je) {
          case Re:
          case B:
          case Z:
            ze = Z;
            break;
          default:
            ze = Je;
            break;
        }
        var ut = Je;
        Je = ze;
        try {
          return se();
        } finally {
          Je = ut;
        }
      }
      function pt(se) {
        var ze = Je;
        return function() {
          var ut = Je;
          Je = ze;
          try {
            return se.apply(this, arguments);
          } finally {
            Je = ut;
          }
        };
      }
      function at(se, ze, ut) {
        var Ht = M.unstable_now(), jt;
        if (typeof ut == "object" && ut !== null) {
          var Ln = ut.delay;
          typeof Ln == "number" && Ln > 0 ? jt = Ht + Ln : jt = Ht;
        } else
          jt = Ht;
        var Rn;
        switch (se) {
          case Re:
            Rn = U;
            break;
          case B:
            Rn = fe;
            break;
          case ie:
            Rn = yt;
            break;
          case W:
            Rn = it;
            break;
          case Z:
          default:
            Rn = ge;
            break;
        }
        var Mr = jt + Rn, en = {
          id: Ft++,
          callback: ze,
          priorityLevel: se,
          startTime: jt,
          expirationTime: Mr,
          sortIndex: -1
        };
        return jt > Ht ? (en.sortIndex = jt, Ye(ft, en), we(gt) === null && en === we(ft) && (Se ? Kr() : Se = !0, Gn(pe, jt - Ht))) : (en.sortIndex = Mr, Ye(gt, en), !lt && !Lt && (lt = !0, za(We))), en;
      }
      function Nt() {
      }
      function qr() {
        !lt && !Lt && (lt = !0, za(We));
      }
      function Vn() {
        return we(gt);
      }
      function Te(se) {
        se.callback = null;
      }
      function Wt() {
        return Je;
      }
      var ve = !1, Cn = null, Mn = -1, Tn = Ve, La = -1;
      function hi() {
        var se = M.unstable_now() - La;
        return !(se < Tn);
      }
      function ur() {
      }
      function Dr(se) {
        if (se < 0 || se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        se > 0 ? Tn = Math.floor(1e3 / se) : Tn = Ve;
      }
      var qa = function() {
        if (Cn !== null) {
          var se = M.unstable_now();
          La = se;
          var ze = !0, ut = !0;
          try {
            ut = Cn(ze, se);
          } finally {
            ut ? kr() : (ve = !1, Cn = null);
          }
        } else
          ve = !1;
      }, kr;
      if (typeof T == "function")
        kr = function() {
          T(qa);
        };
      else if (typeof MessageChannel < "u") {
        var Na = new MessageChannel(), Or = Na.port2;
        Na.port1.onmessage = qa, kr = function() {
          Or.postMessage(null);
        };
      } else
        kr = function() {
          ee(qa, 0);
        };
      function za(se) {
        Cn = se, ve || (ve = !0, kr());
      }
      function Gn(se, ze) {
        Mn = ee(function() {
          se(M.unstable_now());
        }, ze);
      }
      function Kr() {
        Oe(Mn), Mn = -1;
      }
      var Vl = ur, Ka = null;
      M.unstable_IdlePriority = ie, M.unstable_ImmediatePriority = Re, M.unstable_LowPriority = W, M.unstable_NormalPriority = Z, M.unstable_Profiling = Ka, M.unstable_UserBlockingPriority = B, M.unstable_cancelCallback = Te, M.unstable_continueExecution = qr, M.unstable_forceFrameRate = Dr, M.unstable_getCurrentPriorityLevel = Wt, M.unstable_getFirstCallbackNode = Vn, M.unstable_next = rt, M.unstable_pauseExecution = Nt, M.unstable_requestPaint = Vl, M.unstable_runWithPriority = dt, M.unstable_scheduleCallback = at, M.unstable_shouldYield = hi, M.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m0)), m0;
}
var oT;
function gT() {
  return oT || (oT = 1, process.env.NODE_ENV === "production" ? Vm.exports = mD() : Vm.exports = yD()), Vm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT;
function gD() {
  if (sT)
    return Oa;
  sT = 1;
  var M = Qs(), Q = gT();
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ve = /* @__PURE__ */ new Set(), Ye = {};
  function we(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Ye[n] = r, n = 0; n < r.length; n++)
      Ve.add(r[n]);
  }
  var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oe = Object.prototype.hasOwnProperty, J = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Re = {}, B = {};
  function Z(n) {
    return oe.call(B, n) ? !0 : oe.call(Re, n) ? !1 : J.test(n) ? B[n] = !0 : (Re[n] = !0, !1);
  }
  function W(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ie(n, r, l, o) {
    if (r === null || typeof r > "u" || W(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function de(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    $[n] = new de(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    $[r] = new de(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    $[n] = new de(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    $[n] = new de(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    $[n] = new de(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    $[n] = new de(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    $[n] = new de(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    $[n] = new de(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    $[n] = new de(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var _t = /[\-:]([a-z])/g;
  function mt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      _t,
      mt
    );
    $[r] = new de(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(_t, mt);
    $[r] = new de(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(_t, mt);
    $[r] = new de(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    $[n] = new de(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    $[n] = new de(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function re(n, r, l, o) {
    var c = $.hasOwnProperty(r) ? $[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ae = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U = Symbol.for("react.element"), fe = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), gt = Symbol.for("react.provider"), ft = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Oe(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, I;
  function pe(n) {
    if (I === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        I = r && r[1] || "";
      }
    return `
` + I + n;
  }
  var We = !1;
  function je(n, r) {
    if (!n || We)
      return "";
    We = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (F) {
            var o = F;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (F) {
            o = F;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var R = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? pe(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return pe(n.type);
      case 16:
        return pe("Lazy");
      case 13:
        return pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ge:
        return "Fragment";
      case fe:
        return "Portal";
      case yt:
        return "Profiler";
      case it:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ft:
          return (n.displayName || "Context") + ".Consumer";
        case gt:
          return (n._context.displayName || "Context") + ".Provider";
        case Ft:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Lt:
          return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
        case lt:
          r = n._payload, n = n._init;
          try {
            return rt(n(r));
          } catch {
          }
      }
    return null;
  }
  function pt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return rt(r);
      case 8:
        return r === it ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function at(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Nt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function qr(n) {
    var r = Nt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Vn(n) {
    n._valueTracker || (n._valueTracker = qr(n));
  }
  function Te(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Nt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Wt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ve(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Mn(n, r) {
    r = r.checked, r != null && re(n, "checked", r, !1);
  }
  function Tn(n, r) {
    Mn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? hi(n, r.type, l) : r.hasOwnProperty("defaultValue") && hi(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function La(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function hi(n, r, l) {
    (r !== "number" || Wt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ur = Array.isArray;
  function Dr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function qa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(b(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function kr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(b(92));
        if (ur(l)) {
          if (1 < l.length)
            throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function Na(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Or(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function za(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? za(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, Vl = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ka(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var se = {
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
    strokeWidth: !0
  }, ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(se).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), se[r] = se[n];
    });
  });
  function ut(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || se.hasOwnProperty(n) && se[n] ? ("" + r).trim() : r + "px";
  }
  function Ht(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = ut(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var jt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ln(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(b(62));
    }
  }
  function Rn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Mr = null;
  function en(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var sa = null, cn = null, Zt = null;
  function jl(n) {
    if (n = is(n)) {
      if (typeof sa != "function")
        throw Error(b(280));
      var r = n.stateNode;
      r && (r = Ae(r), sa(n.stateNode, n.type, r));
    }
  }
  function mi(n) {
    cn ? Zt ? Zt.push(n) : Zt = [n] : cn = n;
  }
  function Mu() {
    if (cn) {
      var n = cn, r = Zt;
      if (Zt = cn = null, jl(n), r)
        for (n = 0; n < r.length; n++)
          jl(r[n]);
    }
  }
  function Ws(n, r) {
    return n(r);
  }
  function Gs() {
  }
  var Lu = !1;
  function Vo(n, r, l) {
    if (Lu)
      return n(r, l);
    Lu = !0;
    try {
      return Ws(n, r, l);
    } finally {
      Lu = !1, (cn !== null || Zt !== null) && (Gs(), Mu());
    }
  }
  function Aa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Ae(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(b(231, r, typeof l));
    return l;
  }
  var Qi = !1;
  if (nt)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", { get: function() {
        Qi = !0;
      } }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      Qi = !1;
    }
  function Wi(n, r, l, o, c, d, m, E, R) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (q) {
      this.onError(q);
    }
  }
  var Xr = !1, Ua = null, Gi = !1, qi = null, Nu = { onError: function(n) {
    Xr = !0, Ua = n;
  } };
  function jo(n, r, l, o, c, d, m, E, R) {
    Xr = !1, Ua = null, Wi.apply(Nu, arguments);
  }
  function mn(n, r, l, o, c, d, m, E, R) {
    if (jo.apply(this, arguments), Xr) {
      if (Xr) {
        var F = Ua;
        Xr = !1, Ua = null;
      } else
        throw Error(b(198));
      Gi || (Gi = !0, qi = F);
    }
  }
  function ca(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Pl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ki(n) {
    if (ca(n) !== n)
      throw Error(b(188));
  }
  function qn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ca(n), r === null)
        throw Error(b(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Ki(c), n;
          if (d === o)
            return Ki(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(b(189));
        }
      }
      if (l.alternate !== o)
        throw Error(b(190));
    }
    if (l.tag !== 3)
      throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function qs(n) {
    return n = qn(n), n !== null ? Ks(n) : null;
  }
  function Ks(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Ks(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Po = Q.unstable_scheduleCallback, Xs = Q.unstable_cancelCallback, Vf = Q.unstable_shouldYield, jf = Q.unstable_requestPaint, un = Q.unstable_now, Pf = Q.unstable_getCurrentPriorityLevel, Fa = Q.unstable_ImmediatePriority, ot = Q.unstable_UserBlockingPriority, Za = Q.unstable_NormalPriority, Xi = Q.unstable_LowPriority, zu = Q.unstable_IdlePriority, Zi = null, Lr = null;
  function Bo(n) {
    if (Lr && typeof Lr.onCommitFiberRoot == "function")
      try {
        Lr.onCommitFiberRoot(Zi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var hr = Math.clz32 ? Math.clz32 : Zs, $o = Math.log, Yo = Math.LN2;
  function Zs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - ($o(n) / Yo | 0) | 0;
  }
  var Au = 64, Ji = 4194304;
  function Ha(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function mr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ha(E) : (d &= m, d !== 0 && (o = Ha(d)));
    } else
      m = l & ~c, m !== 0 ? o = Ha(m) : d !== 0 && (o = Ha(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - hr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function el(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function tl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - hr(d), E = 1 << m, R = c[m];
      R === -1 ? (!(E & l) || E & o) && (c[m] = el(E, r)) : R <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function nl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Uu() {
    var n = Au;
    return Au <<= 1, !(Au & 4194240) && (Au = 64), n;
  }
  function Fu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function yi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - hr(r), n[r] = l;
  }
  function Bf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - hr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ja(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - hr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Hu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Bl, Vu, wt, ju, Pu, Ke = !1, $l = [], fn = null, Nr = null, yr = null, rl = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map(), zt = [], Js = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function zr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        yr = null;
        break;
      case "pointerover":
      case "pointerout":
        rl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yn.delete(r.pointerId);
    }
  }
  function jn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = is(r), r !== null && Vu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ei(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return fn = jn(fn, n, r, l, o, c), !0;
      case "dragenter":
        return Nr = jn(Nr, n, r, l, o, c), !0;
      case "mouseover":
        return yr = jn(yr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return rl.set(d, jn(rl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, yn.set(d, jn(yn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ec(n) {
    var r = va(n.target);
    if (r !== null) {
      var l = ca(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Pl(l), r !== null) {
            n.blockedOn = r, Pu(n.priority, function() {
              wt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function gi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = $u(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Mr = o, l.target.dispatchEvent(o), Mr = null;
      } else
        return r = is(l), r !== null && Vu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function al(n, r, l) {
    gi(n) && l.delete(r);
  }
  function tc() {
    Ke = !1, fn !== null && gi(fn) && (fn = null), Nr !== null && gi(Nr) && (Nr = null), yr !== null && gi(yr) && (yr = null), rl.forEach(al), yn.forEach(al);
  }
  function fa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ke || (Ke = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, tc)));
  }
  function il(n) {
    function r(c) {
      return fa(c, n);
    }
    if (0 < $l.length) {
      fa($l[0], n);
      for (var l = 1; l < $l.length; l++) {
        var o = $l[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (fn !== null && fa(fn, n), Nr !== null && fa(Nr, n), yr !== null && fa(yr, n), rl.forEach(r), yn.forEach(r), l = 0; l < zt.length; l++)
      o = zt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < zt.length && (l = zt[0], l.blockedOn === null); )
      ec(l), l.blockedOn === null && zt.shift();
  }
  var ll = ae.ReactCurrentBatchConfig, da = !0;
  function Bu(n, r, l, o) {
    var c = Dt, d = ll.transition;
    ll.transition = null;
    try {
      Dt = 1, ol(n, r, l, o);
    } finally {
      Dt = c, ll.transition = d;
    }
  }
  function ul(n, r, l, o) {
    var c = Dt, d = ll.transition;
    ll.transition = null;
    try {
      Dt = 4, ol(n, r, l, o);
    } finally {
      Dt = c, ll.transition = d;
    }
  }
  function ol(n, r, l, o) {
    if (da) {
      var c = $u(n, r, l, o);
      if (c === null)
        cc(n, r, o, Yl, l), zr(n, o);
      else if (ei(c, n, r, l, o))
        o.stopPropagation();
      else if (zr(n, o), r & 4 && -1 < Js.indexOf(n)) {
        for (; c !== null; ) {
          var d = is(c);
          if (d !== null && Bl(d), d = $u(n, r, l, o), d === null && cc(n, r, o, Yl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        cc(n, r, o, null, l);
    }
  }
  var Yl = null;
  function $u(n, r, l, o) {
    if (Yl = null, n = en(o), n = va(n), n !== null)
      if (r = ca(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Pl(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Yl = n, null;
  }
  function Io(n) {
    switch (n) {
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
        switch (Pf()) {
          case Fa:
            return 1;
          case ot:
            return 4;
          case Za:
          case Xi:
            return 16;
          case zu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Va = null, h = null, C = null;
  function z() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Va ? Va.value : Va.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function Pe() {
    return !1;
  }
  function ce(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? te : Pe, this.isPropagationStopped = Pe, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var Fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = ce(Fe), xt = T({}, Fe, { view: 0, detail: 0 }), Gt = ce(xt), Vt, qt, Jt, St = T({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Vt = n.screenX - Jt.screenX, qt = n.screenY - Jt.screenY) : qt = Vt = 0, Jt = n), Vt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), Si = ce(St), Yu = T({}, St, { dataTransfer: 0 }), Qo = ce(Yu), $f = T({}, xt, { relatedTarget: 0 }), ja = ce($f), Wo = T({}, Fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Go = ce(Wo), Yf = T({}, Fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jm = ce(Yf), Pm = T({}, Fe, { data: 0 }), If = ce(Pm), Qf = {
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
    MozPrintableKey: "Unidentified"
  }, Jp = {
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
    224: "Meta"
  }, ev = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function tv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ev[n]) ? !!r[n] : !1;
  }
  function Wf() {
    return tv;
  }
  var Ei = T({}, xt, { key: function(n) {
    if (n.key) {
      var r = Qf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Jp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wf, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bm = ce(Ei), Gf = T({}, St, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nc = ce(Gf), qf = T({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wf }), $m = ce(qf), rc = T({}, Fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nv = ce(rc), Ar = T({}, St, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ci = ce(Ar), bn = [9, 13, 27, 32], Pa = nt && "CompositionEvent" in window, Il = null;
  nt && "documentMode" in document && (Il = document.documentMode);
  var ac = nt && "TextEvent" in window && !Il, rv = nt && (!Pa || Il && 8 < Il && 11 >= Il), Iu = String.fromCharCode(32), av = !1;
  function iv(n, r) {
    switch (n) {
      case "keyup":
        return bn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ic(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Ym(n, r) {
    switch (n) {
      case "compositionend":
        return ic(r);
      case "keypress":
        return r.which !== 32 ? null : (av = !0, Iu);
      case "textInput":
        return n = r.data, n === Iu && av ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (Qu)
      return n === "compositionend" || !Pa && iv(n, r) ? (n = z(), C = h = Va = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return rv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var lv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!lv[n.type] : r === "textarea";
  }
  function ov(n, r, l, o) {
    mi(o), r = ns(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qo = null, Wu = null;
  function Gu(n) {
    sc(n, 0);
  }
  function qu(n) {
    var r = Xu(n);
    if (Te(r))
      return n;
  }
  function sv(n, r) {
    if (n === "change")
      return r;
  }
  var Kf = !1;
  if (nt) {
    var Xf;
    if (nt) {
      var Zf = "oninput" in document;
      if (!Zf) {
        var cv = document.createElement("div");
        cv.setAttribute("oninput", "return;"), Zf = typeof cv.oninput == "function";
      }
      Xf = Zf;
    } else
      Xf = !1;
    Kf = Xf && (!document.documentMode || 9 < document.documentMode);
  }
  function fv() {
    qo && (qo.detachEvent("onpropertychange", dv), Wu = qo = null);
  }
  function dv(n) {
    if (n.propertyName === "value" && qu(Wu)) {
      var r = [];
      ov(r, Wu, n, en(n)), Vo(Gu, r);
    }
  }
  function Qm(n, r, l) {
    n === "focusin" ? (fv(), qo = r, Wu = l, qo.attachEvent("onpropertychange", dv)) : n === "focusout" && fv();
  }
  function Wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return qu(Wu);
  }
  function Gm(n, r) {
    if (n === "click")
      return qu(r);
  }
  function pv(n, r) {
    if (n === "input" || n === "change")
      return qu(r);
  }
  function qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var pa = typeof Object.is == "function" ? Object.is : qm;
  function Ko(n, r) {
    if (pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!oe.call(r, c) || !pa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function vv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function hv(n, r) {
    var l = vv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = vv(l);
    }
  }
  function mv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? mv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function lc() {
    for (var n = window, r = Wt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Wt(n.document);
    }
    return r;
  }
  function Ti(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uc(n) {
    var r = lc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && mv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ti(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = hv(l, d);
          var m = hv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var yv = nt && "documentMode" in document && 11 >= document.documentMode, Ba = null, Jf = null, Xo = null, ed = !1;
  function gv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ed || Ba == null || Ba !== Wt(o) || (o = Ba, "selectionStart" in o && Ti(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Xo && Ko(Xo, o) || (Xo = o, o = ns(Jf, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ba)));
  }
  function oc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ql = { animationend: oc("Animation", "AnimationEnd"), animationiteration: oc("Animation", "AnimationIteration"), animationstart: oc("Animation", "AnimationStart"), transitionend: oc("Transition", "TransitionEnd") }, td = {}, nd = {};
  nt && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete Ql.animationend.animation, delete Ql.animationiteration.animation, delete Ql.animationstart.animation), "TransitionEvent" in window || delete Ql.transitionend.transition);
  function Pn(n) {
    if (td[n])
      return td[n];
    if (!Ql[n])
      return n;
    var r = Ql[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in nd)
        return td[n] = r[l];
    return n;
  }
  var rd = Pn("animationend"), Sv = Pn("animationiteration"), Ev = Pn("animationstart"), Cv = Pn("transitionend"), Tv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ri(n, r) {
    Tv.set(n, r), we(r, [n]);
  }
  for (var Zo = 0; Zo < Rv.length; Zo++) {
    var Wl = Rv[Zo], Km = Wl.toLowerCase(), Jo = Wl[0].toUpperCase() + Wl.slice(1);
    Ri(Km, "on" + Jo);
  }
  Ri(rd, "onAnimationEnd"), Ri(Sv, "onAnimationIteration"), Ri(Ev, "onAnimationStart"), Ri("dblclick", "onDoubleClick"), Ri("focusin", "onFocus"), Ri("focusout", "onBlur"), Ri(Cv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), we("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), we("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), we("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), we("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), we("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), we("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(es));
  function _v(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, mn(o, r, void 0, n), n.currentTarget = null;
  }
  function sc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], R = E.instance, F = E.currentTarget;
            if (E = E.listener, R !== d && c.isPropagationStopped())
              break e;
            _v(c, E, F), d = R;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], R = E.instance, F = E.currentTarget, E = E.listener, R !== d && c.isPropagationStopped())
              break e;
            _v(c, E, F), d = R;
          }
      }
    }
    if (Gi)
      throw n = qi, Gi = !1, qi = null, n;
  }
  function Kt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function sl(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function Ku(n) {
    if (!n[_i]) {
      n[_i] = !0, Ve.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || sl(l, !1, n), sl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[_i] || (r[_i] = !0, sl("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (Io(r)) {
      case 1:
        var c = Bu;
        break;
      case 4:
        c = ul;
        break;
      default:
        c = ol;
    }
    l = c.bind(null, r, l, n), c = void 0, !Qi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function cc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var R = m.tag;
                if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = va(E), m === null)
                return;
              if (R = m.tag, R === 5 || R === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    Vo(function() {
      var F = d, q = en(l), K = [];
      e: {
        var G = Tv.get(n);
        if (G !== void 0) {
          var me = st, xe = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              me = Bm;
              break;
            case "focusin":
              xe = "focus", me = ja;
              break;
            case "focusout":
              xe = "blur", me = ja;
              break;
            case "beforeblur":
            case "afterblur":
              me = ja;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              me = Si;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = Qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = $m;
              break;
            case rd:
            case Sv:
            case Ev:
              me = Go;
              break;
            case Cv:
              me = nv;
              break;
            case "scroll":
              me = Gt;
              break;
            case "wheel":
              me = Ci;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = nc;
          }
          var ke = (r & 4) !== 0, wn = !ke && n === "scroll", D = ke ? G !== null ? G + "Capture" : null : G;
          ke = [];
          for (var w = F, L; w !== null; ) {
            L = w;
            var ne = L.stateNode;
            if (L.tag === 5 && ne !== null && (L = ne, D !== null && (ne = Aa(w, D), ne != null && ke.push(ts(w, ne, L)))), wn)
              break;
            w = w.return;
          }
          0 < ke.length && (G = new me(G, xe, null, l, q), K.push({ event: G, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (G = n === "mouseover" || n === "pointerover", me = n === "mouseout" || n === "pointerout", G && l !== Mr && (xe = l.relatedTarget || l.fromElement) && (va(xe) || xe[wi]))
            break e;
          if ((me || G) && (G = q.window === q ? q : (G = q.ownerDocument) ? G.defaultView || G.parentWindow : window, me ? (xe = l.relatedTarget || l.toElement, me = F, xe = xe ? va(xe) : null, xe !== null && (wn = ca(xe), xe !== wn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (me = null, xe = F), me !== xe)) {
            if (ke = Si, ne = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (ke = nc, ne = "onPointerLeave", D = "onPointerEnter", w = "pointer"), wn = me == null ? G : Xu(me), L = xe == null ? G : Xu(xe), G = new ke(ne, w + "leave", me, l, q), G.target = wn, G.relatedTarget = L, ne = null, va(q) === F && (ke = new ke(D, w + "enter", xe, l, q), ke.target = L, ke.relatedTarget = wn, ne = ke), wn = ne, me && xe)
              t: {
                for (ke = me, D = xe, w = 0, L = ke; L; L = Gl(L))
                  w++;
                for (L = 0, ne = D; ne; ne = Gl(ne))
                  L++;
                for (; 0 < w - L; )
                  ke = Gl(ke), w--;
                for (; 0 < L - w; )
                  D = Gl(D), L--;
                for (; w--; ) {
                  if (ke === D || D !== null && ke === D.alternate)
                    break t;
                  ke = Gl(ke), D = Gl(D);
                }
                ke = null;
              }
            else
              ke = null;
            me !== null && ad(K, G, me, ke, !1), xe !== null && wn !== null && ad(K, wn, xe, ke, !0);
          }
        }
        e: {
          if (G = F ? Xu(F) : window, me = G.nodeName && G.nodeName.toLowerCase(), me === "select" || me === "input" && G.type === "file")
            var Me = sv;
          else if (uv(G))
            if (Kf)
              Me = pv;
            else {
              Me = Wm;
              var be = Qm;
            }
          else
            (me = G.nodeName) && me.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (Me = Gm);
          if (Me && (Me = Me(n, F))) {
            ov(K, Me, l, q);
            break e;
          }
          be && be(n, G, F), n === "focusout" && (be = G._wrapperState) && be.controlled && G.type === "number" && hi(G, "number", G.value);
        }
        switch (be = F ? Xu(F) : window, n) {
          case "focusin":
            (uv(be) || be.contentEditable === "true") && (Ba = be, Jf = F, Xo = null);
            break;
          case "focusout":
            Xo = Jf = Ba = null;
            break;
          case "mousedown":
            ed = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ed = !1, gv(K, l, q);
            break;
          case "selectionchange":
            if (yv)
              break;
          case "keydown":
          case "keyup":
            gv(K, l, q);
        }
        var Ne;
        if (Pa)
          e: {
            switch (n) {
              case "compositionstart":
                var qe = "onCompositionStart";
                break e;
              case "compositionend":
                qe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                qe = "onCompositionUpdate";
                break e;
            }
            qe = void 0;
          }
        else
          Qu ? iv(n, l) && (qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (qe = "onCompositionStart");
        qe && (rv && l.locale !== "ko" && (Qu || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && Qu && (Ne = z()) : (Va = q, h = "value" in Va ? Va.value : Va.textContent, Qu = !0)), be = ns(F, qe), 0 < be.length && (qe = new If(qe, n, null, l, q), K.push({ event: qe, listeners: be }), Ne ? qe.data = Ne : (Ne = ic(l), Ne !== null && (qe.data = Ne)))), (Ne = ac ? Ym(n, l) : Im(n, l)) && (F = ns(F, "onBeforeInput"), 0 < F.length && (q = new If("onBeforeInput", "beforeinput", null, l, q), K.push({ event: q, listeners: F }), q.data = Ne));
      }
      sc(K, r);
    });
  }
  function ts(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ns(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Aa(n, l), d != null && o.unshift(ts(n, d, c)), d = Aa(n, r), d != null && o.push(ts(n, d, c))), n = n.return;
    }
    return o;
  }
  function Gl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ad(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, R = E.alternate, F = E.stateNode;
      if (R !== null && R === o)
        break;
      E.tag === 5 && F !== null && (E = F, c ? (R = Aa(l, d), R != null && m.unshift(ts(l, R, E))) : c || (R = Aa(l, d), R != null && m.push(ts(l, R, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var id = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function ld(n) {
    return (typeof n == "string" ? n : "" + n).replace(id, `
`).replace(Zm, "");
  }
  function fc(n, r, l) {
    if (r = ld(r), ld(n) !== r && l)
      throw Error(b(425));
  }
  function dc() {
  }
  var ud = null, ql = null;
  function rs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Kl = typeof setTimeout == "function" ? setTimeout : void 0, xv = typeof clearTimeout == "function" ? clearTimeout : void 0, od = typeof Promise == "function" ? Promise : void 0, sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(n) {
    return od.resolve(null).then(n).catch(Jm);
  } : Kl;
  function Jm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function cl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), il(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    il(r);
  }
  function $a(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function as(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var fl = Math.random().toString(36).slice(2), ti = "__reactFiber$" + fl, Xl = "__reactProps$" + fl, wi = "__reactContainer$" + fl, cd = "__reactEvents$" + fl, ey = "__reactListeners$" + fl, fd = "__reactHandles$" + fl;
  function va(n) {
    var r = n[ti];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[wi] || l[ti]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = as(n); n !== null; ) {
            if (l = n[ti])
              return l;
            n = as(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function is(n) {
    return n = n[ti] || n[wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Xu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(b(33));
  }
  function Ae(n) {
    return n[Xl] || null;
  }
  var dl = [], tn = -1;
  function et(n) {
    return { current: n };
  }
  function Mt(n) {
    0 > tn || (n.current = dl[tn], dl[tn] = null, tn--);
  }
  function At(n, r) {
    tn++, dl[tn] = n.current, n.current = r;
  }
  var ni = {}, Ge = et(ni), gn = et(!1), Ur = ni;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ni;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function on(n) {
    return n = n.childContextTypes, n != null;
  }
  function ma() {
    Mt(gn), Mt(Ge);
  }
  function pl(n, r, l) {
    if (Ge.current !== ni)
      throw Error(b(168));
    At(Ge, r), At(gn, l);
  }
  function ls(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(b(108, pt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function pc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ni, Ur = Ge.current, At(Ge, n), At(gn, gn.current), !0;
  }
  function bv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(b(169));
    l ? (n = ls(n, r, Ur), o.__reactInternalMemoizedMergedChildContext = n, Mt(gn), Mt(Ge), At(Ge, n)) : Mt(gn), At(gn, l);
  }
  var Zr = null, Bn = !1, us = !1;
  function dd(n) {
    Zr === null ? Zr = [n] : Zr.push(n);
  }
  function pd(n) {
    Bn = !0, dd(n);
  }
  function Fr() {
    if (!us && Zr !== null) {
      us = !0;
      var n = 0, r = Dt;
      try {
        var l = Zr;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Zr = null, Bn = !1;
      } catch (c) {
        throw Zr !== null && (Zr = Zr.slice(n + 1)), Po(Fa, Fr), c;
      } finally {
        Dt = r, us = !1;
      }
    }
    return null;
  }
  var vl = [], Hr = 0, Zl = null, Zu = 0, Vr = [], or = 0, ya = null, Kn = 1, xi = "";
  function Jr(n, r) {
    vl[Hr++] = Zu, vl[Hr++] = Zl, Zl = n, Zu = r;
  }
  function vd(n, r, l) {
    Vr[or++] = Kn, Vr[or++] = xi, Vr[or++] = ya, ya = n;
    var o = Kn;
    n = xi;
    var c = 32 - hr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - hr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Kn = 1 << 32 - hr(r) + c | l << c | o, xi = d + n;
    } else
      Kn = 1 << d | l << c | o, xi = n;
  }
  function vc(n) {
    n.return !== null && (Jr(n, 1), vd(n, 1, 0));
  }
  function hd(n) {
    for (; n === Zl; )
      Zl = vl[--Hr], vl[Hr] = null, Zu = vl[--Hr], vl[Hr] = null;
    for (; n === ya; )
      ya = Vr[--or], Vr[or] = null, xi = Vr[--or], Vr[or] = null, Kn = Vr[--or], Vr[or] = null;
  }
  var ea = null, jr = null, nn = !1, ga = null;
  function md(n, r) {
    var l = _a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Dv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, jr = $a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ya !== null ? { id: Kn, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = _a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ea = n, jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function mc(n) {
    if (nn) {
      var r = jr;
      if (r) {
        var l = r;
        if (!Dv(n, r)) {
          if (hc(n))
            throw Error(b(418));
          r = $a(l.nextSibling);
          var o = ea;
          r && Dv(n, r) ? md(o, l) : (n.flags = n.flags & -4097 | 2, nn = !1, ea = n);
        }
      } else {
        if (hc(n))
          throw Error(b(418));
        n.flags = n.flags & -4097 | 2, nn = !1, ea = n;
      }
    }
  }
  function kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ea = n;
  }
  function yc(n) {
    if (n !== ea)
      return !1;
    if (!nn)
      return kv(n), nn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !rs(n.type, n.memoizedProps)), r && (r = jr)) {
      if (hc(n))
        throw Ov(), Error(b(418));
      for (; r; )
        md(n, r), r = $a(r.nextSibling);
    }
    if (kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                jr = $a(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        jr = null;
      }
    } else
      jr = ea ? $a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = jr; n; )
      n = $a(n.nextSibling);
  }
  function dn() {
    jr = ea = null, nn = !1;
  }
  function yd(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  var gc = ae.ReactCurrentBatchConfig;
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ri = et(null), Sc = null, hl = null, gd = null;
  function Sd() {
    gd = hl = Sc = null;
  }
  function ml(n) {
    var r = ri.current;
    Mt(ri), n._currentValue = r;
  }
  function $n(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function le(n, r) {
    Sc = n, gd = hl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Dn = !0), n.firstContext = null);
  }
  function _n(n) {
    var r = n._currentValue;
    if (gd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, hl === null) {
        if (Sc === null)
          throw Error(b(308));
        hl = n, Sc.dependencies = { lanes: 0, firstContext: n };
      } else
        hl = hl.next = n;
    return r;
  }
  var Xn = null;
  function Ed(n) {
    Xn === null ? Xn = [n] : Xn.push(n);
  }
  function Mv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, bi(n, o);
  }
  function bi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var yl = !1;
  function Cd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Di(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function gl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, bi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, bi(n, l);
  }
  function Ec(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ja(n, l);
    }
  }
  function Td(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Sl(n, r, l, o) {
    var c = n.updateQueue;
    yl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var R = E, F = R.next;
      R.next = null, m === null ? d = F : m.next = F, m = R;
      var q = n.alternate;
      q !== null && (q = q.updateQueue, E = q.lastBaseUpdate, E !== m && (E === null ? q.firstBaseUpdate = F : E.next = F, q.lastBaseUpdate = R));
    }
    if (d !== null) {
      var K = c.baseState;
      m = 0, q = F = R = null, E = d;
      do {
        var G = E.lane, me = E.eventTime;
        if ((o & G) === G) {
          q !== null && (q = q.next = {
            eventTime: me,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var xe = n, ke = E;
            switch (G = r, me = l, ke.tag) {
              case 1:
                if (xe = ke.payload, typeof xe == "function") {
                  K = xe.call(me, K, G);
                  break e;
                }
                K = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = ke.payload, G = typeof xe == "function" ? xe.call(me, K, G) : xe, G == null)
                  break e;
                K = T({}, K, G);
                break e;
              case 2:
                yl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, G = c.effects, G === null ? c.effects = [E] : G.push(E));
        } else
          me = { eventTime: me, lane: G, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, q === null ? (F = q = me, R = K) : q = q.next = me, m |= G;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          G = E, E = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (1);
      if (q === null && (R = K), c.baseState = R, c.firstBaseUpdate = F, c.lastBaseUpdate = q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Li |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function Jl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(b(191, c));
          c.call(o);
        }
      }
  }
  var Lv = new M.Component().refs;
  function Rd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Cc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ca(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = dr(), c = kn(n), d = Di(o, c);
    d.payload = r, l != null && (d.callback = l), r = gl(n, d, c), r !== null && (pr(r, n, c, o), Ec(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = dr(), c = kn(n), d = Di(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = gl(n, d, c), r !== null && (pr(r, n, c, o), Ec(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = dr(), o = kn(n), c = Di(l, o);
    c.tag = 2, r != null && (c.callback = r), r = gl(n, c, o), r !== null && (pr(r, n, o, l), Ec(r, n, o));
  } };
  function Nv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Ko(l, o) || !Ko(c, d) : !0;
  }
  function zv(n, r, l) {
    var o = !1, c = ni, d = r.contextType;
    return typeof d == "object" && d !== null ? d = _n(d) : (c = on(r) ? Ur : Ge.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : ni), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Cc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Av(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Cc.enqueueReplaceState(r, r.state, null);
  }
  function Tc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Lv, Cd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = _n(d) : (d = on(r) ? Ur : Ge.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Rd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Cc.enqueueReplaceState(c, c.state, null), Sl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ju(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(b(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(b(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Lv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(b(284));
      if (!l._owner)
        throw Error(b(290, n));
    }
    return n;
  }
  function Rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Fv(n) {
    function r(D, w) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [w], D.flags |= 16) : L.push(w);
      }
    }
    function l(D, w) {
      if (!n)
        return null;
      for (; w !== null; )
        r(D, w), w = w.sibling;
      return null;
    }
    function o(D, w) {
      for (D = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? D.set(w.key, w) : D.set(w.index, w), w = w.sibling;
      return D;
    }
    function c(D, w) {
      return D = bl(D, w), D.index = 0, D.sibling = null, D;
    }
    function d(D, w, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < w ? (D.flags |= 2, w) : L) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, L, ne) {
      return w === null || w.tag !== 6 ? (w = xs(L, D.mode, ne), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function R(D, w, L, ne) {
      var Me = L.type;
      return Me === ge ? q(D, w, L.props.children, ne, L.key) : w !== null && (w.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === lt && Uv(Me) === w.type) ? (ne = c(w, L.props), ne.ref = Ju(D, w, L), ne.return = D, ne) : (ne = tf(L.type, L.key, L.props, null, D.mode, ne), ne.ref = Ju(D, w, L), ne.return = D, ne);
    }
    function F(D, w, L, ne) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = gu(L, D.mode, ne), w.return = D, w) : (w = c(w, L.children || []), w.return = D, w);
    }
    function q(D, w, L, ne, Me) {
      return w === null || w.tag !== 7 ? (w = yu(L, D.mode, ne, Me), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function K(D, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return w = xs("" + w, D.mode, L), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case U:
            return L = tf(w.type, w.key, w.props, null, D.mode, L), L.ref = Ju(D, null, w), L.return = D, L;
          case fe:
            return w = gu(w, D.mode, L), w.return = D, w;
          case lt:
            var ne = w._init;
            return K(D, ne(w._payload), L);
        }
        if (ur(w) || Oe(w))
          return w = yu(w, D.mode, L, null), w.return = D, w;
        Rc(D, w);
      }
      return null;
    }
    function G(D, w, L, ne) {
      var Me = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return Me !== null ? null : E(D, w, "" + L, ne);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case U:
            return L.key === Me ? R(D, w, L, ne) : null;
          case fe:
            return L.key === Me ? F(D, w, L, ne) : null;
          case lt:
            return Me = L._init, G(
              D,
              w,
              Me(L._payload),
              ne
            );
        }
        if (ur(L) || Oe(L))
          return Me !== null ? null : q(D, w, L, ne, null);
        Rc(D, L);
      }
      return null;
    }
    function me(D, w, L, ne, Me) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number")
        return D = D.get(L) || null, E(w, D, "" + ne, Me);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case U:
            return D = D.get(ne.key === null ? L : ne.key) || null, R(w, D, ne, Me);
          case fe:
            return D = D.get(ne.key === null ? L : ne.key) || null, F(w, D, ne, Me);
          case lt:
            var be = ne._init;
            return me(D, w, L, be(ne._payload), Me);
        }
        if (ur(ne) || Oe(ne))
          return D = D.get(L) || null, q(w, D, ne, Me, null);
        Rc(w, ne);
      }
      return null;
    }
    function xe(D, w, L, ne) {
      for (var Me = null, be = null, Ne = w, qe = w = 0, Qn = null; Ne !== null && qe < L.length; qe++) {
        Ne.index > qe ? (Qn = Ne, Ne = null) : Qn = Ne.sibling;
        var bt = G(D, Ne, L[qe], ne);
        if (bt === null) {
          Ne === null && (Ne = Qn);
          break;
        }
        n && Ne && bt.alternate === null && r(D, Ne), w = d(bt, w, qe), be === null ? Me = bt : be.sibling = bt, be = bt, Ne = Qn;
      }
      if (qe === L.length)
        return l(D, Ne), nn && Jr(D, qe), Me;
      if (Ne === null) {
        for (; qe < L.length; qe++)
          Ne = K(D, L[qe], ne), Ne !== null && (w = d(Ne, w, qe), be === null ? Me = Ne : be.sibling = Ne, be = Ne);
        return nn && Jr(D, qe), Me;
      }
      for (Ne = o(D, Ne); qe < L.length; qe++)
        Qn = me(Ne, D, qe, L[qe], ne), Qn !== null && (n && Qn.alternate !== null && Ne.delete(Qn.key === null ? qe : Qn.key), w = d(Qn, w, qe), be === null ? Me = Qn : be.sibling = Qn, be = Qn);
      return n && Ne.forEach(function(Dl) {
        return r(D, Dl);
      }), nn && Jr(D, qe), Me;
    }
    function ke(D, w, L, ne) {
      var Me = Oe(L);
      if (typeof Me != "function")
        throw Error(b(150));
      if (L = Me.call(L), L == null)
        throw Error(b(151));
      for (var be = Me = null, Ne = w, qe = w = 0, Qn = null, bt = L.next(); Ne !== null && !bt.done; qe++, bt = L.next()) {
        Ne.index > qe ? (Qn = Ne, Ne = null) : Qn = Ne.sibling;
        var Dl = G(D, Ne, bt.value, ne);
        if (Dl === null) {
          Ne === null && (Ne = Qn);
          break;
        }
        n && Ne && Dl.alternate === null && r(D, Ne), w = d(Dl, w, qe), be === null ? Me = Dl : be.sibling = Dl, be = Dl, Ne = Qn;
      }
      if (bt.done)
        return l(
          D,
          Ne
        ), nn && Jr(D, qe), Me;
      if (Ne === null) {
        for (; !bt.done; qe++, bt = L.next())
          bt = K(D, bt.value, ne), bt !== null && (w = d(bt, w, qe), be === null ? Me = bt : be.sibling = bt, be = bt);
        return nn && Jr(D, qe), Me;
      }
      for (Ne = o(D, Ne); !bt.done; qe++, bt = L.next())
        bt = me(Ne, D, qe, bt.value, ne), bt !== null && (n && bt.alternate !== null && Ne.delete(bt.key === null ? qe : bt.key), w = d(bt, w, qe), be === null ? Me = bt : be.sibling = bt, be = bt);
      return n && Ne.forEach(function(Ey) {
        return r(D, Ey);
      }), nn && Jr(D, qe), Me;
    }
    function wn(D, w, L, ne) {
      if (typeof L == "object" && L !== null && L.type === ge && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case U:
            e: {
              for (var Me = L.key, be = w; be !== null; ) {
                if (be.key === Me) {
                  if (Me = L.type, Me === ge) {
                    if (be.tag === 7) {
                      l(D, be.sibling), w = c(be, L.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (be.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === lt && Uv(Me) === be.type) {
                    l(D, be.sibling), w = c(be, L.props), w.ref = Ju(D, be, L), w.return = D, D = w;
                    break e;
                  }
                  l(D, be);
                  break;
                } else
                  r(D, be);
                be = be.sibling;
              }
              L.type === ge ? (w = yu(L.props.children, D.mode, ne, L.key), w.return = D, D = w) : (ne = tf(L.type, L.key, L.props, null, D.mode, ne), ne.ref = Ju(D, w, L), ne.return = D, D = ne);
            }
            return m(D);
          case fe:
            e: {
              for (be = L.key; w !== null; ) {
                if (w.key === be)
                  if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                    l(D, w.sibling), w = c(w, L.children || []), w.return = D, D = w;
                    break e;
                  } else {
                    l(D, w);
                    break;
                  }
                else
                  r(D, w);
                w = w.sibling;
              }
              w = gu(L, D.mode, ne), w.return = D, D = w;
            }
            return m(D);
          case lt:
            return be = L._init, wn(D, w, be(L._payload), ne);
        }
        if (ur(L))
          return xe(D, w, L, ne);
        if (Oe(L))
          return ke(D, w, L, ne);
        Rc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, L), w.return = D, D = w) : (l(D, w), w = xs(L, D.mode, ne), w.return = D, D = w), m(D)) : l(D, w);
    }
    return wn;
  }
  var eo = Fv(!0), Hv = Fv(!1), os = {}, Ya = et(os), ss = et(os), to = et(os);
  function eu(n) {
    if (n === os)
      throw Error(b(174));
    return n;
  }
  function _d(n, r) {
    switch (At(to, r), At(ss, n), At(Ya, os), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Gn(r, n);
    }
    Mt(Ya), At(Ya, r);
  }
  function El() {
    Mt(Ya), Mt(ss), Mt(to);
  }
  function He(n) {
    eu(to.current);
    var r = eu(Ya.current), l = Gn(r, n.type);
    r !== l && (At(ss, n), At(Ya, l));
  }
  function ct(n) {
    ss.current === n && (Mt(Ya), Mt(ss));
  }
  var Be = et(0);
  function pn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Sa = [];
  function _c() {
    for (var n = 0; n < Sa.length; n++)
      Sa[n]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var wc = ae.ReactCurrentDispatcher, wd = ae.ReactCurrentBatchConfig, tu = 0, rn = null, P = null, Et = null, $e = !1, ai = !1, na = 0, nu = 0;
  function an() {
    throw Error(b(321));
  }
  function ru(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!pa(n[l], r[l]))
        return !1;
    return !0;
  }
  function Cl(n, r, l, o, c, d) {
    if (tu = d, rn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wc.current = n === null || n.memoizedState === null ? ny : ry, n = l(o, c), ai) {
      d = 0;
      do {
        if (ai = !1, na = 0, 25 <= d)
          throw Error(b(301));
        d += 1, Et = P = null, r.updateQueue = null, wc.current = bd, n = l(o, c);
      } while (ai);
    }
    if (wc.current = Pc, r = P !== null && P.next !== null, tu = 0, Et = P = rn = null, $e = !1, r)
      throw Error(b(300));
    return n;
  }
  function au() {
    var n = na !== 0;
    return na = 0, n;
  }
  function Ea() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? rn.memoizedState = Et = n : Et = Et.next = n, Et;
  }
  function Pr() {
    if (P === null) {
      var n = rn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = P.next;
    var r = Et === null ? rn.memoizedState : Et.next;
    if (r !== null)
      Et = r, P = n;
    else {
      if (n === null)
        throw Error(b(310));
      P = n, n = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, Et === null ? rn.memoizedState = Et = n : Et = Et.next = n;
    }
    return Et;
  }
  function iu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cs(n) {
    var r = Pr(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = P, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, R = null, F = d;
      do {
        var q = F.lane;
        if ((tu & q) === q)
          R !== null && (R = R.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var K = {
            lane: q,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          R === null ? (E = R = K, m = o) : R = R.next = K, rn.lanes |= q, Li |= q;
        }
        F = F.next;
      } while (F !== null && F !== d);
      R === null ? m = o : R.next = E, pa(o, r.memoizedState) || (Dn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = R, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, rn.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function fs(n) {
    var r = Pr(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      pa(d, r.memoizedState) || (Dn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function xc() {
  }
  function bc(n, r) {
    var l = rn, o = Pr(), c = r(), d = !pa(o.memoizedState, c);
    if (d && (o.memoizedState = c, Dn = !0), o = o.queue, ds(Oc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, lu(9, kc.bind(null, l, o, c, r), void 0, null), vn === null)
        throw Error(b(349));
      tu & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = rn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function kc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && Lc(n);
  }
  function Oc(n, r, l) {
    return l(function() {
      Mc(r) && Lc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !pa(n, l);
    } catch {
      return !0;
    }
  }
  function Lc(n) {
    var r = bi(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function Nc(n) {
    var r = Ea();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: iu, lastRenderedState: n }, r.queue = n, n = n.dispatch = jc.bind(null, rn, n), [r.memoizedState, n];
  }
  function lu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = rn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function zc() {
    return Pr().memoizedState;
  }
  function uu(n, r, l, o) {
    var c = Ea();
    rn.flags |= n, c.memoizedState = lu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ki(n, r, l, o) {
    var c = Pr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (P !== null) {
      var m = P.memoizedState;
      if (d = m.destroy, o !== null && ru(o, m.deps)) {
        c.memoizedState = lu(r, l, d, o);
        return;
      }
    }
    rn.flags |= n, c.memoizedState = lu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return uu(8390656, 8, n, r);
  }
  function ds(n, r) {
    return ki(2048, 8, n, r);
  }
  function Uc(n, r) {
    return ki(4, 2, n, r);
  }
  function Fc(n, r) {
    return ki(4, 4, n, r);
  }
  function xd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function no(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ki(4, 4, xd.bind(null, r, n), l);
  }
  function Hc() {
  }
  function ro(n, r) {
    var l = Pr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ru(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Tl(n, r) {
    var l = Pr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ru(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Br(n, r, l) {
    return tu & 21 ? (pa(l, r) || (l = Uu(), rn.lanes |= l, Li |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Dn = !0), n.memoizedState = l);
  }
  function ty(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = wd.transition;
    wd.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, wd.transition = o;
    }
  }
  function Xt() {
    return Pr().memoizedState;
  }
  function Vc(n, r, l) {
    var o = kn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ao(n))
      ps(r, l);
    else if (l = Mv(n, r, l, o), l !== null) {
      var c = dr();
      pr(l, n, o, c), Vv(l, r, o);
    }
  }
  function jc(n, r, l) {
    var o = kn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ao(n))
      ps(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, pa(E, m)) {
            var R = r.interleaved;
            R === null ? (c.next = c, Ed(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Mv(n, r, c, o), l !== null && (c = dr(), pr(l, n, o, c), Vv(l, r, o));
    }
  }
  function ao(n) {
    var r = n.alternate;
    return n === rn || r !== null && r === rn;
  }
  function ps(n, r) {
    ai = $e = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ja(n, l);
    }
  }
  var Pc = { readContext: _n, useCallback: an, useContext: an, useEffect: an, useImperativeHandle: an, useInsertionEffect: an, useLayoutEffect: an, useMemo: an, useReducer: an, useRef: an, useState: an, useDebugValue: an, useDeferredValue: an, useTransition: an, useMutableSource: an, useSyncExternalStore: an, useId: an, unstable_isNewReconciler: !1 }, ny = { readContext: _n, useCallback: function(n, r) {
    return Ea().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: _n, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, uu(
      4194308,
      4,
      xd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return uu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return uu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ea();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ea();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vc.bind(null, rn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ea();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Nc, useDebugValue: Hc, useDeferredValue: function(n) {
    return Ea().memoizedState = n;
  }, useTransition: function() {
    var n = Nc(!1), r = n[0];
    return n = ty.bind(null, n[1]), Ea().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = rn, c = Ea();
    if (nn) {
      if (l === void 0)
        throw Error(b(407));
      l = l();
    } else {
      if (l = r(), vn === null)
        throw Error(b(349));
      tu & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Oc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, lu(9, kc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ea(), r = vn.identifierPrefix;
    if (nn) {
      var l = xi, o = Kn;
      l = (o & ~(1 << 32 - hr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = na++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = nu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ry = {
    readContext: _n,
    useCallback: ro,
    useContext: _n,
    useEffect: ds,
    useImperativeHandle: no,
    useInsertionEffect: Uc,
    useLayoutEffect: Fc,
    useMemo: Tl,
    useReducer: cs,
    useRef: zc,
    useState: function() {
      return cs(iu);
    },
    useDebugValue: Hc,
    useDeferredValue: function(n) {
      var r = Pr();
      return Br(r, P.memoizedState, n);
    },
    useTransition: function() {
      var n = cs(iu)[0], r = Pr().memoizedState;
      return [n, r];
    },
    useMutableSource: xc,
    useSyncExternalStore: bc,
    useId: Xt,
    unstable_isNewReconciler: !1
  }, bd = { readContext: _n, useCallback: ro, useContext: _n, useEffect: ds, useImperativeHandle: no, useInsertionEffect: Uc, useLayoutEffect: Fc, useMemo: Tl, useReducer: fs, useRef: zc, useState: function() {
    return fs(iu);
  }, useDebugValue: Hc, useDeferredValue: function(n) {
    var r = Pr();
    return P === null ? r.memoizedState = n : Br(r, P.memoizedState, n);
  }, useTransition: function() {
    var n = fs(iu)[0], r = Pr().memoizedState;
    return [n, r];
  }, useMutableSource: xc, useSyncExternalStore: bc, useId: Xt, unstable_isNewReconciler: !1 };
  function io(n, r) {
    try {
      var l = "", o = r;
      do
        l += dt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function vs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Bc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ay = typeof WeakMap == "function" ? WeakMap : Map;
  function jv(n, r, l) {
    l = Di(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      qc || (qc = !0, du = o), Bc(n, r);
    }, l;
  }
  function hs(n, r, l) {
    l = Di(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Bc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Bc(n, r), typeof o != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Pv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ay();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function Dd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function kd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Di(-1, 1), r.tag = 2, gl(l, r, 1))), l.lanes |= 1), n);
  }
  var iy = ae.ReactCurrentOwner, Dn = !1;
  function zn(n, r, l, o) {
    r.child = n === null ? Hv(r, null, l, o) : eo(r, n.child, l, o);
  }
  function Rl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return le(r, c), o = Cl(n, r, l, o, d, c), l = au(), n !== null && !Dn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Zn(n, r, c)) : (nn && l && vc(r), r.flags |= 1, zn(n, r, o, c), r.child);
  }
  function $c(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, $r(n, r, d, o, c)) : (n = tf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ko, l(m, o) && n.ref === r.ref)
        return Zn(n, r, c);
    }
    return r.flags |= 1, n = bl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function $r(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ko(d, o) && n.ref === r.ref)
        if (Dn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Dn = !0);
        else
          return r.lanes = n.lanes, Zn(n, r, c);
    }
    return lo(n, r, l, o, c);
  }
  function ou(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, At(po, ra), ra |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, At(po, ra), ra |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, At(po, ra), ra |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, At(po, ra), ra |= o;
    return zn(n, r, c, l), r.child;
  }
  function tt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lo(n, r, l, o, c) {
    var d = on(l) ? Ur : Ge.current;
    return d = ha(r, d), le(r, c), l = Cl(n, r, l, o, d, c), o = au(), n !== null && !Dn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Zn(n, r, c)) : (nn && o && vc(r), r.flags |= 1, zn(n, r, l, c), r.child);
  }
  function Od(n, r, l, o, c) {
    if (on(l)) {
      var d = !0;
      pc(r);
    } else
      d = !1;
    if (le(r, c), r.stateNode === null)
      sr(n, r), zv(r, l, o), Tc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var R = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = _n(F) : (F = on(l) ? Ur : Ge.current, F = ha(r, F));
      var q = l.getDerivedStateFromProps, K = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || R !== F) && Av(r, m, o, F), yl = !1;
      var G = r.memoizedState;
      m.state = G, Sl(r, o, m, c), R = r.memoizedState, E !== o || G !== R || gn.current || yl ? (typeof q == "function" && (Rd(r, l, q, o), R = r.memoizedState), (E = yl || Nv(r, l, E, o, G, R, F)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), m.props = o, m.state = R, m.context = F, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Nn(n, r), E = r.memoizedProps, F = r.type === r.elementType ? E : ta(r.type, E), m.props = F, K = r.pendingProps, G = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = _n(R) : (R = on(l) ? Ur : Ge.current, R = ha(r, R));
      var me = l.getDerivedStateFromProps;
      (q = typeof me == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || G !== R) && Av(r, m, o, R), yl = !1, G = r.memoizedState, m.state = G, Sl(r, o, m, c);
      var xe = r.memoizedState;
      E !== K || G !== xe || gn.current || yl ? (typeof me == "function" && (Rd(r, l, me, o), xe = r.memoizedState), (F = yl || Nv(r, l, F, o, G, xe, R) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, xe, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, xe, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), m.props = o, m.state = xe, m.context = R, o = F) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Bv(n, r, l, o, d, c);
  }
  function Bv(n, r, l, o, c, d) {
    tt(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && bv(r, l, !1), Zn(n, r, d);
    o = r.stateNode, iy.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = eo(r, n.child, null, d), r.child = eo(r, null, E, d)) : zn(n, r, E, d), r.memoizedState = o.state, c && bv(r, l, !0), r.child;
  }
  function $v(n) {
    var r = n.stateNode;
    r.pendingContext ? pl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && pl(n, r.context, !1), _d(n, r.containerInfo);
  }
  function Yc(n, r, l, o, c) {
    return dn(), yd(c), r.flags |= 256, zn(n, r, l, o), r.child;
  }
  var su = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Md(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = Be.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), At(Be, c & 1), n === null)
      return mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ws(m, o, 0, null), n = yu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Md(l), r.memoizedState = su, n) : Nd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ly(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = bl(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = bl(E, d) : (d = yu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Md(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = su, o;
    }
    return d = n.child, n = d.sibling, o = bl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Nd(n, r) {
    return r = ws({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function uo(n, r, l, o) {
    return o !== null && yd(o), eo(r, n.child, null, l), n = Nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ly(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = vs(Error(b(422))), uo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = ws({ mode: "visible", children: o.children }, c, 0, null), d = yu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && eo(r, n.child, null, m), r.child.memoizedState = Md(m), r.memoizedState = su, d);
    if (!(r.mode & 1))
      return uo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(b(419)), o = vs(d, o, void 0), uo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Dn || E) {
      if (o = vn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, bi(n, c), pr(o, n, c, -1));
      }
      return Id(), o = vs(Error(b(421))), uo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, jr = $a(c.nextSibling), ea = r, nn = !0, ga = null, n !== null && (Vr[or++] = Kn, Vr[or++] = xi, Vr[or++] = ya, Kn = n.id, xi = n.overflow, ya = r), r = Nd(r, o.children), r.flags |= 4096, r);
  }
  function zd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), $n(n.return, r, l);
  }
  function Ic(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (zn(n, r, o.children, l), o = Be.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && zd(n, l, r);
            else if (n.tag === 19)
              zd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (At(Be, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && pn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ic(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && pn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Ic(r, !0, l, null, d);
          break;
        case "together":
          Ic(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function sr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Zn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Oi(n, r, l) {
    switch (r.tag) {
      case 3:
        $v(r), dn();
        break;
      case 5:
        He(r);
        break;
      case 1:
        on(r.type) && pc(r);
        break;
      case 4:
        _d(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        At(ri, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (At(Be, Be.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Ld(n, r, l) : (At(Be, Be.current & 1), n = Zn(n, r, l), n !== null ? n.sibling : null);
        At(Be, Be.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), At(Be, Be.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ou(n, r, l);
    }
    return Zn(n, r, l);
  }
  var ms, cu, Ca, An;
  ms = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, cu = function() {
  }, Ca = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, eu(Ya.current);
      var d = null;
      switch (l) {
        case "input":
          c = ve(n, c), o = ve(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qa(n, c), o = qa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = dc);
      }
      Ln(l, o);
      var m;
      l = null;
      for (F in c)
        if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null)
          if (F === "style") {
            var E = c[F];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (Ye.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var R = o[F];
        if (E = c != null ? c[F] : void 0, o.hasOwnProperty(F) && R !== E && (R != null || E != null))
          if (F === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in R)
                R.hasOwnProperty(m) && E[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
            } else
              l || (d || (d = []), d.push(
                F,
                l
              )), l = R;
          else
            F === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, E = E ? E.__html : void 0, R != null && E !== R && (d = d || []).push(F, R)) : F === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(F, "" + R) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (Ye.hasOwnProperty(F) ? (R != null && F === "onScroll" && Kt("scroll", n), d || E === R || (d = [])) : (d = d || []).push(F, R));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, An = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ys(n, r) {
    if (!nn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (hd(r), r.tag) {
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
        return cr(r), null;
      case 1:
        return on(r.type) && ma(), cr(r), null;
      case 3:
        return o = r.stateNode, El(), Mt(gn), Mt(Ge), _c(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ga !== null && (_s(ga), ga = null))), cu(n, r), cr(r), null;
      case 5:
        ct(r);
        var c = eu(to.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ca(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(b(166));
            return cr(r), null;
          }
          if (n = eu(Ya.current), yc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[ti] = r, o[Xl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < es.length; c++)
                  Kt(es[c], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                Cn(o, d), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                kr(o, d), Kt("invalid", o);
            }
            Ln(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && fc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && fc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : Ye.hasOwnProperty(m) && E != null && m === "onScroll" && Kt("scroll", o);
              }
            switch (l) {
              case "input":
                Vn(o), La(o, d, !0);
                break;
              case "textarea":
                Vn(o), Or(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = dc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = za(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[ti] = r, n[Xl] = o, ms(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Rn(l, o), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < es.length; c++)
                    Kt(es[c], n);
                  c = o;
                  break;
                case "source":
                  Kt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = o;
                  break;
                case "details":
                  Kt("toggle", n), c = o;
                  break;
                case "input":
                  Cn(n, o), c = ve(n, o), Kt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  kr(n, o), c = qa(n, o), Kt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ln(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var R = E[d];
                  d === "style" ? Ht(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Vl(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && Ka(n, R) : typeof R == "number" && Ka(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ye.hasOwnProperty(d) ? R != null && d === "onScroll" && Kt("scroll", n) : R != null && re(n, d, R, m));
                }
              switch (l) {
                case "input":
                  Vn(n), La(n, o, !1);
                  break;
                case "textarea":
                  Vn(n), Or(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Dr(n, !!o.multiple, d, !1) : o.defaultValue != null && Dr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = dc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          An(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(b(166));
          if (l = eu(to.current), eu(Ya.current), yc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ti] = r, (d = o.nodeValue !== l) && (n = ea, n !== null))
              switch (n.tag) {
                case 3:
                  fc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && fc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ti] = r, r.stateNode = o;
        }
        return cr(r), null;
      case 13:
        if (Mt(Be), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (nn && jr !== null && r.mode & 1 && !(r.flags & 128))
            Ov(), dn(), r.flags |= 98560, d = !1;
          else if (d = yc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(b(317));
              d[ti] = r;
            } else
              dn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            cr(r), d = !1;
          } else
            ga !== null && (_s(ga), ga = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Be.current & 1 ? Fn === 0 && (Fn = 3) : Id())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return El(), cu(n, r), n === null && Ku(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return ml(r.type._context), cr(r), null;
      case 17:
        return on(r.type) && ma(), cr(r), null;
      case 19:
        if (Mt(Be), d = r.memoizedState, d === null)
          return cr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            ys(d, !1);
          else {
            if (Fn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = pn(n), m !== null) {
                  for (r.flags |= 128, ys(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return At(Be, Be.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && un() > ho && (r.flags |= 128, o = !0, ys(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = pn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ys(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !nn)
                return cr(r), null;
            } else
              2 * un() - d.renderingStartTime > ho && l !== 1073741824 && (r.flags |= 128, o = !0, ys(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = un(), r.sibling = null, l = Be.current, At(Be, o ? l & 1 | 2 : l & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ra & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, r.tag));
  }
  function Ud(n, r) {
    switch (hd(r), r.tag) {
      case 1:
        return on(r.type) && ma(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return El(), Mt(gn), Mt(Ge), _c(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (Mt(Be), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(b(340));
          dn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Mt(Be), null;
      case 4:
        return El(), null;
      case 10:
        return ml(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1, Un = !1, Yv = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function oo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          En(n, r, o);
        }
      else
        l.current = null;
  }
  function Ss(n, r, l) {
    try {
      l();
    } catch (o) {
      En(n, r, o);
    }
  }
  var Iv = !1;
  function Qv(n, r) {
    if (ud = da, n = lc(), Ti(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, R = -1, F = 0, q = 0, K = n, G = null;
            t:
              for (; ; ) {
                for (var me; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (R = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (me = K.firstChild) !== null; )
                  G = K, K = me;
                for (; ; ) {
                  if (K === n)
                    break t;
                  if (G === l && ++F === c && (E = m), G === d && ++q === o && (R = m), (me = K.nextSibling) !== null)
                    break;
                  K = G, G = K.parentNode;
                }
                K = me;
              }
            l = E === -1 || R === -1 ? null : { start: E, end: R };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (ql = { focusedElem: n, selectionRange: l }, da = !1, _e = r; _e !== null; )
      if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, _e = n;
      else
        for (; _e !== null; ) {
          r = _e;
          try {
            var xe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (xe !== null) {
                    var ke = xe.memoizedProps, wn = xe.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : ta(r.type, ke), wn);
                    D.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(b(163));
              }
          } catch (ne) {
            En(r, r.return, ne);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, _e = n;
            break;
          }
          _e = r.return;
        }
    return xe = Iv, Iv = !1, xe;
  }
  function Es(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ss(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Cs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Hd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ti], delete r[Xl], delete r[cd], delete r[ey], delete r[fd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Wv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Wv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function so(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = dc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (so(n, r, l), n = n.sibling; n !== null; )
        so(n, r, l), n = n.sibling;
  }
  function ii(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ii(n, r, l), n = n.sibling; n !== null; )
        ii(n, r, l), n = n.sibling;
  }
  var sn = null, Yn = !1;
  function Ta(n, r, l) {
    for (l = l.child; l !== null; )
      co(n, r, l), l = l.sibling;
  }
  function co(n, r, l) {
    if (Lr && typeof Lr.onCommitFiberUnmount == "function")
      try {
        Lr.onCommitFiberUnmount(Zi, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Un || oo(l, r);
      case 6:
        var o = sn, c = Yn;
        sn = null, Ta(n, r, l), sn = o, Yn = c, sn !== null && (Yn ? (n = sn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : sn.removeChild(l.stateNode));
        break;
      case 18:
        sn !== null && (Yn ? (n = sn, l = l.stateNode, n.nodeType === 8 ? cl(n.parentNode, l) : n.nodeType === 1 && cl(n, l), il(n)) : cl(sn, l.stateNode));
        break;
      case 4:
        o = sn, c = Yn, sn = l.stateNode.containerInfo, Yn = !0, Ta(n, r, l), sn = o, Yn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Un && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ss(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ta(n, r, l);
        break;
      case 1:
        if (!Un && (oo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            En(l, r, E);
          }
        Ta(n, r, l);
        break;
      case 21:
        Ta(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Un = (o = Un) || l.memoizedState !== null, Ta(n, r, l), Un = o) : Ta(n, r, l);
        break;
      default:
        Ta(n, r, l);
    }
  }
  function Mi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Yv()), r.forEach(function(o) {
        var c = py.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Ia(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  sn = E.stateNode, Yn = !1;
                  break e;
                case 3:
                  sn = E.stateNode.containerInfo, Yn = !0;
                  break e;
                case 4:
                  sn = E.stateNode.containerInfo, Yn = !0;
                  break e;
              }
              E = E.return;
            }
          if (sn === null)
            throw Error(b(160));
          co(d, m, c), sn = null, Yn = !1;
          var R = c.alternate;
          R !== null && (R.return = null), c.return = null;
        } catch (F) {
          En(c, r, F);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Gv(r, n), r = r.sibling;
  }
  function Gv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ia(r, n), li(n), o & 4) {
          try {
            Es(3, n, n.return), Cs(3, n);
          } catch (ke) {
            En(n, n.return, ke);
          }
          try {
            Es(5, n, n.return);
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 1:
        Ia(r, n), li(n), o & 512 && l !== null && oo(l, l.return);
        break;
      case 5:
        if (Ia(r, n), li(n), o & 512 && l !== null && oo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ka(c, "");
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Mn(c, d), Rn(E, m);
              var F = Rn(E, d);
              for (m = 0; m < R.length; m += 2) {
                var q = R[m], K = R[m + 1];
                q === "style" ? Ht(c, K) : q === "dangerouslySetInnerHTML" ? Vl(c, K) : q === "children" ? Ka(c, K) : re(c, q, K, F);
              }
              switch (E) {
                case "input":
                  Tn(c, d);
                  break;
                case "textarea":
                  Na(c, d);
                  break;
                case "select":
                  var G = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var me = d.value;
                  me != null ? Dr(c, !!d.multiple, me, !1) : G !== !!d.multiple && (d.defaultValue != null ? Dr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Dr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Xl] = d;
            } catch (ke) {
              En(n, n.return, ke);
            }
        }
        break;
      case 6:
        if (Ia(r, n), li(n), o & 4) {
          if (n.stateNode === null)
            throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (Ia(r, n), li(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            il(r.containerInfo);
          } catch (ke) {
            En(n, n.return, ke);
          }
        break;
      case 4:
        Ia(r, n), li(n);
        break;
      case 13:
        Ia(r, n), li(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = un())), o & 4 && Mi(n);
        break;
      case 22:
        if (q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Un = (F = Un) || q, Ia(r, n), Un = F) : Ia(r, n), li(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !q && n.mode & 1)
            for (_e = n, q = n.child; q !== null; ) {
              for (K = _e = q; _e !== null; ) {
                switch (G = _e, me = G.child, G.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Es(4, G, G.return);
                    break;
                  case 1:
                    oo(G, G.return);
                    var xe = G.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      o = G, l = G.return;
                      try {
                        r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                      } catch (ke) {
                        En(o, l, ke);
                      }
                    }
                    break;
                  case 5:
                    oo(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      Vd(K);
                      continue;
                    }
                }
                me !== null ? (me.return = G, _e = me) : Vd(K);
              }
              q = q.sibling;
            }
          e:
            for (q = null, K = n; ; ) {
              if (K.tag === 5) {
                if (q === null) {
                  q = K;
                  try {
                    c = K.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, R = K.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, E.style.display = ut("display", m));
                  } catch (ke) {
                    En(n, n.return, ke);
                  }
                }
              } else if (K.tag === 6) {
                if (q === null)
                  try {
                    K.stateNode.nodeValue = F ? "" : K.memoizedProps;
                  } catch (ke) {
                    En(n, n.return, ke);
                  }
              } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
                K.child.return = K, K = K.child;
                continue;
              }
              if (K === n)
                break e;
              for (; K.sibling === null; ) {
                if (K.return === null || K.return === n)
                  break e;
                q === K && (q = null), K = K.return;
              }
              q === K && (q = null), K.sibling.return = K.return, K = K.sibling;
            }
        }
        break;
      case 19:
        Ia(r, n), li(n), o & 4 && Mi(n);
        break;
      case 21:
        break;
      default:
        Ia(
          r,
          n
        ), li(n);
    }
  }
  function li(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Wv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(b(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Ka(c, ""), o.flags &= -33);
            var d = Qc(n);
            ii(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Qc(n);
            so(n, E, m);
            break;
          default:
            throw Error(b(161));
        }
      } catch (R) {
        En(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function qv(n, r, l) {
    _e = n, fo(n);
  }
  function fo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; _e !== null; ) {
      var c = _e, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || gs;
        if (!m) {
          var E = c.alternate, R = E !== null && E.memoizedState !== null || Un;
          E = gs;
          var F = Un;
          if (gs = m, (Un = R) && !F)
            for (_e = c; _e !== null; )
              m = _e, R = m.child, m.tag === 22 && m.memoizedState !== null ? Xv(c) : R !== null ? (R.return = m, _e = R) : Xv(c);
          for (; d !== null; )
            _e = d, fo(d), d = d.sibling;
          _e = c, gs = E, Un = F;
        }
        Kv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, _e = d) : Kv(n);
    }
  }
  function Kv(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Un || Cs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Un)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Jl(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Jl(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var R = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      R.autoFocus && l.focus();
                      break;
                    case "img":
                      R.src && (l.src = R.src);
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
                if (r.memoizedState === null) {
                  var F = r.alternate;
                  if (F !== null) {
                    var q = F.memoizedState;
                    if (q !== null) {
                      var K = q.dehydrated;
                      K !== null && il(K);
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
                throw Error(b(163));
            }
          Un || r.flags & 512 && Fd(r);
        } catch (G) {
          En(r, r.return, G);
        }
      }
      if (r === n) {
        _e = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function Vd(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r === n) {
        _e = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function Xv(n) {
    for (; _e !== null; ) {
      var r = _e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Cs(4, r);
            } catch (R) {
              En(r, l, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                En(r, c, R);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (R) {
              En(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (R) {
              En(r, m, R);
            }
        }
      } catch (R) {
        En(r, r.return, R);
      }
      if (r === n) {
        _e = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, _e = E;
        break;
      }
      _e = r.return;
    }
  }
  var Wc = Math.ceil, Ts = ae.ReactCurrentDispatcher, jd = ae.ReactCurrentOwner, fr = ae.ReactCurrentBatchConfig, vt = 0, vn = null, Sn = null, In = 0, ra = 0, po = et(0), Fn = 0, Rs = null, Li = 0, Gc = 0, vo = 0, fu = null, gr = null, Pd = 0, ho = 1 / 0, Ni = null, qc = !1, du = null, ui = null, _l = !1, wl = null, Kc = 0, mo = 0, Xc = null, pu = -1, vu = 0;
  function dr() {
    return vt & 6 ? un() : pu !== -1 ? pu : pu = un();
  }
  function kn(n) {
    return n.mode & 1 ? vt & 2 && In !== 0 ? In & -In : gc.transition !== null ? (vu === 0 && (vu = Uu()), vu) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Io(n.type)), n) : 1;
  }
  function pr(n, r, l, o) {
    if (50 < mo)
      throw mo = 0, Xc = null, Error(b(185));
    yi(n, l, o), (!(vt & 2) || n !== vn) && (n === vn && (!(vt & 2) && (Gc |= l), Fn === 4 && Ra(n, In)), vr(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (ho = un() + 500, Bn && Fr()));
  }
  function vr(n, r) {
    var l = n.callbackNode;
    tl(n, r);
    var o = mr(n, n === vn ? In : 0);
    if (o === 0)
      l !== null && Xs(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Xs(l), r === 1)
        n.tag === 0 ? pd(Zv.bind(null, n)) : dd(Zv.bind(null, n)), sd(function() {
          !(vt & 6) && Fr();
        }), l = null;
      else {
        switch (Hu(o)) {
          case 1:
            l = Fa;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = Za;
            break;
          case 536870912:
            l = zu;
            break;
          default:
            l = Za;
        }
        l = Wd(l, yo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yo(n, r) {
    if (pu = -1, vu = 0, vt & 6)
      throw Error(b(327));
    var l = n.callbackNode;
    if (So() && n.callbackNode !== l)
      return null;
    var o = mr(n, n === vn ? In : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Jc(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = Zc();
      (vn !== n || In !== r) && (Ni = null, ho = un() + 500, hu(n, r));
      do
        try {
          sy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (1);
      Sd(), Ts.current = d, vt = c, Sn !== null ? r = 0 : (vn = null, In = 0, r = Fn);
    }
    if (r !== 0) {
      if (r === 2 && (c = nl(n), c !== 0 && (o = c, r = Bd(n, c))), r === 1)
        throw l = Rs, hu(n, 0), Ra(n, o), vr(n, un()), l;
      if (r === 6)
        Ra(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !$d(c) && (r = Jc(n, o), r === 2 && (d = nl(n), d !== 0 && (o = d, r = Bd(n, d))), r === 1))
          throw l = Rs, hu(n, 0), Ra(n, o), vr(n, un()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            mu(n, gr, Ni);
            break;
          case 3:
            if (Ra(n, o), (o & 130023424) === o && (r = Pd + 500 - un(), 10 < r)) {
              if (mr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                dr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Kl(mu.bind(null, n, gr, Ni), r);
              break;
            }
            mu(n, gr, Ni);
            break;
          case 4:
            if (Ra(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - hr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = un() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Wc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Kl(mu.bind(null, n, gr, Ni), o);
              break;
            }
            mu(n, gr, Ni);
            break;
          case 5:
            mu(n, gr, Ni);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return vr(n, un()), n.callbackNode === l ? yo.bind(null, n) : null;
  }
  function Bd(n, r) {
    var l = fu;
    return n.current.memoizedState.isDehydrated && (hu(n, r).flags |= 256), n = Jc(n, r), n !== 2 && (r = gr, gr = l, r !== null && _s(r)), n;
  }
  function _s(n) {
    gr === null ? gr = n : gr.push.apply(gr, n);
  }
  function $d(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!pa(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ra(n, r) {
    for (r &= ~vo, r &= ~Gc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - hr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Zv(n) {
    if (vt & 6)
      throw Error(b(327));
    So();
    var r = mr(n, 0);
    if (!(r & 1))
      return vr(n, un()), null;
    var l = Jc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = nl(n);
      o !== 0 && (r = o, l = Bd(n, o));
    }
    if (l === 1)
      throw l = Rs, hu(n, 0), Ra(n, r), vr(n, un()), l;
    if (l === 6)
      throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, mu(n, gr, Ni), vr(n, un()), null;
  }
  function go(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (ho = un() + 500, Bn && Fr());
    }
  }
  function xl(n) {
    wl !== null && wl.tag === 0 && !(vt & 6) && So();
    var r = vt;
    vt |= 1;
    var l = fr.transition, o = Dt;
    try {
      if (fr.transition = null, Dt = 1, n)
        return n();
    } finally {
      Dt = o, fr.transition = l, vt = r, !(vt & 6) && Fr();
    }
  }
  function Yd() {
    ra = po.current, Mt(po);
  }
  function hu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, xv(l)), Sn !== null)
      for (l = Sn.return; l !== null; ) {
        var o = l;
        switch (hd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ma();
            break;
          case 3:
            El(), Mt(gn), Mt(Ge), _c();
            break;
          case 5:
            ct(o);
            break;
          case 4:
            El();
            break;
          case 13:
            Mt(Be);
            break;
          case 19:
            Mt(Be);
            break;
          case 10:
            ml(o.type._context);
            break;
          case 22:
          case 23:
            Yd();
        }
        l = l.return;
      }
    if (vn = n, Sn = n = bl(n.current, null), In = ra = r, Fn = 0, Rs = null, vo = Gc = Li = 0, gr = fu = null, Xn !== null) {
      for (r = 0; r < Xn.length; r++)
        if (l = Xn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Xn = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = Sn;
      try {
        if (Sd(), wc.current = Pc, $e) {
          for (var o = rn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          $e = !1;
        }
        if (tu = 0, Et = P = rn = null, ai = !1, na = 0, jd.current = null, l === null || l.return === null) {
          Fn = 1, Rs = r, Sn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, R = r;
          if (r = In, E.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var F = R, q = E, K = q.tag;
            if (!(q.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var G = q.alternate;
              G ? (q.updateQueue = G.updateQueue, q.memoizedState = G.memoizedState, q.lanes = G.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var me = Dd(m);
            if (me !== null) {
              me.flags &= -257, kd(me, m, E, d, r), me.mode & 1 && Pv(d, F, r), r = me, R = F;
              var xe = r.updateQueue;
              if (xe === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(R), r.updateQueue = ke;
              } else
                xe.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                Pv(d, F, r), Id();
                break e;
              }
              R = Error(b(426));
            }
          } else if (nn && E.mode & 1) {
            var wn = Dd(m);
            if (wn !== null) {
              !(wn.flags & 65536) && (wn.flags |= 256), kd(wn, m, E, d, r), yd(io(R, E));
              break e;
            }
          }
          d = R = io(R, E), Fn !== 4 && (Fn = 2), fu === null ? fu = [d] : fu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = jv(d, R, r);
                Td(d, D);
                break e;
              case 1:
                E = R;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ui === null || !ui.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ne = hs(d, E, r);
                  Td(d, ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Qd(l);
      } catch (Me) {
        r = Me, Sn === l && l !== null && (Sn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Zc() {
    var n = Ts.current;
    return Ts.current = Pc, n === null ? Pc : n;
  }
  function Id() {
    (Fn === 0 || Fn === 3 || Fn === 2) && (Fn = 4), vn === null || !(Li & 268435455) && !(Gc & 268435455) || Ra(vn, In);
  }
  function Jc(n, r) {
    var l = vt;
    vt |= 2;
    var o = Zc();
    (vn !== n || In !== r) && (Ni = null, hu(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (1);
    if (Sd(), vt = l, Ts.current = o, Sn !== null)
      throw Error(b(261));
    return vn = null, In = 0, Fn;
  }
  function oy() {
    for (; Sn !== null; )
      eh(Sn);
  }
  function sy() {
    for (; Sn !== null && !Vf(); )
      eh(Sn);
  }
  function eh(n) {
    var r = nh(n.alternate, n, ra);
    n.memoizedProps = n.pendingProps, r === null ? Qd(n) : Sn = r, jd.current = null;
  }
  function Qd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ud(l, r), l !== null) {
          l.flags &= 32767, Sn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Fn = 6, Sn = null;
          return;
        }
      } else if (l = uy(l, r, ra), l !== null) {
        Sn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Sn = r;
        return;
      }
      Sn = r = n;
    } while (r !== null);
    Fn === 0 && (Fn = 5);
  }
  function mu(n, r, l) {
    var o = Dt, c = fr.transition;
    try {
      fr.transition = null, Dt = 1, cy(n, r, l, o);
    } finally {
      fr.transition = c, Dt = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
    do
      So();
    while (wl !== null);
    if (vt & 6)
      throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Bf(n, d), n === vn && (Sn = vn = null, In = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || _l || (_l = !0, Wd(Za, function() {
      return So(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = fr.transition, fr.transition = null;
      var m = Dt;
      Dt = 1;
      var E = vt;
      vt |= 4, jd.current = null, Qv(n, l), Gv(l, n), uc(ql), da = !!ud, ql = ud = null, n.current = l, qv(l), jf(), vt = E, Dt = m, fr.transition = d;
    } else
      n.current = l;
    if (_l && (_l = !1, wl = n, Kc = c), d = n.pendingLanes, d === 0 && (ui = null), Bo(l.stateNode), vr(n, un()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (qc)
      throw qc = !1, n = du, du = null, n;
    return Kc & 1 && n.tag !== 0 && So(), d = n.pendingLanes, d & 1 ? n === Xc ? mo++ : (mo = 0, Xc = n) : mo = 0, Fr(), null;
  }
  function So() {
    if (wl !== null) {
      var n = Hu(Kc), r = fr.transition, l = Dt;
      try {
        if (fr.transition = null, Dt = 16 > n ? 16 : n, wl === null)
          var o = !1;
        else {
          if (n = wl, wl = null, Kc = 0, vt & 6)
            throw Error(b(331));
          var c = vt;
          for (vt |= 4, _e = n.current; _e !== null; ) {
            var d = _e, m = d.child;
            if (_e.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var R = 0; R < E.length; R++) {
                  var F = E[R];
                  for (_e = F; _e !== null; ) {
                    var q = _e;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Es(8, q, d);
                    }
                    var K = q.child;
                    if (K !== null)
                      K.return = q, _e = K;
                    else
                      for (; _e !== null; ) {
                        q = _e;
                        var G = q.sibling, me = q.return;
                        if (Hd(q), q === F) {
                          _e = null;
                          break;
                        }
                        if (G !== null) {
                          G.return = me, _e = G;
                          break;
                        }
                        _e = me;
                      }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var ke = xe.child;
                  if (ke !== null) {
                    xe.child = null;
                    do {
                      var wn = ke.sibling;
                      ke.sibling = null, ke = wn;
                    } while (ke !== null);
                  }
                }
                _e = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, _e = m;
            else
              e:
                for (; _e !== null; ) {
                  if (d = _e, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Es(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, _e = D;
                    break e;
                  }
                  _e = d.return;
                }
          }
          var w = n.current;
          for (_e = w; _e !== null; ) {
            m = _e;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, _e = L;
            else
              e:
                for (m = w; _e !== null; ) {
                  if (E = _e, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Cs(9, E);
                      }
                    } catch (Me) {
                      En(E, E.return, Me);
                    }
                  if (E === m) {
                    _e = null;
                    break e;
                  }
                  var ne = E.sibling;
                  if (ne !== null) {
                    ne.return = E.return, _e = ne;
                    break e;
                  }
                  _e = E.return;
                }
          }
          if (vt = c, Fr(), Lr && typeof Lr.onPostCommitFiberRoot == "function")
            try {
              Lr.onPostCommitFiberRoot(Zi, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, fr.transition = r;
      }
    }
    return !1;
  }
  function th(n, r, l) {
    r = io(l, r), r = jv(n, r, 1), n = gl(n, r, 1), r = dr(), n !== null && (yi(n, 1, r), vr(n, r));
  }
  function En(n, r, l) {
    if (n.tag === 3)
      th(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          th(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ui === null || !ui.has(o))) {
            n = io(l, n), n = hs(r, n, 1), r = gl(r, n, 1), n = dr(), r !== null && (yi(r, 1, n), vr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & l, vn === n && (In & l) === l && (Fn === 4 || Fn === 3 && (In & 130023424) === In && 500 > un() - Pd ? hu(n, 0) : vo |= l), vr(n, r);
  }
  function ef(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ji, Ji <<= 1, !(Ji & 130023424) && (Ji = 4194304)) : r = 1);
    var l = dr();
    n = bi(n, r), n !== null && (yi(n, r, l), vr(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ef(n, l);
  }
  function py(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(b(314));
    }
    o !== null && o.delete(r), ef(n, l);
  }
  var nh;
  nh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || gn.current)
        Dn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Dn = !1, Oi(n, r, l);
        Dn = !!(n.flags & 131072);
      }
    else
      Dn = !1, nn && r.flags & 1048576 && vd(r, Zu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        sr(n, r), n = r.pendingProps;
        var c = ha(r, Ge.current);
        le(r, l), c = Cl(null, r, o, n, c, l);
        var d = au();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, on(o) ? (d = !0, pc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cd(r), c.updater = Cc, r.stateNode = c, c._reactInternals = r, Tc(r, o, n, l), r = Bv(null, r, o, !0, d, l)) : (r.tag = 0, nn && d && vc(r), zn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = ta(o, n), c) {
            case 0:
              r = lo(null, r, o, n, l);
              break e;
            case 1:
              r = Od(null, r, o, n, l);
              break e;
            case 11:
              r = Rl(null, r, o, n, l);
              break e;
            case 14:
              r = $c(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(b(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), lo(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Od(n, r, o, c, l);
      case 3:
        e: {
          if ($v(r), n === null)
            throw Error(b(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Nn(n, r), Sl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = io(Error(b(423)), r), r = Yc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = io(Error(b(424)), r), r = Yc(n, r, o, l, c);
              break e;
            } else
              for (jr = $a(r.stateNode.containerInfo.firstChild), ea = r, nn = !0, ga = null, l = Hv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (dn(), o === c) {
              r = Zn(n, r, l);
              break e;
            }
            zn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return He(r), n === null && mc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, rs(o, c) ? m = null : d !== null && rs(o, d) && (r.flags |= 32), tt(n, r), zn(n, r, m, l), r.child;
      case 6:
        return n === null && mc(r), null;
      case 13:
        return Ld(n, r, l);
      case 4:
        return _d(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = eo(r, null, o, l) : zn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Rl(n, r, o, c, l);
      case 7:
        return zn(n, r, r.pendingProps, l), r.child;
      case 8:
        return zn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return zn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, At(ri, o._currentValue), o._currentValue = m, d !== null)
            if (pa(d.value, m)) {
              if (d.children === c.children && !gn.current) {
                r = Zn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var R = E.firstContext; R !== null; ) {
                    if (R.context === o) {
                      if (d.tag === 1) {
                        R = Di(-1, l & -l), R.tag = 2;
                        var F = d.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var q = F.pending;
                          q === null ? R.next = R : (R.next = q.next, q.next = R), F.pending = R;
                        }
                      }
                      d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), $n(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    R = R.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(b(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), $n(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          zn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, le(r, l), c = _n(c), o = o(c), r.flags |= 1, zn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), $c(n, r, o, c, l);
      case 15:
        return $r(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), sr(n, r), r.tag = 1, on(o) ? (n = !0, pc(r)) : n = !1, le(r, l), zv(r, o, c), Tc(r, o, c, l), Bv(null, r, o, !0, n, l);
      case 19:
        return Ad(n, r, l);
      case 22:
        return ou(n, r, l);
    }
    throw Error(b(156, r.tag));
  };
  function Wd(n, r) {
    return Po(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _a(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function")
      return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ft)
        return 11;
      if (n === Lt)
        return 14;
    }
    return 2;
  }
  function bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = _a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function tf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Gd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case ge:
            return yu(l.children, c, d, r);
          case it:
            m = 8, c |= 8;
            break;
          case yt:
            return n = _a(12, l, r, c | 2), n.elementType = yt, n.lanes = d, n;
          case Ie:
            return n = _a(13, l, r, c), n.elementType = Ie, n.lanes = d, n;
          case Je:
            return n = _a(19, l, r, c), n.elementType = Je, n.lanes = d, n;
          case Se:
            return ws(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case gt:
                  m = 10;
                  break e;
                case ft:
                  m = 9;
                  break e;
                case Ft:
                  m = 11;
                  break e;
                case Lt:
                  m = 14;
                  break e;
                case lt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(b(130, n == null ? n : typeof n, ""));
        }
    return r = _a(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function yu(n, r, l, o) {
    return n = _a(7, n, o, r), n.lanes = l, n;
  }
  function ws(n, r, l, o) {
    return n = _a(22, n, o, r), n.elementType = Se, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function xs(n, r, l) {
    return n = _a(6, n, null, r), n.lanes = l, n;
  }
  function gu(n, r, l) {
    return r = _a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function my(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fu(0), this.expirationTimes = Fu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function nf(n, r, l, o, c, d, m, E, R) {
    return n = new my(n, r, l, E, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = _a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cd(d), n;
  }
  function rh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: fe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n)
      return ni;
    n = n._reactInternals;
    e: {
      if (ca(n) !== n || n.tag !== 1)
        throw Error(b(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (on(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (on(l))
        return ls(n, l, r);
    }
    return r;
  }
  function ah(n, r, l, o, c, d, m, E, R) {
    return n = nf(l, o, !0, n, c, d, m, E, R), n.context = qd(null), l = n.current, o = dr(), c = kn(l), d = Di(o, c), d.callback = r ?? null, gl(l, d, c), n.current.lanes = c, yi(n, c, o), vr(n, o), n;
  }
  function bs(n, r, l, o) {
    var c = r.current, d = dr(), m = kn(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Di(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = gl(c, r, m), n !== null && (pr(n, c, m, d), Ec(n, c, m)), m;
  }
  function rf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ih(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Kd(n, r) {
    ih(n, r), (n = n.alternate) && ih(n, r);
  }
  function lh() {
    return null;
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function af(n) {
    this._internalRoot = n;
  }
  zi.prototype.render = af.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(b(409));
    bs(n, r, null, null);
  }, zi.prototype.unmount = af.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      xl(function() {
        bs(null, n, null, null);
      }), r[wi] = null;
    }
  };
  function zi(n) {
    this._internalRoot = n;
  }
  zi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ju();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < zt.length && r !== 0 && r < zt[l].priority; l++)
        ;
      zt.splice(l, 0, n), l === 0 && ec(n);
    }
  };
  function Zd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function lf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function uh() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = rf(m);
          d.call(F);
        };
      }
      var m = ah(r, o, n, 0, null, !1, !1, "", uh);
      return n._reactRootContainer = m, n[wi] = m.current, Ku(n.nodeType === 8 ? n.parentNode : n), xl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var F = rf(R);
        E.call(F);
      };
    }
    var R = nf(n, 0, !1, null, null, !1, !1, "", uh);
    return n._reactRootContainer = R, n[wi] = R.current, Ku(n.nodeType === 8 ? n.parentNode : n), xl(function() {
      bs(r, R, l, o);
    }), R;
  }
  function uf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var R = rf(m);
          E.call(R);
        };
      }
      bs(r, m, n, c);
    } else
      m = yy(l, r, n, c, o);
    return rf(m);
  }
  Bl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ha(r.pendingLanes);
          l !== 0 && (Ja(r, l | 1), vr(r, un()), !(vt & 6) && (ho = un() + 500, Fr()));
        }
        break;
      case 13:
        xl(function() {
          var o = bi(n, 1);
          if (o !== null) {
            var c = dr();
            pr(o, n, 1, c);
          }
        }), Kd(n, 1);
    }
  }, Vu = function(n) {
    if (n.tag === 13) {
      var r = bi(n, 134217728);
      if (r !== null) {
        var l = dr();
        pr(r, n, 134217728, l);
      }
      Kd(n, 134217728);
    }
  }, wt = function(n) {
    if (n.tag === 13) {
      var r = kn(n), l = bi(n, r);
      if (l !== null) {
        var o = dr();
        pr(l, n, r, o);
      }
      Kd(n, r);
    }
  }, ju = function() {
    return Dt;
  }, Pu = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, sa = function(n, r, l) {
    switch (r) {
      case "input":
        if (Tn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ae(o);
              if (!c)
                throw Error(b(90));
              Te(o), Tn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Na(n, l);
        break;
      case "select":
        r = l.value, r != null && Dr(n, !!l.multiple, r, !1);
    }
  }, Ws = go, Gs = xl;
  var gy = { usingClientEntryPoint: !1, Events: [is, Xu, Ae, mi, Mu, go] }, Eo = { findFiberByHostInstance: va, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Sy = { bundleType: Eo.bundleType, version: Eo.version, rendererPackageName: Eo.rendererPackageName, rendererConfig: Eo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = qs(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Eo.findFiberByHostInstance || lh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!of.isDisabled && of.supportsFiber)
      try {
        Zi = of.inject(Sy), Lr = of;
      } catch {
      }
  }
  return Oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Oa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r))
      throw Error(b(200));
    return rh(n, r, null, l);
  }, Oa.createRoot = function(n, r) {
    if (!Zd(n))
      throw Error(b(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = nf(n, 1, !1, null, null, l, !1, o, c), n[wi] = r.current, Ku(n.nodeType === 8 ? n.parentNode : n), new af(r);
  }, Oa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = qs(r), n = n === null ? null : n.stateNode, n;
  }, Oa.flushSync = function(n) {
    return xl(n);
  }, Oa.hydrate = function(n, r, l) {
    if (!lf(r))
      throw Error(b(200));
    return uf(null, n, r, !0, l);
  }, Oa.hydrateRoot = function(n, r, l) {
    if (!Zd(n))
      throw Error(b(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = ah(r, null, n, 1, l ?? null, c, !1, d, m), n[wi] = r.current, Ku(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new zi(r);
  }, Oa.render = function(n, r, l) {
    if (!lf(r))
      throw Error(b(200));
    return uf(null, n, r, !1, l);
  }, Oa.unmountComponentAtNode = function(n) {
    if (!lf(n))
      throw Error(b(40));
    return n._reactRootContainer ? (xl(function() {
      uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[wi] = null;
      });
    }), !0) : !1;
  }, Oa.unstable_batchedUpdates = go, Oa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!lf(l))
      throw Error(b(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(b(38));
    return uf(n, r, l, !1, o);
  }, Oa.version = "18.2.0-next-9e3b772b8-20220608", Oa;
}
var Ma = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function SD() {
  return cT || (cT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var M = Qs(), Q = gT(), b = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = !1;
    function Ye(e) {
      Ve = e;
    }
    function we(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("error", e, a);
      }
    }
    function nt(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var oe = 0, J = 1, Re = 2, B = 3, Z = 4, W = 5, ie = 6, de = 7, $ = 8, _t = 9, mt = 10, re = 11, ae = 12, U = 13, fe = 14, ge = 15, it = 16, yt = 17, gt = 18, ft = 19, Ft = 21, Ie = 22, Je = 23, Lt = 24, lt = 25, Se = !0, ee = !1, Oe = !1, T = !1, I = !1, pe = !0, We = !1, je = !1, dt = !0, rt = !0, pt = !0, at = /* @__PURE__ */ new Set(), Nt = {}, qr = {};
    function Vn(e, t) {
      Te(e, t), Te(e + "Capture", t);
    }
    function Te(e, t) {
      Nt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Nt[e] = t;
      {
        var a = e.toLowerCase();
        qr[a] = e, e === "onDoubleClick" && (qr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var Wt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ve = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Mn(e) {
      try {
        return Tn(e), !1;
      } catch {
        return !0;
      }
    }
    function Tn(e) {
      return "" + e;
    }
    function La(e, t) {
      if (Mn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Tn(e);
    }
    function hi(e) {
      if (Mn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Tn(e);
    }
    function ur(e, t) {
      if (Mn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Tn(e);
    }
    function Dr(e, t) {
      if (Mn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Tn(e);
    }
    function qa(e) {
      if (Mn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Tn(e);
    }
    function kr(e) {
      if (Mn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Tn(e);
    }
    var Na = 0, Or = 1, za = 2, Gn = 3, Kr = 4, Vl = 5, Ka = 6, se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ze = se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ut = new RegExp("^[" + se + "][" + ze + "]*$"), Ht = {}, jt = {};
    function Ln(e) {
      return ve.call(jt, e) ? !0 : ve.call(Ht, e) ? !1 : ut.test(e) ? (jt[e] = !0, !0) : (Ht[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Rn(e, t, a) {
      return t !== null ? t.type === Na : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mr(e, t, a, i) {
      if (a !== null && a.type === Na)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function en(e, t, a, i) {
      if (t === null || typeof t > "u" || Mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Gn:
            return !t;
          case Kr:
            return t === !1;
          case Vl:
            return isNaN(t);
          case Ka:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sa(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function cn(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === za || t === Gn || t === Kr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Zt = {}, jl = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    jl.forEach(function(e) {
      Zt[e] = new cn(
        e,
        Na,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Zt[t] = new cn(
        t,
        Or,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Zt[e] = new cn(
        e,
        za,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Zt[e] = new cn(
        e,
        za,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Ka,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Vl,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var mi = /[\-\:]([a-z])/g, Mu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(mi, Mu);
      Zt[t] = new cn(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(mi, Mu);
      Zt[t] = new cn(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(mi, Mu);
      Zt[t] = new cn(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ws = "xlinkHref";
    Zt[Ws] = new cn(
      "xlinkHref",
      Or,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new cn(
        e,
        Or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Lu = !1;
    function Vo(e) {
      !Lu && Gs.test(e) && (Lu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Aa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        La(a, t), i.sanitizeURL && Vo("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Kr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : en(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (en(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Gn)
            return a;
          f = e.getAttribute(s);
        }
        return en(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Qi(e, t, a, i) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return La(a, t), u === "" + a ? a : u;
      }
    }
    function Xa(e, t, a, i) {
      var u = sa(t);
      if (!Rn(t, u, i)) {
        if (en(t, a, u, i) && (a = null), i || u === null) {
          if (Ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (La(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Gn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, _;
          x === Gn || x === Kr && a === !0 ? _ = "" : (La(a, y), _ = "" + a, u.sanitizeURL && Vo(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var Wi = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), Ua = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), qi = Symbol.for("react.profiler"), Nu = Symbol.for("react.provider"), jo = Symbol.for("react.context"), mn = Symbol.for("react.forward_ref"), ca = Symbol.for("react.suspense"), Pl = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), qn = Symbol.for("react.lazy"), qs = Symbol.for("react.scope"), Ks = Symbol.for("react.debug_trace_mode"), Po = Symbol.for("react.offscreen"), Xs = Symbol.for("react.legacy_hidden"), Vf = Symbol.for("react.cache"), jf = Symbol.for("react.tracing_marker"), un = Symbol.iterator, Pf = "@@iterator";
    function Fa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = un && e[un] || e[Pf];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, Za = 0, Xi, zu, Zi, Lr, Bo, hr, $o;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function Zs() {
      {
        if (Za === 0) {
          Xi = console.log, zu = console.info, Zi = console.warn, Lr = console.error, Bo = console.group, hr = console.groupCollapsed, $o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Za++;
      }
    }
    function Au() {
      {
        if (Za--, Za === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: Xi
            }),
            info: ot({}, e, {
              value: zu
            }),
            warn: ot({}, e, {
              value: Zi
            }),
            error: ot({}, e, {
              value: Lr
            }),
            group: ot({}, e, {
              value: Bo
            }),
            groupCollapsed: ot({}, e, {
              value: hr
            }),
            groupEnd: ot({}, e, {
              value: $o
            })
          });
        }
        Za < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ji = b.ReactCurrentDispatcher, Ha;
    function mr(e, t, a) {
      {
        if (Ha === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ha = i && i[1] || "";
          }
        return `
` + Ha + e;
      }
    }
    var el = !1, tl;
    {
      var nl = typeof WeakMap == "function" ? WeakMap : Map;
      tl = new nl();
    }
    function Uu(e, t) {
      if (!e || el)
        return "";
      {
        var a = tl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      el = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ji.current, Ji.current = null, Zs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && tl.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        el = !1, Ji.current = s, Au(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", N = _ ? mr(_) : "";
      return typeof e == "function" && tl.set(e, N), N;
    }
    function Fu(e, t, a) {
      return Uu(e, !0);
    }
    function yi(e, t, a) {
      return Uu(e, !1);
    }
    function Bf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ja(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Uu(e, Bf(e));
      if (typeof e == "string")
        return mr(e);
      switch (e) {
        case ca:
          return mr("Suspense");
        case Pl:
          return mr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case mn:
            return yi(e.render);
          case Ki:
            return Ja(e.type, t, a);
          case qn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Ja(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Dt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case W:
          return mr(e.type);
        case it:
          return mr("Lazy");
        case U:
          return mr("Suspense");
        case ft:
          return mr("SuspenseList");
        case oe:
        case Re:
        case ge:
          return yi(e.type);
        case re:
          return yi(e.type.render);
        case J:
          return Fu(e.type);
        default:
          return "";
      }
    }
    function Hu(e) {
      try {
        var t = "", a = e;
        do
          t += Dt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Bl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Vu(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ua:
          return "Fragment";
        case Xr:
          return "Portal";
        case qi:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case ca:
          return "Suspense";
        case Pl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case jo:
            var t = e;
            return Vu(t) + ".Consumer";
          case Nu:
            var a = e;
            return Vu(a._context) + ".Provider";
          case mn:
            return Bl(e, e.render, "ForwardRef");
          case Ki:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case qn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ju(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Pu(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Lt:
          return "Cache";
        case _t:
          var i = a;
          return Pu(i) + ".Consumer";
        case mt:
          var u = a;
          return Pu(u._context) + ".Provider";
        case gt:
          return "DehydratedFragment";
        case re:
          return ju(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case W:
          return a;
        case Z:
          return "Portal";
        case B:
          return "Root";
        case ie:
          return "Text";
        case it:
          return wt(a);
        case $:
          return a === Gi ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case ae:
          return "Profiler";
        case Ft:
          return "Scope";
        case U:
          return "Suspense";
        case ft:
          return "SuspenseList";
        case lt:
          return "TracingMarker";
        case J:
        case oe:
        case yt:
        case Re:
        case fe:
        case ge:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var $l = b.ReactDebugCurrentFrame, fn = null, Nr = !1;
    function yr() {
      {
        if (fn === null)
          return null;
        var e = fn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function rl() {
      return fn === null ? "" : Hu(fn);
    }
    function yn() {
      $l.getCurrentStack = null, fn = null, Nr = !1;
    }
    function zt(e) {
      $l.getCurrentStack = e === null ? null : rl, fn = e, Nr = !1;
    }
    function Js() {
      return fn;
    }
    function zr(e) {
      Nr = e;
    }
    function jn(e) {
      return "" + e;
    }
    function ei(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return kr(e), e;
        default:
          return "";
      }
    }
    var ec = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function gi(e, t) {
      ec[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function al(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tc(e) {
      return e._valueTracker;
    }
    function fa(e) {
      e._valueTracker = null;
    }
    function il(e) {
      var t = "";
      return e && (al(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ll(e) {
      var t = al(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      kr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            kr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            kr(p), i = "" + p;
          },
          stopTracking: function() {
            fa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function da(e) {
      tc(e) || (e._valueTracker = ll(e));
    }
    function Bu(e) {
      if (!e)
        return !1;
      var t = tc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = il(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ul(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ol = !1, Yl = !1, $u = !1, Io = !1;
    function Va(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      gi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Yl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component", t.type), Yl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ol && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component", t.type), ol = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ei(t.value != null ? t.value : i),
        controlled: Va(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && Xa(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = Va(t);
        !a._wrapperState.controlled && i && !Io && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Io = !0), a._wrapperState.controlled && !i && !$u && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $u = !0);
      }
      z(e, t);
      var u = ei(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = jn(u)) : a.value !== jn(u) && (a.value = jn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Fe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Fe(a, t.type, ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function te(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = jn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Pe(e, t) {
      var a = e;
      H(a, t), ce(a, t);
    }
    function ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        La(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = _h(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Bu(f), H(f, p);
          }
        }
      }
    }
    function Fe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ul(e.ownerDocument) !== e) && (a == null ? e.defaultValue = jn(e._wrapperState.initialValue) : e.defaultValue !== jn(a) && (e.defaultValue = jn(a)));
    }
    var st = !1, xt = !1, Gt = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? M.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Gt || (Gt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function qt(e, t) {
      t.value != null && e.setAttribute("value", jn(ei(t.value)));
    }
    var Jt = Array.isArray;
    function St(e) {
      return Jt(e);
    }
    var Si;
    Si = !1;
    function Yu() {
      var e = yr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Qo = ["value", "defaultValue"];
    function $f(e) {
      {
        gi("select", e);
        for (var t = 0; t < Qo.length; t++) {
          var a = Qo[t];
          if (e[a] != null) {
            var i = St(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Yu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Yu());
          }
        }
      }
    }
    function ja(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = jn(ei(a)), x = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          x === null && !u[_].disabled && (x = u[_]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Wo(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Go(e, t) {
      var a = e;
      $f(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Si && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Si = !0);
    }
    function Yf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ja(a, !!t.multiple, i, !1) : t.defaultValue != null && ja(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ja(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ja(a, !!t.multiple, t.defaultValue, !0) : ja(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && ja(a, !!t.multiple, i, !1);
    }
    var If = !1;
    function Qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: jn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jp(e, t) {
      var a = e;
      gi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !If && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component"), If = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (St(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ei(i)
      };
    }
    function ev(e, t) {
      var a = e, i = ei(t.value), u = ei(t.defaultValue);
      if (i != null) {
        var s = jn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = jn(u));
    }
    function tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wf(e, t) {
      ev(e, t);
    }
    var Ei = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/1998/Math/MathML", Gf = "http://www.w3.org/2000/svg";
    function nc(e) {
      switch (e) {
        case "svg":
          return Gf;
        case "math":
          return Bm;
        default:
          return Ei;
      }
    }
    function qf(e, t) {
      return e == null || e === Ei ? nc(t) : e === Gf && t === "foreignObject" ? Ei : e;
    }
    var $m = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, rc, nv = $m(function(e, t) {
      if (e.namespaceURI === Gf && !("innerHTML" in e)) {
        rc = rc || document.createElement("div"), rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ar = 1, Ci = 3, bn = 8, Pa = 9, Il = 11, ac = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ci) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, rv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Iu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      iv.forEach(function(t) {
        Iu[av(t, e)] = Iu[e];
      });
    });
    function ic(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var Qu = /([A-Z])/g, Ym = /^ms-/;
    function Im(e) {
      return e.replace(Qu, "-$1").toLowerCase().replace(Ym, "-ms-");
    }
    var lv = function() {
    };
    {
      var uv = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, qo = /-(.)/g, Wu = /;\s*$/, Gu = {}, qu = {}, sv = !1, Kf = !1, Xf = function(e) {
        return e.replace(qo, function(t, a) {
          return a.toUpperCase();
        });
      }, Zf = function(e) {
        Gu.hasOwnProperty(e) && Gu[e] || (Gu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xf(e.replace(ov, "ms-"))
        ));
      }, cv = function(e) {
        Gu.hasOwnProperty(e) && Gu[e] || (Gu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fv = function(e, t) {
        qu.hasOwnProperty(t) && qu[t] || (qu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wu, "")));
      }, dv = function(e, t) {
        sv || (sv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qm = function(e, t) {
        Kf || (Kf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      lv = function(e, t) {
        e.indexOf("-") > -1 ? Zf(e) : uv.test(e) ? cv(e) : Wu.test(t) && fv(e, t), typeof t == "number" && (isNaN(t) ? dv(e, t) : isFinite(t) || Qm(e, t));
      };
    }
    var Wm = lv;
    function Gm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Im(i)) + ":", t += ic(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function pv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Wm(i, t[i]);
          var s = ic(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function pa(e) {
      var t = {};
      for (var a in e)
        for (var i = rv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ko(e, t) {
      {
        if (!t)
          return;
        var a = pa(e), i = pa(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var vv = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, hv = ot({
      menuitem: !0
    }, vv), mv = "__html";
    function lc(e, t) {
      if (t) {
        if (hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ti(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var uc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, yv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ba = {}, Jf = new RegExp("^(aria)-[" + ze + "]*$"), Xo = new RegExp("^(aria)[A-Z][" + ze + "]*$");
    function ed(e, t) {
      {
        if (ve.call(Ba, t) && Ba[t])
          return !0;
        if (Xo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ba[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ba[t] = !0, !0;
        }
        if (Jf.test(t)) {
          var u = t.toLowerCase(), s = yv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ba[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ba[t] = !0, !0;
        }
      }
      return !0;
    }
    function gv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ed(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function oc(e, t) {
      Ti(e, t) || gv(e, t);
    }
    var Ql = !1;
    function td(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ql && (Ql = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var nd = function() {
    };
    {
      var Pn = {}, rd = /^on./, Sv = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ze + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ze + "]*$");
      nd = function(e, t, a, i) {
        if (ve.call(Pn, t) && Pn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Pn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Pn[t] = !0, !0;
          if (rd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Pn[t] = !0, !0;
        } else if (rd.test(t))
          return Sv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Pn[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Pn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Pn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Pn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Pn[t] = !0, !0;
        var v = sa(t), y = v !== null && v.type === Na;
        if (uc.hasOwnProperty(u)) {
          var g = uc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Pn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Pn[t] = !0, !0;
        return typeof a == "boolean" && Mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Pn[t] = !0, !0) : y ? !0 : Mr(t, a, v, !1) ? (Pn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Gn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Pn[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = nd(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Ti(e, t) || Tv(e, t, a);
    }
    var Ri = 1, Zo = 2, Wl = 4, Km = Ri | Zo | Wl, Jo = null;
    function es(e) {
      Jo !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Jo = e;
    }
    function Xm() {
      Jo === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Jo = null;
    }
    function _v(e) {
      return e === Jo;
    }
    function sc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ci ? t.parentNode : t;
    }
    var Kt = null, sl = null, _i = null;
    function Ku(e) {
      var t = Ro(e);
      if (t) {
        if (typeof Kt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = _h(a);
          Kt(t.stateNode, t.type, i);
        }
      }
    }
    function wv(e) {
      Kt = e;
    }
    function cc(e) {
      sl ? _i ? _i.push(e) : _i = [e] : sl = e;
    }
    function ts() {
      return sl !== null || _i !== null;
    }
    function ns() {
      if (sl) {
        var e = sl, t = _i;
        if (sl = null, _i = null, Ku(e), t)
          for (var a = 0; a < t.length; a++)
            Ku(t[a]);
      }
    }
    var Gl = function(e, t) {
      return e(t);
    }, ad = function() {
    }, id = !1;
    function Zm() {
      var e = ts();
      e && (ad(), ns());
    }
    function ld(e, t, a) {
      if (id)
        return e(t, a);
      id = !0;
      try {
        return Gl(e, t, a);
      } finally {
        id = !1, Zm();
      }
    }
    function fc(e, t, a) {
      Gl = e, ad = a;
    }
    function dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ud(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && dc(t));
        default:
          return !1;
      }
    }
    function ql(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = _h(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ud(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var rs = !1;
    if (Wt)
      try {
        var Kl = {};
        Object.defineProperty(Kl, "passive", {
          get: function() {
            rs = !0;
          }
        }), window.addEventListener("test", Kl, Kl), window.removeEventListener("test", Kl, Kl);
      } catch {
        rs = !1;
      }
    function xv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var od = xv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var sd = document.createElement("react");
      od = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, _ = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          sd.removeEventListener(j, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var Ee = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          x = !0, V(), a.apply(i, Ee), _ = !1;
        }
        var Le, Tt = !1, ht = !1;
        function k(O) {
          if (Le = O.error, Tt = !0, Le === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && Le != null && typeof Le == "object")
            try {
              Le._suppressLogging = !0;
            } catch {
            }
        }
        var j = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), sd.addEventListener(j, Ue, !1), g.initEvent(j, !1, !1), sd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && _ && (Tt ? ht && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", k), !x)
          return V(), xv.apply(this, arguments);
      };
    }
    var Jm = od, cl = !1, $a = null, as = !1, fl = null, ti = {
      onError: function(e) {
        cl = !0, $a = e;
      }
    };
    function Xl(e, t, a, i, u, s, f, p, v) {
      cl = !1, $a = null, Jm.apply(ti, arguments);
    }
    function wi(e, t, a, i, u, s, f, p, v) {
      if (Xl.apply(this, arguments), cl) {
        var y = fd();
        as || (as = !0, fl = y);
      }
    }
    function cd() {
      if (as) {
        var e = fl;
        throw as = !1, fl = null, e;
      }
    }
    function ey() {
      return cl;
    }
    function fd() {
      if (cl) {
        var e = $a;
        return cl = !1, $a = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function va(e) {
      return e._reactInternals;
    }
    function is(e) {
      return e._reactInternals !== void 0;
    }
    function Xu(e, t) {
      e._reactInternals = t;
    }
    var Ae = (
      /*                      */
      0
    ), dl = (
      /*                */
      1
    ), tn = (
      /*                    */
      2
    ), et = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), At = (
      /*                 */
      32
    ), ni = (
      /*                     */
      64
    ), Ge = (
      /*                   */
      128
    ), gn = (
      /*            */
      256
    ), Ur = (
      /*                          */
      512
    ), ha = (
      /*                     */
      1024
    ), on = (
      /*                      */
      2048
    ), ma = (
      /*                    */
      4096
    ), pl = (
      /*                   */
      8192
    ), ls = (
      /*             */
      16384
    ), pc = on | et | ni | Ur | ha | ls, bv = (
      /*               */
      32767
    ), Zr = (
      /*                   */
      32768
    ), Bn = (
      /*                */
      65536
    ), us = (
      /* */
      131072
    ), dd = (
      /*                       */
      1048576
    ), pd = (
      /*                    */
      2097152
    ), Fr = (
      /*                 */
      4194304
    ), vl = (
      /*                */
      8388608
    ), Hr = (
      /*               */
      16777216
    ), Zl = (
      /*              */
      33554432
    ), Zu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      et | ha | 0
    ), Vr = tn | et | Mt | At | Ur | ma | pl, or = et | ni | Ur | pl, ya = on | Mt, Kn = Fr | vl | pd, xi = b.ReactCurrentOwner;
    function Jr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (tn | ma)) !== Ae && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function vd(e) {
      if (e.tag === U) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function vc(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function hd(e) {
      return Jr(e) === e;
    }
    function ea(e) {
      {
        var t = xi.current;
        if (t !== null && t.tag === J) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = va(e);
      return u ? Jr(u) === u : !1;
    }
    function jr(e) {
      if (Jr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function nn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Jr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return jr(s), e;
            if (v === u)
              return jr(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ga(e) {
      var t = nn(e);
      return t !== null ? md(t) : null;
    }
    function md(e) {
      if (e.tag === W || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = md(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Dv(e) {
      var t = nn(e);
      return t !== null ? hc(t) : null;
    }
    function hc(e) {
      if (e.tag === W || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Z) {
          var a = hc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var mc = Q.unstable_scheduleCallback, kv = Q.unstable_cancelCallback, yc = Q.unstable_shouldYield, Ov = Q.unstable_requestPaint, dn = Q.unstable_now, yd = Q.unstable_getCurrentPriorityLevel, gc = Q.unstable_ImmediatePriority, ta = Q.unstable_UserBlockingPriority, ri = Q.unstable_NormalPriority, Sc = Q.unstable_LowPriority, hl = Q.unstable_IdlePriority, gd = Q.unstable_yieldValue, Sd = Q.unstable_setDisableYieldValue, ml = null, $n = null, le = null, _n = !1, Xn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        dt && (e = ot({}, e, {
          getLaneLabelMap: gl,
          injectProfilingHooks: Di
        })), ml = t.inject(e), $n = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Mv(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(ml, e, t);
        } catch (a) {
          _n || (_n = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function bi(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (rt) {
            var i;
            switch (t) {
              case sr:
                i = gc;
                break;
              case Zn:
                i = ta;
                break;
              case Oi:
                i = ri;
                break;
              case ms:
                i = hl;
                break;
              default:
                i = ri;
                break;
            }
            $n.onCommitFiberRoot(ml, e, i, a);
          }
        } catch (u) {
          _n || (_n = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function yl(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(ml, e);
        } catch (t) {
          _n || (_n = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(ml, e);
        } catch (t) {
          _n || (_n = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Nn(e) {
      if (typeof gd == "function" && (Sd(e), Ye(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(ml, e);
        } catch (t) {
          _n || (_n = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Di(e) {
      le = e;
    }
    function gl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < rn; a++) {
          var i = ty(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ec(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Td() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function Sl(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function Jl() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Lv(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Rd() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function Cc(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nv() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function zv(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function Av() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function Tc(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ju() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function Rc(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function Uv(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function Fv(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function eo() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function Hv(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function os() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function Ya(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function ss() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function to() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function eu(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function _d(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function El(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Be = (
      /*                    */
      2
    ), pn = (
      /*               */
      8
    ), Sa = (
      /*              */
      16
    ), _c = Math.clz32 ? Math.clz32 : tu, wc = Math.log, wd = Math.LN2;
    function tu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (wc(t) / wd | 0) | 0;
    }
    var rn = 31, P = (
      /*                        */
      0
    ), Et = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), ai = (
      /*    */
      2
    ), na = (
      /*             */
      4
    ), nu = (
      /*            */
      8
    ), an = (
      /*                     */
      16
    ), ru = (
      /*                */
      32
    ), Cl = (
      /*                       */
      4194240
    ), au = (
      /*                        */
      64
    ), Ea = (
      /*                        */
      128
    ), Pr = (
      /*                        */
      256
    ), iu = (
      /*                        */
      512
    ), cs = (
      /*                        */
      1024
    ), fs = (
      /*                        */
      2048
    ), xc = (
      /*                        */
      4096
    ), bc = (
      /*                        */
      8192
    ), Dc = (
      /*                        */
      16384
    ), kc = (
      /*                       */
      32768
    ), Oc = (
      /*                       */
      65536
    ), Mc = (
      /*                       */
      131072
    ), Lc = (
      /*                       */
      262144
    ), Nc = (
      /*                       */
      524288
    ), lu = (
      /*                       */
      1048576
    ), zc = (
      /*                       */
      2097152
    ), uu = (
      /*                            */
      130023424
    ), ki = (
      /*                             */
      4194304
    ), Ac = (
      /*                             */
      8388608
    ), ds = (
      /*                             */
      16777216
    ), Uc = (
      /*                             */
      33554432
    ), Fc = (
      /*                             */
      67108864
    ), xd = ki, no = (
      /*          */
      134217728
    ), Hc = (
      /*                          */
      268435455
    ), ro = (
      /*               */
      268435456
    ), Tl = (
      /*                        */
      536870912
    ), Br = (
      /*                   */
      1073741824
    );
    function ty(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & ai)
          return "InputContinuousHydration";
        if (e & na)
          return "InputContinuous";
        if (e & nu)
          return "DefaultHydration";
        if (e & an)
          return "Default";
        if (e & ru)
          return "TransitionHydration";
        if (e & Cl)
          return "Transition";
        if (e & uu)
          return "Retry";
        if (e & no)
          return "SelectiveHydration";
        if (e & ro)
          return "IdleHydration";
        if (e & Tl)
          return "Idle";
        if (e & Br)
          return "Offscreen";
      }
    }
    var Xt = -1, Vc = au, jc = ki;
    function ao(e) {
      switch (Dn(e)) {
        case $e:
          return $e;
        case ai:
          return ai;
        case na:
          return na;
        case nu:
          return nu;
        case an:
          return an;
        case ru:
          return ru;
        case au:
        case Ea:
        case Pr:
        case iu:
        case cs:
        case fs:
        case xc:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Mc:
        case Lc:
        case Nc:
        case lu:
        case zc:
          return e & Cl;
        case ki:
        case Ac:
        case ds:
        case Uc:
        case Fc:
          return e & uu;
        case no:
          return no;
        case ro:
          return ro;
        case Tl:
          return Tl;
        case Br:
          return Br;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ps(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hc;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = ao(p);
        else {
          var v = f & s;
          v !== P && (i = ao(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = ao(y) : s !== P && (i = ao(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = Dn(i), x = Dn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === an && (x & Cl) !== P
        )
          return t;
      }
      (i & na) !== P && (i |= a & an);
      var _ = e.entangledLanes;
      if (_ !== P)
        for (var N = e.entanglements, A = i & _; A > 0; ) {
          var V = Rl(A), Ee = 1 << V;
          i |= N[V], A &= ~Ee;
        }
      return i;
    }
    function Vv(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Rl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Pc(e, t) {
      switch (e) {
        case $e:
        case ai:
        case na:
          return t + 250;
        case nu:
        case an:
        case ru:
        case au:
        case Ea:
        case Pr:
        case iu:
        case cs:
        case fs:
        case xc:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Mc:
        case Lc:
        case Nc:
        case lu:
        case zc:
          return t + 5e3;
        case ki:
        case Ac:
        case ds:
        case Uc:
        case Fc:
          return Xt;
        case no:
        case ro:
        case Tl:
        case Br:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function ny(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Rl(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === P || (v & u) !== P) && (s[p] = Pc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ry(e) {
      return ao(e.pendingLanes);
    }
    function bd(e) {
      var t = e.pendingLanes & ~Br;
      return t !== P ? t : t & Br ? Br : P;
    }
    function io(e) {
      return (e & $e) !== P;
    }
    function vs(e) {
      return (e & Hc) !== P;
    }
    function Bc(e) {
      return (e & uu) === e;
    }
    function ay(e) {
      var t = $e | na | an;
      return (e & t) === P;
    }
    function jv(e) {
      return (e & Cl) === e;
    }
    function hs(e, t) {
      var a = ai | na | nu | an;
      return (t & a) !== P;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Dd(e) {
      return (e & Cl) !== P;
    }
    function kd() {
      var e = Vc;
      return Vc <<= 1, (Vc & Cl) === P && (Vc = au), e;
    }
    function iy() {
      var e = jc;
      return jc <<= 1, (jc & uu) === P && (jc = ki), e;
    }
    function Dn(e) {
      return e & -e;
    }
    function zn(e) {
      return Dn(e);
    }
    function Rl(e) {
      return 31 - _c(e);
    }
    function $c(e) {
      return Rl(e);
    }
    function $r(e, t) {
      return (e & t) !== P;
    }
    function ou(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function lo(e, t) {
      return e & ~t;
    }
    function Od(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function $v(e, t) {
      return e !== Et && e < t ? e : t;
    }
    function Yc(e) {
      for (var t = [], a = 0; a < rn; a++)
        t.push(e);
      return t;
    }
    function su(e, t, a) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = $c(t);
      i[u] = a;
    }
    function Md(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Rl(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function Ld(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Rl(f), v = 1 << p;
        i[p] = P, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function uo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Rl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ly(e, t) {
      var a = Dn(t), i;
      switch (a) {
        case na:
          i = ai;
          break;
        case an:
          i = nu;
          break;
        case au:
        case Ea:
        case Pr:
        case iu:
        case cs:
        case fs:
        case xc:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Mc:
        case Lc:
        case Nc:
        case lu:
        case zc:
        case ki:
        case Ac:
        case ds:
        case Uc:
        case Fc:
          i = ru;
          break;
        case Tl:
          i = ro;
          break;
        default:
          i = Et;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Et ? Et : i;
    }
    function zd(e, t, a) {
      if (Xn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = $c(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ic(e, t) {
      if (Xn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = $c(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var sr = $e, Zn = na, Oi = an, ms = Tl, cu = Et;
    function Ca() {
      return cu;
    }
    function An(e) {
      cu = e;
    }
    function ys(e, t) {
      var a = cu;
      try {
        return cu = e, t();
      } finally {
        cu = a;
      }
    }
    function cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ud(e, t) {
      return e !== 0 && e < t;
    }
    function gs(e) {
      var t = Dn(e);
      return Ud(sr, t) ? Ud(Zn, t) ? vs(t) ? Oi : ms : Zn : sr;
    }
    function Un(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Yv;
    function _e(e) {
      Yv = e;
    }
    function oo(e) {
      Yv(e);
    }
    var Ss;
    function Iv(e) {
      Ss = e;
    }
    var Qv;
    function Es(e) {
      Qv = e;
    }
    var Cs;
    function Fd(e) {
      Cs = e;
    }
    var Hd;
    function Wv(e) {
      Hd = e;
    }
    var Qc = !1, so = [], ii = null, sn = null, Yn = null, Ta = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), Mi = [], Ia = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Gv(e) {
      return Ia.indexOf(e) > -1;
    }
    function li(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ii = null;
          break;
        case "dragenter":
        case "dragleave":
          sn = null;
          break;
        case "mouseover":
        case "mouseout":
          Yn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ta.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          co.delete(i);
          break;
        }
      }
    }
    function fo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = li(t, a, i, u, s);
        if (t !== null) {
          var p = Ro(t);
          p !== null && Ss(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ii = fo(ii, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return sn = fo(sn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Yn = fo(Yn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ta.set(y, fo(Ta.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return co.set(x, fo(co.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Vd(e) {
      var t = Os(e.target);
      if (t !== null) {
        var a = Jr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === U) {
            var u = vd(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Qv(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (Un(s)) {
              e.blockedOn = vc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Xv(e) {
      for (var t = Cs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mi.length && Ud(t, Mi[i].priority); i++)
        ;
      Mi.splice(i, 0, a), i === 0 && Vd(a);
    }
    function Wc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = fu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          es(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = Ro(i);
          return f !== null && Ss(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ts(e, t, a) {
      Wc(e) && a.delete(t);
    }
    function jd() {
      Qc = !1, ii !== null && Wc(ii) && (ii = null), sn !== null && Wc(sn) && (sn = null), Yn !== null && Wc(Yn) && (Yn = null), Ta.forEach(Ts), co.forEach(Ts);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qc || (Qc = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, jd)));
    }
    function vt(e) {
      if (so.length > 0) {
        fr(so[0], e);
        for (var t = 1; t < so.length; t++) {
          var a = so[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ii !== null && fr(ii, e), sn !== null && fr(sn, e), Yn !== null && fr(Yn, e);
      var i = function(p) {
        return fr(p, e);
      };
      Ta.forEach(i), co.forEach(i);
      for (var u = 0; u < Mi.length; u++) {
        var s = Mi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mi.length > 0; ) {
        var f = Mi[0];
        if (f.blockedOn !== null)
          break;
        Vd(f), f.blockedOn === null && Mi.shift();
      }
    }
    var vn = b.ReactCurrentBatchConfig, Sn = !0;
    function In(e) {
      Sn = !!e;
    }
    function ra() {
      return Sn;
    }
    function po(e, t, a) {
      var i = gr(t), u;
      switch (i) {
        case sr:
          u = Fn;
          break;
        case Zn:
          u = Rs;
          break;
        case Oi:
        default:
          u = Li;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Fn(e, t, a, i) {
      var u = Ca(), s = vn.transition;
      vn.transition = null;
      try {
        An(sr), Li(e, t, a, i);
      } finally {
        An(u), vn.transition = s;
      }
    }
    function Rs(e, t, a, i) {
      var u = Ca(), s = vn.transition;
      vn.transition = null;
      try {
        An(Zn), Li(e, t, a, i);
      } finally {
        An(u), vn.transition = s;
      }
    }
    function Li(e, t, a, i) {
      Sn && Gc(e, t, a, i);
    }
    function Gc(e, t, a, i) {
      var u = fu(e, t, a, i);
      if (u === null) {
        by(e, t, i, vo, a), qv(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (qv(e, i), t & Wl && Gv(e)) {
        for (; u !== null; ) {
          var s = Ro(u);
          s !== null && oo(s);
          var f = fu(e, t, a, i);
          if (f === null && by(e, t, i, vo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var vo = null;
    function fu(e, t, a, i) {
      vo = null;
      var u = sc(i), s = Os(u);
      if (s !== null) {
        var f = Jr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === U) {
            var v = vd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === B) {
            var y = f.stateNode;
            if (Un(y))
              return vc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return vo = s, null;
    }
    function gr(e) {
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
          return sr;
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
          return Zn;
        case "message": {
          var t = yd();
          switch (t) {
            case gc:
              return sr;
            case ta:
              return Zn;
            case ri:
            case Sc:
              return Oi;
            case hl:
              return ms;
            default:
              return Oi;
          }
        }
        default:
          return Oi;
      }
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ho(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ni(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function qc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var du = null, ui = null, _l = null;
    function wl(e) {
      return du = e, ui = Xc(), !0;
    }
    function Kc() {
      du = null, ui = null, _l = null;
    }
    function mo() {
      if (_l)
        return _l;
      var e, t = ui, a = t.length, i, u = Xc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return _l = u.slice(e, p), _l;
    }
    function Xc() {
      return "value" in du ? du.value : du.textContent;
    }
    function pu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function vu() {
      return !0;
    }
    function dr() {
      return !1;
    }
    function kn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = vu : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: vu
      }), t;
    }
    var pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, vr = kn(pr), yo = ot({}, pr, {
      view: 0,
      detail: 0
    }), Bd = kn(yo), _s, $d, Ra;
    function Zv(e) {
      e !== Ra && (Ra && e.type === "mousemove" ? (_s = e.screenX - Ra.screenX, $d = e.screenY - Ra.screenY) : (_s = 0, $d = 0), Ra = e);
    }
    var go = ot({}, yo, {
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
      getModifierState: ef,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Zv(e), _s);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $d;
      }
    }), xl = kn(go), Yd = ot({}, go, {
      dataTransfer: 0
    }), hu = kn(Yd), Jv = ot({}, yo, {
      relatedTarget: 0
    }), Zc = kn(Jv), Id = ot({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jc = kn(Id), oy = ot({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sy = kn(oy), eh = ot({}, pr, {
      data: 0
    }), Qd = kn(eh), mu = Qd, cy = {
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
      MozPrintableKey: "Unidentified"
    }, So = {
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
      224: "Meta"
    };
    function th(e) {
      if (e.key) {
        var t = cy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = pu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? So[e.keyCode] || "Unidentified" : "";
    }
    var En = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function fy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = En[e];
      return i ? !!a[i] : !1;
    }
    function ef(e) {
      return fy;
    }
    var dy = ot({}, yo, {
      key: th,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ef,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? pu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), py = kn(dy), nh = ot({}, go, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Wd = kn(nh), vy = ot({}, yo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ef
    }), _a = kn(vy), Gd = ot({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hy = kn(Gd), bl = ot({}, go, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), tf = kn(bl), yu = [9, 13, 27, 32], ws = 229, xs = Wt && "CompositionEvent" in window, gu = null;
    Wt && "documentMode" in document && (gu = document.documentMode);
    var my = Wt && "TextEvent" in window && !gu, nf = Wt && (!xs || gu && gu > 8 && gu <= 11), rh = 32, qd = String.fromCharCode(rh);
    function ah() {
      Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var bs = !1;
    function rf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ih(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Kd(e, t) {
      return e === "keydown" && t.keyCode === ws;
    }
    function lh(e, t) {
      switch (e) {
        case "keyup":
          return yu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ws;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Xd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function af(e) {
      return e.locale === "ko";
    }
    var zi = !1;
    function Zd(e, t, a, i, u) {
      var s, f;
      if (xs ? s = ih(t) : zi ? lh(t, i) && (s = "onCompositionEnd") : Kd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      nf && !af(i) && (!zi && s === "onCompositionStart" ? zi = wl(u) : s === "onCompositionEnd" && zi && (f = mo()));
      var p = fh(a, s);
      if (p.length > 0) {
        var v = new Qd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function lf(e, t) {
      switch (e) {
        case "compositionend":
          return Xd(t);
        case "keypress":
          var a = t.which;
          return a !== rh ? null : (bs = !0, qd);
        case "textInput":
          var i = t.data;
          return i === qd && bs ? null : i;
        default:
          return null;
      }
    }
    function uh(e, t) {
      if (zi) {
        if (e === "compositionend" || !xs && lh(e, t)) {
          var a = mo();
          return Kc(), zi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!rf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return nf && !af(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yy(e, t, a, i, u) {
      var s;
      if (my ? s = lf(t, i) : s = uh(t, i), !s)
        return null;
      var f = fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new mu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function uf(e, t, a, i, u, s, f) {
      Zd(e, t, a, i, u), yy(e, t, a, i, u);
    }
    var gy = {
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
      week: !0
    };
    function Eo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!Wt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function of() {
      Vn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      cc(i);
      var u = fh(t, "onChange");
      if (u.length > 0) {
        var s = new vr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, sc(e)), ld(d, t);
    }
    function d(e) {
      M0(e, 0);
    }
    function m(e) {
      var t = vf(e);
      if (Bu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var R = !1;
    Wt && (R = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function F(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", K);
    }
    function q() {
      r && (r.detachEvent("onpropertychange", K), r = null, l = null);
    }
    function K(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (q(), F(t, a)) : e === "focusout" && q();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return m(t);
    }
    function wn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Fe(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? vf(a) : window, v, y;
      if (o(p) ? v = E : Eo(p) ? R ? v = wn : (v = me, y = G) : xe(p) && (v = ke), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      Te("onMouseEnter", ["mouseout", "mouseover"]), Te("onMouseLeave", ["mouseout", "mouseover"]), Te("onPointerEnter", ["pointerout", "pointerover"]), Te("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ne(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !_v(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Os(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var _, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (_ = a, N = A ? Os(A) : null, N !== null) {
            var V = Jr(N);
            (N !== V || N.tag !== W && N.tag !== ie) && (N = null);
          }
        } else
          _ = null, N = a;
        if (_ !== N) {
          var Ee = xl, Ue = "onMouseLeave", Le = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ee = Wd, Ue = "onPointerLeave", Le = "onPointerEnter", Tt = "pointer");
          var ht = _ == null ? g : vf(_), k = N == null ? g : vf(N), j = new Ee(Ue, Tt + "leave", _, i, u);
          j.target = ht, j.relatedTarget = k;
          var O = null, X = Os(u);
          if (X === a) {
            var Ce = new Ee(Le, Tt + "enter", N, i, u);
            Ce.target = k, Ce.relatedTarget = ht, O = Ce;
          }
          $T(e, j, O, _, N);
        }
      }
    }
    function Me(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var be = typeof Object.is == "function" ? Object.is : Me;
    function Ne(e, t) {
      if (be(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ve.call(t, s) || !be(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function qe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Qn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function bt(e, t) {
      for (var a = qe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ci) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = qe(Qn(a));
      }
    }
    function Dl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e:
        for (; ; ) {
          for (var _ = null; g === t && (a === 0 || g.nodeType === Ci) && (f = s + a), g === i && (u === 0 || g.nodeType === Ci) && (p = s + u), g.nodeType === Ci && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
            x = g, g = _;
          for (; ; ) {
            if (g === e)
              break e;
            if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
              break;
            g = x, x = g.parentNode;
          }
          g = _;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function _T(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = bt(e, f), g = bt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function S0(e) {
      return e && e.nodeType === Ci;
    }
    function E0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : S0(e) ? !1 : S0(t) ? E0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function wT(e) {
      return e && e.ownerDocument && E0(e.ownerDocument.documentElement, e);
    }
    function xT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function C0() {
      for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
        if (xT(t))
          e = t.contentWindow;
        else
          return t;
        t = ul(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function bT() {
      var e = C0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? kT(e) : null
      };
    }
    function DT(e) {
      var t = C0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && wT(a)) {
        i !== null && Cy(a) && OT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ar && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function kT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Dl(e), t || {
        start: 0,
        end: 0
      };
    }
    function OT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : _T(e, t);
    }
    var MT = Wt && "documentMode" in document && document.documentMode <= 11;
    function LT() {
      Vn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var sf = null, Ty = null, Jd = null, Ry = !1;
    function NT(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function zT(e) {
      return e.window === e ? e.document : e.nodeType === Pa ? e : e.ownerDocument;
    }
    function T0(e, t, a) {
      var i = zT(a);
      if (!(Ry || sf == null || sf !== ul(i))) {
        var u = NT(sf);
        if (!Jd || !Ne(Jd, u)) {
          Jd = u;
          var s = fh(Ty, "onSelect");
          if (s.length > 0) {
            var f = new vr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = sf;
          }
        }
      }
    }
    function AT(e, t, a, i, u, s, f) {
      var p = a ? vf(a) : window;
      switch (t) {
        case "focusin":
          (Eo(p) || p.contentEditable === "true") && (sf = p, Ty = a, Jd = null);
          break;
        case "focusout":
          sf = null, Ty = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, T0(e, i, u);
          break;
        case "selectionchange":
          if (MT)
            break;
        case "keydown":
        case "keyup":
          T0(e, i, u);
      }
    }
    function oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var cf = {
      animationend: oh("Animation", "AnimationEnd"),
      animationiteration: oh("Animation", "AnimationIteration"),
      animationstart: oh("Animation", "AnimationStart"),
      transitionend: oh("Transition", "TransitionEnd")
    }, _y = {}, R0 = {};
    Wt && (R0 = document.createElement("div").style, "AnimationEvent" in window || (delete cf.animationend.animation, delete cf.animationiteration.animation, delete cf.animationstart.animation), "TransitionEvent" in window || delete cf.transitionend.transition);
    function sh(e) {
      if (_y[e])
        return _y[e];
      if (!cf[e])
        return e;
      var t = cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in R0)
          return _y[e] = t[a];
      return e;
    }
    var _0 = sh("animationend"), w0 = sh("animationiteration"), x0 = sh("animationstart"), b0 = sh("transitionend"), D0 = /* @__PURE__ */ new Map(), k0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Co(e, t) {
      D0.set(e, t), Vn(t, [e]);
    }
    function UT() {
      for (var e = 0; e < k0.length; e++) {
        var t = k0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Co(a, "on" + i);
      }
      Co(_0, "onAnimationEnd"), Co(w0, "onAnimationIteration"), Co(x0, "onAnimationStart"), Co("dblclick", "onDoubleClick"), Co("focusin", "onFocus"), Co("focusout", "onBlur"), Co(b0, "onTransitionEnd");
    }
    function FT(e, t, a, i, u, s, f) {
      var p = D0.get(t);
      if (p !== void 0) {
        var v = vr, y = t;
        switch (t) {
          case "keypress":
            if (pu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = py;
            break;
          case "focusin":
            y = "focus", v = Zc;
            break;
          case "focusout":
            y = "blur", v = Zc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Zc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = xl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = hu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = _a;
            break;
          case _0:
          case w0:
          case x0:
            v = Jc;
            break;
          case b0:
            v = hy;
            break;
          case "scroll":
            v = Bd;
            break;
          case "wheel":
            v = tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wd;
            break;
        }
        var g = (s & Wl) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = PT(a, p, i.type, g, x);
          if (_.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: _
            });
          }
        }
      }
    }
    UT(), L(), of(), LT(), ah();
    function HT(e, t, a, i, u, s, f) {
      FT(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (ne(e, t, a, i, u), w(e, t, a, i, u), AT(e, t, a, i, u), uf(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function O0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wi(i, t, void 0, e), e.currentTarget = null;
    }
    function VT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          O0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, _ = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          O0(e, N, _), i = x;
        }
    }
    function M0(e, t) {
      for (var a = (t & Wl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        VT(s, f, a);
      }
      cd();
    }
    function jT(e, t, a, i, u) {
      var s = sc(a), f = [];
      HT(f, e, i, a, s, t), M0(f, t);
    }
    function hn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = m_(t), u = YT(e, a);
      i.has(u) || (L0(t, e, Zo, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Wl), L0(a, e, i, t);
    }
    var ch = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[ch]) {
        e[ch] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Pa ? e : e.ownerDocument;
        t !== null && (t[ch] || (t[ch] = !0, xy("selectionchange", !1, t)));
      }
    }
    function L0(e, t, a, i, u) {
      var s = po(e, t, a), f = void 0;
      rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ni(e, t, s, f) : ho(e, t, s) : f !== void 0 ? qc(e, t, s, f) : Pd(e, t, s);
    }
    function N0(e, t) {
      return e === t || e.nodeType === bn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & Ri) && !(t & Zo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === B || v === Z) {
                var y = p.stateNode.containerInfo;
                if (N0(y, f))
                  break;
                if (v === Z)
                  for (var g = p.return; g !== null; ) {
                    var x = g.tag;
                    if (x === B || x === Z) {
                      var _ = g.stateNode.containerInfo;
                      if (N0(_, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = Os(y);
                  if (N === null)
                    return;
                  var A = N.tag;
                  if (A === W || A === ie) {
                    p = s = N;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ld(function() {
        return jT(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function PT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, _ = x.stateNode, N = x.tag;
        if (N === W && _ !== null && (g = _, p !== null)) {
          var A = ql(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function fh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === W && f !== null) {
          var v = f, y = ql(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = ql(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== W);
      return e || null;
    }
    function BT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = ff(s))
        u++;
      for (var f = 0, p = i; p; p = ff(p))
        f++;
      for (; u - f > 0; )
        a = ff(a), u--;
      for (; f - u > 0; )
        i = ff(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = ff(a), i = ff(i);
      }
      return null;
    }
    function z0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === W && g !== null) {
          var _ = g;
          if (u) {
            var N = ql(p, s);
            N != null && f.unshift(np(p, N, _));
          } else if (!u) {
            var A = ql(p, s);
            A != null && f.push(np(p, A, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function $T(e, t, a, i, u) {
      var s = i && u ? BT(i, u) : null;
      i !== null && z0(e, t, i, s, !1), u !== null && a !== null && z0(e, a, u, s, !0);
    }
    function YT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var wa = !1, rp = "dangerouslySetInnerHTML", dh = "suppressContentEditableWarning", To = "suppressHydrationWarning", A0 = "autoFocus", Ds = "children", ks = "style", ph = "__html", Dy, vh, ap, U0, hh, F0, H0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, vh = function(e, t) {
      oc(e, t), td(e, t), Rv(e, t, {
        registrationNameDependencies: Nt,
        possibleRegistrationNames: qr
      });
    }, F0 = Wt && !document.documentMode, ap = function(e, t, a) {
      if (!wa) {
        var i = mh(a), u = mh(t);
        u !== i && (wa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, U0 = function(e) {
      if (!wa) {
        wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, hh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, H0 = function(e, t) {
      var a = e.namespaceURI === Ei ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var IT = /\r\n?/g, QT = /\u0000|\uFFFD/g;
    function mh(e) {
      qa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(IT, `
`).replace(QT, "");
    }
    function yh(e, t, a, i) {
      var u = mh(t), s = mh(e);
      if (s !== u && (i && (wa || (wa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function V0(e) {
      return e.nodeType === Pa ? e : e.ownerDocument;
    }
    function WT() {
    }
    function gh(e) {
      e.onclick = WT;
    }
    function GT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ks)
            f && Object.freeze(f), pv(t, f);
          else if (s === rp) {
            var p = f ? f[ph] : void 0;
            p != null && nv(t, p);
          } else if (s === Ds)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ac(t, f);
            } else
              typeof f == "number" && ac(t, "" + f);
          else
            s === dh || s === To || s === A0 || (Nt.hasOwnProperty(s) ? f != null && (typeof f != "function" && hh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && Xa(t, s, f, u));
        }
    }
    function qT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ks ? pv(e, f) : s === rp ? nv(e, f) : s === Ds ? ac(e, f) : Xa(e, s, f, i);
      }
    }
    function KT(e, t, a, i) {
      var u, s = V0(a), f, p = i;
      if (p === Ei && (p = nc(e)), p === Ei) {
        if (u = Ti(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ei && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ve.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function XT(e, t) {
      return V0(t).createTextNode(e);
    }
    function ZT(e, t, a, i) {
      var u = Ti(t, a);
      vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            hn(ep[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), hn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          Go(e, a), s = Wo(e, a), hn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), s = Qf(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (lc(t, s), GT(t, e, i, s, u), t) {
        case "input":
          da(e), te(e, a, !1);
          break;
        case "textarea":
          da(e), tv(e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          Yf(e, a);
          break;
        default:
          typeof s.onClick == "function" && gh(e);
          break;
      }
    }
    function JT(e, t, a, i, u) {
      vh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Wo(e, a), p = Wo(e, i), s = [];
          break;
        case "textarea":
          f = Qf(e, a), p = Qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && gh(e);
          break;
      }
      lc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === ks) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === rp || v === Ds || v === dh || v === To || v === A0 || (Nt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === N || _ == null && N == null))
          if (v === ks)
            if (_ && Object.freeze(_), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && N[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === rp) {
            var A = _ ? _[ph] : void 0, V = N ? N[ph] : void 0;
            A != null && V !== A && (s = s || []).push(v, A);
          } else
            v === Ds ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === dh || v === To || (Nt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && hh(v, _), v === "onScroll" && hn("scroll", e)), !s && N !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (Ko(g, p[ks]), (s = s || []).push(ks, g)), s;
    }
    function eR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = Ti(a, i), f = Ti(a, u);
      switch (qT(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          ev(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function tR(e) {
      {
        var t = e.toLowerCase();
        return uc.hasOwnProperty(t) && uc[t] || null;
      }
    }
    function nR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ti(t, a), vh(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            hn(ep[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          C(e, a), hn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          Go(e, a), hn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), hn("invalid", e);
          break;
      }
      lc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var _ = g[x].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var N = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var V = a[A];
          if (A === Ds)
            typeof V == "string" ? e.textContent !== V && (a[To] !== !0 && yh(e.textContent, V, s, f), N = [Ds, V]) : typeof V == "number" && e.textContent !== "" + V && (a[To] !== !0 && yh(e.textContent, V, s, f), N = [Ds, "" + V]);
          else if (Nt.hasOwnProperty(A))
            V != null && (typeof V != "function" && hh(A, V), A === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ee = void 0, Ue = p && We ? null : sa(A);
            if (a[To] !== !0) {
              if (!(A === dh || A === To || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var Le = e.innerHTML, Tt = V ? V[ph] : void 0;
                  if (Tt != null) {
                    var ht = H0(e, Tt);
                    ht !== Le && ap(A, Le, ht);
                  }
                } else if (A === ks) {
                  if (v.delete(A), F0) {
                    var k = Gm(V);
                    Ee = e.getAttribute("style"), k !== Ee && ap(A, Ee, k);
                  }
                } else if (p && !We)
                  v.delete(A.toLowerCase()), Ee = Qi(e, A, V), V !== Ee && ap(A, Ee, V);
                else if (!Rn(A, Ue, p) && !en(A, V, Ue, p)) {
                  var j = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), Ee = Aa(e, A, V, Ue);
                  else {
                    var O = i;
                    if (O === Ei && (O = nc(t)), O === Ei)
                      v.delete(A.toLowerCase());
                    else {
                      var X = tR(A);
                      X !== null && X !== A && (j = !0, v.delete(X)), v.delete(A);
                    }
                    Ee = Qi(e, A, V);
                  }
                  var Ce = We;
                  !Ce && V !== Ee && !j && ap(A, Ee, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[To] !== !0 && U0(v), t) {
        case "input":
          da(e), te(e, a, !0);
          break;
        case "textarea":
          da(e), tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && gh(e);
          break;
      }
      return N;
    }
    function rR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (wa)
          return;
        wa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (wa)
          return;
        wa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (wa)
          return;
        wa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || wa)
          return;
        wa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function aR(e, t, a) {
      switch (t) {
        case "input":
          Pe(e, a);
          return;
        case "textarea":
          Wf(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var iR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], lR = j0.concat(["button"]), uR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = ot({}, e || P0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), lR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), iR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var oR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return uR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, sR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, B0 = {};
      ip = function(e, t, a) {
        a = a || P0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = oR(e, u) ? null : i, f = s ? null : sR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!B0[y]) {
            B0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Sh = "suppressHydrationWarning", Eh = "$", Ch = "/$", up = "$?", op = "$!", cR = "style", Ny = null, zy = null;
    function fR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pa:
        case Il: {
          t = i === Pa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : qf(null, "");
          break;
        }
        default: {
          var s = i === bn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function dR(e, t, a) {
      {
        var i = e, u = qf(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ND(e) {
      return e;
    }
    function pR(e) {
      Ny = ra(), zy = bT();
      var t = null;
      return In(!1), t;
    }
    function vR(e) {
      DT(zy), In(Ny), Ny = null, zy = null;
    }
    function hR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = KT(e, t, a, s);
      return fp(u, y), By(y, t), y;
    }
    function mR(e, t) {
      e.appendChild(t);
    }
    function yR(e, t, a, i, u) {
      switch (ZT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function gR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return JT(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function SR(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = XT(e, t);
      return fp(i, s), s;
    }
    function ER() {
      var e = window.event;
      return e === void 0 ? Oi : gr(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, CR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, $0 = typeof Promise == "function" ? Promise : void 0, TR = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(e) {
      return $0.resolve(null).then(e).catch(RR);
    } : Uy;
    function RR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _R(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function wR(e, t, a, i, u, s) {
      eR(e, t, a, i, u), By(e, u);
    }
    function Y0(e) {
      ac(e, "");
    }
    function xR(e, t, a) {
      e.nodeValue = a;
    }
    function bR(e, t) {
      e.appendChild(t);
    }
    function DR(e, t) {
      var a;
      e.nodeType === bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && gh(a);
    }
    function kR(e, t, a) {
      e.insertBefore(t, a);
    }
    function OR(e, t, a) {
      e.nodeType === bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function MR(e, t) {
      e.removeChild(t);
    }
    function LR(e, t) {
      e.nodeType === bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === bn) {
          var s = u.data;
          if (s === Ch)
            if (i === 0) {
              e.removeChild(u), vt(t);
              return;
            } else
              i--;
          else
            (s === Eh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      vt(t);
    }
    function NR(e, t) {
      e.nodeType === bn ? Hy(e.parentNode, t) : e.nodeType === Ar && Hy(e, t), vt(e);
    }
    function zR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function AR(e) {
      e.nodeValue = "";
    }
    function UR(e, t) {
      e = e;
      var a = t[cR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ic("display", i);
    }
    function FR(e, t) {
      e.nodeValue = t;
    }
    function HR(e) {
      e.nodeType === Ar ? e.textContent = "" : e.nodeType === Pa && e.documentElement && e.removeChild(e.documentElement);
    }
    function VR(e, t, a) {
      return e.nodeType !== Ar || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jR(e, t) {
      return t === "" || e.nodeType !== Ci ? null : e;
    }
    function PR(e) {
      return e.nodeType !== bn ? null : e;
    }
    function I0(e) {
      return e.data === up;
    }
    function Vy(e) {
      return e.data === op;
    }
    function BR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function $R(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ar || t === Ci)
          break;
        if (t === bn) {
          var a = e.data;
          if (a === Eh || a === op || a === up)
            break;
          if (a === Ch)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return Th(e.nextSibling);
    }
    function YR(e) {
      return Th(e.firstChild);
    }
    function IR(e) {
      return Th(e.firstChild);
    }
    function QR(e) {
      return Th(e.nextSibling);
    }
    function WR(e, t, a, i, u, s, f) {
      fp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== He;
      return nR(e, t, a, p, i, y, f);
    }
    function GR(e, t, a, i) {
      return fp(a, e), a.mode & ct, rR(e, t);
    }
    function qR(e, t) {
      fp(t, e);
    }
    function KR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === Ch) {
            if (a === 0)
              return sp(t);
            a--;
          } else
            (i === Eh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Q0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === Eh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Ch && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function XR(e) {
      vt(e);
    }
    function ZR(e) {
      vt(e);
    }
    function JR(e) {
      return e !== "head" && e !== "body";
    }
    function e_(e, t, a, i) {
      var u = !0;
      yh(t.nodeValue, a, i, u);
    }
    function t_(e, t, a, i, u, s) {
      if (t[Sh] !== !0) {
        var f = !0;
        yh(i.nodeValue, u, s, f);
      }
    }
    function n_(e, t) {
      t.nodeType === Ar ? ky(e, t) : t.nodeType === bn || Oy(e, t);
    }
    function r_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ar ? ky(a, t) : t.nodeType === bn || Oy(a, t));
      }
    }
    function a_(e, t, a, i, u) {
      (u || t[Sh] !== !0) && (i.nodeType === Ar ? ky(a, i) : i.nodeType === bn || Oy(a, i));
    }
    function i_(e, t, a) {
      My(e, t);
    }
    function l_(e, t) {
      Ly(e, t);
    }
    function u_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function o_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function s_(e, t, a, i, u, s) {
      (s || t[Sh] !== !0) && My(a, i);
    }
    function c_(e, t, a, i, u) {
      (u || t[Sh] !== !0) && Ly(a, i);
    }
    function f_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function d_(e) {
      tp(e);
    }
    var df = Math.random().toString(36).slice(2), pf = "__reactFiber$" + df, jy = "__reactProps$" + df, cp = "__reactContainer$" + df, Py = "__reactEvents$" + df, p_ = "__reactListeners$" + df, v_ = "__reactHandles$" + df;
    function h_(e) {
      delete e[pf], delete e[jy], delete e[Py], delete e[p_], delete e[v_];
    }
    function fp(e, t) {
      t[pf] = e;
    }
    function Rh(e, t) {
      t[cp] = e;
    }
    function W0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Os(e) {
      var t = e[pf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[pf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Q0(e); u !== null; ) {
              var s = u[pf];
              if (s)
                return s;
              u = Q0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ro(e) {
      var t = e[pf] || e[cp];
      return t && (t.tag === W || t.tag === ie || t.tag === U || t.tag === B) ? t : null;
    }
    function vf(e) {
      if (e.tag === W || e.tag === ie)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function _h(e) {
      return e[jy] || null;
    }
    function By(e, t) {
      e[jy] = t;
    }
    function m_(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var G0 = {}, q0 = b.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = Ja(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
    }
    function Ai(e, t, a, i, u) {
      {
        var s = Function.call.bind(ve);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in G0) && (G0[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var $y = [], xh;
    xh = [];
    var Su = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function Yr(e, t) {
      if (Su < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== xh[Su] && S("Unexpected Fiber popped."), e.current = $y[Su], $y[Su] = null, xh[Su] = null, Su--;
    }
    function Ir(e, t, a) {
      Su++, $y[Su] = e.current, xh[Su] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var Qa = {};
    Object.freeze(Qa);
    var Eu = _o(Qa), kl = _o(!1), Iy = Qa;
    function hf(e, t, a) {
      return a && Ol(t) ? Iy : Eu.current;
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function mf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Qa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          Ai(i, s, "context", p);
        }
        return u && K0(e, t, s), s;
      }
    }
    function bh() {
      return kl.current;
    }
    function Ol(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      Yr(kl, e), Yr(Eu, e);
    }
    function Qy(e) {
      Yr(kl, e), Yr(Eu, e);
    }
    function X0(e, t, a) {
      {
        if (Eu.current !== Qa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ir(Eu, t, e), Ir(kl, a, e);
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          Ai(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Qa;
        return Iy = Eu.current, Ir(Eu, a, e), Ir(kl, kl.current, e), !0;
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Z0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, Yr(kl, e), Yr(Eu, e), Ir(Eu, u, e), Ir(kl, a, e);
        } else
          Yr(kl, e), Ir(kl, a, e);
      }
    }
    function y_(e) {
      {
        if (!hd(e) || e.tag !== J)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case J: {
              var a = t.type;
              if (Ol(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var wo = 0, Oh = 1, Cu = null, Wy = !1, Gy = !1;
    function eE(e) {
      Cu === null ? Cu = [e] : Cu.push(e);
    }
    function g_(e) {
      Wy = !0, eE(e);
    }
    function tE() {
      Wy && xo();
    }
    function xo() {
      if (!Gy && Cu !== null) {
        Gy = !0;
        var e = 0, t = Ca();
        try {
          var a = !0, i = Cu;
          for (An(sr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Cu = null, Wy = !1;
        } catch (s) {
          throw Cu !== null && (Cu = Cu.slice(e + 1)), mc(gc, xo), s;
        } finally {
          An(t), Gy = !1;
        }
      }
      return null;
    }
    var yf = [], gf = 0, Mh = null, Lh = 0, oi = [], si = 0, Ms = null, Tu = 1, Ru = "";
    function S_(e) {
      return Ns(), (e.flags & dd) !== Ae;
    }
    function E_(e) {
      return Ns(), Lh;
    }
    function C_() {
      var e = Ru, t = Tu, a = t & ~T_(t);
      return a.toString(32) + e;
    }
    function Ls(e, t) {
      Ns(), yf[gf++] = Lh, yf[gf++] = Mh, Mh = e, Lh = t;
    }
    function nE(e, t, a) {
      Ns(), oi[si++] = Tu, oi[si++] = Ru, oi[si++] = Ms, Ms = e;
      var i = Tu, u = Ru, s = Nh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Nh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), _ = f >> y, N = s - y, A = Nh(t) + N, V = p << N, Ee = V | _, Ue = x + u;
        Tu = 1 << A | Ee, Ru = Ue;
      } else {
        var Le = p << s, Tt = Le | f, ht = u;
        Tu = 1 << v | Tt, Ru = ht;
      }
    }
    function qy(e) {
      Ns();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ls(e, a), nE(e, a, i);
      }
    }
    function Nh(e) {
      return 32 - _c(e);
    }
    function T_(e) {
      return 1 << Nh(e) - 1;
    }
    function Ky(e) {
      for (; e === Mh; )
        Mh = yf[--gf], yf[gf] = null, Lh = yf[--gf], yf[gf] = null;
      for (; e === Ms; )
        Ms = oi[--si], oi[si] = null, Ru = oi[--si], oi[si] = null, Tu = oi[--si], oi[si] = null;
    }
    function R_() {
      return Ns(), Ms !== null ? {
        id: Tu,
        overflow: Ru
      } : null;
    }
    function __(e, t) {
      Ns(), oi[si++] = Tu, oi[si++] = Ru, oi[si++] = Ms, Tu = t.id, Ru = t.overflow, Ms = e;
    }
    function Ns() {
      Er() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Sr = null, ci = null, Ui = !1, zs = !1, bo = null;
    function w_() {
      Ui && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rE() {
      zs = !0;
    }
    function x_() {
      return zs;
    }
    function b_(e) {
      var t = e.stateNode.containerInfo;
      return ci = IR(t), Sr = e, Ui = !0, bo = null, zs = !1, !0;
    }
    function D_(e, t, a) {
      return ci = QR(t), Sr = e, Ui = !0, bo = null, zs = !1, a !== null && __(e, a), !0;
    }
    function aE(e, t) {
      switch (e.tag) {
        case B: {
          n_(e.stateNode.containerInfo, t);
          break;
        }
        case W: {
          var a = (e.mode & ct) !== He;
          a_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case U: {
          var i = e.memoizedState;
          i.dehydrated !== null && r_(i.dehydrated, t);
          break;
        }
      }
    }
    function iE(e, t) {
      aE(e, t);
      var a = Mb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (zs)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case W:
                var i = t.type;
                t.pendingProps, i_(a, i);
                break;
              case ie:
                var u = t.pendingProps;
                l_(a, u);
                break;
            }
            break;
          }
          case W: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case W: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== He;
                s_(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case ie: {
                var x = t.pendingProps, _ = (e.mode & ct) !== He;
                c_(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case U: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null)
              switch (t.tag) {
                case W:
                  var V = t.type;
                  t.pendingProps, u_(A, V);
                  break;
                case ie:
                  var Ee = t.pendingProps;
                  o_(A, Ee);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function lE(e, t) {
      t.flags = t.flags & ~ma | tn, Xy(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case W: {
          var a = e.type;
          e.pendingProps;
          var i = VR(t, a);
          return i !== null ? (e.stateNode = i, Sr = e, ci = YR(i), !0) : !1;
        }
        case ie: {
          var u = e.pendingProps, s = jR(t, u);
          return s !== null ? (e.stateNode = s, Sr = e, ci = null, !0) : !1;
        }
        case U: {
          var f = PR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: R_(),
              retryLane: Br
            };
            e.memoizedState = p;
            var v = Lb(f);
            return v.return = e, e.child = v, Sr = e, ci = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & ct) !== He && (e.flags & Ge) === Ae;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ui) {
        var t = ci;
        if (!t) {
          Zy(e) && (Xy(Sr, e), Jy()), lE(Sr, e), Ui = !1, Sr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          Zy(e) && (Xy(Sr, e), Jy()), t = sp(a);
          var i = Sr;
          if (!t || !uE(e, t)) {
            lE(Sr, e), Ui = !1, Sr = e;
            return;
          }
          iE(i, a);
        }
      }
    }
    function k_(e, t, a) {
      var i = e.stateNode, u = !zs, s = WR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function O_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = GR(t, a, e);
      if (i) {
        var u = Sr;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== He;
              e_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case W: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== He;
              t_(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function M_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      qR(a, e);
    }
    function L_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return KR(a);
    }
    function oE(e) {
      for (var t = e.return; t !== null && t.tag !== W && t.tag !== B && t.tag !== U; )
        t = t.return;
      Sr = t;
    }
    function zh(e) {
      if (e !== Sr)
        return !1;
      if (!Ui)
        return oE(e), Ui = !0, !1;
      if (e.tag !== B && (e.tag !== W || JR(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = ci;
        if (t)
          if (Zy(e))
            sE(e), Jy();
          else
            for (; t; )
              iE(e, t), t = sp(t);
      }
      return oE(e), e.tag === U ? ci = L_(e) : ci = Sr ? sp(e.stateNode) : null, !0;
    }
    function N_() {
      return Ui && ci !== null;
    }
    function sE(e) {
      for (var t = ci; t; )
        aE(e, t), t = sp(t);
    }
    function Sf() {
      Sr = null, ci = null, Ui = !1, zs = !1;
    }
    function cE() {
      bo !== null && (a1(bo), bo = null);
    }
    function Er() {
      return Ui;
    }
    function tg(e) {
      bo === null ? bo = [e] : bo.push(e);
    }
    var z_ = b.ReactCurrentBatchConfig, A_ = null;
    function U_() {
      return z_.transition;
    }
    var Fi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var F_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & pn && (t = a), a = a.return;
        return t;
      }, As = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Us = /* @__PURE__ */ new Set();
      Fi.recordUnsafeLifecycleWarnings = function(e, t) {
        Us.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & pn && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & pn && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & pn && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, Fi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          e.add(Ke(_) || "Component"), Us.add(_.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          t.add(Ke(_) || "Component"), Us.add(_.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          a.add(Ke(_) || "Component"), Us.add(_.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          i.add(Ke(_) || "Component"), Us.add(_.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(_) {
          u.add(Ke(_) || "Component"), Us.add(_.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(_) {
          s.add(Ke(_) || "Component"), Us.add(_.type);
        }), gp = []), t.size > 0) {
          var f = As(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = As(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = As(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = As(e);
          we(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = As(a);
          we(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = As(u);
          we(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), fE = /* @__PURE__ */ new Set();
      Fi.recordLegacyContextWarning = function(e, t) {
        var a = F_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, Fi.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), fE.add(s.type);
            });
            var u = As(i);
            try {
              zt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              yn();
            }
          }
        });
      }, Fi.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    function Hi(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ng = _o(null), rg;
    rg = {};
    var Uh = null, Ef = null, ag = null, Fh = !1;
    function Hh() {
      Uh = null, Ef = null, ag = null, Fh = !1;
    }
    function dE() {
      Fh = !0;
    }
    function pE() {
      Fh = !1;
    }
    function vE(e, t, a) {
      Ir(ng, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rg;
    }
    function ig(e, t) {
      var a = ng.current;
      Yr(ng, t), e._currentValue = a;
    }
    function lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ou(i.childLanes, t) ? u !== null && !ou(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function H_(e, t, a) {
      V_(e, t, a);
    }
    function V_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === J) {
                var p = zn(a), v = _u(Xt, p);
                v.tag = jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = tt(_.lanes, a)), lg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === mt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === gt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = tt(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = tt(A.lanes, a)), lg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Cf(e, t) {
      Uh = e, Ef = null, ag = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && ($r(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function Wn(e) {
      Fh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ag !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ef === null) {
          if (Uh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ef = a, Uh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Ef = Ef.next = a;
      }
      return t;
    }
    var Fs = null;
    function ug(e) {
      Fs === null ? Fs = [e] : Fs.push(e);
    }
    function j_() {
      if (Fs !== null) {
        for (var e = 0; e < Fs.length; e++) {
          var t = Fs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Fs = null;
      }
    }
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function P_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function B_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function xa(e, t) {
      return Vh(e, t);
    }
    var $_ = Vh;
    function Vh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (tn | ma)) !== Ae && m1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (tn | ma)) !== Ae && m1(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, jh = 2, og = 3, Ph = !1, sg, Bh;
    sg = !1, Bh = null;
    function cg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function _u(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Do(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Bh === u && !sg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sg = !0), $x()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, $_(e, a);
      } else
        return B_(e, u, t, a);
    }
    function $h(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Dd(a)) {
          var s = u.lanes;
          s = Od(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, uo(e, f);
        }
      }
    }
    function fg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Y_(e, t, a, i, u, s) {
      switch (a.tag) {
        case yE: {
          var f = a.payload;
          if (typeof f == "function") {
            dE();
            var p = f.call(s, i, u);
            {
              if (e.mode & pn) {
                Nn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Nn(!1);
                }
              }
              pE();
            }
            return p;
          }
          return f;
        }
        case og:
          e.flags = e.flags & ~Bn | Ge;
        case mE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dE(), y = v.call(s, i, u);
            {
              if (e.mode & pn) {
                Nn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Nn(!1);
                }
              }
              pE();
            }
          } else
            y = v;
          return y == null ? i : ot({}, i, y);
        }
        case jh:
          return Ph = !0, i;
      }
      return i;
    }
    function Yh(e, t, a, i) {
      var u = e.updateQueue;
      Ph = !1, Bh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, _ = x.lastBaseUpdate;
          _ !== f && (_ === null ? x.firstBaseUpdate = y : _.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, A = P, V = null, Ee = null, Ue = null, Le = s;
        do {
          var Tt = Le.lane, ht = Le.eventTime;
          if (ou(i, Tt)) {
            if (Ue !== null) {
              var j = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Et,
                tag: Le.tag,
                payload: Le.payload,
                callback: Le.callback,
                next: null
              };
              Ue = Ue.next = j;
            }
            N = Y_(e, u, Le, N, t, a);
            var O = Le.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Le.lane !== Et) {
              e.flags |= ni;
              var X = u.effects;
              X === null ? u.effects = [Le] : X.push(Le);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Tt,
              tag: Le.tag,
              payload: Le.payload,
              callback: Le.callback,
              next: null
            };
            Ue === null ? (Ee = Ue = k, V = N) : Ue = Ue.next = k, A = tt(A, Tt);
          }
          if (Le = Le.next, Le === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ce = p, he = Ce.next;
            Ce.next = null, Le = he, u.lastBaseUpdate = Ce, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (V = N), u.baseState = V, u.firstBaseUpdate = Ee, u.lastBaseUpdate = Ue;
        var Qe = u.shared.interleaved;
        if (Qe !== null) {
          var Ze = Qe;
          do
            A = tt(A, Ze.lane), Ze = Ze.next;
          while (Ze !== Qe);
        } else
          s === null && (u.shared.lanes = P);
        Yp(A), e.lanes = A, e.memoizedState = N;
      }
      Bh = null;
    }
    function I_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Ph = !1;
    }
    function Ih() {
      return Ph;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, I_(f, a));
        }
    }
    var dg = {}, CE = new M.Component().refs, pg, vg, hg, mg, yg, TE, Qh, gg, Sg, Eg;
    {
      pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var RE = /* @__PURE__ */ new Set();
      Qh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          RE.has(a) || (RE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, TE = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          yg.has(a) || (yg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dg);
    }
    function Cg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & pn) {
          Nn(!0);
          try {
            s = a(i, u);
          } finally {
            Nn(!1);
          }
        }
        TE(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Tg = {
      isMounted: ea,
      enqueueSetState: function(e, t, a) {
        var i = va(e), u = la(), s = Uo(i), f = _u(u, s);
        f.payload = t, a != null && (Qh(a, "setState"), f.callback = a);
        var p = Do(i, f, s);
        p !== null && (lr(p, i, s, u), $h(p, i, s)), El(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = va(e), u = la(), s = Uo(i), f = _u(u, s);
        f.tag = yE, f.payload = t, a != null && (Qh(a, "replaceState"), f.callback = a);
        var p = Do(i, f, s);
        p !== null && (lr(p, i, s, u), $h(p, i, s)), El(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = va(e), i = la(), u = Uo(a), s = _u(i, u);
        s.tag = jh, t != null && (Qh(t, "forceUpdate"), s.callback = t);
        var f = Do(a, s, u);
        f !== null && (lr(f, a, u, i), $h(f, a, u)), _d(a, u);
      }
    };
    function _E(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & pn) {
            Nn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Nn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ne(a, i) || !Ne(u, s) : !0;
    }
    function Q_(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Sg.has(t) && (Sg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hg.has(t) && (hg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || St(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function wE(e, t) {
      t.updater = Tg, e.stateNode = t, Xu(t, e), t._reactInternalInstance = dg;
    }
    function xE(e, t, a) {
      var i = !1, u = Qa, s = Qa, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === jo && f._context === void 0
        );
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Nu ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Wn(f);
      else {
        u = hf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? mf(e, u) : Qa;
      }
      var g = new t(a, s);
      if (e.mode & pn) {
        Nn(!0);
        try {
          g = new t(a, s);
        } finally {
          Nn(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      wE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var _ = wt(t) || "Component";
          vg.has(_) || (vg.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), N !== null || A !== null || V !== null) {
            var Ee = wt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mg.has(Ee) || (mg.add(Ee), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ee, Ue, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && K0(e, u, s), g;
    }
    function W_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), Tg.enqueueReplaceState(t, t.state, null));
    }
    function bE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          pg.has(s) || (pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Tg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Rg(e, t, a, i) {
      Q_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = CE, cg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Wn(s);
      else {
        var f = hf(e, t, !0);
        u.context = mf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          gg.has(p) || (gg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & pn && Fi.recordLegacyContextWarning(e, u), Fi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Cg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (W_(e, u), Yh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = et;
        y |= Fr, (e.mode & Sa) !== He && (y |= Hr), e.flags |= y;
      }
    }
    function G_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Qa;
      if (typeof p == "object" && p !== null)
        v = Wn(p);
      else {
        var y = hf(e, t, !0);
        v = mf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && bE(e, u, a, v), SE();
      var _ = e.memoizedState, N = u.state = _;
      if (Yh(e, a, u, i), N = e.memoizedState, s === a && _ === N && !bh() && !Ih()) {
        if (typeof u.componentDidMount == "function") {
          var A = et;
          A |= Fr, (e.mode & Sa) !== He && (A |= Hr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (Cg(e, t, g, a), N = e.memoizedState);
      var V = Ih() || _E(e, t, s, a, _, N, v);
      if (V) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ee = et;
          Ee |= Fr, (e.mode & Sa) !== He && (Ee |= Hr), e.flags |= Ee;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = et;
          Ue |= Fr, (e.mode & Sa) !== He && (Ue |= Hr), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, V;
    }
    function q_(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Hi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = Qa;
      if (typeof g == "object" && g !== null)
        x = Wn(g);
      else {
        var _ = hf(t, a, !0);
        x = mf(t, _);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && bE(t, s, i, x), SE();
      var V = t.memoizedState, Ee = s.state = V;
      if (Yh(t, i, s, u), Ee = t.memoizedState, f === v && V === Ee && !bh() && !Ih() && !Oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ha), !1;
      typeof N == "function" && (Cg(t, a, N, i), Ee = t.memoizedState);
      var Ue = Ih() || _E(t, a, p, i, V, Ee, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Oe;
      return Ue ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ee, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ee, x)), typeof s.componentDidUpdate == "function" && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ha)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ha), t.memoizedProps = i, t.memoizedState = Ee), s.props = i, s.state = Ee, s.context = x, Ue;
    }
    var _g, wg, xg, bg, Dg, DE = function(e, t) {
    };
    _g = !1, wg = !1, xg = {}, bg = {}, Dg = {}, DE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        bg[a] || (bg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & pn || je) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ke(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== J)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ur(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var _ = v.refs;
            _ === CE && (_ = v.refs = {}), x === null ? delete _[y] : _[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Wh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Gh(e) {
      {
        var t = Ke(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function kE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function OE(e) {
      function t(k, j) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [j], k.flags |= Mt) : O.push(j);
        }
      }
      function a(k, j) {
        if (!e)
          return null;
        for (var O = j; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, j) {
        for (var O = /* @__PURE__ */ new Map(), X = j; X !== null; )
          X.key !== null ? O.set(X.key, X) : O.set(X.index, X), X = X.sibling;
        return O;
      }
      function u(k, j) {
        var O = Is(k, j);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, j, O) {
        if (k.index = O, !e)
          return k.flags |= dd, j;
        var X = k.alternate;
        if (X !== null) {
          var Ce = X.index;
          return Ce < j ? (k.flags |= tn, j) : Ce;
        } else
          return k.flags |= tn, j;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= tn), k;
      }
      function p(k, j, O, X) {
        if (j === null || j.tag !== ie) {
          var Ce = t0(O, k.mode, X);
          return Ce.return = k, Ce;
        } else {
          var he = u(j, O);
          return he.return = k, he;
        }
      }
      function v(k, j, O, X) {
        var Ce = O.type;
        if (Ce === Ua)
          return g(k, j, O.props.children, X, O.key);
        if (j !== null && (j.elementType === Ce || // Keep this check inline so it only runs on the false path:
        E1(j, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === qn && kE(Ce) === j.type)) {
          var he = u(j, O.props);
          return he.ref = Sp(k, j, O), he.return = k, he._debugSource = O._source, he._debugOwner = O._owner, he;
        }
        var Qe = e0(O, k.mode, X);
        return Qe.ref = Sp(k, j, O), Qe.return = k, Qe;
      }
      function y(k, j, O, X) {
        if (j === null || j.tag !== Z || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation) {
          var Ce = n0(O, k.mode, X);
          return Ce.return = k, Ce;
        } else {
          var he = u(j, O.children || []);
          return he.return = k, he;
        }
      }
      function g(k, j, O, X, Ce) {
        if (j === null || j.tag !== de) {
          var he = Ho(O, k.mode, X, Ce);
          return he.return = k, he;
        } else {
          var Qe = u(j, O);
          return Qe.return = k, Qe;
        }
      }
      function x(k, j, O) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var X = t0("" + j, k.mode, O);
          return X.return = k, X;
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case Wi: {
              var Ce = e0(j, k.mode, O);
              return Ce.ref = Sp(k, null, j), Ce.return = k, Ce;
            }
            case Xr: {
              var he = n0(j, k.mode, O);
              return he.return = k, he;
            }
            case qn: {
              var Qe = j._payload, Ze = j._init;
              return x(k, Ze(Qe), O);
            }
          }
          if (St(j) || Fa(j)) {
            var Bt = Ho(j, k.mode, O, null);
            return Bt.return = k, Bt;
          }
          Wh(k, j);
        }
        return typeof j == "function" && Gh(k), null;
      }
      function _(k, j, O, X) {
        var Ce = j !== null ? j.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return Ce !== null ? null : p(k, j, "" + O, X);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Wi:
              return O.key === Ce ? v(k, j, O, X) : null;
            case Xr:
              return O.key === Ce ? y(k, j, O, X) : null;
            case qn: {
              var he = O._payload, Qe = O._init;
              return _(k, j, Qe(he), X);
            }
          }
          if (St(O) || Fa(O))
            return Ce !== null ? null : g(k, j, O, X, null);
          Wh(k, O);
        }
        return typeof O == "function" && Gh(k), null;
      }
      function N(k, j, O, X, Ce) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var he = k.get(O) || null;
          return p(j, he, "" + X, Ce);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Wi: {
              var Qe = k.get(X.key === null ? O : X.key) || null;
              return v(j, Qe, X, Ce);
            }
            case Xr: {
              var Ze = k.get(X.key === null ? O : X.key) || null;
              return y(j, Ze, X, Ce);
            }
            case qn:
              var Bt = X._payload, kt = X._init;
              return N(k, j, O, kt(Bt), Ce);
          }
          if (St(X) || Fa(X)) {
            var Hn = k.get(O) || null;
            return g(j, Hn, X, Ce, null);
          }
          Wh(j, X);
        }
        return typeof X == "function" && Gh(j), null;
      }
      function A(k, j, O) {
        {
          if (typeof k != "object" || k === null)
            return j;
          switch (k.$$typeof) {
            case Wi:
            case Xr:
              DE(k, O);
              var X = k.key;
              if (typeof X != "string")
                break;
              if (j === null) {
                j = /* @__PURE__ */ new Set(), j.add(X);
                break;
              }
              if (!j.has(X)) {
                j.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case qn:
              var Ce = k._payload, he = k._init;
              A(he(Ce), j, O);
              break;
          }
        }
        return j;
      }
      function V(k, j, O, X) {
        for (var Ce = null, he = 0; he < O.length; he++) {
          var Qe = O[he];
          Ce = A(Qe, Ce, k);
        }
        for (var Ze = null, Bt = null, kt = j, Hn = 0, Ot = 0, On = null; kt !== null && Ot < O.length; Ot++) {
          kt.index > Ot ? (On = kt, kt = null) : On = kt.sibling;
          var Wr = _(k, kt, O[Ot], X);
          if (Wr === null) {
            kt === null && (kt = On);
            break;
          }
          e && kt && Wr.alternate === null && t(k, kt), Hn = s(Wr, Hn, Ot), Bt === null ? Ze = Wr : Bt.sibling = Wr, Bt = Wr, kt = On;
        }
        if (Ot === O.length) {
          if (a(k, kt), Er()) {
            var br = Ot;
            Ls(k, br);
          }
          return Ze;
        }
        if (kt === null) {
          for (; Ot < O.length; Ot++) {
            var Ga = x(k, O[Ot], X);
            Ga !== null && (Hn = s(Ga, Hn, Ot), Bt === null ? Ze = Ga : Bt.sibling = Ga, Bt = Ga);
          }
          if (Er()) {
            var ua = Ot;
            Ls(k, ua);
          }
          return Ze;
        }
        for (var oa = i(k, kt); Ot < O.length; Ot++) {
          var Gr = N(oa, k, Ot, O[Ot], X);
          Gr !== null && (e && Gr.alternate !== null && oa.delete(Gr.key === null ? Ot : Gr.key), Hn = s(Gr, Hn, Ot), Bt === null ? Ze = Gr : Bt.sibling = Gr, Bt = Gr);
        }
        if (e && oa.forEach(function(Hf) {
          return t(k, Hf);
        }), Er()) {
          var Ou = Ot;
          Ls(k, Ou);
        }
        return Ze;
      }
      function Ee(k, j, O, X) {
        var Ce = Fa(O);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (wg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wg = !0), O.entries === Ce && (_g || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _g = !0);
          var he = Ce.call(O);
          if (he)
            for (var Qe = null, Ze = he.next(); !Ze.done; Ze = he.next()) {
              var Bt = Ze.value;
              Qe = A(Bt, Qe, k);
            }
        }
        var kt = Ce.call(O);
        if (kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Hn = null, Ot = null, On = j, Wr = 0, br = 0, Ga = null, ua = kt.next(); On !== null && !ua.done; br++, ua = kt.next()) {
          On.index > br ? (Ga = On, On = null) : Ga = On.sibling;
          var oa = _(k, On, ua.value, X);
          if (oa === null) {
            On === null && (On = Ga);
            break;
          }
          e && On && oa.alternate === null && t(k, On), Wr = s(oa, Wr, br), Ot === null ? Hn = oa : Ot.sibling = oa, Ot = oa, On = Ga;
        }
        if (ua.done) {
          if (a(k, On), Er()) {
            var Gr = br;
            Ls(k, Gr);
          }
          return Hn;
        }
        if (On === null) {
          for (; !ua.done; br++, ua = kt.next()) {
            var Ou = x(k, ua.value, X);
            Ou !== null && (Wr = s(Ou, Wr, br), Ot === null ? Hn = Ou : Ot.sibling = Ou, Ot = Ou);
          }
          if (Er()) {
            var Hf = br;
            Ls(k, Hf);
          }
          return Hn;
        }
        for (var qp = i(k, On); !ua.done; br++, ua = kt.next()) {
          var Hl = N(qp, k, br, ua.value, X);
          Hl !== null && (e && Hl.alternate !== null && qp.delete(Hl.key === null ? br : Hl.key), Wr = s(Hl, Wr, br), Ot === null ? Hn = Hl : Ot.sibling = Hl, Ot = Hl);
        }
        if (e && qp.forEach(function(sD) {
          return t(k, sD);
        }), Er()) {
          var oD = br;
          Ls(k, oD);
        }
        return Hn;
      }
      function Ue(k, j, O, X) {
        if (j !== null && j.tag === ie) {
          a(k, j.sibling);
          var Ce = u(j, O);
          return Ce.return = k, Ce;
        }
        a(k, j);
        var he = t0(O, k.mode, X);
        return he.return = k, he;
      }
      function Le(k, j, O, X) {
        for (var Ce = O.key, he = j; he !== null; ) {
          if (he.key === Ce) {
            var Qe = O.type;
            if (Qe === Ua) {
              if (he.tag === de) {
                a(k, he.sibling);
                var Ze = u(he, O.props.children);
                return Ze.return = k, Ze._debugSource = O._source, Ze._debugOwner = O._owner, Ze;
              }
            } else if (he.elementType === Qe || // Keep this check inline so it only runs on the false path:
            E1(he, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Qe == "object" && Qe !== null && Qe.$$typeof === qn && kE(Qe) === he.type) {
              a(k, he.sibling);
              var Bt = u(he, O.props);
              return Bt.ref = Sp(k, he, O), Bt.return = k, Bt._debugSource = O._source, Bt._debugOwner = O._owner, Bt;
            }
            a(k, he);
            break;
          } else
            t(k, he);
          he = he.sibling;
        }
        if (O.type === Ua) {
          var kt = Ho(O.props.children, k.mode, X, O.key);
          return kt.return = k, kt;
        } else {
          var Hn = e0(O, k.mode, X);
          return Hn.ref = Sp(k, j, O), Hn.return = k, Hn;
        }
      }
      function Tt(k, j, O, X) {
        for (var Ce = O.key, he = j; he !== null; ) {
          if (he.key === Ce)
            if (he.tag === Z && he.stateNode.containerInfo === O.containerInfo && he.stateNode.implementation === O.implementation) {
              a(k, he.sibling);
              var Qe = u(he, O.children || []);
              return Qe.return = k, Qe;
            } else {
              a(k, he);
              break;
            }
          else
            t(k, he);
          he = he.sibling;
        }
        var Ze = n0(O, k.mode, X);
        return Ze.return = k, Ze;
      }
      function ht(k, j, O, X) {
        var Ce = typeof O == "object" && O !== null && O.type === Ua && O.key === null;
        if (Ce && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Wi:
              return f(Le(k, j, O, X));
            case Xr:
              return f(Tt(k, j, O, X));
            case qn:
              var he = O._payload, Qe = O._init;
              return ht(k, j, Qe(he), X);
          }
          if (St(O))
            return V(k, j, O, X);
          if (Fa(O))
            return Ee(k, j, O, X);
          Wh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ue(k, j, "" + O, X)) : (typeof O == "function" && Gh(k), a(k, j));
      }
      return ht;
    }
    var Tf = OE(!0), ME = OE(!1);
    function K_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Is(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Is(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function X_(e, t) {
      for (var a = e.child; a !== null; )
        xb(a, t), a = a.sibling;
    }
    var Ep = {}, ko = _o(Ep), Cp = _o(Ep), qh = _o(Ep);
    function Kh(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = Kh(qh.current);
      return e;
    }
    function kg(e, t) {
      Ir(qh, t, e), Ir(Cp, e, e), Ir(ko, Ep, e);
      var a = fR(t);
      Yr(ko, e), Ir(ko, a, e);
    }
    function Rf(e) {
      Yr(ko, e), Yr(Cp, e), Yr(qh, e);
    }
    function Og() {
      var e = Kh(ko.current);
      return e;
    }
    function NE(e) {
      Kh(qh.current);
      var t = Kh(ko.current), a = dR(t, e.type);
      t !== a && (Ir(Cp, e, e), Ir(ko, a, e));
    }
    function Mg(e) {
      Cp.current === e && (Yr(ko, e), Yr(Cp, e));
    }
    var Z_ = 0, zE = 1, AE = 1, Tp = 2, Vi = _o(Z_);
    function Lg(e, t) {
      return (e & t) !== 0;
    }
    function _f(e) {
      return e & zE;
    }
    function Ng(e, t) {
      return e & zE | t;
    }
    function J_(e, t) {
      return e | t;
    }
    function Oo(e, t) {
      Ir(Vi, t, e);
    }
    function wf(e) {
      Yr(Vi, e);
    }
    function ew(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Xh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === U) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || I0(i) || Vy(i))
              return t;
          }
        } else if (t.tag === ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Ae;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ba = (
      /*   */
      0
    ), Jn = (
      /* */
      1
    ), Ml = (
      /*  */
      2
    ), er = (
      /*    */
      4
    ), Cr = (
      /*   */
      8
    ), zg = [];
    function Ag() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function tw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ye = b.ReactCurrentDispatcher, Rp = b.ReactCurrentBatchConfig, Ug, xf;
    Ug = /* @__PURE__ */ new Set();
    var Hs = P, Pt = null, tr = null, nr = null, Zh = !1, _p = !1, wp = 0, nw = 0, rw = 25, Y = null, fi = null, Mo = -1, Fg = !1;
    function Ut() {
      {
        var e = Y;
        fi === null ? fi = [e] : fi.push(e);
      }
    }
    function ue() {
      {
        var e = Y;
        fi !== null && (Mo++, fi[Mo] !== e && aw(e));
      }
    }
    function bf(e) {
      e != null && !St(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function aw(e) {
      {
        var t = Ke(Pt);
        if (!Ug.has(t) && (Ug.add(t), fi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Mo; u++) {
            for (var s = fi[u], f = u === Mo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Qr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Hg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!be(e[a], t[a]))
          return !1;
      return !0;
    }
    function Df(e, t, a, i, u, s) {
      Hs = s, Pt = t, fi = e !== null ? e._debugHookTypes : null, Mo = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ye.current = rC : fi !== null ? ye.current = nC : ye.current = tC;
      var f = a(i, u);
      if (_p) {
        var p = 0;
        do {
          if (_p = !1, wp = 0, p >= rw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, tr = null, nr = null, t.updateQueue = null, Mo = -1, ye.current = aC, f = a(i, u);
        } while (_p);
      }
      ye.current = fm, t._debugHookTypes = fi;
      var v = tr !== null && tr.next !== null;
      if (Hs = P, Pt = null, tr = null, nr = null, Y = null, fi = null, Mo = -1, e !== null && (e.flags & Kn) !== (t.flags & Kn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== He && S("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function kf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Sa) !== He ? t.flags &= ~(Zl | Hr | on | et) : t.flags &= ~(on | et), e.lanes = lo(e.lanes, a);
    }
    function FE() {
      if (ye.current = fm, Zh) {
        for (var e = Pt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      Hs = P, Pt = null, tr = null, nr = null, fi = null, Mo = -1, Y = null, KE = !1, _p = !1, wp = 0;
    }
    function Ll() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return nr === null ? Pt.memoizedState = nr = e : nr = nr.next = e, nr;
    }
    function di() {
      var e;
      if (tr === null) {
        var t = Pt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = tr.next;
      var a;
      if (nr === null ? a = Pt.memoizedState : a = nr.next, a !== null)
        nr = a, a = nr.next, tr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        tr = e;
        var i = {
          memoizedState: tr.memoizedState,
          baseState: tr.baseState,
          baseQueue: tr.baseQueue,
          queue: tr.queue,
          next: null
        };
        nr === null ? Pt.memoizedState = nr = i : nr = nr.next = i;
      }
      return nr;
    }
    function HE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function jg(e, t, a) {
      var i = Ll(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = ow.bind(null, Pt, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
      var i = di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = tr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, _ = null, N = null, A = null, V = g;
        do {
          var Ee = V.lane;
          if (ou(Hs, Ee)) {
            if (A !== null) {
              var Le = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Et,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              A = A.next = Le;
            }
            if (V.hasEagerState)
              x = V.eagerState;
            else {
              var Tt = V.action;
              x = e(x, Tt);
            }
          } else {
            var Ue = {
              lane: Ee,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            A === null ? (N = A = Ue, _ = x) : A = A.next = Ue, Pt.lanes = tt(Pt.lanes, Ee), Yp(Ee);
          }
          V = V.next;
        } while (V !== null && V !== g);
        A === null ? _ = x : A.next = N, be(x, i.memoizedState) || Lp(), i.memoizedState = x, i.baseState = _, i.baseQueue = A, u.lastRenderedState = x;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var j = k.lane;
          Pt.lanes = tt(Pt.lanes, j), Yp(j), k = k.next;
        } while (k !== ht);
      } else
        f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Bg(e, t, a) {
      var i = di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        be(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function zD(e, t, a) {
    }
    function AD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = Pt, u = Ll(), s, f = Er();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), xf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), xf = !0);
      } else {
        if (s = t(), !xf) {
          var p = t();
          be(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), xf = !0);
        }
        var v = km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hs(v, Hs) || VE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, rm(PE.bind(null, i, y, e), [e]), i.flags |= on, xp(Jn | Cr, jE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = Pt, u = di(), s = t();
      if (!xf) {
        var f = t();
        be(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), xf = !0);
      }
      var p = u.memoizedState, v = !be(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (Dp(PE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      nr !== null && nr.memoizedState.tag & Jn) {
        i.flags |= on, xp(Jn | Cr, jE.bind(null, i, y, s, t), void 0, null);
        var g = km();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hs(g, Hs) || VE(i, t, s);
      }
      return s;
    }
    function VE(e, t, a) {
      e.flags |= ls;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Pt.updateQueue;
      if (u === null)
        u = HE(), Pt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function jE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, BE(t) && $E(e);
    }
    function PE(e, t, a) {
      var i = function() {
        BE(t) && $E(e);
      };
      return a(i);
    }
    function BE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !be(a, i);
      } catch {
        return !0;
      }
    }
    function $E(e) {
      var t = xa(e, $e);
      t !== null && lr(t, e, $e, Xt);
    }
    function em(e) {
      var t = Ll();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Vg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = sw.bind(null, Pt, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Pg(Vg);
    }
    function Ig(e) {
      return Bg(Vg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Pt.updateQueue;
      if (s === null)
        s = HE(), Pt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Qg(e) {
      var t = Ll();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = di();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Ll(), s = i === void 0 ? null : i;
      Pt.flags |= e, u.memoizedState = xp(Jn | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = di(), s = i === void 0 ? null : i, f = void 0;
      if (tr !== null) {
        var p = tr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Hg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      Pt.flags |= e, u.memoizedState = xp(Jn | t, a, f, s);
    }
    function rm(e, t) {
      return (Pt.mode & Sa) !== He ? bp(Zl | on | vl, Cr, e, t) : bp(on | vl, Cr, e, t);
    }
    function Dp(e, t) {
      return nm(on, Cr, e, t);
    }
    function Wg(e, t) {
      return bp(et, Ml, e, t);
    }
    function am(e, t) {
      return nm(et, Ml, e, t);
    }
    function Gg(e, t) {
      var a = et;
      return a |= Fr, (Pt.mode & Sa) !== He && (a |= Hr), bp(a, er, e, t);
    }
    function im(e, t) {
      return nm(et, er, e, t);
    }
    function YE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = et;
      return u |= Fr, (Pt.mode & Sa) !== He && (u |= Hr), bp(u, er, YE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(et, er, YE.bind(null, t, e), i);
    }
    function iw(e, t) {
    }
    var um = iw;
    function Kg(e, t) {
      var a = Ll(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Xg(e, t) {
      var a = Ll(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Ll();
      return t.memoizedState = e, e;
    }
    function IE(e) {
      var t = di(), a = tr, i = a.memoizedState;
      return WE(t, i, e);
    }
    function QE(e) {
      var t = di();
      if (tr === null)
        return t.memoizedState = e, e;
      var a = tr.memoizedState;
      return WE(t, a, e);
    }
    function WE(e, t, a) {
      var i = !ay(Hs);
      if (i) {
        if (!be(a, t)) {
          var u = kd();
          Pt.lanes = tt(Pt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function lw(e, t, a) {
      var i = Ca();
      An(cr(i, Zn)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && we("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = em(!1), t = e[0], a = e[1], i = lw.bind(null, a), u = Ll();
      return u.memoizedState = i, [t, i];
    }
    function GE() {
      var e = Yg(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = Ig(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    var KE = !1;
    function uw() {
      return KE;
    }
    function eS() {
      var e = Ll(), t = km(), a = t.identifierPrefix, i;
      if (Er()) {
        var u = C_();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = nw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = di(), t = e.memoizedState;
      return t;
    }
    function ow(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Uo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        ZE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = la();
          lr(s, e, i, f), JE(s, t, i);
        }
      }
      eC(e, i);
    }
    function sw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Uo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        ZE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ye.current, ye.current = ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, be(y, v)) {
                P_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ye.current = p;
            }
          }
        }
        var g = hE(e, t, u, i);
        if (g !== null) {
          var x = la();
          lr(g, e, i, x), JE(g, t, i);
        }
      }
      eC(e, i);
    }
    function XE(e) {
      var t = e.alternate;
      return e === Pt || t !== null && t === Pt;
    }
    function ZE(e, t) {
      _p = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function JE(e, t, a) {
      if (Dd(a)) {
        var i = t.lanes;
        i = Od(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, uo(e, u);
      }
    }
    function eC(e, t, a) {
      El(e, t);
    }
    var fm = {
      readContext: Wn,
      useCallback: Qr,
      useContext: Qr,
      useEffect: Qr,
      useImperativeHandle: Qr,
      useInsertionEffect: Qr,
      useLayoutEffect: Qr,
      useMemo: Qr,
      useReducer: Qr,
      useRef: Qr,
      useState: Qr,
      useDebugValue: Qr,
      useDeferredValue: Qr,
      useTransition: Qr,
      useMutableSource: Qr,
      useSyncExternalStore: Qr,
      useId: Qr,
      unstable_isNewReconciler: ee
    }, tC = null, nC = null, rC = null, aC = null, Nl = null, ji = null, dm = null;
    {
      var tS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      tC = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Ut(), bf(t), Kg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Ut(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Ut(), bf(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Ut(), bf(a), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Ut(), bf(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Ut(), bf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Ut(), bf(t);
          var a = ye.current;
          ye.current = Nl;
          try {
            return Xg(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Ut();
          var i = ye.current;
          ye.current = Nl;
          try {
            return jg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Ut(), Qg(e);
        },
        useState: function(e) {
          Y = "useState", Ut();
          var t = ye.current;
          ye.current = Nl;
          try {
            return em(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Ut(), Zg(e);
        },
        useTransition: function() {
          return Y = "useTransition", Ut(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Ut(), $g(e, t, a);
        },
        useId: function() {
          return Y = "useId", Ut(), eS();
        },
        unstable_isNewReconciler: ee
      }, nC = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), Kg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), Gg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = ye.current;
          ye.current = Nl;
          try {
            return Xg(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = ye.current;
          ye.current = Nl;
          try {
            return jg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), Qg(e);
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = ye.current;
          ye.current = Nl;
          try {
            return em(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), Zg(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), $g(e, t, a);
        },
        useId: function() {
          return Y = "useId", ue(), eS();
        },
        unstable_isNewReconciler: ee
      }, rC = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), om(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), im(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = ye.current;
          ye.current = ji;
          try {
            return sm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = ye.current;
          ye.current = ji;
          try {
            return Pg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), tm();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = ye.current;
          ye.current = ji;
          try {
            return Yg(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), um();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), IE(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), GE();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), Jh(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), cm();
        },
        unstable_isNewReconciler: ee
      }, aC = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), om(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), im(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = ye.current;
          ye.current = dm;
          try {
            return sm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = ye.current;
          ye.current = dm;
          try {
            return Bg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), tm();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = ye.current;
          ye.current = dm;
          try {
            return Ig(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), um();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), QE(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), qE();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), Jh(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), cm();
        },
        unstable_isNewReconciler: ee
      }, Nl = {
        readContext: function(e) {
          return tS(), Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), Ut(), Kg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), Ut(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), Ut(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), Ut(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), Ut(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), Ut(), Gg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), Ut();
          var a = ye.current;
          ye.current = Nl;
          try {
            return Xg(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), Ut();
          var i = ye.current;
          ye.current = Nl;
          try {
            return jg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), Ut(), Qg(e);
        },
        useState: function(e) {
          Y = "useState", Xe(), Ut();
          var t = ye.current;
          ye.current = Nl;
          try {
            return em(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), Ut(), Zg(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), Ut(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), Ut(), $g(e, t, a);
        },
        useId: function() {
          return Y = "useId", Xe(), Ut(), eS();
        },
        unstable_isNewReconciler: ee
      }, ji = {
        readContext: function(e) {
          return tS(), Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), ue(), om(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), ue(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), ue(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), ue(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), ue(), im(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), ue();
          var a = ye.current;
          ye.current = ji;
          try {
            return sm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), ue();
          var i = ye.current;
          ye.current = ji;
          try {
            return Pg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), ue(), tm();
        },
        useState: function(e) {
          Y = "useState", Xe(), ue();
          var t = ye.current;
          ye.current = ji;
          try {
            return Yg(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), ue(), um();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), ue(), IE(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), ue(), GE();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), ue(), Jh(e, t);
        },
        useId: function() {
          return Y = "useId", Xe(), ue(), cm();
        },
        unstable_isNewReconciler: ee
      }, dm = {
        readContext: function(e) {
          return tS(), Wn(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Xe(), ue(), om(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Xe(), ue(), Wn(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Xe(), ue(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Xe(), ue(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Xe(), ue(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Xe(), ue(), im(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Xe(), ue();
          var a = ye.current;
          ye.current = ji;
          try {
            return sm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Xe(), ue();
          var i = ye.current;
          ye.current = ji;
          try {
            return Bg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Xe(), ue(), tm();
        },
        useState: function(e) {
          Y = "useState", Xe(), ue();
          var t = ye.current;
          ye.current = ji;
          try {
            return Ig(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Xe(), ue(), um();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Xe(), ue(), QE(e);
        },
        useTransition: function() {
          return Y = "useTransition", Xe(), ue(), qE();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Xe(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Xe(), ue(), Jh(e, t);
        },
        useId: function() {
          return Y = "useId", Xe(), ue(), cm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Lo = Q.unstable_now, iC = 0, pm = -1, kp = -1, vm = -1, nS = !1, hm = !1;
    function lC() {
      return nS;
    }
    function cw() {
      hm = !0;
    }
    function fw() {
      nS = !1, hm = !1;
    }
    function dw() {
      nS = hm, hm = !1;
    }
    function uC() {
      return iC;
    }
    function oC() {
      iC = Lo();
    }
    function rS(e) {
      kp = Lo(), e.actualStartTime < 0 && (e.actualStartTime = Lo());
    }
    function sC(e) {
      kp = -1;
    }
    function mm(e, t) {
      if (kp >= 0) {
        var a = Lo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function zl(e) {
      if (pm >= 0) {
        var t = Lo() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ae:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aS(e) {
      if (vm >= 0) {
        var t = Lo() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ae:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Al() {
      pm = Lo();
    }
    function iS() {
      vm = Lo();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Vs(e, t) {
      return {
        value: e,
        source: t,
        stack: Hu(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function pw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = pw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === J)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === B)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var vw = typeof WeakMap == "function" ? WeakMap : Map;
    function cC(e, t, a) {
      var i = _u(Xt, a);
      i.tag = og, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        lb(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = _u(Xt, a);
      i.tag = og;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          C1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        C1(e), oS(e, t), typeof u != "function" && ab(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && ($r(e.lanes, $e) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function fC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new vw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ub.bind(null, e, t, a);
        Xn && Ip(e, a), t.then(s, s);
      }
    }
    function hw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function mw(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === He && (a === oe || a === re || a === ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dC(e) {
      var t = e;
      do {
        if (t.tag === U && ew(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pC(e, t, a, i, u) {
      if ((e.mode & ct) === He) {
        if (e === t)
          e.flags |= Bn;
        else {
          if (e.flags |= Ge, a.flags |= us, a.flags &= ~(pc | Zr), a.tag === J) {
            var s = a.alternate;
            if (s === null)
              a.tag = yt;
            else {
              var f = _u(Xt, $e);
              f.tag = jh, Do(a, f, $e);
            }
          }
          a.lanes = tt(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= Bn, e.lanes = u, e;
    }
    function yw(e, t, a, i, u) {
      if (a.flags |= Zr, Xn && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        mw(a), Er() && a.mode & ct && rE();
        var f = dC(t);
        if (f !== null) {
          f.flags &= ~gn, pC(f, t, a, e, u), f.mode & ct && fC(e, s, u), hw(f, e, s);
          return;
        } else {
          if (!io(u)) {
            fC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Er() && a.mode & ct) {
        rE();
        var v = dC(t);
        if (v !== null) {
          (v.flags & Bn) === Ae && (v.flags |= gn), pC(v, t, a, e, u), tg(Vs(i, a));
          return;
        }
      }
      i = Vs(i, a), Kx(i);
      var y = t;
      do {
        switch (y.tag) {
          case B: {
            var g = i;
            y.flags |= Bn;
            var x = zn(u);
            y.lanes = tt(y.lanes, x);
            var _ = cC(y, g, x);
            fg(y, _);
            return;
          }
          case J:
            var N = i, A = y.type, V = y.stateNode;
            if ((y.flags & Ge) === Ae && (typeof A.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !d1(V))) {
              y.flags |= Bn;
              var Ee = zn(u);
              y.lanes = tt(y.lanes, Ee);
              var Ue = sS(y, N, Ee);
              fg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function gw() {
      return null;
    }
    var Op = b.ReactCurrentOwner, Pi = !1, cS, Mp, fS, dS, pS, js, vS, ym;
    cS = {}, Mp = {}, fS = {}, dS = {}, pS = {}, js = !1, vS = {}, ym = {};
    function aa(e, t, a, i) {
      e === null ? t.child = ME(t, null, a, i) : t.child = Tf(t, e.child, a, i);
    }
    function Sw(e, t, a, i) {
      t.child = Tf(t, e.child, null, i), t.child = Tf(t, null, a, i);
    }
    function vC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ai(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Cf(t, u), Sl(t);
      {
        if (Op.current = t, zr(!0), v = Df(e, t, f, i, p, u), y = kf(), t.mode & pn) {
          Nn(!0);
          try {
            v = Df(e, t, f, i, p, u), y = kf();
          } finally {
            Nn(!1);
          }
        }
        zr(!1);
      }
      return Jl(), e !== null && !Pi ? (UE(e, t, u), wu(e, t, u)) : (Er() && y && qy(t), t.flags |= dl, aa(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (_b(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Ff(s), t.tag = ge, t.type = f, yS(t, s), mC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ai(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          );
        }
        var v = JS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Ai(
          g,
          i,
          // Resolved props
          "prop",
          wt(y)
        );
      }
      var x = e.child, _ = RS(e, u);
      if (!_) {
        var N = x.memoizedProps, A = a.compare;
        if (A = A !== null ? A : Ne, A(N, i) && e.ref === t.ref)
          return wu(e, t, u);
      }
      t.flags |= dl;
      var V = Is(x, i);
      return V.ref = t.ref, V.return = t, t.child = V, V;
    }
    function mC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === qn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ai(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ne(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Pi = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & us) !== Ae && (Pi = !0);
          else
            return t.lanes = e.lanes, wu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function yC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ct) === He) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Om(t, a);
        } else if ($r(a, Br)) {
          var x = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var _ = s !== null ? s.baseLanes : a;
          Om(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Br;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Om(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = tt(s.baseLanes, a), t.memoizedState = null) : N = a, Om(t, N);
      }
      return aa(e, t, u, a), t.child;
    }
    function Ew(e, t, a) {
      var i = t.pendingProps;
      return aa(e, t, i, a), t.child;
    }
    function Cw(e, t, a) {
      var i = t.pendingProps.children;
      return aa(e, t, i, a), t.child;
    }
    function Tw(e, t, a) {
      {
        t.flags |= et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return aa(e, t, s, a), t.child;
    }
    function gC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ur, t.flags |= pd);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ai(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = hf(t, a, !0);
        f = mf(t, p);
      }
      var v, y;
      Cf(t, u), Sl(t);
      {
        if (Op.current = t, zr(!0), v = Df(e, t, a, i, f, u), y = kf(), t.mode & pn) {
          Nn(!0);
          try {
            v = Df(e, t, a, i, f, u), y = kf();
          } finally {
            Nn(!1);
          }
        }
        zr(!1);
      }
      return Jl(), e !== null && !Pi ? (UE(e, t, u), wu(e, t, u)) : (Er() && y && qy(t), t.flags |= dl, aa(e, t, v, u), t.child);
    }
    function SC(e, t, a, i, u) {
      {
        switch (Vb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= Bn;
            var y = new Error("Simulated error coming from DevTools"), g = zn(u);
            t.lanes = tt(t.lanes, g);
            var x = sS(t, Vs(y, t), g);
            fg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && Ai(
            _,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var N;
      Ol(a) ? (N = !0, kh(t)) : N = !1, Cf(t, u);
      var A = t.stateNode, V;
      A === null ? (Sm(e, t), xE(t, a, i), Rg(t, a, i, u), V = !0) : e === null ? V = G_(t, a, i, u) : V = q_(e, t, a, i, u);
      var Ee = mS(e, t, a, V, N, u);
      {
        var Ue = t.stateNode;
        V && Ue.props !== i && (js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), js = !0);
      }
      return Ee;
    }
    function mS(e, t, a, i, u, s) {
      gC(e, t);
      var f = (t.flags & Ge) !== Ae;
      if (!i && !f)
        return u && J0(t, a, !1), wu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, sC();
      else {
        Sl(t);
        {
          if (zr(!0), v = p.render(), t.mode & pn) {
            Nn(!0);
            try {
              p.render();
            } finally {
              Nn(!1);
            }
          }
          zr(!1);
        }
        Jl();
      }
      return t.flags |= dl, e !== null && f ? Sw(e, t, v, s) : aa(e, t, v, s), t.memoizedState = p.state, u && J0(t, a, !0), t.child;
    }
    function EC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), kg(e, t.containerInfo);
    }
    function Rw(e, t, a) {
      if (EC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), Yh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & gn) {
          var g = Vs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CC(e, t, p, a, g);
        } else if (p !== s) {
          var x = Vs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CC(e, t, p, a, x);
        } else {
          b_(t);
          var _ = ME(t, null, p, a);
          t.child = _;
          for (var N = _; N; )
            N.flags = N.flags & ~tn | ma, N = N.sibling;
        }
      } else {
        if (Sf(), p === s)
          return wu(e, t, a);
        aa(e, t, p, a);
      }
      return t.child;
    }
    function CC(e, t, a, i, u) {
      return Sf(), tg(u), t.flags |= gn, aa(e, t, a, i), t.child;
    }
    function _w(e, t, a) {
      NE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= At), gC(e, t), aa(e, t, f, a), t.child;
    }
    function ww(e, t) {
      return e === null && eg(t), null;
    }
    function xw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = wb(v), g = Hi(v, u), x;
      switch (y) {
        case oe:
          return yS(t, v), t.type = v = Ff(v), x = hS(null, t, v, g, i), x;
        case J:
          return t.type = v = WS(v), x = SC(null, t, v, g, i), x;
        case re:
          return t.type = v = GS(v), x = vC(null, t, v, g, i), x;
        case fe: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && Ai(
              _,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return x = hC(
            null,
            t,
            v,
            Hi(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === qn && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function bw(e, t, a, i, u) {
      Sm(e, t), t.tag = J;
      var s;
      return Ol(a) ? (s = !0, kh(t)) : s = !1, Cf(t, u), xE(t, a, i), Rg(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function Dw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s;
      {
        var f = hf(t, a, !1);
        s = mf(t, f);
      }
      Cf(t, i);
      var p, v;
      Sl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & pn && Fi.recordLegacyContextWarning(t, null), zr(!0), Op.current = t, p = Df(null, t, a, u, s, i), v = kf(), zr(!1);
      }
      if (Jl(), t.flags |= dl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Mp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Mp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = wt(a) || "Unknown";
          Mp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Mp[x] = !0);
        }
        t.tag = J, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Ol(a) ? (_ = !0, kh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, cg(t), wE(t, p), Rg(t, a, u, i), mS(null, t, a, !0, _, i);
      } else {
        if (t.tag = oe, t.mode & pn) {
          Nn(!0);
          try {
            p = Df(null, t, a, u, s, i), v = kf();
          } finally {
            Nn(!1);
          }
        }
        return Er() && v && qy(t), aa(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = yr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = wt(t) || "Unknown";
          dS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), dS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = wt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support contextType.", p), fS[p] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Et
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: gw(),
        transitions: null
      };
    }
    function kw(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ow(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Lg(e, Tp);
    }
    function Mw(e, t) {
      return lo(e.childLanes, t);
    }
    function TC(e, t, a) {
      var i = t.pendingProps;
      jb(t) && (t.flags |= Ge);
      var u = Vi.current, s = !1, f = (t.flags & Ge) !== Ae;
      if (f || Ow(u, e) ? (s = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = J_(u, AE)), u = _f(u), Oo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Uw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = Lw(t, y, g, a), _ = t.child;
          return _.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return Fw(e, t, f, i, A, N, a);
        }
        if (s) {
          var V = i.fallback, Ee = i.children, Ue = zw(e, t, Ee, V, a), Le = t.child, Tt = e.child.memoizedState;
          return Le.memoizedState = Tt === null ? SS(a) : kw(Tt, a), Le.childLanes = Mw(e, a), t.memoizedState = gS, Ue;
        } else {
          var ht = i.children, k = Nw(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Lw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === He && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Be && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ho(a, u, i, null)) : (p = CS(f, u), v = Ho(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return R1(e, t, P, null);
    }
    function RC(e, t) {
      return Is(e, t);
    }
    function Nw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = RC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === He && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function zw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === He && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Be && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = RC(f, v), y.subtreeFlags = f.subtreeFlags & Kn;
      var x;
      return p !== null ? x = Is(p, i) : (x = Ho(i, s, u, null), x.flags |= tn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function gm(e, t, a, i) {
      i !== null && tg(i), Tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= tn, t.memoizedState = null, f;
    }
    function Aw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Ho(i, s, u, null);
      return v.flags |= tn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== He && Tf(t, e.child, null, u), v;
    }
    function Uw(e, t, a) {
      return (e.mode & ct) === He ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : Vy(t) ? e.lanes = nu : e.lanes = Br, null;
    }
    function Fw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & gn) {
          t.flags &= ~gn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return gm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var j = i.children, O = i.fallback, X = Aw(e, t, j, O, f), Ce = t.child;
          return Ce.memoizedState = SS(f), t.memoizedState = gS, X;
        }
      else {
        if (w_(), (t.mode & ct) === He)
          return gm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = BR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = uS(x, p, y);
          return gm(e, t, f, _);
        }
        var N = $r(f, e.childLanes);
        if (Pi || N) {
          var A = km();
          if (A !== null) {
            var V = ly(A, f);
            if (V !== Et && V !== s.retryLane) {
              s.retryLane = V;
              var Ee = Xt;
              xa(e, V), lr(A, e, V, Ee);
            }
          }
          BS();
          var Ue = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return gm(e, t, f, Ue);
        } else if (I0(u)) {
          t.flags |= Ge, t.child = e.child;
          var Le = ob.bind(null, e);
          return $R(u, Le), null;
        } else {
          D_(t, u, s.treeContext);
          var Tt = i.children, ht = ES(t, Tt);
          return ht.flags |= ma, ht;
        }
      }
    }
    function _C(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), lg(e.return, t, a);
    }
    function Hw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === U) {
          var u = i.memoizedState;
          u !== null && _C(i, a, e);
        } else if (i.tag === ft)
          _C(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Vw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Xh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Pw(e, t) {
      e !== void 0 && !ym[e] && (e !== "collapsed" && e !== "hidden" ? (ym[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ym[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wC(e, t) {
      {
        var a = St(e), i = !a && typeof Fa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Bw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wC(e[a], a))
              return;
        } else {
          var i = Fa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!wC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      jw(u), Pw(s, u), Bw(f, u), aa(e, t, f, a);
      var p = Vi.current, v = Lg(p, Tp);
      if (v)
        p = Ng(p, Tp), t.flags |= Ge;
      else {
        var y = e !== null && (e.flags & Ge) !== Ae;
        y && Hw(t, t.child, a), p = _f(p);
      }
      if (Oo(t, p), (t.mode & ct) === He)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Vw(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), TS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && Xh(A) === null) {
                t.child = N;
                break;
              }
              var V = N.sibling;
              N.sibling = _, _ = N, N = V;
            }
            TS(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            TS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function $w(e, t, a) {
      kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Tf(t, null, i, a) : aa(e, t, i, a), t.child;
    }
    var bC = !1;
    function Yw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bC || (bC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ai(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var y = f.value;
        if (be(y, p)) {
          if (f.children === s.children && !bh())
            return wu(e, t, a);
        } else
          H_(t, u, a);
      }
      var g = s.children;
      return aa(e, t, g, a), t.child;
    }
    var DC = !1;
    function Iw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DC || (DC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Cf(t, a);
      var f = Wn(i);
      Sl(t);
      var p;
      return Op.current = t, zr(!0), p = s(f), zr(!1), Jl(), t.flags |= dl, aa(e, t, p, a), t.child;
    }
    function Lp() {
      Pi = !0;
    }
    function Sm(e, t) {
      (t.mode & ct) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= tn);
    }
    function wu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), sC(), Yp(t.lanes), $r(a, t.childLanes) ? (K_(e, t), t.child) : null;
    }
    function Qw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= tn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!$r(a, t);
    }
    function Ww(e, t, a) {
      switch (t.tag) {
        case B:
          EC(t), t.stateNode, Sf();
          break;
        case W:
          NE(t);
          break;
        case J: {
          var i = t.type;
          Ol(i) && kh(t);
          break;
        }
        case Z:
          kg(t, t.stateNode.containerInfo);
          break;
        case mt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
          break;
        }
        case ae:
          {
            var f = $r(a, t.childLanes);
            f && (t.flags |= et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case U: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Oo(t, _f(Vi.current)), t.flags |= Ge, null;
            var y = t.child, g = y.childLanes;
            if ($r(a, g))
              return TC(e, t, a);
            Oo(t, _f(Vi.current));
            var x = wu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Oo(t, _f(Vi.current));
          break;
        }
        case ft: {
          var _ = (e.flags & Ge) !== Ae, N = $r(a, t.childLanes);
          if (_) {
            if (N)
              return xC(e, t, a);
            t.flags |= Ge;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Oo(t, Vi.current), N)
            break;
          return null;
        }
        case Ie:
        case Je:
          return t.lanes = P, yC(e, t, a);
      }
      return wu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Qw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Pi = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === Ae)
            return Pi = !1, Ww(e, t, a);
          (e.flags & us) !== Ae ? Pi = !0 : Pi = !1;
        }
      } else if (Pi = !1, Er() && S_(t)) {
        var f = t.index, p = E_();
        nE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Re:
          return Dw(e, t, t.type, a);
        case it: {
          var v = t.elementType;
          return xw(e, t, v, a);
        }
        case oe: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : Hi(y, g);
          return hS(e, t, y, x, a);
        }
        case J: {
          var _ = t.type, N = t.pendingProps, A = t.elementType === _ ? N : Hi(_, N);
          return SC(e, t, _, A, a);
        }
        case B:
          return Rw(e, t, a);
        case W:
          return _w(e, t, a);
        case ie:
          return ww(e, t);
        case U:
          return TC(e, t, a);
        case Z:
          return $w(e, t, a);
        case re: {
          var V = t.type, Ee = t.pendingProps, Ue = t.elementType === V ? Ee : Hi(V, Ee);
          return vC(e, t, V, Ue, a);
        }
        case de:
          return Ew(e, t, a);
        case $:
          return Cw(e, t, a);
        case ae:
          return Tw(e, t, a);
        case mt:
          return Yw(e, t, a);
        case _t:
          return Iw(e, t, a);
        case fe: {
          var Le = t.type, Tt = t.pendingProps, ht = Hi(Le, Tt);
          if (t.type !== t.elementType) {
            var k = Le.propTypes;
            k && Ai(
              k,
              ht,
              // Resolved for outer only
              "prop",
              wt(Le)
            );
          }
          return ht = Hi(Le.type, ht), hC(e, t, Le, ht, a);
        }
        case ge:
          return mC(e, t, t.type, t.pendingProps, a);
        case yt: {
          var j = t.type, O = t.pendingProps, X = t.elementType === j ? O : Hi(j, O);
          return bw(e, t, j, X, a);
        }
        case ft:
          return xC(e, t, a);
        case Ft:
          break;
        case Ie:
          return yC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Of(e) {
      e.flags |= et;
    }
    function OC(e) {
      e.flags |= Ur, e.flags |= pd;
    }
    var MC, _S, LC, NC;
    MC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === W || u.tag === ie)
          mR(e, u.stateNode);
        else if (u.tag !== Z) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, _S = function(e, t) {
    }, LC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = gR(f, a, s, i, u, p);
        t.updateQueue = v, v && Of(t);
      }
    }, NC = function(e, t, a, i) {
      a !== i && Of(t);
    };
    function Np(e, t) {
      if (!Er())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Tr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = Ae;
      if (t) {
        if ((e.mode & Be) !== He) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Kn, i |= y.flags & Kn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = tt(a, tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Kn, i |= g.flags & Kn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Be) !== He) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Gw(e, t, a) {
      if (N_() && (t.mode & ct) !== He && (t.flags & Ge) === Ae)
        return sE(t), Sf(), t.flags |= gn | Zr | Bn, !1;
      var i = zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (M_(t), Tr(t), (t.mode & Be) !== He) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Sf(), (t.flags & Ge) === Ae && (t.memoizedState = null), t.flags |= et, Tr(t), (t.mode & Be) !== He) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return cE(), !0;
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Re:
        case it:
        case ge:
        case oe:
        case re:
        case de:
        case $:
        case ae:
        case _t:
        case fe:
          return Tr(t), null;
        case J: {
          var u = t.type;
          return Ol(u) && Dh(t), Tr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (Rf(t), Qy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = zh(t);
            if (f)
              Of(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & gn) !== Ae) && (t.flags |= ha, cE());
            }
          }
          return _S(e, t), Tr(t), null;
        }
        case W: {
          Mg(t);
          var v = LE(), y = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, y, i, v), e.ref !== t.ref && OC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Tr(t), null;
            }
            var g = Og(), x = zh(t);
            if (x)
              k_(t, v, g) && Of(t);
            else {
              var _ = hR(y, i, v, g, t);
              MC(_, t, !1, !1), t.stateNode = _, yR(_, y, i, v) && Of(t);
            }
            t.ref !== null && OC(t);
          }
          return Tr(t), null;
        }
        case ie: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            NC(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = LE(), Ee = Og(), Ue = zh(t);
            Ue ? O_(t) && Of(t) : t.stateNode = SR(N, V, Ee, t);
          }
          return Tr(t), null;
        }
        case U: {
          wf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Gw(e, t, Le);
            if (!Tt)
              return t.flags & Bn ? t : null;
          }
          if ((t.flags & Ge) !== Ae)
            return t.lanes = a, (t.mode & Be) !== He && lS(t), t;
          var ht = Le !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var j = t.child;
            if (j.flags |= pl, (t.mode & ct) !== He) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !I);
              O || Lg(Vi.current, AE) ? qx() : BS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= et), Tr(t), (t.mode & Be) !== He && ht) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case Z:
          return Rf(t), _S(e, t), e === null && d_(t.stateNode.containerInfo), Tr(t), null;
        case mt:
          var he = t.type._context;
          return ig(he, t), Tr(t), null;
        case yt: {
          var Qe = t.type;
          return Ol(Qe) && Dh(t), Tr(t), null;
        }
        case ft: {
          wf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Tr(t), null;
          var Bt = (t.flags & Ge) !== Ae, kt = Ze.rendering;
          if (kt === null)
            if (Bt)
              Np(Ze, !1);
            else {
              var Hn = Xx() && (e === null || (e.flags & Ge) === Ae);
              if (!Hn)
                for (var Ot = t.child; Ot !== null; ) {
                  var On = Xh(Ot);
                  if (On !== null) {
                    Bt = !0, t.flags |= Ge, Np(Ze, !1);
                    var Wr = On.updateQueue;
                    return Wr !== null && (t.updateQueue = Wr, t.flags |= et), t.subtreeFlags = Ae, X_(t, a), Oo(t, Ng(Vi.current, Tp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              Ze.tail !== null && dn() > t1() && (t.flags |= Ge, Bt = !0, Np(Ze, !1), t.lanes = xd);
            }
          else {
            if (!Bt) {
              var br = Xh(kt);
              if (br !== null) {
                t.flags |= Ge, Bt = !0;
                var Ga = br.updateQueue;
                if (Ga !== null && (t.updateQueue = Ga, t.flags |= et), Np(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !kt.alternate && !Er())
                  return Tr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                dn() * 2 - Ze.renderingStartTime > t1() && a !== Br && (t.flags |= Ge, Bt = !0, Np(Ze, !1), t.lanes = xd);
            }
            if (Ze.isBackwards)
              kt.sibling = t.child, t.child = kt;
            else {
              var ua = Ze.last;
              ua !== null ? ua.sibling = kt : t.child = kt, Ze.last = kt;
            }
          }
          if (Ze.tail !== null) {
            var oa = Ze.tail;
            Ze.rendering = oa, Ze.tail = oa.sibling, Ze.renderingStartTime = dn(), oa.sibling = null;
            var Gr = Vi.current;
            return Bt ? Gr = Ng(Gr, Tp) : Gr = _f(Gr), Oo(t, Gr), oa;
          }
          return Tr(t), null;
        }
        case Ft:
          break;
        case Ie:
        case Je: {
          PS(t);
          var Ou = t.memoizedState, Hf = Ou !== null;
          if (e !== null) {
            var qp = e.memoizedState, Hl = qp !== null;
            Hl !== Hf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= pl);
          }
          return !Hf || (t.mode & ct) === He ? Tr(t) : $r(Fl, Br) && (Tr(t), t.subtreeFlags & (tn | et) && (t.flags |= pl)), null;
        }
        case Lt:
          return null;
        case lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qw(e, t, a) {
      switch (Ky(t), t.tag) {
        case J: {
          var i = t.type;
          Ol(i) && Dh(t);
          var u = t.flags;
          return u & Bn ? (t.flags = u & ~Bn | Ge, (t.mode & Be) !== He && lS(t), t) : null;
        }
        case B: {
          t.stateNode, Rf(t), Qy(t), Ag();
          var s = t.flags;
          return (s & Bn) !== Ae && (s & Ge) === Ae ? (t.flags = s & ~Bn | Ge, t) : null;
        }
        case W:
          return Mg(t), null;
        case U: {
          wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Sf();
          }
          var p = t.flags;
          return p & Bn ? (t.flags = p & ~Bn | Ge, (t.mode & Be) !== He && lS(t), t) : null;
        }
        case ft:
          return wf(t), null;
        case Z:
          return Rf(t), null;
        case mt:
          var v = t.type._context;
          return ig(v, t), null;
        case Ie:
        case Je:
          return PS(t), null;
        case Lt:
          return null;
        default:
          return null;
      }
    }
    function AC(e, t, a) {
      switch (Ky(t), t.tag) {
        case J: {
          var i = t.type.childContextTypes;
          i != null && Dh(t);
          break;
        }
        case B: {
          t.stateNode, Rf(t), Qy(t), Ag();
          break;
        }
        case W: {
          Mg(t);
          break;
        }
        case Z:
          Rf(t);
          break;
        case U:
          wf(t);
          break;
        case ft:
          wf(t);
          break;
        case mt:
          var u = t.type._context;
          ig(u, t);
          break;
        case Ie:
        case Je:
          PS(t);
          break;
      }
    }
    var UC = null;
    UC = /* @__PURE__ */ new Set();
    var Em = !1, Rr = !1, Kw = typeof WeakSet == "function" ? WeakSet : Set, De = null, Mf = null, Lf = null;
    function Xw(e) {
      Xl(null, function() {
        throw e;
      }), fd();
    }
    var Zw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Be)
        try {
          Al(), t.componentWillUnmount();
        } finally {
          zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function FC(e, t) {
      try {
        No(er, e);
      } catch (a) {
        ln(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Zw(e, a);
      } catch (i) {
        ln(e, t, i);
      }
    }
    function Jw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        ln(e, t, i);
      }
    }
    function HC(e, t) {
      try {
        jC(e);
      } catch (a) {
        ln(e, t, a);
      }
    }
    function Nf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (rt && pt && e.mode & Be)
              try {
                Al(), i = a(null);
              } finally {
                zl(e);
              }
            else
              i = a(null);
          } catch (u) {
            ln(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function Cm(e, t, a) {
      try {
        a();
      } catch (i) {
        ln(e, t, i);
      }
    }
    var VC = !1;
    function ex(e, t) {
      pR(e.containerInfo), De = t, tx();
      var a = VC;
      return VC = !1, a;
    }
    function tx() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Zu) !== Ae && t !== null ? (t.return = e, De = t) : nx();
      }
    }
    function nx() {
      for (; De !== null; ) {
        var e = De;
        zt(e);
        try {
          rx(e);
        } catch (a) {
          ln(e, e.return, a);
        }
        yn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function rx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ha) !== Ae) {
        switch (zt(e), e.tag) {
          case oe:
          case re:
          case ge:
            break;
          case J: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Hi(e.type, i), u);
              {
                var p = UC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var v = e.stateNode;
              HR(v.containerInfo);
            }
            break;
          }
          case W:
          case ie:
          case Z:
          case yt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        yn();
      }
    }
    function Bi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Cr) !== ba ? Cc(t) : (e & er) !== ba && Tc(t), (e & Ml) !== ba && Qp(!0), Cm(t, a, p), (e & Ml) !== ba && Qp(!1), (e & Cr) !== ba ? Nv() : (e & er) !== ba && Ju());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function No(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Cr) !== ba ? Lv(t) : (e & er) !== ba && zv(t);
            var f = s.create;
            (e & Ml) !== ba && Qp(!0), s.destroy = f(), (e & Ml) !== ba && Qp(!1), (e & Cr) !== ba ? Rd() : (e & er) !== ba && Av();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & er) !== Ae ? v = "useLayoutEffect" : (s.tag & Ml) !== Ae ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function ax(e, t) {
      if ((t.flags & et) !== Ae)
        switch (t.tag) {
          case ae: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = uC(), p = t.alternate === null ? "mount" : "update";
            lC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case B:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ae:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function ix(e, t, a, i) {
      if ((a.flags & or) !== Ae)
        switch (a.tag) {
          case oe:
          case re:
          case ge: {
            if (!Rr)
              if (a.mode & Be)
                try {
                  Al(), No(er | Jn, a);
                } finally {
                  zl(a);
                }
              else
                No(er | Jn, a);
            break;
          }
          case J: {
            var u = a.stateNode;
            if (a.flags & et && !Rr)
              if (t === null)
                if (a.type === a.elementType && !js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Be)
                  try {
                    Al(), u.componentDidMount();
                  } finally {
                    zl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Hi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Be)
                  try {
                    Al(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    zl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), EE(a, p, u));
            break;
          }
          case B: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case W:
                    y = a.child.stateNode;
                    break;
                  case J:
                    y = a.child.stateNode;
                    break;
                }
              EE(a, v, y);
            }
            break;
          }
          case W: {
            var g = a.stateNode;
            if (t === null && a.flags & et) {
              var x = a.type, _ = a.memoizedProps;
              _R(g, x, _);
            }
            break;
          }
          case ie:
            break;
          case Z:
            break;
          case ae: {
            {
              var N = a.memoizedProps, A = N.onCommit, V = N.onRender, Ee = a.stateNode.effectDuration, Ue = uC(), Le = t === null ? "mount" : "update";
              lC() && (Le = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof A == "function" && A(a.memoizedProps.id, Le, Ee, Ue), nb(a);
                var Tt = a.return;
                e:
                  for (; Tt !== null; ) {
                    switch (Tt.tag) {
                      case B:
                        var ht = Tt.stateNode;
                        ht.effectDuration += Ee;
                        break e;
                      case ae:
                        var k = Tt.stateNode;
                        k.effectDuration += Ee;
                        break e;
                    }
                    Tt = Tt.return;
                  }
              }
            }
            break;
          }
          case U: {
            px(e, a);
            break;
          }
          case ft:
          case yt:
          case Ft:
          case Ie:
          case Je:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Rr || a.flags & Ur && jC(a);
    }
    function lx(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          if (e.mode & Be)
            try {
              Al(), FC(e, e.return);
            } finally {
              zl(e);
            }
          else
            FC(e, e.return);
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Jw(e, e.return, t), HC(e, e.return);
          break;
        }
        case W: {
          HC(e, e.return);
          break;
        }
      }
    }
    function ux(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === W) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? zR(u) : UR(i.stateNode, i.memoizedProps);
            } catch (f) {
              ln(e, e.return, f);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? AR(s) : FR(s, i.memoizedProps);
            } catch (f) {
              ln(e, e.return, f);
            }
        } else if (!((i.tag === Ie || i.tag === Je) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function jC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case W:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Be)
            try {
              Al(), u = t(i);
            } finally {
              zl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function ox(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === W) {
          var a = e.stateNode;
          a !== null && h_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function sx(e) {
      for (var t = e.return; t !== null; ) {
        if (BC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BC(e) {
      return e.tag === W || e.tag === B || e.tag === Z;
    }
    function $C(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || BC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== W && t.tag !== ie && t.tag !== gt; ) {
            if (t.flags & tn || t.child === null || t.tag === Z)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & tn))
            return t.stateNode;
        }
    }
    function cx(e) {
      var t = sx(e);
      switch (t.tag) {
        case W: {
          var a = t.stateNode;
          t.flags & At && (Y0(a), t.flags &= ~At);
          var i = $C(e);
          bS(e, i, a);
          break;
        }
        case B:
        case Z: {
          var u = t.stateNode.containerInfo, s = $C(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === W || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? OR(a, s, t) : DR(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === W || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? kR(a, s, t) : bR(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var _r = null, $i = !1;
    function fx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case W: {
                _r = i.stateNode, $i = !1;
                break e;
              }
              case B: {
                _r = i.stateNode.containerInfo, $i = !0;
                break e;
              }
              case Z: {
                _r = i.stateNode.containerInfo, $i = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (_r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        YC(e, t, a), _r = null, $i = !1;
      }
      ox(a);
    }
    function zo(e, t, a) {
      for (var i = a.child; i !== null; )
        YC(e, t, i), i = i.sibling;
    }
    function YC(e, t, a) {
      switch (Cd(a), a.tag) {
        case W:
          Rr || Nf(a, t);
        case ie: {
          {
            var i = _r, u = $i;
            _r = null, zo(e, t, a), _r = i, $i = u, _r !== null && ($i ? LR(_r, a.stateNode) : MR(_r, a.stateNode));
          }
          return;
        }
        case gt: {
          _r !== null && ($i ? NR(_r, a.stateNode) : Hy(_r, a.stateNode));
          return;
        }
        case Z: {
          {
            var s = _r, f = $i;
            _r = a.stateNode.containerInfo, $i = !0, zo(e, t, a), _r = s, $i = f;
          }
          return;
        }
        case oe:
        case re:
        case fe:
        case ge: {
          if (!Rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, _ = x.destroy, N = x.tag;
                  _ !== void 0 && ((N & Ml) !== ba ? Cm(a, t, _) : (N & er) !== ba && (Tc(a), a.mode & Be ? (Al(), Cm(a, t, _), zl(a)) : Cm(a, t, _), Ju())), g = g.next;
                } while (g !== y);
              }
            }
          }
          zo(e, t, a);
          return;
        }
        case J: {
          if (!Rr) {
            Nf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && wS(a, t, A);
          }
          zo(e, t, a);
          return;
        }
        case Ft: {
          zo(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var V = Rr;
            Rr = V || a.memoizedState !== null, zo(e, t, a), Rr = V;
          } else
            zo(e, t, a);
          break;
        }
        default: {
          zo(e, t, a);
          return;
        }
      }
    }
    function dx(e) {
      e.memoizedState;
    }
    function px(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ZR(s);
          }
        }
      }
    }
    function IC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Kw()), t.forEach(function(i) {
          var u = sb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xn)
              if (Mf !== null && Lf !== null)
                Ip(Lf, Mf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function vx(e, t, a) {
      Mf = a, Lf = e, zt(t), QC(t, e), zt(t), Mf = null, Lf = null;
    }
    function Yi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            fx(e, t, s);
          } catch (v) {
            ln(s, t, v);
          }
        }
      var f = Js();
      if (t.subtreeFlags & Vr)
        for (var p = t.child; p !== null; )
          zt(p), QC(p, e), p = p.sibling;
      zt(f);
    }
    function QC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case oe:
        case re:
        case fe:
        case ge: {
          if (Yi(t, e), Ul(e), u & et) {
            try {
              Bi(Ml | Jn, e, e.return), No(Ml | Jn, e);
            } catch (Qe) {
              ln(e, e.return, Qe);
            }
            if (e.mode & Be) {
              try {
                Al(), Bi(er | Jn, e, e.return);
              } catch (Qe) {
                ln(e, e.return, Qe);
              }
              zl(e);
            } else
              try {
                Bi(er | Jn, e, e.return);
              } catch (Qe) {
                ln(e, e.return, Qe);
              }
          }
          return;
        }
        case J: {
          Yi(t, e), Ul(e), u & Ur && i !== null && Nf(i, i.return);
          return;
        }
        case W: {
          Yi(t, e), Ul(e), u & Ur && i !== null && Nf(i, i.return);
          {
            if (e.flags & At) {
              var s = e.stateNode;
              try {
                Y0(s);
              } catch (Qe) {
                ln(e, e.return, Qe);
              }
            }
            if (u & et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    wR(f, g, y, v, p, e);
                  } catch (Qe) {
                    ln(e, e.return, Qe);
                  }
              }
            }
          }
          return;
        }
        case ie: {
          if (Yi(t, e), Ul(e), u & et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, _ = e.memoizedProps, N = i !== null ? i.memoizedProps : _;
            try {
              xR(x, N, _);
            } catch (Qe) {
              ln(e, e.return, Qe);
            }
          }
          return;
        }
        case B: {
          if (Yi(t, e), Ul(e), u & et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                XR(t.containerInfo);
              } catch (Qe) {
                ln(e, e.return, Qe);
              }
          }
          return;
        }
        case Z: {
          Yi(t, e), Ul(e);
          return;
        }
        case U: {
          Yi(t, e), Ul(e);
          var V = e.child;
          if (V.flags & pl) {
            var Ee = V.stateNode, Ue = V.memoizedState, Le = Ue !== null;
            if (Ee.isHidden = Le, Le) {
              var Tt = V.alternate !== null && V.alternate.memoizedState !== null;
              Tt || Gx();
            }
          }
          if (u & et) {
            try {
              dx(e);
            } catch (Qe) {
              ln(e, e.return, Qe);
            }
            IC(e);
          }
          return;
        }
        case Ie: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var k = Rr;
            Rr = k || ht, Yi(t, e), Rr = k;
          } else
            Yi(t, e);
          if (Ul(e), u & pl) {
            var j = e.stateNode, O = e.memoizedState, X = O !== null, Ce = e;
            if (j.isHidden = X, X && !ht && (Ce.mode & ct) !== He) {
              De = Ce;
              for (var he = Ce.child; he !== null; )
                De = he, mx(he), he = he.sibling;
            }
            ux(Ce, X);
          }
          return;
        }
        case ft: {
          Yi(t, e), Ul(e), u & et && IC(e);
          return;
        }
        case Ft:
          return;
        default: {
          Yi(t, e), Ul(e);
          return;
        }
      }
    }
    function Ul(e) {
      var t = e.flags;
      if (t & tn) {
        try {
          cx(e);
        } catch (a) {
          ln(e, e.return, a);
        }
        e.flags &= ~tn;
      }
      t & ma && (e.flags &= ~ma);
    }
    function hx(e, t, a) {
      Mf = a, Lf = t, De = e, WC(e, t, a), Mf = null, Lf = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & ct) !== He; De !== null; ) {
        var u = De, s = u.child;
        if (u.tag === Ie && i) {
          var f = u.memoizedState !== null, p = f || Em;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Rr, x = Em, _ = Rr;
            Em = p, Rr = g, Rr && !_ && (De = u, yx(u));
            for (var N = s; N !== null; )
              De = N, WC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            De = u, Em = x, Rr = _, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & or) !== Ae && s !== null ? (s.return = u, De = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & or) !== Ae) {
          var u = i.alternate;
          zt(i);
          try {
            ix(t, u, i, a);
          } catch (f) {
            ln(i, i.return, f);
          }
          yn();
        }
        if (i === e) {
          De = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, De = s;
          return;
        }
        De = i.return;
      }
    }
    function mx(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case oe:
          case re:
          case fe:
          case ge: {
            if (t.mode & Be)
              try {
                Al(), Bi(er, t, t.return);
              } finally {
                zl(t);
              }
            else
              Bi(er, t, t.return);
            break;
          }
          case J: {
            Nf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case W: {
            Nf(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              GC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : GC(e);
      }
    }
    function GC(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function yx(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            qC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : qC(e);
      }
    }
    function qC(e) {
      for (; De !== null; ) {
        var t = De;
        zt(t);
        try {
          lx(t);
        } catch (i) {
          ln(t, t.return, i);
        }
        if (yn(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function gx(e, t, a, i) {
      De = t, Sx(t, e, a, i);
    }
    function Sx(e, t, a, i) {
      for (; De !== null; ) {
        var u = De, s = u.child;
        (u.subtreeFlags & ya) !== Ae && s !== null ? (s.return = u, De = s) : Ex(e, t, a, i);
      }
    }
    function Ex(e, t, a, i) {
      for (; De !== null; ) {
        var u = De;
        if ((u.flags & on) !== Ae) {
          zt(u);
          try {
            Cx(t, u, a, i);
          } catch (f) {
            ln(u, u.return, f);
          }
          yn();
        }
        if (u === e) {
          De = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, De = s;
          return;
        }
        De = u.return;
      }
    }
    function Cx(e, t, a, i) {
      switch (t.tag) {
        case oe:
        case re:
        case ge: {
          if (t.mode & Be) {
            iS();
            try {
              No(Cr | Jn, t);
            } finally {
              aS(t);
            }
          } else
            No(Cr | Jn, t);
          break;
        }
      }
    }
    function Tx(e) {
      De = e, Rx();
    }
    function Rx() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Mt) !== Ae) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              De = u, xx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            De = e;
          }
        }
        (e.subtreeFlags & ya) !== Ae && t !== null ? (t.return = e, De = t) : _x();
      }
    }
    function _x() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & on) !== Ae && (zt(e), wx(e), yn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function wx(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          e.mode & Be ? (iS(), Bi(Cr | Jn, e, e.return), aS(e)) : Bi(Cr | Jn, e, e.return);
          break;
        }
      }
    }
    function xx(e, t) {
      for (; De !== null; ) {
        var a = De;
        zt(a), Dx(a, t), yn();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : bx(e);
      }
    }
    function bx(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = i, De = a;
          return;
        }
        De = i;
      }
    }
    function Dx(e, t) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          e.mode & Be ? (iS(), Bi(Cr, e, t), aS(e)) : Bi(Cr, e, t);
          break;
        }
      }
    }
    function kx(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          try {
            No(er | Jn, e);
          } catch (a) {
            ln(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            ln(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ox(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          try {
            No(Cr | Jn, e);
          } catch (t) {
            ln(e, e.return, t);
          }
          break;
        }
      }
    }
    function Mx(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge: {
          try {
            Bi(er | Jn, e, e.return);
          } catch (a) {
            ln(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function Lx(e) {
      switch (e.tag) {
        case oe:
        case re:
        case ge:
          try {
            Bi(Cr | Jn, e, e.return);
          } catch (t) {
            ln(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Nx = [];
    function zx() {
      Nx.forEach(function(e) {
        return e();
      });
    }
    var Ax = b.ReactCurrentActQueue;
    function Ux(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function KC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ax.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Fx = Math.ceil, kS = b.ReactCurrentDispatcher, OS = b.ReactCurrentOwner, wr = b.ReactCurrentBatchConfig, Ii = b.ReactCurrentActQueue, rr = (
      /*             */
      0
    ), XC = (
      /*               */
      1
    ), xr = (
      /*                */
      2
    ), pi = (
      /*                */
      4
    ), xu = 0, Ap = 1, Ps = 2, Tm = 3, Up = 4, ZC = 5, MS = 6, Ct = rr, ia = null, xn = null, ar = P, Fl = P, LS = _o(P), ir = xu, Fp = null, Rm = P, Hp = P, _m = P, Vp = null, Da = null, NS = 0, JC = 500, e1 = 1 / 0, Hx = 500, bu = null;
    function jp() {
      e1 = dn() + Hx;
    }
    function t1() {
      return e1;
    }
    var wm = !1, zS = null, zf = null, Bs = !1, Ao = null, Pp = P, AS = [], US = null, Vx = 50, Bp = 0, FS = null, HS = !1, xm = !1, jx = 50, Af = 0, bm = null, $p = Xt, Dm = P, n1 = !1;
    function km() {
      return ia;
    }
    function la() {
      return (Ct & (xr | pi)) !== rr ? dn() : ($p !== Xt || ($p = dn()), $p);
    }
    function Uo(e) {
      var t = e.mode;
      if ((t & ct) === He)
        return $e;
      if ((Ct & xr) !== rr && ar !== P)
        return zn(ar);
      var a = U_() !== A_;
      if (a) {
        if (wr.transition !== null) {
          var i = wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Dm === Et && (Dm = kd()), Dm;
      }
      var u = Ca();
      if (u !== Et)
        return u;
      var s = ER();
      return s;
    }
    function Px(e) {
      var t = e.mode;
      return (t & ct) === He ? $e : iy();
    }
    function lr(e, t, a, i) {
      fb(), n1 && S("useInsertionEffect must not schedule updates."), HS && (xm = !0), su(e, a, i), (Ct & xr) !== P && e === ia ? vb(t) : (Xn && zd(e, t, a), hb(t), e === ia && ((Ct & xr) === rr && (Hp = tt(Hp, a)), ir === Up && Fo(e, ar)), ka(e, i), a === $e && Ct === rr && (t.mode & ct) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ii.isBatchingLegacy && (jp(), tE()));
    }
    function Bx(e, t, a) {
      var i = e.current;
      i.lanes = t, su(e, t, a), ka(e, a);
    }
    function $x(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & xr) !== rr
      );
    }
    function ka(e, t) {
      var a = e.callbackNode;
      ny(e, t);
      var i = ps(e, e === ia ? ar : P);
      if (i === P) {
        a !== null && g1(a), e.callbackNode = null, e.callbackPriority = Et;
        return;
      }
      var u = Dn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ii.current !== null && a !== IS)) {
        a == null && s !== $e && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && g1(a);
      var f;
      if (u === $e)
        e.tag === wo ? (Ii.isBatchingLegacy !== null && (Ii.didScheduleLegacyUpdate = !0), g_(i1.bind(null, e))) : eE(i1.bind(null, e)), Ii.current !== null ? Ii.current.push(xo) : TR(function() {
          (Ct & (xr | pi)) === rr && xo();
        }), f = null;
      else {
        var p;
        switch (gs(i)) {
          case sr:
            p = gc;
            break;
          case Zn:
            p = ta;
            break;
          case Oi:
            p = ri;
            break;
          case ms:
            p = hl;
            break;
          default:
            p = ri;
            break;
        }
        f = QS(p, r1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function r1(e, t) {
      if (fw(), $p = Xt, Dm = P, (Ct & (xr | pi)) !== rr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ku();
      if (i && e.callbackNode !== a)
        return null;
      var u = ps(e, e === ia ? ar : P);
      if (u === P)
        return null;
      var s = !hs(e, u) && !Pv(e, u) && !t, f = s ? Jx(e, u) : Mm(e, u);
      if (f !== xu) {
        if (f === Ps) {
          var p = bd(e);
          p !== P && (u = p, f = VS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw $s(e, P), Fo(e, u), ka(e, dn()), v;
        }
        if (f === MS)
          Fo(e, u);
        else {
          var y = !hs(e, u), g = e.current.alternate;
          if (y && !Ix(g)) {
            if (f = Mm(e, u), f === Ps) {
              var x = bd(e);
              x !== P && (u = x, f = VS(e, x));
            }
            if (f === Ap) {
              var _ = Fp;
              throw $s(e, P), Fo(e, u), ka(e, dn()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Yx(e, f, u);
        }
      }
      return ka(e, dn()), e.callbackNode === a ? r1.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Vp;
      if (Un(e)) {
        var i = $s(e, t);
        i.flags |= gn, f_(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Ps) {
        var s = Da;
        Da = a, s !== null && a1(s);
      }
      return u;
    }
    function a1(e) {
      Da === null ? Da = e : Da.push.apply(Da, e);
    }
    function Yx(e, t, a) {
      switch (t) {
        case xu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ps: {
          Ys(e, Da, bu);
          break;
        }
        case Tm: {
          if (Fo(e, a), Bc(a) && // do not delay if we're inside an act() scope
          !S1()) {
            var i = NS + JC - dn();
            if (i > 10) {
              var u = ps(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!ou(s, a)) {
                la(), Ld(e, s);
                break;
              }
              e.timeoutHandle = Uy(Ys.bind(null, e, Da, bu), i);
              break;
            }
          }
          Ys(e, Da, bu);
          break;
        }
        case Up: {
          if (Fo(e, a), jv(a))
            break;
          if (!S1()) {
            var f = Vv(e, a), p = f, v = dn() - p, y = cb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(Ys.bind(null, e, Da, bu), y);
              break;
            }
          }
          Ys(e, Da, bu);
          break;
        }
        case ZC: {
          Ys(e, Da, bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ix(e) {
      for (var t = e; ; ) {
        if (t.flags & ls) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!be(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ls && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Fo(e, t) {
      t = lo(t, _m), t = lo(t, Hp), Md(e, t);
    }
    function i1(e) {
      if (dw(), (Ct & (xr | pi)) !== rr)
        throw new Error("Should not already be working.");
      ku();
      var t = ps(e, P);
      if (!$r(t, $e))
        return ka(e, dn()), null;
      var a = Mm(e, t);
      if (e.tag !== wo && a === Ps) {
        var i = bd(e);
        i !== P && (t = i, a = VS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw $s(e, P), Fo(e, t), ka(e, dn()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ys(e, Da, bu), ka(e, dn()), null;
    }
    function Qx(e, t) {
      t !== P && (uo(e, tt(t, $e)), ka(e, dn()), (Ct & (xr | pi)) === rr && (jp(), xo()));
    }
    function jS(e, t) {
      var a = Ct;
      Ct |= XC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === rr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ii.isBatchingLegacy && (jp(), tE());
      }
    }
    function Wx(e, t, a, i, u) {
      var s = Ca(), f = wr.transition;
      try {
        return wr.transition = null, An(sr), e(t, a, i, u);
      } finally {
        An(s), wr.transition = f, Ct === rr && jp();
      }
    }
    function Du(e) {
      Ao !== null && Ao.tag === wo && (Ct & (xr | pi)) === rr && ku();
      var t = Ct;
      Ct |= XC;
      var a = wr.transition, i = Ca();
      try {
        return wr.transition = null, An(sr), e ? e() : void 0;
      } finally {
        An(i), wr.transition = a, Ct = t, (Ct & (xr | pi)) === rr && xo();
      }
    }
    function l1() {
      return (Ct & (xr | pi)) !== rr;
    }
    function Om(e, t) {
      Ir(LS, Fl, e), Fl = tt(Fl, t);
    }
    function PS(e) {
      Fl = LS.current, Yr(LS, e);
    }
    function $s(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, CR(a)), xn !== null)
        for (var i = xn.return; i !== null; ) {
          var u = i.alternate;
          AC(u, i), i = i.return;
        }
      ia = e;
      var s = Is(e.current, null);
      return xn = s, ar = Fl = t, ir = xu, Fp = null, Rm = P, Hp = P, _m = P, Vp = null, Da = null, j_(), Fi.discardPendingWarnings(), s;
    }
    function u1(e, t) {
      do {
        var a = xn;
        try {
          if (Hh(), FE(), yn(), OS.current = null, a === null || a.return === null) {
            ir = Ap, Fp = t, xn = null;
            return;
          }
          if (rt && a.mode & Be && mm(a, !0), dt)
            if (Jl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Uv(a, i, ar);
            } else
              Rc(a, t, ar);
          yw(e, a.return, a, t, ar), f1(a);
        } catch (u) {
          t = u, xn === a && a !== null ? (a = a.return, xn = a) : a = xn;
          continue;
        }
        return;
      } while (!0);
    }
    function o1() {
      var e = kS.current;
      return kS.current = fm, e === null ? fm : e;
    }
    function s1(e) {
      kS.current = e;
    }
    function Gx() {
      NS = dn();
    }
    function Yp(e) {
      Rm = tt(e, Rm);
    }
    function qx() {
      ir === xu && (ir = Tm);
    }
    function BS() {
      (ir === xu || ir === Tm || ir === Ps) && (ir = Up), ia !== null && (vs(Rm) || vs(Hp)) && Fo(ia, ar);
    }
    function Kx(e) {
      ir !== Up && (ir = Ps), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Xx() {
      return ir === xu;
    }
    function Mm(e, t) {
      var a = Ct;
      Ct |= xr;
      var i = o1();
      if (ia !== e || ar !== t) {
        if (Xn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, ar), u.clear()), Ic(e, t);
        }
        bu = Ad(), $s(e, t);
      }
      Ya(t);
      do
        try {
          Zx();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      if (Hh(), Ct = a, s1(i), xn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return to(), ia = null, ar = P, ir;
    }
    function Zx() {
      for (; xn !== null; )
        c1(xn);
    }
    function Jx(e, t) {
      var a = Ct;
      Ct |= xr;
      var i = o1();
      if (ia !== e || ar !== t) {
        if (Xn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, ar), u.clear()), Ic(e, t);
        }
        bu = Ad(), jp(), $s(e, t);
      }
      Ya(t);
      do
        try {
          eb();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      return Hh(), s1(i), Ct = a, xn !== null ? (ss(), xu) : (to(), ia = null, ar = P, ir);
    }
    function eb() {
      for (; xn !== null && !yc(); )
        c1(xn);
    }
    function c1(e) {
      var t = e.alternate;
      zt(e);
      var a;
      (e.mode & Be) !== He ? (rS(e), a = $S(t, e, Fl), mm(e, !0)) : a = $S(t, e, Fl), yn(), e.memoizedProps = e.pendingProps, a === null ? f1(e) : xn = a, OS.current = null;
    }
    function f1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Zr) === Ae) {
          zt(t);
          var u = void 0;
          if ((t.mode & Be) === He ? u = zC(a, t, Fl) : (rS(t), u = zC(a, t, Fl), mm(t, !1)), yn(), u !== null) {
            xn = u;
            return;
          }
        } else {
          var s = qw(a, t);
          if (s !== null) {
            s.flags &= bv, xn = s;
            return;
          }
          if ((t.mode & Be) !== He) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Zr, i.subtreeFlags = Ae, i.deletions = null;
          else {
            ir = MS, xn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          xn = v;
          return;
        }
        t = i, xn = t;
      } while (t !== null);
      ir === xu && (ir = ZC);
    }
    function Ys(e, t, a) {
      var i = Ca(), u = wr.transition;
      try {
        wr.transition = null, An(sr), tb(e, t, a, i);
      } finally {
        wr.transition = u, An(i);
      }
      return null;
    }
    function tb(e, t, a, i) {
      do
        ku();
      while (Ao !== null);
      if (db(), (Ct & (xr | pi)) !== rr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ec(s), u === null)
        return Td(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Et;
      var f = tt(u.lanes, u.childLanes);
      Nd(e, f), e === ia && (ia = null, xn = null, ar = P), ((u.subtreeFlags & ya) !== Ae || (u.flags & ya) !== Ae) && (Bs || (Bs = !0, US = a, QS(ri, function() {
        return ku(), null;
      })));
      var p = (u.subtreeFlags & (Zu | Vr | or | ya)) !== Ae, v = (u.flags & (Zu | Vr | or | ya)) !== Ae;
      if (p || v) {
        var y = wr.transition;
        wr.transition = null;
        var g = Ca();
        An(sr);
        var x = Ct;
        Ct |= pi, OS.current = null, ex(e, u), oC(), vx(e, u, s), vR(e.containerInfo), e.current = u, Fv(s), hx(u, e, s), eo(), Ov(), Ct = x, An(g), wr.transition = y;
      } else
        e.current = u, oC();
      var _ = Bs;
      if (Bs ? (Bs = !1, Ao = e, Pp = s) : (Af = 0, bm = null), f = e.pendingLanes, f === P && (zf = null), _ || h1(e.current, !1), bi(u.stateNode, i), Xn && e.memoizedUpdaters.clear(), zx(), ka(e, dn()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var V = t[A], Ee = V.stack, Ue = V.digest;
          N(V.value, {
            componentStack: Ee,
            digest: Ue
          });
        }
      if (wm) {
        wm = !1;
        var Le = zS;
        throw zS = null, Le;
      }
      return $r(Pp, $e) && e.tag !== wo && ku(), f = e.pendingLanes, $r(f, $e) ? (cw(), e === FS ? Bp++ : (Bp = 0, FS = e)) : Bp = 0, xo(), Td(), null;
    }
    function ku() {
      if (Ao !== null) {
        var e = gs(Pp), t = uy(Oi, e), a = wr.transition, i = Ca();
        try {
          return wr.transition = null, An(t), rb();
        } finally {
          An(i), wr.transition = a;
        }
      }
      return !1;
    }
    function nb(e) {
      AS.push(e), Bs || (Bs = !0, QS(ri, function() {
        return ku(), null;
      }));
    }
    function rb() {
      if (Ao === null)
        return !1;
      var e = US;
      US = null;
      var t = Ao, a = Pp;
      if (Ao = null, Pp = P, (Ct & (xr | pi)) !== rr)
        throw new Error("Cannot flush passive effects while already rendering.");
      HS = !0, xm = !1, Hv(a);
      var i = Ct;
      Ct |= pi, Tx(t.current), gx(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ax(t, f);
        }
      }
      os(), h1(t.current, !0), Ct = i, xo(), xm ? t === bm ? Af++ : (Af = 0, bm = t) : Af = 0, HS = !1, xm = !1, yl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function d1(e) {
      return zf !== null && zf.has(e);
    }
    function ab(e) {
      zf === null ? zf = /* @__PURE__ */ new Set([e]) : zf.add(e);
    }
    function ib(e) {
      wm || (wm = !0, zS = e);
    }
    var lb = ib;
    function p1(e, t, a) {
      var i = Vs(a, t), u = cC(e, i, $e), s = Do(e, u, $e), f = la();
      s !== null && (su(s, $e, f), ka(s, f));
    }
    function ln(e, t, a) {
      if (Xw(a), Qp(!1), e.tag === B) {
        p1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          p1(i, e, a);
          return;
        } else if (i.tag === J) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !d1(s)) {
            var f = Vs(a, e), p = sS(i, f, $e), v = Do(i, p, $e), y = la();
            v !== null && (su(v, $e, y), ka(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ub(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = la();
      Ld(e, a), mb(e), ia === e && ou(ar, a) && (ir === Up || ir === Tm && Bc(ar) && dn() - NS < JC ? $s(e, P) : _m = tt(_m, a)), ka(e, u);
    }
    function v1(e, t) {
      t === Et && (t = Px(e));
      var a = la(), i = xa(e, t);
      i !== null && (su(i, t, a), ka(i, a));
    }
    function ob(e) {
      var t = e.memoizedState, a = Et;
      t !== null && (a = t.retryLane), v1(e, a);
    }
    function sb(e, t) {
      var a = Et, i;
      switch (e.tag) {
        case U:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ft:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), v1(e, a);
    }
    function cb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Fx(e / 1960) * 1960;
    }
    function fb() {
      if (Bp > Vx)
        throw Bp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Af > jx && (Af = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function db() {
      Fi.flushLegacyContextWarning(), Fi.flushPendingUnsafeLifecycleWarnings();
    }
    function h1(e, t) {
      zt(e), Lm(e, Hr, Mx), t && Lm(e, Zl, Lx), Lm(e, Hr, kx), t && Lm(e, Zl, Ox), yn();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ae ? i = i.child : ((i.flags & t) !== Ae && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Nm = null;
    function m1(e) {
      {
        if ((Ct & xr) !== rr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== Re && t !== B && t !== J && t !== oe && t !== re && t !== fe && t !== ge)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Nm !== null) {
          if (Nm.has(a))
            return;
          Nm.add(a);
        } else
          Nm = /* @__PURE__ */ new Set([a]);
        var i = fn;
        try {
          zt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? zt(e) : yn();
        }
      }
    }
    var $S;
    {
      var pb = null;
      $S = function(e, t, a) {
        var i = _1(pb, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (x_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Hh(), FE(), AC(e, t), _1(t, i), t.mode & Be && rS(t), Xl(null, kC, null, e, t, a), ey()) {
            var u = fd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var y1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function vb(e) {
      if (Nr && !uw())
        switch (e.tag) {
          case oe:
          case re:
          case ge: {
            var t = xn && Ke(xn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case J: {
            y1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), y1 = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (Xn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zd(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = Ii.current;
        return a !== null ? (a.push(t), IS) : mc(e, t);
      }
    }
    function g1(e) {
      if (e !== IS)
        return kv(e);
    }
    function S1() {
      return Ii.current !== null;
    }
    function hb(e) {
      {
        if (e.mode & ct) {
          if (!KC())
            return;
        } else if (!Ux() || Ct !== rr || e.tag !== oe && e.tag !== re && e.tag !== ge)
          return;
        if (Ii.current === null) {
          var t = fn;
          try {
            zt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? zt(e) : yn();
          }
        }
      }
    }
    function mb(e) {
      e.tag !== wo && KC() && Ii.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      n1 = e;
    }
    var vi = null, Uf = null, yb = function(e) {
      vi = e;
    };
    function Ff(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Ff(e);
    }
    function GS(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Ff(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: mn,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function E1(e, t) {
      {
        if (vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case J: {
            typeof i == "function" && (u = !0);
            break;
          }
          case oe: {
            (typeof i == "function" || s === qn) && (u = !0);
            break;
          }
          case re: {
            (s === mn || s === qn) && (u = !0);
            break;
          }
          case fe:
          case ge: {
            (s === Ki || s === qn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = vi(a);
          if (f !== void 0 && f === vi(i))
            return !0;
        }
        return !1;
      }
    }
    function C1(e) {
      {
        if (vi === null || typeof WeakSet != "function")
          return;
        Uf === null && (Uf = /* @__PURE__ */ new WeakSet()), Uf.add(e);
      }
    }
    var gb = function(e, t) {
      {
        if (vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ku(), Du(function() {
          qS(e.current, i, a);
        });
      }
    }, Sb = function(e, t) {
      {
        if (e.context !== Qa)
          return;
        ku(), Du(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case oe:
          case ge:
          case J:
            v = p;
            break;
          case re:
            v = p.render;
            break;
        }
        if (vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = vi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === J ? g = !0 : y = !0));
        }
        if (Uf !== null && (Uf.has(e) || i !== null && Uf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = xa(e, $e);
          _ !== null && lr(_, e, $e, Xt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var Eb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case oe:
          case ge:
          case J:
            p = f;
            break;
          case re:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Cb(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function Cb(e, t) {
      {
        var a = Tb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case W:
              t.add(i.stateNode);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Tb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === W)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var T1 = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function Rb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ae, this.subtreeFlags = Ae, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Wa = function(e, t, a, i) {
      return new Rb(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _b(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function wb(e) {
      if (typeof e == "function")
        return ZS(e) ? J : oe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === mn)
          return re;
        if (t === Ki)
          return fe;
      }
      return Re;
    }
    function Is(e, t) {
      var a = e.alternate;
      a === null ? (a = Wa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ae, a.subtreeFlags = Ae, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Kn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Re:
        case oe:
        case ge:
          a.type = Ff(e.type);
          break;
        case J:
          a.type = WS(e.type);
          break;
        case re:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function xb(e, t) {
      e.flags &= Kn | tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = Ae, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ae, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function bb(e, t, a) {
      var i;
      return e === Oh ? (i = ct, t === !0 && (i |= pn, i |= Sa)) : i = He, Xn && (i |= Be), Wa(B, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Re, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = J, p = WS(p)) : p = Ff(p);
      else if (typeof e == "string")
        f = W;
      else
        e:
          switch (e) {
            case Ua:
              return Ho(a.children, u, s, t);
            case Gi:
              f = $, u |= pn, (u & ct) !== He && (u |= Sa);
              break;
            case qi:
              return Db(a, u, s, t);
            case ca:
              return kb(a, u, s, t);
            case Pl:
              return Ob(a, u, s, t);
            case Po:
              return R1(a, u, s, t);
            case Xs:
            case qs:
            case Vf:
            case jf:
            case Ks:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Nu:
                    f = mt;
                    break e;
                  case jo:
                    f = _t;
                    break e;
                  case mn:
                    f = re, p = GS(p);
                    break e;
                  case Ki:
                    f = fe;
                    break e;
                  case qn:
                    f = it, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ke(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = Wa(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ho(e, t, a, i) {
      var u = Wa(de, e, i, t);
      return u.lanes = a, u;
    }
    function Db(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Wa(ae, e, i, t | Be);
      return u.elementType = qi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function kb(e, t, a, i) {
      var u = Wa(U, e, i, t);
      return u.elementType = ca, u.lanes = a, u;
    }
    function Ob(e, t, a, i) {
      var u = Wa(ft, e, i, t);
      return u.elementType = Pl, u.lanes = a, u;
    }
    function R1(e, t, a, i) {
      var u = Wa(Ie, e, i, t);
      u.elementType = Po, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = Wa(ie, e, null, t);
      return i.lanes = a, i;
    }
    function Mb() {
      var e = Wa(W, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function Lb(e) {
      var t = Wa(gt, null, null, He);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Wa(Z, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function _1(e, t) {
      return e === null && (e = Wa(Re, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Nb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Et, this.eventTimes = Yc(P), this.expirationTimes = Yc(Xt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Yc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < rn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Oh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case wo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function w1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Nb(e, t, a, p, v), x = bb(t, s);
      g.current = x, x.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = _;
      }
      return cg(x), g;
    }
    var r0 = "18.2.0";
    function zb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return hi(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function x1(e) {
      if (!e)
        return Qa;
      var t = va(e), a = y_(t);
      if (t.tag === J) {
        var i = t.type;
        if (Ol(i))
          return Z0(t, i, a);
      }
      return a;
    }
    function Ab(e, t) {
      {
        var a = va(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ga(a);
        if (u === null)
          return null;
        if (u.mode & pn) {
          var s = Ke(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = fn;
            try {
              zt(u), a.mode & pn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? zt(f) : yn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function b1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return w1(e, t, v, y, a, i, u, s, f);
    }
    function D1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = w1(a, i, g, e, u, s, f, p, v);
      x.context = x1(null);
      var _ = x.current, N = la(), A = Uo(_), V = _u(N, A);
      return V.callback = t ?? null, Do(_, V, A), Bx(x, A, N), x;
    }
    function Wp(e, t, a, i) {
      Mv(t, e);
      var u = t.current, s = la(), f = Uo(u);
      eu(f);
      var p = x1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Nr && fn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(fn) || "Unknown"));
      var v = _u(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Do(u, v, f);
      return y !== null && (lr(y, u, f, s), $h(y, u, f)), f;
    }
    function zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case W:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Ub(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (Un(t)) {
            var a = ry(t);
            Qx(t, a);
          }
          break;
        }
        case U: {
          Du(function() {
            var u = xa(e, $e);
            if (u !== null) {
              var s = la();
              lr(u, e, $e, s);
            }
          });
          var i = $e;
          l0(e, i);
          break;
        }
      }
    }
    function k1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function l0(e, t) {
      k1(e, t);
      var a = e.alternate;
      a && k1(a, t);
    }
    function Fb(e) {
      if (e.tag === U) {
        var t = no, a = xa(e, t);
        if (a !== null) {
          var i = la();
          lr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function Hb(e) {
      if (e.tag === U) {
        var t = Uo(e), a = xa(e, t);
        if (a !== null) {
          var i = la();
          lr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function O1(e) {
      var t = Dv(e);
      return t === null ? null : t.stateNode;
    }
    var M1 = function(e) {
      return null;
    };
    function Vb(e) {
      return M1(e);
    }
    var L1 = function(e) {
      return !1;
    };
    function jb(e) {
      return L1(e);
    }
    var N1 = null, z1 = null, A1 = null, U1 = null, F1 = null, H1 = null, V1 = null, j1 = null, P1 = null;
    {
      var B1 = function(e, t, a) {
        var i = t[a], u = St(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = B1(e[i], t, a + 1), u);
      }, $1 = function(e, t) {
        return B1(e, t, 0);
      }, Y1 = function(e, t, a, i) {
        var u = t[i], s = St(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], St(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Y1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, I1 = function(e, t, a) {
        if (t.length !== a.length) {
          we("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              we("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Y1(e, t, a, 0);
      }, Q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = St(e) ? e.slice() : ot({}, e);
        return s[u] = Q1(e[u], t, a + 1, i), s;
      }, W1 = function(e, t, a) {
        return Q1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      N1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = W1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = xa(e, $e);
          f !== null && lr(f, e, $e, Xt);
        }
      }, z1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = $1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = xa(e, $e);
          s !== null && lr(s, e, $e, Xt);
        }
      }, A1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = I1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = xa(e, $e);
          f !== null && lr(f, e, $e, Xt);
        }
      }, U1 = function(e, t, a) {
        e.pendingProps = W1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = xa(e, $e);
        i !== null && lr(i, e, $e, Xt);
      }, F1 = function(e, t) {
        e.pendingProps = $1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = xa(e, $e);
        a !== null && lr(a, e, $e, Xt);
      }, H1 = function(e, t, a) {
        e.pendingProps = I1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = xa(e, $e);
        i !== null && lr(i, e, $e, Xt);
      }, V1 = function(e) {
        var t = xa(e, $e);
        t !== null && lr(t, e, $e, Xt);
      }, j1 = function(e) {
        M1 = e;
      }, P1 = function(e) {
        L1 = e;
      };
    }
    function Pb(e) {
      var t = ga(e);
      return t === null ? null : t.stateNode;
    }
    function Bb(e) {
      return null;
    }
    function $b() {
      return fn;
    }
    function Yb(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return Ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: N1,
        overrideHookStateDeletePath: z1,
        overrideHookStateRenamePath: A1,
        overrideProps: U1,
        overridePropsDeletePath: F1,
        overridePropsRenamePath: H1,
        setErrorHandler: j1,
        setSuspenseHandler: P1,
        scheduleUpdate: V1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Pb,
        findFiberByHostInstance: t || Bb,
        // React Refresh
        findHostInstancesForRefresh: Eb,
        scheduleRefresh: gb,
        scheduleRoot: Sb,
        setRefreshHandler: yb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: $b,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var G1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== bn) {
          var i = O1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Am.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        l1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Wp(null, e, null, null);
        }), W0(t);
      }
    };
    function Ib(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      q1(e);
      var a = !1, i = !1, u = "", s = G1;
      t != null && (t.hydrate ? we("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Wi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = b1(e, Oh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === bn ? e.parentNode : e;
      return tp(p), new o0(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function Qb(e) {
      e && Xv(e);
    }
    Am.prototype.unstable_scheduleHydration = Qb;
    function Wb(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      q1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = G1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = D1(t, null, e, Oh, i, s, f, p, v);
      if (Rh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          tw(y, x);
        }
      return new Am(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === Pa || e.nodeType === Il || !pe));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === Pa || e.nodeType === Il || e.nodeType === bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function q1(e) {
      e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Gb = b.ReactCurrentOwner, K1;
    K1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== bn) {
        var t = O1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && Ro(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Pa ? e.documentElement : e.firstChild : null;
    }
    function X1() {
    }
    function qb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = zm(f);
            s.call(_);
          };
        }
        var f = D1(
          t,
          i,
          e,
          wo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          X1
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === bn ? e.parentNode : e;
        return tp(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = zm(g);
            y.call(_);
          };
        }
        var g = b1(
          e,
          wo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          X1
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var x = e.nodeType === bn ? e.parentNode : e;
        return tp(x), Du(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Kb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Fm(e, t, a, i, u) {
      K1(a), Kb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = qb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = zm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return zm(f);
    }
    function Xb(e) {
      {
        var t = Gb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ar ? e : Ab(e, "findDOMNode");
    }
    function Zb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Fm(null, e, t, !0, a);
    }
    function Jb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Fm(null, e, t, !1, a);
    }
    function eD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !is(e))
        throw new Error("parentComponent must be a valid React Component");
      return Fm(e, t, a, !1, i);
    }
    function tD(e) {
      if (!Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !Ro(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          Fm(null, null, e, !1, function() {
            e._reactRootContainer = null, W0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && Ro(u)), f = e.nodeType === Ar && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _e(Ub), Iv(Fb), Es(Hb), Fd(Ca), Wv(ys), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), wv(aR), fc(jS, Wx, Du);
    function nD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return zb(e, t, null, a);
    }
    function rD(e, t, a, i) {
      return eD(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ro, vf, _h, cc, ns, jS]
    };
    function aD(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ib(e, t);
    }
    function iD(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Wb(e, t, a);
    }
    function lD(e) {
      return l1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var uD = Yb({
      findFiberByHostInstance: Os,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!uD && Wt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Z1 = window.location.protocol;
      /^(https?|file):$/.test(Z1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Z1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ma.createPortal = nD, Ma.createRoot = aD, Ma.findDOMNode = Xb, Ma.flushSync = lD, Ma.hydrate = Zb, Ma.hydrateRoot = iD, Ma.render = Jb, Ma.unmountComponentAtNode = tD, Ma.unstable_batchedUpdates = jS, Ma.unstable_renderSubtreeIntoContainer = rD, Ma.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ma;
}
function ST() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ST);
    } catch (M) {
      console.error(M);
    }
  }
}
process.env.NODE_ENV === "production" ? (ST(), gD()) : SD();
var Xp = Qs();
const fT = Symbol.for("react-redux-context"), dT = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ED() {
  var M;
  if (!Xp.createContext)
    return {};
  const Q = (M = dT[fT]) != null ? M : dT[fT] = /* @__PURE__ */ new Map();
  let b = Q.get(Xp.createContext);
  return b || (b = Xp.createContext(null), process.env.NODE_ENV !== "production" && (b.displayName = "ReactRedux"), Q.set(Xp.createContext, b)), b;
}
const Zp = /* @__PURE__ */ ED();
function ET(M = Zp) {
  return function() {
    const b = Xp.useContext(M);
    if (process.env.NODE_ENV !== "production" && !b)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return b;
  };
}
const CD = /* @__PURE__ */ ET();
var g0 = { exports: {} }, $t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function TD() {
  if (pT)
    return $t;
  pT = 1;
  var M = typeof Symbol == "function" && Symbol.for, Q = M ? Symbol.for("react.element") : 60103, b = M ? Symbol.for("react.portal") : 60106, Ve = M ? Symbol.for("react.fragment") : 60107, Ye = M ? Symbol.for("react.strict_mode") : 60108, we = M ? Symbol.for("react.profiler") : 60114, S = M ? Symbol.for("react.provider") : 60109, nt = M ? Symbol.for("react.context") : 60110, oe = M ? Symbol.for("react.async_mode") : 60111, J = M ? Symbol.for("react.concurrent_mode") : 60111, Re = M ? Symbol.for("react.forward_ref") : 60112, B = M ? Symbol.for("react.suspense") : 60113, Z = M ? Symbol.for("react.suspense_list") : 60120, W = M ? Symbol.for("react.memo") : 60115, ie = M ? Symbol.for("react.lazy") : 60116, de = M ? Symbol.for("react.block") : 60121, $ = M ? Symbol.for("react.fundamental") : 60117, _t = M ? Symbol.for("react.responder") : 60118, mt = M ? Symbol.for("react.scope") : 60119;
  function re(U) {
    if (typeof U == "object" && U !== null) {
      var fe = U.$$typeof;
      switch (fe) {
        case Q:
          switch (U = U.type, U) {
            case oe:
            case J:
            case Ve:
            case we:
            case Ye:
            case B:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case nt:
                case Re:
                case ie:
                case W:
                case S:
                  return U;
                default:
                  return fe;
              }
          }
        case b:
          return fe;
      }
    }
  }
  function ae(U) {
    return re(U) === J;
  }
  return $t.AsyncMode = oe, $t.ConcurrentMode = J, $t.ContextConsumer = nt, $t.ContextProvider = S, $t.Element = Q, $t.ForwardRef = Re, $t.Fragment = Ve, $t.Lazy = ie, $t.Memo = W, $t.Portal = b, $t.Profiler = we, $t.StrictMode = Ye, $t.Suspense = B, $t.isAsyncMode = function(U) {
    return ae(U) || re(U) === oe;
  }, $t.isConcurrentMode = ae, $t.isContextConsumer = function(U) {
    return re(U) === nt;
  }, $t.isContextProvider = function(U) {
    return re(U) === S;
  }, $t.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === Q;
  }, $t.isForwardRef = function(U) {
    return re(U) === Re;
  }, $t.isFragment = function(U) {
    return re(U) === Ve;
  }, $t.isLazy = function(U) {
    return re(U) === ie;
  }, $t.isMemo = function(U) {
    return re(U) === W;
  }, $t.isPortal = function(U) {
    return re(U) === b;
  }, $t.isProfiler = function(U) {
    return re(U) === we;
  }, $t.isStrictMode = function(U) {
    return re(U) === Ye;
  }, $t.isSuspense = function(U) {
    return re(U) === B;
  }, $t.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === Ve || U === J || U === we || U === Ye || U === B || U === Z || typeof U == "object" && U !== null && (U.$$typeof === ie || U.$$typeof === W || U.$$typeof === S || U.$$typeof === nt || U.$$typeof === Re || U.$$typeof === $ || U.$$typeof === _t || U.$$typeof === mt || U.$$typeof === de);
  }, $t.typeOf = re, $t;
}
var Yt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT;
function RD() {
  return vT || (vT = 1, process.env.NODE_ENV !== "production" && function() {
    var M = typeof Symbol == "function" && Symbol.for, Q = M ? Symbol.for("react.element") : 60103, b = M ? Symbol.for("react.portal") : 60106, Ve = M ? Symbol.for("react.fragment") : 60107, Ye = M ? Symbol.for("react.strict_mode") : 60108, we = M ? Symbol.for("react.profiler") : 60114, S = M ? Symbol.for("react.provider") : 60109, nt = M ? Symbol.for("react.context") : 60110, oe = M ? Symbol.for("react.async_mode") : 60111, J = M ? Symbol.for("react.concurrent_mode") : 60111, Re = M ? Symbol.for("react.forward_ref") : 60112, B = M ? Symbol.for("react.suspense") : 60113, Z = M ? Symbol.for("react.suspense_list") : 60120, W = M ? Symbol.for("react.memo") : 60115, ie = M ? Symbol.for("react.lazy") : 60116, de = M ? Symbol.for("react.block") : 60121, $ = M ? Symbol.for("react.fundamental") : 60117, _t = M ? Symbol.for("react.responder") : 60118, mt = M ? Symbol.for("react.scope") : 60119;
    function re(Te) {
      return typeof Te == "string" || typeof Te == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Te === Ve || Te === J || Te === we || Te === Ye || Te === B || Te === Z || typeof Te == "object" && Te !== null && (Te.$$typeof === ie || Te.$$typeof === W || Te.$$typeof === S || Te.$$typeof === nt || Te.$$typeof === Re || Te.$$typeof === $ || Te.$$typeof === _t || Te.$$typeof === mt || Te.$$typeof === de);
    }
    function ae(Te) {
      if (typeof Te == "object" && Te !== null) {
        var Wt = Te.$$typeof;
        switch (Wt) {
          case Q:
            var ve = Te.type;
            switch (ve) {
              case oe:
              case J:
              case Ve:
              case we:
              case Ye:
              case B:
                return ve;
              default:
                var Cn = ve && ve.$$typeof;
                switch (Cn) {
                  case nt:
                  case Re:
                  case ie:
                  case W:
                  case S:
                    return Cn;
                  default:
                    return Wt;
                }
            }
          case b:
            return Wt;
        }
      }
    }
    var U = oe, fe = J, ge = nt, it = S, yt = Q, gt = Re, ft = Ve, Ft = ie, Ie = W, Je = b, Lt = we, lt = Ye, Se = B, ee = !1;
    function Oe(Te) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(Te) || ae(Te) === oe;
    }
    function T(Te) {
      return ae(Te) === J;
    }
    function I(Te) {
      return ae(Te) === nt;
    }
    function pe(Te) {
      return ae(Te) === S;
    }
    function We(Te) {
      return typeof Te == "object" && Te !== null && Te.$$typeof === Q;
    }
    function je(Te) {
      return ae(Te) === Re;
    }
    function dt(Te) {
      return ae(Te) === Ve;
    }
    function rt(Te) {
      return ae(Te) === ie;
    }
    function pt(Te) {
      return ae(Te) === W;
    }
    function at(Te) {
      return ae(Te) === b;
    }
    function Nt(Te) {
      return ae(Te) === we;
    }
    function qr(Te) {
      return ae(Te) === Ye;
    }
    function Vn(Te) {
      return ae(Te) === B;
    }
    Yt.AsyncMode = U, Yt.ConcurrentMode = fe, Yt.ContextConsumer = ge, Yt.ContextProvider = it, Yt.Element = yt, Yt.ForwardRef = gt, Yt.Fragment = ft, Yt.Lazy = Ft, Yt.Memo = Ie, Yt.Portal = Je, Yt.Profiler = Lt, Yt.StrictMode = lt, Yt.Suspense = Se, Yt.isAsyncMode = Oe, Yt.isConcurrentMode = T, Yt.isContextConsumer = I, Yt.isContextProvider = pe, Yt.isElement = We, Yt.isForwardRef = je, Yt.isFragment = dt, Yt.isLazy = rt, Yt.isMemo = pt, Yt.isPortal = at, Yt.isProfiler = Nt, Yt.isStrictMode = qr, Yt.isSuspense = Vn, Yt.isValidElementType = re, Yt.typeOf = ae;
  }()), Yt;
}
process.env.NODE_ENV === "production" ? g0.exports = TD() : g0.exports = RD();
var _D = g0.exports, CT = _D, wD = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xD = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, TT = {};
TT[CT.ForwardRef] = wD;
TT[CT.Memo] = xD;
var It = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function bD() {
  if (hT)
    return It;
  hT = 1;
  var M = Symbol.for("react.element"), Q = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), S = Symbol.for("react.context"), nt = Symbol.for("react.server_context"), oe = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ie;
  ie = Symbol.for("react.module.reference");
  function de($) {
    if (typeof $ == "object" && $ !== null) {
      var _t = $.$$typeof;
      switch (_t) {
        case M:
          switch ($ = $.type, $) {
            case b:
            case Ye:
            case Ve:
            case J:
            case Re:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case nt:
                case S:
                case oe:
                case Z:
                case B:
                case we:
                  return $;
                default:
                  return _t;
              }
          }
        case Q:
          return _t;
      }
    }
  }
  return It.ContextConsumer = S, It.ContextProvider = we, It.Element = M, It.ForwardRef = oe, It.Fragment = b, It.Lazy = Z, It.Memo = B, It.Portal = Q, It.Profiler = Ye, It.StrictMode = Ve, It.Suspense = J, It.SuspenseList = Re, It.isAsyncMode = function() {
    return !1;
  }, It.isConcurrentMode = function() {
    return !1;
  }, It.isContextConsumer = function($) {
    return de($) === S;
  }, It.isContextProvider = function($) {
    return de($) === we;
  }, It.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === M;
  }, It.isForwardRef = function($) {
    return de($) === oe;
  }, It.isFragment = function($) {
    return de($) === b;
  }, It.isLazy = function($) {
    return de($) === Z;
  }, It.isMemo = function($) {
    return de($) === B;
  }, It.isPortal = function($) {
    return de($) === Q;
  }, It.isProfiler = function($) {
    return de($) === Ye;
  }, It.isStrictMode = function($) {
    return de($) === Ve;
  }, It.isSuspense = function($) {
    return de($) === J;
  }, It.isSuspenseList = function($) {
    return de($) === Re;
  }, It.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === b || $ === Ye || $ === Ve || $ === J || $ === Re || $ === W || typeof $ == "object" && $ !== null && ($.$$typeof === Z || $.$$typeof === B || $.$$typeof === we || $.$$typeof === S || $.$$typeof === oe || $.$$typeof === ie || $.getModuleId !== void 0);
  }, It.typeOf = de, It;
}
var Qt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function DD() {
  return mT || (mT = 1, process.env.NODE_ENV !== "production" && function() {
    var M = Symbol.for("react.element"), Q = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), S = Symbol.for("react.context"), nt = Symbol.for("react.server_context"), oe = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ie = !1, de = !1, $ = !1, _t = !1, mt = !1, re;
    re = Symbol.for("react.module.reference");
    function ae(ve) {
      return !!(typeof ve == "string" || typeof ve == "function" || ve === b || ve === Ye || mt || ve === Ve || ve === J || ve === Re || _t || ve === W || ie || de || $ || typeof ve == "object" && ve !== null && (ve.$$typeof === Z || ve.$$typeof === B || ve.$$typeof === we || ve.$$typeof === S || ve.$$typeof === oe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ve.$$typeof === re || ve.getModuleId !== void 0));
    }
    function U(ve) {
      if (typeof ve == "object" && ve !== null) {
        var Cn = ve.$$typeof;
        switch (Cn) {
          case M:
            var Mn = ve.type;
            switch (Mn) {
              case b:
              case Ye:
              case Ve:
              case J:
              case Re:
                return Mn;
              default:
                var Tn = Mn && Mn.$$typeof;
                switch (Tn) {
                  case nt:
                  case S:
                  case oe:
                  case Z:
                  case B:
                  case we:
                    return Tn;
                  default:
                    return Cn;
                }
            }
          case Q:
            return Cn;
        }
      }
    }
    var fe = S, ge = we, it = M, yt = oe, gt = b, ft = Z, Ft = B, Ie = Q, Je = Ye, Lt = Ve, lt = J, Se = Re, ee = !1, Oe = !1;
    function T(ve) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(ve) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(ve) {
      return U(ve) === S;
    }
    function We(ve) {
      return U(ve) === we;
    }
    function je(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === M;
    }
    function dt(ve) {
      return U(ve) === oe;
    }
    function rt(ve) {
      return U(ve) === b;
    }
    function pt(ve) {
      return U(ve) === Z;
    }
    function at(ve) {
      return U(ve) === B;
    }
    function Nt(ve) {
      return U(ve) === Q;
    }
    function qr(ve) {
      return U(ve) === Ye;
    }
    function Vn(ve) {
      return U(ve) === Ve;
    }
    function Te(ve) {
      return U(ve) === J;
    }
    function Wt(ve) {
      return U(ve) === Re;
    }
    Qt.ContextConsumer = fe, Qt.ContextProvider = ge, Qt.Element = it, Qt.ForwardRef = yt, Qt.Fragment = gt, Qt.Lazy = ft, Qt.Memo = Ft, Qt.Portal = Ie, Qt.Profiler = Je, Qt.StrictMode = Lt, Qt.Suspense = lt, Qt.SuspenseList = Se, Qt.isAsyncMode = T, Qt.isConcurrentMode = I, Qt.isContextConsumer = pe, Qt.isContextProvider = We, Qt.isElement = je, Qt.isForwardRef = dt, Qt.isFragment = rt, Qt.isLazy = pt, Qt.isMemo = at, Qt.isPortal = Nt, Qt.isProfiler = qr, Qt.isStrictMode = Vn, Qt.isSuspense = Te, Qt.isSuspenseList = Wt, Qt.isValidElementType = ae, Qt.typeOf = U;
  }()), Qt;
}
process.env.NODE_ENV === "production" ? bD() : DD();
function RT(M = Zp) {
  const Q = (
    // @ts-ignore
    M === Zp ? CD : (
      // @ts-ignore
      ET(M)
    )
  );
  return function() {
    const {
      store: Ve
    } = Q();
    return Ve;
  };
}
const kD = /* @__PURE__ */ RT();
function OD(M = Zp) {
  const Q = (
    // @ts-ignore
    M === Zp ? kD : RT(M)
  );
  return function() {
    return Q().dispatch;
  };
}
const MD = /* @__PURE__ */ OD();
function LD(M) {
  return `${M[0].toUpperCase()}${M.substring(1)}`;
}
function UD(M) {
  const Q = MD();
  return Object.entries(M).reduce(
    (b, [Ve, Ye]) => ({
      ...b,
      [`dispatch${LD(Ve)}`]: function(we) {
        Q(Ye(we));
      }
    }),
    {}
  );
}
export {
  UD as useOzDispatchActions
};
