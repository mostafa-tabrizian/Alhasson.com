/*! For license information please see src_pages_search_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_search_js"],{"./src/components/base.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "currencyFormat": () => (/* binding */ currencyFormat),\n/* harmony export */   "priceWithDiscount": () => (/* binding */ priceWithDiscount)\n/* harmony export */ });\nconst currencyFormat = price => {\n  return price?.toFixed().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \'$1,\');\n};\nconst priceWithDiscount = (price, discount) => {\n  return price - price * discount / 100;\n};\n\n//# sourceURL=webpack://shop/./src/components/base.js?')},"./src/components/order/excludeWordsToSearch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst excludeWordsToSearch = () => {\n  const wordList = [];\n  return wordList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (excludeWordsToSearch);\n\n//# sourceURL=webpack://shop/./src/components/order/excludeWordsToSearch.js?')},"./src/components/order/productCard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./src/components/base.js");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\nconst ProductCard = props => {\n  return props.products.map(product => {\n    return /*#__PURE__*/React.createElement("article", {\n      className: ""\n    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      to: `/shop/${(0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.replaceFunction)(product.title, \' \', \'-\')}?id=${product.id}`,\n      className: "flex flex-col"\n    }, /*#__PURE__*/React.createElement("div", {\n      className: ""\n    }, /*#__PURE__*/React.createElement("img", {\n      src: product.thumbnail,\n      alt: `${product.title}`,\n      className: "object-cover h-[16rem] rounded-lg"\n    })), /*#__PURE__*/React.createElement("div", {\n      className: "my-3"\n    }, /*#__PURE__*/React.createElement("h2", {\n      className: `\n                                flex\n                                text-sm md:w-52 md:text-base\n                            `\n    }, product.title), /*#__PURE__*/React.createElement("div", {\n      className: "flex w-full mt-3 space-x-3 space-x-reverse"\n    }, /*#__PURE__*/React.createElement("span", {\n      className: `\n                                    flex text-left font-semibold\n                                    text-sm md:w-52 md:text-base\n                                `\n    }, (0,_base__WEBPACK_IMPORTED_MODULE_2__.currencyFormat)((0,_base__WEBPACK_IMPORTED_MODULE_2__.priceWithDiscount)(product.price, product.discount)), "   \\u062A\\u0648\\u0645\\u0627\\u0646"), product.discount !== 0 && /*#__PURE__*/React.createElement("span", {\n      className: `\n                                        flex text-left font-semibold bg-red-600 rounded-full px-2 text-white\n                                        text-[.7rem] md:w-52 md:text-base items-center\n                                    `\n    }, product.discount, "%")), product.discount !== 0 && /*#__PURE__*/React.createElement("s", {\n      className: `\n                                    flex justify-start font-semibold\n                                    text-[.7rem] text-gray-400 decoration-slice\n                                `\n    }, (0,_base__WEBPACK_IMPORTED_MODULE_2__.currencyFormat)(product.price)))));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\n\n//# sourceURL=webpack://shop/./src/components/order/productCard.js?')},"./src/pages/search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/empty/index.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _components_order_productCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/order/productCard */ "./src/components/order/productCard.js");\n/* harmony import */ var _components_order_excludeWordsToSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/order/excludeWordsToSearch */ "./src/components/order/excludeWordsToSearch.js");\n\n\n\n\n\n\n\n\nconst Search = () => {\n  const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    searchAlgorithm();\n  }, []);\n  const query = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__.takeParameterFromUrl)(\'q\');\n\n  const searchAlgorithm = async () => {\n    const allProducts = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/productView/`);\n    const searchedValue = query?.toLowerCase().split(\' \');\n    const rankResults = [];\n    let filteredSearchValue = [];\n    searchedValue.map(value => {\n      if (!(0,_components_order_excludeWordsToSearch__WEBPACK_IMPORTED_MODULE_4__["default"])().includes(value.toLowerCase())) {\n        filteredSearchValue.push(value);\n      }\n    });\n    allProducts.data.map(item => {\n      let itemScore = 0;\n      filteredSearchValue.map(value => {\n        if (item.title.toLowerCase().split(\' \').includes(value) || item.slug.toLowerCase().split(\' \').includes(value)) {\n          itemScore += 1;\n        }\n      });\n\n      if (itemScore !== 0) {\n        rankResults.push({\n          itemDetail: item,\n          score: itemScore\n        });\n      }\n    });\n    const sliceSortResult = rankResults.slice(0, 100).sort((a, b) => b.score - a.score);\n    setSearchResult(Object.keys(sliceSortResult).map(key => sliceSortResult[key].itemDetail));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "pb-20 wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "mb-5 title title-center"\n  }, "\\u062C\\u0633\\u062A\\u062C\\u0648\\u06CC \\u0639\\u0628\\u0627\\u0631\\u062A \\" ", query, " \\""), !searchResult?.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    image: antd__WEBPACK_IMPORTED_MODULE_5__["default"].PRESENTED_IMAGE_SIMPLE\n  }), searchResult?.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_order_productCard__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    products: searchResult\n  }) : \'\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n//# sourceURL=webpack://shop/./src/pages/search.js?')}}]);