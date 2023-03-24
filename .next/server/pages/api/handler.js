"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/handler";
exports.ids = ["pages/api/handler"];
exports.modules = {

/***/ "firebase-admin/app":
/*!*************************************!*\
  !*** external "firebase-admin/app" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase-admin/app");;

/***/ }),

/***/ "firebase-admin/database":
/*!******************************************!*\
  !*** external "firebase-admin/database" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("firebase-admin/database");;

/***/ }),

/***/ "(api)/./lib/firebaseServer.js":
/*!*******************************!*\
  !*** ./lib/firebaseServer.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin/app */ \"firebase-admin/app\");\n/* harmony import */ var firebase_admin_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin/database */ \"firebase-admin/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__, firebase_admin_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__, firebase_admin_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\\\n/g, '\\n');\nconst config = {\n  projectId: \"todo-list-14520\",\n  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,\n  privateKey\n}; // Initialize Firebase Admin app only once\n\nconst app = (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({\n  credential: admin.credential.cert(config),\n  databaseURL: \"https://todo-list-14520-default-rtdb.firebaseio.com\"\n});\nconst database = (0,firebase_admin_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZmlyZWJhc2VTZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLFVBQVUsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUFaLENBQWlDQyxPQUFqQyxDQUF5QyxNQUF6QyxFQUFpRCxJQUFqRCxDQUFuQjtBQUVBLE1BQU1DLE1BQU0sR0FBRztFQUNiQyxTQUFTLEVBQUVMLGlCQURFO0VBRWJPLFdBQVcsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLHFCQUZaO0VBR2JUO0FBSGEsQ0FBZixFQU1BOztBQUNBLE1BQU1VLEdBQUcsR0FBR1osaUVBQWEsQ0FBQztFQUN4QmEsVUFBVSxFQUFFQyxLQUFLLENBQUNELFVBQU4sQ0FBaUJFLElBQWpCLENBQXNCUixNQUF0QixDQURZO0VBRXhCUyxXQUFXLEVBQUViLHFEQUE2Q2M7QUFGbEMsQ0FBRCxDQUF6QjtBQUtPLE1BQU1DLFFBQVEsR0FBR2pCLG9FQUFXLENBQUNXLEdBQUQsQ0FBNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vbGliL2ZpcmViYXNlU2VydmVyLmpzP2Y0YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlLWFkbWluL2FwcCc7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gJ2ZpcmViYXNlLWFkbWluL2RhdGFiYXNlJztcblxuY29uc3QgcHJpdmF0ZUtleSA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcblxuY29uc3QgY29uZmlnID0ge1xuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gIHByaXZhdGVLZXksXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIEFkbWluIGFwcCBvbmx5IG9uY2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoY29uZmlnKSxcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJwcml2YXRlS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1BSSVZBVEVfS0VZIiwicmVwbGFjZSIsImNvbmZpZyIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJjbGllbnRFbWFpbCIsIkZJUkVCQVNFX0NMSUVOVF9FTUFJTCIsImFwcCIsImNyZWRlbnRpYWwiLCJhZG1pbiIsImNlcnQiLCJkYXRhYmFzZVVSTCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFX1VSTCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/firebaseServer.js\n");

/***/ }),

/***/ "(api)/./pages/api/handler.js":
/*!******************************!*\
  !*** ./pages/api/handler.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_firebaseServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/firebaseServer */ \"(api)/./lib/firebaseServer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebaseServer__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_firebaseServer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n  const {\n    data\n  } = req.body;\n  const ref = _lib_firebaseServer__WEBPACK_IMPORTED_MODULE_0__.database.ref('counts/');\n  ref.set(data, error => {\n    if (error) {\n      res.status(500).json({\n        error: error.message\n      });\n    } else {\n      res.status(200).json({\n        message: 'Data saved successfully.'\n      });\n    }\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0VBQ3hDLE1BQU07SUFBRUM7RUFBRixJQUFXRixHQUFHLENBQUNHLElBQXJCO0VBRUEsTUFBTUMsR0FBRyxHQUFHTiw2REFBQSxDQUFhLFNBQWIsQ0FBWjtFQUNBTSxHQUFHLENBQUNDLEdBQUosQ0FBUUgsSUFBUixFQUFlSSxLQUFELElBQVc7SUFDdkIsSUFBSUEsS0FBSixFQUFXO01BRVRMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1FBQUVGLEtBQUssRUFBRUEsS0FBSyxDQUFDRztNQUFmLENBQXJCO0lBQ0QsQ0FIRCxNQUdPO01BQ0xSLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1FBQUVDLE9BQU8sRUFBRTtNQUFYLENBQXJCO0lBQ0Q7RUFDRixDQVBEO0FBUUQsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL2hhbmRsZXIuanM/N2VlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uLy4uL2xpYi9maXJlYmFzZVNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSByZXEuYm9keTtcblxuICBjb25zdCByZWYgPSBkYXRhYmFzZS5yZWYoJ2NvdW50cy8nKTtcbiAgcmVmLnNldChkYXRhLCAoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcblxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHkuJyB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5IiwicmVmIiwic2V0IiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/handler.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/handler.js"));
module.exports = __webpack_exports__;

})();