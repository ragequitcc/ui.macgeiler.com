"use strict";
(() => {
var exports = {};
exports.id = "pages/api/labels";
exports.ids = ["pages/api/labels"];
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

/***/ "./pages/api/labels.ts":
/*!*****************************!*\
  !*** ./pages/api/labels.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


async function handle(req, res) {
  if (!req.query.label) {
    return res.json({
      error: "No Label In Query Found"
    });
  }

  const config = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.findFirst();
  const labelPath = config === null || config === void 0 ? void 0 : config.labelPath;

  if (!labelPath) {
    process.exit();
  }

  const allFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(labelPath, "utf-8");

  const labelFilter = value => {
    if (value.startsWith("monthly") || value.startsWith("all")) return value;
  };

  const file = allFiles.filter(labelFilter).filter(label => label.slice(0, label.length - 4) === req.query.label); // check if file even exists

  if (file.length === 0) {
    return res.json({
      error: `Label Not Found.`
    });
  } else {
    // read file content
    const content = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`${labelPath}/${file[0]}`, "utf-8"); // decide if content has ",", if yes: it's a leaderboard.

    if (content.includes(",")) {
      return res.status(200).json(content.split(","));
    } else {
      res.status(200).json({
        data: content
      });
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

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/labels.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2xhYmVscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFFZSxlQUFlRyxNQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsTUFBSSxDQUFDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsS0FBZixFQUFzQjtBQUNwQixXQUFPRixHQUFHLENBQUNHLElBQUosQ0FBUztBQUNkQyxNQUFBQSxLQUFLLEVBQUU7QUFETyxLQUFULENBQVA7QUFHRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUcsTUFBTVYsaUVBQUEsRUFBckI7QUFFQSxRQUFNWSxTQUFTLEdBQUdGLE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFRSxTQUExQjs7QUFFQSxNQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZEMsSUFBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0Q7O0FBRUQsUUFBTUMsUUFBUSxHQUFHYixxREFBQSxDQUFlVSxTQUFmLEVBQTBCLE9BQTFCLENBQWpCOztBQUVBLFFBQU1LLFdBQVcsR0FBSUMsS0FBRCxJQUFtQjtBQUNyQyxRQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsU0FBakIsS0FBK0JELEtBQUssQ0FBQ0MsVUFBTixDQUFpQixLQUFqQixDQUFuQyxFQUE0RCxPQUFPRCxLQUFQO0FBQzdELEdBRkQ7O0FBSUEsUUFBTUUsSUFBSSxHQUFHTCxRQUFRLENBQ2xCTSxNQURVLENBQ0hKLFdBREcsRUFFVkksTUFGVSxDQUVGZCxLQUFELElBQVdBLEtBQUssQ0FBQ2UsS0FBTixDQUFZLENBQVosRUFBZWYsS0FBSyxDQUFDZ0IsTUFBTixHQUFlLENBQTlCLE1BQXFDbkIsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEtBRnZELENBQWIsQ0FyQkEsQ0F5QkE7O0FBQ0EsTUFBSWEsSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFdBQU9sQixHQUFHLENBQUNHLElBQUosQ0FBUztBQUNkQyxNQUFBQSxLQUFLLEVBQUc7QUFETSxLQUFULENBQVA7QUFHRCxHQUpELE1BSU87QUFDTDtBQUNBLFVBQU1lLE9BQU8sR0FBR3RCLHNEQUFBLENBQWlCLEdBQUVVLFNBQVUsSUFBR1EsSUFBSSxDQUFDLENBQUQsQ0FBSSxFQUF4QyxFQUEyQyxPQUEzQyxDQUFoQixDQUZLLENBSUw7O0FBQ0EsUUFBSUksT0FBTyxDQUFDRSxRQUFSLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDekIsYUFBT3JCLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCbkIsSUFBaEIsQ0FBcUJnQixPQUFPLENBQUNJLEtBQVIsQ0FBYyxHQUFkLENBQXJCLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTHZCLE1BQUFBLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCbkIsSUFBaEIsQ0FBcUI7QUFDbkJxQixRQUFBQSxJQUFJLEVBQUVMO0FBRGEsT0FBckI7QUFHRDtBQUNGO0FBQ0Y7Ozs7Ozs7Ozs7QUNsREQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL2xpYi9wcmlzbWEudHMiLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtLy4vcGFnZXMvYXBpL2xhYmVscy50cyIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcImZzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiIsImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAoIXJlcS5xdWVyeS5sYWJlbCkge1xuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICBlcnJvcjogXCJObyBMYWJlbCBJbiBRdWVyeSBGb3VuZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29uZmlnID0gYXdhaXQgcHJpc21hLmNvbmZpZy5maW5kRmlyc3QoKTtcblxuICBjb25zdCBsYWJlbFBhdGggPSBjb25maWc/LmxhYmVsUGF0aDtcblxuICBpZiAoIWxhYmVsUGF0aCkge1xuICAgIHByb2Nlc3MuZXhpdCgpO1xuICB9XG5cbiAgY29uc3QgYWxsRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhsYWJlbFBhdGgsIFwidXRmLThcIik7XG5cbiAgY29uc3QgbGFiZWxGaWx0ZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKFwibW9udGhseVwiKSB8fCB2YWx1ZS5zdGFydHNXaXRoKFwiYWxsXCIpKSByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgZmlsZSA9IGFsbEZpbGVzXG4gICAgLmZpbHRlcihsYWJlbEZpbHRlcilcbiAgICAuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwuc2xpY2UoMCwgbGFiZWwubGVuZ3RoIC0gNCkgPT09IHJlcS5xdWVyeS5sYWJlbCk7XG5cbiAgLy8gY2hlY2sgaWYgZmlsZSBldmVuIGV4aXN0c1xuICBpZiAoZmlsZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgZXJyb3I6IGBMYWJlbCBOb3QgRm91bmQuYCxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZWFkIGZpbGUgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYCR7bGFiZWxQYXRofS8ke2ZpbGVbMF19YCwgXCJ1dGYtOFwiKTtcblxuICAgIC8vIGRlY2lkZSBpZiBjb250ZW50IGhhcyBcIixcIiwgaWYgeWVzOiBpdCdzIGEgbGVhZGVyYm9hcmQuXG4gICAgaWYgKGNvbnRlbnQuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY29udGVudC5zcGxpdChcIixcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJmcyIsImhhbmRsZSIsInJlcSIsInJlcyIsInF1ZXJ5IiwibGFiZWwiLCJqc29uIiwiZXJyb3IiLCJjb25maWciLCJmaW5kRmlyc3QiLCJsYWJlbFBhdGgiLCJwcm9jZXNzIiwiZXhpdCIsImFsbEZpbGVzIiwicmVhZGRpclN5bmMiLCJsYWJlbEZpbHRlciIsInZhbHVlIiwic3RhcnRzV2l0aCIsImZpbGUiLCJmaWx0ZXIiLCJzbGljZSIsImxlbmd0aCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJpbmNsdWRlcyIsInN0YXR1cyIsInNwbGl0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=