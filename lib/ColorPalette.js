'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var palette = {
  black: '#2c2c2c',
  blackIntense: '#232323',
  turquoise: '#00bf93',
  turquoiseIntense: '#16a086',
  mint: '#2dcc70',
  mintIntense: '#27ae61',
  green: '#42e453',
  greenIntense: '#24c333',
  yellow: '#ffff25',
  yellowIntense: '#d9d921',
  yellowOrange: '#f1c40f',
  yellowOrangeIntense: '#f39c11',
  brown: '#e67f22',
  brownIntense: '#d25400',
  orange: '#ff944e',
  orangeIntense: '#ff5500',
  red: '#e84c3d',
  redIntense: '#c1392b',
  blue: '#3598db',
  blueIntense: '#297fb8',
  darkBlue: '#34495e',
  darkBlueIntense: '#2d3e50',
  lightGrey: '#ecf0f1',
  lightGreyIntense: '#bec3c7',
  grey: '#95a5a5',
  greyIntense: '#7e8c8d',
  magenta: '#ef3e96',
  magentaIntense: '#e52383',
  violet: '#df21b9',
  violetIntense: '#be127e',
  purple: '#9a59b5',
  purpleIntense: '#8d44ad',
  lightBlue: '#7dc2d2',
  lightBlueIntense: '#1cabbb',
  white: '#ffffff',
  none: '#000000'
};

palette.legacy = {
  black: palette.none, // '#000000',
  green1: palette.turquoise, // '#00bf93',
  green2: palette.turquoiseIntense, // '#16a086',
  green3: palette.mint, // '#2dcc70',
  green4: palette.mintIntense, // '#27ae61',
  green5: palette.green, // '#42e453',
  green6: palette.greenIntense, // '#24c333',
  yellow1: palette.yellow, // '#ffff25',
  yellow2: palette.yellowIntense, // '#d9d921',
  yellow3: palette.yellowOrange, // '#f1c40f',
  orange1: palette.yellowOrangeIntense, // '#f39c11',
  orange2: palette.brown, // '#e67f22',
  orange3: palette.brownIntense, // '#d25400',
  orange4: palette.orange, // '#ff944e',
  orange5: palette.orangeIntense, // '#ff5500',
  red1: palette.red, // '#e84c3d',
  red2: palette.redIntense, // '#c1392b',
  pink1: palette.magenta, // '#ef3e96',
  pink2: palette.magentaIntense, // '#e52383',
  pink3: palette.violet, // '#df21b9',
  pink4: palette.violetIntense, // '#be127e',
  purple1: palette.purple, // '#9a59b5',
  purple2: palette.purpleIntense, // '#8d44ad',
  blue1: palette.lightBlue, // '#7dc2d2',
  blue2: palette.lightBlueIntense, // '#1cabbb',
  blue3: palette.blue, // '#3598db',
  blue4: palette.blueIntense, // '#297fb8',
  blue5: palette.darkBlue, // '#34495e',
  blue6: palette.darkBlueIntense, // '#2d3e50',
  gray0: '#f8f8f8',
  gray1: palette.lightGrey, // '#ecf0f1',
  gray2: palette.lightGreyIntense, // '#bec3c7',
  gray3: palette.grey, // '#95a5a5',
  gray4: palette.greyIntense, // '#7e8c8d',
  background: {
    gray: palette.lightGrey,
    light: '#2c2c2c',
    dark: palette.blackIntense
  },
  text: {
    primary: '#333333',
    secondary: '#626262',
    gray: '#bbbbbb',
    lightGray: '#e7ecee'
  },
  primary: {
    gray: palette.gray2,
    blue: palette.blue3,
    green: palette.green2,
    pink: palette.pink3,
    red: palette.orange3,
    orange: palette.orange1
  },
  state: {
    success: palette.green4,
    warning: palette.orange1,
    error: palette.red2
  },
  social: {
    facebook: '#3b5998',
    google: '#c53929'
  }
};

exports.default = palette;