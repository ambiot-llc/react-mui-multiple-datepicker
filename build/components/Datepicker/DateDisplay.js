"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateUtils = require("./dateUtils");

var _templateObject = _taggedTemplateLiteral(["\n  width: 165px;\n  height: 330px;\n  float: left;\n  font-weight: 700;\n  display: inline-block;\n  background-color: rgb(0, 188, 212);\n  border-top-left-radius: 2px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 2px;\n  color: rgb(255, 255, 255);\n  padding: 20px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"], ["\n  width: 165px;\n  height: 330px;\n  float: left;\n  font-weight: 700;\n  display: inline-block;\n  background-color: rgb(0, 188, 212);\n  border-top-left-radius: 2px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 2px;\n  color: rgb(255, 255, 255);\n  padding: 20px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  height: 16px;\n  margin: 0px 0px 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 16px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"], ["\n  position: relative;\n  overflow: hidden;\n  height: 16px;\n  margin: 0px 0px 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 16px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents.default.div(_templateObject);

var DateTime = _styledComponents.default.div(_templateObject2);

var DateDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(DateDisplay, _Component);

  function DateDisplay() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DateDisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DateDisplay.__proto__ || Object.getPrototypeOf(DateDisplay)).call.apply(_ref, [this].concat(args))), _this.state = {
      selectedYear: false
    }, _this.getFormatedDate = function (date) {
      var dateTime = new _dateUtils.dateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).format(date);
      return "".concat(dateTime);
    }, _temp));
  }

  _createClass(DateDisplay, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.props.monthDaySelected) {
        this.setState({
          selectedYear: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedDates = this.props.selectedDates;
      return _react.default.createElement(Root, null, selectedDates.map(function (date) {
        return _react.default.createElement(DateTime, {
          key: "".concat(date.toString())
        }, _this2.getFormatedDate(date));
      }));
    }
  }]);

  return DateDisplay;
}(_react.Component);

var _default = DateDisplay;
exports.default = _default;