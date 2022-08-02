/*! For license information please see src_pages_index_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_index_js"],{"./src/components/order/productCard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\nconst ProductCard = props => {\n  return props.products.map(product => {\n    return /*#__PURE__*/React.createElement("article", {\n      className: "m-auto"\n    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: `/shop/${(0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.replaceFunction)(product.title, \' \', \'-\')}?slug=${product.slug}`,\n      className: "flex flex-col"\n    }, /*#__PURE__*/React.createElement("div", {\n      className: ""\n    }, /*#__PURE__*/React.createElement("img", {\n      src: product.thumbnail,\n      width: 200,\n      height: 200,\n      alt: `${product.title}`,\n      className: "object-cover rounded-md"\n    })), /*#__PURE__*/React.createElement("div", {\n      className: "my-3"\n    }, /*#__PURE__*/React.createElement("h2", {\n      className: `\n                                flex\n                                text-sm md:w-52 md:text-base\n                            `\n    }, product.title), /*#__PURE__*/React.createElement("div", {\n      className: "flex justify-between w-full mt-3"\n    }, /*#__PURE__*/React.createElement("span", {\n      className: `\n                                    flex text-left font-semibold\n                                    text-sm md:w-52 md:text-base\n                                `\n    }, (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.priceWithDiscount)(product.price, product.discount), "   \\u062A\\u0648\\u0645\\u0627\\u0646"), product.discount !== 0 && /*#__PURE__*/React.createElement("span", {\n      className: `\n                                        flex text-left font-semibold bg-red-600 rounded-full px-2 text-white\n                                        text-[.7rem] md:w-52 md:text-base items-center\n                                    `\n    }, product.discount, "%")), product.discount !== 0 && /*#__PURE__*/React.createElement("s", {\n      className: `\n                                    flex justify-start font-semibold\n                                    text-[.7rem] text-gray-400 decoration-slice\n                                `\n    }, product.price))));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\n\n//# sourceURL=webpack://shop/./src/components/order/productCard.js?')},"./src/pages/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_order_productCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/order/productCard */ "./src/components/order/productCard.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n\n\n\n\n\n\nconst Index = () => {\n  const [product_new, setProduct_new] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    grabData();\n  }, []);\n  const grabData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/productView/?limit=8&public=true`).then(res => {\n      setProduct_new(res.data.results);\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err.response);\n    });\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {\n    className: "bg-gradient-to-b py-10 wrapper from-[#0d0735] to-[#070515]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "grid grid-cols-2 gap-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_order_productCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    products: product_new\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {\n    className: "bg-gradient-to-b py-10 wrapper from-[#070515] to-[#0d0735]"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n//# sourceURL=webpack://shop/./src/pages/index.js?')}}]);