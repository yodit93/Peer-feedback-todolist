/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(250, 250, 250);\\r\\n}\\r\\n\\r\\n.todo-list-cont {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  background-color: white;\\r\\n  margin-top: 10%;\\r\\n  box-shadow: 0 3px 9px rgb(0, 0, 0, 0.15);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.todays-todo,\\r\\n.add-todo {\\r\\n  padding: 0% 3%;\\r\\n  border-bottom: 1px solid rgb(250, 250, 250);\\r\\n  box-shadow: 0 0 1px rgb(0, 0, 0, 0.15);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 1.5rem;\\r\\n  color: rgb(129 120 120);\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.refreshBtn,\\r\\n.addBtn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n.refreshBtn > img,\\r\\n.addBtn > img {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.input-todo {\\r\\n  border: none;\\r\\n  padding: 15px 0;\\r\\n  width: 90%;\\r\\n  font-size: 1.3rem;\\r\\n  color: rgb(129 120 120);\\r\\n}\\r\\n\\r\\n.input-todo::placeholder {\\r\\n  font-size: 1.3rem;\\r\\n  font-weight: bold;\\r\\n  font-style: italic;\\r\\n  color: rgb(129 120 120);\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0% 3%;\\r\\n  border-bottom: 1px solid rgb(216, 214, 214);\\r\\n  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.15);\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  height: 30%;\\r\\n  width: 5%;\\r\\n}\\r\\n\\r\\n.todo-title {\\r\\n  font-size: 1.5rem;\\r\\n  margin-left: 2%;\\r\\n  color: rgb(129 120 120);\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.more-btn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n.more-btn > img {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.completeAll {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0% 3%;\\r\\n  border-bottom: 1px solid rgb(216, 214, 214);\\r\\n  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.15);\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.clearAll {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 0% 3%;\\r\\n  border-bottom: 1px solid rgb(216, 214, 214);\\r\\n  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.15);\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.clearAllBtn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  color: rgb(129 120 120);\\r\\n}\\r\\n\\r\\n.bold {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.delete,\\r\\n.edit {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.edit-cont {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.new-input {\\r\\n  padding: 8px 0;\\r\\n  width: 70%;\\r\\n  margin-right: 10%;\\r\\n  font-size: 1.3rem;\\r\\n  color: rgb(129 120 120);\\r\\n}\\r\\n\\r\\n.update {\\r\\n  padding: 8px 15px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_autorenew_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/autorenew.svg */ \"./src/images/autorenew.svg\");\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/add.svg */ \"./src/images/add.svg\");\n/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/display.js */ \"./src/module/display.js\");\n/* harmony import */ var _module_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/storage.js */ \"./src/module/storage.js\");\n\n\n\n\n\n\nconst todos = (0,_module_storage_js__WEBPACK_IMPORTED_MODULE_4__.getTodos)();\nconst interact = new _module_display_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](todos);\nconst todaysTodo = document.querySelector('.todays-todo');\nconst addTodo = document.querySelector('.add-todo');\n\nconst render = () => {\n  todaysTodo.innerHTML = `<h4 class=\"title\">Today's To do</h4>\n  <button class=\"refreshBtn\"><img src=\"${_images_autorenew_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"\"></button>`;\n  addTodo.innerHTML = `<input type=\"text\" class=\"input-todo required\" placeholder=\"Add to your list...\">\n  <button class=\"addBtn\"><img src=\"${_images_add_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"\"></button>`;\n}\n\nrender();\n\ninteract.display();\n\nconst inputTodo = document.querySelector('.input-todo');\nconst addBtn = document.querySelector('.addBtn');\n\naddBtn.addEventListener('click', () => {\n  if (inputTodo.value !== '') {\n    interact.addTask(inputTodo);\n  }\n  inputTodo.value = '';\n});\n\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/module/crete-todo.js":
/*!**********************************!*\
  !*** ./src/module/crete-todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTodo)\n/* harmony export */ });\nclass CreateTodo {\n  constructor(description, index) {\n    this.description = description;\n    this.index = index;\n    this.completed = false;\n  }\n}\n\n//# sourceURL=webpack://todo-list-app/./src/module/crete-todo.js?");

/***/ }),

/***/ "./src/module/display.js":
/*!*******************************!*\
  !*** ./src/module/display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interact)\n/* harmony export */ });\n/* harmony import */ var _images_more_vert_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/more-vert.svg */ \"./src/images/more-vert.svg\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./src/module/remove.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n/* harmony import */ var _crete_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crete-todo.js */ \"./src/module/crete-todo.js\");\n\n\n\n\n\nclass Interact {\n  constructor(lists) {\n    this.lists = lists;\n    this.clearBtn = document.querySelector('.clearAllBtn');\n    this.clearBtn.addEventListener('click', this.clearAllCompleted);\n    this.todoList = document.querySelector('.todo-list');\n  }\n\n  editTodo = (idTask, parent) => {\n    parent.removeChild(parent.childNodes[1]);\n    const elem = document.createElement('div');\n    elem.className = 'edit-cont';\n    let el = document.createElement('input');\n    el.type = 'text';\n    el.className = 'new-input';\n    elem.appendChild(el);\n    el = document.createElement('button');\n    el.className = 'update';\n    el.id = idTask;\n    el.innerText = 'Update';\n    el.onclick = this.updateTodo;\n    elem.appendChild(el);\n    parent.replaceChild(elem, parent.childNodes[1]);\n  }\n\n  addTask = (inputTodo) => {\n    const newDescription = inputTodo.value;\n    const index = this.lists.length + 1;\n    const newTodo = new _crete_todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](newDescription, index);\n    this.lists.push(newTodo);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.sortList)(this.lists);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.savedTodos)(this.lists);\n    this.display();\n  };\n\n  editTask = (e) => {\n    const idTask = e.target.id;\n    const parent = e.target.parentNode.parentNode;\n    this.editTodo(idTask, parent);\n  }\n\n  clickedBtn = (e) => {\n    const parent = e.target.parentNode.parentNode;\n    const idClicked = e.target.id;\n    this.moreButton(parent, idClicked);\n  }\n\n  updateTodo = (e) => {\n    const idUpdate = e.target.id;\n    const input = document.querySelector('.new-input');\n    const newValue = input.value;\n    const list = this.lists.find((todo) => Number(todo.index) === Number(idUpdate));\n    list.description = newValue;\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.savedTodos)(this.lists);\n    this.display();\n  };\n\n  deleteTask = (e) => {\n    const removed = e.target;\n    const { id } = removed;\n    (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n    this.display();\n    window.location.reload();\n  };\n\n  isCompleted = (e) => {\n    const completeTodo = e.target;\n    this.lists = this.lists.map((todo) => {\n      if (JSON.stringify(todo.index) === completeTodo.dataset.id) {\n        todo.completed = completeTodo.checked;\n        e.target.parentNode.childNodes[1].style.textDecoration = 'line-through';\n      }\n      return todo;\n    });\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.savedTodos)(this.lists);\n  }\n\n  clearAllCompleted = () => {\n    this.lists = this.lists.filter((todo) => !todo.completed);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.sortList)(this.lists);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.savedTodos)(this.lists);\n    this.display();\n  }\n\n  moreButton = (parent, idClicked) => {\n    parent.removeChild(parent.childNodes[2]);\n    const elem = document.createElement('div');\n    elem.className = 'click-more';\n    let el = document.createElement('button');\n    el.classList = 'delete fa-sharp fa-solid fa-trash';\n    el.id = idClicked;\n    el.onclick = this.deleteTask;\n    elem.appendChild(el);\n    el = document.createElement('button');\n    el.classList = 'edit fa-regular fa-pen-to-square';\n    el.id = idClicked;\n    el.onclick = this.editTask;\n    elem.appendChild(el);\n    parent.appendChild(elem);\n  }\n\n  display = () => {\n    this.todoList.innerHTML = '';\n    this.lists.forEach((todo) => {\n      const list = document.createElement('li');\n      list.className = 'list';\n      let elem = document.createElement('input');\n      elem.type = 'checkbox';\n      elem.dataset.id = `${todo.index}`;\n      elem.onchange = this.isCompleted;\n      elem.className = 'check';\n      if (todo.completed) {\n        elem.checked = true;\n      }\n      list.appendChild(elem);\n      elem = document.createElement('span');\n      elem.className = 'todo-title';\n      elem.innerText = `${todo.description}`;\n      if (todo.completed) {\n        elem.style.textDecoration = 'line-through';\n      }\n      list.appendChild(elem);\n      elem = document.createElement('button');\n      elem.className = 'more-btn';\n      const el = document.createElement('img');\n      el.id = `${todo.index}`;\n      el.src = `${_images_more_vert_svg__WEBPACK_IMPORTED_MODULE_0__}`;\n      el.alt = 'more-vertical-icon';\n      el.onclick = this.clickedBtn;\n      elem.appendChild(el);\n      list.appendChild(elem);\n      this.todoList.appendChild(list);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo-list-app/./src/module/display.js?");

/***/ }),

/***/ "./src/module/remove.js":
/*!******************************!*\
  !*** ./src/module/remove.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask = (idToDelete) => {\n  let todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)();\n  todos = todos.filter((todo) => {\n    if (JSON.stringify(todo.index) === idToDelete) {\n      return false;\n    }\n\n    return true;\n  });\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortList)(todos);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.savedTodos)(todos);\n});\n\n\n//# sourceURL=webpack://todo-list-app/./src/module/remove.js?");

/***/ }),

/***/ "./src/module/storage.js":
/*!*******************************!*\
  !*** ./src/module/storage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos),\n/* harmony export */   \"savedTodos\": () => (/* binding */ savedTodos),\n/* harmony export */   \"sortList\": () => (/* binding */ sortList)\n/* harmony export */ });\nconst savedTodos = (todos) => {\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst getTodos = () => {\n  let todos;\n  if (localStorage.getItem('todos')) {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  } else {\n    todos = [];\n  }\n  return todos;\n};\n\nconst sortTodo = (todos) => {\n  todos.sort((a, b) => a.index - b.index);\n};\n\nconst sortList = (todos) => {\n  sortTodo(todos);\n  for (let i = 0; i < todos.length; i += 1) {\n    todos[i].index = i + 1;\n  }\n};\n\n\n//# sourceURL=webpack://todo-list-app/./src/module/storage.js?");

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8b39a336d92d4c5c69f.svg\";\n\n//# sourceURL=webpack://todo-list-app/./src/images/add.svg?");

/***/ }),

/***/ "./src/images/autorenew.svg":
/*!**********************************!*\
  !*** ./src/images/autorenew.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9d145b6bcb1bb3a3986.svg\";\n\n//# sourceURL=webpack://todo-list-app/./src/images/autorenew.svg?");

/***/ }),

/***/ "./src/images/more-vert.svg":
/*!**********************************!*\
  !*** ./src/images/more-vert.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26b9018385c98f0f4edb.svg\";\n\n//# sourceURL=webpack://todo-list-app/./src/images/more-vert.svg?");

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