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
      imgs: {
        type: Array,
        default: []
      }
    }, _this.data = {
      indicatorDots: true, // 是否显示面板指示点
      autoplay: true, // 是否自动播放
      interval: 5000, // 自动切换时间间隔
      duration: 1000, // 滑动动画时长
      current: 0, // 当前所在滑块的 index
      iscircular: true // 是否采用衔接滑动
    }, _this.methods = {
      handleChange: function handleChange(e) {
        var self = this;
        self.swiperCurrentPage = e.detail.current;
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Swiper, [{
    key: 'onLoad',
    value: function onLoad(e) {}
  }]);

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsImltZ3MiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiZGF0YSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiaXNjaXJjdWxhciIsIm1ldGhvZHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VsZiIsInN3aXBlckN1cnJlbnRQYWdlIiwiZGV0YWlsIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLEtBREY7QUFFSkMsaUJBQVM7QUFGTDtBQURBLEssUUFNUkMsSSxHQUFPO0FBQ0xDLHFCQUFlLElBRFYsRUFDaUI7QUFDdEJDLGdCQUFVLElBRkwsRUFFZ0I7QUFDckJDLGdCQUFVLElBSEwsRUFHaUI7QUFDekJDLGdCQUFVLElBSkYsRUFJYztBQUN0QkMsZUFBUyxDQUxELEVBS2M7QUFDdEJDLGtCQUFZLElBTkosQ0FNYztBQU5kLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxDQURMLEVBQ1E7QUFDZCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0MsaUJBQUwsR0FBeUJGLEVBQUVHLE1BQUYsQ0FBU1AsT0FBbEM7QUFDQUssYUFBS0csTUFBTDtBQUNEO0FBTE8sSzs7Ozs7MkJBT0ZKLEMsRUFBRyxDQUNWOzs7O0VBdkJpQyxlQUFLSyxTOztrQkFBcEJwQixNIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBpbWdzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSwgIC8vIOaYr+WQpuaYvuekuumdouadv+aMh+ekuueCuVxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSwgICAgICAvLyDmmK/lkKboh6rliqjmkq3mlL5cclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsICAgICAgIC8vIOiHquWKqOWIh+aNouaXtumXtOmXtOmalFxyXG5cdFx0XHRkdXJhdGlvbjogMTAwMCwgICAgICAgLy8g5ruR5Yqo5Yqo55S75pe26ZW/XHJcblx0XHRcdGN1cnJlbnQ6IDAsICAgICAgICAgICAvLyDlvZPliY3miYDlnKjmu5HlnZfnmoQgaW5kZXhcclxuXHRcdFx0aXNjaXJjdWxhcjogdHJ1ZSAgICAgIC8vIOaYr+WQpumHh+eUqOihlOaOpea7keWKqFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICBzZWxmLnN3aXBlckN1cnJlbnRQYWdlID0gZS5kZXRhaWwuY3VycmVudFxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkIChlKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=