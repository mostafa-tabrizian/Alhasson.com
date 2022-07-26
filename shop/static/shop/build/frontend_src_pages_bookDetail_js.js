/*! For license information please see frontend_src_pages_bookDetail_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["frontend_src_pages_bookDetail_js"],{"../frontend/src/pages/bookDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/es/Helmet.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../frontend/node_modules/antd/es/skeleton/index.js");\n/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base */ "../frontend/src/components/base.js");\n\n\n\n\n\n\n\nconst Book = () => {\n  const [bookDetail, setBookDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getBookDetail();\n    setLoading(false);\n  }, []);\n\n  const getBookDetail = async () => {\n    const bookTitleFromUrl = (0,_components_base__WEBPACK_IMPORTED_MODULE_3__.replaceFunction)(window.location.pathname.split(\'/\')[2], \'-\', \'+\');\n    await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/bookView/?title__icontains=${bookTitleFromUrl}`).then(book => {\n      setBookDetail(book.data[0]);\n    });\n  };\n\n  const currentUrl = () => {\n    if (bookDetail?.title) {\n      return `https://www.alhasson.com/المؤلفات/${bookDetail?.title}}`;\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, bookDetail?.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "description",\n    content: bookDetail?.description\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "keywords",\n    content: bookDetail?.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "msapplication-TileImage",\n    content: bookDetail?.cover\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:site_name",\n    content: bookDetail?.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:title",\n    content: bookDetail?.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:description",\n    content: bookDetail?.description\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:image",\n    content: bookDetail?.cover\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:image:type",\n    content: "image/jpeg"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:image:width",\n    content: "300"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:image:height",\n    content: "300"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:type",\n    content: "article"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    property: "og:url",\n    content: currentUrl()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {\n    type: "application/ld+json"\n  }, `\n                        {\n                            "@context": "https://schema.org",\n                            "@type": "Article",\n                            "headline": "${bookDetail?.title}",\n                            "image": [\n                                "${bookDetail?.cover}",\n                            ],\n                            "author": {\n                                "@type": "Person",\n                                "name": "الدکتور الشیخ علاء الحسّون",\n                                "url": "https://www.alhasson.com"\n                            },\n                            "publisher": {\n                                "@type": "Organization",\n                                "name": "الدکتور الشیخ علاء الحسّون",\n                                "logo": {\n                                    "@type": "ImageObject",\n                                    "url": "https://www.alhasson.com"\n                                }\n                            }\n                        }\n                    `)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "block md:flex wrapper max-w-[75rem] pb-20 pt-10"\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    active: true,\n    loading: true\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "max-w-[15rem] md:max-w-none"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    className: "w-[40rem] rounded md:sticky top-8 mb-5 md:mb-0",\n    alt: bookDetail?.title,\n    src: bookDetail?.cover\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "md:w-[50rem] md:mr-8 mx-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "title mt-0"\n  }, " ", bookDetail?.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex space-x-20 space-x-reverse"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n    className: ""\n  }, "\\u0627\\u0644\\u0646\\u0627\\u0634\\u0631:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {\n    className: ""\n  }, bookDetail?.publisher)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n    className: ""\n  }, "\\u062A\\u0627\\u0631\\u064A\\u062E \\u0627\\u0644\\u0646\\u0634\\u0631:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {\n    className: ""\n  }, bookDetail?.year_published)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n    className: ""\n  }, "\\u0639\\u062F\\u062F \\u0627\\u0644\\u0635\\u0641\\u062D\\u0627\\u062A:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {\n    className: ""\n  }, bookDetail?.pages))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex space-x-1 space-x-reverse mt-5 items-center"\n  }, bookDetail?.word_file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: bookDetail?.word_file,\n    target: "_blank"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    alt: "word-link",\n    src: "/static/img/icon-word.png"\n  })), bookDetail?.pdf_file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: bookDetail?.pdf_file,\n    target: "_blank"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    alt: "pdf-link",\n    src: "/static/img/icon-pdf.png"\n  })), bookDetail?.html_file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: bookDetail?.html_file,\n    target: "_blank"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    alt: "html-link",\n    src: "/static/img/icon-html.png"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\\u0647\\u0630\\u0627 \\u0627\\u0644\\u06A9\\u062A\\u0627\\u0628:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    dangerouslySetInnerHTML: {\n      __html: bookDetail?.description\n    }\n  }))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n\n//# sourceURL=webpack://shop/../frontend/src/pages/bookDetail.js?')}}]);