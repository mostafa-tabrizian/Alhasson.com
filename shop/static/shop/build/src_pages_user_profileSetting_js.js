/*! For license information please see src_pages_user_profileSetting_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_user_profileSetting_js"],{"../frontend/src/components/loadingScreen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\nconst LoadingScreen = props => {\n  return /*#__PURE__*/React.createElement("div", {\n    className: `\n            fixed left-0 backdrop-blur-3xl backdrop-brightness-75\n            top-0 w-screen h-screen z-20 ${props.loading ? \'fadeIn\' : \'fadeOut z-[-1]\'}\n            flex items-center justify-center\n        `\n  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {\n    class: "animate-spin h-10 w-10 m-10 text-yellow-500",\n    xmlns: "http://www.w3.org/2000/svg",\n    fill: "none",\n    viewBox: "0 0 24 24"\n  }, /*#__PURE__*/React.createElement("circle", {\n    class: "opacity-25",\n    cx: "12",\n    cy: "12",\n    r: "10",\n    stroke: "currentColor",\n    "stroke-width": "4"\n  }), /*#__PURE__*/React.createElement("path", {\n    class: "opacity-75",\n    fill: "currentColor",\n    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n\n//# sourceURL=webpack://shop/../frontend/src/components/loadingScreen.js?')},"./src/components/axiosApi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-cache-adapter */ \"./node_modules/axios-cache-adapter/dist/cache.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = \"X-CSRFTOKEN\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = \"csrftoken\";\nconst cache = (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__.setupCache)({\n  maxAge: 15 * 60 * 1000,\n  exclude: {\n    query: false\n  }\n});\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  timeout: 5000,\n  headers: {\n    'Authorization': \"JWT \" + (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN'),\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  },\n  adapter: cache.adapter\n});\naxiosInstance.interceptors.response.use(response => response, error => {\n  const originalRequest = error.config;\n\n  if (String(error).includes('timeout ')) {\n    antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error('لطفا اتصال اینترنت خود را بررسی کنید!');\n  }\n\n  if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000' + '/token/refresh/') {\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 1'); // window.location.href = '/login';\n\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    const refreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n\n    if (refreshToken) {\n      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));\n      const now = Math.ceil(Date.now() / 1000);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/api/token/refresh/', {\n          refresh: refreshToken\n        }).then(res => {\n          document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + res.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + res.data.access;\n          return axiosInstance(originalRequest);\n        }).catch(err => {\n          document.cookie = `USER_ACCESS_TOKEN=; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=; path=/;`;\n          (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 2'); // window.location.href = '/login';\n        });\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 3'); // window.location.href = '/login';\n      }\n    } else {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 4'); // window.location.href = '/login';\n    }\n  }\n\n  return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n//# sourceURL=webpack://shop/./src/components/axiosApi.js?")},"./src/components/user/userProfileDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosApi */ \"./src/components/axiosApi.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\n\nconst UserProfileDetail = () => {\n  const refreshToken = async () => {\n    const localRefreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n    return localRefreshToken && (await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/token/refresh/', {\n      refresh: localRefreshToken\n    }).then(res => {\n      document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n      document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n      window.location.reload();\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('refresh error');\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)(err.response);\n    }));\n  };\n\n  const fetchUserProfile = async () => {\n    const localAccessToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN');\n\n    if (localAccessToken) {\n      const payload = {\n        access_token: localAccessToken\n      };\n      return await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/shop/api/user`, payload).then(res => {\n        if (res.data.is_active) {\n          return res.data;\n        } else {\n          return 'inactive';\n        }\n      }).catch(err => {\n        refreshToken();\n      });\n    }\n  };\n\n  return fetchUserProfile(); // const fetchUserProfileUpdate = async (at) => {\n  //     return await axiosInstance.get(`/api/login?at=${at}`)\n  //         .then (res => {\n  //             log('return profile 2')\n  //             log(res.data)\n  //             return res.data\n  //         })\n  //         .catch(err => {\n  //             log(err)\n  //             log(err.response)\n  //             log('refresh again!!!!!')\n  //         })\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileDetail);\n\n//# sourceURL=webpack://shop/./src/components/user/userProfileDetail.js?")},"./src/pages/user/profileSetting.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/es/Helmet.js");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");\n/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _components_axiosApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/axiosApi */ "./src/components/axiosApi.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _components_user_userProfileDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/user/userProfileDetail */ "./src/components/user/userProfileDetail.js");\n/* harmony import */ var _frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../frontend/src/components/loadingScreen */ "../frontend/src/components/loadingScreen.js");\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProfileSetting = () => {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const reCaptchaResponse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const addressRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const postalCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const phoneNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__["default"])([\'USER_ACCESS_TOKEN\']);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    checkIfLoggedIn_setUser();\n    setLoading(false);\n  }, []);\n\n  const checkIfLoggedIn_setUser = async () => {\n    const userProfile = await (0,_components_user_userProfileDetail__WEBPACK_IMPORTED_MODULE_6__["default"])();\n\n    if (userProfile == null) {\n      window.location.href = \'/shop/login/\';\n    }\n\n    setUser(userProfile);\n  };\n\n  const checkRecaptcha = async () => {\n    if (reCaptchaResponse.current !== null) {\n      return await _components_axiosApi__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/shop/api/recaptcha?r=${reCaptchaResponse.current}`).then(res => {\n        return res.data;\n      }).catch(err => {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_5__.log)(err.response);\n      });\n    } else {\n      antd__WEBPACK_IMPORTED_MODULE_9__["default"].warning(\'لطفا تایید کنید که ربات نیستید!\');\n      return false;\n    }\n  };\n\n  const saveSetting = async () => {\n    if (!usernameRef.current.value.length && !firstNameRef.current.value.length && !lastNameRef.current.value.length && !addressRef.current.value.length && !postalCodeRef.current.value.length && !phoneNumberRef.current.value.length) {\n      return antd__WEBPACK_IMPORTED_MODULE_9__["default"].warning(\'برای ذخیره، حداقل یک ورودی را تغییر دهید.\');\n    }\n\n    debouncePatchUserSetting();\n  };\n\n  const debouncePatchUserSetting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(async () => {\n    // if (await checkRecaptcha()) {\n    const payload = {\n      access_token: cookies.USER_ACCESS_TOKEN,\n      username: usernameRef.current.value,\n      first_name: firstNameRef.current.value,\n      last_name: lastNameRef.current.value,\n      address: addressRef.current.value,\n      postal_code: postalCodeRef.current.value,\n      phone_number: phoneNumberRef.current.value\n    };\n    await _components_axiosApi__WEBPACK_IMPORTED_MODULE_4__["default"].patch(`/shop/api/user/update`, payload).then(res => {\n      if (res.data == \'success\') {\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].success(\'اطلاعات شما با موفقیت تغییر یافت.\');\n        setTimeout(() => {\n          window.location.reload();\n        }, 1500);\n      } else if (res.data == \'username already exists\') {\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'نام کاربری دیگری انتخاب کنید\');\n      } else if (res.data == \'username too short\') {\n        antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'نام کاربری می‌بایست بیش از ۳ کارکتر باشد.\');\n      }\n    }).catch(err => {\n      antd__WEBPACK_IMPORTED_MODULE_9__["default"].error(\'زمان شما برای ایجاد تغییر منقضی شده است. لطفا پس از ریلود کردن صفحه مجدد تلاش کنید.\', 10);\n      setTimeout(() => {\n        window.location.reload();\n      }, 10_000);\n    }); // }\n  }, 1000), []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_frontend_src_components_loadingScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    loading: loading\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "\\u0627\\u0644\\u062D\\u0633\\u0648\\u0646 | \\u067E\\u0631\\u0648\\u0641\\u0627\\u06CC\\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {\n    rel: "canonical",\n    to: "https://www.quizzland.net/setting"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-4 h-screen md:mx-auto md:w-4/5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "text-center font-bold"\n  }, "\\u0627\\u0637\\u0644\\u0627\\u0639\\u0627\\u062A \\u067E\\u0631\\u0648\\u0641\\u0627\\u06CC\\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "absolute top-0 left-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {\n    to: "/shop/profile/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    class: "h-6 w-6 text-[#cfa278]",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "14",\n    y2: "12"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "16"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "4",\n    y1: "12",\n    x2: "8",\n    y2: "8"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "20",\n    y1: "4",\n    x2: "20",\n    y2: "20"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "py-2 px-2 space-y-5 rounded"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u0646\\u0627\\u0645 \\u06A9\\u0627\\u0631\\u0628\\u0631\\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.username,\n    ref: usernameRef\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "space-y-5 md:grid md:grid-cols-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u0646\\u0627\\u0645"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.first_name,\n    ref: firstNameRef\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u0646\\u0627\\u0645 \\u062E\\u0627\\u0646\\u0648\\u0627\\u062F\\u06AF\\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.last_name,\n    ref: lastNameRef\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u0622\\u062F\\u0631\\u0633"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {\n    rows: "3",\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.address,\n    ref: addressRef\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u06A9\\u062F\\u067E\\u0633\\u062A\\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.postal_code,\n    ref: postalCodeRef\n  })), "N                   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\\u0634\\u0645\\u0627\\u0631\\u0647 \\u062A\\u0645\\u0627\\u0633"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    className: "placeholder:text-gray-500 bg-transparent border-b border-b-yellow-500",\n    type: "text",\n    placeholder: user?.phone_number,\n    ref: phoneNumberRef\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: saveSetting,\n    className: "px-6 py-2 mt-4 border-2 border-green-600 h-fit rounded-xl"\n  }, "\\u200C\\u0630\\u062E\\u06CC\\u0631\\u0647")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileSetting);\n\n//# sourceURL=webpack://shop/./src/pages/user/profileSetting.js?')}}]);