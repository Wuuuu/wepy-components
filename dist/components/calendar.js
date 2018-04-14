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
      },
      handleDayItem: function handleDayItem(params) {
        console.log('onClick事件', params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJtb250aE9mRGF5cyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ0aGlzTW9udGhEYXlzIiwiY3VycmVudE1vbnRoIiwicGFyc2VJbnQiLCJjdXJyZW50WWVhciIsInllYXIiLCJjdXJyZW50RGF5IiwiZGF5T2ZZZWFyIiwiZGF5cyIsIndlZWtzX2NoIiwiZW1weXRHcmlkcyIsImhhc0VtcHR5R3JpZCIsIm1hc2tTdGF0dXMiLCJ0b2RheUVudGl0eSIsImN1cnJlbnREYXlEYXRhIiwibWV0aG9kcyIsImhhbmRsZUNhbGVuZGFyIiwiZSIsInNlbGYiLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInByZXZNb250aCIsInByZXZZZWFyIiwiY29uc29sZSIsImxvZyIsImNhbERheXMiLCJjYWxFbXB0eUdyaWQiLCJzdWJ0cmFjdCIsIiRhcHBseSIsIm5leHRNb250aCIsIm5leHRZZWFyIiwiYWRkIiwiaGFuZGxlRGF5SXRlbSIsInBhcmFtcyIsIkRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJmaXJzdERheU9mV2VlayIsIlVUQyIsImdldERheSIsImkiLCJwdXNoIiwiY2hvb3NlZCIsImRheURhdGUiLCJkYXkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWE7QUFDWEMsY0FBTUMsS0FESztBQUVYQyxpQkFBUztBQUZFO0FBRFAsSyxRQU1SQyxJLEdBQU87QUFDTEMsbUJBQWEsd0JBQVNDLE1BQVQsQ0FBZ0IsWUFBaEIsQ0FEUixFQUN1QztBQUM1Q0MscUJBQWUsRUFGVixFQUVjO0FBQ25CQyxvQkFBY0MsU0FBUyx3QkFBU0gsTUFBVCxDQUFnQixJQUFoQixDQUFULENB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QUFiLEVBQWdCQSxLQUFLeEMsYUFBckIsRUFBb0N3QyxHQUFwQyxFQUF5QztBQUN2QyxZQUFJRSxVQUNGNUMsZUFDQSxzQkFBVU0sSUFBVixTQUFrQmdDLEtBQWxCLFNBQTJCSSxDQUEzQixFQUFnQyxXQUFoQyxFQUE2Q3pDLE1BQTdDLENBQW9ELFlBQXBELENBREEsR0FFSSxJQUZKLEdBR0ksS0FKTjtBQUtBUSxhQUFLa0MsSUFBTCxDQUFVO0FBQ1JFLG1CQUFTLHNCQUFVdkMsSUFBVixTQUFrQmdDLEtBQWxCLFNBQTJCSSxDQUEzQixFQUFnQyxXQUFoQyxFQUE2Q3pDLE1BQTdDLENBQ1AsWUFETyxDQURELEVBR0w7QUFDSDZDLGVBQUtKLENBSkcsRUFJQTtBQUNSRSwwQkFMUSxDQUtBO0FBTEEsU0FBVjtBQU9EO0FBQ0R6QixXQUFLVixJQUFMLEdBQVlBLElBQVo7QUFDQVUsV0FBS1csTUFBTDtBQUNBTCxjQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQlAsS0FBS1YsSUFBekI7QUFDRDs7OztFQTdIbUMsZUFBS3NDLFM7O2tCQUF0QnRELFEiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIG1vbnRoT2ZEYXlzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0OiBbXVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGN1cnJlbnREYXRlOiBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLCAvLyDojrflj5blvZPliY3ml6XmnJ8gWVlZWS1NTS1ERFxyXG4gICAgdGhpc01vbnRoRGF5czogW10sIC8vIOiOt+WPluW9k+WJjeaciOS4gOWFseWkmuWwkeWkqVxyXG4gICAgY3VycmVudE1vbnRoOiBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoXCJNTVwiKSksIC8vIOW9k+WJjeaciOS7vVxyXG4gICAgY3VycmVudFllYXI6IG1vbWVudCgpLnllYXIoKSwgLy8g5b2T5YmN5bm05Lu9XHJcbiAgICBjdXJyZW50RGF5OiBtb21lbnQoKS5kYXlPZlllYXIoKSwgLy8g5b2T5YmN5aSpXHJcbiAgICBkYXlzOiBbXSwgLy8g5q+P5Liq5pyI55qE5q+P5aSp5pWw57uEXHJcbiAgICB3ZWVrc19jaDogW10sXHJcbiAgICBlbXB5dEdyaWRzOiBbXSxcclxuICAgIGhhc0VtcHR5R3JpZDogZmFsc2UsXHJcbiAgICBtYXNrU3RhdHVzOiBcImhpZGVcIixcclxuICAgIHRvZGF5RW50aXR5OiBbXSxcclxuICAgIGN1cnJlbnREYXlEYXRhOiBbXVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZUNhbGVuZGFyKGUpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBjb25zdCB7IGFjdGlvbiB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgIGNvbnN0IHsgY3VycmVudERhdGUgfSA9IHNlbGYuZGF0YTtcclxuICAgICAgaWYgKGFjdGlvbiA9PSBcInByZXZcIikge1xyXG4gICAgICAgIGxldCBwcmV2TW9udGggPSBzZWxmLmN1cnJlbnRNb250aCAtIDE7XHJcbiAgICAgICAgbGV0IHByZXZZZWFyID0gc2VsZi5jdXJyZW50WWVhcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcHJldjoke3ByZXZZZWFyfS0ke3ByZXZNb250aH1gKTtcclxuICAgICAgICBpZiAocHJldk1vbnRoIDwgMSkge1xyXG4gICAgICAgICAgcHJldlllYXIgPSBzZWxmLmN1cnJlbnRZZWFyIC0gMTtcclxuICAgICAgICAgIHByZXZNb250aCA9IDEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmNhbERheXMocHJldlllYXIsIHByZXZNb250aCk7XHJcbiAgICAgICAgc2VsZi5jYWxFbXB0eUdyaWQocHJldlllYXIsIHByZXZNb250aCk7XHJcblxyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBwcmV2WWVhcjtcclxuICAgICAgICBzZWxmLmN1cnJlbnREYXRlID0gbW9tZW50KGN1cnJlbnREYXRlKVxyXG4gICAgICAgICAgLnN1YnRyYWN0KDEsIFwibW9udGhzXCIpXHJcbiAgICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHByZXZNb250aDtcclxuICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDlvZPliY3ml6XmnJ/vvJoke2N1cnJlbnREYXRlfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXh0TW9udGggPSBzZWxmLmN1cnJlbnRNb250aCArIDE7XHJcbiAgICAgICAgbGV0IG5leHRZZWFyID0gc2VsZi5jdXJyZW50WWVhcjtcclxuICAgICAgICBpZiAobmV4dE1vbnRoID4gMTIpIHtcclxuICAgICAgICAgIG5leHRZZWFyID0gc2VsZi5jdXJyZW50WWVhciArIDE7XHJcbiAgICAgICAgICBuZXh0TW9udGggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmNhbERheXMobmV4dFllYXIsIG5leHRNb250aCk7XHJcbiAgICAgICAgc2VsZi5jYWxFbXB0eUdyaWQobmV4dFllYXIsIG5leHRNb250aCk7XHJcblxyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBuZXh0WWVhcjtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IG5leHRNb250aDtcclxuICAgICAgICBzZWxmLmN1cnJlbnREYXRlID0gbW9tZW50KGN1cnJlbnREYXRlKVxyXG4gICAgICAgICAgLmFkZCgxLCBcIm1vbnRoc1wiKVxyXG4gICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg5b2T5YmN5pel5pyf77yaJHtjdXJyZW50RGF0ZX1gKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRGF5SXRlbShwYXJhbXMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2vkuovku7YnLHBhcmFtcylcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBjb25zdCB3ZWVrc19jaCA9IFtcIuaXpVwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiXTtcclxuICAgIHNlbGYuY2FsRW1wdHlHcmlkKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgIHNlbGYuY2FsRGF5cyhzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCk7XHJcbiAgICBjb25zdCB0aGlzTW9udGhEYXlzID0gbmV3IERhdGUoXHJcbiAgICAgIG1vbWVudCgpLmZvcm1hdChcIllZWVlcIiksXHJcbiAgICAgIG1vbWVudCgpLmZvcm1hdChcIk1NXCIpLFxyXG4gICAgICAwXHJcbiAgICApLmdldERhdGUoKTtcclxuICAgIHNlbGYud2Vla3NfY2ggPSB3ZWVrc19jaDtcclxuICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgfVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgLy8g6K6h566X5q+P5Liq5pyI55qE6L2u56m65pWwXHJcbiAgY2FsRW1wdHlHcmlkKHllYXIsIG1vbnRoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIDEpKS5nZXREYXkoKTtcclxuICAgIGxldCBlbXB5dEdyaWRzID0gW107XHJcbiAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3REYXlPZldlZWs7IGkrKykge1xyXG4gICAgICAgIGVtcHl0R3JpZHMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLmVtcHl0R3JpZHMgPSBlbXB5dEdyaWRzO1xyXG4gICAgICBzZWxmLmhhc0VtcHR5R3JpZCA9IHRydWU7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLmVtcHl0R3JpZHMgPSBbXTtcclxuICAgICAgc2VsZi5oYXNFbXB0eUdyaWQgPSBmYWxzZTtcclxuICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGDmr4/kuKrmnIjnqbrmoLzmlbA6JHtzZWxmLmVtcHl0R3JpZHN9YClcclxuICB9XHJcbiAgLy8g6I635Y+W5b2T5pyI55qE5aSp5pWwXHJcbiAgY2FsRGF5cyh5ZWFyLCBtb250aCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgeyBjdXJyZW50RGF0ZSB9ID0gc2VsZi5kYXRhO1xyXG4gICAgbGV0IGRheXMgPSBbXTtcclxuICAgIGNvbnN0IHRoaXNNb250aERheXMgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpOyAvLyDojrflj5blvZPliY3mnIjnmoTlpKnmlbAoZWc6IDHmnIggMzHlpKkpXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzTW9udGhEYXlzOyBpKyspIHtcclxuICAgICAgbGV0IGNob29zZWQgPVxyXG4gICAgICAgIGN1cnJlbnREYXRlID09XHJcbiAgICAgICAgbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCBcIllZWVktTU0tRFwiKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgIGRheXMucHVzaCh7XHJcbiAgICAgICAgZGF5RGF0ZTogbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCBcIllZWVktTU0tRFwiKS5mb3JtYXQoXHJcbiAgICAgICAgICBcIllZWVktTU0tRERcIlxyXG4gICAgICAgICksIC8vIOavj+WkqeeahOWujOaVtOaXpeacn1xyXG4gICAgICAgIGRheTogaSwgLy8g5q+P5aSp55qEIOaXpVxyXG4gICAgICAgIGNob29zZWQgLy8g5piv5ZCm5piv5b2T5aSp77yM5aaC5p6c5piv5YiZ5Li6dHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNlbGYuZGF5cyA9IGRheXM7XHJcbiAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJkYXlzXCIsIHNlbGYuZGF5cyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==