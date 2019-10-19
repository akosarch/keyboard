(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive .(t|j)s(x?)|.css$":
/*!*************************************!*\
  !*** ./code sync .(t|j)s(x?)|.css$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Keyboard.tsx": "./code/Keyboard.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive .(t|j)s(x?)|.css$";

/***/ }),

/***/ "./code/Keyboard.tsx":
/*!***************************!*\
  !*** ./code/Keyboard.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0tleWJvYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUEyQztBQUMzQyxtQ0FBMEU7QUFFMUUsU0FBZ0IsUUFBUSxDQUFDLEVBY3hCO1FBZHdCLEVBQ3JCLEdBQUcsRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsT0FBTyxFQUNQLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxPQUViLEVBREcsaUxBQU87O0lBRVAsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGlCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsaUJBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFeEMsa0JBQWtCO0lBQ2xCLGlCQUFTLENBQUMsR0FBRyxFQUFFOztRQUNYLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNwRCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsR0FBRyxFQUFFLENBQUMsRUFDTixLQUFLLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsS0FBSyxFQUFFLGlCQUFpQixLQUFLLE9BQU8sS0FBSyxHQUFHO29CQUM1QyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ25CLElBRUEsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDbkIsQ0FDWCxDQUFBO1NBQ0osQ0FBQyxDQUFBO1FBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3BCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBRXpFLDJCQUEyQjtJQUMzQixpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFFWCxTQUFTLFFBQVEsQ0FBQyxHQUFHOztRQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUE7S0FDakM7SUFFRCxTQUFTLFdBQVc7O1FBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUMxRDtJQUVELFNBQVMsVUFBVTs7UUFDZixTQUFTLEVBQUUsQ0FBQTtLQUNkO0lBRUQsU0FBUyxVQUFVOztRQUNmLFNBQVMsRUFBRSxDQUFBO0tBQ2Q7SUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7UUFDMUIsUUFBUSxHQUFHLEVBQUU7WUFDVCxLQUFLLEVBQUU7Z0JBQ0gsTUFBSztZQUNULEtBQUssV0FBVztnQkFDWixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakMsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsS0FBSzs7NEJBQ0QsV0FBVyxFQUFFLENBQUE7eUJBQ2hCO3FCQUNKLENBQUM7b0JBQ0osQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUNuQixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDN0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsS0FBSzs7NEJBQ0QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3lCQUNoQjtxQkFDSixDQUFDO29CQUNKLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDbkIsS0FBSyxRQUFRO2dCQUNULE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5QixLQUFLLEVBQUUsUUFBUTtxQkFDbEIsQ0FBQztvQkFDSixDQUFDLENBQUMsU0FBUyxDQUFBO1lBQ25CLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRO2dCQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzdCLEtBQUssRUFBRSxRQUFRO3dCQUNmLEtBQUs7OzRCQUNELFVBQVUsRUFBRSxDQUFBO3lCQUNmO3FCQUNKLENBQUM7b0JBQ0osQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUNuQixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDN0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsS0FBSzs7NEJBQ0QsVUFBVSxFQUFFLENBQUE7eUJBQ2Y7cUJBQ0osQ0FBQztvQkFDSixDQUFDLENBQUMsU0FBUyxDQUFBO1lBQ25CO2dCQUNJLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzNCLEtBQUssRUFBRSxRQUFRO3dCQUNmLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUs7OzRCQUNELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTt5QkFDaEI7cUJBQ0osQ0FBQztvQkFDSixDQUFDLENBQUMsU0FBUyxDQUFBO1NBQ3RCO0tBQ0o7SUFDRCxPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1NBQ2hCLEVBQ0QsVUFBVSxFQUFFLFVBQVUsRUFDdEIsSUFBSSxFQUFDLE1BQU0sSUFFVixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FDdkMsQ0FDWCxDQUFBO0NBQ0o7QUE3SUQsNEJBNklDO0FBRUQsTUFBTSxRQUFRLEdBQUc7SUFDYixLQUFLLEVBQUUsTUFBTTtJQUNiLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxVQUFVO0NBQ3ZCLENBQUE7QUFFRCxRQUFRLENBQUMsWUFBWSxHQUFHO0lBQ3BCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsTUFBTSxFQUFFLEdBQUc7SUFDWCxLQUFLLEVBQUUsR0FBRztJQUNWLEdBQUcsRUFBRSxDQUFDO0lBQ04sVUFBVSxFQUFFLEVBQUU7SUFDZCxTQUFTLEVBQUUsQ0FBQztJQUNaLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGFBQWEsQ0FBQyxLQUFhLGtDQUFJO0lBQy9CLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLFNBQVMsRUFBRTtRQUNQLFdBQVcsRUFBRTtZQUNULElBQUksRUFBRSxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUM1QyxLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNGO29CQUNJLHlJQUF5STtvQkFDekkseUlBQXlJO2lCQUM1STtnQkFDRDtvQkFDSSxzSkFBc0o7b0JBQ3RKLHNKQUFzSjtpQkFDeko7YUFDSjtZQUNELEtBQUssRUFBRSxFQUFFO1NBQ1o7S0FDSjtDQUNKLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDMUIsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLFVBQVU7UUFDakIsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixZQUFZLEVBQUUsYUFBYTtRQUMzQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztRQUM5QyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztLQUN0RDtJQUNELFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLEVBQUU7S0FDbkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFDRCxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxTQUFTO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxFQUFFLEtBQUs7UUFDWixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7S0FDdEM7SUFDRCxhQUFhLEVBQUU7UUFDWCxLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7S0FDdEM7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtLQUN0QztJQUNELFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0NBQ0osQ0FBQyxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Keyboard(_a) {
    var { gap, keyHeight, background, initValue, onValueChange, customKeys, templates, template, keyTemp, backspaceTemp, spaceTemp, returnTemp } = _a, rest = __rest(_a, ["gap", "keyHeight", "background", "initValue", "onValueChange", "customKeys", "templates", "template", "keyTemp", "backspaceTemp", "spaceTemp", "returnTemp"]);
    window["__checkBudget__"]();
    const [value, setValue] = react_1.useState(initValue);
    const [elements, setElements] = react_1.useState([]);
    const [mod1, cycleMod1] = framer_1.useCycle(0, 1);
    const [mod2, cycleMod2] = framer_1.useCycle(0, 1);
    // render elements
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const { keys, inRow } = templates[template];
        const elem = keys[mod1][mod2].split(" ").map((key, i) => {
            window["__checkBudget__"]();
            let [val, ratio = 1] = key.split("--");
            return (React.createElement(framer_1.Frame, { key: i, style: {
                    height: keyHeight,
                    background: null,
                    position: "relative",
                    width: `calc(((100% / ${inRow}) * ${ratio})`,
                    padding: gap / 2,
                } }, renderTemplate(val, i)));
        });
        setElements(elem);
    }, [template, mod1, mod2, keyTemp, backspaceTemp, spaceTemp, returnTemp]);
    // callback on value change
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        onValueChange(value);
    }, [value]);
    function addValue(val) {
        window["__checkBudget__"]();
        setValue(value => value + val);
    }
    function removeValue() {
        window["__checkBudget__"]();
        setValue(value => value.substring(0, value.length - 1));
    }
    function toggleMod1() {
        window["__checkBudget__"]();
        cycleMod1();
    }
    function toggleMod2() {
        window["__checkBudget__"]();
        cycleMod2();
    }
    function renderTemplate(val, i) {
        window["__checkBudget__"]();
        switch (val) {
            case "":
                break;
            case "backspace":
                return backspaceTemp[0]
                    ? React.cloneElement(backspaceTemp[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            removeValue();
                        },
                    })
                    : undefined;
            case "space":
                return spaceTemp[0]
                    ? React.cloneElement(spaceTemp[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            addValue(" ");
                        },
                    })
                    : undefined;
            case "return":
                return returnTemp[0]
                    ? React.cloneElement(returnTemp[0], {
                        style: keyStyle,
                    })
                    : undefined;
            case "mod1_a":
            case "mod1_b":
                return rest[val][0]
                    ? React.cloneElement(rest[val][0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            toggleMod1();
                        },
                    })
                    : undefined;
            case "mod2_a":
            case "mod2_b":
            case "mod2_c":
            case "mod2_d":
                return rest[val][0]
                    ? React.cloneElement(rest[val][0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            toggleMod2();
                        },
                    })
                    : undefined;
            default:
                return keyTemp[0]
                    ? React.cloneElement(keyTemp[0], {
                        style: keyStyle,
                        value: val,
                        onTap() {
                            window["__checkBudget__"]();
                            addValue(val);
                        },
                    })
                    : undefined;
        }
    }
    return (React.createElement(framer_1.Frame, { style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            padding: gap / 2,
            color: "#999",
        }, background: background, size: "100%" }, keyTemp.length ? elements : "Connect keys"));
}
exports.Keyboard = Keyboard;
const keyStyle = {
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
};
Keyboard.defaultProps = {
    initValue: "",
    height: 128,
    width: 240,
    gap: 6,
    itemHeight: 48,
    keysInRow: 3,
    background: "#EBEBEB",
    onValueChange(value) { window["__checkBudget__"](); },
    template: "numeric-iOS",
    templates: {
        numeric_iOS: {
            keys: [["1 2 3 4 5 6 7 8 9 0 00 backspace"]],
            inRow: 3,
        },
        text_iOS: {
            keys: [
                [
                    `q w e r t y u i o p --.5 a s d f g h j k l --.5 mod2_a--1.25 --.25 z x c v b n m --.25 backspace--1.25 mod1_a--2.5 space--5 return--2.5`,
                    `Q W E R T Y U I O P --.5 A S D F G H J K L --.5 mod2_b--1.25 --.25 Z X C V B N M --.25 backspace--1.25 mod1_a--2.5 space--5 return--2.5`,
                ],
                [
                    `1 2 3 4 5 6 7 8 9 0 - / : ; ( ) $ & @ " mod2_c--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 mod1_b--2.5 space--5 return--2.5`,
                    `[ ] { } # % ^ * + = _ / | ~ < > € $ £ ∙ mod2_d--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 mod1_b--2.5 space--5 return--2.5`,
                ],
            ],
            inRow: 10,
        },
    },
};
framer_1.addPropertyControls(Keyboard, {
    template: {
        title: "Template",
        type: framer_1.ControlType.Enum,
        defaultValue: "numeric_iOS",
        options: ["numeric_iOS", "text_iOS", "custom"],
        optionTitles: ["Numeric iOS", "Text iOS", "Custom"],
    },
    keyHeight: {
        title: "Key height",
        type: framer_1.ControlType.Number,
        defaultValue: 48,
    },
    gap: {
        title: "Gap",
        type: framer_1.ControlType.Number,
        defaultValue: 6,
    },
    background: {
        title: "Background",
        type: framer_1.ControlType.Color,
        defaultValue: "#EBEBEB",
    },
    keyTemp: {
        title: "Key",
        type: framer_1.ControlType.ComponentInstance,
    },
    backspaceTemp: {
        title: "Backspace",
        type: framer_1.ControlType.ComponentInstance,
    },
    spaceTemp: {
        title: "Space",
        type: framer_1.ControlType.ComponentInstance,
    },
    returnTemp: {
        title: "Return",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod1_a: {
        title: "Mod 1 a",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod1_b: {
        title: "Mod 1 b",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod2_a: {
        title: "Mod 2 a",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod2_b: {
        title: "Mod 2 b",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod2_c: {
        title: "Mod 2 c",
        type: framer_1.ControlType.ComponentInstance,
    },
    mod2_d: {
        title: "Mod 2 d",
        type: framer_1.ControlType.ComponentInstance,
    },
});
exports.__info__ = [{ name: "Keyboard", children: false, type: "component" }];


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive .(t|j)s(x?)|.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template


packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"5198f760-f4cf-490f-ad7c-c4c9294a9550\"},\"author\":\"Anton Kosarchyn\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});