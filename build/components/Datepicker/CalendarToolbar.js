"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("./dateUtils");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = _taggedTemplateLiteral(["\n  border: none;\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  height: 36px;\n  line-height: 1.25;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n\n  font-weight: bold;\n  padding: 5px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-style: normal;\n  font-size: 0.7em;\n\n  :hover {\n    color: rgb(0, 188, 212);\n  }\n"], ["\n  border: none;\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  height: 36px;\n  line-height: 1.25;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n\n  font-weight: bold;\n  padding: 5px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-style: normal;\n  font-size: 0.7em;\n\n  :hover {\n    color: rgb(0, 188, 212);\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background-color: inherit;\n  height: 48px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  background-color: inherit;\n  height: 48px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  width: 100%;\n"], ["\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  width: 100%;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  height: inherit;\n  padding-top: 12px;\n"], ["\n  height: inherit;\n  padding-top: 12px;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents.default.button(_templateObject);

var Root = _styledComponents.default.div(_templateObject2);

var TitleDiv = _styledComponents.default.div(_templateObject3);

var TitleText = _styledComponents.default.div(_templateObject4);

var CalendarToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CalendarToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CalendarToolbar.__proto__ || Object.getPrototypeOf(CalendarToolbar)).call.apply(_ref, [this].concat(args))), _this.state = {
      transitionDirection: 'up'
    }, _this.handleTouchTapPrevMonth = function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    }, _this.handleTouchTapNextMonth = function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    }, _temp));
  }

  _createClass(CalendarToolbar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.displayDate !== this.props.displayDate) {
        var direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right';
        this.setState({
          transitionDirection: direction
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var displayDate = this.props.displayDate;
      var dateTimeFormatted = new _dateUtils.dateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
      }).format(displayDate);
      return _react.default.createElement(Root, null, _react.default.createElement(Icon, {
        disabled: !this.props.prevMonth,
        onClick: this.handleTouchTapPrevMonth
      }, String.fromCharCode(9664)), _react.default.createElement(TitleDiv, null, _react.default.createElement(TitleText, {
        key: dateTimeFormatted
      }, dateTimeFormatted)), _react.default.createElement(Icon, {
        disabled: !this.props.nextMonth,
        onClick: this.handleTouchTapNextMonth
      }, String.fromCharCode(9654)));
    }
  }]);

  return CalendarToolbar;
}(_react.Component);

CalendarToolbar.propTypes = {
  displayDate: _propTypes.default.object.isRequired,
  nextMonth: _propTypes.default.bool,
  onMonthChange: _propTypes.default.func,
  prevMonth: _propTypes.default.bool
};
CalendarToolbar.defaultProps = {
  nextMonth: true,
  prevMonth: true
};
var _default = CalendarToolbar;
exports.default = _default;