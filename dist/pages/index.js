"use strict";

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
      navigationBarTitleText: "组件"
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
    key: "onLoad",
    value: function onLoad() {
      var self = this;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwia2luZFRvZ2dsZSIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImxlbmd0aCIsIm1lbnUiLCJvcGVuIiwic2V0RGF0YSIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDUUEsSyxvQkFBQUEsSzs7SUFFYUMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xMO0FBREssSyxRQUdQTSxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUFBLFlBQ2RDLEVBRGMsR0FDUEQsRUFBRUUsYUFESyxDQUNkRCxFQURjO0FBQUEsWUFFZFQsS0FGYyxHQUVKLEtBQUtLLElBRkQsQ0FFZEwsS0FGYzs7QUFHdEIsYUFBSyxJQUFJVyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRWCxNQUFNWSxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsY0FBSUUsT0FBT2IsTUFBTVcsS0FBTixDQUFYO0FBQ0EsY0FBSUUsS0FBS0osRUFBTCxJQUFXQSxFQUFmLEVBQW1CO0FBQ2pCSSxpQkFBS0MsSUFBTCxHQUFZLENBQUNELEtBQUtDLElBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xELGlCQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNEO0FBQ0Y7QUFDRCxhQUFLQyxPQUFMLENBQWE7QUFDWGY7QUFEVyxTQUFiO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQ7QUFDUCxVQUFJZ0IsT0FBTyxJQUFYO0FBQ0Q7Ozs7RUEzQmdDLGVBQUtDLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuY29uc3QgeyBtZW51cyB9ID0gY29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIue7hOS7tlwiXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBtZW51c1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGtpbmRUb2dnbGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW51cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG1lbnUgPSBtZW51c1tpbmRleF07XG4gICAgICAgIGlmIChtZW51LmlkID09IGlkKSB7XG4gICAgICAgICAgbWVudS5vcGVuID0gIW1lbnUub3BlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW51Lm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbWVudXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgfVxufVxuIl19