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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      labelList = _useState2[0],
      setLabelList = _useState2[1];

  var newLabel = /*#__PURE__*/function () {
    var _ref = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(label) {
      return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/labels/".concat(label.slice(0, label.length - 4)), {
                method: 'GET'
              }).then(function (data) {
                return data.json();
              }).then(function (data) {
                console.log(data);
                setLabel(data);
              })["catch"](function (error) {
                alert('shit.');
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function newLabel(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var initFetch = /*#__PURE__*/function () {
      var _ref2 = (0,_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _home_jerome_Source_MacGeiler_geilerstream_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch('/api/labels/all', {
                  method: 'GET'
                }).then(function (data) {
                  return data.json();
                }).then(function (data) {
                  newLabel(data[0]);
                  setLabelList(data);
                })["catch"](function (error) {
                  // fug.
                  alert('shit.');
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function initFetch() {
        return _ref2.apply(this, arguments);
      };
    }();

    initFetch();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: currentLabel
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, _this);
};

_s(Ui, "kkUisGXNt77bGp3VgnQlxJ4rNUw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdWkuM2VlZGYwZDI5ZDkxMjM4NTUzZGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7QUFFQSxJQUFNRyxFQUFZLEdBQUcsU0FBZkEsRUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsa0JBQWlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLFFBQXJCOztBQUNBLG1CQUFrQ0osK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT0ssU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxRQUFRO0FBQUEsdVNBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1RDLEtBQUssdUJBQWdCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQTlCLENBQWhCLEdBQW9EO0FBQzdEQyxnQkFBQUEsTUFBTSxFQUFFO0FBRHFELGVBQXBELENBQUwsQ0FHSEMsSUFIRyxDQUdFLFVBQUFDLElBQUksRUFBSTtBQUNaLHVCQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELGVBTEcsRUFNSEYsSUFORyxDQU1FLFVBQUFDLElBQUksRUFBSTtBQUNaRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQVYsZ0JBQUFBLFFBQVEsQ0FBQ1UsSUFBRCxDQUFSO0FBQ0QsZUFURyxXQVVHLFVBQUNJLEtBQUQsRUFBVztBQUNoQkMsZ0JBQUFBLEtBQUssQ0FBQyxPQUFELENBQUw7QUFDRCxlQVpHLENBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlosUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWdCQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXFCLFNBQVM7QUFBQSwwU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVlgsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzdCRyxrQkFBQUEsTUFBTSxFQUFFO0FBRHFCLGlCQUFwQixDQUFMLENBR0hDLElBSEcsQ0FHRSxVQUFBQyxJQUFJLEVBQUk7QUFDWix5QkFBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxpQkFMRyxFQU1IRixJQU5HLENBTUUsVUFBQUMsSUFBSSxFQUFJO0FBQ1pQLGtCQUFBQSxRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBUjtBQUNBUixrQkFBQUEsWUFBWSxDQUFDUSxJQUFELENBQVo7QUFDRCxpQkFURyxXQVVHLFVBQUNJLEtBQUQsRUFBVztBQUNoQjtBQUNBQyxrQkFBQUEsS0FBSyxDQUFDLE9BQUQsQ0FBTDtBQUNELGlCQWJHLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEMsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWlCQUEsSUFBQUEsU0FBUztBQUNWLEdBbkJRLEVBbUJOLEVBbkJNLENBQVQ7QUFxQkEsc0JBQU87QUFBSyxhQUFTLEVBQUV0Qiw2RUFBaEI7QUFBQSxjQUFtQ0s7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0ExQ0Q7O0dBQU1GOztLQUFBQTtBQTRDTiwrREFBZUEsRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91aS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVpOiBOZXh0UGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVudExhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsYWJlbExpc3QsIHNldExhYmVsTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbmV3TGFiZWwgPSBhc3luYyAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGZldGNoKGAvYXBpL2xhYmVscy8ke2xhYmVsLnNsaWNlKDAsIGxhYmVsLmxlbmd0aCAtIDQpfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMYWJlbChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KCdzaGl0LicpXG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdEZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvbGFiZWxzL2FsbCcsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbmV3TGFiZWwoZGF0YVswXSk7XG4gICAgICAgICAgc2V0TGFiZWxMaXN0KGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gZnVnLlxuICAgICAgICAgIGFsZXJ0KCdzaGl0LicpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbml0RmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2N1cnJlbnRMYWJlbH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVpIiwicHJvcHMiLCJjdXJyZW50TGFiZWwiLCJzZXRMYWJlbCIsImxhYmVsTGlzdCIsInNldExhYmVsTGlzdCIsIm5ld0xhYmVsIiwibGFiZWwiLCJmZXRjaCIsInNsaWNlIiwibGVuZ3RoIiwibWV0aG9kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJpbml0RmV0Y2giLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9