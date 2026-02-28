/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const regex =    /^[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?$/
  return regex.test(s)
}

//"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", 
// while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".
// Example 1:

let s = "0"

// Output: true

// Example 2:

// Input: s = "e"

// Output: false

// Example 3:

// Input: s = "."

// Output: false

module.exports = { isNumber }
