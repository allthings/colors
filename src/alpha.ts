import hexToRgb from './hexToRgb'
import rgbToHex from './rgbToHex'

export interface RGBColor {
  r: number
  g: number
  b: number
}

function calculateTransparentColor(color: RGBColor, alpha: number) {
  const blendingColor = {
    r: 255,
    g: 255,
    b: 255,
  }

  return rgbToHex(
    (1 - alpha) * blendingColor.r + alpha * color.r,
    (1 - alpha) * blendingColor.g + alpha * color.g,
    (1 - alpha) * blendingColor.b + alpha * color.b
  )
}

export default function alpha(hex: string, alpha: number, actualColor: boolean) {
  const rgb = hexToRgb(hex)
  if (rgb === null) {
    throw new Error(
      `\`hex\` value provided to \`alpha\` is not a HEX color, \`${hex}\` given.`
    )
  }

  return actualColor
    ? calculateTransparentColor(rgb, alpha)
    : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
