/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//     function backtrack(i, pIndex, usedAsterisk = false) {
//         // check for success (i == s.length) overshot
//         if (pIndex >= p.length) {
//             return false
//         }
//         if (i === s.length - 1) {
//             return true
//         }


//         // loop check for string match
//         while (i < s.length && pIndex < p.length) {
//             if (p[pIndex] === '*') {
//                 if (usedAsterisk === false) {
//                     return backtrack(i + 1, pIndex)
//                 } else {
//                     return backtrack(i, pIndex, true)
//                 }
//             }
//             if (p[pIndex] !== '?' && s[i] !== p[pIndex]) {
//                 // not a match
//                 return false
//             }
//             i++
//             pIndex++
//         }
//         return backtrack(i, pIndex)
//     }
//     return backtrack(0, 0, false)
// }



// correct:
var isMatch = function (s, p) {
    const memo = {}

    function dp(i, j) {
        const key = `${i},${j}`
        // avoid repeated checks
        if (key in memo) return memo[key]

        // Base case: both strings are consumed
        if (i === s.length && j === p.length) return true

        // Pattern consumed but string isn't
        if (j === p.length) return false

        let match = false

        if (p[j] === '*') {
            // '*' matches zero or more characters
            match =
                dp(i, j + 1) || // '*' matches zero characters
                (i < s.length && dp(i + 1, j)) // '*' matches one char and continues
        } else {
            // Match current character or '?'
            if (i < s.length && (s[i] === p[j] || p[j] === '?')) {
                match = dp(i + 1, j + 1)
            } else {
                match = false
            }
        }

        memo[key] = match
        return match
    }

    return dp(0, 0)
}


// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c',
const s = 'aa',
    p = 'a'
// const s = 'aa', p = '*'
// const s = 'cb',
//     p = '?a'
const result = isMatch(s, p)
console.log(result)