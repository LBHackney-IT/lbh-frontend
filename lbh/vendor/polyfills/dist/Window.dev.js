"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (undefined) {
  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
  var detect = 'Window' in this;
  if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always

  if (typeof WorkerGlobalScope === "undefined" && typeof importScripts !== "function") {
    (function (global) {
      if (global.constructor) {
        global.Window = global.constructor;
      } else {
        (global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
      }
    })(this);
  }
}).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});