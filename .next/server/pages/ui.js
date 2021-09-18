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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const getLabel = async label => {
    await fetch(`/api/labels?label=${label}`, {
      method: "GET"
    }).then(data => {
      return data.json();
    }).then(data => {
      //console.log(data.data.split(/:/g));
      setLabel(data.data.split(/:/g)[0]);
    }).catch(error => {// fug.
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchLabels = async () => {
      await fetch("/api/labels?label=all_time_top_donator", {
        method: "GET"
      }).then(data => {
        return data.json();
      }).then(data => {
        // format bcuz mac want's only the name not the amount. he noble.
        setLabel(data.data.split(/:/g)[0]);
      }).catch(error => {// fug.
      });
    };

    fetchLabels();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Config_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: currentLabel
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUcsRUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQTJCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7O0FBRUEsUUFBTUssUUFBUSxHQUFHLE1BQU9DLEtBQVAsSUFBeUI7QUFDeEMsVUFBTUMsS0FBSyxDQUFFLHFCQUFvQkQsS0FBTSxFQUE1QixFQUErQjtBQUN4Q0UsTUFBQUEsTUFBTSxFQUFFO0FBRGdDLEtBQS9CLENBQUwsQ0FHSEMsSUFIRyxDQUdHQyxJQUFELElBQVU7QUFDZCxhQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEtBTEcsRUFNSEYsSUFORyxDQU1HQyxJQUFELElBQVU7QUFDZDtBQUNBTixNQUFBQSxRQUFRLENBQUNNLElBQUksQ0FBQ0EsSUFBTCxDQUFVRSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBQUQsQ0FBUjtBQUNELEtBVEcsRUFVSEMsS0FWRyxDQVVJQyxLQUFELElBQVcsQ0FDaEI7QUFDRCxLQVpHLENBQU47QUFhRCxHQWREOztBQWdCQWYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTWdCLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFlBQU1SLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUNwREMsUUFBQUEsTUFBTSxFQUFFO0FBRDRDLE9BQTNDLENBQUwsQ0FHSEMsSUFIRyxDQUdHQyxJQUFELElBQVU7QUFDZCxlQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELE9BTEcsRUFNSEYsSUFORyxDQU1HQyxJQUFELElBQVU7QUFDZDtBQUNBTixRQUFBQSxRQUFRLENBQUNNLElBQUksQ0FBQ0EsSUFBTCxDQUFVRSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBQUQsQ0FBUjtBQUNELE9BVEcsRUFVSEMsS0FWRyxDQVVJQyxLQUFELElBQVcsQ0FDaEI7QUFDRCxPQVpHLENBQU47QUFhRCxLQWREOztBQWdCQUMsSUFBQUEsV0FBVztBQUNaLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFvQkEsc0JBQU87QUFBSyxhQUFTLEVBQUVqQiw2RUFBaEI7QUFBQSxjQUFtQ0s7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0F4Q0Q7O0FBMENBLGlFQUFlRixFQUFmOzs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL3VpLnRzeCIsIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQ29uZmlnLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVWk6IE5leHRQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50TGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldExhYmVsID0gYXN5bmMgKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBhd2FpdCBmZXRjaChgL2FwaS9sYWJlbHM/bGFiZWw9JHtsYWJlbH1gLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuZGF0YS5zcGxpdCgvOi9nKSk7XG4gICAgICAgIHNldExhYmVsKGRhdGEuZGF0YS5zcGxpdCgvOi9nKVswXSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBmdWcuXG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoTGFiZWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2xhYmVscz9sYWJlbD1hbGxfdGltZV90b3BfZG9uYXRvclwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vIGZvcm1hdCBiY3V6IG1hYyB3YW50J3Mgb25seSB0aGUgbmFtZSBub3QgdGhlIGFtb3VudC4gaGUgbm9ibGUuXG4gICAgICAgICAgc2V0TGFiZWwoZGF0YS5kYXRhLnNwbGl0KC86L2cpWzBdKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vIGZ1Zy5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZldGNoTGFiZWxzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjdXJyZW50TGFiZWx9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDb25maWdfY29udGFpbmVyX18zYjEwc1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVpIiwicHJvcHMiLCJjdXJyZW50TGFiZWwiLCJzZXRMYWJlbCIsImdldExhYmVsIiwibGFiZWwiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwianNvbiIsInNwbGl0IiwiY2F0Y2giLCJlcnJvciIsImZldGNoTGFiZWxzIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==