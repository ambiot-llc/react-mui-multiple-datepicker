"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = _interopRequireDefault(require("./utils"));

var _dateUtils = require("./dateUtils");

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 34px;\n  margin-bottom: 2px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 34px;\n  margin-bottom: 2px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  text-decoration: none;\n  margin: 0;\n  padding: 0.5rem;\n  outline: none;\n  font-size: inherit;\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  background: none;\n  text-align: right;\n"], ["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  text-decoration: none;\n  margin: 0;\n  padding: 0.5rem;\n  outline: none;\n  font-size: inherit;\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  background: none;\n  text-align: right;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  margin: 0;\n  padding: 0.5rem;\n  outline: none;\n  font-size: inherit;\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  background: none;\n"], ["\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  text-decoration: none;\n  margin: 0;\n  padding: 0.5rem;\n  outline: none;\n  font-size: inherit;\n  font-weight: 400;\n  position: relative;\n  z-index: 1;\n  background: none;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  background-color: rgb(0, 151, 167);\n  height: 34px;\n  border-radius: 50%;\n  left: 0;\n  opacity: ", ";\n  position: absolute;\n  top: 0;\n  transform: scale(", ");\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  width: 34px;\n"], ["\n  background-color: rgb(0, 151, 167);\n  height: 34px;\n  border-radius: 50%;\n  left: 0;\n  opacity: ", ";\n  position: absolute;\n  top: 0;\n  transform: scale(", ");\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  width: 34px;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  position: relative;\n  color: ", ";\n"], ["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  position: relative;\n  color: ", ";\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWeek = _styledComponents.default.div(_templateObject);

var DayButton = _styledComponents.default.button(_templateObject2);

var Blank = _styledComponents.default.div(_templateObject3);

var DayBackdrop = _styledComponents.default.div(_templateObject4, function (_ref) {
  var selected = _ref.selected;
  return selected ? '1' : '0';
}, function (_ref2) {
  var selected = _ref2.selected;
  return selected ? '1' : '0';
});

var Day = _styledComponents.default.div(_templateObject5, function (_ref3) {
  var selected = _ref3.selected;
  return selected ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.87)';
}, function (_ref4) {
  var today = _ref4.today;
  return today ? 'bold' : '400';
}, function (_ref5) {
  var today = _ref5.today;
  return today ? '1.1rem' : 'auto';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'lightgrey' : 'auto';
});

var Week =
/*#__PURE__*/
function (_Component) {
  _inherits(Week, _Component);

  function Week() {
    var _ref7;

    var _temp, _this;

    _classCallCheck(this, Week);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref7 = Week.__proto__ || Object.getPrototypeOf(Week)).call.apply(_ref7, [this].concat(args))), _this.onSelect = function (day) {
      if (!_this.isDisabled(day)) _this.props.onSelect(day);
    }, _this.isDisabled = function (day) {
      var minDate = _this.props.minDate,
          maxDate = _this.props.maxDate;
      return minDate && _utils.default.isBefore(day, minDate) || maxDate && _utils.default.isAfter(day, maxDate);
    }, _this.isSelected = function (day) {
      return _this.props.selectedDates && _utils.default.dateIn(_this.props.selectedDates, day);
    }, _temp));
  }

  _createClass(Week, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var dateInNumberic = new _dateUtils.dateTimeFormat('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });
      var dateToday = dateInNumberic.format(new Date());
      var dayInNumeric = new _dateUtils.dateTimeFormat('en-US', {
        day: 'numeric'
      });
      return _react.default.createElement(StyledWeek, null, this.props.week.map(function (day, i) {
        if (day) {
          var isToday = day && dateToday === dateInNumberic.format(day);

          var isDisabled = _this2.isDisabled(day);

          var isSelected = _this2.isSelected(day);

          return _react.default.createElement(DayButton, {
            key: "day-".concat(day),
            onClick: function onClick(e) {
              e.preventDefault();

              _this2.onSelect(day);
            },
            disabled: isDisabled,
            selected: isSelected
          }, _react.default.createElement(DayBackdrop, {
            selected: isSelected
          }), _react.default.createElement(Day, {
            selected: isSelected,
            disabled: isDisabled,
            today: isToday
          }, dayInNumeric.format(day)));
        }

        return _react.default.createElement(Blank, {
          key: "blank-".concat(i)
        });
      }));
    }
  }]);

  return Week;
}(_react.Component);

var _default = Week;
exports.default = _default;