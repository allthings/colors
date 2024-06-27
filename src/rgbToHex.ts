const rgbToHex = (red: number, green: number, blue: number): string => {
  // eslint-disable-next-line no-bitwise
  const rgb = blue | (green << 8) | (red << 16)

  return `#${(0x1_00_00_00 + rgb).toString(16).slice(1)}`
}

export default rgbToHex
