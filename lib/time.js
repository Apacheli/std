// This module is browser-compatible.

/**
 * Sleep for `delay` amount of milliseconds.
 *
 * @param {number} [delay]
 */
export const sleep = (delay) => new Promise((r) => setTimeout(r, delay));
