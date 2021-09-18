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
                console.log(data.split(':'));
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
                  console.log(data);
                  setLabel(data.data);
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
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdWkuMGZiMjlhNDZkNGFmNmExMWJkN2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7QUFFQSxJQUFNRyxFQUFZLEdBQUcsU0FBZkEsRUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsa0JBQWlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLFFBQXJCOztBQUVBLE1BQU1DLFFBQVE7QUFBQSx1U0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDVEMsS0FBSyw2QkFBc0JELEtBQXRCLEdBQStCO0FBQ3hDRSxnQkFBQUEsTUFBTSxFQUFFO0FBRGdDLGVBQS9CLENBQUwsQ0FHSEMsSUFIRyxDQUdFLFVBQUNDLElBQUQsRUFBVTtBQUNkLHVCQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELGVBTEcsRUFNSEYsSUFORyxDQU1FLFVBQUNDLElBQUQsRUFBVTtBQUNkRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBVixnQkFBQUEsUUFBUSxDQUFDTSxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNELGVBVEcsV0FVRyxVQUFDSyxLQUFELEVBQVcsQ0FDaEI7QUFDRCxlQVpHLENBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlYsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWdCQU4sRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWlCLFdBQVc7QUFBQSwwU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDWlQsS0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQ3BEQyxrQkFBQUEsTUFBTSxFQUFFO0FBRDRDLGlCQUEzQyxDQUFMLENBR0hDLElBSEcsQ0FHRSxVQUFDQyxJQUFELEVBQVU7QUFDZCx5QkFBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxpQkFMRyxFQU1IRixJQU5HLENBTUUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RFLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBTixrQkFBQUEsUUFBUSxDQUFDTSxJQUFJLENBQUNBLElBQU4sQ0FBUjtBQUNELGlCQVRHLFdBVUcsVUFBQ0ssS0FBRCxFQUFXLENBQ2hCO0FBQ0QsaUJBWkcsQ0FEWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFYQyxXQUFXO0FBQUE7QUFBQTtBQUFBLE9BQWpCOztBQWdCQUEsSUFBQUEsV0FBVztBQUNaLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFvQkEsc0JBQU87QUFBSyxhQUFTLEVBQUVsQiw2RUFBaEI7QUFBQSxjQUFtQ0s7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0F4Q0Q7O0dBQU1GOztLQUFBQTtBQTBDTiwrREFBZUEsRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91aS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVWk6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50TGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldExhYmVsID0gYXN5bmMgKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBhd2FpdCBmZXRjaChgL2FwaS9sYWJlbHM/bGFiZWw9JHtsYWJlbH1gLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnNwbGl0KCc6JykpO1xuICAgICAgICBzZXRMYWJlbChkYXRhLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gZnVnLlxuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaExhYmVscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9sYWJlbHM/bGFiZWw9YWxsX3RpbWVfdG9wX2RvbmF0b3JcIiwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZXRMYWJlbChkYXRhLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gZnVnLlxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hMYWJlbHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2N1cnJlbnRMYWJlbH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVpIiwicHJvcHMiLCJjdXJyZW50TGFiZWwiLCJzZXRMYWJlbCIsImdldExhYmVsIiwibGFiZWwiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImVycm9yIiwiZmV0Y2hMYWJlbHMiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9