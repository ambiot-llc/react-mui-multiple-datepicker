"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = _interopRequireDefault(require("./utils"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  box-sizing: border-box;\n  z-index: 1500;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  padding: 16px 0px 0px;\n  ", ";\n\n  @media (max-width: 400px) {\n    padding: 0 4px;\n  }\n"], ["\n  position: fixed;\n  box-sizing: border-box;\n  z-index: 1500;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  padding: 16px 0px 0px;\n  ", ";\n\n  @media (max-width: 400px) {\n    padding: 0 4px;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.54);\n  will-change: opacity;\n  transform: translateZ(0);\n  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  z-index: 1400;\n"], ["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.54);\n  will-change: opacity;\n  transform: translateZ(0);\n  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  z-index: 1400;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: relative;\n  width: 100%;\n  max-width: 479px;\n  margin: 0px auto;\n  z-index: 1500;\n  opacity: 1;\n  transform: translate(0px, 64px);\n"], ["\n  box-sizing: border-box;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: relative;\n  width: 100%;\n  max-width: 479px;\n  margin: 0px auto;\n  z-index: 1500;\n  opacity: 1;\n  transform: translate(0px, 64px);\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.87);\n  background-color: rgb(255, 255, 255);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  border-radius: 2px;\n"], ["\n  color: rgba(0, 0, 0, 0.87);\n  background-color: rgb(255, 255, 255);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  border-radius: 2px;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0px;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  border-top: none;\n  border-bottom: none;\n"], ["\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0px;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  border-top: none;\n  border-bottom: none;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDatePicker = _styledComponents.default.div(_templateObject, function (_ref) {
  var open = _ref.open;
  return !open && 'display: none';
});

var Backdrop = _styledComponents.default.div(_templateObject2);

var Dialog = _styledComponents.default.div(_templateObject3);

var DialogInnerWrap = _styledComponents.default.div(_templateObject4);

var DialogContent = _styledComponents.default.div(_templateObject5);

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.onSelect = function (day) {
      var selectedDates = _this.state.selectedDates;

      if (_utils.default.dateIn(selectedDates, day)) {
        _this.setState({
          selectedDates: selectedDates.filter(function (date) {
            return !_utils.default.isSameDay(date, day);
          })
        });
      } else {
        _this.setState({
          selectedDates: [].concat(_toConsumableArray(selectedDates), [day])
        });
      }
    };

    _this.onSubmit = function () {};

    _this.toggleOpen = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.handleCancel = function (e) {
      e.preventDefault();

      _this.dismiss();
    };

    _this.handleRequestClose = function () {
      _this.dismiss();
    };

    _this.handleOk = function (e) {
      e.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state.selectedDates);
      }

      _this.setState({
        open: false
      });
    };

    _this.dismiss = function () {
      if (_this.props.onDismiss && _this.state.open) {
        _this.props.onDismiss();
      }

      _this.setState({
        open: false
      });
    };

    var def = props.selected || new Date();
    _this.state = {
      view: _utils.default.clone(def),
      selected: _utils.default.clone(def),
      selectedDates: props.selected ? [_utils.default.clone(def)] : [],
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
      return _react.default.createElement("div", null, children ? _react.default.cloneElement(_react.default.Children.only(children), {
        onClick: this.toggleOpen,
        value: this.state.selectedDates.map(function (date) {
          return _utils.default.toString(date);
        }).join(', '),
        readOnly: true
      }) : _react.default.createElement("input", {
        type: "text",
        readOnly: true,
        value: this.state.selectedDates.map(function (date) {
          return _utils.default.toString(date);
        }).join(', '),
        onClick: this.toggleOpen
      }), ' ', _react.default.createElement(StyledDatePicker, {
        open: this.state.open
      }, _react.default.createElement(Dialog, null, _react.default.createElement(DialogInnerWrap, null, _react.default.createElement(DialogContent, null, _react.default.createElement(_Calendar.default, {
        visible: this.state.visible,
        view: this.state.view,
        selected: this.state.selected,
        selectedDates: this.state.selectedDates,
        onSelect: this.onSelect,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
        onCancel: this.handleCancel,
        onOk: this.handleOk
      })))), _react.default.createElement(Backdrop, null)));
    }
  }]);

  return DatePicker;
}(_react.Component);

var _default = DatePicker;
exports.default = _default;