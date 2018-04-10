"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: "Layout"
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "calendar", "desc": "日历" }, "comCard": { "title": "calendar", "desc": "日历📅" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      calendar: _calendar2.default
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Calendar;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Calendar , 'pages/components/calendar/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbUNvbnRhaW5lciIsImNvbUNhcmQiLCJjYWxlbmRhciIsImRhdGEiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLFVBQVQsRUFBb0IsUUFBTyxJQUEzQixFQUFoQixFQUFpRCxXQUFVLEVBQUMsU0FBUSxVQUFULEVBQW9CLFFBQU8sTUFBM0IsRUFBM0QsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsZ0RBRFU7QUFFVkMsc0NBRlU7QUFHVkM7QUFIVSxLLFFBTVpDLEksR0FBTyxFLFFBRVBDLE8sR0FBVSxFOzs7Ozs2QkFFRCxDQUFFOzs7O0VBakJ5QixlQUFLQyxJOztrQkFBdEJaLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuXHJcbmltcG9ydCBjYWxlbmRhciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jYWxlbmRhclwiO1xyXG5pbXBvcnQgY29tQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDYXJkXCI7XHJcbmltcG9ydCBjb21Db250YWluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50Q29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJMYXlvdXRcIlxyXG4gIH07XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvbUNvbnRhaW5lclwiOntcInRpdGxlXCI6XCJjYWxlbmRhclwiLFwiZGVzY1wiOlwi5pel5Y6GXCJ9LFwiY29tQ2FyZFwiOntcInRpdGxlXCI6XCJjYWxlbmRhclwiLFwiZGVzY1wiOlwi5pel5Y6G8J+ThVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBjb21Db250YWluZXIsXHJcbiAgICBjb21DYXJkLFxyXG4gICAgY2FsZW5kYXJcclxuICB9O1xyXG5cclxuICBkYXRhID0ge307XHJcblxyXG4gIG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgb25Mb2FkKCkge31cclxufVxyXG4iXX0=