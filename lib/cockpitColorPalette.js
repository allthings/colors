'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var palette = {
  white: '#ffffff',
  black: '#000000',
  text: '#333333',

  green1: '#00bf93',
  green2: '#16a086',
  green3: '#2dcc70',
  green4: '#27ae61',
  green5: '#42e453',
  green6: '#24c333',

  yellow1: '#ffff25',
  yellow2: '#d9d921',
  yellow3: '#f1c40f',

  orange1: '#f39c11',
  orange2: '#e67f22',
  orange3: '#d25400',
  orange4: '#ff944e',
  orange5: '#ff5500',

  red1: '#e84c3d',
  red2: '#c1392b',

  pink1: '#ef3e96',
  pink2: '#e52383',
  pink3: '#df21b9',
  pink4: '#be127e',

  purple1: '#9a59b5',
  purple2: '#8d44ad',

  blue1: '#7dc2d2',
  blue2: '#1cabbb',
  blue3: '#3598db',
  blue4: '#297fb8',
  blue5: '#34495e',
  blue6: '#2d3e50',

  gray0: '#f8f8f8',
  gray1: '#ecf0f1',
  gray2: '#bec3c7',
  gray3: '#95a5a5',
  gray4: '#7e8c8d'
};
palette.background = {
  light: '#2c2c2c',
  dark: '#232323'
};
palette.primary = {
  gray: palette.gray2,
  blue: palette.blue3,
  green: palette.green2,
  pink: palette.pink3,
  red: palette.orange3,
  orange: palette.orange1
};
palette.state = {
  success: palette.green4,
  warning: palette.orange1,
  error: palette.red2
};
palette.social = {
  facebook: '#3b5998',
  google: '#c53929'
};

exports.default = palette;