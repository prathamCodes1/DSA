/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0;
    let length = 0;
    let maxLength = 0;
    const map = new Map();
    while (j < s.length) {
        const existingIndex = map.get(s[j]);
        map.set(s[j], j);
        if (existingIndex >= i) {
            i = existingIndex + 1;
            length = j - i + 1;
        } else {
            length++;
            maxLength = Math.max(length, maxLength);
        }
        j++;
    }
    return maxLength;
};