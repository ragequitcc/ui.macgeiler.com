"use strict";
self["webpackHotUpdate_N_E"]("pages/config",{

/***/ "./pages/config.tsx":
/*!**************************!*\
  !*** ./pages/config.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Config.module.scss */ "./styles/Config.module.scss");
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/jerome/Source/MacGeiler/geilerstream/pages/config.tsx",
    _this = undefined;






var Config = function Config(props) {
  var _props$config$, _props$config$2;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var labelPath, streamlabsApiKey;
      return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              labelPath = event.target.labelPath.value;
              streamlabsApiKey = event.target.streamlabsApiKey.value;
              event.preventDefault();

              if (!(!labelPath || !streamlabsApiKey)) {
                _context.next = 6;
                break;
              }

              alert('Error. No Values Set.');
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return fetch('/api/config', {
                body: JSON.stringify({
                  labelPath: event.target.labelPath.value,
                  streamlabsApiKey: event.target.streamlabsApiKey.value
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              }).then(function (data) {
                alert('Saved.');
              })["catch"](function (error) {
                alert('Error');
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, {
          "for": "labelPath",
          children: "Label Path"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          name: "labelPath",
          placeholder: (_props$config$ = props.config[0]) !== null && _props$config$ !== void 0 && _props$config$.labelsPath ? props.config[0].labelsPath : 'Empty',
          id: "labelPath"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, {
          "for": "labelPath",
          children: "Streamlabs API Key"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          name: "streamlabsApiKey",
          placeholder: (_props$config$2 = props.config[0]) !== null && _props$config$2 !== void 0 && _props$config$2.streamlabsApiKey ? props.config[0].streamlabsApiKey : 'Empty',
          id: "streamlabsApiKey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
        color: "primary",
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_c = Config;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Config);

var _c;

$RefreshReg$(_c, "Config");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmlnLmM4NjRhMWY3OWIyZTY1MDgzZDE4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQVlBLElBQU1NLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNsQyxNQUFNQyxRQUFRO0FBQUEsdVNBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLGNBQUFBLFNBRFMsR0FDR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELFNBQWIsQ0FBdUJFLEtBRDFCO0FBRVRDLGNBQUFBLGdCQUZTLEdBRVVKLEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxnQkFBYixDQUE4QkQsS0FGeEM7QUFJZkgsY0FBQUEsS0FBSyxDQUFDSyxjQUFOOztBQUplLG9CQU1YLENBQUNKLFNBQUQsSUFBYyxDQUFDRyxnQkFOSjtBQUFBO0FBQUE7QUFBQTs7QUFPWEUsY0FBQUEsS0FBSyxDQUFDLHVCQUFELENBQUw7QUFQVzs7QUFBQTtBQUFBO0FBQUEscUJBV1RDLEtBQUssQ0FBQyxhQUFELEVBQWdCO0FBQ3ZCQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQlQsa0JBQUFBLFNBQVMsRUFBRUQsS0FBSyxDQUFDRSxNQUFOLENBQWFELFNBQWIsQ0FBdUJFLEtBRGpCO0FBRWpCQyxrQkFBQUEsZ0JBQWdCLEVBQUVKLEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxnQkFBYixDQUE4QkQ7QUFGL0IsaUJBQWYsQ0FEaUI7QUFLdkJRLGdCQUFBQSxPQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWCxpQkFMYztBQVF2QkMsZ0JBQUFBLE1BQU0sRUFBRTtBQVJlLGVBQWhCLENBQUwsQ0FTSEMsSUFURyxDQVNFLFVBQUFDLElBQUksRUFBSTtBQUNaUixnQkFBQUEsS0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNILGVBWEssV0FXRyxVQUFBUyxLQUFLLEVBQUk7QUFDZFQsZ0JBQUFBLEtBQUssQ0FBQyxPQUFELENBQUw7QUFDSCxlQWJLLENBWFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQTJCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVIsNkVBQWhCO0FBQUEsMkJBQ0UsOERBQUMsNENBQUQ7QUFBTSxjQUFRLEVBQUVRLFFBQWhCO0FBQUEsOEJBQ0UsOERBQUMsaURBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2Q0FBRDtBQUFPLGlCQUFJLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLFdBRlA7QUFHRSxxQkFBVyxFQUFFLGtCQUFBRCxLQUFLLENBQUNtQixNQUFOLENBQWEsQ0FBYiwyREFBaUJDLFVBQWpCLEdBQThCcEIsS0FBSyxDQUFDbUIsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFVBQTlDLEdBQTJELE9BSDFFO0FBSUUsWUFBRSxFQUFDO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFLDhEQUFDLGlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsNkNBQUQ7QUFBTyxpQkFBSSxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxrQkFGUDtBQUdFLHFCQUFXLEVBQUUsbUJBQUFwQixLQUFLLENBQUNtQixNQUFOLENBQWEsQ0FBYiw2REFBaUJiLGdCQUFqQixHQUFvQ04sS0FBSyxDQUFDbUIsTUFBTixDQUFhLENBQWIsRUFBZ0JiLGdCQUFwRCxHQUF1RSxPQUh0RjtBQUlFLFlBQUUsRUFBQztBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFtQkUsOERBQUMsOENBQUQ7QUFBUSxhQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FyREQ7O0tBQU1QOztBQXVETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb25maWcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbmZpZy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIElucHV0LCBMYWJlbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgcHJpc21hLmNvbmZpZy5maW5kTWFueSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtjb25maWd9XG4gICAgfVxuICB9O1xuXG4gIFxuY29uc3QgQ29uZmlnOiBOZXh0UGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgbGFiZWxQYXRoID0gZXZlbnQudGFyZ2V0LmxhYmVsUGF0aC52YWx1ZTtcbiAgICBjb25zdCBzdHJlYW1sYWJzQXBpS2V5ID0gZXZlbnQudGFyZ2V0LnN0cmVhbWxhYnNBcGlLZXkudmFsdWU7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFsYWJlbFBhdGggfHwgIXN0cmVhbWxhYnNBcGlLZXkpIHtcbiAgICAgICAgYWxlcnQoJ0Vycm9yLiBObyBWYWx1ZXMgU2V0LicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY29uZmlnJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBsYWJlbFBhdGg6IGV2ZW50LnRhcmdldC5sYWJlbFBhdGgudmFsdWUsXG4gICAgICAgICAgICBzdHJlYW1sYWJzQXBpS2V5OiBldmVudC50YXJnZXQuc3RyZWFtbGFic0FwaUtleS52YWx1ZVxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGFsZXJ0KCdTYXZlZC4nKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGFsZXJ0KCdFcnJvcicpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8TGFiZWwgZm9yPVwibGFiZWxQYXRoXCI+TGFiZWwgUGF0aDwvTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibGFiZWxQYXRoXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5jb25maWdbMF0/LmxhYmVsc1BhdGggPyBwcm9wcy5jb25maWdbMF0ubGFiZWxzUGF0aCA6ICdFbXB0eSd9XG4gICAgICAgICAgICBpZD1cImxhYmVsUGF0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPExhYmVsIGZvcj1cImxhYmVsUGF0aFwiPlN0cmVhbWxhYnMgQVBJIEtleTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwic3RyZWFtbGFic0FwaUtleVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMuY29uZmlnWzBdPy5zdHJlYW1sYWJzQXBpS2V5ID8gcHJvcHMuY29uZmlnWzBdLnN0cmVhbWxhYnNBcGlLZXkgOiAnRW1wdHknfVxuICAgICAgICAgICAgaWQ9XCJzdHJlYW1sYWJzQXBpS2V5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5TYXZlPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwiRm9ybSIsIkZvcm1Hcm91cCIsIklucHV0IiwiTGFiZWwiLCJDb25maWciLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJsYWJlbFBhdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0cmVhbWxhYnNBcGlLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29udGFpbmVyIiwiY29uZmlnIiwibGFiZWxzUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=