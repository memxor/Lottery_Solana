"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/program.js":
/*!**************************!*\
  !*** ./utils/program.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLotteryAddress\": function() { return /* binding */ getLotteryAddress; },\n/* harmony export */   \"getMasterAddress\": function() { return /* binding */ getMasterAddress; },\n/* harmony export */   \"getProgram\": function() { return /* binding */ getProgram; },\n/* harmony export */   \"getTicketAddress\": function() { return /* binding */ getTicketAddress; },\n/* harmony export */   \"getTotalPrize\": function() { return /* binding */ getTotalPrize; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @project-serum/anchor */ \"./node_modules/@project-serum/anchor/dist/browser/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _idl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idl */ \"./utils/idl.json\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./utils/constants.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n\n\n\n\n// How to fetch our Program\nvar getProgram = function(connection, wallet) {\n    var provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.AnchorProvider(connection, wallet, {\n        commitment: \"confirmed\"\n    });\n    var program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__.Program(_idl__WEBPACK_IMPORTED_MODULE_3__, _constants__WEBPACK_IMPORTED_MODULE_4__.PROGRAM_ID, provider);\n    return program;\n};\nvar getMasterAddress = function() {\n    return _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n        Buffer.from(_constants__WEBPACK_IMPORTED_MODULE_4__.MASTER_SEED)\n    ], _constants__WEBPACK_IMPORTED_MODULE_4__.PROGRAM_ID)[0];\n};\nvar getLotteryAddress = function(id) {\n    return _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n        Buffer.from(_constants__WEBPACK_IMPORTED_MODULE_4__.LOTTERY_SEED),\n        Buffer.from(\"\".concat(id))\n    ], _constants__WEBPACK_IMPORTED_MODULE_4__.PROGRAM_ID)[0];\n};\nvar getTicketAddress = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(lotteryPk, id) {\n        return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n                        Buffer.from(_constants__WEBPACK_IMPORTED_MODULE_4__.TICKET_SEED),\n                        lotteryPk.toBuffer(),\n                        Buffer.from(\"\".concat(id))\n                    ], _constants__WEBPACK_IMPORTED_MODULE_4__.PROGRAM_ID)[0]);\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getTicketAddress(lotteryPk, id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getTotalPrize = function(lottery) {\n    return (lottery.lastTicketId * lottery.ticketPrice / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL).toString();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9wcm9ncmFtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0U7QUFDTjtBQUV0QztBQU1IO0FBRXJCLDJCQUEyQjtBQUNwQixJQUFNVSxVQUFVLEdBQUcsU0FBQ0MsVUFBVSxFQUFFQyxNQUFNLEVBQzdDO0lBQ0UsSUFBTUMsUUFBUSxHQUFHLElBQUliLGlFQUFjLENBQUNXLFVBQVUsRUFBRUMsTUFBTSxFQUFFO1FBQ3RERSxVQUFVLEVBQUUsV0FBVztLQUN4QixDQUFDO0lBQ0YsSUFBTUMsT0FBTyxHQUFHLElBQUliLDBEQUFPLENBQUNHLGlDQUFHLEVBQUVHLGtEQUFVLEVBQUVLLFFBQVEsQ0FBQztJQUN0RCxPQUFPRSxPQUFPLENBQUM7Q0FDaEIsQ0FBQztBQUVLLElBQU1DLGdCQUFnQixHQUFHLFdBQ2hDO0lBQ0UsT0FBTyw2RUFDMkIsQ0FBQztRQUFDRSxNQUFNLENBQUNDLElBQUksQ0FBQ1osbURBQVcsQ0FBQztLQUFDLEVBQUVDLGtEQUFVLENBQUMsQ0FDeEUsQ0FBQyxDQUFDLENBQUM7Q0FDTixDQUFDO0FBRUssSUFBTVksaUJBQWlCLEdBQUcsU0FBQ0MsRUFBRSxFQUNwQztJQUNFLE9BQU8sNkVBQzJCLENBQzlCO1FBQUNILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDYixvREFBWSxDQUFDO1FBQUVZLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUMsQ0FBSyxPQUFIRSxFQUFFLENBQUUsQ0FBQztLQUFDLEVBQUViLGtEQUFVLENBQUMsQ0FDaEUsQ0FBQyxDQUFDLENBQUM7Q0FDTixDQUFDO0FBRUssSUFBTWMsZ0JBQWdCO2VBQUcsK1JBQU9DLFNBQVMsRUFBRUYsRUFBRSxFQUNwRDs7OztpREFDUyw2RUFDMkIsQ0FBQzt3QkFBQ0gsTUFBTSxDQUFDQyxJQUFJLENBQUNWLG1EQUFXLENBQUM7d0JBQUVjLFNBQVMsQ0FBQ0MsUUFBUSxFQUFFO3dCQUFFTixNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFDLENBQUssT0FBSEUsRUFBRSxDQUFFLENBQUM7cUJBQUMsRUFBRWIsa0RBQVUsQ0FBQyxDQUNwSCxDQUFDLENBQUM7Ozs7OztLQUNMO29CQUxZYyxnQkFBZ0IsQ0FBVUMsU0FBUyxFQUFFRixFQUFFOzs7R0FLbkQsQ0FBQztBQUVLLElBQU1JLGFBQWEsR0FBRyxTQUFDQyxPQUFPLEVBQUs7SUFDeEMsT0FBTyxDQUFDLE9BQVEsQ0FBQ0MsWUFBWSxHQUFHRCxPQUFPLENBQUNFLFdBQVcsR0FBSXhCLDZEQUFnQixDQUFDLENBQUN5QixRQUFRLEVBQUUsQ0FBQztDQUNyRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3Byb2dyYW0uanM/OWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3JQcm92aWRlciwgQk4sIFByb2dyYW0gfSBmcm9tIFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCI7XG5pbXBvcnQgeyBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5cbmltcG9ydCBJREwgZnJvbSBcIi4vaWRsXCI7XG5pbXBvcnQge1xuICBMT1RURVJZX1NFRUQsXG4gIE1BU1RFUl9TRUVELFxuICBQUk9HUkFNX0lELFxuICBUSUNLRVRfU0VFRCxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8vIEhvdyB0byBmZXRjaCBvdXIgUHJvZ3JhbVxuZXhwb3J0IGNvbnN0IGdldFByb2dyYW0gPSAoY29ubmVjdGlvbiwgd2FsbGV0KSA9PiBcbntcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQW5jaG9yUHJvdmlkZXIoY29ubmVjdGlvbiwgd2FsbGV0LCB7XG4gICAgY29tbWl0bWVudDogXCJjb25maXJtZWRcIixcbiAgfSk7XG4gIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShJREwsIFBST0dSQU1fSUQsIHByb3ZpZGVyKTtcbiAgcmV0dXJuIHByb2dyYW07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWFzdGVyQWRkcmVzcyA9ICgpID0+IFxue1xuICByZXR1cm4gKFxuICAgIFB1YmxpY0tleS5maW5kUHJvZ3JhbUFkZHJlc3NTeW5jKFtCdWZmZXIuZnJvbShNQVNURVJfU0VFRCldLCBQUk9HUkFNX0lEKVxuICApWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExvdHRlcnlBZGRyZXNzID0gKGlkKSA9PiBcbntcbiAgcmV0dXJuIChcbiAgICBQdWJsaWNLZXkuZmluZFByb2dyYW1BZGRyZXNzU3luYyhcbiAgICAgIFtCdWZmZXIuZnJvbShMT1RURVJZX1NFRUQpLCBCdWZmZXIuZnJvbShgJHtpZH1gKV0sIFBST0dSQU1fSUQpXG4gIClbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGlja2V0QWRkcmVzcyA9IGFzeW5jIChsb3R0ZXJ5UGssIGlkKSA9PiBcbntcbiAgcmV0dXJuIChcbiAgICBQdWJsaWNLZXkuZmluZFByb2dyYW1BZGRyZXNzU3luYyhbQnVmZmVyLmZyb20oVElDS0VUX1NFRUQpLCBsb3R0ZXJ5UGsudG9CdWZmZXIoKSwgQnVmZmVyLmZyb20oYCR7aWR9YCldLCBQUk9HUkFNX0lEKVxuICApWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRvdGFsUHJpemUgPSAobG90dGVyeSkgPT4ge1xuICByZXR1cm4gKChsb3R0ZXJ5Lmxhc3RUaWNrZXRJZCAqIGxvdHRlcnkudGlja2V0UHJpY2UpIC8gTEFNUE9SVFNfUEVSX1NPTCkudG9TdHJpbmcoKTtcbn07XG4iXSwibmFtZXMiOlsiQW5jaG9yUHJvdmlkZXIiLCJCTiIsIlByb2dyYW0iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwiSURMIiwiTE9UVEVSWV9TRUVEIiwiTUFTVEVSX1NFRUQiLCJQUk9HUkFNX0lEIiwiVElDS0VUX1NFRUQiLCJnZXRQcm9ncmFtIiwiY29ubmVjdGlvbiIsIndhbGxldCIsInByb3ZpZGVyIiwiY29tbWl0bWVudCIsInByb2dyYW0iLCJnZXRNYXN0ZXJBZGRyZXNzIiwiZmluZFByb2dyYW1BZGRyZXNzU3luYyIsIkJ1ZmZlciIsImZyb20iLCJnZXRMb3R0ZXJ5QWRkcmVzcyIsImlkIiwiZ2V0VGlja2V0QWRkcmVzcyIsImxvdHRlcnlQayIsInRvQnVmZmVyIiwiZ2V0VG90YWxQcml6ZSIsImxvdHRlcnkiLCJsYXN0VGlja2V0SWQiLCJ0aWNrZXRQcmljZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/program.js\n"));

/***/ })

});