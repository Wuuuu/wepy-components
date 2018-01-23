'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwiperVertical = function (_wepy$component) {
  _inherits(SwiperVertical, _wepy$component);

  function SwiperVertical() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SwiperVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwiperVertical.__proto__ || Object.getPrototypeOf(SwiperVertical)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      imgs: {
        type: Array,
        default: []
      }
    }, _this.data = {
      indicatorDots: false, // 是否显示面板指示点
      autoplay: true, // 是否自动播放
      interval: 2000, // 自动切换时间间隔
      duration: 1000, // 滑动动画时长
      current: 0, // 当前所在滑块的 index
      iscircular: true, // 是否采用衔接滑动
      vertical: true // 滑动方向为纵向
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SwiperVertical, [{
    key: 'onLoad',
    value: function onLoad(e) {}
  }]);

  return SwiperVertical;
}(_wepy2.default.component);

exports.default = SwiperVertical;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlclZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlN3aXBlclZlcnRpY2FsIiwicHJvcHMiLCJpbWdzIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiY3VycmVudCIsImlzY2lyY3VsYXIiLCJ2ZXJ0aWNhbCIsIm1ldGhvZHMiLCJlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLEtBREY7QUFFSkMsaUJBQVM7QUFGTDtBQURBLEssUUFNUkMsSSxHQUFPO0FBQ0xDLHFCQUFlLEtBRFYsRUFDa0I7QUFDdkJDLGdCQUFVLElBRkwsRUFFZ0I7QUFDckJDLGdCQUFVLElBSEwsRUFHaUI7QUFDekJDLGdCQUFVLElBSkYsRUFJYztBQUN0QkMsZUFBUyxDQUxELEVBS2M7QUFDdEJDLGtCQUFZLElBTkosRUFNYztBQUNuQkMsZ0JBQVUsSUFQTCxDQU9pQjtBQVBqQixLLFFBU1BDLE8sR0FBVSxFOzs7OzsyQkFDRkMsQyxFQUFHLENBQ1Y7Ozs7RUFsQnlDLGVBQUtDLFM7O2tCQUE1QmhCLGMiLCJmaWxlIjoic3dpcGVyVmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZXJWZXJ0aWNhbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBpbWdzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW5kaWNhdG9yRG90czogZmFsc2UsICAvLyDmmK/lkKbmmL7npLrpnaLmnb/mjIfnpLrngrlcclxuICAgICAgYXV0b3BsYXk6IHRydWUsICAgICAgLy8g5piv5ZCm6Ieq5Yqo5pKt5pS+XHJcbiAgICAgIGludGVydmFsOiAyMDAwLCAgICAgICAvLyDoh6rliqjliIfmjaLml7bpl7Tpl7TpmpRcclxuXHRcdFx0ZHVyYXRpb246IDEwMDAsICAgICAgIC8vIOa7keWKqOWKqOeUu+aXtumVv1xyXG5cdFx0XHRjdXJyZW50OiAwLCAgICAgICAgICAgLy8g5b2T5YmN5omA5Zyo5ruR5Z2X55qEIGluZGV4XHJcblx0XHRcdGlzY2lyY3VsYXI6IHRydWUsICAgICAvLyDmmK/lkKbph4fnlKjooZTmjqXmu5HliqhcclxuICAgICAgdmVydGljYWw6IHRydWUgICAgICAgIC8vIOa7keWKqOaWueWQkeS4uue6teWQkVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHt9XHJcbiAgICBvbkxvYWQgKGUpIHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==