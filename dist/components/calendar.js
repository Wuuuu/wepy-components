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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      week: [{ week: "周日" }, { week: "周一" }, { week: "周二" }, { week: "周三" }, { week: "周四" }, { week: "周五" }, { week: "周六" }],
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
      currentDayData: [],
      unionuser: null
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "onLoad",
    value: function onLoad() {
      var self = this;

      var weeks_ch = ["日", "一", "二", "三", "四", "五", "六"];
      self.calEmptyGrid(self.currentYear, self.currentMonth);
      self.calDays(self.currentYear, self.currentMonth);
      var week = self.week;
      var thisMonthDays = new Date((0, _moment2.default)().format("YYYY"), (0, _moment2.default)().format("MM"), 0).getDate();
      var theWeekFirstDay = parseInt((0, _moment2.default)().startOf("week").format("DD")); // 获取本周的第一天
      for (var i = 0; i < 7; i++) {
        week[i].day = (0, _moment2.default)().dayOfYear(theWeekFirstDay + i).format("DD"); // 初始化week数组
        week[i].date = (0, _moment2.default)().dayOfYear(theWeekFirstDay + i).format("YYYY-MM-DD"); // 初始化week数组
      }
      self.weeks_ch = weeks_ch;
      self.week = week;
      self.$apply();
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var self = this;
      var currentDate = self.data.currentDate;

      var theWeekFirstDay = (0, _moment2.default)(currentDate).startOf("week").format("YYYY-MM-DD"); // 获取该日期所在周的第一天
      var theWeekLastDay = (0, _moment2.default)(currentDate).endOf("week").format("YYYY-MM-DD"); // 获取该日期所在周的最后一周
      self.querySchedule(theWeekFirstDay, theWeekLastDay);
    }
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
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJkYXRhIiwid2VlayIsImN1cnJlbnREYXRlIiwiZm9ybWF0IiwidGhpc01vbnRoRGF5cyIsImN1cnJlbnRNb250aCIsInBhcnNlSW50IiwiY3VycmVudFllYXIiLCJ5ZWFyIiwiY3VycmVudERheSIsImRheU9mWWVhciIsImRheXMiLCJ3ZWVrc19jaCIsImVtcHl0R3JpZHMiLCJoYXNFbXB0eUdyaWQiLCJtYXNrU3RhdHVzIiwidG9kYXlFbnRpdHkiLCJjdXJyZW50RGF5RGF0YSIsInVuaW9udXNlciIsIm1ldGhvZHMiLCJzZWxmIiwiY2FsRW1wdHlHcmlkIiwiY2FsRGF5cyIsIkRhdGUiLCJnZXREYXRlIiwidGhlV2Vla0ZpcnN0RGF5Iiwic3RhcnRPZiIsImkiLCJkYXkiLCJkYXRlIiwiJGFwcGx5IiwidGhlV2Vla0xhc3REYXkiLCJlbmRPZiIsInF1ZXJ5U2NoZWR1bGUiLCJtb250aCIsImZpcnN0RGF5T2ZXZWVrIiwiVVRDIiwiZ2V0RGF5IiwicHVzaCIsImNob29zZWQiLCJkYXlEYXRlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSyxHQUFRLEUsUUFDUkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSixFQUFFQSxNQUFNLElBQVIsRUFESSxFQUVKLEVBQUVBLE1BQU0sSUFBUixFQUZJLEVBR0osRUFBRUEsTUFBTSxJQUFSLEVBSEksRUFJSixFQUFFQSxNQUFNLElBQVIsRUFKSSxFQUtKLEVBQUVBLE1BQU0sSUFBUixFQUxJLEVBTUosRUFBRUEsTUFBTSxJQUFSLEVBTkksRUFPSixFQUFFQSxNQUFNLElBQVIsRUFQSSxDQUREO0FBVUxDLG1CQUFhLHdCQUFTQyxNQUFULENBQWdCLFlBQWhCLENBVlIsRUFVdUM7QUFDNUNDLHFCQUFlLEVBWFYsRUFXYztBQUNuQkMs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IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIHdlZWs6IFtcclxuICAgICAgeyB3ZWVrOiBcIuWRqOaXpVwiIH0sXHJcbiAgICAgIHsgd2VlazogXCLlkajkuIBcIiB9LFxyXG4gICAgICB7IHdlZWs6IFwi5ZGo5LqMXCIgfSxcclxuICAgICAgeyB3ZWVrOiBcIuWRqOS4iVwiIH0sXHJcbiAgICAgIHsgd2VlazogXCLlkajlm5tcIiB9LFxyXG4gICAgICB7IHdlZWs6IFwi5ZGo5LqUXCIgfSxcclxuICAgICAgeyB3ZWVrOiBcIuWRqOWFrVwiIH1cclxuICAgIF0sXHJcbiAgICBjdXJyZW50RGF0ZTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgLy8g6I635Y+W5b2T5YmN5pel5pyfIFlZWVktTU0tRERcclxuICAgIHRoaXNNb250aERheXM6IFtdLCAvLyDojrflj5blvZPliY3mnIjkuIDlhbHlpJrlsJHlpKlcclxuICAgIGN1cnJlbnRNb250aDogcGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KFwiTU1cIikpLCAvLyDlvZPliY3mnIjku71cclxuICAgIGN1cnJlbnRZZWFyOiBtb21lbnQoKS55ZWFyKCksIC8vIOW9k+WJjeW5tOS7vVxyXG4gICAgY3VycmVudERheTogbW9tZW50KCkuZGF5T2ZZZWFyKCksIC8vIOW9k+WJjeWkqVxyXG4gICAgZGF5czogW10sIC8vIOavj+S4quaciOeahOavj+WkqeaVsOe7hFxyXG4gICAgd2Vla3NfY2g6IFtdLFxyXG4gICAgZW1weXRHcmlkczogW10sXHJcbiAgICBoYXNFbXB0eUdyaWQ6IGZhbHNlLFxyXG4gICAgbWFza1N0YXR1czogXCJoaWRlXCIsXHJcbiAgICB0b2RheUVudGl0eTogW10sXHJcbiAgICBjdXJyZW50RGF5RGF0YTogW10sXHJcbiAgICB1bmlvbnVzZXI6IG51bGxcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7fTtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgY29uc3Qgd2Vla3NfY2ggPSBbXCLml6VcIiwgXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIl07XHJcbiAgICBzZWxmLmNhbEVtcHR5R3JpZChzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCk7XHJcbiAgICBzZWxmLmNhbERheXMoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG4gICAgbGV0IHdlZWsgPSBzZWxmLndlZWs7XHJcbiAgICBjb25zdCB0aGlzTW9udGhEYXlzID0gbmV3IERhdGUoXHJcbiAgICAgIG1vbWVudCgpLmZvcm1hdChcIllZWVlcIiksXHJcbiAgICAgIG1vbWVudCgpLmZvcm1hdChcIk1NXCIpLFxyXG4gICAgICAwXHJcbiAgICApLmdldERhdGUoKTtcclxuICAgIGNvbnN0IHRoZVdlZWtGaXJzdERheSA9IHBhcnNlSW50KFxyXG4gICAgICBtb21lbnQoKVxyXG4gICAgICAgIC5zdGFydE9mKFwid2Vla1wiKVxyXG4gICAgICAgIC5mb3JtYXQoXCJERFwiKVxyXG4gICAgKTsgLy8g6I635Y+W5pys5ZGo55qE56ys5LiA5aSpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICB3ZWVrW2ldLmRheSA9IG1vbWVudCgpXHJcbiAgICAgICAgLmRheU9mWWVhcih0aGVXZWVrRmlyc3REYXkgKyBpKVxyXG4gICAgICAgIC5mb3JtYXQoXCJERFwiKTsgLy8g5Yid5aeL5YyWd2Vla+aVsOe7hFxyXG4gICAgICB3ZWVrW2ldLmRhdGUgPSBtb21lbnQoKVxyXG4gICAgICAgIC5kYXlPZlllYXIodGhlV2Vla0ZpcnN0RGF5ICsgaSlcclxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTsgLy8g5Yid5aeL5YyWd2Vla+aVsOe7hFxyXG4gICAgfVxyXG4gICAgc2VsZi53ZWVrc19jaCA9IHdlZWtzX2NoO1xyXG4gICAgc2VsZi53ZWVrID0gd2VlaztcclxuICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgfVxyXG4gIG9uU2hvdygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IHsgY3VycmVudERhdGUgfSA9IHNlbGYuZGF0YTtcclxuICAgIGNvbnN0IHRoZVdlZWtGaXJzdERheSA9IG1vbWVudChjdXJyZW50RGF0ZSlcclxuICAgICAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXHJcbiAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpOyAvLyDojrflj5bor6Xml6XmnJ/miYDlnKjlkajnmoTnrKzkuIDlpKlcclxuICAgIGNvbnN0IHRoZVdlZWtMYXN0RGF5ID0gbW9tZW50KGN1cnJlbnREYXRlKVxyXG4gICAgICAuZW5kT2YoXCJ3ZWVrXCIpXHJcbiAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpOyAvLyDojrflj5bor6Xml6XmnJ/miYDlnKjlkajnmoTmnIDlkI7kuIDlkahcclxuICAgIHNlbGYucXVlcnlTY2hlZHVsZSh0aGVXZWVrRmlyc3REYXksIHRoZVdlZWtMYXN0RGF5KTtcclxuICB9XHJcbiAgLy8g6K6h566X5q+P5Liq5pyI55qE6L2u56m65pWwXHJcbiAgY2FsRW1wdHlHcmlkKHllYXIsIG1vbnRoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIDEpKS5nZXREYXkoKTtcclxuICAgIGxldCBlbXB5dEdyaWRzID0gW107XHJcbiAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3REYXlPZldlZWs7IGkrKykge1xyXG4gICAgICAgIGVtcHl0R3JpZHMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLmVtcHl0R3JpZHMgPSBlbXB5dEdyaWRzO1xyXG4gICAgICBzZWxmLmhhc0VtcHR5R3JpZCA9IHRydWU7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLmVtcHl0R3JpZHMgPSBbXTtcclxuICAgICAgc2VsZi5oYXNFbXB0eUdyaWQgPSBmYWxzZTtcclxuICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGDmr4/kuKrmnIjnqbrmoLzmlbA6JHtzZWxmLmVtcHl0R3JpZHN9YClcclxuICB9XHJcbiAgLy8g6I635Y+W5b2T5pyI55qE5aSp5pWwXHJcbiAgY2FsRGF5cyh5ZWFyLCBtb250aCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgeyBjdXJyZW50RGF0ZSB9ID0gc2VsZi5kYXRhO1xyXG4gICAgbGV0IGRheXMgPSBbXTtcclxuICAgIGNvbnN0IHRoaXNNb250aERheXMgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpOyAvLyDojrflj5blvZPliY3mnIjnmoTlpKnmlbAoZWc6IDHmnIggMzHlpKkpXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzTW9udGhEYXlzOyBpKyspIHtcclxuICAgICAgbGV0IGNob29zZWQgPVxyXG4gICAgICAgIGN1cnJlbnREYXRlID09XHJcbiAgICAgICAgbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCBcIllZWVktTU0tRFwiKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgIGRheXMucHVzaCh7XHJcbiAgICAgICAgZGF5RGF0ZTogbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCBcIllZWVktTU0tRFwiKS5mb3JtYXQoXHJcbiAgICAgICAgICBcIllZWVktTU0tRERcIlxyXG4gICAgICAgICksIC8vIOavj+WkqeeahOWujOaVtOaXpeacn1xyXG4gICAgICAgIGRheTogaSwgLy8g5q+P5aSp55qEIOaXpVxyXG4gICAgICAgIGNob29zZWQgLy8g5piv5ZCm5piv5b2T5aSp77yM5aaC5p6c5piv5YiZ5Li6dHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNlbGYuZGF5cyA9IGRheXM7XHJcbiAgICBzZWxmLiRhcHBseSgpO1xyXG4gIH1cclxufVxyXG4iXX0=