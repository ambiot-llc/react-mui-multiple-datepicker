"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _WeekHeader = _interopRequireDefault(require("./WeekHeader"));

var _Month = _interopRequireDefault(require("./Month"));

var _dateUtils = require("./dateUtils");

var _CalendarToolbar = _interopRequireDefault(require("./CalendarToolbar"));

var _CalendarButtons = _interopRequireDefault(require("./CalendarButtons"));

var _DateDisplay = _interopRequireDefault(require("./DateDisplay"));

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-items: space-between;\n  flex-direction: column;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 0px 8px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.87);\n  user-select: none;\n  overflow: auto;\n  max-width: 479px:\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents["default"].div(_templateObject());

var CalendarContainer = _styledComponents["default"].div(_templateObject2());

var StyledCalendar = _styledComponents["default"].div(_templateObject3());

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayDate: undefined,
      displayMonthDay: undefined,
      selectedDate: undefined,
      transitionDirection: 'left',
      open: false,
      transitionEnter: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleMonthChange", function (months) {
      var direction = months >= 0 ? 'left' : 'right';

      _this.setState({
        transitionDirection: direction,
        displayDate: _dateUtils.defaultUtils.addMonths(_this.state.displayDate, months)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calendarRefs", {});

    return _this;
  }

  _createClass(Calendar, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        displayDate: _dateUtils.defaultUtils.getFirstDayOfMonth(this.props.initialDate),
        selectedDate: this.props.initialDate,
        displayMonthDay: !this.props.openToYearSelection
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialDate !== this.props.initialDate) {
        var date = nextProps.initialDate || new Date();
        this.setState({
          displayDate: _dateUtils.defaultUtils.getFirstDayOfMonth(date),
          selectedDate: date
        });
      }
    }
  }, {
    key: "getMinDate",
    value: function getMinDate() {
      return this.props.minDate || _dateUtils.defaultUtils.addYears(new Date(), -100);
    }
  }, {
    key: "getMaxDate",
    value: function getMaxDate() {
      return this.props.maxDate || _dateUtils.defaultUtils.addYears(new Date(), 100);
    }
  }, {
    key: "getSelectedDate",
    value: function getSelectedDate() {
      return this.state.selectedDate;
    }
  }, {
    key: "getToolbarInteractions",
    value: function getToolbarInteractions() {
      return {
        prevMonth: _dateUtils.defaultUtils.monthDiff(this.state.displayDate, this.getMinDate()) > 0,
        nextMonth: _dateUtils.defaultUtils.monthDiff(this.state.displayDate, this.getMaxDate()) < 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var toolbarInteractions = this.getToolbarInteractions();
      return _react["default"].createElement(Root, {
        hideCalendarDate: this.props.hideCalendarDate,
        visible: this.props.visible
      }, _react["default"].createElement(_DateDisplay["default"], {
        selectedDates: this.props.selectedDates
      }), _react["default"].createElement(StyledCalendar, null, _react["default"].createElement(CalendarContainer, null, _react["default"].createElement(_CalendarToolbar["default"], {
        displayDate: this.state.displayDate,
        onMonthChange: this.handleMonthChange,
        prevMonth: toolbarInteractions.prevMonth,
        nextMonth: toolbarInteractions.nextMonth
      }), _react["default"].createElement(_WeekHeader["default"], null), _react["default"].createElement(_Month["default"], {
        view: this.props.view,
        selected: this.props.selected,
        displayDate: this.state.displayDate,
        key: this.state.displayDate.toDateString(),
        selectedDates: this.props.selectedDates,
        minDate: this.getMinDate(),
        maxDate: this.getMaxDate(),
        onSelect: this.props.onSelect,
        ref: function ref(_ref) {
          return _this2.calendarRefs.calendar = _ref;
        }
      })), _react["default"].createElement(_CalendarButtons["default"], {
        onCancel: this.props.onCancel,
        onOk: this.props.onOk
      })));
    }
  }]);

  return Calendar;
}(_react.Component);

_defineProperty(Calendar, "defaultProps", {
  disableYearSelection: false,
  initialDate: new Date()
});

var _default = Calendar;
exports["default"] = _default;