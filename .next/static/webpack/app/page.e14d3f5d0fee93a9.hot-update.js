"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/ui/blocks/main/MainBlock.tsx":
/*!******************************************!*\
  !*** ./src/ui/blocks/main/MainBlock.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainBlock: function() { return /* binding */ MainBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/ui/blocks/main/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/hooks/useWindowSize */ \"(app-pages-browser)/./src/lib/hooks/useWindowSize.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_svg_logo_black_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../public/svg/logo_black.svg */ \"(app-pages-browser)/./public/svg/logo_black.svg\");\n/* harmony import */ var _public_img_mainblockfirstimg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../public/img/mainblockfirstimg.png */ \"(app-pages-browser)/./public/img/mainblockfirstimg.png\");\n/* harmony import */ var _public_img_mainblocksecondimg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/../public/img/mainblocksecondimg.png */ \"(app-pages-browser)/./public/img/mainblocksecondimg.png\");\n/* harmony import */ var _public_svg_arrow_link_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/../public/svg/arrow_link.svg */ \"(app-pages-browser)/./public/svg/arrow_link.svg\");\n/* harmony import */ var _utils_language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/language/LanguageContext */ \"(app-pages-browser)/./src/utils/language/LanguageContext.ts\");\n/* harmony import */ var _utils_Const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/Const */ \"(app-pages-browser)/./src/utils/Const.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ MainBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MainBlock() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { width } = (0,_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.useWindowSize)();\n    const { translations } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__.LanguageContext);\n    const mobileWidth = 1000;\n    const container = isMobile ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container_mobile) : (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container_desktop);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMobile(width <= mobileWidth);\n    }, [\n        width\n    ]);\n    function onDonateClick() {\n        router.push(\"/#\".concat(_utils_Const__WEBPACK_IMPORTED_MODULE_9__.mainPageIds.donate));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: container,\n        id: _utils_Const__WEBPACK_IMPORTED_MODULE_9__.mainPageIds.main,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().information),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: translations.main.title\n                    }, void 0, false, {\n                        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: translations.main.subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().grid_container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: \"image\",\n                        src: _public_img_mainblockfirstimg_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        priority: true,\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().item_fist)\n                    }, void 0, false, {\n                        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().item_second),\n                        onClick: ()=>{\n                            router.push(\"/#\".concat(_utils_Const__WEBPACK_IMPORTED_MODULE_9__.mainPageIds.project.ready));\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().project_overlay)\n                            }, void 0, false, {\n                                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_svg_arrow_link_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().project_icon)\n                            }, void 0, false, {\n                                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().project_text),\n                                children: translations.our_projects\n                            }, void 0, false, {\n                                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: \"image\",\n                        src: _public_img_mainblocksecondimg_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        priority: true,\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().item_third)\n                    }, void 0, false, {\n                        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_svg_logo_black_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n                lineNumber: 55,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Finntroll/Projects/artevidedemo/src/ui/blocks/main/MainBlock.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(MainBlock, \"vbqsp54uHITXjJrZq//SvNJ1byE=\", false, function() {\n    return [\n        _lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__.useWindowSize,\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter\n    ];\n});\n_c = MainBlock;\nvar _c;\n$RefreshReg$(_c, \"MainBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91aS9ibG9ja3MvbWFpbi9NYWluQmxvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDaUI7QUFDRjtBQUV2QjtBQUNrQjtBQUNhO0FBQ0U7QUFDVjtBQUNXO0FBQ3ZCO0FBQ0E7QUFFbkMsU0FBU2E7O0lBRVosTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBQ1ksS0FBSyxFQUFDLEdBQUdmLHVFQUFhQTtJQUM3QixNQUFNLEVBQUNnQixZQUFZLEVBQUMsR0FBR2YsaURBQVVBLENBQUNRLDRFQUFlQTtJQUNqRCxNQUFNUSxjQUFjO0lBQ3BCLE1BQU1DLFlBQVlMLFdBQVdkLDZFQUFzQixHQUFHQSw4RUFBdUI7SUFDN0UsTUFBTXNCLFNBQVNWLDJEQUFTQTtJQUV4QlQsZ0RBQVNBLENBQUM7UUFDTlksWUFBWUMsU0FBU0U7SUFDekIsR0FBRztRQUFDRjtLQUFNO0lBRVYsU0FBU087UUFDTEQsT0FBT0UsSUFBSSxDQUFDLEtBQXdCLE9BQW5CYixxREFBV0EsQ0FBQ2MsTUFBTTtJQUN2QztJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXUjtRQUFXUyxJQUFJakIscURBQVdBLENBQUNrQixJQUFJOzswQkFFM0MsOERBQUNIO2dCQUFJQyxXQUFXM0Isd0VBQWlCOztrQ0FDN0IsOERBQUMrQjtrQ0FBSWQsYUFBYVksSUFBSSxDQUFDRyxLQUFLOzs7Ozs7a0NBQzVCLDhEQUFDQztrQ0FBSWhCLGFBQWFZLElBQUksQ0FBQ0ssUUFBUTs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ1I7Z0JBQUlDLFdBQVczQiwyRUFBb0I7O2tDQUNoQyw4REFBQ0ssbURBQUtBO3dCQUFDK0IsS0FBSzt3QkFBU0MsS0FBSzlCLHlFQUFVQTt3QkFBRStCLFFBQVE7d0JBQUNYLFdBQVczQixzRUFBZTs7Ozs7O2tDQUN6RSw4REFBQzBCO3dCQUFJQyxXQUFXM0Isd0VBQWlCO3dCQUFFeUMsU0FBUzs0QkFDeENuQixPQUFPRSxJQUFJLENBQUMsS0FBK0IsT0FBMUJiLHFEQUFXQSxDQUFDK0IsT0FBTyxDQUFDQyxLQUFLO3dCQUM5Qzs7MENBQ0ksOERBQUNqQjtnQ0FBSUMsV0FBVzNCLDRFQUFxQjs7Ozs7OzBDQUNyQyw4REFBQ1Msa0VBQVNBO2dDQUFDa0IsV0FBVzNCLHlFQUFrQjs7Ozs7OzBDQUN4Qyw4REFBQzhDO2dDQUFFbkIsV0FBVzNCLHlFQUFrQjswQ0FBR2lCLGFBQWErQixZQUFZOzs7Ozs7Ozs7Ozs7a0NBRWhFLDhEQUFDM0MsbURBQUtBO3dCQUFDK0IsS0FBSzt3QkFBU0MsS0FBSzdCLDBFQUFXQTt3QkFBRThCLFFBQVE7d0JBQUNYLFdBQVczQix1RUFBZ0I7Ozs7Ozs7Ozs7OztZQUkzRWMsMEJBQ0ksOERBQUNZO2dCQUFJQyxXQUFXM0IsaUVBQVU7MEJBQ3RCLDRFQUFDTSxrRUFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I7R0E5Q2dCTzs7UUFHSVosbUVBQWFBO1FBSWRXLHVEQUFTQTs7O0tBUFpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9ibG9ja3MvbWFpbi9NYWluQmxvY2sudHN4Pzk1OTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHt1c2VXaW5kb3dTaXplfSBmcm9tIFwiQC9saWIvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAnQC91aS9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQC8uLi9wdWJsaWMvc3ZnL2xvZ29fYmxhY2suc3ZnXCJcbmltcG9ydCBGaXJzdEltYWdlIGZyb20gXCJALy4uL3B1YmxpYy9pbWcvbWFpbmJsb2NrZmlyc3RpbWcucG5nXCJcbmltcG9ydCBTZWNvbmRJbWFnZSBmcm9tIFwiQC8uLi9wdWJsaWMvaW1nL21haW5ibG9ja3NlY29uZGltZy5wbmdcIlxuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiQC8uLi9wdWJsaWMvc3ZnL2Fycm93X2xpbmsuc3ZnXCJcbmltcG9ydCB7TGFuZ3VhZ2VDb250ZXh0fSBmcm9tICdAL3V0aWxzL2xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dCc7XG5pbXBvcnQge21haW5QYWdlSWRzfSBmcm9tIFwiQC91dGlscy9Db25zdFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1haW5CbG9jaygpIHtcblxuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3Qge3dpZHRofSA9IHVzZVdpbmRvd1NpemUoKVxuICAgIGNvbnN0IHt0cmFuc2xhdGlvbnN9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpIVxuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gMTAwMFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGlzTW9iaWxlID8gc3R5bGUuY29udGFpbmVyX21vYmlsZSA6IHN0eWxlLmNvbnRhaW5lcl9kZXNrdG9wXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldElzTW9iaWxlKHdpZHRoIDw9IG1vYmlsZVdpZHRoKVxuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgZnVuY3Rpb24gb25Eb25hdGVDbGljaygpIHtcbiAgICAgICAgcm91dGVyLnB1c2goYC8jJHttYWluUGFnZUlkcy5kb25hdGV9YClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfSBpZD17bWFpblBhZ2VJZHMubWFpbn0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvcm1hdGlvbn0+XG4gICAgICAgICAgICAgICAgPGgxPnt0cmFuc2xhdGlvbnMubWFpbi50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxoMz57dHJhbnNsYXRpb25zLm1haW4uc3VidGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB0ZXh0PXt0cmFuc2xhdGlvbnMuZG9uYXRlfSBvbkNsaWNrPXtvbkRvbmF0ZUNsaWNrfS8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZF9jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9e1wiaW1hZ2VcIn0gc3JjPXtGaXJzdEltYWdlfSBwcmlvcml0eSBjbGFzc05hbWU9e3N0eWxlLml0ZW1fZmlzdH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtX3NlY29uZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgLyMke21haW5QYWdlSWRzLnByb2plY3QucmVhZHl9YClcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2plY3Rfb3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dJY29uIGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF9pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF90ZXh0fT57dHJhbnNsYXRpb25zLm91cl9wcm9qZWN0c308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD17XCJpbWFnZVwifSBzcmM9e1NlY29uZEltYWdlfSBwcmlvcml0eSBjbGFzc05hbWU9e3N0eWxlLml0ZW1fdGhpcmR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNNb2JpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9nb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxvZ28iLCJGaXJzdEltYWdlIiwiU2Vjb25kSW1hZ2UiLCJBcnJvd0ljb24iLCJMYW5ndWFnZUNvbnRleHQiLCJtYWluUGFnZUlkcyIsInVzZVJvdXRlciIsIk1haW5CbG9jayIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ3aWR0aCIsInRyYW5zbGF0aW9ucyIsIm1vYmlsZVdpZHRoIiwiY29udGFpbmVyIiwiY29udGFpbmVyX21vYmlsZSIsImNvbnRhaW5lcl9kZXNrdG9wIiwicm91dGVyIiwib25Eb25hdGVDbGljayIsInB1c2giLCJkb25hdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm1haW4iLCJpbmZvcm1hdGlvbiIsImgxIiwidGl0bGUiLCJoMyIsInN1YnRpdGxlIiwiZ3JpZF9jb250YWluZXIiLCJhbHQiLCJzcmMiLCJwcmlvcml0eSIsIml0ZW1fZmlzdCIsIml0ZW1fc2Vjb25kIiwib25DbGljayIsInByb2plY3QiLCJyZWFkeSIsInByb2plY3Rfb3ZlcmxheSIsInByb2plY3RfaWNvbiIsInAiLCJwcm9qZWN0X3RleHQiLCJvdXJfcHJvamVjdHMiLCJpdGVtX3RoaXJkIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/ui/blocks/main/MainBlock.tsx\n"));

/***/ })

});