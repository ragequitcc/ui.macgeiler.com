"use strict";
(() => {
var exports = {};
exports.id = "pages/api/config/[config]";
exports.ids = ["pages/api/config/[config]"];
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

/***/ "./pages/api/config/[config].ts":
/*!**************************************!*\
  !*** ./pages/api/config/[config].ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");


const findConfig = async config => {
  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.findUnique({
    where: {
      name: config
    }
  });

  if (result === null) {
    return {
      error: 'Config Not Found'
    };
  }

  return result;
};

const upsertConfig = async (name, value) => {
  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.config.upsert({
    where: {
      name: name
    },
    update: {
      name: name,
      value: value
    },
    create: {
      name: name,
      value: value
    }
  });
  return result;
};

const Config = async (req, res) => {
  const query = req.query.config.toString();

  if (req.method === 'GET') {
    await findConfig(query).then(data => {
      return res.json(data);
    }).catch(error => {
      return res.status(400).json(error);
    });
  } // POST


  if (req.method === 'POST') {
    if (!req.query.value) {
      return res.status(400).json({
        error: 'Missing Value In Query String'
      });
    }

    await upsertConfig(query, req.query.value.toString()).then(data => {
      return res.json(data);
    }).catch(error => {
      return res.status(400).json(error);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/config/[config].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbmZpZy9bY29uZmlnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFFQSxNQUFNRSxVQUFVLEdBQUcsTUFBT0MsTUFBUCxJQUEwQjtBQUMzQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUosa0VBQUEsQ0FBeUI7QUFDNUNNLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUVKO0FBREQ7QUFEcUMsR0FBekIsQ0FBckI7O0FBTUEsTUFBSUMsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsV0FBTztBQUNMSSxNQUFBQSxLQUFLLEVBQUU7QUFERixLQUFQO0FBR0Q7O0FBRUQsU0FBT0osTUFBUDtBQUNELENBZEQ7O0FBZ0JBLE1BQU1LLFlBQVksR0FBRyxPQUFPRixJQUFQLEVBQXFCRyxLQUFyQixLQUF1QztBQUMxRCxRQUFNTixNQUFNLEdBQUcsTUFBTUosOERBQUEsQ0FBcUI7QUFDeENNLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUVBO0FBREQsS0FEaUM7QUFJeENLLElBQUFBLE1BQU0sRUFBRTtBQUNOTCxNQUFBQSxJQUFJLEVBQUVBLElBREE7QUFFTkcsTUFBQUEsS0FBSyxFQUFFQTtBQUZELEtBSmdDO0FBUXhDRyxJQUFBQSxNQUFNLEVBQUU7QUFDTk4sTUFBQUEsSUFBSSxFQUFFQSxJQURBO0FBRU5HLE1BQUFBLEtBQUssRUFBRUE7QUFGRDtBQVJnQyxHQUFyQixDQUFyQjtBQWNBLFNBQU9OLE1BQVA7QUFDRCxDQWhCRDs7QUFrQkEsTUFBTVUsTUFBTSxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRSxLQUFKLENBQVVkLE1BQVYsQ0FBaUJlLFFBQWpCLEVBQWQ7O0FBRUEsTUFBSUgsR0FBRyxDQUFDSSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTWpCLFVBQVUsQ0FBQ2UsS0FBRCxDQUFWLENBQ0hHLElBREcsQ0FDR0MsSUFBRCxJQUFVO0FBQ2QsYUFBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNELEtBSEcsRUFJSEUsS0FKRyxDQUlJZixLQUFELElBQVc7QUFDaEIsYUFBT1EsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJkLEtBQXJCLENBQVA7QUFDRCxLQU5HLENBQU47QUFPRCxHQVhpRSxDQWFsRTs7O0FBQ0EsTUFBSU8sR0FBRyxDQUFDSSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSSxDQUFDSixHQUFHLENBQUNFLEtBQUosQ0FBVVAsS0FBZixFQUFzQjtBQUNwQixhQUFPTSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUMxQmQsUUFBQUEsS0FBSyxFQUFFO0FBRG1CLE9BQXJCLENBQVA7QUFHRDs7QUFFRCxVQUFNQyxZQUFZLENBQUNRLEtBQUQsRUFBUUYsR0FBRyxDQUFDRSxLQUFKLENBQVVQLEtBQVYsQ0FBZ0JRLFFBQWhCLEVBQVIsQ0FBWixDQUNIRSxJQURHLENBQ0dDLElBQUQsSUFBVTtBQUNkLGFBQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQVA7QUFDRCxLQUhHLEVBSUhFLEtBSkcsQ0FJSWYsS0FBRCxJQUFXO0FBQ2hCLGFBQU9RLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCZCxLQUFyQixDQUFQO0FBQ0QsS0FORyxDQUFOO0FBT0Q7QUFDRixDQTdCRDs7QUErQkEsaUVBQWVNLE1BQWY7Ozs7Ozs7Ozs7QUNwRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWlsZXJzdHJlYW0vLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2dlaWxlcnN0cmVhbS8uL3BhZ2VzL2FwaS9jb25maWcvW2NvbmZpZ10udHMiLCJ3ZWJwYWNrOi8vZ2VpbGVyc3RyZWFtL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIiwiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG5jb25zdCBmaW5kQ29uZmlnID0gYXN5bmMgKGNvbmZpZzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5jb25maWcuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIG5hbWU6IGNvbmZpZyxcbiAgICB9LFxuICB9KTtcblxuICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnQ29uZmlnIE5vdCBGb3VuZCcsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB1cHNlcnRDb25maWcgPSBhc3luYyAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5jb25maWcudXBzZXJ0KHtcbiAgICB3aGVyZToge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICB9LFxuICAgIHVwZGF0ZToge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICB9LFxuICAgIGNyZWF0ZToge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgQ29uZmlnID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5LmNvbmZpZy50b1N0cmluZygpO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGF3YWl0IGZpbmRDb25maWcocXVlcnkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBQT1NUXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBpZiAoIXJlcS5xdWVyeS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6ICdNaXNzaW5nIFZhbHVlIEluIFF1ZXJ5IFN0cmluZycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCB1cHNlcnRDb25maWcocXVlcnksIHJlcS5xdWVyeS52YWx1ZS50b1N0cmluZygpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiZmluZENvbmZpZyIsImNvbmZpZyIsInJlc3VsdCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIm5hbWUiLCJlcnJvciIsInVwc2VydENvbmZpZyIsInZhbHVlIiwidXBzZXJ0IiwidXBkYXRlIiwiY3JlYXRlIiwiQ29uZmlnIiwicmVxIiwicmVzIiwicXVlcnkiLCJ0b1N0cmluZyIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwianNvbiIsImNhdGNoIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==