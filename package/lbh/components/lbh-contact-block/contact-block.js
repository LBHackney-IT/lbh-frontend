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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lbh/components/lbh-contact-block/contact-block.js":
/*!***************************************************************!*\
  !*** ./src/lbh/components/lbh-contact-block/contact-block.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global L */\nvar L = L || {};\nif (L !== {}) {\n  var map = L.map;\n  var control = L.control;\n  var tileLayer = L.tileLayer;\n  var icon = L.icon;\n  var marker = L.marker;\n}\n\nfunction Map($module) {\n  this.$module = $module;\n  this.moduleId = this.$module.getAttribute(\"id\");\n  this.accessToken = this.$module.getAttribute(\"data-access-token\");\n  this.map = null;\n  this.markerLat = this.$module.getAttribute(\"data-marker-lat\") || null;\n  this.markerLng = this.$module.getAttribute(\"data-marker-lng\") || null;\n  this.centreLat =\n    this.$module.getAttribute(\"data-centre-lat\") || this.markerLat || 51.549;\n  this.centreLng =\n    this.$module.getAttribute(\"data-centre-lng\") || this.markerLng || -0.077928;\n  this.maxZoom = this.$module.getAttribute(\"data-max-zoom\") || 19;\n  this.minZoom = this.$module.getAttribute(\"data-min-zoom\") || 12;\n  this.initialZoom = this.$module.getAttribute(\"data-initial-zoom\") || 15;\n  this.showZoomControl =\n    this.$module.getAttribute(\"data-show-zoom-control\") || true;\n  this.minLat = this.$module.getAttribute(\"data-min-lat\") || 51.491112;\n  this.minLng = this.$module.getAttribute(\"data-min-lng\") || -0.275464;\n  this.maxLat = this.$module.getAttribute(\"data-max-lat\") || 51.607351;\n  this.maxLng = this.$module.getAttribute(\"data-max-lng\") || 0.096129;\n}\n\nMap.prototype.initLeaflet = function() {\n  this.map = map(this.moduleId, {\n    zoomControl: false,\n    maxZoom: this.maxZoom,\n    minZoom: this.minZoom,\n    center: [this.centreLat, this.centreLng],\n    zoom: this.initialZoom\n  });\n  if (this.showZoomControl) {\n    control.zoom({ position: \"topright\" }).addTo(this.map);\n  }\n};\n\nMap.prototype.setBounds = function() {\n  // Limit the view to the extend of the map\n  this.map.setMaxBounds([\n    [this.minLat, this.minLng],\n    [this.maxLat, this.maxLng]\n  ]);\n};\n\nMap.prototype.initMapboxTiles = function() {\n  var osmStreet = tileLayer(\n    \"https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}\",\n    {\n      fadeAnimation: false,\n      opacity: 1,\n      attribution:\n        'Map data &copy; <a href=\"https://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://mapbox.com\">Mapbox</a>',\n      maxZoom: this.maxZoom,\n      id: \"mapbox.streets\",\n      accessToken: this.accessToken\n    }\n  );\n  this.map.addLayer(osmStreet);\n};\n\nMap.prototype.addMarker = function() {\n  if (this.markerLat !== null && this.markerLng !== null) {\n    var mapIcon = icon({\n      iconUrl: \"../../../assets/images/contact/map-marker.svg\",\n      iconSize: [48, 48],\n      iconAnchor: [24, 48]\n    });\n    marker([this.markerLat, this.markerLng], { icon: mapIcon }).addTo(this.map);\n  }\n};\n\nMap.prototype.init = function() {\n  // Check for module\n  if (!this.$module || L !== {}) {\n    return;\n  }\n\n  this.initLeaflet();\n  this.setBounds();\n  this.initMapboxTiles();\n  this.addMarker();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/components/lbh-contact-block/contact-block.js?");

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** multi ./src/lbh/components/lbh-contact-block/contact-block.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/emmalewis/Sites/hackney/LBH-frontend/src/lbh/components/lbh-contact-block/contact-block.js */\"./src/lbh/components/lbh-contact-block/contact-block.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/components/lbh-contact-block/contact-block.js?");

/***/ })

/******/ });
});
