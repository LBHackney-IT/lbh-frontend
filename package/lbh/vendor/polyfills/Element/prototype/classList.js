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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ "./src/lbh/vendor/polyfills/Element/prototype/classList.js":
/*!*****************************************************************!*\
  !*** ./src/lbh/vendor/polyfills/Element/prototype/classList.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Object_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Object/defineProperty */ \"./src/lbh/vendor/polyfills/Object/defineProperty.js\");\n/* harmony import */ var _Object_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Object_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DOMTokenList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DOMTokenList */ \"./src/lbh/vendor/polyfills/DOMTokenList.js\");\n/* harmony import */ var _DOMTokenList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DOMTokenList__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Element */ \"./src/lbh/vendor/polyfills/Element.js\");\n\n\n\n\n(function(undefined) {\n\n    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js\n    var detect = (\n      'document' in this && \"classList\" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function () {\n        var e = document.createElement('span');\n        e.classList.add('a', 'b');\n        return e.classList.contains('b');\n      }())\n    )\n\n    if (detect) return\n\n    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList&flags=always\n    (function (global) {\n      var dpSupport = true;\n      var defineGetter = function (object, name, fn, configurable) {\n        if (Object.defineProperty)\n          Object.defineProperty(object, name, {\n            configurable: false === dpSupport ? true : !!configurable,\n            get: fn\n          });\n\n        else object.__defineGetter__(name, fn);\n      };\n      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */\n      try {\n        defineGetter({}, \"support\");\n      }\n      catch (e) {\n        dpSupport = false;\n      }\n      /** Polyfills a property with a DOMTokenList */\n      var addProp = function (o, name, attr) {\n\n        defineGetter(o.prototype, name, function () {\n          var tokenList;\n\n          var THIS = this,\n\n          /** Prevent this from firing twice for some reason. What the hell, IE. */\n          gibberishProperty = \"__defineGetter__\" + \"DEFINE_PROPERTY\" + name;\n          if(THIS[gibberishProperty]) return tokenList;\n          THIS[gibberishProperty] = true;\n\n          /**\n           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.\n           *\n           * What this is doing is creating a dummy element (\"reflection\") inside a detached phantom node (\"mirror\")\n           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML\n           * element instead, this would conflict with element types which use indexed properties (such as forms and\n           * select lists).\n           */\n          if (false === dpSupport) {\n\n            var visage;\n            var mirror = addProp.mirror || document.createElement(\"div\");\n            var reflections = mirror.childNodes;\n            var l = reflections.length;\n\n            for (var i = 0; i < l; ++i)\n              if (reflections[i]._R === THIS) {\n                visage = reflections[i];\n                break;\n              }\n\n            /** Couldn't find an element's reflection inside the mirror. Materialise one. */\n            visage || (visage = mirror.appendChild(document.createElement(\"div\")));\n\n            tokenList = DOMTokenList.call(visage, THIS, attr);\n          } else tokenList = new DOMTokenList(THIS, attr);\n\n          defineGetter(THIS, name, function () {\n            return tokenList;\n          });\n          delete THIS[gibberishProperty];\n\n          return tokenList;\n        }, true);\n      };\n\n      addProp(global.Element, \"classList\", \"className\");\n      addProp(global.HTMLElement, \"classList\", \"className\");\n      addProp(global.HTMLLinkElement, \"relList\", \"rel\");\n      addProp(global.HTMLAnchorElement, \"relList\", \"rel\");\n      addProp(global.HTMLAreaElement, \"relList\", \"rel\");\n    }(this));\n\n}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Element/prototype/classList.js?");

/***/ }),

/***/ "./src/lbh/vendor/polyfills/Object/defineProperty.js":
/*!***********************************************************!*\
  !*** ./src/lbh/vendor/polyfills/Object/defineProperty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js\nvar detect = (\n  // In IE8, defineProperty could only act on DOM elements, so full support\n  // for the feature requires the ability to set a property on an arbitrary object\n  'defineProperty' in Object && (function() {\n  \ttry {\n  \t\tvar a = {};\n  \t\tObject.defineProperty(a, 'test', {value:42});\n  \t\treturn true;\n  \t} catch(e) {\n  \t\treturn false\n  \t}\n  }())\n)\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always\n(function (nativeDefineProperty) {\n\n\tvar supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');\n\tvar ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';\n\tvar ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';\n\n\tObject.defineProperty = function defineProperty(object, property, descriptor) {\n\n\t\t// Where native support exists, assume it\n\t\tif (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {\n\t\t\treturn nativeDefineProperty(object, property, descriptor);\n\t\t}\n\n\t\tif (object === null || !(object instanceof Object || typeof object === 'object')) {\n\t\t\tthrow new TypeError('Object.defineProperty called on non-object');\n\t\t}\n\n\t\tif (!(descriptor instanceof Object)) {\n\t\t\tthrow new TypeError('Property description must be an object');\n\t\t}\n\n\t\tvar propertyString = String(property);\n\t\tvar hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;\n\t\tvar getterType = 'get' in descriptor && typeof descriptor.get;\n\t\tvar setterType = 'set' in descriptor && typeof descriptor.set;\n\n\t\t// handle descriptor.get\n\t\tif (getterType) {\n\t\t\tif (getterType !== 'function') {\n\t\t\t\tthrow new TypeError('Getter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineGetter__.call(object, propertyString, descriptor.get);\n\t\t} else {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\t// handle descriptor.set\n\t\tif (setterType) {\n\t\t\tif (setterType !== 'function') {\n\t\t\t\tthrow new TypeError('Setter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineSetter__.call(object, propertyString, descriptor.set);\n\t\t}\n\n\t\t// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above\n\t\tif ('value' in descriptor) {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\treturn object;\n\t};\n}(Object.defineProperty));\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/vendor/polyfills/Object/defineProperty.js?");

/***/ }),

/***/ 19:
/*!***********************************************************************!*\
  !*** multi ./src/lbh/vendor/polyfills/Element/prototype/classList.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/emmalewis/Sites/hackney/LBH-frontend/src/lbh/vendor/polyfills/Element/prototype/classList.js */\"./src/lbh/vendor/polyfills/Element/prototype/classList.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/vendor/polyfills/Element/prototype/classList.js?");

/***/ })

/******/ });
});
