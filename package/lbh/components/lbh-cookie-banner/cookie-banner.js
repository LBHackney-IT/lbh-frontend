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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lbh/components/lbh-cookie-banner/cookie-banner.js":
/*!***************************************************************!*\
  !*** ./src/lbh/components/lbh-cookie-banner/cookie-banner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar COOKIE_NAME = 'seen_cookie_message'\n\n// Set to false to allow testing so that the cookie is never set\nvar DROP_COOKIE = window.dropCookie === undefined ? true : window.dropCookie\n\nfunction CookieBanner ($module) {\n  this.$module = $module\n  this.$button = this.$module.querySelector('[data-behavior=\"lbh-cookie-close\"]')\n}\n\nCookieBanner.prototype.checkCookies = function () {\n  var nameEQ = COOKIE_NAME + '='\n  var ca = document.cookie.split(';')\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i]\n    while (c.charAt(0) === ' ') {\n      c = c.substring(1, c.length)\n    }\n    if (c.indexOf(nameEQ) === 0) {\n      return c.substring(nameEQ.length, c.length)\n    }\n  }\n  return null\n}\n\nCookieBanner.prototype.showCookieBanner = function () {\n  this.$module.style.display = 'block'\n  this.bindAcceptButton()\n}\n\nCookieBanner.prototype.bindAcceptButton = function () {\n  var _module = this.$module\n  this.$button.addEventListener('click', function () {\n    var date = new Date()\n    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))\n    var expires = '; expires=' + date.toGMTString()\n    if (DROP_COOKIE) {\n      document.cookie = COOKIE_NAME + '=true' + expires + '; path=/'\n    }\n    _module.style.display = 'none'\n  })\n}\n\nCookieBanner.prototype.init = function () {\n  if (!this.$module) {\n    return false\n  }\n\n  var seenCookie = this.checkCookies()\n  if (seenCookie === 'true') {\n    return false\n  } else {\n    this.showCookieBanner()\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieBanner);\n\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/components/lbh-cookie-banner/cookie-banner.js?");

/***/ }),

/***/ 8:
/*!*********************************************************************!*\
  !*** multi ./src/lbh/components/lbh-cookie-banner/cookie-banner.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/emmalewis/Sites/hackney/LBH-frontend/src/lbh/components/lbh-cookie-banner/cookie-banner.js */\"./src/lbh/components/lbh-cookie-banner/cookie-banner.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/components/lbh-cookie-banner/cookie-banner.js?");

/***/ })

/******/ });
});
