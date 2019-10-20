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
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Keyboard.tsx":
/*!***************************!*\
  !*** ./code/Keyboard.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0tleWJvYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUEyQztBQUMzQyxtQ0FBMEU7QUFFMUUsU0FBZ0IsUUFBUSxDQUFDLEVBY3hCO1FBZHdCLEVBQ3JCLEdBQUcsRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsT0FBTyxFQUNQLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxPQUViLEVBREcsaUxBQU87O0lBRVAsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGlCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsaUJBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFeEMsa0JBQWtCO0lBQ2xCLGlCQUFTLENBQUMsR0FBRyxFQUFFOztRQUNYLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNwRCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsR0FB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

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
        }, background: background, size: "100%" }, keyTemp ? elements : "Connect keys"));
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
exports.__info__ = [{ "name": "Keyboard", "children": false, "type": "component" }];


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
const canvas = framer_1.CanvasStore.shared({"children":[{"componentClass":"Frame","props":{"key":"SB6Mw8ZZ4","id":"id_SB6Mw8ZZ4","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/backspace"},"children":[{"componentClass":"Frame","props":{"key":"dVE3jBrpB","id":"id_dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"Ag82wdMr4","id":"id_Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_oLgvoIlNl","id":"oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":4.9054951522818016,"y":0.6485507429653073,"handleMirroring":"disconnected","handleOutX":0.37881985117110073,"handleOutY":-0.4132580194593823,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":0,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.5606127632232303,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":0,"handleMirroring":"disconnected","handleOutX":1.1045694996615865,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":16,"y":2.0000000000000004,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-1.104569499661587,"radius":0,"__class":"PathSegment"},{"x":16,"y":10,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":1.1045694996615865,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":12,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":1.1045694996615865,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":12,"handleMirroring":"disconnected","handleOutX":-0.5606127632232303,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":4.9054951522818016,"y":11.351449257034693,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.37881985117110073,"handleInY":0.41325801945938245,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":7.351449257034693,"handleMirroring":"disconnected","handleOutX":-0.7009222927980233,"handleOutY":-0.7646425012342073,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":4.648550742965307,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.7009222927980233,"handleInY":0.7646425012342073,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8,"y":10,"width":16,"height":12},"frame":{"x":8,"y":10,"width":16,"height":12},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"butt","lineJoin":"miter","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_xSj5mqiUI","id":"xSj5mqiUI","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":5,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_xSj5mqiUI","strokeEnabled":true,"strokeClipId":"id_xSj5mqiUI_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#000","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_F7laFYN64","id":"F7laFYN64","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":5,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_F7laFYN64","strokeEnabled":true,"strokeClipId":"id_F7laFYN64_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#000","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_backspace"},{"componentClass":"Frame","props":{"key":"jaSP2Qmh7","id":"id_jaSP2Qmh7","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/mod_2a"},"children":[{"componentClass":"Frame","props":{"key":"jaSP2Qmh7dVE3jBrpB","id":"id_jaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"jaSP2Qmh7Ag82wdMr4","id":"id_jaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_jaSP2Qmh7oLgvoIlNl","id":"jaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_jaSP2Qmh7oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_jaSP2Qmh7oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":1,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_mod_2a"},{"componentClass":"Frame","props":{"key":"H1EEzcIET","id":"id_H1EEzcIET","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Light/mod_2b"},"children":[{"componentClass":"Frame","props":{"key":"H1EEzcIETjaSP2Qmh7dVE3jBrpB","id":"id_H1EEzcIETjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Frame","props":{"key":"H1EEzcIETjaSP2Qmh7Ag82wdMr4","id":"id_H1EEzcIETjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl","id":"H1EEzcIETjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl","strokeEnabled":false,"strokeClipId":"id_H1EEzcIETjaSP2Qmh7oLgvoIlNl_clip","rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":0,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":{"r":0,"g":0,"b":0,"a":1,"h":0,"s":0,"l":0,"initialValue":"#000","roundA":1,"format":"rgb"}},"name":null}],"name":null}],"name":null}],"name":"iOS_Light_mod_2b"},{"componentClass":"Frame","props":{"key":"S7Kfzl9Eo","id":"id_S7Kfzl9Eo","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_eO5AJ3WWp":"value"},"name":"iOS/Light/space"},"children":[{"componentClass":"Frame","props":{"key":"S7Kfzl9EodVE3jBrpB","id":"id_S7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"eO5AJ3WWp","id":"id_eO5AJ3WWp","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":42,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">space</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":42,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_space"},{"componentClass":"Frame","props":{"key":"D43VMgDEH","id":"id_D43VMgDEH","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_y4pKt1DyF":"value"},"name":"iOS/Light/return"},"children":[{"componentClass":"Frame","props":{"key":"D43VMgDEHS7Kfzl9EodVE3jBrpB","id":"id_D43VMgDEHS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"y4pKt1DyF","id":"id_y4pKt1DyF","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":41,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">return</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":41,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_return"},{"componentClass":"Frame","props":{"key":"edYSg_K0s","id":"id_edYSg_K0s","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_zPVhL4xpz":"Frame","id_guGK4znHU":"value"},"name":"iOS/Light/key"},"children":[{"componentClass":"Frame","props":{"key":"zPVhL4xpz","id":"id_zPVhL4xpz","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#fff","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"#fff","roundA":1,"format":"rgb"},"name":"Frame"},"children":[{"componentClass":"Text","props":{"key":"guGK4znHU","id":"id_guGK4znHU","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":12,"height":24,"left":"50%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Light&quot;, &quot;SFProDisplay-Light&quot;, &quot;SFUIDisplay-Light&quot;, &quot;.SFUIDisplay-Light&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:24px;letter-spacing:0px;line-height:1;font-weight:299\"><span data-text=\"true\">1</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Light__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":12,"height":24},"isEditable":false,"name":"value"},"name":"value"}],"name":"Frame"}],"name":"iOS_Light_key"},{"componentClass":"Frame","props":{"key":"a4LkjQDag","id":"id_a4LkjQDag","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_a4LkjQDagPksdXYAaE":"value"},"name":"iOS/Light/mod2_c"},"children":[{"componentClass":"Frame","props":{"key":"a4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_a4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"a4LkjQDagPksdXYAaE","id":"id_a4LkjQDagPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":31,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">#+=</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":31,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_mod2_c"},{"componentClass":"Frame","props":{"key":"XsYt_Cmaf","id":"id_XsYt_Cmaf","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_PksdXYAaE":"value"},"name":"iOS/Light/mod1_a|mod2_d"},"children":[{"componentClass":"Frame","props":{"key":"XsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_XsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"PksdXYAaE","id":"id_PksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":27,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_mod1_a_mod2_d"},{"componentClass":"Frame","props":{"key":"LcchZimxc","id":"id_LcchZimxc","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_LcchZimxcPksdXYAaE":"value"},"name":"iOS/Light/mod1_b"},"children":[{"componentClass":"Frame","props":{"key":"LcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_LcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 85%)","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":{"r":216.75,"g":216.75,"b":216.75,"a":1,"h":0,"s":0,"l":0.85,"initialValue":"hsl(0, 0%, 85%)","roundA":1,"format":"hsl"}},"children":[{"componentClass":"Text","props":{"key":"LcchZimxcPksdXYAaE","id":"id_LcchZimxcPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":32,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#000;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">ABC</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":32,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Light_mod1_b"},{"componentClass":"Frame","props":{"key":"fNvkB_8z7","id":"id_fNvkB_8z7","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_fNvkB_8z7zPVhL4xpz":"Frame","id_fNvkB_8z7guGK4znHU":"value"},"name":"iOS/Dark/key"},"children":[{"componentClass":"Frame","props":{"key":"fNvkB_8z7zPVhL4xpz","id":"id_fNvkB_8z7zPVhL4xpz","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#444","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":68,"g":68,"b":68,"a":1,"h":0,"s":0,"l":0.26666666666666666,"initialValue":"#444","roundA":1,"format":"rgb"},"name":"Frame"},"children":[{"componentClass":"Text","props":{"key":"fNvkB_8z7guGK4znHU","id":"id_fNvkB_8z7guGK4znHU","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":12,"height":24,"left":"50%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Light&quot;, &quot;SFProDisplay-Light&quot;, &quot;SFUIDisplay-Light&quot;, &quot;.SFUIDisplay-Light&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:24px;letter-spacing:0px;line-height:1;font-weight:299\"><span data-text=\"true\">1</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Light__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":12,"height":24},"isEditable":false,"name":"value"},"name":"value"}],"name":"Frame"}],"name":"iOS_Dark_key"},{"componentClass":"Frame","props":{"key":"W2xh36X_N","id":"id_W2xh36X_N","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":null,"name":"iOS/Dark/mod_2a"},"children":[{"componentClass":"Frame","props":{"key":"W2xh36X_NjaSP2Qmh7dVE3jBrpB","id":"id_W2xh36X_NjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"W2xh36X_NjaSP2Qmh7Ag82wdMr4","id":"id_W2xh36X_NjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl","id":"W2xh36X_NjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_W2xh36X_NjaSP2Qmh7oLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":1,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_mod_2a"},{"componentClass":"Frame","props":{"key":"sfJJweHZj","id":"id_sfJJweHZj","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":null,"_overrideForwardingDescription":{"id_sfJJweHZja4LkjQDagPksdXYAaE":"value"},"name":"iOS/Dark/mod2_c"},"children":[{"componentClass":"Frame","props":{"key":"sfJJweHZja4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_sfJJweHZja4LkjQDagXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"sfJJweHZja4LkjQDagPksdXYAaE","id":"id_sfJJweHZja4LkjQDagPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":31,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">#+=</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":31,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_mod2_c"},{"componentClass":"Frame","props":{"key":"NZHARIbfr","id":"id_NZHARIbfr","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":null,"_overrideForwardingDescription":{"id_NZHARIbfrPksdXYAaE":"value"},"name":"iOS/Dark/mod1_a"},"children":[{"componentClass":"Frame","props":{"key":"NZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_NZHARIbfrXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"NZHARIbfrPksdXYAaE","id":"id_NZHARIbfrPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":27,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">123</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":27,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_mod1_a"},{"componentClass":"Frame","props":{"key":"FndhxY3jp","id":"id_FndhxY3jp","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":null,"name":"iOS/Dark/backspace"},"children":[{"componentClass":"Frame","props":{"key":"FndhxY3jpdVE3jBrpB","id":"id_FndhxY3jpdVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"FndhxY3jpAg82wdMr4","id":"id_FndhxY3jpAg82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_FndhxY3jpoLgvoIlNl","id":"FndhxY3jpoLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":4.9054951522818016,"y":0.6485507429653073,"handleMirroring":"disconnected","handleOutX":0.37881985117110073,"handleOutY":-0.4132580194593823,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":0,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.5606127632232303,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":0,"handleMirroring":"disconnected","handleOutX":1.1045694996615865,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":16,"y":2.0000000000000004,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-1.104569499661587,"radius":0,"__class":"PathSegment"},{"x":16,"y":10,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":1.1045694996615865,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14,"y":12,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":1.1045694996615865,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":6.379803432683285,"y":12,"handleMirroring":"disconnected","handleOutX":-0.5606127632232303,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":4.9054951522818016,"y":11.351449257034693,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.37881985117110073,"handleInY":0.41325801945938245,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":7.351449257034693,"handleMirroring":"disconnected","handleOutX":-0.7009222927980233,"handleOutY":-0.7646425012342073,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":1.2388284856151355,"y":4.648550742965307,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.7009222927980233,"handleInY":0.7646425012342073,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_FndhxY3jpoLgvoIlNl","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpoLgvoIlNl_clip","strokeWidth":1.5,"rect":{"x":8,"y":10,"width":16,"height":12},"frame":{"x":8,"y":10,"width":16,"height":12},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"butt","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_FndhxY3jpxSj5mqiUI","id":"FndhxY3jpxSj5mqiUI","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":5,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_FndhxY3jpxSj5mqiUI","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpxSj5mqiUI_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_FndhxY3jpF7laFYN64","id":"FndhxY3jpF7laFYN64","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":5,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":5,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_FndhxY3jpF7laFYN64","strokeEnabled":true,"strokeClipId":"id_FndhxY3jpF7laFYN64_clip","strokeWidth":1.5,"rect":{"x":15,"y":13.5,"width":5,"height":5},"frame":{"x":15,"y":13.5,"width":5,"height":5},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"#fff","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_backspace"},{"componentClass":"Frame","props":{"key":"jMh5nhJ5w","id":"id_jMh5nhJ5w","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #ccc"},"background":null,"_overrideForwardingDescription":{"id_jMh5nhJ5weO5AJ3WWp":"value"},"name":"iOS/Dark/space"},"children":[{"componentClass":"Frame","props":{"key":"jMh5nhJ5wS7Kfzl9EodVE3jBrpB","id":"id_jMh5nhJ5wS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"jMh5nhJ5weO5AJ3WWp","id":"id_jMh5nhJ5weO5AJ3WWp","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":42,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">space</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":42,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_space"},{"componentClass":"Frame","props":{"key":"cHH6U_haV","id":"id_cHH6U_haV","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"name":"iOS/Dark/mod_2b"},"children":[{"componentClass":"Frame","props":{"key":"cHH6U_haVH1EEzcIETjaSP2Qmh7dVE3jBrpB","id":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7dVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Frame","props":{"key":"cHH6U_haVH1EEzcIETjaSP2Qmh7Ag82wdMr4","id":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7Ag82wdMr4","willChangeTransform":false,"_constraints":{"enabled":true},"width":32,"height":32,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","id":"cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":7.63649342372509,"y":0.9143010807616687,"handleMirroring":"disconnected","handleOutX":0.3106089871152511,"handleOutY":-0.32888010400438383,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":1.2576128472435273,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.45237160132649434,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":4.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":5,"handleMirroring":"disconnected","handleOutX":0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":15,"y":5.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":15,"y":12.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.2761423749153966,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":14.5,"y":13,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.2761423749153966,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":9,"y":13,"handleMirroring":"disconnected","handleOutX":-0.2761423749153966,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":13.5,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":-0.2761423749153966,"radius":0,"__class":"PathSegment"},{"x":8.5,"y":16.74238715275647,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0.4523716013264938,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":7.63649342372509,"y":17.085698919238332,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":0.310608987115252,"handleInY":0.3288801040043836,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":9.343311766481857,"handleMirroring":"disconnected","handleOutX":-0.1819912316334552,"handleOutY":-0.1926965982001292,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0.32423889056619953,"y":8.656688233518143,"handleMirroring":"disconnected","handleOutX":0,"handleOutY":0,"handleInX":-0.1819912316334552,"handleInY":0.1926965982001292,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl","strokeEnabled":false,"strokeClipId":"id_cHH6U_haVH1EEzcIETjaSP2Qmh7oLgvoIlNl_clip","rect":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"frame":{"x":8.5,"y":6.499999999999999,"width":15,"height":18},"strokeAlpha":0,"name":"Path","rotation":90,"lineCap":"round","lineJoin":"round","strokeColor":"var(--token-800d437d-0514-4d20-9357-e47edb8b1c65, rgb(0, 0, 0)) /* {\"name\":\"black\"} */","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"#fff","roundA":1,"format":"rgb"}},"name":null}],"name":null}],"name":null}],"name":"iOS_Dark_mod_2b"},{"componentClass":"Frame","props":{"key":"CxuDEHKhF","id":"id_CxuDEHKhF","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":48,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_CxuDEHKhFLcchZimxcPksdXYAaE":"value"},"name":"iOS/Dark/mod1_b"},"children":[{"componentClass":"Frame","props":{"key":"CxuDEHKhFLcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","id":"id_CxuDEHKhFLcchZimxcXsYt_CmafS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"CxuDEHKhFLcchZimxcPksdXYAaE","id":"id_CxuDEHKhFLcchZimxcPksdXYAaE","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":32,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">ABC</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":32,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_mod1_b"},{"componentClass":"Frame","props":{"key":"J34TdnDDJ","id":"id_J34TdnDDJ","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":109,"intrinsicHeight":48},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","borderRadius":"8px"},"background":null,"_overrideForwardingDescription":{"id_J34TdnDDJy4pKt1DyF":"value"},"name":"iOS/Dark/return"},"children":[{"componentClass":"Frame","props":{"key":"J34TdnDDJD43VMgDEHS7Kfzl9EodVE3jBrpB","id":"id_J34TdnDDJD43VMgDEHS7Kfzl9EodVE3jBrpB","willChangeTransform":false,"_constraints":{"enabled":true},"left":0,"right":0,"top":0,"bottom":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#222","borderRadius":"4px","boxShadow":"inset 0px -1px 0px 0px #000"},"background":{"r":34,"g":34,"b":34,"a":1,"h":0,"s":0,"l":0.13333333333333333,"initialValue":"#222","roundA":1,"format":"rgb"}},"children":[{"componentClass":"Text","props":{"key":"J34TdnDDJy4pKt1DyF","id":"id_J34TdnDDJy4pKt1DyF","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":41,"height":16,"left":"51.041666666666664%","top":"50%","center":true,"rawHTML":"<div class='DraftEditor-alignCenter'><div data-offset-key=\"inTfI-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"inTfI-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay&quot;, &quot;SFProDisplay-Regular&quot;, &quot;SFUIDisplay-Regular&quot;, &quot;.SFUIDisplay&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:16px;letter-spacing:0px;line-height:1\"><span data-text=\"true\">return</span></span></div></div>","alignment":"center","fonts":["__SF-UI-Display-Regular__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"width":41,"height":16},"isEditable":false,"name":"value"},"name":"value"}],"name":null}],"name":"iOS_Dark_return"}]});
exports.IOS_Dark_backspace = framer_1.createDesignComponent(canvas, "id_FndhxY3jp", {}, 48, 48);
exports.IOS_Dark_key = framer_1.createDesignComponent(canvas, "id_fNvkB_8z7", { value: "string" }, 48, 48);
exports.IOS_Dark_mod1_a = framer_1.createDesignComponent(canvas, "id_NZHARIbfr", { value: "string" }, 48, 48);
exports.IOS_Dark_mod1_b = framer_1.createDesignComponent(canvas, "id_CxuDEHKhF", { value: "string" }, 48, 48);
exports.IOS_Dark_mod2_c = framer_1.createDesignComponent(canvas, "id_sfJJweHZj", { value: "string" }, 48, 48);
exports.IOS_Dark_mod_2a = framer_1.createDesignComponent(canvas, "id_W2xh36X_N", {}, 48, 48);
exports.IOS_Dark_mod_2b = framer_1.createDesignComponent(canvas, "id_cHH6U_haV", {}, 48, 48);
exports.IOS_Dark_return = framer_1.createDesignComponent(canvas, "id_J34TdnDDJ", { value: "string" }, 109, 48);
exports.IOS_Dark_space = framer_1.createDesignComponent(canvas, "id_jMh5nhJ5w", { value: "string" }, 109, 48);
exports.IOS_Light_backspace = framer_1.createDesignComponent(canvas, "id_SB6Mw8ZZ4", {}, 48, 48);
exports.IOS_Light_key = framer_1.createDesignComponent(canvas, "id_edYSg_K0s", { value: "string" }, 48, 48);
exports.IOS_Light_mod1_a_mod2_d = framer_1.createDesignComponent(canvas, "id_XsYt_Cmaf", { value: "string" }, 48, 48);
exports.IOS_Light_mod1_b = framer_1.createDesignComponent(canvas, "id_LcchZimxc", { value: "string" }, 48, 48);
exports.IOS_Light_mod2_c = framer_1.createDesignComponent(canvas, "id_a4LkjQDag", { value: "string" }, 48, 48);
exports.IOS_Light_mod_2a = framer_1.createDesignComponent(canvas, "id_jaSP2Qmh7", {}, 48, 48);
exports.IOS_Light_mod_2b = framer_1.createDesignComponent(canvas, "id_H1EEzcIET", {}, 48, 48);
exports.IOS_Light_return = framer_1.createDesignComponent(canvas, "id_D43VMgDEH", { value: "string" }, 109, 48);
exports.IOS_Light_space = framer_1.createDesignComponent(canvas, "id_S7Kfzl9Eo", { value: "string" }, 109, 48);
exports.__info__ = [];


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.1.4","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"useOpenURL","type":"action"},{"name":"useLog","type":"action"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"3975d311-78b1-4c43-9f37-01f58e412d31\"},\"author\":\"Anton Kosarchyn\"}");

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