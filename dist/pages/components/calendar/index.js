'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _calendar = require('./../../../components/calendar.js');

var _calendar2 = _interopRequireDefault(_calendar);

var _componentCard = require('./../../../components/componentCard.js');

var _componentCard2 = _interopRequireDefault(_componentCard);

var _componentContainer = require('./../../../components/componentContainer.js');

var _componentContainer2 = _interopRequireDefault(_componentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_wepy$page) {
  _inherits(Calendar, _wepy$page);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Layout'
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "avatar", "desc": "头像" }, "comCard": { "title": "avatar", "desc": "普通头像" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      calendar: _calendar2.default
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Calendar;
}(_wepy2.default.page);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbUNvbnRhaW5lciIsImNvbUNhcmQiLCJjYWxlbmRhciIsImRhdGEiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLFFBQVQsRUFBa0IsUUFBTyxJQUF6QixFQUFoQixFQUErQyxXQUFVLEVBQUMsU0FBUSxRQUFULEVBQWtCLFFBQU8sTUFBekIsRUFBekQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsZ0RBRFE7QUFFUkMsc0NBRlE7QUFHUkM7QUFIUSxLLFFBTVZDLEksR0FBTyxFLFFBR1BDLE8sR0FBVSxFOzs7Ozs2QkFHRCxDQUNSOzs7O0VBcEJtQyxlQUFLQyxJOztrQkFBdEJaLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIFxyXG4gIGltcG9ydCBjYWxlbmRhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyJ1xyXG4gIGltcG9ydCBjb21DYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50Q2FyZCdcclxuICBpbXBvcnQgY29tQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50Q29udGFpbmVyJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdMYXlvdXQnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tQ29udGFpbmVyXCI6e1widGl0bGVcIjpcImF2YXRhclwiLFwiZGVzY1wiOlwi5aS05YOPXCJ9LFwiY29tQ2FyZFwiOntcInRpdGxlXCI6XCJhdmF0YXJcIixcImRlc2NcIjpcIuaZrumAmuWktOWDj1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGNvbUNvbnRhaW5lcixcclxuICAgICAgY29tQ2FyZCxcclxuICAgICAgY2FsZW5kYXJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19