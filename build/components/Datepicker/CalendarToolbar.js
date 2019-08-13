"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("./dateUtils");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: inherit;\n  padding-top: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background-color: inherit;\n  height: 48px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  z-index: 1;\n  height: 36px;\n  line-height: 1.25;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  text-align: center;\n\n  font-weight: bold;\n  padding: 5px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-style: normal;\n  font-size: 0.7em;\n\n  :hover {\n    color: rgb(0, 188, 212);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents["default"].button(_templateObject());

var Root = _styledComponents["default"].div(_templateObject2());

var TitleDiv = _styledComponents["default"].div(_templateObject3());

var TitleText = _styledComponents["default"].div(_templateObject4());

var CalendarToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      transitionDirection: 'up'
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchTapPrevMonth", function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchTapNextMonth", function (e) {
      e.preventDefault();

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    });

    return _this;
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
      return _react["default"].createElement(Root, null, _react["default"].createElement(Icon, {
        disabled: !this.props.prevMonth,
        onClick: this.handleTouchTapPrevMonth
      }, String.fromCharCode(9664)), _react["default"].createElement(TitleDiv, null, _react["default"].createElement(TitleText, {
        key: dateTimeFormatted
      }, dateTimeFormatted)), _react["default"].createElement(Icon, {
        disabled: !this.props.nextMonth,
        onClick: this.handleTouchTapNextMonth
      }, String.fromCharCode(9654)));
    }
  }]);

  return CalendarToolbar;
}(_react.Component);

_defineProperty(CalendarToolbar, "propTypes", {
  displayDate: _propTypes["default"].object.isRequired,
  nextMonth: _propTypes["default"].bool,
  onMonthChange: _propTypes["default"].func,
  prevMonth: _propTypes["default"].bool
});

_defineProperty(CalendarToolbar, "defaultProps", {
  nextMonth: true,
  prevMonth: true
});

var _default = CalendarToolbar;
exports["default"] = _default;