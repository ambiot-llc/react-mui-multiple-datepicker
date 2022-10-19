"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const Root = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   margin: 0px;
//   max-height: 48px;
//   padding: 0px;
// `

// const Button = styled.button`
//   border: 10px;
//   box-sizing: border-box;
//   display: inline-block;
//   font-family: Roboto, sans-serif;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   cursor: pointer;
//   text-decoration: none;
//   margin: 4px 8px 8px 0px;
//   padding: 0px;
//   outline: none;
//   font-size: inherit;
//   font-weight: inherit;
//   position: relative;
//   z-index: 1;
//   height: 36px;
//   line-height: 36px;
//   min-width: 64px;
//   color: rgb(0, 188, 212);
//   transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
//   border-radius: 2px;
//   user-select: none;
//   overflow: hidden;
//   background-color: rgba(0, 0, 0, 0);
//   text-align: center;
//   max-height: 36px;
// `;

var CalendarActionButton = function CalendarActionButton(_ref) {
  var cancelButtonText = _ref.cancelButtonText,
    submitButtonText = _ref.submitButtonText,
    onCancel = _ref.onCancel,
    onOk = _ref.onOk,
    readOnly = _ref.readOnly;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: onCancel,
    sx: {
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }
  }, cancelButtonText), !readOnly && /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: onOk
  }, submitButtonText));
};
var _default = CalendarActionButton;
exports["default"] = _default;