/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = []
    const isPalindrome = (cand) => {
        if (cand === cand.split('').reverse().join('')) return true
        return false
    }
    const backtrack = (path, start) => {
        if (start === s.length) {
            result.push([...path])
            return
        }
        for (let i = start; i < s.length; i++) {
            const cand = s.slice(start, i + 1)
            path.push(cand)
            if (isPalindrome(cand)) {
                backtrack(path, start + cand.length)
            }
            path.pop()
        }
    }
    backtrack([], 0, 0)
    return result
}
const s = 'aab'
// Output: [
//     ['a', 'a', 'b'],
//     ['aa', 'b'],
// ]

const result = partition(s)
console.log(result)
