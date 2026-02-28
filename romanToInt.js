
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
      const current = map[s[i]]
      const next = map[s[i + 1]]
      if (next > current) {
        result -= current
      } else {
        result += current
      }
    }
    return result;
};

let s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const result = romanToInt(s);
console.log(result)