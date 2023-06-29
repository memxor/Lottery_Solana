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

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"AppProvider\": function() { return /* binding */ AppProvider; },\n/* harmony export */   \"useAppContext\": function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @project-serum/anchor */ \"./node_modules/@project-serum/anchor/dist/browser/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bs58 */ \"./node_modules/bs58/index.js\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_program__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/program */ \"./utils/program.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper */ \"./utils/helper.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AppProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), masterAddress = ref[0], setMasterAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), lotteryAddress = ref1[0], setLotteryAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), initialized = ref2[0], setInitialized = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), lotteryId = ref3[0], setLotteryId = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), lotteryPot = ref4[0], setLotteryPot = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), lottery = ref5[0], setLottery = ref5[1];\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useConnection)().connection;\n    var wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useAnchorWallet)();\n    var program = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (connection) return (0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getProgram)(connection, wallet !== null && wallet !== void 0 ? wallet : (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.mockWallet)());\n    }, [\n        connection,\n        wallet\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        updateState();\n    }, [\n        program\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!lottery) return;\n        getPot();\n    }, [\n        lottery\n    ]);\n    var updateState = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var master, lottery;\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (program) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        _ctx.prev = 2;\n                        if (!masterAddress) {\n                            setMasterAddress((0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getMasterAddress)());\n                        }\n                        _ctx.next = 6;\n                        return program.account.master.fetch(masterAddress);\n                    case 6:\n                        master = _ctx.sent;\n                        setLotteryId(master.lastLotteryId);\n                        setLotteryAddress((0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getLotteryAddress)(lotteryId));\n                        _ctx.next = 11;\n                        return program.account.lottery.fetch(lotteryAddress);\n                    case 11:\n                        lottery = _ctx.sent;\n                        setLottery(lottery);\n                        setInitialized(true);\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.log(_ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    16\n                ]\n            ]);\n        }));\n        return function updateState() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getPot = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLotteryPot((0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getTotalPrize)(lottery));\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPot() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var initMaster = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txHash;\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return program.methods.initMaster().rpc();\n                    case 3:\n                        txHash = _ctx.sent;\n                        _ctx.next = 6;\n                        return (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.confirmTx)(txHash, connection);\n                    case 6:\n                        updateState();\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Initialized Master!\");\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(_ctx.t0.message);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function initMaster() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createLottery = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txHash;\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        setLotteryAddress((0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getLotteryAddress)(lotteryId + 1));\n                        _ctx.next = 4;\n                        return program.methods.createLottery(new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__.BN(1).mul(new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_3__.BN(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.LAMPORTS_PER_SOL))).accounts({\n                            lotteryAccount: lotteryAddress\n                        }).rpc();\n                    case 4:\n                        txHash = _ctx.sent;\n                        _ctx.next = 7;\n                        return (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.confirmTx)(txHash, connection);\n                    case 7:\n                        updateState();\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Lottery Created!\");\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(_ctx.t0.message);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function createLottery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var buyTicket = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txHash;\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        setLotteryAddress((0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getLotteryAddress)(lotteryId + 1));\n                        _ctx.t0 = program.methods.buyTicket();\n                        _ctx.t1 = lotteryAddress;\n                        _ctx.next = 6;\n                        return (0,_utils_program__WEBPACK_IMPORTED_MODULE_5__.getTicketAddress)(lotteryAddress, lottery.lastTicketId + 1);\n                    case 6:\n                        _ctx.t2 = _ctx.sent;\n                        _ctx.t3 = {\n                            lotteryAccount: _ctx.t1,\n                            ticketAccount: _ctx.t2\n                        };\n                        _ctx.next = 10;\n                        return _ctx.t0.accounts.call(_ctx.t0, _ctx.t3).rpc();\n                    case 10:\n                        txHash = _ctx.sent;\n                        _ctx.next = 13;\n                        return (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.confirmTx)(txHash, connection);\n                    case 13:\n                        updateState();\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"You are in!\");\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t4 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t4.message);\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(_ctx.t4.message);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    17\n                ]\n            ]);\n        }));\n        return function buyTicket() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var pickWinner = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txHash;\n            return _home_home_Projects_Solana_Projects_Lottery_Solana_Frontend_Lottery_Nextjs_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return program.methods.pickWinner().accounts({\n                            lotteryAccount: lotteryAddress\n                        }).rpc();\n                    case 3:\n                        txHash = _ctx.sent;\n                        _ctx.next = 6;\n                        return (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.confirmTx)(txHash, connection);\n                    case 6:\n                        updateState();\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Winner as been choosen!\");\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.error(_ctx.t0.message);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function pickWinner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppContext.Provider, {\n        value: {\n            connected: (wallet === null || wallet === void 0 ? void 0 : wallet.publicKey) ? true : false,\n            isMasterInitialized: initialized,\n            lotteryId: lotteryId,\n            lotteryPot: lotteryPot,\n            isLotteryAuthority: wallet && lottery && wallet.publicKey.equals(lottery.authority),\n            initMaster: initMaster,\n            createLottery: createLottery,\n            buyTicket: buyTicket,\n            pickWinner: pickWinner\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/home/Projects/Solana_Projects/Lottery_Solana/Frontend_Lottery_Nextjs/app/context/context.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, _this);\n};\n_s(AppProvider, \"dMrU9g1jKFrFEoPN5NjoT26xSqQ=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useAnchorWallet\n    ];\n});\n_c = AppProvider;\nvar useAppContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppContext);\n};\n_s1(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUZXa0QsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2NvbnRleHQuanM/NzJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCTiB9IGZyb20gXCJAcHJvamVjdC1zZXJ1bS9hbmNob3JcIjtcbmltcG9ydCB7IFN5c3RlbVByb2dyYW0gfSBmcm9tIFwiQHByb2plY3Qtc2VydW0vYW5jaG9yXCI7XG5pbXBvcnQgeyB1c2VBbmNob3JXYWxsZXQsIHVzZUNvbm5lY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IGJzNTggZnJvbSBcImJzNThcIjtcbmltcG9ydCB7IGdldExvdHRlcnlBZGRyZXNzLCBnZXRNYXN0ZXJBZGRyZXNzLCBnZXRQcm9ncmFtLCBnZXRUaWNrZXRBZGRyZXNzLCBnZXRUb3RhbFByaXplIH0gZnJvbSBcIi4uL3V0aWxzL3Byb2dyYW1cIjtcbmltcG9ydCB7IExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBjb25maXJtVHgsIG1vY2tXYWxsZXQgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IFxue1xuICBjb25zdCBbbWFzdGVyQWRkcmVzcywgc2V0TWFzdGVyQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG90dGVyeUFkZHJlc3MsIHNldExvdHRlcnlBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpbml0aWFsaXplZCwgc2V0SW5pdGlhbGl6ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG90dGVyeUlkLCBzZXRMb3R0ZXJ5SWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvdHRlcnlQb3QsIHNldExvdHRlcnlQb3RdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb3R0ZXJ5LCBzZXRMb3R0ZXJ5XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZUFuY2hvcldhbGxldCgpO1xuICBjb25zdCBwcm9ncmFtID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYoY29ubmVjdGlvbikgcmV0dXJuIGdldFByb2dyYW0oY29ubmVjdGlvbiwgd2FsbGV0ID8/IG1vY2tXYWxsZXQoKSk7XG4gIH0sIFtjb25uZWN0aW9uLCB3YWxsZXRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH0sIFtwcm9ncmFtXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighbG90dGVyeSkgcmV0dXJuO1xuICAgIGdldFBvdCgpO1xuICB9LCBbbG90dGVyeV0pO1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXRlID0gYXN5bmMgKCkgPT4gXG4gIHtcbiAgICBpZighcHJvZ3JhbSkgcmV0dXJuO1xuXG4gICAgdHJ5XG4gICAge1xuICAgICAgaWYoIW1hc3RlckFkZHJlc3MpXG4gICAgICB7XG4gICAgICAgIHNldE1hc3RlckFkZHJlc3MoZ2V0TWFzdGVyQWRkcmVzcygpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hc3RlciA9IGF3YWl0IHByb2dyYW0uYWNjb3VudC5tYXN0ZXIuZmV0Y2gobWFzdGVyQWRkcmVzcyk7XG4gICAgICBzZXRMb3R0ZXJ5SWQobWFzdGVyLmxhc3RMb3R0ZXJ5SWQpO1xuICAgICAgc2V0TG90dGVyeUFkZHJlc3MoZ2V0TG90dGVyeUFkZHJlc3MobG90dGVyeUlkKSk7XG4gICAgICBjb25zdCBsb3R0ZXJ5ID0gYXdhaXQgcHJvZ3JhbS5hY2NvdW50LmxvdHRlcnkuZmV0Y2gobG90dGVyeUFkZHJlc3MpO1xuICAgICAgc2V0TG90dGVyeShsb3R0ZXJ5KTtcbiAgICAgIHNldEluaXRpYWxpemVkKHRydWUpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRQb3QgPSBhc3luYygpID0+IFxuICB7XG4gICAgc2V0TG90dGVyeVBvdChnZXRUb3RhbFByaXplKGxvdHRlcnkpKTtcbiAgfVxuXG4gIGNvbnN0IGluaXRNYXN0ZXIgPSBhc3luYyAoKSA9PiBcbiAge1xuICAgIHRyeVxuICAgIHtcbiAgICAgIGNvbnN0IHR4SGFzaCA9IGF3YWl0IHByb2dyYW0ubWV0aG9kcy5pbml0TWFzdGVyKCkucnBjKCk7XG4gICAgICBhd2FpdCBjb25maXJtVHgodHhIYXNoLCBjb25uZWN0aW9uKTtcbiAgICAgIHVwZGF0ZVN0YXRlKCk7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiSW5pdGlhbGl6ZWQgTWFzdGVyIVwiKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVMb3R0ZXJ5ID0gYXN5bmMgKCkgPT4gXG4gIHtcbiAgICB0cnlcbiAgICB7XG4gICAgICBzZXRMb3R0ZXJ5QWRkcmVzcyhnZXRMb3R0ZXJ5QWRkcmVzcyhsb3R0ZXJ5SWQgKyAxKSk7XG4gICAgICBjb25zdCB0eEhhc2ggPSBhd2FpdCBwcm9ncmFtLm1ldGhvZHMuY3JlYXRlTG90dGVyeShuZXcgQk4oMSkubXVsKG5ldyBCTihMQU1QT1JUU19QRVJfU09MKSkpLmFjY291bnRzKHtcbiAgICAgICAgbG90dGVyeUFjY291bnQ6IGxvdHRlcnlBZGRyZXNzXG4gICAgICB9KS5ycGMoKTtcbiAgICAgIGF3YWl0IGNvbmZpcm1UeCh0eEhhc2gsIGNvbm5lY3Rpb24pO1xuICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb3R0ZXJ5IENyZWF0ZWQhXCIpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1eVRpY2tldCA9IGFzeW5jICgpID0+IFxuICB7XG4gICAgdHJ5XG4gICAge1xuICAgICAgc2V0TG90dGVyeUFkZHJlc3MoZ2V0TG90dGVyeUFkZHJlc3MobG90dGVyeUlkICsgMSkpO1xuICAgICAgY29uc3QgdHhIYXNoID0gYXdhaXQgcHJvZ3JhbS5tZXRob2RzLmJ1eVRpY2tldCgpLmFjY291bnRzKHtcbiAgICAgICAgbG90dGVyeUFjY291bnQ6IGxvdHRlcnlBZGRyZXNzLFxuICAgICAgICB0aWNrZXRBY2NvdW50OiBhd2FpdCBnZXRUaWNrZXRBZGRyZXNzKGxvdHRlcnlBZGRyZXNzLCBsb3R0ZXJ5Lmxhc3RUaWNrZXRJZCArIDEpXG4gICAgICB9KS5ycGMoKTtcbiAgICAgIGF3YWl0IGNvbmZpcm1UeCh0eEhhc2gsIGNvbm5lY3Rpb24pO1xuICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJZb3UgYXJlIGluIVwiKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwaWNrV2lubmVyID0gYXN5bmMgKCkgPT4gXG4gIHtcbiAgICB0cnlcbiAgICB7XG4gICAgICBjb25zdCB0eEhhc2ggPSBhd2FpdCBwcm9ncmFtLm1ldGhvZHMucGlja1dpbm5lcigpLmFjY291bnRzKHtcbiAgICAgICAgbG90dGVyeUFjY291bnQ6IGxvdHRlcnlBZGRyZXNzXG4gICAgICB9KS5ycGMoKTtcbiAgICAgIGF3YWl0IGNvbmZpcm1UeCh0eEhhc2gsIGNvbm5lY3Rpb24pO1xuICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJXaW5uZXIgYXMgYmVlbiBjaG9vc2VuIVwiKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb25uZWN0ZWQ6IHdhbGxldD8ucHVibGljS2V5ID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBpc01hc3RlckluaXRpYWxpemVkOiBpbml0aWFsaXplZCxcbiAgICAgICAgbG90dGVyeUlkLFxuICAgICAgICBsb3R0ZXJ5UG90LFxuICAgICAgICBpc0xvdHRlcnlBdXRob3JpdHk6IHdhbGxldCAmJiBsb3R0ZXJ5ICYmIHdhbGxldC5wdWJsaWNLZXkuZXF1YWxzKGxvdHRlcnkuYXV0aG9yaXR5KSxcbiAgICAgICAgaW5pdE1hc3RlcixcbiAgICAgICAgY3JlYXRlTG90dGVyeSxcbiAgICAgICAgYnV5VGlja2V0LFxuICAgICAgICBwaWNrV2lubmVyXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQk4iLCJTeXN0ZW1Qcm9ncmFtIiwidXNlQW5jaG9yV2FsbGV0IiwidXNlQ29ubmVjdGlvbiIsImJzNTgiLCJnZXRMb3R0ZXJ5QWRkcmVzcyIsImdldE1hc3RlckFkZHJlc3MiLCJnZXRQcm9ncmFtIiwiZ2V0VGlja2V0QWRkcmVzcyIsImdldFRvdGFsUHJpemUiLCJMQU1QT1JUU19QRVJfU09MIiwiY29uZmlybVR4IiwibW9ja1dhbGxldCIsInRvYXN0IiwiQXBwQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtYXN0ZXJBZGRyZXNzIiwic2V0TWFzdGVyQWRkcmVzcyIsImxvdHRlcnlBZGRyZXNzIiwic2V0TG90dGVyeUFkZHJlc3MiLCJpbml0aWFsaXplZCIsInNldEluaXRpYWxpemVkIiwibG90dGVyeUlkIiwic2V0TG90dGVyeUlkIiwibG90dGVyeVBvdCIsInNldExvdHRlcnlQb3QiLCJsb3R0ZXJ5Iiwic2V0TG90dGVyeSIsImNvbm5lY3Rpb24iLCJ3YWxsZXQiLCJwcm9ncmFtIiwidXBkYXRlU3RhdGUiLCJnZXRQb3QiLCJtYXN0ZXIiLCJhY2NvdW50IiwiZmV0Y2giLCJsYXN0TG90dGVyeUlkIiwiY29uc29sZSIsImxvZyIsImluaXRNYXN0ZXIiLCJ0eEhhc2giLCJtZXRob2RzIiwicnBjIiwic3VjY2VzcyIsImVyciIsIm1lc3NhZ2UiLCJlcnJvciIsImNyZWF0ZUxvdHRlcnkiLCJtdWwiLCJhY2NvdW50cyIsImxvdHRlcnlBY2NvdW50IiwiYnV5VGlja2V0IiwibGFzdFRpY2tldElkIiwidGlja2V0QWNjb3VudCIsInBpY2tXaW5uZXIiLCJQcm92aWRlciIsInZhbHVlIiwiY29ubmVjdGVkIiwicHVibGljS2V5IiwiaXNNYXN0ZXJJbml0aWFsaXplZCIsImlzTG90dGVyeUF1dGhvcml0eSIsImVxdWFscyIsImF1dGhvcml0eSIsInVzZUFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/context.js\n"));

/***/ })

});