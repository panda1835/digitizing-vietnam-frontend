"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/our-collections/[collectionid]/page",{

/***/ "(app-pages-browser)/./src/app/[locale]/our-collections/[collectionid]/page.tsx":
/*!******************************************************************!*\
  !*** ./src/app/[locale]/our-collections/[collectionid]/page.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_CollectionItemGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/CollectionItemGallery */ \"(app-pages-browser)/./src/components/CollectionItemGallery.jsx\");\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Item */ \"(app-pages-browser)/./src/components/Item.jsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"(app-pages-browser)/./src/app/config.js\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/fetch */ \"(app-pages-browser)/./src/lib/fetch.js\");\n// \"use client\";\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EachCollection = async (param)=>{\n    let { params } = param;\n    _s();\n    const locale = params.locale;\n    const collectionId = params.collectionid;\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)(\"Collection\");\n    // Fetch data\n    const collectionDataResponse = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchData)(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"api\"][\"collections\"], \"/\").concat(collectionId, \"?lang=\").concat(locale));\n    const collectionData = collectionDataResponse[\"data\"];\n    const featuredArticlesResponse = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchData)(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"api\"][\"blogs\"], \"?related-collection=\").concat(collectionId));\n    const featuredArticles = featuredArticlesResponse[\"data\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center max-width\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-col mb-20 mx-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"bg-no-repeat bg-cover bg-center w-full h-80 flex flex-col items-center justify-center rounded-lg relative text-center\",\n                    style: {\n                        backgroundImage: \"url(\".concat(collectionData.image_url, \")\")\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black opacity-50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white relative z-10\",\n                            children: collectionData.title\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\",\n                                        onClick: ()=>{\n                                            var _document_getElementById;\n                                            (_document_getElementById = document.getElementById(\"our-volumes\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({\n                                                behavior: \"smooth\"\n                                            });\n                                        },\n                                        children: t(\"our-volumes\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\",\n                                        onClick: ()=>{\n                                            var _document_getElementById;\n                                            (_document_getElementById = document.getElementById(\"feature-articles\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({\n                                                behavior: \"smooth\"\n                                            });\n                                        },\n                                        children: t(\"featured-articles\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-10\",\n                    children: collectionData.description\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CollectionItemGallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    collectionData: collectionData,\n                    collectionId: collectionId\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-10\"\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            id: \"feature-articles\",\n                            children: t(\"featured-articles\")\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-3 gap-8 mt-10\",\n                            children: featuredArticles && featuredArticles && featuredArticles.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: item.title,\n                                    description: \"\",\n                                    imageUrl: item.image_url,\n                                    link: \"/blogs/\".concat(item.blog_id)\n                                }, \"/blogs/\".concat(item.blog_id), false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EachCollection, \"h6+q2O3NJKPY5uL0BIJGLIanww8=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations\n    ];\n});\n_c = EachCollection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EachCollection);\nvar _c;\n$RefreshReg$(_c, \"EachCollection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xvY2FsZV0vb3VyLWNvbGxlY3Rpb25zL1tjb2xsZWN0aW9uaWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0JBQWdCOzs7QUFDNEI7QUFFcUM7QUFDbEM7QUFFVjtBQUNhO0FBQ2xELE1BQU1LLGlCQUFpQjtRQUFPLEVBQzVCQyxNQUFNLEVBR1A7O0lBQ0MsTUFBTUMsU0FBU0QsT0FBT0MsTUFBTTtJQUM1QixNQUFNQyxlQUFlRixPQUFPRyxZQUFZO0lBRXhDLE1BQU1DLElBQUlWLDBEQUFlQSxDQUFDO0lBRTFCLGFBQWE7SUFDYixNQUFNVyx5QkFBeUIsTUFBTVAscURBQVNBLENBQzVDLEdBQW1DSSxPQUFoQ0wsK0NBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLEtBQXdCSSxPQUFyQkMsY0FBYSxVQUFlLE9BQVBEO0lBRTFELE1BQU1LLGlCQUFpQkQsc0JBQXNCLENBQUMsT0FBTztJQUVyRCxNQUFNRSwyQkFBMkIsTUFBTVQscURBQVNBLENBQzlDLEdBQWdESSxPQUE3Q0wsK0NBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLHdCQUFtQyxPQUFiSztJQUVsRCxNQUFNTSxtQkFBbUJELHdCQUF3QixDQUFDLE9BQU87SUFFekQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFDQ0QsV0FBVTtvQkFDVkUsT0FBTzt3QkFDTEMsaUJBQWlCLE9BQWdDLE9BQXpCUCxlQUFlUSxTQUFTLEVBQUM7b0JBQ25EOztzQ0FFQSw4REFBQ0w7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ0s7NEJBQUdMLFdBQVU7c0NBQTRCSixlQUFlVSxLQUFLOzs7Ozs7c0NBRzlELDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDTzt3Q0FDQ1AsV0FBVTt3Q0FDVlEsU0FBUztnREFDUEM7NkNBQUFBLDJCQUFBQSxTQUNHQyxjQUFjLENBQUMsNEJBRGxCRCwrQ0FBQUEseUJBRUlFLGNBQWMsQ0FBQztnREFBRUMsVUFBVTs0Q0FBUzt3Q0FDMUM7a0RBRUNsQixFQUFFOzs7Ozs7Ozs7Ozs4Q0FJUCw4REFBQ0s7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNPO3dDQUNDUCxXQUFVO3dDQUNWUSxTQUFTO2dEQUNQQzs2Q0FBQUEsMkJBQUFBLFNBQ0dDLGNBQWMsQ0FBQyxpQ0FEbEJELCtDQUFBQSx5QkFFSUUsY0FBYyxDQUFDO2dEQUFFQyxVQUFVOzRDQUFTO3dDQUMxQztrREFFQ2xCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9YLDhEQUFDSztvQkFBSUMsV0FBVTs4QkFBU0osZUFBZWlCLFdBQVc7Ozs7Ozs4QkFHbEQsOERBQUM1Qix5RUFBcUJBO29CQUNwQlcsZ0JBQWdCQTtvQkFDaEJKLGNBQWNBOzs7Ozs7OEJBRWhCLDhEQUFDTztvQkFBSUMsV0FBVTs7Ozs7OzhCQUdmLDhEQUFDQzs7c0NBQ0MsOERBQUNJOzRCQUFHUyxJQUFHO3NDQUFvQnBCLEVBQUU7Ozs7OztzQ0FDN0IsOERBQUNLOzRCQUFJQyxXQUFVO3NDQUNaRixvQkFDQ0Esb0JBQ0FBLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDcEIsOERBQUM5Qix3REFBSUE7b0NBQ0hvQixPQUFPVSxLQUFLVixLQUFLO29DQUNqQk8sYUFBYTtvQ0FDYkksVUFBVUQsS0FBS1osU0FBUztvQ0FDeEJjLE1BQU0sVUFBdUIsT0FBYkYsS0FBS0csT0FBTzttQ0FDdkIsVUFBdUIsT0FBYkgsS0FBS0csT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdDO0dBOUZNOUI7O1FBUU1MLHNEQUFlQTs7O0tBUnJCSztBQWdHTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1tsb2NhbGVdL291ci1jb2xsZWN0aW9ucy9bY29sbGVjdGlvbmlkXS9wYWdlLnRzeD9iYjJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSBcIm5leHQtaW50bFwiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbkl0ZW1HYWxsZXJ5IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NvbGxlY3Rpb25JdGVtR2FsbGVyeVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSXRlbVwiO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZmV0Y2hcIjtcbmNvbnN0IEVhY2hDb2xsZWN0aW9uID0gYXN5bmMgKHtcbiAgcGFyYW1zLFxufToge1xuICBwYXJhbXM6IHsgY29sbGVjdGlvbmlkOiBzdHJpbmc7IGxvY2FsZTogc3RyaW5nIH07XG59KSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IHBhcmFtcy5sb2NhbGU7XG4gIGNvbnN0IGNvbGxlY3Rpb25JZCA9IHBhcmFtcy5jb2xsZWN0aW9uaWQ7XG5cbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucyhcIkNvbGxlY3Rpb25cIik7XG5cbiAgLy8gRmV0Y2ggZGF0YVxuICBjb25zdCBjb2xsZWN0aW9uRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKFxuICAgIGAke2NvbmZpZ1tcImFwaVwiXVtcImNvbGxlY3Rpb25zXCJdfS8ke2NvbGxlY3Rpb25JZH0/bGFuZz0ke2xvY2FsZX1gXG4gICk7XG4gIGNvbnN0IGNvbGxlY3Rpb25EYXRhID0gY29sbGVjdGlvbkRhdGFSZXNwb25zZVtcImRhdGFcIl07XG5cbiAgY29uc3QgZmVhdHVyZWRBcnRpY2xlc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKFxuICAgIGAke2NvbmZpZ1tcImFwaVwiXVtcImJsb2dzXCJdfT9yZWxhdGVkLWNvbGxlY3Rpb249JHtjb2xsZWN0aW9uSWR9YFxuICApO1xuICBjb25zdCBmZWF0dXJlZEFydGljbGVzID0gZmVhdHVyZWRBcnRpY2xlc1Jlc3BvbnNlW1wiZGF0YVwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWF4LXdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIG1iLTIwIG14LTVcIj5cbiAgICAgICAgey8qIEJhbm5lciAqL31cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1uby1yZXBlYXQgYmctY292ZXIgYmctY2VudGVyIHctZnVsbCBoLTgwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgcmVsYXRpdmUgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb2xsZWN0aW9uRGF0YS5pbWFnZV91cmx9KWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjayBvcGFjaXR5LTUwXCI+PC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcmVsYXRpdmUgei0xMFwiPntjb2xsZWN0aW9uRGF0YS50aXRsZX08L2gxPlxuXG4gICAgICAgICAgey8qIE5hdmlnYXRpb24gYnV0dG9ucyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwib3VyLXZvbHVtZXNcIilcbiAgICAgICAgICAgICAgICAgICAgPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dChcIm91ci12b2x1bWVzXCIpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmZWF0dXJlLWFydGljbGVzXCIpXG4gICAgICAgICAgICAgICAgICAgID8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3QoXCJmZWF0dXJlZC1hcnRpY2xlc1wiKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBDb2xsZWN0aW9uIGluZm9ybWF0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwXCI+e2NvbGxlY3Rpb25EYXRhLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgIHsvKiBJdGVtIGdhbGxlcnkgKi99XG4gICAgICAgIDxDb2xsZWN0aW9uSXRlbUdhbGxlcnlcbiAgICAgICAgICBjb2xsZWN0aW9uRGF0YT17Y29sbGVjdGlvbkRhdGF9XG4gICAgICAgICAgY29sbGVjdGlvbklkPXtjb2xsZWN0aW9uSWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj48L2Rpdj5cblxuICAgICAgICB7LyogRmVhdHVyZWQgYXJ0aWNsZXMgKi99XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMSBpZD1cImZlYXR1cmUtYXJ0aWNsZXNcIj57dChcImZlYXR1cmVkLWFydGljbGVzXCIpfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04IG10LTEwXCI+XG4gICAgICAgICAgICB7ZmVhdHVyZWRBcnRpY2xlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlZEFydGljbGVzICYmXG4gICAgICAgICAgICAgIGZlYXR1cmVkQXJ0aWNsZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiXCJ9XG4gICAgICAgICAgICAgICAgICBpbWFnZVVybD17aXRlbS5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtgL2Jsb2dzLyR7aXRlbS5ibG9nX2lkfWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2AvYmxvZ3MvJHtpdGVtLmJsb2dfaWR9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFYWNoQ29sbGVjdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbnMiLCJDb2xsZWN0aW9uSXRlbUdhbGxlcnkiLCJJdGVtIiwiY29uZmlnIiwiZmV0Y2hEYXRhIiwiRWFjaENvbGxlY3Rpb24iLCJwYXJhbXMiLCJsb2NhbGUiLCJjb2xsZWN0aW9uSWQiLCJjb2xsZWN0aW9uaWQiLCJ0IiwiY29sbGVjdGlvbkRhdGFSZXNwb25zZSIsImNvbGxlY3Rpb25EYXRhIiwiZmVhdHVyZWRBcnRpY2xlc1Jlc3BvbnNlIiwiZmVhdHVyZWRBcnRpY2xlcyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlX3VybCIsImgxIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkZXNjcmlwdGlvbiIsImlkIiwibWFwIiwiaXRlbSIsImltYWdlVXJsIiwibGluayIsImJsb2dfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[locale]/our-collections/[collectionid]/page.tsx\n"));

/***/ })

});