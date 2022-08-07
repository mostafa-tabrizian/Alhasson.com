/*! For license information please see src_pages_order_payment_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_order_payment_js"],{"../frontend/node_modules/object-assign/index.js":module=>{eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://shop/../frontend/node_modules/object-assign/index.js?")},"../frontend/node_modules/react/cjs/react.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{eval('/** @license React v17.0.2\n * react.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar l=__webpack_require__(/*! object-assign */ "../frontend/node_modules/object-assign/index.js"),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;\nif("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;\nfunction y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}\nvar A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};\nfunction D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};\nfunction J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}\nfunction K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}\nfunction O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=\n0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}\nfunction Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};\nexports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;\nexports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,\nkey:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;\nexports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};\nexports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";\n\n\n//# sourceURL=webpack://shop/../frontend/node_modules/react/cjs/react.production.min.js?')},"../frontend/node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "../frontend/node_modules/react/cjs/react.production.min.js");\n} else {}\n\n\n//# sourceURL=webpack://shop/../frontend/node_modules/react/index.js?')},"../frontend/src/components/loadingScreen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\nconst LoadingScreen = props => {\n  return /*#__PURE__*/React.createElement("div", {\n    className: `\n            fixed left-0 backdrop-blur-3xl backdrop-brightness-75\n            top-0 w-screen h-screen z-20 ${props.loading ? \'fadeIn\' : \'fadeOut z-[-1]\'}\n            flex items-center justify-center\n        `\n  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {\n    class: "animate-spin h-10 w-10 m-10 text-yellow-500",\n    xmlns: "http://www.w3.org/2000/svg",\n    fill: "none",\n    viewBox: "0 0 24 24"\n  }, /*#__PURE__*/React.createElement("circle", {\n    class: "opacity-25",\n    cx: "12",\n    cy: "12",\n    r: "10",\n    stroke: "currentColor",\n    "stroke-width": "4"\n  }), /*#__PURE__*/React.createElement("path", {\n    class: "opacity-75",\n    fill: "currentColor",\n    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n\n//# sourceURL=webpack://shop/../frontend/src/components/loadingScreen.js?')},"./src/components/axiosApi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-cache-adapter */ \"./node_modules/axios-cache-adapter/dist/cache.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = \"X-CSRFTOKEN\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = \"csrftoken\";\nconst cache = (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__.setupCache)({\n  maxAge: 15 * 60 * 1000,\n  exclude: {\n    query: false\n  }\n});\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  timeout: 5000,\n  headers: {\n    'Authorization': \"JWT \" + (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN'),\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  },\n  adapter: cache.adapter\n});\naxiosInstance.interceptors.response.use(response => response, error => {\n  const originalRequest = error.config;\n\n  if (String(error).includes('timeout ')) {\n    antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error('لطفا اتصال اینترنت خود را بررسی کنید!');\n  }\n\n  if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000' + '/token/refresh/') {\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 1'); // window.location.href = '/login';\n\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    const refreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n\n    if (refreshToken) {\n      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));\n      const now = Math.ceil(Date.now() / 1000);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/api/token/refresh/', {\n          refresh: refreshToken\n        }).then(res => {\n          document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + res.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + res.data.access;\n          return axiosInstance(originalRequest);\n        }).catch(err => {\n          document.cookie = `USER_ACCESS_TOKEN=; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=; path=/;`;\n          (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 2'); // window.location.href = '/login';\n        });\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 3'); // window.location.href = '/login';\n      }\n    } else {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 4'); // window.location.href = '/login';\n    }\n  }\n\n  return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n//# sourceURL=webpack://shop/./src/components/axiosApi.js?")},"./src/pages/order/payment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cartStore */ "./src/store/cartStore.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../frontend/src/components/loadingScreen */ "../frontend/src/components/loadingScreen.js");\n/* harmony import */ var _components_axiosApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/axiosApi */ "./src/components/axiosApi.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");\n/* harmony import */ var _store_userStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/userStore */ "./src/store/userStore.js");\n\n\n\n\n\n\n\n\n\n\n\n\nconst Payment = () => {\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalDiscount, setTotalDiscount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [couponDiscount, setCouponDiscount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [shippingCost, setShippingCost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(15_000);\n  const [allProductsData, setAllProductsData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__["default"])([\'USER_ACCESS_TOKEN\', \'USER_REFRESH_TOKEN\']);\n  const allProductsDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);\n  const couponCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const [cartItems, cartActions] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_3__["default"])();\n  const [userProfile, userActions] = (0,_store_userStore__WEBPACK_IMPORTED_MODULE_7__["default"])();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setLoading(true);\n    fetchData();\n    setLoading(false);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    ifNotLoggedInRedirectToLoginPage();\n  }, [userProfile]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    calculatePrice();\n  }, [cartItems, allProductsData]);\n\n  const ifNotLoggedInRedirectToLoginPage = async () => {\n    if (!userProfile.userDetail) {\n      window.location.href = \'/shop/login/\';\n    }\n  };\n\n  const fetchData = async () => {\n    const now = new Date().getTime();\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/productView/?timestamp=${now}`).then(res => {\n      setAllProductsData(res.data);\n      allProductsDataRef.current = res.data;\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err.response);\n    });\n  };\n\n  const completeOrder = async () => {\n    const payload = {\n      userAccessToken: cookies.USER_ACCESS_TOKEN,\n      purchased_items: cartItems.items,\n      price: totalPrice,\n      discount: totalDiscount\n    };\n    await _components_axiosApi__WEBPACK_IMPORTED_MODULE_6__["default"].post(\'/shop/api/order/submit\', payload).then(res => {\n      if (res.data = "order completed successfully") {\n        setLoading(true);\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].success(\'خرید شما با موفقیت ثبت شد\');\n        setTimeout(() => {\n          cartActions.resetCart();\n          window.location.reload(); // redirect to order info in history\n        }, 1000); // send us a message for noticing the order\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(\'its res\');\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(res);\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'خطایی رخ داده است. لطفا بعدا تلاش کنید.\');\n      }\n    }).catch(err => {\n      antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'خطایی رخ داده است. لطفا بعدا تلاش کنید.\');\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err);\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err.response);\n    });\n  };\n\n  const calculatePrice = () => {\n    let totalPrice = 0;\n    let totalDiscount = 0;\n    allProductsDataRef.current.length && cartItems.items.map(product => {\n      const productData = allProductsDataRef.current.find(each => each.id === product.id);\n      const itemPrice = product.count * productData.price;\n      const itemDiscount = product.count * (productData.price * productData.discount / 100);\n      totalPrice += itemPrice;\n      totalDiscount += itemDiscount;\n      return itemPrice - itemDiscount;\n    });\n    setTotalPrice(totalPrice);\n    setTotalDiscount(totalDiscount);\n  };\n\n  const checkCouponCode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(async () => {\n    const couponCode = couponCodeRef.current.value;\n    const payload = {\n      code: couponCode\n    };\n    await _components_axiosApi__WEBPACK_IMPORTED_MODULE_6__["default"].post(\'/shop/api/coupon\', payload).then(res => {\n      if (res.data == \'کد تخفیف وجود ندارد\') {\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'کد تخفیف وجود ندارد\');\n      } else {\n        const discountAmount = res.data;\n        setCouponDiscount((totalPrice - totalDiscount) * discountAmount / 100);\n      }\n    });\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    loading: loading\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-5 md:mx-[25rem] m-auto pb-20 space-y-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "font-bold text-center"\n  }, "\\u0631\\u0648\\u0634 \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "absolute top-0 left-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {\n    to: "/shop/checkout/cart/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex items-center justify-center px-3 py-4 text-center rounded-lg shadow-light"\n  }, "\\u062F\\u0631 \\u062D\\u0627\\u0644 \\u062D\\u0627\\u0636\\u0631 \\u062F\\u0631\\u06AF\\u0627\\u0647 \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A \\u0622\\u0646\\u0644\\u0627\\u06CC\\u0646 \\u063A\\u06CC\\u0631\\u0641\\u0639\\u0627\\u0644 \\u0645\\u06CC\\u200C\\u0628\\u0627\\u0634\\u062F\\u060C \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A \\u0627\\u0632 \\u062F\\u0631\\u0628 \\u0645\\u0646\\u0632\\u0644 \\u0627\\u0646\\u062C\\u0627\\u0645 \\u0645\\u06CC\\u200C\\u06AF\\u0631\\u062F\\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\\u06A9\\u062F \\u062A\\u062E\\u0641\\u06CC\\u0641"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    type: "text",\n    ref: couponCodeRef,\n    className: "pl-3 ml-3 text-black border rounded-lg ltr"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: checkCouponCode\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    viewBox: "0 0 24 24",\n    fill: "none",\n    stroke: "currentColor",\n    "stroke-width": "2",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {\n    x: "3",\n    y: "3",\n    width: "18",\n    height: "18",\n    rx: "2",\n    ry: "2"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "12",\n    y1: "8",\n    x2: "12",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "8",\n    y1: "12",\n    x2: "16",\n    y2: "12"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-y-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u062A\\u062E\\u0641\\u06CC\\u0641 \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold text-red-400"\n  }, totalDiscount + couponDiscount, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0642\\u06CC\\u0645\\u062A \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, totalPrice, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0647\\u0632\\u06CC\\u0646\\u0647 \\u0627\\u0631\\u0633\\u0627\\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, shippingCost, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0645\\u0628\\u0644\\u063A \\u0642\\u0627\\u0628\\u0644 \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, totalPrice - (totalDiscount + couponDiscount) + shippingCost, " \\u062A\\u0648\\u0645\\u0627\\u0646"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: completeOrder,\n    className: "bg-[#cfa278] w-full py-2 rounded-xl font-semibold"\n  }, "\\u062B\\u0628\\u062A \\u0646\\u0647\\u0627\\u06CC\\u06CC \\u0633\\u0641\\u0627\\u0631\\u0634"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);\n\n//# sourceURL=webpack://shop/./src/pages/order/payment.js?')},"./src/store/cartStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/store/create.js\");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/components/hook.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\nconst CartStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    items: JSON.parse(localStorage.getItem('cartStore'))?.items || []\n  },\n  actions: {\n    addOrIncreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      const exist = currentItems.find(item => itemData.id === item.id);\n\n      if (exist) {\n        currentItems.map(each => {\n          if (itemData.id == each.id && itemData.available_count !== each.count) {\n            return { ...each,\n              count: each.count++\n            };\n          }\n        });\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems]\n        }));\n        setState({\n          items: [...currentItems]\n        });\n      } else {\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        }));\n        setState({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        });\n      }\n    },\n    removeOrDecreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      let currentItems = getState().items;\n      currentItems.map((each, index) => {\n        if (itemData.id == each.id) {\n          const nextCount = each.count--;\n\n          if (nextCount == 1) {\n            currentItems.splice(index, 1);\n          } else {\n            return { ...each,\n              count: nextCount\n            };\n          }\n        }\n      });\n      localStorage.setItem('cartStore', JSON.stringify({\n        items: [...currentItems]\n      }));\n      setState({\n        items: [...currentItems]\n      });\n    },\n    resetCart: () => ({\n      setState\n    }) => {\n      let currentItems = [];\n      localStorage.setItem('cartStore', JSON.stringify({\n        items: [...currentItems]\n      }));\n      setState({\n        items: [...currentItems]\n      });\n    }\n  },\n  name: 'items'\n});\nconst useCart = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(CartStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);\n\n//# sourceURL=webpack://shop/./src/store/cartStore.js?")},"./src/store/userStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ "./node_modules/react-sweet-state/lib/esm/store/create.js");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ "./node_modules/react-sweet-state/lib/esm/components/hook.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n\n\nconst UserStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    userDetail: {}\n  },\n  actions: {\n    setUser: userDetail => ({\n      setState,\n      getState\n    }) => {\n      setState({\n        userDetail\n      });\n    },\n    resetUser: () => ({\n      setState,\n      getState\n    }) => {\n      setState({});\n    }\n  },\n  name: \'userDetail\'\n});\nconst useUser = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(UserStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);\n\n//# sourceURL=webpack://shop/./src/store/userStore.js?')}}]);