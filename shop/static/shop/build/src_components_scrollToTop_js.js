/*! For license information please see src_components_scrollToTop_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_components_scrollToTop_js"],{"./src/components/scrollToTop.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n\n\n\nfunction ScrollToTop({\n  history\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const listen = history.listen(() => {\n      window.scrollTo(0, 0);\n    });\n    return () => {\n      listen();\n    };\n  }, []);\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(ScrollToTop));\n\n//# sourceURL=webpack://shop/./src/components/scrollToTop.js?')}}]);