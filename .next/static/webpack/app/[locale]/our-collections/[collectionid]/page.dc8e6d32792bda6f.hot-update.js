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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_CollectionItemGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/CollectionItemGallery */ \"(app-pages-browser)/./src/components/CollectionItemGallery.jsx\");\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Item */ \"(app-pages-browser)/./src/components/Item.jsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"(app-pages-browser)/./src/app/config.js\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/fetch */ \"(app-pages-browser)/./src/lib/fetch.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EachCollection = async (param)=>{\n    let { params } = param;\n    _s();\n    const locale = params.locale;\n    const collectionId = params.collectionid;\n    console.log(\"collectionId\", collectionId);\n    console.log(\"locale\", locale);\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)(\"Collection\");\n    console.log(\"config\", \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"api\"][\"collections\"], \"/\").concat(collectionId, \"?lang=\").concat(locale));\n    const collectionDataResponse = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchData)(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"api\"][\"collections\"], \"/\").concat(collectionId, \"?lang=\").concat(locale));\n    const collectionData = collectionDataResponse[\"data\"];\n    const featuredArticlesResponse = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchData)(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"api\"][\"blogs\"], \"?related-collection=\").concat(collectionId));\n    const featuredArticles = featuredArticlesResponse[\"data\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center max-width\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-col mb-20 mx-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"bg-no-repeat bg-cover bg-center w-full h-80 flex flex-col items-center justify-center rounded-lg relative text-center\",\n                    style: {\n                        backgroundImage: \"url(\".concat(collectionData.image_url, \")\")\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black opacity-50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white relative z-10\",\n                            children: collectionData.title\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex relative z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\",\n                                        onClick: ()=>{\n                                            document.getElementById(\"our-volumes\").scrollIntoView({\n                                                behavior: \"smooth\"\n                                            });\n                                        },\n                                        children: t(\"our-volumes\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\",\n                                        onClick: ()=>{\n                                            document.getElementById(\"feature-articles\").scrollIntoView({\n                                                behavior: \"smooth\"\n                                            });\n                                        },\n                                        children: t(\"featured-articles\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-10\",\n                    children: collectionData.description\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CollectionItemGallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    collectionData: collectionData,\n                    collectionId: collectionId\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-10\"\n                }, void 0, false, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            id: \"feature-articles\",\n                            children: t(\"each-collection-featured-articles\")\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-3 gap-8 mt-10\",\n                            children: featuredArticles && featuredArticles && featuredArticles.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: item.title,\n                                    description: \"\",\n                                    imageUrl: item.image_url,\n                                    link: \"/blogs/\".concat(item.blog_id)\n                                }, \"/blogs/\".concat(item.blog_id), false, {\n                                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/phucle/Desktop/Code/digitizing-vietnam/website-react/src/app/[locale]/our-collections/[collectionid]/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EachCollection, \"h6+q2O3NJKPY5uL0BIJGLIanww8=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations\n    ];\n});\n_c = EachCollection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EachCollection);\nvar _c;\n$RefreshReg$(_c, \"EachCollection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xvY2FsZV0vb3VyLWNvbGxlY3Rpb25zL1tjb2xsZWN0aW9uaWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFFcUM7QUFDbEM7QUFFVjtBQUNhO0FBQ2xELE1BQU1LLGlCQUFpQjtRQUFPLEVBQzVCQyxNQUFNLEVBR1A7O0lBQ0MsTUFBTUMsU0FBU0QsT0FBT0MsTUFBTTtJQUM1QixNQUFNQyxlQUFlRixPQUFPRyxZQUFZO0lBRXhDQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSDtJQUM1QkUsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO0lBRXRCLE1BQU1LLElBQUlaLDBEQUFlQSxDQUFDO0lBRTFCVSxRQUFRQyxHQUFHLENBQ1QsVUFDQSxHQUFtQ0gsT0FBaENMLCtDQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxLQUF3QkksT0FBckJDLGNBQWEsVUFBZSxPQUFQRDtJQUcxRCxNQUFNTSx5QkFBeUIsTUFBTVQscURBQVNBLENBQzVDLEdBQW1DSSxPQUFoQ0wsK0NBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLEtBQXdCSSxPQUFyQkMsY0FBYSxVQUFlLE9BQVBEO0lBRTFELE1BQU1PLGlCQUFpQkQsc0JBQXNCLENBQUMsT0FBTztJQUVyRCxNQUFNRSwyQkFBMkIsTUFBTVgscURBQVNBLENBQzlDLEdBQWdESSxPQUE3Q0wsK0NBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLHdCQUFtQyxPQUFiSztJQUVsRCxNQUFNUSxtQkFBbUJELHdCQUF3QixDQUFDLE9BQU87SUFFekQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFDQ0QsV0FBVTtvQkFDVkUsT0FBTzt3QkFDTEMsaUJBQWlCLE9BQWdDLE9BQXpCUCxlQUFlUSxTQUFTLEVBQUM7b0JBQ25EOztzQ0FFQSw4REFBQ0w7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ0s7NEJBQUdMLFdBQVU7c0NBQTRCSixlQUFlVSxLQUFLOzs7Ozs7c0NBRzlELDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDTzt3Q0FDQ1AsV0FBVTt3Q0FDVlEsU0FBUzs0Q0FDUEMsU0FDR0MsY0FBYyxDQUFDLGVBQ2ZDLGNBQWMsQ0FBQztnREFBRUMsVUFBVTs0Q0FBUzt3Q0FDekM7a0RBRUNsQixFQUFFOzs7Ozs7Ozs7Ozs4Q0FJUCw4REFBQ0s7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNPO3dDQUNDUCxXQUFVO3dDQUNWUSxTQUFTOzRDQUNQQyxTQUNHQyxjQUFjLENBQUMsb0JBQ2ZDLGNBQWMsQ0FBQztnREFBRUMsVUFBVTs0Q0FBUzt3Q0FDekM7a0RBRUNsQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPWCw4REFBQ0s7b0JBQUlDLFdBQVU7OEJBQVNKLGVBQWVpQixXQUFXOzs7Ozs7OEJBR2xELDhEQUFDOUIseUVBQXFCQTtvQkFDcEJhLGdCQUFnQkE7b0JBQ2hCTixjQUFjQTs7Ozs7OzhCQUVoQiw4REFBQ1M7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFHZiw4REFBQ0M7O3NDQUNDLDhEQUFDSTs0QkFBR1MsSUFBRztzQ0FDSnBCLEVBQUU7Ozs7OztzQ0FFTCw4REFBQ0s7NEJBQUlDLFdBQVU7c0NBQ1pGLG9CQUNDQSxvQkFDQUEsaUJBQWlCaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ2hDLHdEQUFJQTtvQ0FDSHNCLE9BQU9VLEtBQUtWLEtBQUs7b0NBQ2pCTyxhQUFhO29DQUNiSSxVQUFVRCxLQUFLWixTQUFTO29DQUN4QmMsTUFBTSxVQUF1QixPQUFiRixLQUFLRyxPQUFPO21DQUN2QixVQUF1QixPQUFiSCxLQUFLRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0M7R0F2R01oQzs7UUFXTUwsc0RBQWVBOzs7S0FYckJLO0FBeUdOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvW2xvY2FsZV0vb3VyLWNvbGxlY3Rpb25zL1tjb2xsZWN0aW9uaWRdL3BhZ2UudHN4P2JiMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pbnRsXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uSXRlbUdhbGxlcnkgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ29sbGVjdGlvbkl0ZW1HYWxsZXJ5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9JdGVtXCI7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9mZXRjaFwiO1xuY29uc3QgRWFjaENvbGxlY3Rpb24gPSBhc3luYyAoe1xuICBwYXJhbXMsXG59OiB7XG4gIHBhcmFtczogeyBjb2xsZWN0aW9uaWQ6IHN0cmluZzsgbG9jYWxlOiBzdHJpbmcgfTtcbn0pID0+IHtcbiAgY29uc3QgbG9jYWxlID0gcGFyYW1zLmxvY2FsZTtcbiAgY29uc3QgY29sbGVjdGlvbklkID0gcGFyYW1zLmNvbGxlY3Rpb25pZDtcblxuICBjb25zb2xlLmxvZyhcImNvbGxlY3Rpb25JZFwiLCBjb2xsZWN0aW9uSWQpO1xuICBjb25zb2xlLmxvZyhcImxvY2FsZVwiLCBsb2NhbGUpO1xuXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoXCJDb2xsZWN0aW9uXCIpO1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIFwiY29uZmlnXCIsXG4gICAgYCR7Y29uZmlnW1wiYXBpXCJdW1wiY29sbGVjdGlvbnNcIl19LyR7Y29sbGVjdGlvbklkfT9sYW5nPSR7bG9jYWxlfWBcbiAgKTtcblxuICBjb25zdCBjb2xsZWN0aW9uRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKFxuICAgIGAke2NvbmZpZ1tcImFwaVwiXVtcImNvbGxlY3Rpb25zXCJdfS8ke2NvbGxlY3Rpb25JZH0/bGFuZz0ke2xvY2FsZX1gXG4gICk7XG4gIGNvbnN0IGNvbGxlY3Rpb25EYXRhID0gY29sbGVjdGlvbkRhdGFSZXNwb25zZVtcImRhdGFcIl07XG5cbiAgY29uc3QgZmVhdHVyZWRBcnRpY2xlc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKFxuICAgIGAke2NvbmZpZ1tcImFwaVwiXVtcImJsb2dzXCJdfT9yZWxhdGVkLWNvbGxlY3Rpb249JHtjb2xsZWN0aW9uSWR9YFxuICApO1xuICBjb25zdCBmZWF0dXJlZEFydGljbGVzID0gZmVhdHVyZWRBcnRpY2xlc1Jlc3BvbnNlW1wiZGF0YVwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWF4LXdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIG1iLTIwIG14LTVcIj5cbiAgICAgICAgey8qIEJhbm5lciAqL31cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1uby1yZXBlYXQgYmctY292ZXIgYmctY2VudGVyIHctZnVsbCBoLTgwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgcmVsYXRpdmUgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb2xsZWN0aW9uRGF0YS5pbWFnZV91cmx9KWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjayBvcGFjaXR5LTUwXCI+PC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcmVsYXRpdmUgei0xMFwiPntjb2xsZWN0aW9uRGF0YS50aXRsZX08L2gxPlxuXG4gICAgICAgICAgey8qIE5hdmlnYXRpb24gYnV0dG9ucyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwib3VyLXZvbHVtZXNcIilcbiAgICAgICAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KFwib3VyLXZvbHVtZXNcIil9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZlYXR1cmUtYXJ0aWNsZXNcIilcbiAgICAgICAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KFwiZmVhdHVyZWQtYXJ0aWNsZXNcIil9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogQ29sbGVjdGlvbiBpbmZvcm1hdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMFwiPntjb2xsZWN0aW9uRGF0YS5kZXNjcmlwdGlvbn08L2Rpdj5cblxuICAgICAgICB7LyogSXRlbSBnYWxsZXJ5ICovfVxuICAgICAgICA8Q29sbGVjdGlvbkl0ZW1HYWxsZXJ5XG4gICAgICAgICAgY29sbGVjdGlvbkRhdGE9e2NvbGxlY3Rpb25EYXRhfVxuICAgICAgICAgIGNvbGxlY3Rpb25JZD17Y29sbGVjdGlvbklkfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+PC9kaXY+XG5cbiAgICAgICAgey8qIEZlYXR1cmVkIGFydGljbGVzICovfVxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDEgaWQ9XCJmZWF0dXJlLWFydGljbGVzXCI+XG4gICAgICAgICAgICB7dChcImVhY2gtY29sbGVjdGlvbi1mZWF0dXJlZC1hcnRpY2xlc1wiKX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtOCBtdC0xMFwiPlxuICAgICAgICAgICAge2ZlYXR1cmVkQXJ0aWNsZXMgJiZcbiAgICAgICAgICAgICAgZmVhdHVyZWRBcnRpY2xlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlZEFydGljbGVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlwifVxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2l0ZW0uaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgbGluaz17YC9ibG9ncy8ke2l0ZW0uYmxvZ19pZH1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtgL2Jsb2dzLyR7aXRlbS5ibG9nX2lkfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWFjaENvbGxlY3Rpb247XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb25zIiwiQ29sbGVjdGlvbkl0ZW1HYWxsZXJ5IiwiSXRlbSIsImNvbmZpZyIsImZldGNoRGF0YSIsIkVhY2hDb2xsZWN0aW9uIiwicGFyYW1zIiwibG9jYWxlIiwiY29sbGVjdGlvbklkIiwiY29sbGVjdGlvbmlkIiwiY29uc29sZSIsImxvZyIsInQiLCJjb2xsZWN0aW9uRGF0YVJlc3BvbnNlIiwiY29sbGVjdGlvbkRhdGEiLCJmZWF0dXJlZEFydGljbGVzUmVzcG9uc2UiLCJmZWF0dXJlZEFydGljbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VfdXJsIiwiaDEiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRlc2NyaXB0aW9uIiwiaWQiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJsaW5rIiwiYmxvZ19pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[locale]/our-collections/[collectionid]/page.tsx\n"));

/***/ })

});