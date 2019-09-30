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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ "./src/lbh/vendor/polyfills/DOMTokenList.js":
/*!**************************************************!*\
  !*** ./src/lbh/vendor/polyfills/DOMTokenList.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function(undefined) {\n\n    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js\n    var detect = (\n      'DOMTokenList' in this && (function (x) {\n        return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;\n      })(document.createElement('x'))\n    )\n\n    if (detect) return\n\n    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js\n    (function (global) {\n      var nativeImpl = \"DOMTokenList\" in global && global.DOMTokenList;\n\n      if (\n          !nativeImpl ||\n          (\n            !!document.createElementNS &&\n            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&\n            !(document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\").classList instanceof DOMTokenList)\n          )\n        ) {\n        global.DOMTokenList = (function() { // eslint-disable-line no-unused-vars\n          var dpSupport = true;\n          var defineGetter = function (object, name, fn, configurable) {\n            if (Object.defineProperty)\n              Object.defineProperty(object, name, {\n                configurable: false === dpSupport ? true : !!configurable,\n                get: fn\n              });\n\n            else object.__defineGetter__(name, fn);\n          };\n\n          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */\n          try {\n            defineGetter({}, \"support\");\n          }\n          catch (e) {\n            dpSupport = false;\n          }\n\n\n          var _DOMTokenList = function (el, prop) {\n            var that = this;\n            var tokens = [];\n            var tokenMap = {};\n            var length = 0;\n            var maxLength = 0;\n            var addIndexGetter = function (i) {\n              defineGetter(that, i, function () {\n                preop();\n                return tokens[i];\n              }, false);\n\n            };\n            var reindex = function () {\n\n              /** Define getter functions for array-like access to the tokenList's contents. */\n              if (length >= maxLength)\n                for (; maxLength < length; ++maxLength) {\n                  addIndexGetter(maxLength);\n                }\n            };\n\n            /** Helper function called at the start of each class method. Internal use only. */\n            var preop = function () {\n              var error;\n              var i;\n              var args = arguments;\n              var rSpace = /\\s+/;\n\n              /** Validate the token/s passed to an instance method, if any. */\n              if (args.length)\n                for (i = 0; i < args.length; ++i)\n                  if (rSpace.test(args[i])) {\n                    error = new SyntaxError('String \"' + args[i] + '\" ' + \"contains\" + ' an invalid character');\n                    error.code = 5;\n                    error.name = \"InvalidCharacterError\";\n                    throw error;\n                  }\n\n\n              /** Split the new value apart by whitespace*/\n              if (typeof el[prop] === \"object\") {\n                tokens = (\"\" + el[prop].baseVal).replace(/^\\s+|\\s+$/g, \"\").split(rSpace);\n              } else {\n                tokens = (\"\" + el[prop]).replace(/^\\s+|\\s+$/g, \"\").split(rSpace);\n              }\n\n              /** Avoid treating blank strings as single-item token lists */\n              if (\"\" === tokens[0]) tokens = [];\n\n              /** Repopulate the internal token lists */\n              tokenMap = {};\n              for (i = 0; i < tokens.length; ++i)\n                tokenMap[tokens[i]] = true;\n              length = tokens.length;\n              reindex();\n            };\n\n            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */\n            preop();\n\n            /** Return the number of tokens in the underlying string. Read-only. */\n            defineGetter(that, \"length\", function () {\n              preop();\n              return length;\n            });\n\n            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */\n            that.toLocaleString =\n              that.toString = function () {\n                preop();\n                return tokens.join(\" \");\n              };\n\n            that.item = function (idx) {\n              preop();\n              return tokens[idx];\n            };\n\n            that.contains = function (token) {\n              preop();\n              return !!tokenMap[token];\n            };\n\n            that.add = function () {\n              preop.apply(that, args = arguments);\n\n              for (var args, token, i = 0, l = args.length; i < l; ++i) {\n                token = args[i];\n                if (!tokenMap[token]) {\n                  tokens.push(token);\n                  tokenMap[token] = true;\n                }\n              }\n\n              /** Update the targeted attribute of the attached element if the token list's changed. */\n              if (length !== tokens.length) {\n                length = tokens.length >>> 0;\n                if (typeof el[prop] === \"object\") {\n                  el[prop].baseVal = tokens.join(\" \");\n                } else {\n                  el[prop] = tokens.join(\" \");\n                }\n                reindex();\n              }\n            };\n\n            that.remove = function () {\n              preop.apply(that, args = arguments);\n\n              /** Build a hash of token names to compare against when recollecting our token list. */\n              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {\n                ignore[args[i]] = true;\n                delete tokenMap[args[i]];\n              }\n\n              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */\n              for (i = 0; i < tokens.length; ++i)\n                if (!ignore[tokens[i]]) t.push(tokens[i]);\n\n              tokens = t;\n              length = t.length >>> 0;\n\n              /** Update the targeted attribute of the attached element. */\n              if (typeof el[prop] === \"object\") {\n                el[prop].baseVal = tokens.join(\" \");\n              } else {\n                el[prop] = tokens.join(\" \");\n              }\n              reindex();\n            };\n\n            that.toggle = function (token, force) {\n              preop.apply(that, [token]);\n\n              /** Token state's being forced. */\n              if (undefined !== force) {\n                if (force) {\n                  that.add(token);\n                  return true;\n                } else {\n                  that.remove(token);\n                  return false;\n                }\n              }\n\n              /** Token already exists in tokenList. Remove it, and return FALSE. */\n              if (tokenMap[token]) {\n                that.remove(token);\n                return false;\n              }\n\n              /** Otherwise, add the token and return TRUE. */\n              that.add(token);\n              return true;\n            };\n\n            return that;\n          };\n\n          return _DOMTokenList;\n        }());\n      }\n\n      // Add second argument to native DOMTokenList.toggle() if necessary\n      (function () {\n        var e = document.createElement('span');\n        if (!('classList' in e)) return;\n        e.classList.toggle('x', false);\n        if (!e.classList.contains('x')) return;\n        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {\n          var force = arguments[1];\n          if (force === undefined) {\n            var add = !this.contains(token);\n            this[add ? 'add' : 'remove'](token);\n            return add;\n          }\n          force = !!force;\n          this[force ? 'add' : 'remove'](token);\n          return force;\n        };\n      }());\n\n      // Add multiple arguments to native DOMTokenList.add() if necessary\n      (function () {\n        var e = document.createElement('span');\n        if (!('classList' in e)) return;\n        e.classList.add('a', 'b');\n        if (e.classList.contains('b')) return;\n        var native = e.classList.constructor.prototype.add;\n        e.classList.constructor.prototype.add = function () {\n          var args = arguments;\n          var l = arguments.length;\n          for (var i = 0; i < l; i++) {\n            native.call(this, args[i]);\n          }\n        };\n      }());\n\n      // Add multiple arguments to native DOMTokenList.remove() if necessary\n      (function () {\n        var e = document.createElement('span');\n        if (!('classList' in e)) return;\n        e.classList.add('a');\n        e.classList.add('b');\n        e.classList.remove('a', 'b');\n        if (!e.classList.contains('b')) return;\n        var native = e.classList.constructor.prototype.remove;\n        e.classList.constructor.prototype.remove = function () {\n          var args = arguments;\n          var l = arguments.length;\n          for (var i = 0; i < l; i++) {\n            native.call(this, args[i]);\n          }\n        };\n      }());\n\n    }(this));\n\n}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/DOMTokenList.js?");

/***/ }),

/***/ 13:
/*!********************************************************!*\
  !*** multi ./src/lbh/vendor/polyfills/DOMTokenList.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/elewis/Sites/hackney-frontend/src/lbh/vendor/polyfills/DOMTokenList.js */\"./src/lbh/vendor/polyfills/DOMTokenList.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/vendor/polyfills/DOMTokenList.js?");

/***/ })

/******/ });
});
