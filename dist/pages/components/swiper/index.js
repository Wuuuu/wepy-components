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
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "swiper", "desc": "轮播图" }, "comCard": { "title": "swiper", "desc": "普通的轮播图" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      swiper: _swiper2.default
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Swiper, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Swiper;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Swiper , 'pages/components/swiper/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXBlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21Db250YWluZXIiLCJjb21DYXJkIiwic3dpcGVyIiwiZGF0YSIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsUUFBVCxFQUFrQixRQUFPLEtBQXpCLEVBQWhCLEVBQWdELFdBQVUsRUFBQyxTQUFRLFFBQVQsRUFBa0IsUUFBTyxRQUF6QixFQUExRCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnREFEUTtBQUVSQyxzQ0FGUTtBQUdSQztBQUhRLEssUUFNVkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVLEU7Ozs7OzZCQUdELENBQ1I7Ozs7RUFwQmlDLGVBQUtDLEk7O2tCQUFwQlosTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGNvbUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDYXJkJ1xyXG4gIGltcG9ydCBjb21Db250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDb250YWluZXInXHJcbiAgaW1wb3J0IHN3aXBlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3N3aXBlcidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i9ruaSreWbvidcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb21Db250YWluZXJcIjp7XCJ0aXRsZVwiOlwic3dpcGVyXCIsXCJkZXNjXCI6XCLova7mkq3lm75cIn0sXCJjb21DYXJkXCI6e1widGl0bGVcIjpcInN3aXBlclwiLFwiZGVzY1wiOlwi5pmu6YCa55qE6L2u5pKt5Zu+XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY29tQ29udGFpbmVyLFxyXG4gICAgICBjb21DYXJkLFxyXG4gICAgICBzd2lwZXJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19