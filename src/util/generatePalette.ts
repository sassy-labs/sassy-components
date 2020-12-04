const generatePalette = (
  hue: number,
  saturation: number
): {
  [key: string]: string | number;
} => {
  const palette: { [key: string]: string | number } = {};
  for (let i = 0; i <= 95; i += 5) {
    palette[i] = hsl(hue, saturation, i);
  }
  palette['hue'] = hue;
  palette['saturation'] = saturation;
  return palette;
};

const hsl = (h: number, s: number, l: number): string =>
  `hsl(${h},${s}%,${l}%)`;

export { generatePalette as default };
