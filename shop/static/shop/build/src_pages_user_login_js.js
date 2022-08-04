/*! For license information please see src_pages_user_login_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_pages_user_login_js"],{"./src/components/axiosApi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-cache-adapter */ \"./node_modules/axios-cache-adapter/dist/cache.js\");\n/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = \"X-CSRFTOKEN\";\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = \"csrftoken\";\nconst cache = (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_2__.setupCache)({\n  maxAge: 15 * 60 * 1000,\n  exclude: {\n    query: false\n  }\n});\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  timeout: 5000,\n  headers: {\n    'Authorization': \"JWT \" + (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN'),\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  },\n  adapter: cache.adapter\n});\naxiosInstance.interceptors.response.use(response => response, error => {\n  const originalRequest = error.config;\n\n  if (String(error).includes('timeout ')) {\n    antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error('لطفا اتصال اینترنت خود را بررسی کنید!');\n  }\n\n  if (error.response.status === 401 && originalRequest.url === 'http://localhost:8000' + '/token/refresh/') {\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 1'); // window.location.href = '/login';\n\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    const refreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n\n    if (refreshToken) {\n      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));\n      const now = Math.ceil(Date.now() / 1000);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/api/token/refresh/', {\n          refresh: refreshToken\n        }).then(res => {\n          document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + res.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + res.data.access;\n          return axiosInstance(originalRequest);\n        }).catch(err => {\n          document.cookie = `USER_ACCESS_TOKEN=; path=/;`;\n          document.cookie = `USER_REFRESH_TOKEN=; path=/;`;\n          (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 2'); // window.location.href = '/login';\n        });\n      } else {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 3'); // window.location.href = '/login';\n      }\n    } else {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('logged from 4'); // window.location.href = '/login';\n    }\n  }\n\n  return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n//# sourceURL=webpack://shop/./src/components/axiosApi.js?")},"./src/components/user/loginForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/notification/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gapi_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gapi-script */ \"./node_modules/gapi-script/index.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/useCookies.js\");\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axiosApi */ \"./src/components/axiosApi.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n/* harmony import */ var _userProfileDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userProfileDetail */ \"./src/components/user/userProfileDetail.js\");\n\n\n\n\n\n\n;\n\n\n\nconst LoginForm = props => {\n  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(['USER_ACCESS_TOKEN', 'USER_REFRESH_TOKEN']);\n  const {\n    signOut\n  } = (0,react_google_login__WEBPACK_IMPORTED_MODULE_1__.useGoogleLogout)({\n    clientId: \"687160730568-s62liqkremb5stf1q3gobiso529n7upv.apps.googleusercontent.com\",\n    onLogoutSuccess: () => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)('google 1');\n    },\n    onFailure: () => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)('google 2');\n    }\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    checkIfLoggedIn();\n    gapiLoad();\n  }, []);\n\n  const gapiLoad = () => {\n    const startGapiClient = () => {\n      gapi_script__WEBPACK_IMPORTED_MODULE_2__.gapi.client.init({\n        clientId: \"687160730568-s62liqkremb5stf1q3gobiso529n7upv.apps.googleusercontent.com\",\n        scope: ''\n      });\n    };\n\n    gapi_script__WEBPACK_IMPORTED_MODULE_2__.gapi.load('client:auth2', startGapiClient);\n  };\n\n  const logout = async () => {\n    try {\n      await axios.post('/shop/api/blacklist/', {\n        \"refresh_token\": cookies.USER_REFRESH_TOKEN\n      }).then(res => {\n        removeCookie('USER_ACCESS_TOKEN', {\n          path: '/'\n        });\n        removeCookie('USER_REFRESH_TOKEN', {\n          path: '/'\n        });\n        axios.defaults.headers['Authorization'] = null;\n        signOut();\n        window.location.reload();\n      }).catch(err => {\n        window.location.href = '/shop/';\n      });\n    } catch (e) {\n      console.log(e);\n    }\n  };\n\n  const checkIfLoggedIn = async () => {\n    const userProfile = await (0,_userProfileDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n    if (userProfile !== undefined && window.location.pathname == '/shop/login/') {\n      window.location.href = '/shop/';\n    }\n  };\n\n  const showInActiveNotification = () => {\n    antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].open({\n      message: 'این کاربر مسدود شده است',\n      description: 'برای اطلاعات بیشتر با پشتیبانی الحسون تماس بگیرید quizzland.net@gmail.com',\n      duration: 5,\n      style: {\n        'font-size': '25px',\n        'font-weight': '600',\n        'box-shadow': '0 0 20px #b52633',\n        'direction': 'rtl',\n        'padding-right': '4rem'\n      },\n      className: 'rounded-lg'\n    });\n  };\n\n  const googleLoginSuccess = async res => {\n    const userProfile = await (0,_userProfileDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n    if (userProfile == undefined) {\n      const accessToken = res.accessToken;\n      const username = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.replaceFunction)(res.profileObj.name, ' ', '');\n      const email = res.profileObj.email;\n      const lastName = res.profileObj.familyName || '';\n      const firstName = res.profileObj.givenName || '';\n      const avatar = res.profileObj.imageUrl;\n      const payload = {\n        accessToken: accessToken,\n        username: username,\n        email: email,\n        lastName: lastName,\n        firstName: firstName,\n        avatar: avatar\n      };\n      accessToken && (await _axiosApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(`/shop/api/google`, payload).then(res => {\n        if (res.data == 'inactive') {\n          if (cookies.USER_ACCESS_TOKEN == accessToken || cookies.USER_ACCESS_TOKEN == 'undefined') {\n            showInActiveNotification();\n            logout();\n          }\n\n          return;\n        } else {\n          antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].loading('در حال ورود ...', 1);\n          _axiosApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.Authorization = \"JWT \" + res.data.access_token;\n          setCookie('USER_ACCESS_TOKEN', res.data.access_token, {\n            path: '/'\n          });\n          setCookie('USER_REFRESH_TOKEN', res.data.refresh_token, {\n            path: '/'\n          });\n          window.location.reload();\n\n          if (window.location.pathname === '/shop/login/') {\n            window.history.go(-1);\n          }\n        }\n      }).catch(err => {\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)('get auth error');\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err);\n        (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(err.response);\n      }));\n    }\n  };\n\n  const googleLoginFailure = res => {\n    antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].error(\"ورود/ثبت نام شما به مشکل برخورد. لطفا دوباره تلاش کنید\");\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)('fail login, res: ');\n    (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_4__.log)(res);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n    clientId: \"687160730568-s62liqkremb5stf1q3gobiso529n7upv.apps.googleusercontent.com\",\n    className: \"ltr\" // w-[90%] flex justify-center\n    ,\n    buttonText: \"\\u0648\\u0631\\u0648\\u062F/\\u062B\\u0628\\u062A \\u0646\\u0627\\u0645 \\u0628\\u0627 \\u062D\\u0633\\u0627\\u0628 \\u06AF\\u0648\\u06AF\\u0644\",\n    onSuccess: googleLoginSuccess,\n    onFailure: googleLoginFailure,\n    cookiePolicy: 'single_host_origin',\n    isSignedIn: true\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n\n//# sourceURL=webpack://shop/./src/components/user/loginForm.js?")},"./src/components/user/userProfileDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosApi */ \"./src/components/axiosApi.js\");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ \"../frontend/src/components/base.js\");\n\n\n\nconst UserProfileDetail = () => {\n  const refreshToken = async () => {\n    const localRefreshToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_REFRESH_TOKEN');\n    return localRefreshToken && (await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/token/refresh/', {\n      refresh: localRefreshToken\n    }).then(res => {\n      document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`;\n      document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`;\n      window.location.reload();\n    }).catch(err => {\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)('refresh error');\n      (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.log)(err.response);\n    }));\n  };\n\n  const fetchUserProfile = async () => {\n    const localAccessToken = (0,_frontend_src_components_base__WEBPACK_IMPORTED_MODULE_1__.getCookie)('USER_ACCESS_TOKEN');\n\n    if (localAccessToken) {\n      const payload = {\n        access_token: localAccessToken\n      };\n      return await _axiosApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/shop/api/user`, payload).then(res => {\n        if (res.data.is_active) {\n          return res.data;\n        } else {\n          return 'inactive';\n        }\n      }).catch(err => {\n        refreshToken();\n      });\n    }\n  };\n\n  return fetchUserProfile(); // const fetchUserProfileUpdate = async (at) => {\n  //     return await axiosInstance.get(`/api/login?at=${at}`)\n  //         .then (res => {\n  //             log('return profile 2')\n  //             log(res.data)\n  //             return res.data\n  //         })\n  //         .catch(err => {\n  //             log(err)\n  //             log(err.response)\n  //             log('refresh again!!!!!')\n  //         })\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileDetail);\n\n//# sourceURL=webpack://shop/./src/components/user/userProfileDetail.js?")},"./src/pages/user/login.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/es/Helmet.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _frontend_src_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../frontend/src/components/base */ "../frontend/src/components/base.js");\n/* harmony import */ var _components_user_loginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/loginForm */ "./src/components/user/loginForm.js");\n\n\n\n\n\nconst pathRed = \'/static/img/bubbles.webp\';\n\nconst Login = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "\\u0648\\u0631\\u0648\\u062F | \\u200C\\u0627\\u0644\\u062D\\u0633\\u0648\\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "w-screen h-screen"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mx-auto mt-[50%] md:mt-[10%] w-11/12 md:w-5/12 text-center top-[10%]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "text-[3rem] mb-5 text-center text-[#ac272e] "\n  }, "\\u0648\\u0631\\u0648\\u062F \\u0628\\u0647 \\u0641\\u0631\\u0648\\u0634\\u06AF\\u0627\\u0647 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "grid md:grid-cols-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_user_loginForm__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "mt-5 text-gray-500"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: "/shop/"\n  }, "\\u0628\\u0631\\u06AF\\u0634\\u062A \\u0628\\u0647 \\u0635\\u0641\\u062D\\u0647 \\u0627\\u0635\\u0644\\u06CC")))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://shop/./src/pages/user/login.js?')}}]);