"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_wepy$component) {
  _inherits(Calendar, _wepy$component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      monthOfDays: {
        type: Array,
        default: []
      }
    }, _this.data = {
      currentDate: (0, _moment2.default)().format("YYYY-MM-DD"), // 获取当前日期 YYYY-MM-DD
      thisMonthDays: [], // 获取当前月一共多少天
      currentMonth: parseInt((0, _moment2.default)().format("MM")), // 当前月份
      currentYear: (0, _moment2.default)().year(), // 当前年份
      currentDay: (0, _moment2.default)().dayOfYear(), // 当前天
      days: [], // 每个月的每天数组
      weeks_ch: [],
      empytGrids: [],
      hasEmptyGrid: false,
      maskStatus: "hide",
      todayEntity: [],
      currentDayData: []
    }, _this.methods = {
      handleCalendar: function handleCalendar(e) {
        var self = this;
        var action = e.currentTarget.dataset.action;
        var currentDate = self.data.currentDate;

        if (action == "prev") {
          var prevMonth = self.currentMonth - 1;
          var prevYear = self.currentYear;
          console.log("prev:" + prevYear + "-" + prevMonth);
          if (prevMonth < 1) {
            prevYear = self.currentYear - 1;
            prevMonth = 12;
          }
          self.calDays(prevYear, prevMonth);
          self.calEmptyGrid(prevYear, prevMonth);

          self.currentYear = prevYear;
          self.currentDate = (0, _moment2.default)(currentDate).subtract(1, "months").format("YYYY-MM-DD");
          self.currentMonth = prevMonth;
          self.$apply();
          console.log("\u5F53\u524D\u65E5\u671F\uFF1A" + currentDate);
        } else {
          var nextMonth = self.currentMonth + 1;
          var nextYear = self.currentYear;
          if (nextMonth > 12) {
            nextYear = self.currentYear + 1;
            nextMonth = 1;
          }
          self.calDays(nextYear, nextMonth);
          self.calEmptyGrid(nextYear, nextMonth);

          self.currentYear = nextYear;
          self.currentMonth = nextMonth;
          self.currentDate = (0, _moment2.default)(currentDate).add(1, "months").format("YYYY-MM-DD");
          self.$apply();
          console.log("\u5F53\u524D\u65E5\u671F\uFF1A" + currentDate);
        }
        // console.log(action)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "onLoad",
    value: function onLoad() {
      var self = this;

      var weeks_ch = ["日", "一", "二", "三", "四", "五", "六"];
      self.calEmptyGrid(self.currentYear, self.currentMonth);
      self.calDays(self.currentYear, self.currentMonth);
      var thisMonthDays = new Date((0, _moment2.default)().format("YYYY"), (0, _moment2.default)().format("MM"), 0).getDate();
      self.weeks_ch = weeks_ch;
      self.$apply();
    }
  }, {
    key: "onShow",
    value: function onShow() {}
    // 计算每个月的轮空数

  }, {
    key: "calEmptyGrid",
    value: function calEmptyGrid(year, month) {
      var self = this;
      var firstDayOfWeek = new Date(Date.UTC(year, month - 1, 1)).getDay();
      var empytGrids = [];
      if (firstDayOfWeek > 0) {
        for (var i = 0; i < firstDayOfWeek; i++) {
          empytGrids.push(i);
        }
        self.empytGrids = empytGrids;
        self.hasEmptyGrid = true;
        self.$apply();
      } else {
        self.empytGrids = [];
        self.hasEmptyGrid = false;
        self.$apply();
      }
      // console.log(`每个月空格数:${self.empytGrids}`)
    }
    // 获取当月的天数

  }, {
    key: "calDays",
    value: function calDays(year, month) {
      var self = this;
      var currentDate = self.data.currentDate;

      var days = [];
      var thisMonthDays = new Date(year, month, 0).getDate(); // 获取当前月的天数(eg: 1月 31天)
      for (var i = 1; i <= thisMonthDays; i++) {
        var choosed = currentDate == (0, _moment2.default)(year + "-" + month + "-" + i, "YYYY-MM-D").format("YYYY-MM-DD") ? true : false;
        days.push({
          dayDate: (0, _moment2.default)(year + "-" + month + "-" + i, "YYYY-MM-D").format("YYYY-MM-DD"), // 每天的完整日期
          day: i, // 每天的 日
          choosed: choosed // 是否是当天，如果是则为true
        });
      }
      self.days = days;
      self.$apply();
      console.log("days", self.days);
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJtb250aE9mRGF5cyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ0aGlzTW9udGhEYXlzIiwiY3VycmVudE1vbnRoIiwicGFyc2VJbnQiLCJjdXJyZW50WWVhciIsInllYXIiLCJjdXJyZW50RGF5IiwiZGF5T2ZZZWFyIiwiZGF5cyIsIndlZWtzX2NoIiwiZW1weXRHcmlkcyIsImhhc0VtcHR5R3JpZCIsIm1hc2tTdGF0dXMiLCJ0b2RheUVudGl0eSIsImN1cnJlbnREYXlEYXRhIiwibWV0aG9kcyIsImhhbmRsZUNhbGVuZGFyIiwiZSIsInNlbGYiLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInByZXZNb250aCIsInByZXZZZWFyIiwiY29uc29sZSIsImxvZyIsImNhbERheXMiLCJjYWxFbXB0eUdyaWQiLCJzdWJ0cmFjdCIsIiRhcHBseSIsIm5leHRNb250aCIsIm5leHRZZWFyIiwiYWRkIiwiRGF0ZSIsImdldERhdGUiLCJtb250aCIsImZpcnN0RGF5T2ZXZWVrIiwiVVRDIiwiZ2V0RGF5IiwiaSIsInB1c2giLCJjaG9vc2VkIiwiZGF5RGF0ZSIsImRheSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYTtBQUNYQyxjQUFNQyxLQURLO0FBRVhDLGlCQUFTO0FBRkU7QUFEUCxLLFFBTVJDLEksR0FBTztBQUNMQyxtQkFBYSx3QkFBU0MsTUFBVCxDQUFnQixZQUFoQixDQURSLEVBQ3VDO0FBQzVDQyxxQkFBZSxFQUZWLEVBRWM7QUFDbkJDLG9CQUFjQyxTQUFTLHdCQUFTSCxNQUFULENBQWdCLElBQWhCLENBQVQsQ0FIVCxFQUcwQztBQUMvQ0ksbUJBQWEsd0JB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V0FBaEMsRUFBNkN2QyxNQUE3QyxDQUFvRCxZQUFwRCxDQURBLEdBRUksSUFGSixHQUdJLEtBSk47QUFLQVEsYUFBS2dDLElBQUwsQ0FBVTtBQUNSRSxtQkFBUyxzQkFBVXJDLElBQVYsU0FBa0I4QixLQUFsQixTQUEyQkksQ0FBM0IsRUFBZ0MsV0FBaEMsRUFBNkN2QyxNQUE3QyxDQUNQLFlBRE8sQ0FERCxFQUdMO0FBQ0gyQyxlQUFLSixDQUpHLEVBSUE7QUFDUkUsMEJBTFEsQ0FLQTtBQUxBLFNBQVY7QUFPRDtBQUNEdkIsV0FBS1YsSUFBTCxHQUFZQSxJQUFaO0FBQ0FVLFdBQUtXLE1BQUw7QUFDQUwsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JQLEtBQUtWLElBQXpCO0FBQ0Q7Ozs7RUExSG1DLGVBQUtvQyxTOztrQkFBdEJwRCxRIiwiZmlsZSI6ImNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBtb250aE9mRGF5czoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW11cclxuICAgIH1cclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBjdXJyZW50RGF0ZTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgLy8g6I635Y+W5b2T5YmN5pel5pyfIFlZWVktTU0tRERcclxuICAgIHRoaXNNb250aERheXM6IFtdLCAvLyDojrflj5blvZPliY3mnIjkuIDlhbHlpJrlsJHlpKlcclxuICAgIGN1cnJlbnRNb250aDogcGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KFwiTU1cIikpLCAvLyDlvZPliY3mnIjku71cclxuICAgIGN1cnJlbnRZZWFyOiBtb21lbnQoKS55ZWFyKCksIC8vIOW9k+WJjeW5tOS7vVxyXG4gICAgY3VycmVudERheTogbW9tZW50KCkuZGF5T2ZZZWFyKCksIC8vIOW9k+WJjeWkqVxyXG4gICAgZGF5czogW10sIC8vIOavj+S4quaciOeahOavj+WkqeaVsOe7hFxyXG4gICAgd2Vla3NfY2g6IFtdLFxyXG4gICAgZW1weXRHcmlkczogW10sXHJcbiAgICBoYXNFbXB0eUdyaWQ6IGZhbHNlLFxyXG4gICAgbWFza1N0YXR1czogXCJoaWRlXCIsXHJcbiAgICB0b2RheUVudGl0eTogW10sXHJcbiAgICBjdXJyZW50RGF5RGF0YTogW11cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBoYW5kbGVDYWxlbmRhcihlKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSBzZWxmLmRhdGE7XHJcbiAgICAgIGlmIChhY3Rpb24gPT0gXCJwcmV2XCIpIHtcclxuICAgICAgICBsZXQgcHJldk1vbnRoID0gc2VsZi5jdXJyZW50TW9udGggLSAxO1xyXG4gICAgICAgIGxldCBwcmV2WWVhciA9IHNlbGYuY3VycmVudFllYXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHByZXY6JHtwcmV2WWVhcn0tJHtwcmV2TW9udGh9YCk7XHJcbiAgICAgICAgaWYgKHByZXZNb250aCA8IDEpIHtcclxuICAgICAgICAgIHByZXZZZWFyID0gc2VsZi5jdXJyZW50WWVhciAtIDE7XHJcbiAgICAgICAgICBwcmV2TW9udGggPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5jYWxEYXlzKHByZXZZZWFyLCBwcmV2TW9udGgpO1xyXG4gICAgICAgIHNlbGYuY2FsRW1wdHlHcmlkKHByZXZZZWFyLCBwcmV2TW9udGgpO1xyXG5cclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gcHJldlllYXI7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50RGF0ZSA9IG1vbWVudChjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcIm1vbnRoc1wiKVxyXG4gICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBwcmV2TW9udGg7XHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg5b2T5YmN5pel5pyf77yaJHtjdXJyZW50RGF0ZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbmV4dE1vbnRoID0gc2VsZi5jdXJyZW50TW9udGggKyAxO1xyXG4gICAgICAgIGxldCBuZXh0WWVhciA9IHNlbGYuY3VycmVudFllYXI7XHJcbiAgICAgICAgaWYgKG5leHRNb250aCA+IDEyKSB7XHJcbiAgICAgICAgICBuZXh0WWVhciA9IHNlbGYuY3VycmVudFllYXIgKyAxO1xyXG4gICAgICAgICAgbmV4dE1vbnRoID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5jYWxEYXlzKG5leHRZZWFyLCBuZXh0TW9udGgpO1xyXG4gICAgICAgIHNlbGYuY2FsRW1wdHlHcmlkKG5leHRZZWFyLCBuZXh0TW9udGgpO1xyXG5cclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV4dFllYXI7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBuZXh0TW9udGg7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50RGF0ZSA9IG1vbWVudChjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIC5hZGQoMSwgXCJtb250aHNcIilcclxuICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYOW9k+WJjeaXpeacn++8miR7Y3VycmVudERhdGV9YCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHdlZWtzX2NoID0gW1wi5pelXCIsIFwi5LiAXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCJdO1xyXG4gICAgc2VsZi5jYWxFbXB0eUdyaWQoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgc2VsZi5jYWxEYXlzKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgIGNvbnN0IHRoaXNNb250aERheXMgPSBuZXcgRGF0ZShcclxuICAgICAgbW9tZW50KCkuZm9ybWF0KFwiWVlZWVwiKSxcclxuICAgICAgbW9tZW50KCkuZm9ybWF0KFwiTU1cIiksXHJcbiAgICAgIDBcclxuICAgICkuZ2V0RGF0ZSgpO1xyXG4gICAgc2VsZi53ZWVrc19jaCA9IHdlZWtzX2NoO1xyXG4gICAgc2VsZi4kYXBwbHkoKTtcclxuICB9XHJcbiAgb25TaG93KCkge31cclxuICAvLyDorqHnrpfmr4/kuKrmnIjnmoTova7nqbrmlbBcclxuICBjYWxFbXB0eUdyaWQoeWVhciwgbW9udGgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBmaXJzdERheU9mV2VlayA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgMSkpLmdldERheSgpO1xyXG4gICAgbGV0IGVtcHl0R3JpZHMgPSBbXTtcclxuICAgIGlmIChmaXJzdERheU9mV2VlayA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXJzdERheU9mV2VlazsgaSsrKSB7XHJcbiAgICAgICAgZW1weXRHcmlkcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYuZW1weXRHcmlkcyA9IGVtcHl0R3JpZHM7XHJcbiAgICAgIHNlbGYuaGFzRW1wdHlHcmlkID0gdHJ1ZTtcclxuICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGYuZW1weXRHcmlkcyA9IFtdO1xyXG4gICAgICBzZWxmLmhhc0VtcHR5R3JpZCA9IGZhbHNlO1xyXG4gICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coYOavj+S4quaciOepuuagvOaVsDoke3NlbGYuZW1weXRHcmlkc31gKVxyXG4gIH1cclxuICAvLyDojrflj5blvZPmnIjnmoTlpKnmlbBcclxuICBjYWxEYXlzKHllYXIsIG1vbnRoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSBzZWxmLmRhdGE7XHJcbiAgICBsZXQgZGF5cyA9IFtdO1xyXG4gICAgY29uc3QgdGhpc01vbnRoRGF5cyA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7IC8vIOiOt+WPluW9k+WJjeaciOeahOWkqeaVsChlZzogMeaciCAzMeWkqSlcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXNNb250aERheXM7IGkrKykge1xyXG4gICAgICBsZXQgY2hvb3NlZCA9XHJcbiAgICAgICAgY3VycmVudERhdGUgPT1cclxuICAgICAgICBtb21lbnQoYCR7eWVhcn0tJHttb250aH0tJHtpfWAsIFwiWVlZWS1NTS1EXCIpLmZvcm1hdChcIllZWVktTU0tRERcIilcclxuICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgZGF5cy5wdXNoKHtcclxuICAgICAgICBkYXlEYXRlOiBtb21lbnQoYCR7eWVhcn0tJHttb250aH0tJHtpfWAsIFwiWVlZWS1NTS1EXCIpLmZvcm1hdChcclxuICAgICAgICAgIFwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgKSwgLy8g5q+P5aSp55qE5a6M5pW05pel5pyfXHJcbiAgICAgICAgZGF5OiBpLCAvLyDmr4/lpKnnmoQg5pelXHJcbiAgICAgICAgY2hvb3NlZCAvLyDmmK/lkKbmmK/lvZPlpKnvvIzlpoLmnpzmmK/liJnkuLp0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VsZi5kYXlzID0gZGF5cztcclxuICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRheXNcIiwgc2VsZi5kYXlzKTtcclxuICB9XHJcbn1cclxuIl19