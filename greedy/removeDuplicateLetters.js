/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let arr = s.split('').sort().join('')
  let result = arr[0]
  for(let i = 1; i < arr.length; i++) {
    const a = arr[i - 1]
    const b = arr[i]
    if (a !== b) {
      result += b
    }
  }

  return result
}

let s = "bcabc"
// Output: "abc"
// Example 2:

s = "cbacdcbc"
// Output: "acdb"
const result = removeDuplicateLetters(s)
console.log(result)