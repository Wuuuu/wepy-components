'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '组件'
    }, _this.components = {}, _this.data = {
      list: [{
        id: 'form',
        name: '表单',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader']
      }, {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      }, {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      }, {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navbar', 'tabbar']
      }, {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar']
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibGlzdCIsImlkIiwibmFtZSIsIm9wZW4iLCJwYWdlcyIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKO0FBQ0VDLFlBQUksTUFETjtBQUVFQyxjQUFNLElBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxVQUF0QztBQUpULE9BREksRUFPSjtBQUNFSCxZQUFJLFFBRE47QUFFRUMsY0FBTSxNQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxlQUFPLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsRUFBNkIsUUFBN0IsRUFBdUMsU0FBdkMsRUFBa0QsTUFBbEQsRUFBMEQsT0FBMUQsRUFBbUUsVUFBbkUsRUFBK0UsT0FBL0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkc7QUFKVCxPQVBJLEVBYUo7QUFDRUgsWUFBSSxVQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsRUFBMEIsS0FBMUIsRUFBaUMsUUFBakMsRUFBMkMsT0FBM0M7QUFKVCxPQWJJLEVBbUJKO0FBQ0VILFlBQUksS0FETjtBQUVFQyxjQUFNLE1BRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxRQUFELEVBQVcsUUFBWDtBQUpULE9BbkJJLEVBeUJKO0FBQ0VILFlBQUksUUFETjtBQUVFQyxjQUFNLE1BRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxXQUFEO0FBSlQsT0F6Qkk7QUFERCxLOzs7Ozs2QkFrQ0U7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDRDs7OztFQTFDZ0MsZUFBS0MsSTs7a0JBQW5CWCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnu4Tku7YnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2Zvcm0nLFxuICAgICAgICAgIG5hbWU6ICfooajljZUnLFxuICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgIHBhZ2VzOiBbJ2J1dHRvbicsICdsaXN0JywgJ2lucHV0JywgJ3NsaWRlcicsICd1cGxvYWRlciddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3dpZGdldCcsXG4gICAgICAgICAgbmFtZTogJ+WfuuehgOe7hOS7ticsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnYXJ0aWNsZScsICdiYWRnZScsICdmbGV4JywgJ2Zvb3RlcicsICdnYWxsZXJ5JywgJ2dyaWQnLCAnaWNvbnMnLCAnbG9hZG1vcmUnLCAncGFuZWwnLCAncHJldmlldycsICdwcm9ncmVzcyddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2ZlZWRiYWNrJyxcbiAgICAgICAgICBuYW1lOiAn5pON5L2c5Y+N6aaIJyxcbiAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICBwYWdlczogWydhY3Rpb25zaGVldCcsICdkaWFsb2cnLCAnbXNnJywgJ3BpY2tlcicsICd0b2FzdCddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ25hdicsXG4gICAgICAgICAgbmFtZTogJ+WvvOiIquebuOWFsycsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnbmF2YmFyJywgJ3RhYmJhciddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgbmFtZTogJ+aQnOe0ouebuOWFsycsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnc2VhcmNoYmFyJ11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB9XG4gIH1cbiJdfQ==