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
                console.log(data);
                return data.json();
              }).then(function (data) {
                console.log(data);
                setLabel(data);
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
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdWkuNTM2OGU3ODdmMTAxNGJhY2YyMDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7QUFFQSxJQUFNRyxFQUFZLEdBQUcsU0FBZkEsRUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsa0JBQWlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLFFBQXJCOztBQUNBLG1CQUFrQ0osK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT0ssU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxRQUFRO0FBQUEsdVNBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1RDLEtBQUssdUJBQWdCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQTlCLENBQWhCLEdBQW9EO0FBQzdEQyxnQkFBQUEsTUFBTSxFQUFFO0FBRHFELGVBQXBELENBQUwsQ0FHSEMsSUFIRyxDQUdFLFVBQUFDLElBQUksRUFBSTtBQUNaQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSx1QkFBT0EsSUFBSSxDQUFDRyxJQUFMLEVBQVA7QUFDRCxlQU5HLEVBT0hKLElBUEcsQ0FPRSxVQUFBQyxJQUFJLEVBQUk7QUFDWkMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FWLGdCQUFBQSxRQUFRLENBQUNVLElBQUQsQ0FBUjtBQUNELGVBVkcsV0FXRyxVQUFDSSxLQUFELEVBQVc7QUFDaEJILGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELGVBYkcsQ0FEUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSWCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBaUJBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNb0IsU0FBUztBQUFBLDBTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNWVixLQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDN0JHLGtCQUFBQSxNQUFNLEVBQUU7QUFEcUIsaUJBQXBCLENBQUwsQ0FHSEMsSUFIRyxDQUdFLFVBQUFDLElBQUksRUFBSTtBQUNaLHlCQUFPQSxJQUFJLENBQUNHLElBQUwsRUFBUDtBQUNELGlCQUxHLEVBTUhKLElBTkcsQ0FNRSxVQUFBQyxJQUFJLEVBQUk7QUFDWlAsa0JBQUFBLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFSO0FBQ0FSLGtCQUFBQSxZQUFZLENBQUNRLElBQUQsQ0FBWjtBQUNELGlCQVRHLFdBVUcsVUFBQ0ksS0FBRCxFQUFXO0FBQ2hCO0FBQ0FFLGtCQUFBQSxLQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0QsaUJBYkcsQ0FEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURCxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBaUJBQSxJQUFBQSxTQUFTO0FBQ1YsR0FuQlEsRUFtQk4sRUFuQk0sQ0FBVDtBQXFCQSxzQkFBTztBQUFLLGFBQVMsRUFBRXJCLDZFQUFoQjtBQUFBLGNBQW1DSztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTNDRDs7R0FBTUY7O0tBQUFBO0FBNkNOLCtEQUFlQSxFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VpLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db25maWcubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIElucHV0LCBMYWJlbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVWk6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50TGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xhYmVsTGlzdCwgc2V0TGFiZWxMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBuZXdMYWJlbCA9IGFzeW5jIChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYC9hcGkvbGFiZWxzLyR7bGFiZWwuc2xpY2UoMCwgbGFiZWwubGVuZ3RoIC0gNCl9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMYWJlbChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0RmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9sYWJlbHMvYWxsJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBuZXdMYWJlbChkYXRhWzBdKTtcbiAgICAgICAgICBzZXRMYWJlbExpc3QoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAvLyBmdWcuXG4gICAgICAgICAgYWxlcnQoJ3NoaXQuJylcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluaXRGZXRjaCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y3VycmVudExhYmVsfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVWkiLCJwcm9wcyIsImN1cnJlbnRMYWJlbCIsInNldExhYmVsIiwibGFiZWxMaXN0Iiwic2V0TGFiZWxMaXN0IiwibmV3TGFiZWwiLCJsYWJlbCIsImZldGNoIiwic2xpY2UiLCJsZW5ndGgiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZXJyb3IiLCJpbml0RmV0Y2giLCJhbGVydCIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=