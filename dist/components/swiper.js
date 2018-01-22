'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      num: {
        type: [Number, String],
        coerce: function coerce(v) {
          return +v;
        },
        default: 50
      }
    }, _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current: 0
    }, _this.methods = {
      changeSwiper: function changeSwiper(e) {
        var self = this;
        self.swiperCurrentPage = e.detail.current;
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJtZXRob2RzIiwiY2hhbmdlU3dpcGVyIiwiZSIsInNlbGYiLCJzd2lwZXJDdXJyZW50UGFnZSIsImRldGFpbCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUs7QUFDSEMsY0FBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVIQyxnQkFBUSxnQkFBVUMsQ0FBVixFQUFhO0FBQ25CLGlCQUFPLENBQUNBLENBQVI7QUFDRCxTQUpFO0FBS0hDLGlCQUFTO0FBTE47QUFEQyxLLFFBU1JDLEksR0FBTztBQUNMQyxlQUFTLENBQ1gsc0VBRFcsRUFFUCxzRUFGTyxFQUdQLHNFQUhPLENBREo7QUFNTEMscUJBQWUsSUFOVjtBQU9MQyxnQkFBVSxLQVBMO0FBUUxDLGdCQUFVLElBUkw7QUFTUkMsZ0JBQVUsSUFURjtBQVVSQyxlQUFTO0FBVkQsSyxRQVlQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tDLENBREwsRUFDUTtBQUNkLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxpQkFBTCxHQUF5QkYsRUFBRUcsTUFBRixDQUFTTixPQUFsQztBQUNBSSxhQUFLRyxNQUFMO0FBQ0Q7QUFMTyxLOzs7O0VBdEJ3QixlQUFLQyxTOztrQkFBcEJ2QixNIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBudW06IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgIHJldHVybiArdlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdDogNTBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW1nVXJsczogW1xyXG5cdFx0XHRcdCdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZycsXHJcbiAgICAgICAgJ2h0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4NjY0MzQyOTYuanBnJyxcclxuICAgICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXHJcblx0XHRcdF0sXHJcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcblx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRjdXJyZW50OiAwXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBjaGFuZ2VTd2lwZXIoZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIHNlbGYuc3dpcGVyQ3VycmVudFBhZ2UgPSBlLmRldGFpbC5jdXJyZW50XHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=