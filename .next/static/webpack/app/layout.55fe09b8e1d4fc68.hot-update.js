"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/utils/language/Language.ts":
/*!****************************************!*\
  !*** ./src/utils/language/Language.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Language: function() { return /* binding */ Language; },\n/* harmony export */   getLanguageName: function() { return /* binding */ getLanguageName; },\n/* harmony export */   getLanguageNameShort: function() { return /* binding */ getLanguageNameShort; },\n/* harmony export */   getLanguageValueFromCountryCode: function() { return /* binding */ getLanguageValueFromCountryCode; },\n/* harmony export */   getLanguageValueFromEnum: function() { return /* binding */ getLanguageValueFromEnum; },\n/* harmony export */   getLanguageValueFromId: function() { return /* binding */ getLanguageValueFromId; }\n/* harmony export */ });\n/* harmony import */ var _ui_translations_translation_eng_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/ui/translations/translation_eng.json */ \"(app-pages-browser)/./src/ui/translations/translation_eng.json\");\n/* harmony import */ var _ui_translations_translation_ru_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ui/translations/translation_ru.json */ \"(app-pages-browser)/./src/ui/translations/translation_ru.json\");\n/* harmony import */ var _ui_translations_translation_ua_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/translations/translation_ua.json */ \"(app-pages-browser)/./src/ui/translations/translation_ua.json\");\n/* harmony import */ var _ui_translations_translation_de_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/translations/translation_de.json */ \"(app-pages-browser)/./src/ui/translations/translation_de.json\");\n\n\n\n\nvar Language;\n(function(Language) {\n    Language[Language[\"UA\"] = 0] = \"UA\";\n    Language[Language[\"ENG\"] = 1] = \"ENG\";\n    Language[Language[\"RU\"] = 2] = \"RU\";\n    Language[Language[\"DE\"] = 3] = \"DE\";\n})(Language || (Language = {}));\nfunction getLanguageValueFromId(id) {\n    switch(id){\n        case \"0\":\n            return 0;\n        case \"1\":\n            return 1;\n        case \"2\":\n            return 2;\n        case \"3\":\n            return 3;\n        default:\n            return 1;\n    }\n}\nfunction getLanguageValueFromCountryCode(code) {\n    switch(code){\n        case \"RU\":\n            return 2;\n        case \"UA\":\n            return 0;\n        case \"DE\":\n            return 3;\n        default:\n            return 1;\n    }\n}\nfunction getLanguageValueFromEnum(enumValue) {\n    const valueMap = {\n        [1]: _ui_translations_translation_eng_json__WEBPACK_IMPORTED_MODULE_0__,\n        [2]: _ui_translations_translation_ru_json__WEBPACK_IMPORTED_MODULE_1__,\n        [0]: _ui_translations_translation_ua_json__WEBPACK_IMPORTED_MODULE_2__,\n        [3]: _ui_translations_translation_de_json__WEBPACK_IMPORTED_MODULE_3__\n    };\n    return valueMap[enumValue] || _ui_translations_translation_eng_json__WEBPACK_IMPORTED_MODULE_0__;\n}\nfunction getLanguageName(enumValue) {\n    const valueMap = {\n        [1]: \"\\uD83C\\uDDFA\\uD83C\\uDDF8 English\",\n        [2]: \"\\uD83C\\uDDF7\\uD83C\\uDDFA Русский\",\n        [0]: \"\\uD83C\\uDDFA\\uD83C\\uDDE6 Українськ\",\n        [3]: \"\\uD83C\\uDDE9\\uD83C\\uDDEA Deutsch\"\n    };\n    return valueMap[enumValue];\n}\nfunction getLanguageNameShort(enumValue) {\n    const valueMap = {\n        [1]: \"EN\",\n        [2]: \"РУ\",\n        [0]: \"УК\",\n        [3]: \"DE\"\n    };\n    return valueMap[enumValue];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9sYW5ndWFnZS9MYW5ndWFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29FO0FBQ0Y7QUFDQTtBQUNBOztVQUV0REk7Ozs7O0dBQUFBLGFBQUFBO0FBT0wsU0FBU0MsdUJBQ1pDLEVBQVU7SUFFVixPQUFRQTtRQUNKLEtBQUs7WUFDRDtRQUNKLEtBQUs7WUFDRDtRQUNKLEtBQUs7WUFDRDtRQUNKLEtBQUs7WUFDRDtRQUNKO1lBQ0k7SUFDUjtBQUNKO0FBRU8sU0FBU0MsZ0NBQWdDQyxJQUFZO0lBQ3hELE9BQVFBO1FBQ0osS0FBSztZQUNEO1FBQ0osS0FBSztZQUNEO1FBQ0osS0FBSztZQUNEO1FBQ0o7WUFDSTtJQUNSO0FBQ0o7QUFFTyxTQUFTQyx5QkFDWkMsU0FBbUI7SUFFbkIsTUFBTUMsV0FBK0M7UUFDakQsR0FBYyxFQUFFWCxrRUFBZUE7UUFDL0IsR0FBYSxFQUFFQyxpRUFBY0E7UUFDN0IsR0FBYSxFQUFFQyxpRUFBY0E7UUFDN0IsR0FBYSxFQUFFQyxpRUFBY0E7SUFDakM7SUFDQSxPQUFPUSxRQUFRLENBQUNELFVBQVUsSUFBSVYsa0VBQWVBO0FBQ2pEO0FBRU8sU0FBU1ksZ0JBQ1pGLFNBQW1CO0lBRW5CLE1BQU1DLFdBQTBDO1FBQzVDLEdBQWMsRUFBRTtRQUNoQixHQUFhLEVBQUU7UUFDZixHQUFhLEVBQUU7UUFDZixHQUFhLEVBQUU7SUFDbkI7SUFDQSxPQUFPQSxRQUFRLENBQUNELFVBQVU7QUFDOUI7QUFFTyxTQUFTRyxxQkFDWkgsU0FBbUI7SUFFbkIsTUFBTUMsV0FBMEM7UUFDNUMsR0FBYyxFQUFFO1FBQ2hCLEdBQWEsRUFBRTtRQUNmLEdBQWEsRUFBRTtRQUNmLEdBQWEsRUFBRTtJQUNuQjtJQUNBLE9BQU9BLFFBQVEsQ0FBQ0QsVUFBVTtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvbGFuZ3VhZ2UvTGFuZ3VhZ2UudHM/YjgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RyYW5zbGF0aW9ufSBmcm9tIFwiQC91aS90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB0cmFuc2xhdGlvbl9lbmcgZnJvbSBcIkAvdWkvdHJhbnNsYXRpb25zL3RyYW5zbGF0aW9uX2VuZy5qc29uXCJcbmltcG9ydCB0cmFuc2xhdGlvbl9ydSBmcm9tIFwiQC91aS90cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25fcnUuanNvblwiXG5pbXBvcnQgdHJhbnNsYXRpb25fdWEgZnJvbSBcIkAvdWkvdHJhbnNsYXRpb25zL3RyYW5zbGF0aW9uX3VhLmpzb25cIlxuaW1wb3J0IHRyYW5zbGF0aW9uX2RlIGZyb20gXCJAL3VpL3RyYW5zbGF0aW9ucy90cmFuc2xhdGlvbl9kZS5qc29uXCJcblxuZXhwb3J0IGVudW0gTGFuZ3VhZ2Uge1xuICAgIFVBLFxuICAgIEVORyxcbiAgICBSVSxcbiAgICBERVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VWYWx1ZUZyb21JZChcbiAgICBpZDogc3RyaW5nXG4pOiBMYW5ndWFnZSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5VQTtcbiAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuRU5HO1xuICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5SVTtcbiAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuREU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuRU5HXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VWYWx1ZUZyb21Db3VudHJ5Q29kZShjb2RlOiBzdHJpbmcpOiBMYW5ndWFnZSB7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgJ1JVJzpcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5SVTtcbiAgICAgICAgY2FzZSAnVUEnOlxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLlVBO1xuICAgICAgICBjYXNlICdERSc6XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuREU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuRU5HXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VWYWx1ZUZyb21FbnVtKFxuICAgIGVudW1WYWx1ZTogTGFuZ3VhZ2Vcbik6IHRyYW5zbGF0aW9uIHtcbiAgICBjb25zdCB2YWx1ZU1hcDogeyBba2V5IGluIExhbmd1YWdlXTogdHJhbnNsYXRpb24gfSA9IHtcbiAgICAgICAgW0xhbmd1YWdlLkVOR106IHRyYW5zbGF0aW9uX2VuZyxcbiAgICAgICAgW0xhbmd1YWdlLlJVXTogdHJhbnNsYXRpb25fcnUsXG4gICAgICAgIFtMYW5ndWFnZS5VQV06IHRyYW5zbGF0aW9uX3VhLFxuICAgICAgICBbTGFuZ3VhZ2UuREVdOiB0cmFuc2xhdGlvbl9kZVxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlTWFwW2VudW1WYWx1ZV0gfHwgdHJhbnNsYXRpb25fZW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VOYW1lKFxuICAgIGVudW1WYWx1ZTogTGFuZ3VhZ2Vcbik6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWVNYXA6IHsgW2tleSBpbiBMYW5ndWFnZV06IHN0cmluZyB9ID0ge1xuICAgICAgICBbTGFuZ3VhZ2UuRU5HXTogXCLwn4e68J+HuCBFbmdsaXNoXCIsXG4gICAgICAgIFtMYW5ndWFnZS5SVV06IFwi8J+Ht/Cfh7og0KDRg9GB0YHQutC40LlcIixcbiAgICAgICAgW0xhbmd1YWdlLlVBXTogXCLwn4e68J+HpiDQo9C60YDQsNGX0L3RgdGM0LpcIixcbiAgICAgICAgW0xhbmd1YWdlLkRFXTogXCLwn4ep8J+HqiBEZXV0c2NoXCJcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZU1hcFtlbnVtVmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VOYW1lU2hvcnQoXG4gICAgZW51bVZhbHVlOiBMYW5ndWFnZVxuKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZU1hcDogeyBba2V5IGluIExhbmd1YWdlXTogc3RyaW5nIH0gPSB7XG4gICAgICAgIFtMYW5ndWFnZS5FTkddOiBcIkVOXCIsXG4gICAgICAgIFtMYW5ndWFnZS5SVV06IFwi0KDQo1wiLFxuICAgICAgICBbTGFuZ3VhZ2UuVUFdOiBcItCj0JpcIixcbiAgICAgICAgW0xhbmd1YWdlLkRFXTogXCJERVwiXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVNYXBbZW51bVZhbHVlXTtcbn0iXSwibmFtZXMiOlsidHJhbnNsYXRpb25fZW5nIiwidHJhbnNsYXRpb25fcnUiLCJ0cmFuc2xhdGlvbl91YSIsInRyYW5zbGF0aW9uX2RlIiwiTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZVZhbHVlRnJvbUlkIiwiaWQiLCJnZXRMYW5ndWFnZVZhbHVlRnJvbUNvdW50cnlDb2RlIiwiY29kZSIsImdldExhbmd1YWdlVmFsdWVGcm9tRW51bSIsImVudW1WYWx1ZSIsInZhbHVlTWFwIiwiZ2V0TGFuZ3VhZ2VOYW1lIiwiZ2V0TGFuZ3VhZ2VOYW1lU2hvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/language/Language.ts\n"));

/***/ })

});