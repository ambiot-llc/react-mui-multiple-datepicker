"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateUtils = require("./dateUtils");

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  height: 16px;\n  margin: 0px 0px 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 16px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 165px;\n  height: 330px;\n  float: left;\n  font-weight: 700;\n  display: inline-block;\n  background-color: rgb(0, 188, 212);\n  border-top-left-radius: 2px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 2px;\n  color: rgb(255, 255, 255);\n  padding: 20px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents["default"].div(_templateObject());

var DateTime = _styledComponents["default"].div(_templateObject2());

var DateDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(DateDisplay, _Component);

  function DateDisplay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateDisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateDisplay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedYear: false
    });

    _defineProperty(_assertThisInitialized(_this), "getFormatedDate", function (date) {
      var dateTime = new _dateUtils.dateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).format(date);
      return "".concat(dateTime);
    });

    return _this;
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
      return _react["default"].createElement(Root, null, selectedDates.map(function (date) {
        return _react["default"].createElement(DateTime, {
          key: "".concat(date.toString())
        }, _this2.getFormatedDate(date));
      }));
    }
  }]);

  return DateDisplay;
}(_react.Component);

var _default = DateDisplay;
exports["default"] = _default;