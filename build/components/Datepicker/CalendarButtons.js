"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 0px;\n  max-height: 48px;\n  padding: 0px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 0px;\n  max-height: 48px;\n  padding: 0px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  text-decoration: none;\n  margin: 4px 8px 8px 0px;\n  padding: 0px;\n  outline: none;\n  font-size: inherit;\n  font-weight: inherit;\n  position: relative;\n  z-index: 1;\n  height: 36px;\n  line-height: 36px;\n  min-width: 64px;\n  color: rgb(0, 188, 212);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  border-radius: 2px;\n  user-select: none;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n  max-height: 36px;\n"], ["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  text-decoration: none;\n  margin: 4px 8px 8px 0px;\n  padding: 0px;\n  outline: none;\n  font-size: inherit;\n  font-weight: inherit;\n  position: relative;\n  z-index: 1;\n  height: 36px;\n  line-height: 36px;\n  min-width: 64px;\n  color: rgb(0, 188, 212);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  border-radius: 2px;\n  user-select: none;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n  max-height: 36px;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents.default.div(_templateObject);

var Button = _styledComponents.default.button(_templateObject2);

var CalendarActionButton = function CalendarActionButton(props) {
  return _react.default.createElement(Root, null, _react.default.createElement(Button, {
    onClick: props.onCancel
  }, "Cancel"), _react.default.createElement(Button, {
    onClick: props.onOk
  }, "Ok"));
};

var _default = CalendarActionButton;
exports.default = _default;