"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WeekHeader = _interopRequireDefault(require("./WeekHeader"));
var _Month = _interopRequireDefault(require("./Month"));
var _dateUtils = require("./dateUtils");
var _CalendarToolbar = _interopRequireDefault(require("./CalendarToolbar"));
var _CalendarButtons = _interopRequireDefault(require("./CalendarButtons"));
var _DateDisplay = _interopRequireDefault(require("./DateDisplay"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Calendar = function Calendar(_ref) {
  var initialDate = _ref.initialDate,
    maxDate = _ref.maxDate,
    minDate = _ref.minDate,
    selectedDates = _ref.selectedDates,
    disabledDates = _ref.disabledDates,
    onSelect = _ref.onSelect,
    onCancel = _ref.onCancel,
    onOk = _ref.onOk,
    readOnly = _ref.readOnly,
    onRemoveAtIndex = _ref.onRemoveAtIndex,
    cancelButtonText = _ref.cancelButtonText,
    submitButtonText = _ref.submitButtonText,
    selectedDatesTitle = _ref.selectedDatesTitle;
  var calendar = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(function () {
      return _dateUtils.defaultUtils.getFirstDayOfMonth(initialDate || new Date());
    }),
    _useState2 = _slicedToArray(_useState, 2),
    displayDate = _useState2[0],
    setDisplayDate = _useState2[1];
  var handleMonthChange = (0, _react.useCallback)(function (months) {
    setDisplayDate(function (displayDate) {
      return _dateUtils.defaultUtils.addMonths(displayDate, months);
    });
  }, [setDisplayDate]);
  (0, _react.useEffect)(function () {
    setDisplayDate(_dateUtils.defaultUtils.getFirstDayOfMonth(initialDate || new Date()));
  }, [initialDate]);
  maxDate = maxDate || _dateUtils.defaultUtils.addYears(new Date(), 100);
  minDate = minDate || _dateUtils.defaultUtils.addYears(new Date(), -100);
  var toolbarInteractions = {
    prevMonth: _dateUtils.defaultUtils.monthDiff(displayDate, minDate) > 0,
    nextMonth: _dateUtils.defaultUtils.monthDiff(displayDate, maxDate) < 0
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    flex: "1",
    display: "flex",
    maxHeight: "100%",
    overflow: "hidden"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_CalendarToolbar["default"], {
    displayDate: displayDate,
    onMonthChange: handleMonthChange,
    prevMonth: toolbarInteractions.prevMonth,
    nextMonth: toolbarInteractions.nextMonth
  }), /*#__PURE__*/_react["default"].createElement(_WeekHeader["default"], null), /*#__PURE__*/_react["default"].createElement(_Month["default"], {
    displayDate: displayDate,
    key: displayDate.toDateString(),
    selectedDates: selectedDates,
    disabledDates: disabledDates,
    minDate: minDate,
    maxDate: maxDate,
    onSelect: onSelect,
    readOnly: readOnly,
    ref: calendar
  })), /*#__PURE__*/_react["default"].createElement(_CalendarButtons["default"], {
    readOnly: readOnly,
    onCancel: onCancel,
    onOk: onOk,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText
  })), /*#__PURE__*/_react["default"].createElement(_DateDisplay["default"], {
    selectedDatesTitle: selectedDatesTitle,
    selectedDates: selectedDates,
    readOnly: readOnly,
    onRemoveAtIndex: onRemoveAtIndex
  }));
};
var _default = Calendar;
exports["default"] = _default;