"use strict";
(() => {
var exports = {};
exports.id = "pages/api/labels/[label]";
exports.ids = ["pages/api/labels/[label]"];
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

/***/ "./pages/api/labels/[label].ts":
/*!*************************************!*\
  !*** ./pages/api/labels/[label].ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const labels = ['monthly_top_cheers', 'monthly_top_donations', 'monthly_top_sub_gifter'];

const getAndSortFiles = labelPath => {
  const allFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(labelPath, 'utf-8');
  return allFiles.filter(label => {
    const b = label.slice(0, label.length - 4);

    if (labels.includes(b)) {
      return b;
    }
  });
};

const formatLabels = (label, rawLabels) => {
  // remove leading whitespace
  const labels = rawLabels.map(label => {
    return label.trim();
  }); // sub gifter format

  if (label === 'monthly_top_sub_gifter') {
    return labels.map(rawLabel => {
      const label = rawLabel.split(' ');
      return {
        name: label[0],
        gifts: label[2]
      };
    });
  } // donations format


  if (label === 'monthly_top_donations') {
    return labels.map(rawLabel => {
      const label = rawLabel.split(':');
      return {
        name: label[0],
        amount: label[1].trim()
      };
    });
  } // cheers format


  if (label === 'monthly_top_cheers') {
    return labels.map(rawLabel => {
      const label = rawLabel.split(':');
      return {
        name: label[0],
        amount: label[1].trim()
      };
    });
  }
};

async function handle(req, res) {
  const {
    label
  } = req.query;
  const config = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.findFirst();
  const labelPath = config === null || config === void 0 ? void 0 : config.labelPath;

  if (label === 'all') {
    return res.json(getAndSortFiles(labelPath));
  }

  if (!labels.includes(label)) {
    return res.status(404).json({
      error: 'Label Not Found'
    });
  }

  const labelContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`${labelPath}/${label}.txt`, 'utf-8');
  return res.json(formatLabels(label, labelContent.split(',')));
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/labels/[label].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQ0UsS0FBdEI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTTNCLGlFQUFBLEVBQXJCO0FBQ0EsUUFBTUssU0FBUyxHQUFHc0IsTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUV0QixTQUExQjs7QUFFQSxNQUFJSSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQixXQUFPZ0IsR0FBRyxDQUFDSSxJQUFKLENBQVN6QixlQUFlLENBQUNDLFNBQUQsQ0FBeEIsQ0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0YsTUFBTSxDQUFDVSxRQUFQLENBQWdCSixLQUFoQixDQUFMLEVBQTZCO0FBQzNCLFdBQU9nQixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQjtBQUMxQkUsTUFBQUEsS0FBSyxFQUFFO0FBRG1CLEtBQXJCLENBQVA7QUFHRDs7QUFFRCxRQUFNQyxZQUFZLEdBQUc5QixzREFBQSxDQUFpQixHQUFFRyxTQUFVLElBQUdJLEtBQU0sTUFBdEMsRUFBNkMsT0FBN0MsQ0FBckI7QUFFQSxTQUFPZ0IsR0FBRyxDQUFDSSxJQUFKLENBQVNmLFlBQVksQ0FBQ0wsS0FBRCxFQUFRdUIsWUFBWSxDQUFDYixLQUFiLENBQW1CLEdBQW5CLENBQVIsQ0FBckIsQ0FBUDtBQUNEOzs7Ozs7Ozs7O0FDbkZEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL2FwaS9sYWJlbHMvW2xhYmVsXS50cyIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcImZzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiIsImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGxhYmVscyA9IFtcbiAgJ21vbnRobHlfdG9wX2NoZWVycycsXG4gICdtb250aGx5X3RvcF9kb25hdGlvbnMnLFxuICAnbW9udGhseV90b3Bfc3ViX2dpZnRlcicsXG5dO1xuXG5jb25zdCBnZXRBbmRTb3J0RmlsZXMgPSAobGFiZWxQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYWxsRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhsYWJlbFBhdGgsICd1dGYtOCcpO1xuXG4gIHJldHVybiBhbGxGaWxlcy5maWx0ZXIoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgYiA9IGxhYmVsLnNsaWNlKDAsIGxhYmVsLmxlbmd0aCAtIDQpO1xuICAgIGlmIChsYWJlbHMuaW5jbHVkZXMoYikpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBmb3JtYXRMYWJlbHMgPSAobGFiZWw6IHN0cmluZywgcmF3TGFiZWxzOiBzdHJpbmdbXSkgPT4ge1xuICAvLyByZW1vdmUgbGVhZGluZyB3aGl0ZXNwYWNlXG4gIGNvbnN0IGxhYmVscyA9IHJhd0xhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgcmV0dXJuIGxhYmVsLnRyaW0oKTtcbiAgfSk7XG5cbiAgLy8gc3ViIGdpZnRlciBmb3JtYXRcbiAgaWYgKGxhYmVsID09PSAnbW9udGhseV90b3Bfc3ViX2dpZnRlcicpIHtcbiAgICByZXR1cm4gbGFiZWxzLm1hcCgocmF3TGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gcmF3TGFiZWwuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGxhYmVsWzBdLFxuICAgICAgICBnaWZ0czogbGFiZWxbMl0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIC8vIGRvbmF0aW9ucyBmb3JtYXRcblxuICBpZiAobGFiZWwgPT09ICdtb250aGx5X3RvcF9kb25hdGlvbnMnKSB7XG4gICAgcmV0dXJuIGxhYmVscy5tYXAoKHJhd0xhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IHJhd0xhYmVsLnNwbGl0KCc6Jyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGxhYmVsWzBdLFxuICAgICAgICBhbW91bnQ6IGxhYmVsWzFdLnRyaW0oKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBjaGVlcnMgZm9ybWF0XG4gIGlmIChsYWJlbCA9PT0gJ21vbnRobHlfdG9wX2NoZWVycycpIHtcbiAgICByZXR1cm4gbGFiZWxzLm1hcCgocmF3TGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gcmF3TGFiZWwuc3BsaXQoJzonKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGxhYmVsWzBdLFxuICAgICAgICBhbW91bnQ6IGxhYmVsWzFdLnRyaW0oKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB7IGxhYmVsIH0gPSByZXEucXVlcnk7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHByaXNtYS5jb25maWcuZmluZEZpcnN0KCk7XG4gIGNvbnN0IGxhYmVsUGF0aCA9IGNvbmZpZz8ubGFiZWxQYXRoO1xuXG4gIGlmIChsYWJlbCA9PT0gJ2FsbCcpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oZ2V0QW5kU29ydEZpbGVzKGxhYmVsUGF0aCkpO1xuICB9XG5cbiAgaWYgKCFsYWJlbHMuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgIGVycm9yOiAnTGFiZWwgTm90IEZvdW5kJyxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhgJHtsYWJlbFBhdGh9LyR7bGFiZWx9LnR4dGAsICd1dGYtOCcpO1xuXG4gIHJldHVybiByZXMuanNvbihmb3JtYXRMYWJlbHMobGFiZWwsIGxhYmVsQ29udGVudC5zcGxpdCgnLCcpKSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiZnMiLCJsYWJlbHMiLCJnZXRBbmRTb3J0RmlsZXMiLCJsYWJlbFBhdGgiLCJhbGxGaWxlcyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwibGFiZWwiLCJiIiwic2xpY2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImZvcm1hdExhYmVscyIsInJhd0xhYmVscyIsIm1hcCIsInRyaW0iLCJyYXdMYWJlbCIsInNwbGl0IiwibmFtZSIsImdpZnRzIiwiYW1vdW50IiwiaGFuZGxlIiwicmVxIiwicmVzIiwicXVlcnkiLCJjb25maWciLCJmaW5kRmlyc3QiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJsYWJlbENvbnRlbnQiLCJyZWFkRmlsZVN5bmMiXSwic291cmNlUm9vdCI6IiJ9