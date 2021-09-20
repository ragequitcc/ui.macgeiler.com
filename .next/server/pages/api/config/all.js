"use strict";
(() => {
var exports = {};
exports.id = "pages/api/config/all";
exports.ids = ["pages/api/config/all"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
 // PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

let prisma;

if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/config/all.ts":
/*!*********************************!*\
  !*** ./pages/api/config/all.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");


const Config = async (req, res) => {
  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.findMany();

  if (result === null) {
    return res.status(400).json({
      error: 'No Config Found'
    });
  }

  return res.json(result);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/config/all.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbmZpZy9hbGwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUNELGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLE1BQU0sR0FBRyxNQUFNTCxnRUFBQSxFQUFyQjs7QUFFQSxNQUFJSyxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixXQUFPRCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkMsTUFBQUEsS0FBSyxFQUFFO0FBRG1CLEtBQXJCLENBQVA7QUFHRDs7QUFFRCxTQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU0osTUFBVCxDQUFQO0FBQ0QsQ0FWRDs7QUFZQSxpRUFBZUgsTUFBZjs7Ozs7Ozs7OztBQ2ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtLy4vbGliL3ByaXNtYS50cyIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9wYWdlcy9hcGkvY29uZmlnL2FsbC50cyIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbi8vXG4vLyBMZWFybiBtb3JlOlxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iLCJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbmNvbnN0IENvbmZpZyA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuY29uZmlnLmZpbmRNYW55KCk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjogJ05vIENvbmZpZyBGb3VuZCcsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24ocmVzdWx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJDb25maWciLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJjb25maWciLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=