"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addYears = addYears;
exports.cloneAsDate = cloneAsDate;
exports.cloneDate = cloneDate;
exports.dateTimeFormat = dateTimeFormat;
exports.defaultUtils = void 0;
exports.formatIso = formatIso;
exports.getDaysInMonth = getDaysInMonth;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getWeekArray = getWeekArray;
exports.getYear = getYear;
exports.isAfterDate = isAfterDate;
exports.isBeforeDate = isBeforeDate;
exports.isBetweenDates = isBetweenDates;
exports.isEqualDate = isEqualDate;
exports.monthDiff = monthDiff;
exports.setYear = setYear;
exports.yearDiff = yearDiff;
var _warning = _interopRequireDefault(require("warning"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function dateTimeFormat(locale, options) {
  (0, _warning["default"])(locale === 'en-US', "Material-UI: The ".concat(locale, " locale is not supported by the built-in DateTimeFormat.\n  Use the `DateTimeFormat` prop to supply an alternative implementation."));
  this.format = function (date) {
    if (options.month === 'short' && options.day === '2-digit' && options.year === 'numeric') {
      return "".concat(date.getDate(), " ").concat(monthList[date.getMonth()], " ").concat(date.getFullYear());
    } else if (options.year === 'numeric' && options.month === 'numeric' && options.day === 'numeric') {
      return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
    } else if (options.year === 'numeric' && options.month === 'long') {
      return "".concat(monthLongList[date.getMonth()], " ").concat(date.getFullYear());
    } else if (options.weekday === 'narrow') {
      return dayAbbreviation[date.getDay()];
    } else if (options.year === 'numeric') {
      return date.getFullYear().toString();
    } else if (options.day === 'numeric') {
      return date.getDate();
    }
    (0, _warning["default"])(false, 'Material-UI: Wrong usage of DateTimeFormat');
  };
}
function getYear(d) {
  return d.getFullYear();
}
function setYear(d, year) {
  var newDate = cloneDate(d);
  newDate.setFullYear(year);
  return newDate;
}
function addDays(d, days) {
  var newDate = cloneDate(d);
  newDate.setDate(d.getDate() + days);
  return newDate;
}
function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}
function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}
function cloneDate(d) {
  return new Date(d.getTime());
}
function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}
function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);
  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);
  return resultDate.getDate();
}
function getFirstDayOfMonth(d) {
  return (0, _moment["default"])(d).startOf('month').toDate();
}
function getWeekArray(d, firstDayOfWeek) {
  var dayArray = [];
  var daysInMonth = (0, _moment["default"])(d).daysInMonth();
  var weekArray = [];
  var week = [];
  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
  }
  var addWeek = function addWeek(week) {
    var emptyDays = 7 - week.length;
    for (var _i = 0; _i < emptyDays; ++_i) {
      week[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(week);
  };
  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });
  return weekArray;
}

// Convert date to ISO 8601 (YYYY-MM-DD) date string, accounting for current timezone
function formatIso(date) {
  return new Date("".concat(date.toDateString(), " 12:00:00 +0000")).toISOString().substring(0, 10);
}
function isEqualDate(d1, d2) {
  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}
function isBeforeDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);
  return date1.getTime() < date2.getTime();
}
function isAfterDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);
  return date1.getTime() > date2.getTime();
}
function isBetweenDates(dateToCheck, startDate, endDate) {
  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
}
function monthDiff(d1, d2) {
  var m;
  m = (d1.getFullYear() - d2.getFullYear()) * 12;
  m += d1.getMonth();
  m -= d2.getMonth();
  return m;
}
function yearDiff(d1, d2) {
  return ~~(monthDiff(d1, d2) / 12);
}
var defaultUtils = {
  getYear: getYear,
  setYear: setYear,
  addDays: addDays,
  addMonths: addMonths,
  addYears: addYears,
  getFirstDayOfMonth: getFirstDayOfMonth,
  getWeekArray: getWeekArray,
  monthDiff: monthDiff
};
exports.defaultUtils = defaultUtils;