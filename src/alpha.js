import hexToRgb from './hexToRgb'

export default function alpha (hex, alpha) {
  const rgb = hexToRgb(hex)
  if (rgb === null) throw new Error(`\`hex\` value provided to \`alpha\` is not a HEX color, \`${hex}\` given.`)
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
