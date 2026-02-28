/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const result = []
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry
    if (i >= 0) {
      sum += Number(a[i])
      i--
    }
    if (j >= 0) {
      sum += Number(b[j])
      j--
    }
    const value = sum % 2
    result.unshift(value)
    carry = Math.floor(sum / 2)
  }
  return result.join('')
}
// Example 1:

let a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
const result = addBinary(a, b)
console.log(result)