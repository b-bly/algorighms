/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []

  const backtrack = (start, path) => {
    if (path.length === k) {
      result.push([...path])
      return
    }

    for(let i = start; i <= n; i++) {
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(1, [])
  return result
}

let n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]

const result = combine(n, k)
console.log(result)
