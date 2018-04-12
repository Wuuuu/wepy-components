'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _avatar = require('./../../../components/avatar.js');

var _avatar2 = _interopRequireDefault(_avatar);

var _componentCard = require('./../../../components/componentCard.js');

var _componentCard2 = _interopRequireDefault(_componentCard);

var _componentContainer = require('./../../../components/componentContainer.js');

var _componentContainer2 = _interopRequireDefault(_componentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_wepy$page) {
  _inherits(Avatar, _wepy$page);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Layout'
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "avatar", "desc": "头像" }, "comCard": { "title": "avatar", "desc": "普通头像" }, "avatar": { "xmlns:v-bind": "", "v-bind:size.once": "size" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      avatar: _avatar2.default
    }, _this.data = {
      size: 160
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Avatar;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Avatar , 'pages/components/avatar/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF2YXRhciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21Db250YWluZXIiLCJjb21DYXJkIiwiYXZhdGFyIiwiZGF0YSIsInNpemUiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLFFBQVQsRUFBa0IsUUFBTyxJQUF6QixFQUFoQixFQUErQyxXQUFVLEVBQUMsU0FBUSxRQUFULEVBQWtCLFFBQU8sTUFBekIsRUFBekQsRUFBMEYsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUFuRyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnREFEUTtBQUVSQyxzQ0FGUTtBQUdSQztBQUhRLEssUUFNVkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBSVBDLE8sR0FBVSxFOzs7Ozs2QkFHRCxDQUNSOzs7O0VBckJpQyxlQUFLQyxJOztrQkFBcEJiLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIFxyXG4gIGltcG9ydCBhdmF0YXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdmF0YXInXHJcbiAgaW1wb3J0IGNvbUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDYXJkJ1xyXG4gIGltcG9ydCBjb21Db250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDb250YWluZXInXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdMYXlvdXQnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tQ29udGFpbmVyXCI6e1widGl0bGVcIjpcImF2YXRhclwiLFwiZGVzY1wiOlwi5aS05YOPXCJ9LFwiY29tQ2FyZFwiOntcInRpdGxlXCI6XCJhdmF0YXJcIixcImRlc2NcIjpcIuaZrumAmuWktOWDj1wifSxcImF2YXRhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2l6ZS5vbmNlXCI6XCJzaXplXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY29tQ29udGFpbmVyLFxyXG4gICAgICBjb21DYXJkLFxyXG4gICAgICBhdmF0YXJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBzaXplOiAxNjBcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==