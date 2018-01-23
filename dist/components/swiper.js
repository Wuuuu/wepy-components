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

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current: 0,
      iscircular: true
    }, _this.methods = {
      handleChange: function handleChange(e) {
        var self = this;
        self.swiperCurrentPage = e.detail.current;
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJpc2NpcmN1bGFyIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImUiLCJzZWxmIiwic3dpcGVyQ3VycmVudFBhZ2UiLCJkZXRhaWwiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxlQUFTLENBQ1gsc0VBRFcsRUFFUCxzRUFGTyxFQUdQLHNFQUhPLENBREo7QUFNTEMscUJBQWUsSUFOVjtBQU9MQyxnQkFBVSxLQVBMO0FBUUxDLGdCQUFVLElBUkw7QUFTUkMsZ0JBQVUsSUFURjtBQVVSQyxlQUFTLENBVkQ7QUFXUkMsa0JBQVk7QUFYSixLLFFBYVBDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS0MsQ0FETCxFQUNRO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtDLGlCQUFMLEdBQXlCRixFQUFFRyxNQUFGLENBQVNQLE9BQWxDO0FBQ0FLLGFBQUtHLE1BQUw7QUFDRDtBQUxPLEs7Ozs7RUFoQndCLGVBQUtDLFM7O2tCQUFwQmpCLE0iLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpbWdVcmxzOiBbXHJcblx0XHRcdFx0J2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcclxuICAgICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTg2NjQzNDI5Ni5qcGcnLFxyXG4gICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcclxuXHRcdFx0XSxcclxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdGlzY2lyY3VsYXI6IHRydWVcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgc2VsZi5zd2lwZXJDdXJyZW50UGFnZSA9IGUuZGV0YWlsLmN1cnJlbnRcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==