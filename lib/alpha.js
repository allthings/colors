'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alpha;

var _hexToRgb = require('./hexToRgb');

var _hexToRgb2 = _interopRequireDefault(_hexToRgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alpha(hex, alpha) {
  var rgb = (0, _hexToRgb2.default)(hex);
  if (rgb === null) throw new Error('`hex` value provided to `alpha` is not a HEX color, `' + hex + '` given.');
  return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + alpha + ')';
}