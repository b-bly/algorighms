/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const result = []
    const limit = 9
    const sum = (arr) => arr.reduce((acc, num) => (acc += num), 0)
    const backtrack = (start, path) => {
        if (sum(path) === n && path.length === k) {
            result.push([...path])
            return
        } else if (start > 9 || path.length > k) {
            return
        }
        for (let i = start; i <= limit; i++) {
            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(1, [])
    return result
}

let k = 3,
    n = 7
// Output: [[1, 2, 4]]
;(k = 4), (n = 1)
// Output: []
 ;(k = 3), (n = 9)
//  Output: [
//      [1, 2, 6],
//      [1, 3, 5],
//      [2, 3, 4],
//  ]
k = 9, n  = 45
// output [[1,2,3,4,5,6,7,8,9]]


const result = combinationSum3(k, n)
console.log(result)
