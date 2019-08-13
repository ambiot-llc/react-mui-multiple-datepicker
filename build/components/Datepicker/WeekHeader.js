"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      marginBottom: theme.spacing(1),
      '& > *': {
        width: 36,
        margin: "0 ".concat(theme.spacing(1), "px")
      }
    }
  };
});

var Week = function Week(props) {
  return _react["default"].createElement(_core.Typography, _extends({
    variant: "overline",
    color: "textSecondary"
  }, props));
};

var WeekHeader = function WeekHeader() {
  var classes = useStyles();

  var weekdayNames = _moment["default"].weekdaysShort();

  console.log('weekday names', _moment["default"].weekdaysMin());
  return _react["default"].createElement("div", {
    className: classes.root
  }, weekdayNames.map(function (name) {
    return _react["default"].createElement(Week, {
      key: name
    }, name);
  }));
};

var _default = WeekHeader;
exports["default"] = _default;