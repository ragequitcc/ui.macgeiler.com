"use strict";
(() => {
var exports = {};
exports.id = "pages/api/config";
exports.ids = ["pages/api/config"];
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

/***/ "./pages/api/config.ts":
/*!*****************************!*\
  !*** ./pages/api/config.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");
 // DELETE /api/post/:id

async function handle(req, res) {
  if (req.method === "GET") {
    const config = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.findFirst();
    return res.json(config);
  }

  if (req.method === "POST") {
    const {
      labelPath,
      streamlabsApiKey
    } = req.body;

    if (!labelPath || !streamlabsApiKey) {
      return res.json({
        error: "Missing Data"
      });
    } else {
      const config = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.upsert({
        where: {
          id: 1
        },
        update: {
          labelPath: labelPath.toString(),
          streamlabsApiKey: streamlabsApiKey.toString()
        },
        create: {
          labelPath: labelPath.toString(),
          streamlabsApiKey: streamlabsApiKey.toString()
        }
      });
      return res.json(config);
    }
  }
}

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/config.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7OztDQ2ZBOztBQUNlLGVBQWVFLE1BQWYsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7QUFDQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixVQUFNQyxNQUFNLEdBQUcsTUFBTU4saUVBQUEsRUFBckI7QUFDQSxXQUFPSSxHQUFHLENBQUNJLElBQUosQ0FBU0YsTUFBVCxDQUFQO0FBQ0Q7O0FBRUQsTUFBSUgsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTTtBQUFFSSxNQUFBQSxTQUFGO0FBQWFDLE1BQUFBO0FBQWIsUUFBa0NQLEdBQUcsQ0FBQ1EsSUFBNUM7O0FBRUEsUUFBSSxDQUFDRixTQUFELElBQWMsQ0FBQ0MsZ0JBQW5CLEVBQXFDO0FBQ25DLGFBQU9OLEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQ2RJLFFBQUFBLEtBQUssRUFBRTtBQURPLE9BQVQsQ0FBUDtBQUdELEtBSkQsTUFJTztBQUNMLFlBQU1OLE1BQU0sR0FBRyxNQUFNTiw4REFBQSxDQUFxQjtBQUN4Q2MsUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLEVBQUUsRUFBRTtBQURDLFNBRGlDO0FBSXhDQyxRQUFBQSxNQUFNLEVBQUU7QUFDTlAsVUFBQUEsU0FBUyxFQUFFQSxTQUFTLENBQUNRLFFBQVYsRUFETDtBQUVOUCxVQUFBQSxnQkFBZ0IsRUFBRUEsZ0JBQWdCLENBQUNPLFFBQWpCO0FBRlosU0FKZ0M7QUFReENDLFFBQUFBLE1BQU0sRUFBRTtBQUNOVCxVQUFBQSxTQUFTLEVBQUVBLFNBQVMsQ0FBQ1EsUUFBVixFQURMO0FBRU5QLFVBQUFBLGdCQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQ08sUUFBakI7QUFGWjtBQVJnQyxPQUFyQixDQUFyQjtBQWNBLGFBQU9iLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRixNQUFULENBQVA7QUFDRDtBQUNGO0FBQ0Y7Ozs7Ozs7Ozs7QUN0Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL2FwaS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIiwiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcblxuLy8gREVMRVRFIC9hcGkvcG9zdC86aWRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHByaXNtYS5jb25maWcuZmluZEZpcnN0KCk7XG4gICAgcmV0dXJuIHJlcy5qc29uKGNvbmZpZyk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGxhYmVsUGF0aCwgc3RyZWFtbGFic0FwaUtleSB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIWxhYmVsUGF0aCB8fCAhc3RyZWFtbGFic0FwaUtleSkge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgZXJyb3I6IFwiTWlzc2luZyBEYXRhXCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgcHJpc21hLmNvbmZpZy51cHNlcnQoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICBsYWJlbFBhdGg6IGxhYmVsUGF0aC50b1N0cmluZygpLFxuICAgICAgICAgIHN0cmVhbWxhYnNBcGlLZXk6IHN0cmVhbWxhYnNBcGlLZXkudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgbGFiZWxQYXRoOiBsYWJlbFBhdGgudG9TdHJpbmcoKSxcbiAgICAgICAgICBzdHJlYW1sYWJzQXBpS2V5OiBzdHJlYW1sYWJzQXBpS2V5LnRvU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uZmlnIiwiZmluZEZpcnN0IiwianNvbiIsImxhYmVsUGF0aCIsInN0cmVhbWxhYnNBcGlLZXkiLCJib2R5IiwiZXJyb3IiLCJ1cHNlcnQiLCJ3aGVyZSIsImlkIiwidXBkYXRlIiwidG9TdHJpbmciLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9