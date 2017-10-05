"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 500;\n  height: 20px;\n  line-height: 15px;\n  opacity: 0.5;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 500;\n  height: 20px;\n  line-height: 15px;\n  opacity: 0.5;\n  text-align: center;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 42px;\n"], ["\n  width: 42px;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents.default.div(_templateObject);

var StyledSpan = _styledComponents.default.span(_templateObject2);

var WeekHeader = function WeekHeader() {
  return _react.default.createElement(StyledDiv, null, _react.default.createElement(StyledSpan, null, "S"), _react.default.createElement(StyledSpan, null, "M"), _react.default.createElement(StyledSpan, null, "T"), _react.default.createElement(StyledSpan, null, "W"), _react.default.createElement(StyledSpan, null, "T"), _react.default.createElement(StyledSpan, null, "F"), _react.default.createElement(StyledSpan, null, "S"));
};

var _default = WeekHeader;
exports.default = _default;