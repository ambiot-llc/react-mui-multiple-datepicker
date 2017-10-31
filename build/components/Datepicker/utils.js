"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var DateUtilities = {
  pad: function pad(value, length) {
    while (value.length < length) {
      value = "0".concat(value);
    }

    return value;
  },
  clone: function clone(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  },
  toString: function toString(date) {
    return "".concat(date.getFullYear(), "-").concat(DateUtilities.pad((date.getMonth() + 1).toString(), 2), "-").concat(DateUtilities.pad(date.getDate().toString(), 2));
  },
  toDayOfMonthString: function toDayOfMonthString(date) {
    return DateUtilities.pad(date.getDate().toString());
  },
  toMonthAndYearString: function toMonthAndYearString(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return "".concat(months[date.getMonth()], " ").concat(date.getFullYear());
  },
  moveToDayOfWeek: function moveToDayOfWeek(date, dayOfWeek) {
    while (date.getDay() !== dayOfWeek) {
      date.setDate(date.getDate() - 1);
    }

    return date;
  },
  isSameDay: function isSameDay(first, second) {
    return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
  },
  dateIn: function dateIn(datesArray, date) {
    return datesArray.filter(function (day) {
      return !DateUtilities.isSameDay(day, date);
    }).length !== datesArray.length;
  },
  isBefore: function isBefore(first, second) {
    if (this.isSameDay(first, second)) return;
    return first.getTime() < second.getTime();
  },
  isAfter: function isAfter(first, second) {
    return first.getTime() > second.getTime();
  }
};
var _default = DateUtilities;
exports.default = _default;