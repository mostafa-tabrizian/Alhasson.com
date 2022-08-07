/*! For license information please see src_pages_order_orders_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_order_orders_js"],{"../frontend/src/components/loadingScreen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\nconst LoadingScreen = props => {\n  return /*#__PURE__*/React.createElement("div", {\n    className: `\n            fixed left-0 backdrop-blur-3xl backdrop-brightness-75\n            top-0 w-screen h-screen z-20 ${props.loading ? \'fadeIn\' : \'fadeOut z-[-1]\'}\n            flex items-center justify-center\n        `\n  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {\n    class: "animate-spin h-10 w-10 m-10 text-yellow-500",\n    xmlns: "http://www.w3.org/2000/svg",\n    fill: "none",\n    viewBox: "0 0 24 24"\n  }, /*#__PURE__*/React.createElement("circle", {\n    class: "opacity-25",\n    cx: "12",\n    cy: "12",\n    r: "10",\n    stroke: "currentColor",\n    "stroke-width": "4"\n  }), /*#__PURE__*/React.createElement("path", {\n    class: "opacity-75",\n    fill: "currentColor",\n    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n\n//# sourceURL=webpack://shop/../frontend/src/components/loadingScreen.js?')},"./src/components/axiosApi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-cache-adapter */ \"./node_modules/axios-cache-adapter/dist/cache.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = \"X-CSRFTOKEN\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = \"csrftoken\";\nconst cache = (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__.setupCache)({\n  maxAge: 15 * 60 * 1000,\n  exclude: {\n    query: false\n  }\n});\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  timeout: 5000,\n  headers: {\n    'Authorization': \"JWT \" + (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN'),\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  },\n  adapter: cache.adapter\n});\naxiosInstance.interceptors.response.use(response => response, error => {\n  const originalRequest = error.config;\n\n  if (String(error).includes('timeout ')) {\n    antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error('لطفا اتصال اینترنت خود را بررسی کنید!');\n  }\n\n  if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000' + '/token/refresh/') {\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 1'); // window.location.href = '/login';\n\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    const refreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n\n    if (refreshToken) {\n      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));\n      const now = Math.ceil(Date.now() / 1000);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/api/token/refresh/', {\n          refresh: refreshToken\n        }).then(res => {\n          document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + res.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + res.data.access;\n          return axiosInstance(originalRequest);\n        }).catch(err => {\n          document.cookie = `USER_ACCESS_TOKEN=; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=; path=/;`;\n          (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 2'); // window.location.href = '/login';\n        });\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 3'); // window.location.href = '/login';\n      }\n    } else {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 4'); // window.location.href = '/login';\n    }\n  }\n\n  return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n//# sourceURL=webpack://shop/./src/components/axiosApi.js?")},"./src/pages/order/orders.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");\n/* harmony import */ var persian_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! persian-date */ "./node_modules/persian-date/dist/persian-date.js");\n/* harmony import */ var persian_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(persian_date__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_axiosApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/axiosApi */ "./src/components/axiosApi.js");\n/* harmony import */ var _frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../frontend/src/components/loadingScreen */ "../frontend/src/components/loadingScreen.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\npersian_date__WEBPACK_IMPORTED_MODULE_2___default().toLocale(\'fa\');\n\n\n\n\nconst Orders = () => {\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [userOrders, setUserOrders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__["default"])([\'USER_ACCESS_TOKEN\']);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchUserOrders();\n    setLoading(false);\n  }, []);\n  const fetchUserOrders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(async () => {\n    const payload = {\n      userAccessToken: cookies.USER_ACCESS_TOKEN\n    };\n    const now = new Date().getTime();\n    await _components_axiosApi__WEBPACK_IMPORTED_MODULE_3__["default"].post(`/shop/api/user/orders?timestamp=${now}`, payload).then(res => {\n      setUserOrders(res.data);\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_5__.log)(err);\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_5__.log)(err.response);\n    });\n  }));\n\n  const returnUserOrders = () => {\n    return userOrders.map(order => {\n      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {\n        className: "flex justify-between"\n      }, /*#__PURE__*/React.createElement("h4", {\n        className: "space-x-3 space-x-reverse"\n      }, /*#__PURE__*/React.createElement("span", {\n        className: "text-gray-500"\n      }, "\\u06A9\\u062F \\u067E\\u06CC\\u06AF\\u06CC\\u0631\\u06CC \\u0633\\u0641\\u0627\\u0631\\u0634:"), /*#__PURE__*/React.createElement("span", null, order.id)), /*#__PURE__*/React.createElement("h4", {\n        className: "space-x-3 space-x-reverse"\n      }, /*#__PURE__*/React.createElement("span", {\n        className: "text-gray-500"\n      }, "\\u0648\\u0636\\u0639\\u06CC\\u062A \\u0633\\u0641\\u0627\\u0631\\u0634:"), /*#__PURE__*/React.createElement("span", null, order.status))), /*#__PURE__*/React.createElement("h4", {\n        className: "space-x-3 space-x-reverse"\n      }, /*#__PURE__*/React.createElement("span", {\n        className: "text-gray-500"\n      }, "\\u062A\\u0627\\u0631\\u06CC\\u062E \\u062B\\u0628\\u062A \\u0633\\u0641\\u0627\\u0631\\u0634:"), /*#__PURE__*/React.createElement("span", null, new (persian_date__WEBPACK_IMPORTED_MODULE_2___default())(order.created_at).format(\'DD MMMM YYYY\'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {\n        className: "text-gray-500"\n      }, "\\u0639\\u0646\\u0627\\u0648\\u06CC\\u0646 \\u062E\\u0631\\u06CC\\u062F\\u0627\\u0631\\u06CC \\u0634\\u062F\\u0647:"), /*#__PURE__*/React.createElement("div", {\n        className: "flex space-x-3 space-x-reverse"\n      }, "item item")), /*#__PURE__*/React.createElement("div", {\n        className: ""\n      }, /*#__PURE__*/React.createElement("h4", {\n        className: "space-x-3 space-x-reverse"\n      }, /*#__PURE__*/React.createElement("span", {\n        className: "text-gray-500"\n      }, "\\u0645\\u0628\\u0644\\u063A \\u0645\\u0631\\u0633\\u0648\\u0644\\u0647:"), /*#__PURE__*/React.createElement("span", null, order.price))), /*#__PURE__*/React.createElement("hr", null));\n    });\n  };\n\n  return /*#__PURE__*/React.createElement("div", {\n    className: "mx-5 md:mx-[25rem] m-auto pb-24 space-y-10"\n  }, /*#__PURE__*/React.createElement(_frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    loading: loading\n  }), /*#__PURE__*/React.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/React.createElement("h1", {\n    className: "font-bold text-center"\n  }, "\\u062A\\u0627\\u0631\\u06CC\\u062E\\u0686\\u0647 \\u0633\\u0641\\u0627\\u0631\\u0634\\u0627\\u062A"), /*#__PURE__*/React.createElement("div", {\n    className: "absolute top-0 left-0"\n  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: "/shop/profile/"\n  }, /*#__PURE__*/React.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/React.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/React.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/React.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/React.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/React.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  }))))), /*#__PURE__*/React.createElement("div", null, returnUserOrders()));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);\n\n//# sourceURL=webpack://shop/./src/pages/order/orders.js?')}}]);