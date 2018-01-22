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

var ComponentContainer = function (_wepy$component) {
  _inherits(ComponentContainer, _wepy$component);

  function ComponentContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentContainer.__proto__ || Object.getPrototypeOf(ComponentContainer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      }
    }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ComponentContainer;
}(_wepy2.default.component);

exports.default = ComponentContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRDb250YWluZXIiLCJwcm9wcyIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkZXNjIiwiZGF0YSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7Ozs4TUFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsaUJBQVM7QUFGSixPQUREO0FBS05DLFlBQU07QUFDSkgsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBTEEsSyxRQVVSRSxJLEdBQU8sRTs7OztFQVh1QyxlQUFLQyxTOztrQkFBaENSLGtCIiwiZmlsZSI6ImNvbXBvbmVudENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgLy8gaW1wb3J0IGFiYyBmcm9tICdhYmMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudENvbnRhaW5lciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBkZXNjOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=