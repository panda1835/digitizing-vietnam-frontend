"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-resize-observer";
exports.ids = ["vendor-chunks/react-resize-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-resize-observer/lib/ResizeObserver.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-resize-observer/lib/ResizeObserver.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar style = {\n  position: 'absolute',\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  overflow: 'hidden',\n  zIndex: -1,\n  visibility: 'hidden',\n  pointerEvents: 'none'\n};\nvar styleChild = {\n  position: 'absolute',\n  left: 0,\n  top: 0,\n  transition: '0s'\n};\n\nfunction isAncestor(node, ancestor) {\n  var current = node.parentNode;\n\n  while (current) {\n    if (current === ancestor) {\n      return true;\n    }\n\n    current = current.parentNode;\n  }\n\n  return false;\n}\n\nvar ResizeObserver =\n/*#__PURE__*/\nfunction (_React$Component) {\n  function ResizeObserver() {\n    var _getPrototypeOf2;\n\n    var _temp, _this;\n\n    _classCallCheck(this, ResizeObserver);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizeObserver)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_expandRef\", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_shrinkRef\", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_node\", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_lastWidth\", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_lastHeight\", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_lastRect\", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_hasResize\", false), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_handleScroll\", function (event) {\n      if ((_this.props.onPosition || _this.props.onReflow || _this.props.onResize) && (_this._globalScollTarget(event.target) || _this._refScrollTarget(event.target) || _this._ancestorScollTarget(event.target))) {\n        _this._reflow();\n      }\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_globalScollTarget\", function (target) {\n      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && (target === document || target === document.documentElement || target === document.body);\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_refScrollTarget\", function (target) {\n      if (target instanceof HTMLElement && (target === _this._expandRef || target === _this._shrinkRef)) {\n        var width = target.offsetWidth;\n        var height = target.offsetHeight;\n\n        if (width !== _this._lastWidth || height !== _this._lastHeight) {\n          _this._lastWidth = width;\n          _this._lastHeight = height;\n\n          _this._reset(_this._expandRef);\n\n          _this._reset(_this._shrinkRef);\n\n          return true;\n        }\n      }\n\n      return false;\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_ancestorScollTarget\", function (target) {\n      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && _this._node && isAncestor(_this._node, target);\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_reflow\", function () {\n      if (!_this._node || !(_this._node.parentNode instanceof Element)) return;\n\n      var rect = _this._node.parentNode.getBoundingClientRect();\n\n      var sizeChanged = true;\n      var positionChanged = true;\n\n      if (_this._lastRect) {\n        sizeChanged = rect.width !== _this._lastRect.width || rect.height !== _this._lastRect.height;\n        positionChanged = rect.top !== _this._lastRect.top || rect.left !== _this._lastRect.left;\n      }\n\n      _this._lastRect = rect;\n\n      if (sizeChanged && _this.props.onResize) {\n        _this.props.onResize(rect);\n      }\n\n      if (positionChanged && _this.props.onPosition) {\n        _this.props.onPosition(rect);\n      }\n\n      if ((sizeChanged || positionChanged) && _this.props.onReflow) {\n        _this.props.onReflow(rect);\n      }\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_handleRef\", function (node) {\n      _this._node = node;\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_handleExpandRef\", function (node) {\n      _this._reset(node);\n\n      _this._expandRef = node;\n    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_handleShrinkRef\", function (node) {\n      _this._reset(node);\n\n      _this._shrinkRef = node;\n    }), _temp));\n  }\n\n  _createClass(ResizeObserver, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this._reflow();\n\n      window.addEventListener('scroll', this._handleScroll, true);\n\n      if (this.props.onPosition || this.props.onReflow) {\n        window.addEventListener('resize', this._reflow, true);\n        this._hasResize = true;\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      if ((this.props.onPosition || this.props.onReflow) && !this._hasResize) {\n        window.addEventListener('resize', this._reflow, true);\n        this._hasResize = true;\n      } else if (!(this.props.onPosition || this.props.onReflow) && this._hasResize) {\n        window.removeEventListener('resize', this._reflow, true);\n        this._hasResize = false;\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('scroll', this._handleScroll, true);\n\n      if (this._hasResize) {\n        window.removeEventListener('resize', this._reflow, true);\n      }\n    }\n  }, {\n    key: \"_reset\",\n    value: function _reset(node) {\n      if (node) {\n        node.scrollLeft = 100000;\n        node.scrollTop = 100000;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.props.onResize || this.props.onReflow) {\n        return _react.default.createElement(\"div\", {\n          style: style,\n          ref: this._handleRef\n        }, _react.default.createElement(\"div\", {\n          ref: this._handleExpandRef,\n          style: style\n        }, _react.default.createElement(\"div\", {\n          style: _objectSpread({}, styleChild, {\n            width: 100000,\n            height: 100000\n          })\n        })), _react.default.createElement(\"div\", {\n          ref: this._handleShrinkRef,\n          style: style\n        }, _react.default.createElement(\"div\", {\n          style: _objectSpread({}, styleChild, {\n            width: '200%',\n            height: '200%'\n          })\n        })));\n      }\n\n      return _react.default.createElement(\"noscript\", {\n        ref: this._handleRef\n      });\n    }\n  }]);\n\n  _inherits(ResizeObserver, _React$Component);\n\n  return ResizeObserver;\n}(_react.default.Component);\n\n_defineProperty(ResizeObserver, \"displayName\", 'ResizeObserver');\n\nvar _default = ResizeObserver;\nexports[\"default\"] = _default;\n//# sourceMappingURL=ResizeObserver.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixvQ0FBb0MsbUJBQU8sQ0FBQyx3R0FBTzs7QUFFbkQsdUNBQXVDLHVDQUF1Qzs7QUFFOUUsd0JBQXdCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFelUsaUNBQWlDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsbUNBQW1DLDBEQUEwRCxzRkFBc0YsaUVBQWlFLE1BQU0saUNBQWlDLDRDQUE0QyxLQUFLOztBQUVqZCxrREFBa0QsMENBQTBDOztBQUU1RiwyQ0FBMkMsK0RBQStELDZFQUE2RSx5RUFBeUU7O0FBRWhRLGlDQUFpQyw0RUFBNEUsaUJBQWlCLGFBQWE7O0FBRTNJLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RDs7QUFFbE0sa0RBQWtELDBFQUEwRSxlQUFlOztBQUUzSSw4QkFBOEIseUVBQXlFLHVCQUF1Qjs7QUFFOUgsd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzPzk0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcy5wcm90b3R5cGUsIHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXzsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHpJbmRleDogLTEsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbn07XG52YXIgc3R5bGVDaGlsZCA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgdHJhbnNpdGlvbjogJzBzJ1xufTtcblxuZnVuY3Rpb24gaXNBbmNlc3Rvcihub2RlLCBhbmNlc3Rvcikge1xuICB2YXIgY3VycmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIFJlc2l6ZU9ic2VydmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNpemVPYnNlcnZlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCAoX3RlbXAgPSBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKFJlc2l6ZU9ic2VydmVyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfZXhwYW5kUmVmXCIsIG51bGwpLCBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX3Nocmlua1JlZlwiLCBudWxsKSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9ub2RlXCIsIG51bGwpLCBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2xhc3RXaWR0aFwiLCB2b2lkIDApLCBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2xhc3RIZWlnaHRcIiwgdm9pZCAwKSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9sYXN0UmVjdFwiLCB2b2lkIDApLCBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2hhc1Jlc2l6ZVwiLCBmYWxzZSksIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfaGFuZGxlU2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKChfdGhpcy5wcm9wcy5vblBvc2l0aW9uIHx8IF90aGlzLnByb3BzLm9uUmVmbG93IHx8IF90aGlzLnByb3BzLm9uUmVzaXplKSAmJiAoX3RoaXMuX2dsb2JhbFNjb2xsVGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgX3RoaXMuX3JlZlNjcm9sbFRhcmdldChldmVudC50YXJnZXQpIHx8IF90aGlzLl9hbmNlc3RvclNjb2xsVGFyZ2V0KGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICAgIF90aGlzLl9yZWZsb3coKTtcbiAgICAgIH1cbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9nbG9iYWxTY29sbFRhcmdldFwiLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJiAoX3RoaXMucHJvcHMub25Qb3NpdGlvbiB8fCBfdGhpcy5wcm9wcy5vblJlZmxvdykgJiYgKHRhcmdldCA9PT0gZG9jdW1lbnQgfHwgdGFyZ2V0ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KTtcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9yZWZTY3JvbGxUYXJnZXRcIiwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICh0YXJnZXQgPT09IF90aGlzLl9leHBhbmRSZWYgfHwgdGFyZ2V0ID09PSBfdGhpcy5fc2hyaW5rUmVmKSkge1xuICAgICAgICB2YXIgd2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gX3RoaXMuX2xhc3RXaWR0aCB8fCBoZWlnaHQgIT09IF90aGlzLl9sYXN0SGVpZ2h0KSB7XG4gICAgICAgICAgX3RoaXMuX2xhc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgIF90aGlzLl9sYXN0SGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgICAgX3RoaXMuX3Jlc2V0KF90aGlzLl9leHBhbmRSZWYpO1xuXG4gICAgICAgICAgX3RoaXMuX3Jlc2V0KF90aGlzLl9zaHJpbmtSZWYpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2FuY2VzdG9yU2NvbGxUYXJnZXRcIiwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiYgKF90aGlzLnByb3BzLm9uUG9zaXRpb24gfHwgX3RoaXMucHJvcHMub25SZWZsb3cpICYmIF90aGlzLl9ub2RlICYmIGlzQW5jZXN0b3IoX3RoaXMuX25vZGUsIHRhcmdldCk7XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfcmVmbG93XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuX25vZGUgfHwgIShfdGhpcy5fbm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybjtcblxuICAgICAgdmFyIHJlY3QgPSBfdGhpcy5fbm9kZS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB2YXIgc2l6ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgdmFyIHBvc2l0aW9uQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgIGlmIChfdGhpcy5fbGFzdFJlY3QpIHtcbiAgICAgICAgc2l6ZUNoYW5nZWQgPSByZWN0LndpZHRoICE9PSBfdGhpcy5fbGFzdFJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQgIT09IF90aGlzLl9sYXN0UmVjdC5oZWlnaHQ7XG4gICAgICAgIHBvc2l0aW9uQ2hhbmdlZCA9IHJlY3QudG9wICE9PSBfdGhpcy5fbGFzdFJlY3QudG9wIHx8IHJlY3QubGVmdCAhPT0gX3RoaXMuX2xhc3RSZWN0LmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLl9sYXN0UmVjdCA9IHJlY3Q7XG5cbiAgICAgIGlmIChzaXplQ2hhbmdlZCAmJiBfdGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblJlc2l6ZShyZWN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uQ2hhbmdlZCAmJiBfdGhpcy5wcm9wcy5vblBvc2l0aW9uKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUG9zaXRpb24ocmVjdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoc2l6ZUNoYW5nZWQgfHwgcG9zaXRpb25DaGFuZ2VkKSAmJiBfdGhpcy5wcm9wcy5vblJlZmxvdykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblJlZmxvdyhyZWN0KTtcbiAgICAgIH1cbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9oYW5kbGVSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLl9ub2RlID0gbm9kZTtcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9oYW5kbGVFeHBhbmRSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLl9yZXNldChub2RlKTtcblxuICAgICAgX3RoaXMuX2V4cGFuZFJlZiA9IG5vZGU7XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfaGFuZGxlU2hyaW5rUmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5fcmVzZXQobm9kZSk7XG5cbiAgICAgIF90aGlzLl9zaHJpbmtSZWYgPSBub2RlO1xuICAgIH0pLCBfdGVtcCkpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlc2l6ZU9ic2VydmVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX3JlZmxvdygpO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlU2Nyb2xsLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25Qb3NpdGlvbiB8fCB0aGlzLnByb3BzLm9uUmVmbG93KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZWZsb3csIHRydWUpO1xuICAgICAgICB0aGlzLl9oYXNSZXNpemUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKCh0aGlzLnByb3BzLm9uUG9zaXRpb24gfHwgdGhpcy5wcm9wcy5vblJlZmxvdykgJiYgIXRoaXMuX2hhc1Jlc2l6ZSkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVmbG93LCB0cnVlKTtcbiAgICAgICAgdGhpcy5faGFzUmVzaXplID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoISh0aGlzLnByb3BzLm9uUG9zaXRpb24gfHwgdGhpcy5wcm9wcy5vblJlZmxvdykgJiYgdGhpcy5faGFzUmVzaXplKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZWZsb3csIHRydWUpO1xuICAgICAgICB0aGlzLl9oYXNSZXNpemUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlU2Nyb2xsLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuX2hhc1Jlc2l6ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVmbG93LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3Jlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXNldChub2RlKSB7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBub2RlLnNjcm9sbExlZnQgPSAxMDAwMDA7XG4gICAgICAgIG5vZGUuc2Nyb2xsVG9wID0gMTAwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemUgfHwgdGhpcy5wcm9wcy5vblJlZmxvdykge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgIHJlZjogdGhpcy5faGFuZGxlUmVmXG4gICAgICAgIH0sIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIHJlZjogdGhpcy5faGFuZGxlRXhwYW5kUmVmLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9LCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7fSwgc3R5bGVDaGlsZCwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMDAwMCxcbiAgICAgICAgICAgIGhlaWdodDogMTAwMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICByZWY6IHRoaXMuX2hhbmRsZVNocmlua1JlZixcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe30sIHN0eWxlQ2hpbGQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMDAlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICByZWY6IHRoaXMuX2hhbmRsZVJlZlxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgX2luaGVyaXRzKFJlc2l6ZU9ic2VydmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZXNpemVPYnNlcnZlciwgXCJkaXNwbGF5TmFtZVwiLCAnUmVzaXplT2JzZXJ2ZXInKTtcblxudmFyIF9kZWZhdWx0ID0gUmVzaXplT2JzZXJ2ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlc2l6ZU9ic2VydmVyLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-resize-observer/lib/ResizeObserver.js\n");

/***/ })

};
;