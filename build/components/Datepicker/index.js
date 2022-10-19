"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _Calendar = _interopRequireDefault(require("./Calendar"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function initState(selectedDates) {
  return {
    selectedDates: selectedDates ? _toConsumableArray(selectedDates) : [],
    minDate: null,
    maxDate: null
  };
}
function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedDates':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedDates: action.payload
      });
    default:
      return new Error('wrong action type in multiple date picker reducer');
  }
}
var DatePicker = function DatePicker(_ref) {
  var _DialogProps$PaperPro, _DialogProps$PaperPro2, _DialogProps$PaperPro3;
  var open = _ref.open,
    readOnly = _ref.readOnly,
    onCancel = _ref.onCancel,
    onSubmit = _ref.onSubmit,
    outerSelectedDates = _ref.selectedDates,
    disabledDates = _ref.disabledDates,
    DialogProps = _ref.DialogProps,
    cancelButtonText = _ref.cancelButtonText,
    _ref$submitButtonText = _ref.submitButtonText,
    submitButtonText = _ref$submitButtonText === void 0 ? 'Submit' : _ref$submitButtonText,
    _ref$selectedDatesTit = _ref.selectedDatesTitle,
    selectedDatesTitle = _ref$selectedDatesTit === void 0 ? 'Selected Dates' : _ref$selectedDatesTit;
  var theme = (0, _material.useTheme)();
  if (cancelButtonText == null) {
    cancelButtonText = readOnly ? 'Dismiss' : 'Cancel';
  }
  var _useReducer = (0, _react.useReducer)(reducer, outerSelectedDates, initState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    selectedDates = _useReducer2$.selectedDates,
    minDate = _useReducer2$.minDate,
    maxDate = _useReducer2$.maxDate,
    dispatch = _useReducer2[1];
  var onSelect = (0, _react.useCallback)(function (day) {
    if (readOnly) return;
    if (_utils["default"].dateIn(selectedDates, day)) {
      dispatch({
        type: 'setSelectedDates',
        payload: selectedDates.filter(function (date) {
          return !_utils["default"].isSameDay(date, day);
        })
      });
    } else {
      dispatch({
        type: 'setSelectedDates',
        payload: [].concat(_toConsumableArray(selectedDates), [day])
      });
    }
  }, [selectedDates, dispatch, readOnly]);
  var onRemoveAtIndex = (0, _react.useCallback)(function (index) {
    if (readOnly) return;
    var newDates = _toConsumableArray(selectedDates);
    if (index > -1) {
      newDates.splice(index, 1);
    }
    dispatch({
      type: 'setSelectedDates',
      payload: newDates
    });
  }, [selectedDates, dispatch, readOnly]);
  var dismiss = (0, _react.useCallback)(function () {
    dispatch({
      type: 'setSelectedDates',
      payload: []
    });
    onCancel();
  }, [dispatch, onCancel]);
  var handleCancel = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    dismiss();
  }, [dismiss]);
  var handleOk = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    if (readOnly) return;
    onSubmit(selectedDates);
  }, [onSubmit, selectedDates, readOnly]);
  (0, _react.useEffect)(function () {
    if (open) {
      dispatch({
        type: 'setSelectedDates',
        payload: outerSelectedDates != null ? outerSelectedDates : []
      });
    }
  }, [open, outerSelectedDates]);
  return /*#__PURE__*/_react["default"].createElement(_material.Dialog, _extends({}, DialogProps, {
    open: open,
    PaperProps: _objectSpread(_objectSpread({}, DialogProps === null || DialogProps === void 0 ? void 0 : DialogProps.PaperProps), {}, {
      sx: _objectSpread(_objectSpread({}, DialogProps === null || DialogProps === void 0 ? void 0 : (_DialogProps$PaperPro = DialogProps.PaperProps) === null || _DialogProps$PaperPro === void 0 ? void 0 : _DialogProps$PaperPro.sx), {}, {
        minHeight: 482,
        maxHeight: 482,
        display: 'flex',
        xs: _objectSpread(_objectSpread({}, DialogProps === null || DialogProps === void 0 ? void 0 : (_DialogProps$PaperPro2 = DialogProps.PaperProps) === null || _DialogProps$PaperPro2 === void 0 ? void 0 : (_DialogProps$PaperPro3 = _DialogProps$PaperPro2.sx) === null || _DialogProps$PaperPro3 === void 0 ? void 0 : _DialogProps$PaperPro3.xs), {}, {
          margin: theme.spacing(1)
        })
      })
    })
  }), /*#__PURE__*/_react["default"].createElement(_Calendar["default"], {
    selectedDates: selectedDates,
    disabledDates: disabledDates,
    onSelect: onSelect,
    onRemoveAtIndex: onRemoveAtIndex,
    minDate: minDate,
    maxDate: maxDate,
    onCancel: handleCancel,
    onOk: handleOk,
    readOnly: readOnly,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText,
    selectedDatesTitle: selectedDatesTitle
  }));
};
DatePicker.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  readOnly: _propTypes["default"].bool,
  onCancel: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  selectedDates: _propTypes["default"].array,
  cancelButtonText: _propTypes["default"].string,
  submitButtonText: _propTypes["default"].string,
  selectedDatesTitle: _propTypes["default"].string
};
var _default = DatePicker;
exports["default"] = _default;