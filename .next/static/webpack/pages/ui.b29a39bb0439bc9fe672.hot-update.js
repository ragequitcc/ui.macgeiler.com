"use strict";
self["webpackHotUpdate_N_E"]("pages/ui",{

/***/ "./pages/ui.tsx":
/*!**********************!*\
  !*** ./pages/ui.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Config.module.scss */ "./styles/Config.module.scss");
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/jerome/Source/MacGeiler/geilerstream/pages/ui.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Ui = function Ui(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      currentLabel = _useState[0],
      setLabel = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var fetchLabels = /*#__PURE__*/function () {
      var _ref = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('/api/labels?label=monthly_top_donator', {
                  method: 'GET'
                }).then(function (data) {
                  console.log(data);
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchLabels() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchLabels();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: currentLabel
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(Ui, "dj9J5mA9edtLEBbvluWFK9VwKiY=");

_c = Ui;
/* harmony default export */ __webpack_exports__["default"] = (Ui);

var _c;

$RefreshReg$(_c, "Ui");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdWkuYjI5YTM5YmIwNDM5YmM5ZmU2NzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7QUFFQSxJQUFNRyxFQUFZLEdBQUcsU0FBZkEsRUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUIsa0JBQWlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLFFBQXJCOztBQUVBTCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNTSxXQUFXO0FBQUEseVNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1ZDLEtBQUssQ0FBQyx1Q0FBRCxFQUEwQztBQUNqREMsa0JBQUFBLE1BQU0sRUFBRTtBQUR5QyxpQkFBMUMsQ0FBTCxDQUVIQyxJQUZHLENBRUUsVUFBQUMsSUFBSSxFQUFJO0FBQ1pDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILGlCQUpLLFdBSUcsVUFBQUcsS0FBSyxFQUFJO0FBQ2RGLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNILGlCQU5LLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWFAsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFqQjs7QUFVQUEsSUFBQUEsV0FBVztBQUNkLEdBWlEsRUFZTixFQVpNLENBQVQ7QUFjRixzQkFDRTtBQUFLLGFBQVMsRUFBRVAsNkVBQWhCO0FBQUEsY0FDS0s7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXRCRDs7R0FBTUY7O0tBQUFBO0FBd0JOLCtEQUFlQSxFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VpLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Db25maWcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuICBcbmNvbnN0IFVpOiBOZXh0UGFnZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50TGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoTGFiZWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvbGFiZWxzP2xhYmVsPW1vbnRobHlfdG9wX2RvbmF0b3InLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoTGFiZWxzKCk7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7Y3VycmVudExhYmVsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVaSIsInByb3BzIiwiY3VycmVudExhYmVsIiwic2V0TGFiZWwiLCJmZXRjaExhYmVscyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9