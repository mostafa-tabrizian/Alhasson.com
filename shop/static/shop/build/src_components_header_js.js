/*! For license information please see src_components_header_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_components_header_js"],{"./src/components/axiosApi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-cache-adapter */ \"./node_modules/axios-cache-adapter/dist/cache.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = \"X-CSRFTOKEN\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = \"csrftoken\";\nconst cache = (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__.setupCache)({\n  maxAge: 15 * 60 * 1000,\n  exclude: {\n    query: false\n  }\n});\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  timeout: 5000,\n  headers: {\n    'Authorization': \"JWT \" + (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN'),\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  },\n  adapter: cache.adapter\n});\naxiosInstance.interceptors.response.use(response => response, error => {\n  const originalRequest = error.config;\n\n  if (String(error).includes('timeout ')) {\n    antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error('لطفا اتصال اینترنت خود را بررسی کنید!');\n  }\n\n  if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000' + '/token/refresh/') {\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 1'); // window.location.href = '/login';\n\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    const refreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n\n    if (refreshToken) {\n      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));\n      const now = Math.ceil(Date.now() / 1000);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/api/token/refresh/', {\n          refresh: refreshToken\n        }).then(res => {\n          document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + res.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + res.data.access;\n          return axiosInstance(originalRequest);\n        }).catch(err => {\n          document.cookie = `USER_ACCESS_TOKEN=; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=; path=/;`;\n          (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 2'); // window.location.href = '/login';\n        });\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 3'); // window.location.href = '/login';\n      }\n    } else {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 4'); // window.location.href = '/login';\n    }\n  }\n\n  return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n//# sourceURL=webpack://shop/./src/components/axiosApi.js?")},"./src/components/header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var gapi_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gapi-script */ "./node_modules/gapi-script/index.js");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");\n/* harmony import */ var _user_userProfileDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/userProfileDetail */ "./src/components/user/userProfileDetail.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n\n\n\n\n\n\n\n\nconst Header = () => {\n  const [profileSubMenu, setProfileSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [userProfile, setUserProfile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__["default"])([\'USER_ACCESS_TOKEN\', \'USER_REFRESH_TOKEN\']);\n  const {\n    signOut\n  } = (0,react_google_login__WEBPACK_IMPORTED_MODULE_2__.useGoogleLogout)({\n    clientId: \'590155860234-tm0e6smarma5dvr7bi42v6r26v4qkdun.apps.googleusercontent.com\',\n    onLogoutSuccess: () => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(\'google 1\');\n    },\n    onFailure: () => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(\'google 2\');\n    }\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    gapiLoad();\n    getUserData();\n  }, []);\n\n  const gapiLoad = () => {\n    const startGapiClient = () => {\n      gapi_script__WEBPACK_IMPORTED_MODULE_1__.gapi.client.init({\n        clientId: ({"NODE_ENV":"production"}).GOOGLE_LOGIN_CLIENT,\n        scope: \'\'\n      });\n    };\n\n    gapi_script__WEBPACK_IMPORTED_MODULE_1__.gapi.load(\'client:auth2\', startGapiClient);\n  };\n\n  const getUserData = async () => {\n    const userProfileDetailData = await (0,_user_userProfileDetail__WEBPACK_IMPORTED_MODULE_3__["default"])();\n\n    if (userProfileDetailData !== undefined) {\n      if (userProfileDetailData == \'inactive\') {\n        handleLogout();\n      } else {\n        setUserProfile(userProfileDetailData);\n      }\n    }\n  };\n\n  const handleLogout = async () => {\n    message.loading(\'در حال خارج شدن ...\');\n\n    try {\n      signOut();\n    } catch (e) {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(\'signOut google error\');\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(e);\n    }\n\n    try {\n      await axiosInstance.post(\'/api/blacklist/\', {\n        "refresh_token": cookies.USER_REFRESH_TOKEN\n      });\n      removeCookie(\'USER_ACCESS_TOKEN\');\n      removeCookie(\'USER_REFRESH_TOKEN\');\n      axiosInstance.defaults.headers[\'Authorization\'] = null;\n      window.location.reload();\n    } catch (e) {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(\'error\');\n      console.log(e);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "relative justify-between m-8 flex"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "items-center hidden space-x-10 space-x-reverse md:flex"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    className: "w-12",\n    src: "/static/img/inTheNameOfGod.png",\n    alt: "\\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631-\\u0627\\u0644\\u0634\\u06CC\\u062E-\\u0639\\u0644\\u0627\\u0621-\\u0627\\u0644\\u062D\\u0633\\u0651\\u0648\\u0646"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "/"\n  }, "\\u0627\\u0644\\u0635\\u0641\\u062D\\u0629 \\u0627\\u0644\\u0631\\u0626\\u06CC\\u0633\\u06CC\\u0629")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex items-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    className: "absolute w-6 h-6 mr-2 text-blue-900",\n    width: "24",\n    height: "24",\n    viewBox: "0 0 24 24",\n    "stroke-width": "2",\n    stroke: "currentColor",\n    fill: "none",\n    "stroke-linecap": "round",\n    "stroke-linejoin": "round"\n  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    stroke: "none",\n    d: "M0 0h24v24H0z"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {\n    cx: "10",\n    cy: "10",\n    r: "7"\n  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {\n    x1: "21",\n    y1: "21",\n    x2: "15",\n    y2: "15"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    type: "text",\n    className: "rounded-lg text-blue-900 pr-12 py-1 w-[16rem]",\n    placeholder: "\\u0628\\u062D\\u062B \\u0639\\u0646 \\u06A9\\u062A\\u0627\\u0628 \\u0623\\u0648 \\u0645\\u062D\\u0627\\u0636\\u0631\\u0629",\n    onKeyDown: e => {\n      if (e.key == \'Enter\') {\n        document.location.href = `/بحث?q=${e.target.value}`;\n      }\n    }\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://shop/./src/components/header.js?')},"./src/components/user/userProfileDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosApi */ \"./src/components/axiosApi.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\n\nconst UserProfileDetail = () => {\n  const refreshToken = async () => {\n    const localRefreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n    return localRefreshToken && (await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/token/refresh/', {\n      refresh: localRefreshToken\n    }).then(res => {\n      document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n      document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n      window.location.reload();\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('refresh error');\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)(err.response);\n    }));\n  };\n\n  const fetchUserProfile = async () => {\n    const localAccessToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN');\n    const now = new Date().getTime();\n\n    if (localAccessToken) {\n      const payload = {\n        access_token: localAccessToken\n      };\n      return await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/shop/api/user?timestamp=${now}`, payload).then(res => {\n        if (res.data.is_active) {\n          return res.data;\n        } else {\n          return 'inactive';\n        }\n      }).catch(err => {\n        refreshToken();\n      });\n    }\n  };\n\n  return fetchUserProfile(); // const fetchUserProfileUpdate = async (at) => {\n  //     return await axiosInstance.get(`/api/login?at=${at}`)\n  //         .then (res => {\n  //             log('return profile 2')\n  //             log(res.data)\n  //             return res.data\n  //         })\n  //         .catch(err => {\n  //             log(err)\n  //             log(err.response)\n  //             log('refresh again!!!!!')\n  //         })\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileDetail);\n\n//# sourceURL=webpack://shop/./src/components/user/userProfileDetail.js?")}}]);