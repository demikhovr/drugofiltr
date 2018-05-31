'use strict';

/**
 * Проверка наличия подстроки в строке
 * @param {string} full
 * @param {string} chunk
 * @return {boolean}
 */
export function isMatching(full, chunk) {
    return full.toLowerCase().includes(chunk.toLowerCase());
}

