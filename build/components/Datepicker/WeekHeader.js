"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var BoxRoot = (0, _material.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    '& > *': _defineProperty({
      width: 36,
      margin: "".concat(theme.spacing(0, 1), " !important")
    }, theme.breakpoints.down('xs'), {
      margin: "0 2px"
    })
  };
});
var Week = function Week(props) {
  return /*#__PURE__*/_react["default"].createElement(_material.Typography, _extends({
    variant: "overline",
    color: "textSecondary"
  }, props));
};
var WeekHeader = function WeekHeader() {
  var weekdayNames = _moment["default"].weekdaysShort(true);
  return /*#__PURE__*/_react["default"].createElement(BoxRoot, null, weekdayNames.map(function (name) {
    return /*#__PURE__*/_react["default"].createElement(Week, {
      key: name
    }, name);
  }));
};
var _default = WeekHeader;
exports["default"] = _default;