'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "swiper", "desc": "轮播图" }, "comCard": { "title": "swiperVertical", "desc": "纵向通知滚动展示类轮播" }, "swiper": { "xmlns:v-bind": "", "v-bind:imgs.sync": "imgs" }, "swiperVertical": { "v-bind:imgs.sync": "verticalImgs" } }, _this.$events = {}, _this.components = {
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Swiper , 'pages/components/swiper/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21Db250YWluZXIiLCJjb21DYXJkIiwic3dpcGVyIiwic3dpcGVyVmVydGljYWwiLCJkYXRhIiwiaW1ncyIsInZlcnRpY2FsSW1ncyIsImljb24iLCJ0ZXh0IiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLFFBQVQsRUFBa0IsUUFBTyxLQUF6QixFQUFoQixFQUFnRCxXQUFVLEVBQUMsU0FBUSxnQkFBVCxFQUEwQixRQUFPLGFBQWpDLEVBQTFELEVBQTBHLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsTUFBdEMsRUFBbkgsRUFBaUssa0JBQWlCLEVBQUMsb0JBQW1CLGNBQXBCLEVBQWxMLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGdEQURRO0FBRVJDLHNDQUZRO0FBR1JDLDhCQUhRO0FBSVJDO0FBSlEsSyxRQU9WQyxJLEdBQU87QUFDTDtBQUNBQyxZQUFNLENBQ0osc0VBREksRUFFSixzRUFGSSxFQUdKLHNFQUhJLENBRkQ7QUFPTEMsb0JBQWMsQ0FDWjtBQUNFQyxjQUFNLDZDQURSO0FBRUVDLGNBQU07QUFGUixPQURZLEVBS1o7QUFDRUQsY0FBTSx3Q0FEUjtBQUVFQyxjQUFNO0FBRlIsT0FMWSxFQVNaO0FBQ0VELGNBQU0sNENBRFI7QUFFRUMsY0FBTTtBQUZSLE9BVFk7QUFQVCxLLFFBdUJQQyxPLEdBQVUsRTs7Ozs7NkJBR0QsQ0FDUjs7OztFQXpDaUMsZUFBS0MsSTs7a0JBQXBCakIsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGNvbUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDYXJkJ1xyXG4gIGltcG9ydCBjb21Db250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDb250YWluZXInXHJcbiAgaW1wb3J0IHN3aXBlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3N3aXBlcidcclxuICBpbXBvcnQgc3dpcGVyVmVydGljYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zd2lwZXJWZXJ0aWNhbCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i9ruaSreWbvidcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb21Db250YWluZXJcIjp7XCJ0aXRsZVwiOlwic3dpcGVyXCIsXCJkZXNjXCI6XCLova7mkq3lm75cIn0sXCJjb21DYXJkXCI6e1widGl0bGVcIjpcInN3aXBlclZlcnRpY2FsXCIsXCJkZXNjXCI6XCLnurXlkJHpgJrnn6Xmu5rliqjlsZXnpLrnsbvova7mkq1cIn0sXCJzd2lwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmltZ3Muc3luY1wiOlwiaW1nc1wifSxcInN3aXBlclZlcnRpY2FsXCI6e1widi1iaW5kOmltZ3Muc3luY1wiOlwidmVydGljYWxJbWdzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY29tQ29udGFpbmVyLFxyXG4gICAgICBjb21DYXJkLFxyXG4gICAgICBzd2lwZXIsXHJcbiAgICAgIHN3aXBlclZlcnRpY2FsXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5Yqo5oCB6I635Y+W5Zu+54mH5Lyg5YWlc3dpcGVyXHJcbiAgICAgIGltZ3M6IFtcclxuICAgICAgICAnaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGcnLFxyXG4gICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXHJcbiAgICAgICAgJ2h0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4MzMwNDc3MTUuanBnJ1xyXG4gICAgICBdLFxyXG4gICAgICB2ZXJ0aWNhbEltZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnLi4vLi4vLi4vYXNzZXRzL2ljb24vaWNvbi1wYXJ0bHktY2xvdWR5LnBuZycsXHJcbiAgICAgICAgICB0ZXh0OiAn5LuK5aSp5aSp5rCU77ya5bCR5LqRLOS6i+WunOWcqOWutueci+eUteinhuaJk+a4uOaIjydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICcuLi8uLi8uLi9hc3NldHMvaWNvbi9pY29uLXN1bnNoaW5lLnBuZycsXHJcbiAgICAgICAgICB0ZXh0OiAn5LuK5aSp5aSp5rCU77ya5pm0LOmAguWQiOWHuumXqOa4uOeOqSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICcuLi8uLi8uLi9hc3NldHMvaWNvbi9pY29uLWhlYXZ5LXNob3dlci5wbmcnLFxyXG4gICAgICAgICAgdGV4dDogJ+S7iuWkqeWkqeawlO+8mueJueWkp+mYtembqCzlh7rpl6jorrDlvpfluKbkvJ4nXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=