/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Monoid-Regular.ttf */ \"./src/fonts/Monoid-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./backgrounds/images/midground.png */ \"./src/backgrounds/images/midground.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./backgrounds/images/foreground.png */ \"./src/backgrounds/images/foreground.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: 'monoid';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n    font-weight: 600;\\r\\n    font-style: normal;\\r\\n  }\\r\\nhtml {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    height: 100%;\\r\\n    margin:0;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    overflow: hidden;\\r\\n}\\r\\n#midground{\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") repeat 20% 20%;\\r\\n\\tposition: absolute;\\r\\n\\ttop: 0; left: 0; right: 0; bottom: 0;\\r\\n    z-index: 997;\\r\\n}\\r\\n#foreground {\\r\\n\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") repeat 90% 110%;\\r\\n\\tposition: absolute;\\r\\n\\ttop: 0; left: 0; right: 0; bottom: 0;\\r\\n\\tz-index: 998;\\r\\n}\\r\\n\\r\\nhr{\\r\\n    width: 50px;\\r\\n    border-color: transparent;\\r\\n    border-right-color: rgba(255, 255, 255, 0.7);\\r\\n    border-right-width: 50px;\\r\\n    z-index: 9999;\\r\\n    position: absolute;\\r\\n    overflow: hidden;\\r\\n    bottom: 100%;\\r\\n    transform-origin: 100% 50%;\\r\\n    animation-name: rain;\\r\\n    animation-duration: 1s;\\r\\n    animation-timing-function: linear;\\r\\n    animation-iteration-count: infinite;\\r\\n  }\\r\\n  @keyframes rain {\\r\\n    from {\\r\\n     transform: rotate(105deg) translateX(0);\\r\\n    }\\r\\n   \\r\\n    to {\\r\\n     transform: rotate(105deg) translateX(calc(100vh + 20px));\\r\\n    }\\r\\n   }\\r\\n\\r\\n   .mainUIBox{\\r\\n    text-align: center;\\r\\n    margin-top: 45vh;\\r\\n    position: relative;\\r\\n    z-index: 2999;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n   }\\r\\n   .mainUIBox>input{\\r\\n    width: 80vw;\\r\\n    height: 20vh;\\r\\n    background-color: rgba(0,0,0,0.3);\\r\\n    font-size: 4em;\\r\\n    border: none;\\r\\n    border-bottom:5px solid black;\\r\\n    text-align: center;\\r\\n    color: aliceblue;\\r\\n   }\\r\\n   .details-box{\\r\\n    background-color: rgba(0,0,0,0.6);\\r\\n    height: 80vh;\\r\\n    width: 80vh;\\r\\n    margin: 0 auto;\\r\\n    z-index: 9999;\\r\\n    color: white;\\r\\n    font-family: 'monoid',monospace;\\r\\n    margin-top: 10vh;\\r\\n    position: relative;\\r\\n    border-radius: 3em;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    display: flex;\\r\\n    box-shadow: inset 0 0 10px #000000;\\r\\n   }\\r\\n\\r\\n\\r\\n   .glow-on-hover {\\r\\n    width: 220px;\\r\\n    height: 50px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    color: #fff;\\r\\n    background: #111;\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    z-index: 0;\\r\\n    border-radius: 10px;\\r\\n    margin-top: 1vh;\\r\\n}\\r\\n\\r\\n.glow-on-hover:before {\\r\\n    content: '';\\r\\n    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\\r\\n    position: absolute;\\r\\n    top: -2px;\\r\\n    left:-2px;\\r\\n    background-size: 400%;\\r\\n    z-index: -1;\\r\\n    filter: blur(5px);\\r\\n    width: calc(100% + 4px);\\r\\n    height: calc(100% + 4px);\\r\\n    animation: glowing 20s linear infinite;\\r\\n    opacity: 0;\\r\\n    transition: opacity .3s ease-in-out;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.glow-on-hover:active {\\r\\n    color: #000\\r\\n}\\r\\n\\r\\n.glow-on-hover:active:after {\\r\\n    background: transparent;\\r\\n}\\r\\n\\r\\n.glow-on-hover:hover:before {\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n.glow-on-hover:after {\\r\\n    z-index: -1;\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background: #111;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n@keyframes glowing {\\r\\n    0% { background-position: 0 0; }\\r\\n    50% { background-position: 400% 0; }\\r\\n    100% { background-position: 0 0; }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/backgrounds/clouds.js":
/*!***********************************!*\
  !*** ./src/backgrounds/clouds.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createClouds(num) {\r\n    const cloudBox=document.createElement('div');\r\n    for (let i = 0; i < num; i++) {\r\n        const cloudImage = document.createElement('img');\r\n        cloudImage.src = \"https://www.transparentpng.com/thumb/clouds/Ol3U8W-clouds-free-download-transparent.png\";\r\n        cloudBox.appendChild(cloudImage);\r\n    }\r\n    cloudBox.style.display='flex';\r\n    cloudBox.style.justifyContent='space-around';\r\n    cloudBox.style.width='100vw';\r\n    cloudBox.style.position='absolute';\r\n    cloudBox.style.zIndex=9997;\r\n    cloudBox.id=\"cloudbox\";\r\n    return cloudBox;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createClouds);\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/clouds.js?");

/***/ }),

/***/ "./src/backgrounds/layers.js":
/*!***********************************!*\
  !*** ./src/backgrounds/layers.js ***!
  \***********************************/
/***/ ((module) => {

eval("let backgrounds={\r\n    morning:{\r\n        default: 'rgb(200,112,60)',\r\n        gradient: 'linear-gradient(0deg, rgba(200,112,60,1) 0%, rgba(33,174,182,1) 50%, rgba(43,139,227,1) 100%)',\r\n    },\r\n    noon:{\r\n        default:'rgb(60,183,200)',\r\n        gradient:'linear-gradient(0deg, rgba(60,183,200,1) 0%, rgba(33,174,182,1) 50%, rgba(43,139,227,1) 100%)',\r\n    },\r\n    evening:{\r\n        default:'rgb(200,123,60);',\r\n        gradient:'linear-gradient(0deg, rgba(200,123,60,1) 0%, rgba(3,14,157,1) 50%, rgba(41,21,124,1) 100%)',\r\n    },\r\n    night:{\r\n        default:'rgb(2,10,36)',\r\n        gradient:'linear-gradient(0deg, rgba(2,10,36,1) 0%, rgba(19,5,61,1) 50%, rgba(31,5,138,1) 100%)',\r\n    }\r\n}\r\nmodule.exports={\r\n    backgrounds\r\n};\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/layers.js?");

/***/ }),

/***/ "./src/backgrounds/rain.js":
/*!*********************************!*\
  !*** ./src/backgrounds/rain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ causeRain)\n/* harmony export */ });\nfunction causeRain() {\r\n    let hrElement;\r\n    let counter = 100;\r\n    for (let i = 0; i < counter; i++) {\r\n        hrElement = document.createElement(\"HR\");\r\n        hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + \"px\";\r\n        hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + \"s\";\r\n        hrElement.style.animationDelay = Math.random() * 5 + \"s\";\r\n        document.body.appendChild(hrElement);\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/rain.js?");

/***/ }),

/***/ "./src/backgrounds/sun.js":
/*!********************************!*\
  !*** ./src/backgrounds/sun.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction getMouseCoords(e) {\r\n    var e = e || window.event;\r\n    try{\r\n    document.getElementById('container').innerHTML = e.clientX + ', ' +\r\n      e.clientY + '<br>' + e.screenX + ', ' + e.screenY;\r\n    }catch{};\r\n  }\r\n  var followCursor = (function() {\r\n\r\n    var s = document.createElement('div');\r\n    s.id='pointer';\r\n    s.style.position = 'absolute';\r\n    s.style.margin = '0';\r\n    s.style.padding = '5px';\r\n    s.style.fontSize=\"10em\";\r\n    s.style.transition=\"all 15s\";\r\n    s.style.zIndex=999;\r\n    s.style.color='yellow';\r\n    s.innerText=\"☀\";\r\n    return {\r\n      init: function(t) {\r\n        s.innerText=t;\r\n        document.body.appendChild(s);\r\n      },\r\n      \r\n      run: function(e) {\r\n        var e = e || window.event;\r\n        s.style.left = (e.clientX - 5) + 'px';\r\n        s.style.top = (e.clientY - 5) + 'px';\r\n        getMouseCoords(e);\r\n      }\r\n    };\r\n  }());\r\n  \r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (followCursor);\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/sun.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction detailsBox(JSONresp) {\r\n    const mainBox = document.createElement('div');\r\n    mainBox.classList.add('details-box');\r\n    const city = document.createElement('h1');\r\n    city.innerText = JSONresp.name;\r\n    mainBox.appendChild(city);\r\n    city.style.fontSize=\"4em\";\r\n    const temp = document.createElement('div');\r\n    temp.innerText = `Temperature: ${Math.round((JSONresp.main.temp - 273) * 100) / 100} °C`;\r\n    mainBox.appendChild(temp);\r\n    let weatherBox=document.createElement('div');\r\n    let inner=document.createElement('div');\r\n    inner.style.fontSize=\"2em\";\r\n    inner.innerText=JSONresp.weather[0].main;\r\n    mainBox.appendChild(inner);\r\n    let inner2=document.createElement('div');\r\n    inner2.innerText=`Description: ${JSONresp.weather[0].description}`;\r\n    inner2.style.textTransform=\"capitalize\";\r\n    mainBox.appendChild(inner2);\r\n    let detailsBox=document.createElement('div');\r\n    let humidity=document.createElement('div');\r\n    humidity.innerText=`Humidity: ${JSONresp.main.humidity} %`;\r\n    let pressure=document.createElement('div');\r\n    pressure.innerText=`Pressure: ${JSONresp.main.pressure} hPa`;\r\n    detailsBox.appendChild(humidity);\r\n    detailsBox.appendChild(pressure);\r\n    let reset=document.createElement('button');\r\n    reset.innerText=\"OK\";\r\n    reset.addEventListener('click',()=>{\r\n        window.location.reload();\r\n    })\r\n    \r\n    mainBox.appendChild(detailsBox);\r\n    mainBox.appendChild(weatherBox);\r\n    reset.classList.add('glow-on-hover');\r\n    mainBox.appendChild(reset);\r\n    return mainBox;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsBox);\n\n//# sourceURL=webpack://odin-weather/./src/details.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _backgrounds_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgrounds/layers */ \"./src/backgrounds/layers.js\");\n/* harmony import */ var _backgrounds_layers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backgrounds_layers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backgrounds_clouds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backgrounds/clouds */ \"./src/backgrounds/clouds.js\");\n/* harmony import */ var _backgrounds_sun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgrounds/sun */ \"./src/backgrounds/sun.js\");\n/* harmony import */ var _backgrounds_rain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backgrounds/rain */ \"./src/backgrounds/rain.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet time = 'night';\r\nlet clouds = 4;\r\nlet rain = false;\r\n\r\nlet date = new Date();\r\nlet hours = date.getUTCHours();\r\nif (hours >= 6 && hours < 10)\r\n  time = \"morning\";\r\nelse if (hours >= 10 && hours < 17)\r\n  time = \"noon\";\r\nelse if (hours >= 17 && hours < 21)\r\n  time = 'evening';\r\nelse\r\n  time = 'night';\r\n\r\n\r\ndocument.body.style.background = _backgrounds_layers__WEBPACK_IMPORTED_MODULE_1__.backgrounds[time].gradient;\r\n\r\n\r\nlet Clouds = (0,_backgrounds_clouds__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clouds);\r\nClouds.style.position = 'absolute';\r\nClouds.style.top = \"1vh\";\r\nif (rain) {\r\n  (0,_backgrounds_rain__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n}\r\ndocument.body.appendChild(Clouds);\r\n\r\n//now the ui\r\n\r\nconst mainBox = document.createElement('div');\r\nmainBox.classList.add('mainUIBox');\r\nconst input = document.createElement('input');\r\ninput.focus();\r\ninput.placeholder = \"Enter City Name\";\r\nconst but = document.createElement('button');\r\nbut.classList.add('glow-on-hover');\r\nmainBox.appendChild(input);\r\nmainBox.appendChild(but);\r\nbut.innerText = \"Search\";\r\nbut.addEventListener('click', async () => {\r\n  let city = input.value;\r\n  console.log(city);\r\n  let res;\r\n  let weatherData;\r\n  try {\r\n    res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cb1bab1fa8545d676c9ea3818b0b35c2`, { mode: 'cors' });\r\n    if (res.status!==200)\r\n    {\r\n      alert(\"Error: Invalid Location\");\r\n    }\r\n    weatherData = await res.json();\r\n  } catch (error) {\r\n   \r\n  }\r\n  //clouds\r\n  let clouds = Math.floor((weatherData.clouds.all) / 100 * 5);\r\n  let cloudBox = document.querySelector('#cloudbox');\r\n  cloudBox.remove();\r\n  let Clouds = (0,_backgrounds_clouds__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clouds);\r\n  Clouds.style.position = 'absolute';\r\n  Clouds.style.top = \"1vh\";\r\n  document.body.appendChild(Clouds);\r\n  //Rain\r\n  if (weatherData.weather[0].main == 'Thunderstorm' || weatherData.weather[0].main == 'Drizzle' || weatherData.weather[0].main == 'Rain') {\r\n    (0,_backgrounds_rain__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  }\r\n  else {\r\n    let elements = document.querySelectorAll(\"HR\");\r\n    elements.forEach(element => {\r\n      element.remove();\r\n    });\r\n  }\r\n\r\n  //Day n nite\r\n\r\n  let date = new Date();\r\n  let hours = date.getUTCHours();\r\n  let minutes = date.getUTCMinutes();\r\n  let seconds = date.getUTCSeconds();\r\n  let currentTime = (hours * 3600) + (minutes * 60) + seconds + weatherData.timezone;\r\n  hours = Math.floor(currentTime / 3600);\r\n  if (hours >= 6 && hours < 10)\r\n    time = \"morning\";\r\n  else if (hours >= 10 && hours < 17)\r\n    time = \"noon\";\r\n  else if (hours >= 17 && hours < 21)\r\n    time = 'evening';\r\n  else\r\n    time = 'night';\r\n  document.body.style.background = _backgrounds_layers__WEBPACK_IMPORTED_MODULE_1__.backgrounds[time].gradient;\r\n  try {\r\n    if (time == 'night' || time == 'evening')\r\n      _backgrounds_sun__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(\"🌖\");\r\n    else\r\n      _backgrounds_sun__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init('☀')\r\n    document.body.onmousemove = _backgrounds_sun__WEBPACK_IMPORTED_MODULE_3__[\"default\"].run;\r\n  } catch (error) {\r\n\r\n  }\r\n  if (time=='night')\r\n  {\r\n    const midground = document.createElement('div');\r\n    midground.id = 'midground';\r\n    const foreground = document.createElement('div');\r\n    foreground.id = 'foreground';\r\n    document.body.appendChild(midground);\r\n    document.body.appendChild(foreground);\r\n  }\r\n  let inp = document.querySelector('.mainUIBox');\r\n  inp.remove();\r\n  document.body.appendChild((0,_details__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(weatherData));\r\n  console.log(weatherData);\r\n\r\n});\r\ndocument.body.appendChild(mainBox);\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ }),

/***/ "./src/backgrounds/images/foreground.png":
/*!***********************************************!*\
  !*** ./src/backgrounds/images/foreground.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"033777d529f100a12fce.png\";\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/images/foreground.png?");

/***/ }),

/***/ "./src/backgrounds/images/midground.png":
/*!**********************************************!*\
  !*** ./src/backgrounds/images/midground.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"15b73cfd7e50bfc02338.png\";\n\n//# sourceURL=webpack://odin-weather/./src/backgrounds/images/midground.png?");

/***/ }),

/***/ "./src/fonts/Monoid-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Monoid-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"231464d5b77f132bf0fb.ttf\";\n\n//# sourceURL=webpack://odin-weather/./src/fonts/Monoid-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;