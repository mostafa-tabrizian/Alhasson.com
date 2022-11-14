/*! For license information please see frontend_src_pages_landPage_js.js.LICENSE.txt */
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([["frontend_src_pages_landPage_js"],{"../frontend/node_modules/@trendyol-js/react-carousel/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Carousel": () => (/* binding */ b),\n/* harmony export */   "ScrollingCarousel": () => (/* binding */ R)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\n\n/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var l="styles-module_carousel-base__3keqD",c="styles-module_item-provider__YgMwz",u="styles-module_item-container__a8zaY",f="styles-module_item-tracker__3bypy",d="styles-module_carousel-arrow__26sRw";a(".styles-module_carousel-base__3keqD {\\n\\twidth: 100%;\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\toutline: none;\\n}\\n\\n.styles-module_item-provider__YgMwz {\\n\\toverflow: hidden;\\n\\twidth: 100%;\\n\\tcursor: pointer;\\n}\\n\\n.styles-module_item-container__a8zaY img {\\n\\t-webkit-user-select: none;\\n\\t        user-select: none;\\n\\t-webkit-user-drag: none;\\n}\\n\\n.styles-module_item-tracker__3bypy {\\n\\theight: 100%;\\n\\tdisplay: flex;\\n}\\n\\n.styles-module_carousel-arrow__26sRw {\\n\\tz-index: 1;\\n}\\n");var h,m=function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:d,onClick:e.onClick,"data-direction":e.direction})};!function(t){t[t.Right=-1]="Right",t[t.Left=1]="Left"}(h||(h={}));var v=function(){function t(t,e){this.arr=t,this.currentIndex=e}return t.prototype.next=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t<e.length-1?t+1:0,this.current()},t.prototype.prev=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t>0&&t<e.length?t-1:e.length-1,this.current()},t.prototype.current=function(){return this.arr[this.currentIndex]},t}(),g=function(t,e,n){return n*t*e},p=function(t,e,n,r){var i=t>e;return n?{left:i,right:i}:{left:i&&0!==r,right:i&&r+e<t}},w=function(t,e,n){if(!n)return t;for(var r=Array.from(t),i=new v(t,0),o=0;o<e;o++)r.unshift(i.prev());return r};function y(t){return t.nativeEvent instanceof MouseEvent?t.nativeEvent.pageX:t.nativeEvent instanceof TouchEvent?t.nativeEvent.changedTouches[0].pageX:0}function _(t,e,n,r,i){if(n&&n.length<e.length)return w(e,r,i);var o=t.map((function(t){return e.find((function(e){return t.key===e.key}))}));return o.some((function(t){return void 0===t}))?w(e,r,i):o}var L=function(e){var n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(200),a=n[0],l=n[1],d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(t){if(null!==t){var n=t.getBoundingClientRect().width/e.show;l(n),e.widthCallBack(n)}}),[a]);e.responsive&&function(t){var e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),n=e[0],o=e[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var e=function(){var e=n-window.innerWidth;o(window.innerWidth),t(e)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[])}((function(t){l(a-t)}));var m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),v=m[0],g=m[1],p=function(t){t.persist(),g(s(s({},v),{isDown:!0,start:y(t),initial:e.transform,finished:!1}))},w=function(t){if(t.persist(),!v.finished){if(Math.abs(v.drag)<a*e.swipeOn)return e.dragCallback(e.transform),g({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});e.slideCallback(v.drag>0?h.Right:h.Left),g(s(s({},v),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},_=function(t){if(t.persist(),v.isDown){var e=y(t);g(s(s({},v),{drag:v.start-e,pointers:!1}))}},L=e.swiping?{onTouchCancel:w,onTouchEnd:w,onTouchMove:_,onTouchStart:p,onMouseDown:p,onMouseLeave:w,onMouseUp:w,onMouseMove:_}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:d,className:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",s({"data-testid":"trackList"},L,{className:f,style:{transform:"translateX("+(e.transform-v.drag)+"px)",transition:"transform "+e.transition+"s ease 0s",width:a*e.items.length}}),e.items.map((function(e,n){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:n,style:{width:a,pointerEvents:v.pointers?"all":"none"},className:u},e)}))))},k={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{},dynamic:!1,paginationCallback:null,pageCount:0,rightArrow:null,leftArrow:null},b=function(i){var o,a,c,u,f=s(s({},k),i),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(w(f.children,f.slide,f.infinite)),y=d[0],b=d[1],E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),x=E[0],C=E[1],R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({transform:0,transition:0,isSliding:!1}),T=R[0],M=R[1],I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),N=I[0],D=I[1],A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(p(f.children.length,f.show,f.infinite,N)),S=A[0],W=A[1],z=(c=i.children,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){u.current=c})),u.current),X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),B=X[0],q=X[1],O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(w(f.children,f.slide,f.infinite)),K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);f.dynamic&&(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var t=_(O.current,f.children,z,f.slide,f.infinite);b(t),O.current=t,B<f.pageCount&&z&&(null==z?void 0:z.length)<f.children.length&&(Y(h.Right),q(B+1))}),[f.children]);var Y=function(t){if(!(T.isSliding||t===h.Right&&!S.right||t===h.Left&&!S.left)){if(f.paginationCallback&&t===h.Right&&B<f.pageCount-1&&!K.current)return K.current=!0,void f.paginationCallback(t);var e=f.children,n=function(t,e,n,r){var i=t-r*e;return i<0?n+i:n<=i?i-n:i}(N,f.slide,e.length,t),r=f.infinite?function(t,e,n,r,i,o){var s=new v(t,n),a=Array.from(e);switch(+o){case h.Left:for(var l=i;l>=0;l--)(i-l<0||!a[l-i])&&a.unshift(s.current()),s.prev();break;case h.Right:for(l=0;l<r+i;l++)a[2*i+l]||a.push(s.current()),s.next()}return a}(e,y,n,f.show,f.slide,t):y;f.infinite&&t===h.Right&&(b(r),O.current=r),M({transform:T.transform+g(x,f.slide,t),transition:f.transition,isSliding:!0}),D(n),W(p(e.length,f.show,f.infinite,n)),setTimeout((function(){if(f.infinite){var e=function(t,e,n){return n===h.Left?t.slice(0,-1*e):t.slice(e)}(t===h.Right?O.current:r,f.slide,t);b(e),O.current=e}M({transform:f.infinite?g(x,f.slide,h.Right):T.transform+g(x,f.slide,t),transition:0,isSliding:!1})}),1e3*f.transition),K.current=!1}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",s({},f.a11y,{"data-testid":"carousel",tabIndex:0},f.useArrowKeys?{onKeyDown:function(t){37===t.keyCode?Y(h.Left):39===t.keyCode&&Y(h.Right)}}:{},{className:l+" "+f.className}),S.left&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:function(){return Y(h.Left)}},null!==(o=f.leftArrow)&&void 0!==o?o:react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,{direction:"left"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(L,s({},f,{transition:T.transition,items:O.current,transform:T.transform,slideCallback:function(t){Y(t)},dragCallback:function(t){M({transform:t,transition:f.transition,isSliding:!1}),setTimeout((function(){return M(s(s({},T),{transition:0}))}),1e3*f.transition)},widthCallBack:function(t){C(t),M({transform:f.infinite?g(t,f.slide,h.Right):0,transition:0,isSliding:!1})}})),S.right&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:function(){return Y(h.Right)}},null!==(a=f.rightArrow)&&void 0!==a?a:react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,{direction:"right"})))},E="styles-module_sliderBase__swkx1",x="styles-module_slider__o0fqa",C="styles-module_sliding__3T6T6";a(".styles-module_sliderBase__swkx1 {\\n\\twidth: 100%;\\n\\tposition: relative;\\n}\\n\\n.styles-module_slider__o0fqa {\\n\\tdisplay: flex;\\n\\toverflow-x: auto;\\n\\tscrollbar-width: none; /* Firefox 64 */\\n\\t-ms-overflow-style: none; /* Internet Explorer 11 */\\n}\\n\\n.styles-module_slider__o0fqa::-webkit-scrollbar {\\n\\t/** WebKit */\\n\\tdisplay: none;\\n}\\n\\n.styles-module_slider__o0fqa > * {\\n\\tflex: 0 0 auto;\\n}\\n\\n.styles-module_sliding__3T6T6 > * {\\n\\tpointer-events: none;\\n}\\n");var R=function(n){var i=n.children,s=n.className,a=n.leftIcon,l=n.rightIcon,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),f=u[0],d=u[1],m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({startX:0,scrollLeft:0}),v=m[0],g=m[1],p=function(){var t=c.current;return{left:!!t&&t.scrollLeft>0,right:!!t&&t.scrollWidth>t.scrollLeft+t.offsetWidth}},w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(p()),y=w[0],_=w[1],L=function(t){_(p())},k=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(t){null!==t&&(Object.defineProperty(c,"current",{value:t}),_(p()),t.addEventListener("scroll",L))}),[c,i]),b=function(t){d(!1),_(p()),c.current.classList.remove(C)},R=function(t){var e=function(t){for(var e,n,r=c.current,i=t===h.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,o=0,s=0,a=Array.from(r.children);s<a.length;s++){var l=a[s],u=(e=l,n=void 0,n=getComputedStyle(e),e.offsetWidth+(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0));if((o+=u)>=i){var f=t===h.Left?o-i:u;return(r.offsetWidth-f)*t}}return r.offsetWidth}(t),n=c.current.scrollLeft;T(500,e,n)},T=function(t,e,n){for(var r=0,i=0;r<=t;i++)window.setTimeout(M,r,i*e/100+n),r+=t/100},M=function(t){c.current.scrollLeft=t},I=function(e,n,r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-arrow":n,onClick:function(){return R(e)}},null!=r?r:react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",null))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:E+" "+s,"data-testid":"carousel"},y.left&&I(h.Right,"left",a),y.right&&I(h.Left,"right",l),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:k,onMouseDown:function(t){d(!0),g({startX:t.pageX-c.current.offsetLeft,scrollLeft:c.current.scrollLeft})},onMouseLeave:b,onMouseUp:b,onMouseMove:function(t){if(f){t.preventDefault(),c.current.classList.add(C);var e=t.pageX-c.current.offsetLeft-v.startX;c.current.scrollLeft=v.scrollLeft-e}},className:x},i))};\n\n\n//# sourceURL=webpack://shop/../frontend/node_modules/@trendyol-js/react-carousel/dist/es/index.js?')},"../frontend/src/pages/landPage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/es/Helmet.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../frontend/node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @trendyol-js/react-carousel */ "../frontend/node_modules/@trendyol-js/react-carousel/dist/es/index.js");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../frontend/node_modules/antd/es/skeleton/index.js");\n/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base */ "../frontend/src/components/base.js");\n\n\n\n\n\n\n\n\nconst landPage = () => {\n  const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [clipsData, setClipsData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getBooks();\n    getClipData();\n    setLoading(false);\n  }, []);\n\n  const getBooks = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/bookView/`).then(book => {\n      setBooks(book?.data);\n    });\n  };\n\n  const returnBooks = () => {\n    return books?.map(book => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {\n        className: "my-3 mr-5 hoverGold"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n        to: `/books/${(0,_components_base__WEBPACK_IMPORTED_MODULE_3__.replaceFunction)(book.title, \' \', \'-\')}`\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n        className: "rounded w-[11rem] md:w-[15rem] max-w-max",\n        src: book?.thumbnail,\n        alt: book?.title\n      })));\n    });\n  };\n\n  const getClipData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\'/api/clip/\').then(res => {\n      setClipsData(res.data);\n    });\n  };\n\n  const options = {\n    year: \'numeric\',\n    month: \'long\',\n    day: \'numeric\'\n  };\n\n  const returnClipData = () => {\n    return clipsData?.map(clip => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "ml-10"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "mb-5",\n        dangerouslySetInnerHTML: {\n          __html: clip.source\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, clip.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), new Date(clip.date_created).toLocaleDateString(\'ar-EG\', options))));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "\\u0645\\u0648\\u0642\\u0639 \\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631 \\u0627\\u0644\\u0634\\u06CC\\u062E \\u0639\\u0644\\u0627\\u0621 \\u0627\\u0644\\u062D\\u0633\\u0651\\u0648\\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "keywords",\n    content: "\\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631 \\u0634\\u06CC\\u062E \\u0639\\u0644\\u0627\\u0621 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646, \\u0627\\u0644\\u0634\\u06CC\\u062E \\u0639\\u0644\\u0627\\u0621 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646, \\u0639\\u0644\\u0627\\u0621 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646, \\u0639\\u0644\\u0627 \\u062A\\u0628\\u0631\\u06CC\\u0632\\u06CC\\u0627\\u0646, \\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631 \\u0634\\u06CC\\u062E \\u0639\\u0644\\u0627 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646, \\u0627\\u0644\\u0634\\u06CC\\u062E \\u0639\\u0644\\u0627 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646, \\u0639\\u0644\\u0627 \\u0627\\u0644\\u062D\\u0633\\u0648\\u0646"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "description",\n    content: "\\u062F\\u0643\\u062A\\u0648\\u0631\\u0627\\u0647 \\u0641\\u064A \\u0639\\u0644\\u0648\\u0645 \\u0627\\u0644\\u062D\\u062F\\u064A\\u062B\\u060C \\u0648\\u0645\\u0647\\u062A\\u0645 \\u062D\\u0627\\u0644\\u064A\\u0627\\u064B \\u0628\\u062A\\u0623\\u0644\\u064A\\u0641 \\u0645\\u0648\\u0633\\u0648\\u0639\\u0629 \\u062D\\u062F\\u064A\\u062B \\u0623\\u0647\\u0644 \\u0627\\u0644\\u0628\\u064A\\u062A(\\u0639)"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "mt-[-2rem]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    className: "hidden w-full md:block",\n    src: "/static/img/mainBg.jpg",\n    alt: "\\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631-\\u0627\\u0644\\u0634\\u06CC\\u062E-\\u0639\\u0644\\u0627\\u0621-\\u0627\\u0644\\u062D\\u0633\\u0651\\u0648\\u0646"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    className: "block w-full md:hidden",\n    src: "/static/img/main-Mobile.jpg",\n    alt: "\\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631-\\u0627\\u0644\\u0634\\u06CC\\u062E-\\u0639\\u0644\\u0627\\u0621-\\u0627\\u0644\\u062D\\u0633\\u0651\\u0648\\u0646"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {\n    className: "bg-gradient-to-b py-10 wrapper from-[#0d0735] to-[#070515]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\\u0627\\u0644\\u0645\\u0624\\u0644\\u0641\\u0627\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    className: "underlineHover",\n    to: "\\u0627\\u0644\\u0645\\u0624\\u0644\\u0641\\u0627\\u062A"\n  }, "\\u0645\\u0634\\u0627\\u0647\\u062F\\u0629 \\u0627\\u0644\\u062C\\u0645\\u06CC\\u0639"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "p-5"\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex gap-8 wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 250,\n    shape: \'default\',\n    loading: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 250,\n    shape: \'default\',\n    loading: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 250,\n    shape: \'default\',\n    loading: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 250,\n    shape: \'default\',\n    loading: true\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_6__.ScrollingCarousel, null, returnBooks()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {\n    className: "bg-gradient-to-b py-10 wrapper from-[#070515] to-[#0d0735]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\\u0627\\u0644\\u0645\\u062D\\u0627\\u0636\\u0631\\u0627\\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    className: "underlineHover",\n    to: "\\u0627\\u0644\\u0645\\u062D\\u0627\\u0636\\u0631\\u0627\\u062A"\n  }, "\\u0645\\u0634\\u0627\\u0647\\u062F\\u0629 \\u0627\\u0644\\u062C\\u0645\\u06CC\\u0639"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "p-5"\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex gap-8 wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 300,\n    shape: \'default\',\n    loading: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 300,\n    shape: \'default\',\n    loading: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Avatar, {\n    active: true,\n    size: 300,\n    shape: \'default\',\n    loading: true\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex flex-wrap"\n  }, returnClipData()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {\n    className: "bg-gradient-to-b to-[#070515] from-[#0d0735] pb-20 flex justify-center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "grid space-y-10 md:flex wrapper-p"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex justify-center ml-5 "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    className: "w-[15rem] md:w-[80rem] rounded-lg",\n    src: "/static/img/marefe.jpg",\n    alt: "\\u0627\\u0644\\u062F\\u06A9\\u062A\\u0648\\u0631-\\u0627\\u0644\\u0634\\u06CC\\u062E-\\u0639\\u0644\\u0627\\u0621-\\u0627\\u0644\\u062D\\u0633\\u0651\\u0648\\u0646"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: ""\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "rightBorder"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n    className: "colorPr"\n  }, "\\u0627\\u0644\\u062A\\u0639\\u0631\\u064A\\u0641 \\u0628\\u0645\\u0634\\u0631\\u0648\\u0639 \\u0625\\u062D\\u064A\\u0627\\u0621 \\u062D\\u062F\\u064A\\u062B \\u0623\\u0647\\u0644 \\u0627\\u0644\\u0628\\u064A\\u062A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n    className: "hadithTextSalam"\n  }, "(\\u0639\\u0644\\u06CC\\u0647\\u0645 \\u0627\\u0644\\u0633\\u0644\\u0627\\u0645)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\\u064A\\u0633\\u062A\\u0647\\u062F\\u0641 \\u0647\\u0630\\u0627 \\u0627\\u0644\\u0645\\u0634\\u0631\\u0648\\u0639 \\u0639\\u0631\\u0636 \\u0645\\u0639\\u0644\\u0648\\u0645\\u0627\\u062A \\u062D\\u062F\\u064A\\u062B \\u0623\\u0647\\u0640\\u0644 \\u0627\\u0644\\u0628\\u064A\\u0640\\u062A (\\u0639\\u0644\\u06CC\\u0647\\u0645 \\u0627\\u0644\\u0633\\u0644\\u0627\\u0645) \\u0648\\u0641\\u0640\\u0642 \\u0645\\u0646\\u0647\\u062C\\u064A\\u0629 \\u062E\\u0640\\u0644\\u0642 \\u0627\\u0644\\u0635\\u0640\\u0648\\u0631 \\u0627\\u0644\\u0645\\u0639\\u0631\\u0641\\u064A\\u0629 \\u0627\\u0644\\u0634\\u0627\\u0645\\u0640\\u0644\\u0629 \\u0648\\u0627\\u0644\\u0645\\u0640\\u0640\\u062A\\u0643\\u0627\\u0645\\u0644\\u0629 \\u0639\\u0646 \\u0637\\u0640\\u0631\\u064A\\u0642 \\u062A\\u0640\\u0646\\u0638\\u064A\\u0640\\u0645 \\u0627\\u0644\\u0645\\u0642\\u0640\\u0627\\u0637\\u0639 \\u0627\\u0644\\u062C\\u0632\\u0626\\u064A\\u0640\\u0629 \\u0627\\u0644\\u0645\\u062A\\u0631\\u0627\\u0628\\u0640\\u0637\\u0629 \\u0627\\u0644\\u062A\\u064A \\u0628\\u064A\\u0651\\u0640\\u0646\\u0647\\u0627 \\u0623\\u0647\\u0644 \\u0627\\u0644\\u0628\\u064A\\u0640\\u062A (\\u0639\\u0644\\u06CC\\u0647\\u0645 \\u0627\\u0644\\u0633\\u0644\\u0627\\u0645) \\u0641\\u064A \\u0645\\u062E\\u062A\\u0644\\u0641 \\u0627\\u0644\\u0645\\u0648\\u0627\\u0636\\u064A\\u0639.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "flex justify-end w-full colorPr"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: "\\u0645\\u0648\\u0633\\u0648\\u0639\\u0629-\\u062D\\u062F\\u06CC\\u062B-\\u0623\\u0647\\u0644-\\u0627\\u0644\\u0628\\u06CC\\u062A",\n    className: "more_p3 pos-abs"\n  }, "\\u0644\\u0644\\u0645\\u0632\\u06CC\\u062F ..."))))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landPage);\n\n//# sourceURL=webpack://shop/../frontend/src/pages/landPage.js?')}}]);