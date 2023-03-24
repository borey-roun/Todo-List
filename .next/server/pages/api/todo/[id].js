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
exports.id = "pages/api/todo/[id]";
exports.ids = ["pages/api/todo/[id]"];
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

/***/ "(api)/./firebase/initFirebase.js":
/*!**********************************!*\
  !*** ./firebase/initFirebase.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/database */ \"firebase/compat/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app() : firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n  apiKey: \"AIzaSyAjRgwPwj89_VagzuFjfxR8OlZx0W4MvNA\",\n  authDomain: \"todo-list-14520.firebaseapp.com\",\n  databaseURL: \"https://todo-list-14520-default-rtdb.firebaseio.com\",\n  projectId: \"todo-list-14520\",\n  storageBucket: \"todo-list-14520.appspot.com\",\n  messagingSenderId: \"323527312328\",\n  appId: \"1:323527312328:web:4e82b24f51936d233436fd\",\n  measurementId: \"G-7WWQMLB2V5\"\n});\nconst database = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].database(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9maXJlYmFzZS9pbml0RmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1DLEdBQUcsR0FBR0QsdUVBQUEsR0FDUkEsK0RBQUEsRUFEUSxHQUVSQSx5RUFBQSxDQUF1QjtFQUN2QkssTUFBTSxFQUFFQyx5Q0FEZTtFQUV2QkcsVUFBVSxFQUFFSCxpQ0FGVztFQUd2QkssV0FBVyxFQUFFTCxxREFIVTtFQUl2Qk8sU0FBUyxFQUFFUCxpQkFKWTtFQUt2QlMsYUFBYSxFQUFFVCw2QkFMUTtFQU12QlcsaUJBQWlCLEVBQUVYLGNBTkk7RUFPdkJhLEtBQUssRUFBRWIsMkNBUGdCO0VBUXZCZSxhQUFhLEVBQUVmLGNBQStDZ0I7QUFSdkMsQ0FBdkIsQ0FGSjtBQWFHLE1BQU1DLFFBQVEsR0FBR3ZCLG9FQUFBLENBQWtCQyxHQUFsQixDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vZmlyZWJhc2UvaW5pdEZpcmViYXNlLmpzPzEzZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZGF0YWJhc2UnO1xuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwcy5sZW5ndGhcbiAgPyBmaXJlYmFzZS5hcHAoKVxuICA6IGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0VfVVJMLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxuICB9KTtcblxuICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZShhcHApO1xuXG4gICBleHBvcnQge2RhdGFiYXNlfTsiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwiZGF0YWJhc2VVUkwiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./firebase/initFirebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/todo/[id].js":
/*!********************************!*\
  !*** ./pages/api/todo/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../firebase/initFirebase */ \"(api)/./firebase/initFirebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__]);\n_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst todosRef = _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_0__.database.ref('todos');\nasync function handler(req, res) {\n  const {\n    id\n  } = req.query;\n\n  if (req.method === 'PUT') {\n    const {\n      text,\n      completed,\n      createdAt\n    } = req.body;\n    const updatedTodo = {\n      id: id,\n      text: text,\n      completed: completed,\n      createdAt: createdAt\n    };\n    await todosRef.child(id).update(updatedTodo);\n    res.status(200).json({\n      success: true\n    });\n  } else if (req.method === 'DELETE') {\n    await todosRef.child(id).remove();\n    res.status(200).json({\n      success: true\n    });\n  } else {\n    res.status(405).json({\n      error: 'Method not allowed'\n    });\n  }\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxRQUFRLEdBQUdELGdFQUFBLENBQWEsT0FBYixDQUFqQjtBQUVlLGVBQWVHLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztFQUM5QyxNQUFNO0lBQUVDO0VBQUYsSUFBU0YsR0FBRyxDQUFDRyxLQUFuQjs7RUFFQSxJQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxLQUFuQixFQUEwQjtJQUN4QixNQUFNO01BQUVDLElBQUY7TUFBUUMsU0FBUjtNQUFtQkM7SUFBbkIsSUFBaUNQLEdBQUcsQ0FBQ1EsSUFBM0M7SUFDQSxNQUFNQyxXQUFXLEdBQUc7TUFDbEJQLEVBQUUsRUFBRUEsRUFEYztNQUVsQkcsSUFBSSxFQUFFQSxJQUZZO01BR2xCQyxTQUFTLEVBQUdBLFNBSE07TUFJbEJDLFNBQVMsRUFBRUE7SUFKTyxDQUFwQjtJQU1BLE1BQU1WLFFBQVEsQ0FBQ2EsS0FBVCxDQUFlUixFQUFmLEVBQW1CUyxNQUFuQixDQUEwQkYsV0FBMUIsQ0FBTjtJQUNBUixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUU7SUFBWCxDQUFyQjtFQUNELENBVkQsTUFVTyxJQUFJZCxHQUFHLENBQUNJLE1BQUosS0FBZSxRQUFuQixFQUE2QjtJQUNsQyxNQUFNUCxRQUFRLENBQUNhLEtBQVQsQ0FBZVIsRUFBZixFQUFtQmEsTUFBbkIsRUFBTjtJQUNBZCxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUU7SUFBWCxDQUFyQjtFQUNELENBSE0sTUFHQTtJQUNMYixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFRyxLQUFLLEVBQUU7SUFBVCxDQUFyQjtFQUNEO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL3RvZG8vW2lkXS5qcz84MzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvaW5pdEZpcmViYXNlJztcblxuY29uc3QgdG9kb3NSZWYgPSBkYXRhYmFzZS5yZWYoJ3RvZG9zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnUFVUJykge1xuICAgIGNvbnN0IHsgdGV4dCwgY29tcGxldGVkLCBjcmVhdGVkQXQgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGNvbXBsZXRlZCA6IGNvbXBsZXRlZCxcbiAgICAgIGNyZWF0ZWRBdDogY3JlYXRlZEF0LFxuICAgIH07XG4gICAgYXdhaXQgdG9kb3NSZWYuY2hpbGQoaWQpLnVwZGF0ZSh1cGRhdGVkVG9kbyk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgYXdhaXQgdG9kb3NSZWYuY2hpbGQoaWQpLnJlbW92ZSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwidG9kb3NSZWYiLCJyZWYiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm1ldGhvZCIsInRleHQiLCJjb21wbGV0ZWQiLCJjcmVhdGVkQXQiLCJib2R5IiwidXBkYXRlZFRvZG8iLCJjaGlsZCIsInVwZGF0ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwicmVtb3ZlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todo/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todo/[id].js"));
module.exports = __webpack_exports__;

})();