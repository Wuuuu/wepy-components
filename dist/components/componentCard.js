'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var ComponentCard = function (_wepy$component) {
  _inherits(ComponentCard, _wepy$component);

  function ComponentCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentCard.__proto__ || Object.getPrototypeOf(ComponentCard)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: {
        type: String,
        default: '示例标题'
      },
      desc: {
        type: String,
        default: '示例描述'
      },
      source: {
        type: String,
        default: ''
      }
    }, _this.data = {
      viewSourceClass: 'source-isclose',
      isExpandSource: false
    }, _this.methods = {
      bindViewSourceEvent: function bindViewSourceEvent() {
        this.setData({
          isExpandSource: !this.data.isExpandSource
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ComponentCard;
}(_wepy2.default.component);

exports.default = ComponentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudENhcmQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Q2FyZCIsInByb3BzIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRlc2MiLCJzb3VyY2UiLCJkYXRhIiwidmlld1NvdXJjZUNsYXNzIiwiaXNFeHBhbmRTb3VyY2UiLCJtZXRob2RzIiwiYmluZFZpZXdTb3VyY2VFdmVudCIsInNldERhdGEiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsaUJBQVM7QUFGSixPQUREO0FBS05DLFlBQU07QUFDSkgsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMLE9BTEE7QUFTTkUsY0FBUTtBQUNOSixjQUFNQyxNQURBO0FBRU5DLGlCQUFTO0FBRkg7QUFURixLLFFBY1JHLEksR0FBTztBQUNMQyx1QkFBaUIsZ0JBRFo7QUFFTEMsc0JBQWdCO0FBRlgsSyxRQUlQQyxPLEdBQVU7QUFDUkMseUJBRFEsaUNBQ2M7QUFDcEIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hILDBCQUFnQixDQUFDLEtBQUtGLElBQUwsQ0FBVUU7QUFEaEIsU0FBYjtBQUdEO0FBTE8sSzs7OztFQW5CK0IsZUFBS0ksUzs7a0JBQTNCZCxhIiwiZmlsZSI6ImNvbXBvbmVudENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8vIGltcG9ydCBhYmMgZnJvbSAnYWJjJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRDYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICfnpLrkvovmoIfpopgnXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ+ekuuS+i+aPj+i/sCdcclxuICAgICAgfSxcclxuICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHZpZXdTb3VyY2VDbGFzczogJ3NvdXJjZS1pc2Nsb3NlJyxcclxuICAgICAgaXNFeHBhbmRTb3VyY2U6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBiaW5kVmlld1NvdXJjZUV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0V4cGFuZFNvdXJjZTogIXRoaXMuZGF0YS5pc0V4cGFuZFNvdXJjZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==