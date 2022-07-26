/*! For license information please see src_components_profile_login_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["src_components_profile_login_js"],{"./src/components/profile/login.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'react-redux\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'../components/base\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n\n\n\n\n\n\nconst Login = () => {\n  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getUsers();\n  }, []);\n\n  const getUsers = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\'/api/user/\').then(res => {\n      setUsers(res.data);\n    });\n  };\n\n  const returnUsers = () => {\n    return users?.map(user => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {\n        value: `${user.username}-${user.last_name}`\n      }, user.rank, " ", user.first_name, " ", user.last_name);\n    });\n  };\n\n  const handleSubmit = async () => {\n    const usernameSplit = username.split(\'-\');\n\n    try {\n      const data = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\'api/token/obtain/\', {\n        username: usernameSplit[0],\n        password: password\n      });\n      antd__WEBPACK_IMPORTED_MODULE_4__["default"].loading(`به سامانه خوش آمدید آقای ${usernameSplit[1]}`, 0);\n      (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.Authorization) = "JWT " + data.access;\n      localStorage.setItem(\'access_token\', data.data.access);\n      localStorage.setItem(\'refresh_token\', data.data.refresh);\n      saveUsernameInLocalStorage(usernameSplit[0]);\n      setTimeout(() => {\n        window.location.href = \'/\';\n      }, 1500);\n    } catch (error) {\n      antd__WEBPACK_IMPORTED_MODULE_4__["default"].error(\'رمز وارد شده برای این کاربر اشتباه می‌باشد\');\n      throw error;\n    }\n  };\n\n  const keyboardClicked = event => {\n    if (event.key === \'Enter\') {\n      handleSubmit();\n    }\n  };\n\n  const saveUsernameInLocalStorage = username => {\n    localStorage.setItem(\'logged_in_user\', username);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "text-center login filter-blur-10 min-h-screen"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "text-[3rem] text-center absolute top-20 text-teal-600 "\n  }, "\\u0633\\u0627\\u0645\\u0627\\u0646\\u0647 \\u06CC \\u0641\\u0648\\u0631\\u06CC\\u062A \\u0647\\u0627\\u06CC \\u0633\\u0627\\u06CC\\u0628\\u0631\\u06CC \\u0627\\u0633\\u062A\\u0627\\u0646 \\u0642\\u0645"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: "grid justify-center space-y-5 p-8 w-[24rem] text-[20px] rounded-lg center bg-[#dddddd66]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: "w-[17.3rem] text-lg",\n    placeholder: "\\u06A9\\u0627\\u0631\\u0628\\u0631 \\u0631\\u0627 \\u0627\\u0646\\u062A\\u062E\\u0627\\u0628 \\u06A9\\u0646\\u06CC\\u062F ",\n    onChange: select => setUsername(select)\n  }, returnUsers())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    name: "password",\n    className: "rounded-lg p-2 w-full",\n    type: "password",\n    placeholder: "\\u0631\\u0645\\u0632 \\u0639\\u0628\\u0648\\u0631",\n    value: password,\n    onKeyDown: event => keyboardClicked(event),\n    onChange: input => setPassword(input.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: () => handleSubmit(),\n    className: "bg-[#287E7D] p-2 rounded-lg text-white font-semibold",\n    type: "button"\n  }, "\\u062A\\u0627\\u06CC\\u06CC\\u062F"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://shop/./src/components/profile/login.js?')}}]);