// https://en.wikipedia.org/wiki/CMYK_color_model
// https://en.wikipedia.org/wiki/HSL_and_HSV
// https://en.wikipedia.org/wiki/RGB_color_model

// https://github.com/python/cpython/blob/3.11/Lib/colorsys.py

const { abs, max, min } = Math;

/**
 * Convert decimal to RGB (red, green, blue).
 *
 * ```js
 * const [r, g, b] = rgb(0xff0000);
 * // => [255, 0, 0]
 * ```
 *
 * @param {number} n
 * @returns {[r: number, g: number, b: number]}
 */
export const rgb = (n) => [n >> 16, n >> 8 & 255, n & 255];

/**
 * Convert RGB to CMYK (cyan, magenta, yellow, key/black). Values are returned as percentages.
 *
 * ```js
 * const [c, m, y, k] = rgbToCmyk(120, 140, 160);
 * // => [0.25, 0.125, 0, 0.37254901960784315]
 * ```
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {[c: number, m: number, y: number, k: number]}
 */
export const rgbToCmyk = (r, g, b) => {
  const k = max(r, g, b);
  if (k === 0) {
    return [0, 0, 0, 1];
  }
  const c = 1 - r / k;
  const m = 1 - g / k;
  const y = 1 - b / k;
  return [c, m, y, 1 - k / 255];
};

/**
 * Convert CMYK to RGB.
 *
 * ```js
 * const [r, g, b] = cmykToRgb(.2, .3, .4, .5);
 * // => [102, 89.25, 76.5]
 * ```
 *
 * @param {number} c
 * @param {number} m
 * @param {number} y
 * @param {number} k
 * @returns {[r: number, g: number, b: number]}
 */
export const cmykToRgb = (c, m, y, k) => {
  if (k === 1) {
    return [0, 0, 0];
  }
  const x = 1 - k;
  return [255 * (x - c * x), 255 * (x - m * x), 255 * (x - y * x)];
};

/**
 * Convert RGB to HLS (hue, lightness, saturation). Values are returned as percentages.
 *
 * ```js
 * const [h, l, s] = rgbToHls(60, 140, 170);
 * // => [0.5454545454545454, 0.45098039215686275, 0.4782608695652174]
 * ```
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {[h: number, l: number, s: number]}
 */
export const rgbToHls = (r, g, b) => {
  const mx = max(r, g, b);
  const mn = min(r, g, b);
  const c = mx + mn;
  const l = c / 510;
  if (mn === mx) {
    return [0, l, 0];
  }
  const d = mx - mn;
  const s = d / 255 / (1 - abs(2 * l - 1));
  let h;
  if (r === mx) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (g === mx) {
    h = (b - r) / d + 2;
  } else {
    h = (r - g) / d + 4;
  }
  h /= 6;
  return [h, l, s];
};

/**
 * Convert RGB to HSV (hue, saturation, value/brightness). Values are returned as percentages.
 *
 * ```js
 * const [h, s, v] = rgbToHsv(60, 140, 170);
 * // => [0.5454545454545454, 0.6470588235294118, 0.6666666666666666]
 * ```
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {[h: number, s: number, v: number]}
 */
export const rgbToHsv = (r, g, b) => {
  const mx = max(r, g, b);
  const mn = min(r, g, b);
  const v = mx / 255;
  if (mn === mx) {
    return [0, 0, v];
  }
  const d = mx - mn;
  const s = d / mx;
  let h;
  if (r === mx) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (g === mx) {
    h = (b - r) / d + 2;
  } else {
    h = (r - g) / d + 4;
  }
  h /= 6;
  return [h, s, v];
};
