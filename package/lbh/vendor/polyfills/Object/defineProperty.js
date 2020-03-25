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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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

/***/ "./src/lbh/vendor/polyfills/Object/defineProperty.js":
/*!***********************************************************!*\
  !*** ./src/lbh/vendor/polyfills/Object/defineProperty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js\nvar detect = (\n  // In IE8, defineProperty could only act on DOM elements, so full support\n  // for the feature requires the ability to set a property on an arbitrary object\n  'defineProperty' in Object && (function() {\n  \ttry {\n  \t\tvar a = {};\n  \t\tObject.defineProperty(a, 'test', {value:42});\n  \t\treturn true;\n  \t} catch(e) {\n  \t\treturn false\n  \t}\n  }())\n)\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always\n(function (nativeDefineProperty) {\n\n\tvar supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');\n\tvar ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';\n\tvar ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';\n\n\tObject.defineProperty = function defineProperty(object, property, descriptor) {\n\n\t\t// Where native support exists, assume it\n\t\tif (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {\n\t\t\treturn nativeDefineProperty(object, property, descriptor);\n\t\t}\n\n\t\tif (object === null || !(object instanceof Object || typeof object === 'object')) {\n\t\t\tthrow new TypeError('Object.defineProperty called on non-object');\n\t\t}\n\n\t\tif (!(descriptor instanceof Object)) {\n\t\t\tthrow new TypeError('Property description must be an object');\n\t\t}\n\n\t\tvar propertyString = String(property);\n\t\tvar hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;\n\t\tvar getterType = 'get' in descriptor && typeof descriptor.get;\n\t\tvar setterType = 'set' in descriptor && typeof descriptor.set;\n\n\t\t// handle descriptor.get\n\t\tif (getterType) {\n\t\t\tif (getterType !== 'function') {\n\t\t\t\tthrow new TypeError('Getter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineGetter__.call(object, propertyString, descriptor.get);\n\t\t} else {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\t// handle descriptor.set\n\t\tif (setterType) {\n\t\t\tif (setterType !== 'function') {\n\t\t\t\tthrow new TypeError('Setter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineSetter__.call(object, propertyString, descriptor.set);\n\t\t}\n\n\t\t// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above\n\t\tif ('value' in descriptor) {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\treturn object;\n\t};\n}(Object.defineProperty));\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Object/defineProperty.js?");

/***/ }),

/***/ 18:
/*!*****************************************************************!*\
  !*** multi ./src/lbh/vendor/polyfills/Object/defineProperty.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/emmalewis/Sites/hackney/LBH-frontend/src/lbh/vendor/polyfills/Object/defineProperty.js */\"./src/lbh/vendor/polyfills/Object/defineProperty.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/vendor/polyfills/Object/defineProperty.js?");

/***/ })

/******/ });
});
