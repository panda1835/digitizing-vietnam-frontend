"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fscreen";
exports.ids = ["vendor-chunks/fscreen"];
exports.modules = {

/***/ "(ssr)/./node_modules/fscreen/dist/fscreen.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/fscreen/dist/fscreen.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar key = {\r\n    fullscreenEnabled: 0,\r\n    fullscreenElement: 1,\r\n    requestFullscreen: 2,\r\n    exitFullscreen: 3,\r\n    fullscreenchange: 4,\r\n    fullscreenerror: 5,\r\n    fullscreen: 6\r\n};\r\nvar webkit = [\r\n    'webkitFullscreenEnabled',\r\n    'webkitFullscreenElement',\r\n    'webkitRequestFullscreen',\r\n    'webkitExitFullscreen',\r\n    'webkitfullscreenchange',\r\n    'webkitfullscreenerror',\r\n    '-webkit-full-screen',\r\n];\r\nvar moz = [\r\n    'mozFullScreenEnabled',\r\n    'mozFullScreenElement',\r\n    'mozRequestFullScreen',\r\n    'mozCancelFullScreen',\r\n    'mozfullscreenchange',\r\n    'mozfullscreenerror',\r\n    '-moz-full-screen',\r\n];\r\nvar ms = [\r\n    'msFullscreenEnabled',\r\n    'msFullscreenElement',\r\n    'msRequestFullscreen',\r\n    'msExitFullscreen',\r\n    'MSFullscreenChange',\r\n    'MSFullscreenError',\r\n    '-ms-fullscreen',\r\n];\r\n// so it doesn't throw if no window or document\r\nvar document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};\r\nvar vendor = (('fullscreenEnabled' in document && Object.keys(key)) ||\r\n    (webkit[0] in document && webkit) ||\r\n    (moz[0] in document && moz) ||\r\n    (ms[0] in document && ms) ||\r\n    []);\r\nvar fscreen = {\r\n    requestFullscreen: function (element) { return element[vendor[key.requestFullscreen]](); },\r\n    requestFullscreenFunction: function (element) { return element[vendor[key.requestFullscreen]]; },\r\n    get exitFullscreen() { return document[vendor[key.exitFullscreen]].bind(document); },\r\n    get fullscreenPseudoClass() { return \":\" + vendor[key.fullscreen]; },\r\n    addEventListener: function (type, handler, options) { return document.addEventListener(vendor[key[type]], handler, options); },\r\n    removeEventListener: function (type, handler, options) { return document.removeEventListener(vendor[key[type]], handler, options); },\r\n    get fullscreenEnabled() { return Boolean(document[vendor[key.fullscreenEnabled]]); },\r\n    set fullscreenEnabled(val) { },\r\n    get fullscreenElement() { return document[vendor[key.fullscreenElement]]; },\r\n    set fullscreenElement(val) { },\r\n    get onfullscreenchange() { return document[(\"on\" + vendor[key.fullscreenchange]).toLowerCase()]; },\r\n    set onfullscreenchange(handler) { return document[(\"on\" + vendor[key.fullscreenchange]).toLowerCase()] = handler; },\r\n    get onfullscreenerror() { return document[(\"on\" + vendor[key.fullscreenerror]).toLowerCase()]; },\r\n    set onfullscreenerror(handler) { return document[(\"on\" + vendor[key.fullscreenerror]).toLowerCase()] = handler; },\r\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fscreen);\n//# sourceMappingURL=fscreen.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnNjcmVlbi9kaXN0L2ZzY3JlZW4uZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtEQUFrRDtBQUM5RixvREFBb0QsZ0RBQWdEO0FBQ3BHLDJCQUEyQiw2REFBNkQ7QUFDeEYsa0NBQWtDLHNDQUFzQztBQUN4RSwwREFBMEQsd0VBQXdFO0FBQ2xJLDZEQUE2RCwyRUFBMkU7QUFDeEksOEJBQThCLDBEQUEwRDtBQUN4RixrQ0FBa0M7QUFDbEMsOEJBQThCLGlEQUFpRDtBQUMvRSxrQ0FBa0M7QUFDbEMsK0JBQStCLHVFQUF1RTtBQUN0RyxzQ0FBc0MsaUZBQWlGO0FBQ3ZILDhCQUE4QixzRUFBc0U7QUFDcEcscUNBQXFDLGdGQUFnRjtBQUNySDs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9mc2NyZWVuL2Rpc3QvZnNjcmVlbi5lc20uanM/MjVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIga2V5ID0ge1xyXG4gICAgZnVsbHNjcmVlbkVuYWJsZWQ6IDAsXHJcbiAgICBmdWxsc2NyZWVuRWxlbWVudDogMSxcclxuICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAyLFxyXG4gICAgZXhpdEZ1bGxzY3JlZW46IDMsXHJcbiAgICBmdWxsc2NyZWVuY2hhbmdlOiA0LFxyXG4gICAgZnVsbHNjcmVlbmVycm9yOiA1LFxyXG4gICAgZnVsbHNjcmVlbjogNlxyXG59O1xyXG52YXIgd2Via2l0ID0gW1xyXG4gICAgJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXHJcbiAgICAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxyXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcclxuICAgICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcclxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxyXG4gICAgJy13ZWJraXQtZnVsbC1zY3JlZW4nLFxyXG5dO1xyXG52YXIgbW96ID0gW1xyXG4gICAgJ21vekZ1bGxTY3JlZW5FbmFibGVkJyxcclxuICAgICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXHJcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgJ21vekNhbmNlbEZ1bGxTY3JlZW4nLFxyXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgJ21vemZ1bGxzY3JlZW5lcnJvcicsXHJcbiAgICAnLW1vei1mdWxsLXNjcmVlbicsXHJcbl07XHJcbnZhciBtcyA9IFtcclxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcclxuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcclxuICAgICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxyXG4gICAgJ01TRnVsbHNjcmVlbkVycm9yJyxcclxuICAgICctbXMtZnVsbHNjcmVlbicsXHJcbl07XHJcbi8vIHNvIGl0IGRvZXNuJ3QgdGhyb3cgaWYgbm8gd2luZG93IG9yIGRvY3VtZW50XHJcbnZhciBkb2N1bWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRvY3VtZW50IDoge307XHJcbnZhciB2ZW5kb3IgPSAoKCdmdWxsc2NyZWVuRW5hYmxlZCcgaW4gZG9jdW1lbnQgJiYgT2JqZWN0LmtleXMoa2V5KSkgfHxcclxuICAgICh3ZWJraXRbMF0gaW4gZG9jdW1lbnQgJiYgd2Via2l0KSB8fFxyXG4gICAgKG1velswXSBpbiBkb2N1bWVudCAmJiBtb3opIHx8XHJcbiAgICAobXNbMF0gaW4gZG9jdW1lbnQgJiYgbXMpIHx8XHJcbiAgICBbXSk7XHJcbnZhciBmc2NyZWVuID0ge1xyXG4gICAgcmVxdWVzdEZ1bGxzY3JlZW46IGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50W3ZlbmRvcltrZXkucmVxdWVzdEZ1bGxzY3JlZW5dXSgpOyB9LFxyXG4gICAgcmVxdWVzdEZ1bGxzY3JlZW5GdW5jdGlvbjogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnRbdmVuZG9yW2tleS5yZXF1ZXN0RnVsbHNjcmVlbl1dOyB9LFxyXG4gICAgZ2V0IGV4aXRGdWxsc2NyZWVuKCkgeyByZXR1cm4gZG9jdW1lbnRbdmVuZG9yW2tleS5leGl0RnVsbHNjcmVlbl1dLmJpbmQoZG9jdW1lbnQpOyB9LFxyXG4gICAgZ2V0IGZ1bGxzY3JlZW5Qc2V1ZG9DbGFzcygpIHsgcmV0dXJuIFwiOlwiICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuXTsgfSxcclxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7IHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZlbmRvcltrZXlbdHlwZV1dLCBoYW5kbGVyLCBvcHRpb25zKTsgfSxcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7IHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZlbmRvcltrZXlbdHlwZV1dLCBoYW5kbGVyLCBvcHRpb25zKTsgfSxcclxuICAgIGdldCBmdWxsc2NyZWVuRW5hYmxlZCgpIHsgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnRbdmVuZG9yW2tleS5mdWxsc2NyZWVuRW5hYmxlZF1dKTsgfSxcclxuICAgIHNldCBmdWxsc2NyZWVuRW5hYmxlZCh2YWwpIHsgfSxcclxuICAgIGdldCBmdWxsc2NyZWVuRWxlbWVudCgpIHsgcmV0dXJuIGRvY3VtZW50W3ZlbmRvcltrZXkuZnVsbHNjcmVlbkVsZW1lbnRdXTsgfSxcclxuICAgIHNldCBmdWxsc2NyZWVuRWxlbWVudCh2YWwpIHsgfSxcclxuICAgIGdldCBvbmZ1bGxzY3JlZW5jaGFuZ2UoKSB7IHJldHVybiBkb2N1bWVudFsoXCJvblwiICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuY2hhbmdlXSkudG9Mb3dlckNhc2UoKV07IH0sXHJcbiAgICBzZXQgb25mdWxsc2NyZWVuY2hhbmdlKGhhbmRsZXIpIHsgcmV0dXJuIGRvY3VtZW50WyhcIm9uXCIgKyB2ZW5kb3Jba2V5LmZ1bGxzY3JlZW5jaGFuZ2VdKS50b0xvd2VyQ2FzZSgpXSA9IGhhbmRsZXI7IH0sXHJcbiAgICBnZXQgb25mdWxsc2NyZWVuZXJyb3IoKSB7IHJldHVybiBkb2N1bWVudFsoXCJvblwiICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuZXJyb3JdKS50b0xvd2VyQ2FzZSgpXTsgfSxcclxuICAgIHNldCBvbmZ1bGxzY3JlZW5lcnJvcihoYW5kbGVyKSB7IHJldHVybiBkb2N1bWVudFsoXCJvblwiICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuZXJyb3JdKS50b0xvd2VyQ2FzZSgpXSA9IGhhbmRsZXI7IH0sXHJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZzY3JlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mc2NyZWVuLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fscreen/dist/fscreen.esm.js\n");

/***/ })

};
;