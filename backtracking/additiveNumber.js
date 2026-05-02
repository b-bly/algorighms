/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    let result = false
    if (num.length < 3) return false
    const backtrack = (_start, a) => {
        // succes check
        if (_start === num.length) {
            result = true
            return
        }
        if (_start + 2 > num.length) return

        for (let end = _start + 1; end < num.length; end++) {
            // assign
            const b = num.slice(_start, end)
            const sum = Number(a) + Number(b)
            if (num[end] === '0') continue // skip cand leading zero
            // explore
            for (let sumEnd = end + 1; sumEnd <= num.length; sumEnd++) {
                const cand = Number(num.slice(end, sumEnd))
                // console.log(`a ${a} b ${b} sum ${sum} cand ${cand}`)
                if (sum === cand) {
                    if (sumEnd === num.length) result = true
                    backtrack(end, b)
                    break
                }
            }
        }
    }
    backtrack(1, num[0])
    return result
}

let num = '112358'
// Output: true
// Explanation:
// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:

// num = '199100199'
// Output: true
//1, 99, 100, 199.

const result = isAdditiveNumber(num)
console.log(result)
