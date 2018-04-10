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
    }, _this.$repeat = {}, _this.$props = { "comContainer": { "title": "calendar", "desc": "日历" }, "comCard": { "title": "calendar", "desc": "日历📅" }, "calendar": { "xmlns:v-bind": "", "v-bind:monthOfDays.once": "monthOfDays" } }, _this.$events = {}, _this.components = {
      comContainer: _componentContainer2.default,
      comCard: _componentCard2.default,
      calendar: _calendar2.default
    }, _this.data = {
      monthOfDays: [1, 2, 3, 4, 5]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Calendar;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Calendar , 'pages/components/calendar/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbUNvbnRhaW5lciIsImNvbUNhcmQiLCJjYWxlbmRhciIsImRhdGEiLCJtb250aE9mRGF5cyIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsVUFBVCxFQUFvQixRQUFPLElBQTNCLEVBQWhCLEVBQWlELFdBQVUsRUFBQyxTQUFRLFVBQVQsRUFBb0IsUUFBTyxNQUEzQixFQUEzRCxFQUE4RixZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMkJBQTBCLGFBQTdDLEVBQXpHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGdEQURVO0FBRVZDLHNDQUZVO0FBR1ZDO0FBSFUsSyxRQU1aQyxJLEdBQU87QUFDTEMsbUJBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVDtBQURSLEssUUFJUEMsTyxHQUFVLEU7Ozs7OzZCQUVELENBQUU7Ozs7RUFuQnlCLGVBQUtDLEk7O2tCQUF0QmIsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5cclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyXCI7XHJcbmltcG9ydCBjb21DYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudENhcmRcIjtcclxuaW1wb3J0IGNvbUNvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRDb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIkxheW91dFwiXHJcbiAgfTtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tQ29udGFpbmVyXCI6e1widGl0bGVcIjpcImNhbGVuZGFyXCIsXCJkZXNjXCI6XCLml6XljoZcIn0sXCJjb21DYXJkXCI6e1widGl0bGVcIjpcImNhbGVuZGFyXCIsXCJkZXNjXCI6XCLml6Xljobwn5OFXCJ9LFwiY2FsZW5kYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vbnRoT2ZEYXlzLm9uY2VcIjpcIm1vbnRoT2ZEYXlzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGNvbUNvbnRhaW5lcixcclxuICAgIGNvbUNhcmQsXHJcbiAgICBjYWxlbmRhclxyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBtb250aE9mRGF5czogWzEsMiwzLDQsNV1cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge307XHJcblxyXG4gIG9uTG9hZCgpIHt9XHJcbn1cclxuIl19