/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const regex = new RegExp(`^${p}$`)
    // console.log(s.match(regex))
    if (p.includes('.') || p.includes('*')) {
        return regex.test(s)
    } else {
        return s === p
    }
}

const s = 'mississippi',
    p = 'mis*is*p*.'
const result = isMatch(s, p)
console.log(result)
// Output: false
// Explanation: "a" does not match the entire string "aa".
