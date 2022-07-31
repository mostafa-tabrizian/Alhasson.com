/*! For license information please see src_pages_order_paymentMethod_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_order_paymentMethod_js"],{"./src/pages/order/paymentMethod.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/cartStore */ "./src/store/cartStore.js");\n\n\n\n\n\nconst PaymentMethod = () => {\n  const [loadState, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalDiscount, setTotalDiscount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [shippingCost, setShippingCost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(15_000);\n  const [allProductsData, setAllProductsData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const allProductsDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);\n  const [cartItems, cartActions] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchData();\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    calculatePrice();\n    setLoaded(true);\n  }, [cartItems, allProductsData]);\n\n  const fetchData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\'/api/productView/\').then(res => {\n      setAllProductsData(res.data);\n      allProductsDataRef.current = res.data;\n    }).catch(err => {\n      log(err.response);\n    });\n  };\n\n  const calculatePrice = () => {\n    let totalPrice = 0;\n    let totalDiscount = 0;\n    allProductsDataRef.current.length && cartItems.items.map(product => {\n      const productData = allProductsDataRef.current.find(each => each.id === product.id);\n      const itemPrice = product.count * productData.price;\n      const itemDiscount = product.count * (productData.price * productData.discount / 100);\n      totalPrice += itemPrice;\n      totalDiscount += itemDiscount;\n      return itemPrice - itemDiscount;\n    });\n    setTotalPrice(totalPrice);\n    setTotalDiscount(totalDiscount);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-5 md:mx-[25rem] m-auto mb-20 space-y-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "text-center font-bold"\n  }, "\\u0631\\u0648\\u0634 \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "absolute top-0 left-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: "/shop/cart/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "grid grid-cols-3 gap-6"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "px-2 py-5 shadow-light rounded-lg flex justify-center text-center items-center"\n  }, "\\u0632\\u0631\\u06CC\\u0646 \\u067E\\u0627\\u0644")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\\u06A9\\u062F \\u062A\\u062E\\u0641\\u06CC\\u0641"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    type: "text",\n    className: "rounded-lg border ml-3"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "\\uD83D\\uDC7E"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-y-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u062A\\u062E\\u0641\\u06CC\\u0641 \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold text-red-400"\n  }, totalDiscount, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0642\\u06CC\\u0645\\u062A \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, totalPrice, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0647\\u0632\\u06CC\\u0646\\u0647 \\u0627\\u0631\\u0633\\u0627\\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, shippingCost, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0645\\u0628\\u0644\\u063A \\u0642\\u0627\\u0628\\u0644 \\u067E\\u0631\\u062F\\u0627\\u062E\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, totalPrice - totalDiscount + shippingCost, " \\u062A\\u0648\\u0645\\u0627\\u0646"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "bg-[#cfa278] w-full py-2 rounded-xl font-semibold"\n  }, "\\u067E\\u0631\\u062F\\u0627\\u062E\\u062A")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethod);\n\n//# sourceURL=webpack://shop/./src/pages/order/paymentMethod.js?')},"./src/store/cartStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/store/create.js\");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/components/hook.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\nconst CartStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    items: JSON.parse(localStorage.getItem('cartStore'))?.items || []\n  },\n  actions: {\n    addOrIncreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      const exist = currentItems.find(item => itemData.id === item.id);\n\n      if (exist) {\n        currentItems.map(each => {\n          if (itemData.id == each.id) {\n            return { ...each,\n              count: each.count++\n            };\n          }\n        });\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems]\n        }));\n        setState({\n          items: [...currentItems]\n        });\n      } else {\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        }));\n        setState({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        });\n      }\n    },\n    removeOrDecreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      currentItems.map((each, index) => {\n        if (itemData.id == each.id) {\n          const nextCount = each.count--;\n\n          if (nextCount == 0) {\n            currentItems.splice(index, 1);\n          } else {\n            return { ...each,\n              count: nextCount\n            };\n          }\n        }\n      });\n      localStorage.setItem('cartStore', JSON.stringify({\n        items: [...currentItems]\n      }));\n      setState({\n        items: [...currentItems]\n      });\n    }\n  },\n  name: 'items'\n});\nconst useCart = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(CartStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);\n\n//# sourceURL=webpack://shop/./src/store/cartStore.js?")}}]);