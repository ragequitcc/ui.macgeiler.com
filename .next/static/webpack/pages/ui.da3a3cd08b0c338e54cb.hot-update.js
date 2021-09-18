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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      currentLabel = _useState[0],
      setLabel = _useState[1];

  var getLabel = /*#__PURE__*/function () {
    var _ref = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(label) {
      return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/labels?label=".concat(label), {
                method: "GET"
              }).then(function (data) {
                return data.json();
              }).then(function (data) {
                //console.log(data.data.split(/:/g));
                setLabel(data.data);
              })["catch"](function (error) {// fug.
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getLabel(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var fetchLabels = /*#__PURE__*/function () {
      var _ref2 = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("/api/labels?label=all_time_top_donator", {
                  method: "GET"
                }).then(function (data) {
                  return data.json();
                }).then(function (data) {
                  setLabel(data.data.split(/:/g)[0]);
                })["catch"](function (error) {// fug.
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchLabels() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchLabels();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: currentLabel
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 10
  }, _this);
};

_s(Ui, "26uL3EFdvsNkMy8MdXN0KzC6kdA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdWkuZGEzYTNjZDA4YjBjMzM4ZTU0Y2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7QUFFQSxJQUFNRyxFQUFZLEdBQUcsU0FBZkEsRUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsa0JBQWlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLFFBQXJCOztBQUVBLE1BQU1DLFFBQVE7QUFBQSx1U0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDVEMsS0FBSyw2QkFBc0JELEtBQXRCLEdBQStCO0FBQ3hDRSxnQkFBQUEsTUFBTSxFQUFFO0FBRGdDLGVBQS9CLENBQUwsQ0FHSEMsSUFIRyxDQUdFLFVBQUNDLElBQUQsRUFBVTtBQUNkLHVCQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELGVBTEcsRUFNSEYsSUFORyxDQU1FLFVBQUNDLElBQUQsRUFBVTtBQUNkO0FBQ0FOLGdCQUFBQSxRQUFRLENBQUNNLElBQUksQ0FBQ0EsSUFBTixDQUFSO0FBQ0QsZUFURyxXQVVHLFVBQUNFLEtBQUQsRUFBVyxDQUNoQjtBQUNELGVBWkcsQ0FEUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBZ0JBTixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNYyxXQUFXO0FBQUEsMFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1pOLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUNwREMsa0JBQUFBLE1BQU0sRUFBRTtBQUQ0QyxpQkFBM0MsQ0FBTCxDQUdIQyxJQUhHLENBR0UsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QseUJBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsaUJBTEcsRUFNSEYsSUFORyxDQU1FLFVBQUNDLElBQUQsRUFBVTtBQUNkTixrQkFBQUEsUUFBUSxDQUFDTSxJQUFJLENBQUNBLElBQUwsQ0FBVUksS0FBVixDQUFnQixJQUFoQixFQUFzQixDQUF0QixDQUFELENBQVI7QUFDRCxpQkFSRyxXQVNHLFVBQUNGLEtBQUQsRUFBVyxDQUNoQjtBQUNELGlCQVhHLENBRFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWEMsV0FBVztBQUFBO0FBQUE7QUFBQSxPQUFqQjs7QUFlQUEsSUFBQUEsV0FBVztBQUNaLEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsc0JBQU87QUFBSyxhQUFTLEVBQUVmLDZFQUFoQjtBQUFBLGNBQW1DSztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXZDRDs7R0FBTUY7O0tBQUFBO0FBeUNOLCtEQUFlQSxFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VpLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Db25maWcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVaTogTmV4dFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRMYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0TGFiZWwgPSBhc3luYyAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGZldGNoKGAvYXBpL2xhYmVscz9sYWJlbD0ke2xhYmVsfWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5kYXRhLnNwbGl0KC86L2cpKTtcbiAgICAgICAgc2V0TGFiZWwoZGF0YS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIGZ1Zy5cbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hMYWJlbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaChcIi9hcGkvbGFiZWxzP2xhYmVsPWFsbF90aW1lX3RvcF9kb25hdG9yXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0TGFiZWwoZGF0YS5kYXRhLnNwbGl0KC86L2cpWzBdKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vIGZ1Zy5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZldGNoTGFiZWxzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjdXJyZW50TGFiZWx9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVaSIsInByb3BzIiwiY3VycmVudExhYmVsIiwic2V0TGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImZldGNoTGFiZWxzIiwic3BsaXQiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9