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
exports.id = "pages/api/todo";
exports.ids = ["pages/api/todo"];
exports.modules = {

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/database":
/*!*******************************************!*\
  !*** external "firebase/compat/database" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/database");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./firebase/initFirebase.js":
/*!**********************************!*\
  !*** ./firebase/initFirebase.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/database */ \"firebase/compat/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app() : firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n  apiKey: \"AIzaSyAjRgwPwj89_VagzuFjfxR8OlZx0W4MvNA\",\n  authDomain: \"todo-list-14520.firebaseapp.com\",\n  databaseURL: \"https://todo-list-14520-default-rtdb.firebaseio.com\",\n  projectId: \"todo-list-14520\",\n  storageBucket: \"todo-list-14520.appspot.com\",\n  messagingSenderId: \"323527312328\",\n  appId: \"1:323527312328:web:4e82b24f51936d233436fd\",\n  measurementId: \"G-7WWQMLB2V5\"\n});\nconst database = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].database(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9maXJlYmFzZS9pbml0RmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1DLEdBQUcsR0FBR0QsdUVBQUEsR0FDUkEsK0RBQUEsRUFEUSxHQUVSQSx5RUFBQSxDQUF1QjtFQUN2QkssTUFBTSxFQUFFQyx5Q0FEZTtFQUV2QkcsVUFBVSxFQUFFSCxpQ0FGVztFQUd2QkssV0FBVyxFQUFFTCxxREFIVTtFQUl2Qk8sU0FBUyxFQUFFUCxpQkFKWTtFQUt2QlMsYUFBYSxFQUFFVCw2QkFMUTtFQU12QlcsaUJBQWlCLEVBQUVYLGNBTkk7RUFPdkJhLEtBQUssRUFBRWIsMkNBUGdCO0VBUXZCZSxhQUFhLEVBQUVmLGNBQStDZ0I7QUFSdkMsQ0FBdkIsQ0FGSjtBQWFHLE1BQU1DLFFBQVEsR0FBR3ZCLG9FQUFBLENBQWtCQyxHQUFsQixDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vZmlyZWJhc2UvaW5pdEZpcmViYXNlLmpzPzEzZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZGF0YWJhc2UnO1xuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwcy5sZW5ndGhcbiAgPyBmaXJlYmFzZS5hcHAoKVxuICA6IGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0VfVVJMLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxuICB9KTtcblxuICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZShhcHApO1xuXG4gICBleHBvcnQge2RhdGFiYXNlfTsiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwiZGF0YWJhc2VVUkwiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./firebase/initFirebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/todo.js":
/*!***************************!*\
  !*** ./pages/api/todo.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/initFirebase */ \"(api)/./firebase/initFirebase.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__]);\n([_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst todosRef = _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__.database.ref('todos');\nasync function handler(req, res) {\n  const {\n    text,\n    completed,\n    createdAt\n  } = req.body;\n  const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n  const newTodosRef = todosRef.child(uuid);\n  const newTodo = {\n    id: uuid,\n    text: text,\n    completed: completed,\n    createdAt: createdAt\n  };\n  await newTodosRef.set(newTodo);\n  res.status(200).json({\n    success: true\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUcsUUFBUSxHQUFHSCxnRUFBQSxDQUFhLE9BQWIsQ0FBakI7QUFDZSxlQUFlSyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDOUMsTUFBTTtJQUFFQyxJQUFGO0lBQVFDLFNBQVI7SUFBbUJDO0VBQW5CLElBQWlDSixHQUFHLENBQUNLLElBQTNDO0VBQ0EsTUFBTUMsSUFBSSxHQUFHVix3Q0FBTSxFQUFuQjtFQUNBLE1BQU1XLFdBQVcsR0FBR1YsUUFBUSxDQUFDVyxLQUFULENBQWVGLElBQWYsQ0FBcEI7RUFDQSxNQUFNRyxPQUFPLEdBQUc7SUFDZEMsRUFBRSxFQUFFSixJQURVO0lBRWRKLElBQUksRUFBRUEsSUFGUTtJQUdkQyxTQUFTLEVBQUdBLFNBSEU7SUFJZEMsU0FBUyxFQUFFQTtFQUpHLENBQWhCO0VBTUEsTUFBTUcsV0FBVyxDQUFDSSxHQUFaLENBQWdCRixPQUFoQixDQUFOO0VBQ0FSLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0lBQUVDLE9BQU8sRUFBRTtFQUFYLENBQXJCO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL3RvZG8uanM/NmI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2luaXRGaXJlYmFzZSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuY29uc3QgdG9kb3NSZWYgPSBkYXRhYmFzZS5yZWYoJ3RvZG9zJyk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdGV4dCwgY29tcGxldGVkLCBjcmVhdGVkQXQgfSA9IHJlcS5ib2R5O1xuICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG4gIGNvbnN0IG5ld1RvZG9zUmVmID0gdG9kb3NSZWYuY2hpbGQodXVpZCk7XG4gIGNvbnN0IG5ld1RvZG8gPSB7XG4gICAgaWQ6IHV1aWQsXG4gICAgdGV4dDogdGV4dCxcbiAgICBjb21wbGV0ZWQgOiBjb21wbGV0ZWQsXG4gICAgY3JlYXRlZEF0OiBjcmVhdGVkQXQsXG4gIH07XG4gIGF3YWl0IG5ld1RvZG9zUmVmLnNldChuZXdUb2RvKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xufSJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInY0IiwidXVpZHY0IiwidG9kb3NSZWYiLCJyZWYiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGV4dCIsImNvbXBsZXRlZCIsImNyZWF0ZWRBdCIsImJvZHkiLCJ1dWlkIiwibmV3VG9kb3NSZWYiLCJjaGlsZCIsIm5ld1RvZG8iLCJpZCIsInNldCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todo.js"));
module.exports = __webpack_exports__;

})();