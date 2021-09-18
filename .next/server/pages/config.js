(() => {
var exports = {};
exports.id = "pages/config";
exports.ids = ["pages/config"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./pages/config.tsx":
/*!**************************!*\
  !*** ./pages/config.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Config.module.scss */ "./styles/Config.module.scss");
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/prisma */ "./lib/prisma.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/jerome/Source/MacGeiler/geilerstream/pages/config.tsx";




const getServerSideProps = async () => {
  const config = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.config.findMany();
  return {
    props: {
      config
    }
  };
};

const Config = props => {
  var _props$config$, _props$config$2;

  const onSubmit = async event => {
    const labelPath = event.target.labelPath.value;
    const streamlabsApiKey = event.target.streamlabsApiKey.value;
    event.preventDefault();

    if (!labelPath || !streamlabsApiKey) {
      alert('Error. No Values Set.');
      return;
    }

    await fetch('/api/config', {
      body: JSON.stringify({
        labelPath: event.target.labelPath.value,
        streamlabsApiKey: event.target.streamlabsApiKey.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(data => {
      alert('Saved.');
    }).catch(error => {
      alert('Error');
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Label, {
          for: "labelPath",
          children: "Label Path"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Input, {
          type: "text",
          name: "labelPath",
          placeholder: (_props$config$ = props.config[0]) !== null && _props$config$ !== void 0 && _props$config$.labelPath ? props.config[0].labelPath : 'Empty',
          id: "labelPath"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Label, {
          for: "labelPath",
          children: "Streamlabs API Key"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Input, {
          type: "text",
          name: "streamlabsApiKey",
          placeholder: (_props$config$2 = props.config[0]) !== null && _props$config$2 !== void 0 && _props$config$2.streamlabsApiKey ? props.config[0].streamlabsApiKey : 'Empty',
          id: "streamlabsApiKey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_0__.Button, {
        color: "primary",
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);

/***/ }),

/***/ "./styles/Config.module.scss":
/*!***********************************!*\
  !*** ./styles/Config.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Config_container__3b10s"
};


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/config.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyw2Q0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLGtCQUZQO0FBR0UscUJBQVcsRUFBRSxtQkFBQUosS0FBSyxDQUFDRixNQUFOLENBQWEsQ0FBYiw2REFBaUJTLGdCQUFqQixHQUFvQ1AsS0FBSyxDQUFDRixNQUFOLENBQWEsQ0FBYixFQUFnQlMsZ0JBQXBELEdBQXVFLE9BSHRGO0FBSUUsWUFBRSxFQUFDO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFtQkUsOERBQUMsOENBQUQ7QUFBUSxhQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBckREOztBQXVEQSxpRUFBZU4sTUFBZjs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL2NvbmZpZy50c3giLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtLy4vc3R5bGVzL0NvbmZpZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIiwiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBwcmlzbWEuY29uZmlnLmZpbmRNYW55KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge2NvbmZpZ31cbiAgICB9XG4gIH07XG5cbiAgXG5jb25zdCBDb25maWc6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCBsYWJlbFBhdGggPSBldmVudC50YXJnZXQubGFiZWxQYXRoLnZhbHVlO1xuICAgIGNvbnN0IHN0cmVhbWxhYnNBcGlLZXkgPSBldmVudC50YXJnZXQuc3RyZWFtbGFic0FwaUtleS52YWx1ZTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWxhYmVsUGF0aCB8fCAhc3RyZWFtbGFic0FwaUtleSkge1xuICAgICAgICBhbGVydCgnRXJyb3IuIE5vIFZhbHVlcyBTZXQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBmZXRjaCgnL2FwaS9jb25maWcnLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGxhYmVsUGF0aDogZXZlbnQudGFyZ2V0LmxhYmVsUGF0aC52YWx1ZSxcbiAgICAgICAgICAgIHN0cmVhbWxhYnNBcGlLZXk6IGV2ZW50LnRhcmdldC5zdHJlYW1sYWJzQXBpS2V5LnZhbHVlXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgYWxlcnQoJ1NhdmVkLicpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWxlcnQoJ0Vycm9yJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxMYWJlbCBmb3I9XCJsYWJlbFBhdGhcIj5MYWJlbCBQYXRoPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJsYWJlbFBhdGhcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmNvbmZpZ1swXT8ubGFiZWxQYXRoID8gcHJvcHMuY29uZmlnWzBdLmxhYmVsUGF0aCA6ICdFbXB0eSd9XG4gICAgICAgICAgICBpZD1cImxhYmVsUGF0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPExhYmVsIGZvcj1cImxhYmVsUGF0aFwiPlN0cmVhbWxhYnMgQVBJIEtleTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwic3RyZWFtbGFic0FwaUtleVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMuY29uZmlnWzBdPy5zdHJlYW1sYWJzQXBpS2V5ID8gcHJvcHMuY29uZmlnWzBdLnN0cmVhbWxhYnNBcGlLZXkgOiAnRW1wdHknfVxuICAgICAgICAgICAgaWQ9XCJzdHJlYW1sYWJzQXBpS2V5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5TYXZlPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDb25maWdfY29udGFpbmVyX18zYjEwc1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInN0eWxlcyIsIkJ1dHRvbiIsIkZvcm0iLCJGb3JtR3JvdXAiLCJJbnB1dCIsIkxhYmVsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29uZmlnIiwiZmluZE1hbnkiLCJwcm9wcyIsIkNvbmZpZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJsYWJlbFBhdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0cmVhbWxhYnNBcGlLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9