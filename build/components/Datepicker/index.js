"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireDefault(require("./utils"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (day) {
      var selectedDates = _this.state.selectedDates;

      if (_utils["default"].dateIn(selectedDates, day)) {
        _this.setState({
          selectedDates: selectedDates.filter(function (date) {
            return !_utils["default"].isSameDay(date, day);
          })
        });
      } else {
        _this.setState({
          selectedDates: [].concat(_toConsumableArray(selectedDates), [day])
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {});

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (e) {
      e.preventDefault();

      _this.dismiss();
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestClose", function () {
      _this.dismiss();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOk", function (e) {
      e.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state.selectedDates);
      }

      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dismiss", function () {
      if (_this.props.onDismiss && _this.state.open) {
        _this.props.onDismiss();
      }

      _this.setState({
        open: false
      });
    });

    var def = props.selected || new Date();
    _this.state = {
      view: _utils["default"].clone(def),
      selected: _utils["default"].clone(def),
      selectedDates: props.selected ? [_utils["default"].clone(def)] : [],
      minDate: null,
      maxDate: null,
      open: false
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react["default"].createElement("div", null, children ? _react["default"].cloneElement(_react["default"].Children.only(children), {
        onClick: this.toggleOpen,
        value: this.state.selectedDates.map(function (date) {
          return _utils["default"].toString(date);
        }).join(', '),
        readOnly: true
      }) : _react["default"].createElement("input", {
        type: "text",
        readOnly: true,
        value: this.state.selectedDates.map(function (date) {
          return _utils["default"].toString(date);
        }).join(', '),
        onClick: this.toggleOpen
      }), ' ', _react["default"].createElement(StyledDatePicker, {
        open: this.state.open
      }, _react["default"].createElement(_core.Dialog, null, _react["default"].createElement(DialogContent, null, _react["default"].createElement(_Calendar["default"], {
        visible: this.state.visible,
        view: this.state.view,
        selected: this.state.selected,
        selectedDates: this.state.selectedDates,
        onSelect: this.onSelect,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
        onCancel: this.handleCancel,
        onOk: this.handleOk
      })))));
    }
  }]);

  return DatePicker;
}(_react.Component);

var _default = DatePicker;
exports["default"] = _default;