"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_wepy$component) {
  _inherits(Avatar, _wepy$component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      size: {
        type: Number,
        default: 80
      },
      mold: {
        type: String,
        default: "circle"
      }
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: "onLoad",
    value: function onLoad(e) {
      console.log("avatar");
    }
  }]);

  return Avatar;
}(_wepy2.default.component);

exports.default = Avatar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5qcyJdLCJuYW1lcyI6WyJBdmF0YXIiLCJwcm9wcyIsInNpemUiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm1vbGQiLCJTdHJpbmciLCJkYXRhIiwibWV0aG9kcyIsImUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLFlBQU07QUFDSkgsY0FBTUksTUFERjtBQUVKRixpQkFBUztBQUZMO0FBTEEsSyxRQVVSRyxJLEdBQU8sRSxRQUNQQyxPLEdBQVUsRTs7Ozs7MkJBQ0hDLEMsRUFBRztBQUNSQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBZmlDLGVBQUtDLFM7O2tCQUFwQmIsTSIsImZpbGUiOiJhdmF0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiA4MFxyXG4gICAgfSxcclxuICAgIG1vbGQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcImNpcmNsZVwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBkYXRhID0ge307XHJcbiAgbWV0aG9kcyA9IHt9O1xyXG4gIG9uTG9hZChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImF2YXRhclwiKTtcclxuICB9XHJcbn1cclxuIl19