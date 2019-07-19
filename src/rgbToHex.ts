export default function rgbToHex(red: number, green: number, blue: number) {
  const rgb = blue | (green << 8) | (red << 16)
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
