"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _utils = _interopRequireDefault(require("./utils"));
var _dateUtils = require("./dateUtils");
var _Circle = _interopRequireDefault(require("./Circle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Week = /*#__PURE__*/function (_Component) {
  _inherits(Week, _Component);
  var _super = _createSuper(Week);
  function Week() {
    var _this;
    _classCallCheck(this, Week);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onSelect", function (day) {
      if (!_this.isDisabled(day)) _this.props.onSelect(day);
    });
    _defineProperty(_assertThisInitialized(_this), "isDisabled", function (day) {
      if (_this.props.readOnly) return true;
      var disabledDate = _this.props.disabledDates && _this.props.disabledDates.find(function (d) {
        return _utils["default"].isSameDay(d, day);
      });
      if (disabledDate != null) return true;
      var minDate = _this.props.minDate;
      var maxDate = _this.props.maxDate;
      return minDate && _utils["default"].isBefore(day, minDate) || maxDate && _utils["default"].isAfter(day, maxDate);
    });
    _defineProperty(_assertThisInitialized(_this), "isSelected", function (day) {
      return _this.props.selectedDates && _utils["default"].dateIn(_this.props.selectedDates, day);
    });
    return _this;
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
      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 34,
        marginBottom: 2
      }, this.props.week.map(function (day, i) {
        if (day) {
          var isToday = day && dateToday === dateInNumberic.format(day);
          var isDisabled = _this2.isDisabled(day);
          var isSelected = _this2.isSelected(day);
          return /*#__PURE__*/_react["default"].createElement(_Circle["default"], {
            key: "day-".concat(day),
            label: dayInNumeric.format(day),
            disabled: isDisabled,
            checked: isSelected,
            onCheck: function onCheck(e) {
              _this2.onSelect(day);
            },
            isToday: isToday,
            xs: {
              margin: "0 2px"
            },
            sx: {
              margin: '0 8px'
            }
          });
        }
        return /*#__PURE__*/_react["default"].createElement(_material.Box, {
          key: "blank-".concat(i),
          xs: {
            margin: "0 2px"
          },
          mx: 1,
          width: 36,
          height: 36
        });
      }));
    }
  }]);
  return Week;
}(_react.Component);
var _default = Week;
exports["default"] = _default;