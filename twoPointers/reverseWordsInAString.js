/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = s.trim().split(/\s+/g).reverse().join(' ')
  return result;
}

let s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

 s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// s = "a good   example"
// Output: "example good a"

const result = reverseWords(s)
console.log(result)
