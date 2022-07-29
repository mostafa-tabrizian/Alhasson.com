/*! For license information please see src_pages_product_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_product_js"],{"./src/pages/product.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/cartStore */ "./src/store/cartStore.js");\n\n\n\n\n\n\nconst Product = () => {\n  const [productDetail, setProductDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [cartItems, cartActions] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_3__["default"])();\n\n  const fetchProductDetail = () => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/productView/?slug=${(0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__.takeParameterFromUrl)(\'slug\')}`).then(res => {\n      setProductDetail(res.data[0]);\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__.log)(err.response);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchProductDetail();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-5 md:mx-[25rem] m-auto mb-20 space-y-10 relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: "/shop/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278] mr-auto",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center mb-10 w-[90vw] h-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    src: productDetail?.image,\n    alt: `${productDetail?.slug}-${productDetail?.title}`\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "font-semibold"\n  }, productDetail?.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n    className: "text-xl"\n  }, productDetail?.price, " \\u062A\\u0648\\u0645\\u0627\\u0646"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n    className: "mb-5"\n  }, "\\u0645\\u0634\\u062E\\u0635\\u0627\\u062A \\u0641\\u0646\\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-y-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0648\\u0632\\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, productDetail?.weight, " \\u06AF\\u0631\\u0645"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n    className: "mb-5"\n  }, "\\u0645\\u0639\\u0631\\u0641\\u06CC \\u0627\\u062C\\u0645\\u0627\\u0644\\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    dangerouslySetInnerHTML: {\n      __html: productDetail?.description\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "bg-[#cfa278] justify-between rounded-3xl mx-2 my-5 flex px-7 py-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold text-black"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\\u0627\\u0641\\u0632\\u0648\\u062F\\u0646 \\u0628\\u0647 \\u0633\\u0628\\u062F \\u062E\\u0631\\u06CC\\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-x-3 space-x-reverse text-xl "\n  }, cartItems.items.find(item => productDetail?.id == item.id)?.count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: () => cartActions.removeOrDecreaseItem(productDetail)\n  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, cartItems.items.find(item => productDetail?.id == item.id)?.count)) : \'\', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: () => cartActions.addOrIncreaseItem(productDetail)\n  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-black",\n    viewBox: "0 0 24 24",\n    fill: "none",\n    stroke: "currentColor",\n    "stroke-width": "2",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {\n    cx: "9",\n    cy: "21",\n    r: "1"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {\n    cx: "20",\n    cy: "21",\n    r: "1"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"\n  })))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n//# sourceURL=webpack://shop/./src/pages/product.js?')},"./src/store/cartStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/store/create.js\");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/components/hook.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\nconst CartStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    items: JSON.parse(localStorage.getItem('cartStore')).items || []\n  },\n  actions: {\n    addOrIncreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      const exist = currentItems.find(item => itemData.id === item.id);\n\n      if (exist) {\n        currentItems.map(each => {\n          if (itemData.id == each.id) {\n            return { ...each,\n              count: each.count++\n            };\n          }\n        });\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems]\n        }));\n        setState({\n          items: [...currentItems]\n        });\n      } else {\n        localStorage.setItem('cartStore', JSON.stringify({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        }));\n        setState({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        });\n      }\n    },\n    removeOrDecreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      currentItems.map((each, index) => {\n        if (itemData.id == each.id) {\n          const nextCount = each.count--;\n\n          if (nextCount == 0) {\n            currentItems.splice(index, 1);\n          } else {\n            return { ...each,\n              count: nextCount\n            };\n          }\n        }\n      });\n      localStorage.setItem('cartStore', JSON.stringify({\n        items: [...currentItems]\n      }));\n      setState({\n        items: [...currentItems]\n      });\n    }\n  },\n  name: 'items'\n});\nconst useCart = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(CartStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);\n\n//# sourceURL=webpack://shop/./src/store/cartStore.js?")}}]);