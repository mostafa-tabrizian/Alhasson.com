/*! For license information please see src_components_order_cart_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_components_order_cart_js"],{"./src/components/order/cart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/cartStore */ "./src/store/cartStore.js");\n/* harmony import */ var _productCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productCart */ "./src/components/order/productCart.js");\n\n\n\n\n\n\nconst Cart = () => {\n  const [allProducts, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [cartItems, cartActions] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchData();\n  }, []);\n\n  const fetchData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\'/api/productView/\').then(res => {\n      setProducts(res.data);\n      setLoad(true);\n    }).catch(err => {\n      log(err.response);\n    });\n  };\n\n  const calculatePrice = (productId, count) => {\n    cartItems.items.map(product => {\n      const productData = allProducts.find(each => each.id === productId);\n      const itemPrice = count * (productData.price - productData.price * productData.discount / 100);\n      return itemPrice;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-5 md:mx-[25rem] m-auto mb-20 space-y-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "font-bold text-center"\n  }, "\\u0633\\u0628\\u062F \\u062E\\u0631\\u06CC\\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "absolute top-0 left-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: "/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "border border-[#cfa278] rounded-lg px-3 py-2 text-center"\n  }, "\\u0634\\u0645\\u0627 ", cartItems.items.length, " \\u06A9\\u062A\\u0627\\u0628 \\u062F\\u0631 \\u0633\\u0628\\u062F \\u062E\\u0648\\u062F \\u062F\\u0627\\u0631\\u06CC\\u062F."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_productCart__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    allProducts: allProducts\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-y-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u0642\\u06CC\\u0645\\u062A \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, " \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u062A\\u062E\\u0641\\u06CC\\u0641 \\u06A9\\u0627\\u0644\\u0627 \\u0647\\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, "10,000 \\u062A\\u0648\\u0645\\u0627\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-zinc-400"\n  }, "\\u062C\\u0645\\u0639 \\u06A9\\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "font-semibold"\n  }, "40,000 \\u062A\\u0648\\u0645\\u0627\\u0646"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center bg-[#cfa278] w-full py-2 rounded-xl font-semibold"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: "/payment-method"\n  }, "\\u0627\\u062F\\u0627\\u0645\\u0647 \\u0641\\u0631\\u0627\\u06CC\\u0646\\u062F \\u062E\\u0631\\u06CC\\u062F")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://shop/./src/components/order/cart.js?')},"./src/components/order/productCart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_cartStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/cartStore */ "./src/store/cartStore.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\n\nconst ProductCart = props => {\n  const [cartItems, cartActions] = (0,_store_cartStore__WEBPACK_IMPORTED_MODULE_2__["default"])();\n\n  const priceWithDiscount = (price, discount) => {\n    return price - price * discount / 100;\n  };\n\n  return cartItems.items.map(product => {\n    const productData = props.allProducts.find(each => each.id === product.id);\n    return /*#__PURE__*/React.createElement("div", {\n      className: "flex"\n    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      to: `/shop/${productData && (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_3__.replaceFunction)(productData?.title, \' \', \'-\')}?slug=${productData?.slug}`,\n      className: "flex flex-col"\n    }, /*#__PURE__*/React.createElement("div", {\n      className: "w-[6rem] h-auto ml-5"\n    }, /*#__PURE__*/React.createElement("img", {\n      src: productData?.image,\n      alt: productData?.title\n    }))), /*#__PURE__*/React.createElement("div", {\n      className: "flex flex-col justify-between w-full"\n    }, /*#__PURE__*/React.createElement("div", {\n      className: "flex flex-col space-y-1"\n    }, /*#__PURE__*/React.createElement("h2", {\n      className: `\n                                flex\n                                text-base md:w-52 md:text-base\n                            `\n    }, productData?.title), /*#__PURE__*/React.createElement("h3", {\n      className: "text-xs text-zinc-400"\n    }, "\\u06A9\\u062A\\u0627\\u0628")), /*#__PURE__*/React.createElement("div", null, productData?.discount !== 0 && /*#__PURE__*/React.createElement("span", {\n      className: `\n                                    flex text-left font-semibold w-fit bg-red-600 rounded-full px-2 text-white mb-3\n                                    text-[.7rem] md:w-52 md:text-base items-end\n                                `\n    }, productData?.discount, "%"), /*#__PURE__*/React.createElement("div", {\n      className: "flex justify-between"\n    }, /*#__PURE__*/React.createElement("span", {\n      className: `\n                                    flex text-left font-semibold\n                                    text-sm md:w-52 md:text-base\n                                `\n    }, priceWithDiscount(productData?.price, productData?.discount) * product.count, "   \\u062A\\u0648\\u0645\\u0627\\u0646"), /*#__PURE__*/React.createElement("div", {\n      className: "flex"\n    }, /*#__PURE__*/React.createElement("button", {\n      onClick: () => cartActions.addOrIncreaseItem(productData)\n    }, /*#__PURE__*/React.createElement("svg", {\n      class: "h-6 w-6 text-[#8a6541]",\n      viewBox: "0 0 24 24",\n      fill: "none",\n      stroke: "currentColor",\n      "stroke-width": "2",\n      "stroke-linecap": "round",\n      "stroke-linejoin": "round"\n    }, "  ", /*#__PURE__*/React.createElement("circle", {\n      cx: "12",\n      cy: "12",\n      r: "10"\n    }), "  ", /*#__PURE__*/React.createElement("line", {\n      x1: "12",\n      y1: "8",\n      x2: "12",\n      y2: "16"\n    }), "  ", /*#__PURE__*/React.createElement("line", {\n      x1: "8",\n      y1: "12",\n      x2: "16",\n      y2: "12"\n    }))), /*#__PURE__*/React.createElement("span", {\n      className: "mx-3 font-semibold"\n    }, product.count), /*#__PURE__*/React.createElement("button", {\n      onClick: () => cartActions.removeOrDecreaseItem(productData)\n    }, /*#__PURE__*/React.createElement("svg", {\n      class: "h-6 w-6 text-[#8a6541]",\n      viewBox: "0 0 24 24",\n      fill: "none",\n      stroke: "currentColor",\n      "stroke-width": "2",\n      "stroke-linecap": "round",\n      "stroke-linejoin": "round"\n    }, "  ", /*#__PURE__*/React.createElement("circle", {\n      cx: "12",\n      cy: "12",\n      r: "10"\n    }), "  ", /*#__PURE__*/React.createElement("line", {\n      x1: "8",\n      y1: "12",\n      x2: "16",\n      y2: "12"\n    }))))))), /*#__PURE__*/React.createElement("hr", null));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCart);\n\n//# sourceURL=webpack://shop/./src/components/order/productCart.js?')},"./src/store/cartStore.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/store/create.js\");\n/* harmony import */ var react_sweet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-state */ \"./node_modules/react-sweet-state/lib/esm/components/hook.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\nconst CartStore = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_1__.createStore)({\n  initialState: {\n    items: []\n  },\n  actions: {\n    addOrIncreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      const exist = currentItems.find(item => itemData.id === item.id);\n\n      if (exist) {\n        // log('exist')\n        currentItems.map(each => {\n          if (itemData.id == each.id) {\n            return { ...each,\n              count: each.count++\n            };\n          }\n        }); // log(currentItems)\n\n        setState({\n          items: [...currentItems]\n        });\n      } else {\n        // log('new')\n        setState({\n          items: [...currentItems, {\n            id: itemData.id,\n            count: 1\n          }]\n        });\n      }\n    },\n    removeOrDecreaseItem: itemData => ({\n      setState,\n      getState\n    }) => {\n      const currentItems = getState().items;\n      currentItems.map((each, index) => {\n        if (itemData.id == each.id) {\n          const nextCount = each.count--;\n\n          if (nextCount == 0) {\n            // log('remove')\n            currentItems.splice(index, 1);\n          } else {\n            // log('decrease')\n            return { ...each,\n              count: nextCount\n            };\n          }\n        }\n      }); // log(currentItems)\n\n      setState({\n        items: [...currentItems]\n      });\n    }\n  },\n  name: 'items'\n});\nconst useCart = (0,react_sweet_state__WEBPACK_IMPORTED_MODULE_2__.createHook)(CartStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);\n\n//# sourceURL=webpack://shop/./src/store/cartStore.js?")}}]);