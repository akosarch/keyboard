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
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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
	"./App.tsx": "./code/App.tsx",
	"./App1.tsx": "./code/App1.tsx",
	"./CustomTemplate.json": "./code/CustomTemplate.json",
	"./Keyboard.tsx": "./code/Keyboard.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
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

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsbUNBQThDO0FBRTlDLGlEQUFpRDtBQUVqRCxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUMsQ0FBQTtBQUVGLFNBQWdCLFVBQVUsQ0FBQyxLQUFLOztJQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDekQsTUFBTSxNQUFNLEdBQUcsaUVBQWlFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNuQixTQUFTLENBQUE7SUFDVixPQUFPO1FBQ0gsSUFBSSxFQUFFLElBQUksR0FBRyxNQUFNO0tBQ3RCLENBQUE7Q0FDSjtBQVRELGdDQVNDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsS0FBSzs7SUFDbkMsT0FBTztRQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7S0FDL0IsQ0FBQTtDQUNKO0FBSkQsOENBSUM7QUFFRCxTQUFnQixjQUFjLENBQUMsS0FBSzs7SUFDaEMsT0FBTztRQUNILE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDN0IsYUFBYSxDQUFDLEtBQUs7O1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7U0FDcEI7S0FDSixDQUFBO0NBQ0o7QUFQRCx3Q0FPQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUFLOztJQUNoQyxPQUFPO1FBQ0gsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtLQUNuQyxDQUFBO0NBQ0o7QUFKRCx3Q0FJQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Learn more: https://framer.com/docs/overrides/
const data = framer_1.Data({
    text: "",
});
function HandleText(props) {
    window["__checkBudget__"]();
    const text = data.text.substring(0, data.text.length - 1);
    const cursor = `<span style="background: #000; -webkit-text-fill-color: #fff">${data.text.substring(data.text.length - 1, data.text.length)}</span>`;
    return {
        text: text + cursor,
    };
}
exports.HandleText = HandleText;
function HandlePlaceholder(props) {
    window["__checkBudget__"]();
    return {
        opacity: data.text ? 0 : 0.4,
    };
}
exports.HandlePlaceholder = HandlePlaceholder;
function HandleKeyboard(props) {
    window["__checkBudget__"]();
    return {
        setSub: data.text ? "a" : "b",
        onValueChange(value) {
            window["__checkBudget__"]();
            data.text = value;
        },
    };
}
exports.HandleKeyboard = HandleKeyboard;
function KeyTapResponse(props) {
    window["__checkBudget__"]();
    return {
        whileTap: { background: "#CCC" },
    };
}
exports.KeyTapResponse = KeyTapResponse;
exports.__info__ = [{ name: "HandleText", type: "override" }, { name: "HandlePlaceholder", type: "override" }, { name: "HandleKeyboard", type: "override" }, { name: "KeyTapResponse", type: "override" }];


/***/ }),

/***/ "./code/App1.tsx":
/*!***********************!*\
  !*** ./code/App1.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQXBwMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBMkM7QUFDM0MsbUNBQThDO0FBRTlDLGlEQUFpRDtBQUVqRCxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRSxFQUFFO0lBQ2IsU0FBUyxFQUFFLEVBQUU7SUFDYixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsQ0FBQztDQUNqQixDQUFDLENBQUE7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLGlCQUFTLENBQUM7O1FBQ04sSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQzs7WUFDekIsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDOUIsSUFBSSxFQUFFLENBQUE7U0FDVCxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNoQixPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN2QyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTztRQUNILElBQUksRUFDQSxpRkFBaUYsSUFBSSxDQUFDLFNBQVMsUUFBUTtZQUN2RyxJQUFJLENBQUMsU0FBUztZQUNkLE1BQU07UUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0tBQ2hDLENBQUE7Q0FDSjtBQWxCRCxnQ0FrQkM7QUFFRCxTQUFnQixjQUFjLENBQUMsS0FBSzs7SUFDaEMsT0FBTztRQUNILFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtRQUMvQixhQUFhLENBQUMsS0FBSzs7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtTQUN6QjtRQUNELGNBQWMsRUFBRTtZQUNaLElBQUksRUFBRTtnQkFDRixHQUFHLEVBQUUseURBQXlEO2FBQ2pFO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKLENBQUE7Q0FDSjtBQWJELHdDQWFDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEtBQUs7O0lBQ2pDLE9BQU87UUFDSCxLQUFLLENBQUMsS0FBSzs7WUFDUCxNQUFNLFVBQVUsR0FBRyxDQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQy9DLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQTtZQUMzQixJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFBO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtLQUNuQyxDQUFBO0NBQ0o7QUFkRCwwQ0FjQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUFLOztJQUNoQyxPQUFPO1FBQ0gsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtLQUNuQyxDQUFBO0NBQ0o7QUFKRCx3Q0FJQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Learn more: https://framer.com/docs/overrides/
const data = framer_1.Data({
    pastQuery: "",
    currQuery: "",
    calcValue: "",
    initialValue: "",
    offsetLines: 0,
});
function HandleText(props) {
    window["__checkBudget__"]();
    const [cursor, setCursor] = react_1.useState("");
    react_1.useEffect(function () {
        window["__checkBudget__"]();
        let time = 0;
        const delay = 0.75;
        const interval = setInterval(function () {
            window["__checkBudget__"]();
            setCursor(time % 2 ? "|" : "");
            time++;
        }, delay * 1000);
        return () => clearInterval(interval);
    }, []);
    return {
        text: `<div style="-webkit-text-fill-color:#999; font-size:16px; line-height: 32px;">${data.pastQuery}</div>` +
            data.currQuery +
            cursor,
        bottom: data.offsetLines * 32,
    };
}
exports.HandleText = HandleText;
function HandleKeyboard(props) {
    window["__checkBudget__"]();
    return {
        initialValue: data.initialValue,
        onValueChange(value) {
            window["__checkBudget__"]();
            data.currQuery = value;
        },
        customTemplate: {
            keys: {
                m1a: "7 8 9 $backspace $return 4 5 6 + - 1 2 3 * / 0--2 . ( )",
            },
            inRow: 4,
        },
    };
}
exports.HandleKeyboard = HandleKeyboard;
function HandleReturnKey(props) {
    window["__checkBudget__"]();
    return {
        onTap(value) {
            window["__checkBudget__"]();
            const calculated = (Math.round(eval(data.currQuery) * 100) / 100).toString();
            data.calcValue = calculated;
            data.pastQuery += `${data.currQuery}\n`;
            data.currQuery += calculated;
            data.initialValue = calculated;
            data.offsetLines += 1;
        },
        whileTap: { background: "#666" },
    };
}
exports.HandleReturnKey = HandleReturnKey;
function KeyTapResponse(props) {
    window["__checkBudget__"]();
    return {
        whileTap: { background: "#666" },
    };
}
exports.KeyTapResponse = KeyTapResponse;
exports.__info__ = [{ name: "HandleText", type: "override" }, { name: "HandleKeyboard", type: "override" }, { name: "HandleReturnKey", type: "override" }, { name: "KeyTapResponse", type: "override" }];


/***/ }),

/***/ "./code/CustomTemplate.json":
/*!**********************************!*\
  !*** ./code/CustomTemplate.json ***!
  \**********************************/
/*! exports provided: keys, inRow, default */
/***/ (function(module) {


module.exports = JSON.parse("{\"keys\":{\"m1a\":\"7 8 9 $backspace $return 4 5 6 + - 1 2 3 * / 0--2 . ( )\"},\"inRow\":4}");

/***/ }),

/***/ "./code/Keyboard.tsx":
/*!***************************!*\
  !*** ./code/Keyboard.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0tleWJvYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBMkM7QUFDM0MsbUNBQTBFO0FBRTFFLFNBQWdCLFFBQVEsQ0FBQyxFQUNyQixHQUFHLEVBQ0gsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGFBQWEsR0FDaEI7O0lBQ0csTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGlCQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsaUJBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFMUMsSUFBSSxpQkFBaUIsRUFBRTtRQUNuQixLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7S0FDN0M7SUFFRCxrQkFBa0I7SUFDbEIsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsTUFBTSxJQUFJLEdBQ04sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Keyboard({ gap, setMod, setSub, widthType, keyWidth, keyHeight, background, initialValue, onValueChange, customKeys, templates, template, customTemplate, customTemplateUrl, keysTemplates, }) {
    window["__checkBudget__"]();
    const [value, setValue] = react_1.useState(initialValue);
    const [elements, setElements] = react_1.useState([]);
    const [mod, cycleMod] = framer_1.useCycle("m1", "m2");
    const [sub, cycleSub] = framer_1.useCycle("a", "b");
    if (customTemplateUrl) {
        fetch(customTemplateUrl)
            .then(response => response.json())
            .then(json => (customTemplate = json));
    }
    // render elements
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const temp = template === "custom" ? customTemplate : templates[template];
        const { keys, inRow } = temp;
        const elem = keys[mod + sub].split(" ").map((key, i) => {
            window["__checkBudget__"]();
            let [val, ratio = 1] = key.split("--");
            return (React.createElement(framer_1.Frame, { key: i, style: {
                    background: null,
                    position: "relative",
                    height: keyHeight + gap,
                    width: widthType === "auto"
                        ? `calc(((100% / ${inRow}) * ${ratio})`
                        : (keyWidth + gap) * ratio,
                    padding: gap / 2,
                } }, renderTemplate(val, i)));
        });
        setElements(elem);
    }, [template, customTemplate, mod, sub, keysTemplates]);
    // callback on value change
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        onValueChange(value);
    }, [value]);
    // callback on value change
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setValue(initialValue);
    }, [initialValue]);
    // callback on mod change
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setMod && cycleMod(setMod);
        setSub && cycleSub(setSub);
    }, [setMod, setSub]);
    function addValue(val) {
        window["__checkBudget__"]();
        setValue(value => value + val);
    }
    function removeValue() {
        window["__checkBudget__"]();
        setValue(value => value.substring(0, value.length - 1));
    }
    function findTemplate(templates, name) {
        window["__checkBudget__"]();
        return templates.filter(element => {
            window["__checkBudget__"]();
            const elementName = element.props.name.split("/").pop();
            return elementName === name;
        });
    }
    function renderTemplate(val, i) {
        window["__checkBudget__"]();
        if (val === "")
            return undefined;
        const templ = new RegExp(/\$\w+/g);
        const isSpecial = templ.test(val);
        if (isSpecial) {
            // If the special character used
            // Check if keyTemplate exists
            const keyTemplate = findTemplate(keysTemplates, val);
            if (!keyTemplate[0])
                return undefined;
            switch (val) {
                case "$backspace":
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            removeValue();
                        },
                    });
                case "$space":
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            addValue(" ");
                        },
                    });
                case "$return":
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            addValue("\n");
                        },
                    });
                case "$m1":
                case "$m2":
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            cycleMod();
                        },
                    });
                case "$m1a":
                case "$m1b":
                case "$m2a":
                case "$m2b":
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                        onTap() {
                            window["__checkBudget__"]();
                            cycleSub();
                        },
                    });
                default:
                    return React.cloneElement(keyTemplate[0], {
                        style: keyStyle,
                    });
            }
        }
        else {
            // If regular text used
            const keyTemplate = findTemplate(keysTemplates, "$value");
            if (!keyTemplate[0])
                return undefined;
            return React.cloneElement(keyTemplate[0], {
                style: keyStyle,
                value: val,
                onTap() {
                    window["__checkBudget__"]();
                    addValue(val);
                },
            });
        }
    }
    return (React.createElement(framer_1.Frame, { style: {
            display: "flex",
            flexWrap: "wrap",
            flexFlow: "column-wrap",
            alignItems: "center",
            justifyContent: "center",
            padding: gap / 2,
            color: "#999",
        }, background: background, size: "100%" }, keysTemplates[0] ? elements : "Connect keys"));
}
exports.Keyboard = Keyboard;
const keyStyle = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
};
Keyboard.defaultProps = {
    initialValue: "",
    height: 128,
    width: 240,
    gap: 6,
    itemHeight: 48,
    background: "#EBEBEB",
    onValueChange(value) { window["__checkBudget__"](); },
    customTemplateUrl: "",
    customTemplate: { keys: { m1a: "a b c" }, inRow: 3 },
    template: "numeric-iOS",
    templates: {
        numeric_iOS: {
            keys: {
                m1a: "1 2 3 4 5 6 7 8 9 0 00 $backspace",
            },
            inRow: 3,
        },
        text_iOS: {
            keys: {
                m1a: `q w e r t y u i o p --.5 a s d f g h j k l --.5 $m1a--1.25 --.25 z x c v b n m --.25 $backspace--1.25 $m1--2.5 $space--5 $return--2.5`,
                m1b: `Q W E R T Y U I O P --.5 A S D F G H J K L --.5 $m1b--1.25 --.25 Z X C V B N M --.25 $backspace--1.25 $m1--2.5 $space--5 $return--2.5`,
                m2a: `1 2 3 4 5 6 7 8 9 0 - / : ; ( ) $ & @ " $m2a--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 $backspace--1.25 $m2--2.5 $space--5 $return--2.5`,
                m2b: `[ ] { } # % ^ * + = _ / | ~ < > € $ £ ∙ $m2b--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 $backspace--1.25 $m2--2.5 $space--5 $return--2.5`,
            },
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
    customTemplateUrl: {
        hidden: ({ template }) => template !== "custom",
        title: "Custom",
        type: framer_1.ControlType.File,
        allowedFileTypes: ["json"],
    },
    widthType: {
        title: "Width type",
        type: framer_1.ControlType.SegmentedEnum,
        defaultValue: "auto",
        options: ["auto", "custom"],
        optionTitles: ["Auto", "Custom"],
    },
    keyWidth: {
        hidden: ({ widthType }) => widthType !== "custom",
        title: "Key width",
        type: framer_1.ControlType.Number,
        defaultValue: 48,
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
    keysTemplates: {
        title: "Keys templates",
        type: framer_1.ControlType.Array,
        propertyControl: { type: framer_1.ControlType.ComponentInstance },
    },
});
exports.__info__ = [{ name: "Keyboard", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[{"componentClass":"Frame","props":{"key":"SB6Mw8ZZ4","id":"id_SB6Mw8ZZ4","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/$backspace"},"children":[{"componentClass":"Frame","props":{"key":"dVE3jBrpB","id":"id_dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"Ag82wdMr4","id":"id_Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_oLgvoIlNl","id":"oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":4.9054951522818016,"y":0.6485507429653073,"handleMirroring":"disconnected","handleOutX":0.37881985117110073,"handleOutY":-0.4132580194593823,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":0,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.5606127632232303,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":0,"handleMirroring":"disconnected","handleOutX":1.1045694996615865,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":16,"y":2.0000000000000004,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-1.104569499661587,"radius":0,"__class":"PathSegment"},{"x":16,"y":10,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":1.1045694996615865,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":12,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":1.1045694996615865,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":12,"handleMirroring":"disconnected","handleOutX":-0.5606127632232303,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":4.9054951522818016,"y":11.351449257034693,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.37881985117110073,"handleInY":0.41325801945938245,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":7.351449257034693,"handleMirroring":"disconnected","handleOutX":-0.7009222927980233,"handleOutY":-0.7646425012342073,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":4.648550742965307,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.7009222927980233,"handleInY":0.7646425012342073,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8,"y":10,"width":16,"height":12},"frame":{"x":8,"y":10,"width":16,"height":12},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"butt","lineJoin":"miter","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_xSj5mqiUI","id":"xSj5mqiUI","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":5,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_xSj5mqiUI","strokeEnabled":true,"strokeClipId":"id_xSj5mqiUI_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#000","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_F7laFYN64","id":"F7laFYN64","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":5,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_F7laFYN64","strokeEnabled":true,"strokeClipId":"id_F7laFYN64_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#000","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_$backspace"},{"componentClass":"Frame","props":{"key":"jaSP2Qmh7","id":"id_jaSP2Qmh7","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/$m1a"},"children":[{"componentClass":"Frame","props":{"key":"jaSP2Qmh7dVE3jBrpB","id":"id_jaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"jaSP2Qmh7Ag82wdMr4","id":"id_jaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_jaSP2Qmh7oLgvoIlNl","id":"jaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_jaSP2Qmh7oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_jaSP2Qmh7oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":1,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_$m1a"},{"componentClass":"Frame","props":{"key":"H1EEzcIET","id":"id_H1EEzcIET","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/$m1b"},"children":[{"componentClass":"Frame","props":{"key":"H1EEzcIETjaSP2Qmh7dVE3jBrpB","id":"id_H1EEzcIETjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"H1EEzcIETjaSP2Qmh7Ag82wdMr4","id":"id_H1EEzcIETjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl","id":"H1EEzcIETjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl","strokeEnabled":false,"strokeClipId":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl_clip","rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":0,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":{"r":0,"g":0,"b":0,"a":1,"h":0,"s":0,"l":0,"initialValue":"#000","roundA":1,"format":"rgb"}},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_$m1b"},{"componentClass":"Frame","props":{"key":"S7Kfzl9Eo","id":"id_S7Kfzl9Eo","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_eO5AJ3WWp":"value"},"name":"iOS/Light/$space"},"children":[{"componentClass":"Frame","props":{"key":"S7Kfzl9EodVE3jBrpB","id":"id_S7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"eO5AJ3WWp","id":"id_eO5AJ3WWp","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":42,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">space</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":42},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$space"},{"componentClass":"Frame","props":{"key":"D43VMgDEH","id":"id_D43VMgDEH","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_y4pKt1DyF":"value"},"name":"iOS/Light/$return"},"children":[{"componentClass":"Frame","props":{"key":"D43VMgDEHS7Kfzl9EodVE3jBrpB","id":"id_D43VMgDEHS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"y4pKt1DyF","id":"id_y4pKt1DyF","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":41,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">return</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":41},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$return"},{"componentClass":"Frame","props":{"key":"edYSg_K0s","id":"id_edYSg_K0s","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_zPVhL4xpz":"Frame","id_guGK4znHU":"value"},"name":"iOS/Light/$value"},"children":[{"componentClass":"Frame","props":{"key":"zPVhL4xpz","id":"id_zPVhL4xpz","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#fff","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"#fff","roundA":1,"format":"rgb"},"name":"Frame"},"children":[{"componentClass":"Text","props":{"key":"guGK4znHU","id":"id_guGK4znHU","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":12,"height":24,"left":"50%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Light&quot;, &quot;SFProDisplay-Light&quot;, &quot;SFUIDisplay-Light&quot;, &quot;.SFUIDisplay-Light&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:24px;letter-spacing:0px;line-height:1;font-weight:299\"><span data-text=\"true\">1</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Light__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":24,"width":12},"isEditable":false,"name":"value"},"name":"value"}],"name":"Frame"}],"name":"iOS_Light_$value"},{"componentClass":"Frame","props":{"key":"a4LkjQDag","id":"id_a4LkjQDag","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_a4LkjQDagPksdXYAaE":"value"},"name":"iOS/Light/$m2a"},"children":[{"componentClass":"Frame","props":{"key":"a4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_a4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"a4LkjQDagPksdXYAaE","id":"id_a4LkjQDagPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":31,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">#+=</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":31},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$m2a"},{"componentClass":"Frame","props":{"key":"FndhxY3jp","id":"id_FndhxY3jp","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"name":"iOS/Dark/$backspace"},"children":[{"componentClass":"Frame","props":{"key":"FndhxY3jpdVE3jBrpB","id":"id_FndhxY3jpdVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"FndhxY3jpAg82wdMr4","id":"id_FndhxY3jpAg82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_FndhxY3jpoLgvoIlNl","id":"FndhxY3jpoLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":4.9054951522818016,"y":0.6485507429653073,"handleMirroring":"disconnected","handleOutX":0.37881985117110073,"handleOutY":-0.4132580194593823,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":0,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.5606127632232303,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":0,"handleMirroring":"disconnected","handleOutX":1.1045694996615865,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":16,"y":2.0000000000000004,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-1.104569499661587,"radius":0,"__class":"PathSegment"},{"x":16,"y":10,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":1.1045694996615865,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":12,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":1.1045694996615865,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":12,"handleMirroring":"disconnected","handleOutX":-0.5606127632232303,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":4.9054951522818016,"y":11.351449257034693,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.37881985117110073,"handleInY":0.41325801945938245,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":7.351449257034693,"handleMirroring":"disconnected","handleOutX":-0.7009222927980233,"handleOutY":-0.7646425012342073,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":4.648550742965307,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.7009222927980233,"handleInY":0.7646425012342073,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_FndhxY3jpoLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpoLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8,"y":10,"width":16,"height":12},"frame":{"x":8,"y":10,"width":16,"height":12},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"butt","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_FndhxY3jpxSj5mqiUI","id":"FndhxY3jpxSj5mqiUI","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":5,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_FndhxY3jpxSj5mqiUI","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpxSj5mqiUI_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_FndhxY3jpF7laFYN64","id":"FndhxY3jpF7laFYN64","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":5,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_FndhxY3jpF7laFYN64","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpF7laFYN64_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_$backspace"},{"componentClass":"Frame","props":{"key":"J34TdnDDJ","id":"id_J34TdnDDJ","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_J34TdnDDJy4pKt1DyF":"value"},"name":"iOS/Dark/$return"},"children":[{"componentClass":"Frame","props":{"key":"J34TdnDDJD43VMgDEHS7Kfzl9EodVE3jBrpB","id":"id_J34TdnDDJD43VMgDEHS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"J34TdnDDJy4pKt1DyF","id":"id_J34TdnDDJy4pKt1DyF","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":41,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">return</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":41},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$return"},{"componentClass":"Frame","props":{"key":"jMh5nhJ5w","id":"id_jMh5nhJ5w","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"_overrideForwardingDescription":{"id_jMh5nhJ5weO5AJ3WWp":"value"},"name":"iOS/Dark/$space"},"children":[{"componentClass":"Frame","props":{"key":"jMh5nhJ5wS7Kfzl9EodVE3jBrpB","id":"id_jMh5nhJ5wS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"jMh5nhJ5weO5AJ3WWp","id":"id_jMh5nhJ5weO5AJ3WWp","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":42,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">space</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":42},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$space"},{"componentClass":"Frame","props":{"key":"sfJJweHZj","id":"id_sfJJweHZj","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"_overrideForwardingDescription":{"id_sfJJweHZja4LkjQDagPksdXYAaE":"value"},"name":"iOS/Dark/$m2a"},"children":[{"componentClass":"Frame","props":{"key":"sfJJweHZja4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_sfJJweHZja4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"sfJJweHZja4LkjQDagPksdXYAaE","id":"id_sfJJweHZja4LkjQDagPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":31,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">#+=</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":31},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$m2a"},{"componentClass":"Frame","props":{"key":"CxuDEHKhF","id":"id_CxuDEHKhF","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_CxuDEHKhFLcchZimxcPksdXYAaE":"value"},"name":"iOS/Dark/$m2"},"children":[{"componentClass":"Frame","props":{"key":"CxuDEHKhFLcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_CxuDEHKhFLcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"CxuDEHKhFLcchZimxcPksdXYAaE","id":"id_CxuDEHKhFLcchZimxcPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":32,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">ABC</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":32},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$m2"},{"componentClass":"Frame","props":{"key":"NZHARIbfr","id":"id_NZHARIbfr","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"_overrideForwardingDescription":{"id_NZHARIbfrPksdXYAaE":"value"},"name":"iOS/Dark/$m1"},"children":[{"componentClass":"Frame","props":{"key":"NZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_NZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"NZHARIbfrPksdXYAaE","id":"id_NZHARIbfrPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":27},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$m1"},{"componentClass":"Frame","props":{"key":"W2xh36X_N","id":"id_W2xh36X_N","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"name":"iOS/Dark/$m1a"},"children":[{"componentClass":"Frame","props":{"key":"W2xh36X_NjaSP2Qmh7dVE3jBrpB","id":"id_W2xh36X_NjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"W2xh36X_NjaSP2Qmh7Ag82wdMr4","id":"id_W2xh36X_NjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl","id":"W2xh36X_NjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":1,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_$m1a"},{"componentClass":"Frame","props":{"key":"fNvkB_8z7","id":"id_fNvkB_8z7","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_fNvkB_8z7zPVhL4xpz":"Frame","id_fNvkB_8z7guGK4znHU":"value"},"name":"iOS/Dark/$value"},"children":[{"componentClass":"Frame","props":{"key":"fNvkB_8z7zPVhL4xpz","id":"id_fNvkB_8z7zPVhL4xpz","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#444","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":68,"g":68,"b":68,"a":1,"h":0,"s":0,"l":0.26666666666666666,"initialValue":"#444","roundA":1,"format":"rgb"},"name":"Frame"},"children":[{"componentClass":"Text","props":{"key":"fNvkB_8z7guGK4znHU","id":"id_fNvkB_8z7guGK4znHU","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":12,"height":24,"left":"50%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Light&quot;, &quot;SFProDisplay-Light&quot;, &quot;SFUIDisplay-Light&quot;, &quot;.SFUIDisplay-Light&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:24px;letter-spacing:0px;line-height:1;font-weight:299\"><span data-text=\"true\">1</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Light__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":24,"width":12},"isEditable":false,"name":"value"},"name":"value"}],"name":"Frame"}],"name":"iOS_Dark_$value"},{"componentClass":"Frame","props":{"key":"cHH6U_haV","id":"id_cHH6U_haV","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Dark/$m1b"},"children":[{"componentClass":"Frame","props":{"key":"cHH6U_haVH1EEzcIETjaSP2Qmh7dVE3jBrpB","id":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"cHH6U_haVH1EEzcIETjaSP2Qmh7Ag82wdMr4","id":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","id":"cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","strokeEnabled":false,"strokeClipId":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl_clip","rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":0,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"#fff","roundA":1,"format":"rgb"}},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_$m1b"},{"componentClass":"Frame","props":{"key":"XsYt_Cmaf","id":"id_XsYt_Cmaf","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_PksdXYAaE":"value"},"name":"iOS/Light/$m1"},"children":[{"componentClass":"Frame","props":{"key":"XsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_XsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"PksdXYAaE","id":"id_PksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":27,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$m1"},{"componentClass":"Frame","props":{"key":"LcchZimxc","id":"id_LcchZimxc","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_LcchZimxcPksdXYAaE":"value"},"name":"iOS/Light/$m2"},"children":[{"componentClass":"Frame","props":{"key":"LcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_LcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"LcchZimxcPksdXYAaE","id":"id_LcchZimxcPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":32,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">ABC</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":32},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$m2"},{"componentClass":"Frame","props":{"key":"HAwB1qHnO","id":"id_HAwB1qHnO","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px"},"background":null,"_overrideForwardingDescription":{"id_HAwB1qHnONZHARIbfrPksdXYAaE":"value"},"name":"iOS/Dark/$m2b"},"children":[{"componentClass":"Frame","props":{"key":"HAwB1qHnONZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_HAwB1qHnONZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"HAwB1qHnONZHARIbfrPksdXYAaE","id":"id_HAwB1qHnONZHARIbfrPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":16,"width":27},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_$m2b"},{"componentClass":"Frame","props":{"key":"jHIwRlFR9","id":"id_jHIwRlFR9","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_jHIwRlFR9PksdXYAaE":"value"},"name":"iOS/Light/$m2b"},"children":[{"componentClass":"Frame","props":{"key":"jHIwRlFR9XsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_jHIwRlFR9XsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"jHIwRlFR9PksdXYAaE","id":"id_jHIwRlFR9PksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":27,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_$m2b"}]});
exports.IOS_Dark_$backspace = framer_1.createDesignComponent(canvas, "id_FndhxY3jp", {}, 48, 48);
exports.IOS_Dark_$m1 = framer_1.createDesignComponent(canvas, "id_NZHARIbfr", { value: "string" }, 48, 48);
exports.IOS_Dark_$m1a = framer_1.createDesignComponent(canvas, "id_W2xh36X_N", {}, 48, 48);
exports.IOS_Dark_$m1b = framer_1.createDesignComponent(canvas, "id_cHH6U_haV", {}, 48, 48);
exports.IOS_Dark_$m2 = framer_1.createDesignComponent(canvas, "id_CxuDEHKhF", { value: "string" }, 48, 48);
exports.IOS_Dark_$m2a = framer_1.createDesignComponent(canvas, "id_sfJJweHZj", { value: "string" }, 48, 48);
exports.IOS_Dark_$m2b = framer_1.createDesignComponent(canvas, "id_HAwB1qHnO", { value: "string" }, 48, 48);
exports.IOS_Dark_$return = framer_1.createDesignComponent(canvas, "id_J34TdnDDJ", { value: "string" }, 109, 48);
exports.IOS_Dark_$space = framer_1.createDesignComponent(canvas, "id_jMh5nhJ5w", { value: "string" }, 109, 48);
exports.IOS_Dark_$value = framer_1.createDesignComponent(canvas, "id_fNvkB_8z7", { value: "string" }, 48, 48);
exports.IOS_Light_$backspace = framer_1.createDesignComponent(canvas, "id_SB6Mw8ZZ4", {}, 48, 48);
exports.IOS_Light_$m1 = framer_1.createDesignComponent(canvas, "id_XsYt_Cmaf", {}, 48, 48);
exports.IOS_Light_$m1a = framer_1.createDesignComponent(canvas, "id_jaSP2Qmh7", {}, 48, 48);
exports.IOS_Light_$m1b = framer_1.createDesignComponent(canvas, "id_H1EEzcIET", {}, 48, 48);
exports.IOS_Light_$m2 = framer_1.createDesignComponent(canvas, "id_LcchZimxc", {}, 48, 48);
exports.IOS_Light_$m2a = framer_1.createDesignComponent(canvas, "id_a4LkjQDag", {}, 48, 48);
exports.IOS_Light_$m2b = framer_1.createDesignComponent(canvas, "id_jHIwRlFR9", {}, 48, 48);
exports.IOS_Light_$return = framer_1.createDesignComponent(canvas, "id_D43VMgDEH", {}, 109, 48);
exports.IOS_Light_$space = framer_1.createDesignComponent(canvas, "id_S7Kfzl9Eo", {}, 109, 48);
exports.IOS_Light_$value = framer_1.createDesignComponent(canvas, "id_edYSg_K0s", { value: "string" }, 48, 48);
exports.__info__ = [];


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

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.5","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"3975d311-78b1-4c43-9f37-01f58e412d31\",\"displayName\":\"Mobile Keyboard\"},\"author\":\"Anton Kosarchyn\",\"name\":\"@framer/martiankid.mobile-keyboard\",\"version\":\"1.3.0\"}");

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