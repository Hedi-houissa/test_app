export const screensizeInt = {
  xs: 420,
  sm: 600,
  md: 960,
  tb: 1024,
  lg: 1280,
  xl: 1440,
  '2xl': 1600,
  '3xl': 1920,
};

export const screensizePx = {
  xs: `${screensizeInt.sm.toString()}px`,
  sm: `${screensizeInt.sm.toString()}px`,
  md: `${screensizeInt.md.toString()}px`,
  tb: `${screensizeInt.tb.toString()}px`,
  lg: `${screensizeInt.lg.toString()}px`,
  xl: `${screensizeInt.xl.toString()}px`,
  '2xl': `${screensizeInt['2xl'].toString()}px`,
  '3xl': `${screensizeInt['3xl'].toString()}px`,
};

export const device = {
  xs: `(max-width: ${screensizePx.sm})`,
  sm: `(max-width: ${screensizePx.sm})`,
  md: `(max-width: ${screensizePx.md})`,
  tb: `(max-width: ${screensizePx.tb})`,
  lg: `(max-width: ${screensizePx.lg})`,
  xl: `(max-width: ${screensizePx.xl})`,
  '2xl': `(max-width: ${screensizePx['2xl']})`,
  '3xl': `(max-width: ${screensizePx['3xl']})`,
};

export const deviceMin = {
  xs: `(min-width: ${screensizePx.sm})`,
  sm: `(min-width: ${screensizePx.sm})`,
  md: `(min-width: ${screensizePx.md})`,
  ml: `(max-width: ${screensizePx.ml})`,
  lg: `(min-width: ${screensizePx.lg})`,
  xl: `(min-width: ${screensizePx.xl})`,
  '2xl': `(min-width: ${screensizePx['2xl']})`,
  '3xl': `(max-width: ${screensizePx['3xl']})`,
};
