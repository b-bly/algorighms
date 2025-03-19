
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    // Check for palindrome
    // length of string drives search
    // Begin with s.length and decrease incrementally
    // shift slice from left to right, then searchFrame.length - 1
    // exit at first palindrome
    let longest = 0
    for (let frame = s.length; frame > 0; frame--) {
        // continue if frame + start > s.length or something
        // start ++
        for (let start = 0; start + frame <= s.length; start++) {
            const end = frame + start;
            const str = s.slice(start, end)
            const isPal = isPalendrome(str)
            if (isPal === true) {
              longest = str;
              break;
            }
        }
        if (longest !== 0) {
          break;
        }
    }
    return longest;

    function isPalendrome(str) {
        var len = Math.floor(str.length / 2)
        for (var i = 0; i < len; i++) if (str[i] !== str[str.length - i - 1]) return false
        return true
    }
}

const s = 'babad'
//  "bab"
const result = longestPalindrome(s)
console.log(result)
