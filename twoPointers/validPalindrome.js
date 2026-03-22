
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const _s = s.replace(/[^A-Za-z0-9]/ig, '').toLowerCase()
    let left = 0
    let right = _s.length - 1
    while (left <= right) {
      if (_s[left] !== _s[right]) {
        return false
      }
      left++
      right --
    }

    return true
};


let s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

 s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

s = " "
// Output: true

const result = isPalindrome(s)
console.log(result)