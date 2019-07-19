const palette = {
  lightBlack: '#2c2c2c',
  lightBlackIntense: '#232323',
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
  whiteIntense: '#f3f5f7',
  black: '#000000',
  none: 'transparent',
}

const background = {
  black: palette.black,
  dark: palette.lightBlackIntense,
  intense: palette.lightBlack,
  medium: palette.grey,
  light: palette.lightGrey,
  bright: palette.whiteIntense,
  white: palette.white,
  none: palette.none,
}
const text = {
  primary: '#333333',
  secondary: '#626262',
  gray: '#bbbbbb',
  lightGray: '#e7ecee',
}
const primary = {
  gray: palette.lightGreyIntense,
  blue: palette.blue,
  green: palette.turquoiseIntense,
  pink: palette.violet,
  red: palette.brownIntense,
  orange: palette.yellowOrangeIntense,
}
const state = {
  success: palette.mintIntense,
  warning: palette.yellowOrangeIntense,
  error: palette.redIntense,
}
const social = {
  facebook: '#3b5998',
  google: '#c53929',
}

export default {
  ...palette,
  background,
  text,
  primary,
  state,
  social,
}
