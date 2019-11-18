(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LBHFrontend"] = factory();
	else
		root["LBHFrontend"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://LBHFrontend/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/lbh/vendor/polyfills/Function/prototype/bind.js":
/*!*************************************************************!*\
  !*** ./src/lbh/vendor/polyfills/Function/prototype/bind.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Object_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Object/defineProperty */ \"./src/lbh/vendor/polyfills/Object/defineProperty.js\");\n/* harmony import */ var _Object_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Object_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function(undefined) {\n  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js\n  var detect = 'bind' in Function.prototype\n\n  if (detect) return\n\n  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always\n  Object.defineProperty(Function.prototype, 'bind', {\n      value: function bind(that) { // .length is 1\n          // add necessary es5-shim utilities\n          var $Array = Array;\n          var $Object = Object;\n          var ObjectPrototype = $Object.prototype;\n          var ArrayPrototype = $Array.prototype;\n          var Empty = function Empty() {};\n          var to_string = ObjectPrototype.toString;\n          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };\n          var array_slice = ArrayPrototype.slice;\n          var array_concat = ArrayPrototype.concat;\n          var array_push = ArrayPrototype.push;\n          var max = Math.max;\n          // /add necessary es5-shim utilities\n\n          // 1. Let Target be the this value.\n          var target = this;\n          // 2. If IsCallable(Target) is false, throw a TypeError exception.\n          if (!isCallable(target)) {\n              throw new TypeError('Function.prototype.bind called on incompatible ' + target);\n          }\n          // 3. Let A be a new (possibly empty) internal list of all of the\n          //   argument values provided after thisArg (arg1, arg2 etc), in order.\n          // XXX slicedArgs will stand in for \"A\" if used\n          var args = array_slice.call(arguments, 1); // for normal call\n          // 4. Let F be a new native ECMAScript object.\n          // 11. Set the [[Prototype]] internal property of F to the standard\n          //   built-in Function prototype object as specified in 15.3.3.1.\n          // 12. Set the [[Call]] internal property of F as described in\n          //   15.3.4.5.1.\n          // 13. Set the [[Construct]] internal property of F as described in\n          //   15.3.4.5.2.\n          // 14. Set the [[HasInstance]] internal property of F as described in\n          //   15.3.4.5.3.\n          var bound;\n          var binder = function () {\n\n              if (this instanceof bound) {\n                  // 15.3.4.5.2 [[Construct]]\n                  // When the [[Construct]] internal method of a function object,\n                  // F that was created using the bind function is called with a\n                  // list of arguments ExtraArgs, the following steps are taken:\n                  // 1. Let target be the value of F's [[TargetFunction]]\n                  //   internal property.\n                  // 2. If target has no [[Construct]] internal method, a\n                  //   TypeError exception is thrown.\n                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal\n                  //   property.\n                  // 4. Let args be a new list containing the same values as the\n                  //   list boundArgs in the same order followed by the same\n                  //   values as the list ExtraArgs in the same order.\n                  // 5. Return the result of calling the [[Construct]] internal\n                  //   method of target providing args as the arguments.\n\n                  var result = target.apply(\n                      this,\n                      array_concat.call(args, array_slice.call(arguments))\n                  );\n                  if ($Object(result) === result) {\n                      return result;\n                  }\n                  return this;\n\n              } else {\n                  // 15.3.4.5.1 [[Call]]\n                  // When the [[Call]] internal method of a function object, F,\n                  // which was created using the bind function is called with a\n                  // this value and a list of arguments ExtraArgs, the following\n                  // steps are taken:\n                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal\n                  //   property.\n                  // 2. Let boundThis be the value of F's [[BoundThis]] internal\n                  //   property.\n                  // 3. Let target be the value of F's [[TargetFunction]] internal\n                  //   property.\n                  // 4. Let args be a new list containing the same values as the\n                  //   list boundArgs in the same order followed by the same\n                  //   values as the list ExtraArgs in the same order.\n                  // 5. Return the result of calling the [[Call]] internal method\n                  //   of target providing boundThis as the this value and\n                  //   providing args as the arguments.\n\n                  // equiv: target.call(this, ...boundArgs, ...args)\n                  return target.apply(\n                      that,\n                      array_concat.call(args, array_slice.call(arguments))\n                  );\n\n              }\n\n          };\n\n          // 15. If the [[Class]] internal property of Target is \"Function\", then\n          //     a. Let L be the length property of Target minus the length of A.\n          //     b. Set the length own property of F to either 0 or L, whichever is\n          //       larger.\n          // 16. Else set the length own property of F to 0.\n\n          var boundLength = max(0, target.length - args.length);\n\n          // 17. Set the attributes of the length own property of F to the values\n          //   specified in 15.3.5.1.\n          var boundArgs = [];\n          for (var i = 0; i < boundLength; i++) {\n              array_push.call(boundArgs, '$' + i);\n          }\n\n          // XXX Build a dynamic function with desired amount of arguments is the only\n          // way to set the length property of a function.\n          // In environments where Content Security Policies enabled (Chrome extensions,\n          // for ex.) all use of eval or Function costructor throws an exception.\n          // However in all of these environments Function.prototype.bind exists\n          // and so this code will never be executed.\n          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);\n\n          if (target.prototype) {\n              Empty.prototype = target.prototype;\n              bound.prototype = new Empty();\n              // Clean up dangling references.\n              Empty.prototype = null;\n          }\n\n          // TODO\n          // 18. Set the [[Extensible]] internal property of F to true.\n\n          // TODO\n          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).\n          // 20. Call the [[DefineOwnProperty]] internal method of F with\n          //   arguments \"caller\", PropertyDescriptor {[[Get]]: thrower, [[Set]]:\n          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and\n          //   false.\n          // 21. Call the [[DefineOwnProperty]] internal method of F with\n          //   arguments \"arguments\", PropertyDescriptor {[[Get]]: thrower,\n          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},\n          //   and false.\n\n          // TODO\n          // NOTE Function objects created using Function.prototype.bind do not\n          // have a prototype property or the [[Code]], [[FormalParameters]], and\n          // [[Scope]] internal properties.\n          // XXX can't delete prototype in pure-js.\n\n          // 22. Return F.\n          return bound;\n      }\n  });\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Function/prototype/bind.js?");

/***/ }),

/***/ "./src/lbh/vendor/polyfills/Object/defineProperty.js":
/*!***********************************************************!*\
  !*** ./src/lbh/vendor/polyfills/Object/defineProperty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js\nvar detect = (\n  // In IE8, defineProperty could only act on DOM elements, so full support\n  // for the feature requires the ability to set a property on an arbitrary object\n  'defineProperty' in Object && (function() {\n  \ttry {\n  \t\tvar a = {};\n  \t\tObject.defineProperty(a, 'test', {value:42});\n  \t\treturn true;\n  \t} catch(e) {\n  \t\treturn false\n  \t}\n  }())\n)\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always\n(function (nativeDefineProperty) {\n\n\tvar supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');\n\tvar ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';\n\tvar ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';\n\n\tObject.defineProperty = function defineProperty(object, property, descriptor) {\n\n\t\t// Where native support exists, assume it\n\t\tif (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {\n\t\t\treturn nativeDefineProperty(object, property, descriptor);\n\t\t}\n\n\t\tif (object === null || !(object instanceof Object || typeof object === 'object')) {\n\t\t\tthrow new TypeError('Object.defineProperty called on non-object');\n\t\t}\n\n\t\tif (!(descriptor instanceof Object)) {\n\t\t\tthrow new TypeError('Property description must be an object');\n\t\t}\n\n\t\tvar propertyString = String(property);\n\t\tvar hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;\n\t\tvar getterType = 'get' in descriptor && typeof descriptor.get;\n\t\tvar setterType = 'set' in descriptor && typeof descriptor.set;\n\n\t\t// handle descriptor.get\n\t\tif (getterType) {\n\t\t\tif (getterType !== 'function') {\n\t\t\t\tthrow new TypeError('Getter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineGetter__.call(object, propertyString, descriptor.get);\n\t\t} else {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\t// handle descriptor.set\n\t\tif (setterType) {\n\t\t\tif (setterType !== 'function') {\n\t\t\t\tthrow new TypeError('Setter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineSetter__.call(object, propertyString, descriptor.set);\n\t\t}\n\n\t\t// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above\n\t\tif ('value' in descriptor) {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\treturn object;\n\t};\n}(Object.defineProperty));\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Object/defineProperty.js?");

/***/ }),

/***/ 22:
/*!*******************************************************************!*\
  !*** multi ./src/lbh/vendor/polyfills/Function/prototype/bind.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/elewis/Sites/hackney-frontend/src/lbh/vendor/polyfills/Function/prototype/bind.js */\"./src/lbh/vendor/polyfills/Function/prototype/bind.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/vendor/polyfills/Function/prototype/bind.js?");

/***/ })

/******/ });
});
