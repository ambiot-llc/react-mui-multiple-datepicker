"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = _interopRequireDefault(require("./utils"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dialogPaper: {
      minHeight: 448,
      maxHeight: 448,
      display: 'flex'
    }
  };
});

function initState(selectedDates) {
  return {
    selectedDates: selectedDates ? _toConsumableArray(selectedDates) : [],
    minDate: null,
    maxDate: null
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedDates':
      return _objectSpread({}, state, {
        selectedDates: action.payload
      });

    default:
      return new Error('wrong action type in multiple date picker reducer');
  }
}

var DatePicker = function DatePicker(_ref) {
  var open = _ref.open,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      outerSelectedDates = _ref.selectedDates,
      _ref$cancelButtonText = _ref.cancelButtonText,
      cancelButtonText = _ref$cancelButtonText === void 0 ? 'Cancel' : _ref$cancelButtonText,
      _ref$submitButtonText = _ref.submitButtonText,
      submitButtonText = _ref$submitButtonText === void 0 ? 'Submit' : _ref$submitButtonText,
      _ref$selectedDatesTit = _ref.selectedDatesTitle,
      selectedDatesTitle = _ref$selectedDatesTit === void 0 ? 'Selected Dates' : _ref$selectedDatesTit;

  var _useReducer = (0, _react.useReducer)(reducer, outerSelectedDates, initState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      selectedDates = _useReducer2$.selectedDates,
      minDate = _useReducer2$.minDate,
      maxDate = _useReducer2$.maxDate,
      dispatch = _useReducer2[1];

  var classes = useStyles();
  var onSelect = (0, _react.useCallback)(function (day) {
    if (_utils["default"].dateIn(selectedDates, day)) {
      dispatch({
        type: 'setSelectedDates',
        payload: selectedDates.filter(function (date) {
          return !_utils["default"].isSameDay(date, day);
        })
      });
    } else {
      dispatch({
        type: 'setSelectedDates',
        payload: [].concat(_toConsumableArray(selectedDates), [day])
      });
    }
  }, [selectedDates, dispatch]);
  var onRemoveAtIndex = (0, _react.useCallback)(function (index) {
    var newDates = _toConsumableArray(selectedDates);

    if (index > -1) {
      newDates.splice(index, 1);
    }

    dispatch({
      type: 'setSelectedDates',
      payload: newDates
    });
  }, [selectedDates, dispatch]);
  var dismiss = (0, _react.useCallback)(function () {
    dispatch({
      type: 'setSelectedDates',
      payload: []
    });
    onCancel();
  }, [dispatch, onCancel]);
  var handleCancel = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    dismiss();
  }, [dismiss]);
  var handleOk = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    onSubmit(selectedDates);
  }, [onSubmit, selectedDates]);
  (0, _react.useEffect)(function () {
    if (open) {
      dispatch({
        type: 'setSelectedDates',
        payload: outerSelectedDates != null ? outerSelectedDates : []
      });
    }
  }, [open, outerSelectedDates]);
  console.log('selected dates', selectedDates);
  return _react["default"].createElement(_core.Dialog, {
    open: open,
    classes: {
      paper: classes.dialogPaper
    }
  }, _react["default"].createElement(_Calendar["default"], {
    selectedDates: selectedDates,
    onSelect: onSelect,
    onRemoveAtIndex: onRemoveAtIndex,
    minDate: minDate,
    maxDate: maxDate,
    onCancel: handleCancel,
    onOk: handleOk,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText,
    selectedDatesTitle: selectedDatesTitle
  }));
};

DatePicker.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onCancel: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  selectedDates: _propTypes["default"].array,
  cancelButtonText: _propTypes["default"].string,
  submitButtonText: _propTypes["default"].string,
  selectedDatesTitle: _propTypes["default"].string // class DatePicker extends Component {
  //   static propTypes = {
  //     open: PropTypes.bool.isRequired,
  //     onCancel: PropTypes.func.isRequired,
  //     onSubmit: PropTypes.func.isRequired
  //   }
  //   constructor (props) {
  //     super(props)
  //     const def = props.selected || new Date()
  //     this.state = {
  //       view: DateUtilities.clone(def),
  //       selected: DateUtilities.clone(def),
  //       selectedDates: props.selected ? [DateUtilities.clone(def)] : [],
  //       minDate: null,
  //       maxDate: null
  //     }
  //   }
  //   onSelect = day => {
  //     const { selectedDates } = this.state
  //     if (DateUtilities.dateIn(selectedDates, day)) {
  //       this.setState({
  //         selectedDates: selectedDates.filter(date => !DateUtilities.isSameDay(date, day))
  //       })
  //     } else {
  //       this.setState({ selectedDates: [...selectedDates, day] })
  //     }
  //   }
  //   onRemoveAtIndex = index => {
  //     const { selectedDates } = this.state
  //     const newDates = [...selectedDates]
  //     if (index > -1) {
  //       newDates.splice(index, 1)
  //     }
  //     this.setState({ selectedDates: newDates })
  //   }
  //   handleCancel = e => {
  //     e.preventDefault()
  //     this.dismiss()
  //   }
  //   handleRequestClose = () => {
  //     this.dismiss()
  //   }
  //   handleOk = e => {
  //     e.preventDefault()
  //     this.props.onSubmit(this.state.selectedDates)
  //   }
  //   dismiss = () => {
  //     this.setState({ selectedDates: [] })
  //     this.props.onCancel()
  //   }
  //   render () {
  //     const { open } = this.props
  //     return (
  //       <div>
  //         <Dialog open={open}>
  //           {/* <DialogContent> */}
  //           <Calendar
  //             view={this.state.view}
  //             selected={this.state.selected}
  //             selectedDates={this.state.selectedDates}
  //             onSelect={this.onSelect}
  //             onRemoveAtIndex={this.onRemoveAtIndex}
  //             minDate={this.props.minDate}
  //             maxDate={this.props.maxDate}
  //             onCancel={this.handleCancel}
  //             onOk={this.handleOk}
  //           />
  //           {/* </DialogContent> */}
  //         </Dialog>
  //       </div>
  //     )
  //   }
  // }

};
var _default = DatePicker;
exports["default"] = _default;