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
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "avatar", "desc": "头像" }, "comCard": { "title": "avatar", "desc": "普通头像" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      avatar: _avatar2.default
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Avatar;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Avatar , 'pages/components/avatar/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkF2YXRhciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21Db250YWluZXIiLCJjb21DYXJkIiwiYXZhdGFyIiwiZGF0YSIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsUUFBVCxFQUFrQixRQUFPLElBQXpCLEVBQWhCLEVBQStDLFdBQVUsRUFBQyxTQUFRLFFBQVQsRUFBa0IsUUFBTyxNQUF6QixFQUF6RCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnREFEUTtBQUVSQyxzQ0FGUTtBQUdSQztBQUhRLEssUUFNVkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVLEU7Ozs7OzZCQUdELENBQ1I7Ozs7RUFwQmlDLGVBQUtDLEk7O2tCQUFwQlosTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgXHJcbiAgaW1wb3J0IGF2YXRhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F2YXRhcidcclxuICBpbXBvcnQgY29tQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudENhcmQnXHJcbiAgaW1wb3J0IGNvbUNvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudENvbnRhaW5lcidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0xheW91dCdcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb21Db250YWluZXJcIjp7XCJ0aXRsZVwiOlwiYXZhdGFyXCIsXCJkZXNjXCI6XCLlpLTlg49cIn0sXCJjb21DYXJkXCI6e1widGl0bGVcIjpcImF2YXRhclwiLFwiZGVzY1wiOlwi5pmu6YCa5aS05YOPXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY29tQ29udGFpbmVyLFxyXG4gICAgICBjb21DYXJkLFxyXG4gICAgICBhdmF0YXJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19