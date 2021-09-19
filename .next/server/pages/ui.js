(() => {
var exports = {};
exports.id = "pages/ui";
exports.ids = ["pages/ui"];
exports.modules = {

/***/ "./pages/ui.tsx":
/*!**********************!*\
  !*** ./pages/ui.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Config.module.scss */ "./styles/Config.module.scss");
/* harmony import */ var _styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jerome/Source/MacGeiler/geilerstream/pages/ui.tsx";




const Ui = props => {
  const {
    0: currentLabel,
    1: setLabel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: labelList,
    1: setLabelList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const newLabel = async label => {
    await fetch(`/api/labels/${label.slice(0, label.length - 4)}`, {
      method: 'GET'
    }).then(data => {
      console.log(data);
      return data.json();
    }).then(data => {
      console.log(data);
      setLabel(data);
    }).catch(error => {
      console.log(error);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initFetch = async () => {
      await fetch('/api/labels/all', {
        method: 'GET'
      }).then(data => {
        return data.json();
      }).then(data => {
        newLabel(data[0]);
        setLabelList(data);
      }).catch(error => {
        // fug.
        alert('shit.');
      });
    };

    initFetch();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: currentLabel
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ui.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUcsRUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQTJCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUExQzs7QUFFQSxRQUFNTyxRQUFRLEdBQUcsTUFBT0MsS0FBUCxJQUF5QjtBQUN4QyxVQUFNQyxLQUFLLENBQUUsZUFBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixFQUFlRixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUE5QixDQUFpQyxFQUFqRCxFQUFvRDtBQUM3REMsTUFBQUEsTUFBTSxFQUFFO0FBRHFELEtBQXBELENBQUwsQ0FHSEMsSUFIRyxDQUdFQyxJQUFJLElBQUk7QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxhQUFPQSxJQUFJLENBQUNHLElBQUwsRUFBUDtBQUNELEtBTkcsRUFPSEosSUFQRyxDQU9FQyxJQUFJLElBQUk7QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVYsTUFBQUEsUUFBUSxDQUFDVSxJQUFELENBQVI7QUFDRCxLQVZHLEVBV0hJLEtBWEcsQ0FXSUMsS0FBRCxJQUFXO0FBQ2hCSixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNELEtBYkcsQ0FBTjtBQWNELEdBZkQ7O0FBaUJBcEIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTXFCLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFlBQU1YLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM3QkcsUUFBQUEsTUFBTSxFQUFFO0FBRHFCLE9BQXBCLENBQUwsQ0FHSEMsSUFIRyxDQUdFQyxJQUFJLElBQUk7QUFDWixlQUFPQSxJQUFJLENBQUNHLElBQUwsRUFBUDtBQUNELE9BTEcsRUFNSEosSUFORyxDQU1FQyxJQUFJLElBQUk7QUFDWlAsUUFBQUEsUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVI7QUFDQVIsUUFBQUEsWUFBWSxDQUFDUSxJQUFELENBQVo7QUFDRCxPQVRHLEVBVUhJLEtBVkcsQ0FVSUMsS0FBRCxJQUFXO0FBQ2hCO0FBQ0FFLFFBQUFBLEtBQUssQ0FBQyxPQUFELENBQUw7QUFDRCxPQWJHLENBQU47QUFjRCxLQWZEOztBQWlCQUQsSUFBQUEsU0FBUztBQUNWLEdBbkJRLEVBbUJOLEVBbkJNLENBQVQ7QUFxQkEsc0JBQU87QUFBSyxhQUFTLEVBQUV0Qiw2RUFBaEI7QUFBQSxjQUFtQ0s7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0EzQ0Q7O0FBNkNBLGlFQUFlRixFQUFmOzs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL3VpLnRzeCIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVpOiBOZXh0UGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVudExhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsYWJlbExpc3QsIHNldExhYmVsTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbmV3TGFiZWwgPSBhc3luYyAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGZldGNoKGAvYXBpL2xhYmVscy8ke2xhYmVsLnNsaWNlKDAsIGxhYmVsLmxlbmd0aCAtIDQpfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0TGFiZWwoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdEZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvbGFiZWxzL2FsbCcsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbmV3TGFiZWwoZGF0YVswXSk7XG4gICAgICAgICAgc2V0TGFiZWxMaXN0KGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gZnVnLlxuICAgICAgICAgIGFsZXJ0KCdzaGl0LicpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbml0RmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2N1cnJlbnRMYWJlbH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbmZpZ19jb250YWluZXJfXzNiMTBzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVWkiLCJwcm9wcyIsImN1cnJlbnRMYWJlbCIsInNldExhYmVsIiwibGFiZWxMaXN0Iiwic2V0TGFiZWxMaXN0IiwibmV3TGFiZWwiLCJsYWJlbCIsImZldGNoIiwic2xpY2UiLCJsZW5ndGgiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImluaXRGZXRjaCIsImFsZXJ0IiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==