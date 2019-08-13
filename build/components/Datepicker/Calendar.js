"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WeekHeader = _interopRequireDefault(require("./WeekHeader"));

var _Month = _interopRequireDefault(require("./Month"));

var _dateUtils = require("./dateUtils");

var _CalendarToolbar = _interopRequireDefault(require("./CalendarToolbar"));

var _CalendarButtons = _interopRequireDefault(require("./CalendarButtons"));

var _DateDisplay = _interopRequireDefault(require("./DateDisplay"));

var _core = require("@material-ui/core");

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

// const Root = styled.div`
//   color: rgba(0, 0, 0, 0.87);
//   user-select: none;
//   overflow: auto;
//   max-width: 479px:
// `
// const CalendarContainer = styled.div`
//   display: flex;
//   justify-items: space-between;
//   flex-direction: column;
//   font-size: 12px;
//   font-weight: 400;
//   padding: 0px 8px;
//   transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
// `
var styles = function styles(theme) {
  return {
    root: {
      flex: '1',
      display: 'flex',
      maxHeight: '100%',
      overflow: 'hidden'
    },
    selectorContainer: {
      // marginTop: theme.spacing(2)
      // boxShadow: 'inset 0 0 10px #000000'
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    calendarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: "0 ".concat(theme.spacing(1), "px")
    }
  };
}; // const StyledCalendar = styled.div`
//   display: flex;
//   flex-direction: column;
// `


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

      var classes = this.props.classes;
      var toolbarInteractions = this.getToolbarInteractions();
      return _react["default"].createElement("div", {
        className: classes.root
      }, _react["default"].createElement("div", {
        className: classes.selectorContainer
      }, _react["default"].createElement("div", {
        className: classes.calendarContainer
      }, _react["default"].createElement(_CalendarToolbar["default"], {
        displayDate: this.state.displayDate,
        onMonthChange: this.handleMonthChange,
        prevMonth: toolbarInteractions.prevMonth,
        nextMonth: toolbarInteractions.nextMonth
      }), _react["default"].createElement(_WeekHeader["default"], null), _react["default"].createElement(_Month["default"], {
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
        onOk: this.props.onOk,
        cancelButtonText: this.props.cancelButtonText,
        submitButtonText: this.props.submitButtonText
      })), _react["default"].createElement(_DateDisplay["default"], {
        selectedDatesTitle: this.props.selectedDatesTitle,
        selectedDates: this.props.selectedDates,
        onRemoveAtIndex: this.props.onRemoveAtIndex
      }));
    }
  }]);

  return Calendar;
}(_react.Component);

_defineProperty(Calendar, "defaultProps", {
  disableYearSelection: false,
  initialDate: new Date()
});

var _default = (0, _core.withStyles)(styles)(Calendar);

exports["default"] = _default;