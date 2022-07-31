/*! For license information please see src_components_navbar_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_components_navbar_js"],{"./src/components/navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/badge/index.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/cartStore */ "./src/store/cartStore.js");\n\n\n\n\n\n\nconst Navbar = ({\n  history\n}) => {\n  const [path, focusPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [cartItems] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const listen = history.listen(() => {\n      window.scrollTo(0, 0);\n      focusPath(window.location.pathname);\n    });\n    return () => {\n      listen();\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "fixed z-10 bottom-0 left-0 justify-center flex space-x-16 space-x-reverse w-screen shadow-light rounded-lg p-3 bg-[#dae0e0]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: "/shop/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: `h-8 w-8 hover:text-[#cead94] ${path == \'/\' ? \'text-[#946958]\' : \'text-gray-400\'}`,\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", {\n    points: "5 12 3 12 12 3 21 12 19 12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {\n    x: "10",\n    y: "12",\n    width: "4",\n    height: "4"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: "/shop/cart/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    count: cartItems.items.length,\n    color: "#cfa278"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: `h-8 w-8 hover:text-[#cead94] ${path == \'/cart\' ? \'text-[#946958]\' : \'text-gray-400\'}`,\n    fill: "none",\n    viewBox: "0 0 24 24",\n    stroke: "currentColor"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round",\n    "stroke-width": "2",\n    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: "/shop/profile/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: `h-8 w-8 hover:text-[#cead94] ${path == \'/profile\' ? \'text-[#946958]\' : \'text-gray-400\'}`,\n    viewBox: "0 0 24 24",\n    fill: "none",\n    stroke: "currentColor",\n    "stroke-width": "2",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {\n    cx: "12",\n    cy: "7",\n    r: "4"\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(Navbar));\n\n//# sourceURL=webpack://shop/./src/components/navbar.js?')},"./src/store/cartStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/store/create.js\");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/components/hook.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\nconst CartStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    items: JSON.parse(localStorage.getItem('cartStore'))?.items || []\n  },\n  actions: {\n    addOrIncreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      const exist = currentItems.find(item => itemData.id === item.id);\n\n      if (exist) {\n        currentItems.map(each => {\n          if (itemData.id == each.id) {\n            return { ...each,\n              count: each.count++\n            };\n          }\n        });\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems]\n        }));\n        setState({\n          items: [...currentItems]\n        });\n      } else {\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        }));\n        setState({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        });\n      }\n    },\n    removeOrDecreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      let currentItems = getState().items;\n      currentItems.map((each, index) => {\n        if (itemData.id == each.id) {\n          const nextCount = each.count--;\n\n          if (nextCount == 1) {\n            currentItems = [];\n          } else {\n            return { ...each,\n              count: nextCount\n            };\n          }\n        }\n      });\n      localStorage.setItem('cartStore', JSON.stringify({\n        items: [...currentItems]\n      }));\n      setState({\n        items: [...currentItems]\n      });\n    }\n  },\n  name: 'items'\n});\nconst useCart = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(CartStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);\n\n//# sourceURL=webpack://shop/./src/store/cartStore.js?")}}]);