import hexToRgb from './hexToRgb'
import rgbToHex from './rgbToHex'

/* eslint-disable sort-keys, typescript-sort-keys/interface */
export interface IRGBColor {
  r: number
  g: number
  b: number
}

const calculateTransparentColor = (color: IRGBColor, alphaNumber: number) => {
  const blendingColor = {
    r: 255,
    g: 255,
    b: 255,
  }

  return rgbToHex(
    (1 - alphaNumber) * blendingColor.r + alphaNumber * color.r,
    (1 - alphaNumber) * blendingColor.g + alphaNumber * color.g,
    (1 - alphaNumber) * blendingColor.b + alphaNumber * color.b,
  )
}

const alpha = (
  hex: string,
  alphaNumber: number,
  actualColor?: boolean,
): string => {
  const rgb = hexToRgb(hex)
  if (rgb === undefined) {
    throw new Error(
      `\`hex\` value provided to \`alpha\` is not a HEX color, \`${hex}\` given.`,
    )
  }

  return actualColor
    ? calculateTransparentColor(rgb, alphaNumber)
    : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alphaNumber})`
}

export default alpha
