'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _componentCard = require('./../../../components/componentCard.js');

var _componentCard2 = _interopRequireDefault(_componentCard);

var _componentContainer = require('./../../../components/componentContainer.js');

var _componentContainer2 = _interopRequireDefault(_componentContainer);

var _swiper = require('./../../../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _swiperVertical = require('./../../../components/swiperVertical.js');

var _swiperVertical2 = _interopRequireDefault(_swiperVertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$page) {
  _inherits(Swiper, _wepy$page);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '轮播图'
    }, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      swiper: _swiper2.default,
      swiperVertical: _swiperVertical2.default
    }, _this.data = {
      // 动态获取图片传入swiper
      imgs: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      verticalImgs: [{
        icon: '../../../assets/icon/icon-partly-cloudy.png',
        text: '今天天气：少云,事宜在家看电视打游戏'
      }, {
        icon: '../../../assets/icon/icon-sunshine.png',
        text: '今天天气：晴,适合出门游玩'
      }, {
        icon: '../../../assets/icon/icon-heavy-shower.png',
        text: '今天天气：特大阵雨,出门记得带伞'
      }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Swiper, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Swiper;
}(_wepy2.default.page);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiY29tQ29udGFpbmVyIiwiY29tQ2FyZCIsInN3aXBlciIsInN3aXBlclZlcnRpY2FsIiwiZGF0YSIsImltZ3MiLCJ2ZXJ0aWNhbEltZ3MiLCJpY29uIiwidGV4dCIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxnREFEVztBQUVYQyxzQ0FGVztBQUdYQyw4QkFIVztBQUlYQztBQUpXLEssUUFPYkMsSSxHQUFPO0FBQ0w7QUFDQUMsWUFBTSxDQUNKLHNFQURJLEVBRUosc0VBRkksRUFHSixzRUFISSxDQUZEO0FBT0xDLG9CQUFjLENBQ1o7QUFDRUMsY0FBTSw2Q0FEUjtBQUVFQyxjQUFNO0FBRlIsT0FEWSxFQUtaO0FBQ0VELGNBQU0sd0NBRFI7QUFFRUMsY0FBTTtBQUZSLE9BTFksRUFTWjtBQUNFRCxjQUFNLDRDQURSO0FBRUVDLGNBQU07QUFGUixPQVRZO0FBUFQsSyxRQXVCUEMsTyxHQUFVLEU7Ozs7OzZCQUdELENBQ1I7Ozs7RUF0Q2lDLGVBQUtDLEk7O2tCQUFwQmQsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGNvbUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDYXJkJ1xyXG4gIGltcG9ydCBjb21Db250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDb250YWluZXInXHJcbiAgaW1wb3J0IHN3aXBlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3N3aXBlcidcclxuICBpbXBvcnQgc3dpcGVyVmVydGljYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zd2lwZXJWZXJ0aWNhbCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i9ruaSreWbvidcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGNvbUNvbnRhaW5lcixcclxuICAgICAgY29tQ2FyZCxcclxuICAgICAgc3dpcGVyLFxyXG4gICAgICBzd2lwZXJWZXJ0aWNhbFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOWKqOaAgeiOt+WPluWbvueJh+S8oOWFpXN3aXBlclxyXG4gICAgICBpbWdzOiBbXHJcbiAgICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcclxuICAgICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTg2NjQzNDI5Ni5qcGcnLFxyXG4gICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcclxuICAgICAgXSxcclxuICAgICAgdmVydGljYWxJbWdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjogJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2ljb24tcGFydGx5LWNsb3VkeS5wbmcnLFxyXG4gICAgICAgICAgdGV4dDogJ+S7iuWkqeWkqeawlO+8muWwkeS6kSzkuovlrpzlnKjlrrbnnIvnlLXop4bmiZPmuLjmiI8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnLi4vLi4vLi4vYXNzZXRzL2ljb24vaWNvbi1zdW5zaGluZS5wbmcnLFxyXG4gICAgICAgICAgdGV4dDogJ+S7iuWkqeWkqeawlO+8muaZtCzpgILlkIjlh7rpl6jmuLjnjqknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnLi4vLi4vLi4vYXNzZXRzL2ljb24vaWNvbi1oZWF2eS1zaG93ZXIucG5nJyxcclxuICAgICAgICAgIHRleHQ6ICfku4rlpKnlpKnmsJTvvJrnibnlpKfpmLXpm6gs5Ye66Zeo6K6w5b6X5bim5LyeJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19