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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

/***/ "./src/lbh/vendor/polyfills/Document.js":
/*!**********************************************!*\
  !*** ./src/lbh/vendor/polyfills/Document.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js\nvar detect = (\"Document\" in this)\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always\nif ((typeof WorkerGlobalScope === \"undefined\") && (typeof importScripts !== \"function\")) {\n\n\tif (this.HTMLDocument) { // IE8\n\n\t\t// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.\n\t\tthis.Document = this.HTMLDocument;\n\n\t} else {\n\n\t\t// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.\n\t\tthis.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());\n\t\tthis.Document.prototype = document;\n\t}\n}\n\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Document.js?");

/***/ }),

/***/ "./src/lbh/vendor/polyfills/Element.js":
/*!*********************************************!*\
  !*** ./src/lbh/vendor/polyfills/Element.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Document */ \"./src/lbh/vendor/polyfills/Document.js\");\n/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Document__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js\nvar detect = ('Element' in this && 'HTMLElement' in this)\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always\n(function () {\n\n\t// IE8\n\tif (window.Element && !window.HTMLElement) {\n\t\twindow.HTMLElement = window.Element;\n\t\treturn;\n\t}\n\n\t// create Element constructor\n\twindow.Element = window.HTMLElement = new Function('return function Element() {}')();\n\n\t// generate sandboxed iframe\n\tvar vbody = document.appendChild(document.createElement('body'));\n\tvar frame = vbody.appendChild(document.createElement('iframe'));\n\n\t// use sandboxed iframe to replicate Element functionality\n\tvar frameDocument = frame.contentWindow.document;\n\tvar prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));\n\tvar cache = {};\n\n\t// polyfill Element.prototype on an element\n\tvar shiv = function (element, deep) {\n\t\tvar\n\t\tchildNodes = element.childNodes || [],\n\t\tindex = -1,\n\t\tkey, value, childNode;\n\n\t\tif (element.nodeType === 1 && element.constructor !== Element) {\n\t\t\telement.constructor = Element;\n\n\t\t\tfor (key in cache) {\n\t\t\t\tvalue = cache[key];\n\t\t\t\telement[key] = value;\n\t\t\t}\n\t\t}\n\n\t\twhile (childNode = deep && childNodes[++index]) {\n\t\t\tshiv(childNode, deep);\n\t\t}\n\n\t\treturn element;\n\t};\n\n\tvar elements = document.getElementsByTagName('*');\n\tvar nativeCreateElement = document.createElement;\n\tvar interval;\n\tvar loopLimit = 100;\n\n\tprototype.attachEvent('onpropertychange', function (event) {\n\t\tvar\n\t\tpropertyName = event.propertyName,\n\t\tnonValue = !cache.hasOwnProperty(propertyName),\n\t\tnewValue = prototype[propertyName],\n\t\toldValue = cache[propertyName],\n\t\tindex = -1,\n\t\telement;\n\n\t\twhile (element = elements[++index]) {\n\t\t\tif (element.nodeType === 1) {\n\t\t\t\tif (nonValue || element[propertyName] === oldValue) {\n\t\t\t\t\telement[propertyName] = newValue;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tcache[propertyName] = newValue;\n\t});\n\n\tprototype.constructor = Element;\n\n\tif (!prototype.hasAttribute) {\n\t\t// <Element>.hasAttribute\n\t\tprototype.hasAttribute = function hasAttribute(name) {\n\t\t\treturn this.getAttribute(name) !== null;\n\t\t};\n\t}\n\n\t// Apply Element prototype to the pre-existing DOM as soon as the body element appears.\n\tfunction bodyCheck() {\n\t\tif (!(loopLimit--)) clearTimeout(interval);\n\t\tif (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {\n\t\t\tshiv(document, true);\n\t\t\tif (interval && document.body.prototype) clearTimeout(interval);\n\t\t\treturn (!!document.body.prototype);\n\t\t}\n\t\treturn false;\n\t}\n\tif (!bodyCheck()) {\n\t\tdocument.onreadystatechange = bodyCheck;\n\t\tinterval = setInterval(bodyCheck, 25);\n\t}\n\n\t// Apply to any new elements created after load\n\tdocument.createElement = function createElement(nodeName) {\n\t\tvar element = nativeCreateElement(String(nodeName).toLowerCase());\n\t\treturn shiv(element);\n\t};\n\n\t// remove sandboxed iframe\n\tdocument.removeChild(vbody);\n}());\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Element.js?");

/***/ }),

/***/ 15:
/*!***************************************************!*\
  !*** multi ./src/lbh/vendor/polyfills/Element.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/emmalewis/Sites/hackney/LBH-frontend/src/lbh/vendor/polyfills/Element.js */\"./src/lbh/vendor/polyfills/Element.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/vendor/polyfills/Element.js?");

/***/ })

/******/ });
});
