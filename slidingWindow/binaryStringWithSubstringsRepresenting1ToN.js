/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
  
  let binaryStrings = []
  for(let i = 1; i <= n; i++) {
    const binaryString = i.toString(2)
    // binaryStrings.push(binaryString)
    if (s.includes(binaryString) === false) return false
  }
  return true
}

let s = "0110", n = 3
// Output: true
// Example 2:

s = "0110", n = 4
// Output: false

const result = queryString(s, n)
console.log(result)
