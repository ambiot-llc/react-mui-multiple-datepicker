"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _excluded = ["label", "disabled", "checked", "onCheck", "isToday", "sx"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Circle = function Circle(_ref) {
  var label = _ref.label,
    disabled = _ref.disabled,
    checked = _ref.checked,
    onCheck = _ref.onCheck,
    isToday = _ref.isToday,
    sx = _ref.sx,
    props = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _material.useTheme)();
  var handleClick = (0, _react.useCallback)(function () {
    if (!disabled) {
      onCheck(!checked);
    }
  }, [onCheck, disabled, checked]);
  return /*#__PURE__*/_react["default"].createElement(_material.ButtonBase, {
    sx: _objectSpread(_objectSpread({}, sx), {}, {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: isToday ? theme.palette.background["default"] : checked && !disabled ? theme.palette.primary.main : checked && disabled ? theme.palette.action.disabled : 'rgba(0, 0, 0, 0)',
      color: !checked && !disabled ? theme.palette.text.primary : disabled ? theme.palette.text.disabled : undefined
    }),
    disabled: disabled,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "inherit",
    variant: "body1",
    align: "center",
    style: {
      color: !checked ? undefined : theme.palette.type === 'dark' ? theme.palette.getContrastText(theme.palette.primary.main) : theme.palette.common.white
    }
  }, label));
};
Circle.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  checked: _propTypes["default"].bool.isRequired,
  onCheck: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string
};
var _default = Circle;
exports["default"] = _default;