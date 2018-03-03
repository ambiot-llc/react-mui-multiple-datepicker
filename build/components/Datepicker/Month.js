"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Week = _interopRequireDefault(require("./Week"));

var _dateUtils = require("./dateUtils");

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: 400;\n  height: 214px;\n  line-height: 1.25;\n  position: relative;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: 400;\n  height: 214px;\n  line-height: 1.25;\n  position: relative;\n  text-align: center;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MonthWrapper = _styledComponents.default.div(_templateObject);

var Weeks =
/*#__PURE__*/
function (_Component) {
  _inherits(Weeks, _Component);

  function Weeks() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Weeks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Weeks.__proto__ || Object.getPrototypeOf(Weeks)).call.apply(_ref, [this].concat(args))), _this.renderWeeks = function () {
      var weekArray = _dateUtils.defaultUtils.getWeekArray(_this.props.displayDate, 1);

      return weekArray.map(function (s, i) {
        return _react.default.createElement(_Week.default, {
          key: i,
          week: s,
          selected: _this.props.selected,
          selectedDates: _this.props.selectedDates,
          onSelect: _this.props.onSelect,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate
        });
      }, _this);
    }, _temp));
  }

  _createClass(Weeks, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(MonthWrapper, null, this.renderWeeks(this.props.displayDate));
    }
  }]);

  return Weeks;
}(_react.Component);

var _default = Weeks;
exports.default = _default;