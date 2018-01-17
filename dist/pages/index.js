'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menus = _config2.default.menus;

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
      menus: menus
    }, _this.methods = {
      kindToggle: function kindToggle(e) {
        var id = e.currentTarget.id;
        var menus = this.data.menus;

        for (var index = 0; index < menus.length; index++) {
          var menu = menus[index];
          if (menu.id == id) {
            menu.open = !menu.open;
          } else {
            menu.open = false;
          }
        }
        this.setData({
          menus: menus
        });
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwia2luZFRvZ2dsZSIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImxlbmd0aCIsIm1lbnUiLCJvcGVuIiwic2V0RGF0YSIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDTUEsSyxvQkFBQUEsSzs7SUFFZUMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xMO0FBREssSyxRQUdQTSxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVVDLENBQVYsRUFBYTtBQUFBLFlBQ2ZDLEVBRGUsR0FDUkQsRUFBRUUsYUFETSxDQUNmRCxFQURlO0FBQUEsWUFFZlQsS0FGZSxHQUVMLEtBQUtLLElBRkEsQ0FFZkwsS0FGZTs7QUFHdkIsYUFBSyxJQUFJVyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRWCxNQUFNWSxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsY0FBSUUsT0FBT2IsTUFBTVcsS0FBTixDQUFYO0FBQ0EsY0FBSUUsS0FBS0osRUFBTCxJQUFXQSxFQUFmLEVBQW1CO0FBQ2pCSSxpQkFBS0MsSUFBTCxHQUFZLENBQUNELEtBQUtDLElBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xELGlCQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNEO0FBQ0Y7QUFDRCxhQUFLQyxPQUFMLENBQWE7QUFDWGY7QUFEVyxTQUFiO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQ7QUFDUCxVQUFJZ0IsT0FBTyxJQUFYO0FBQ0Q7Ozs7RUE1QmdDLGVBQUtDLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcbiAgbGV0IHsgbWVudXMgfSA9IGNvbmZpZ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uE5Lu2J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgbWVudXNcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGtpbmRUb2dnbGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldFxuICAgICAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLmRhdGFcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGxldCBtZW51ID0gbWVudXNbaW5kZXhdXG4gICAgICAgICAgaWYgKG1lbnUuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIG1lbnUub3BlbiA9ICFtZW51Lm9wZW5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudS5vcGVuID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtZW51c1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB9XG4gIH1cbiJdfQ==