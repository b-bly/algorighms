/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []

  const backtrack = (remaining, combination, start) => {
    if (remaining == 0) {
      result.push(combination)
    }
    if (remaining < 0) {
      // backtrack
      return
    }
    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i]
      // assume the candidate will work
      // combination.push(candidate)
      const _combination = [
        ...combination,
        candidate
      ]
      const _remaining = remaining - candidate
      backtrack(_remaining, _combination, i) // can reuse same element, so not i + 1
      // combination.pop()
    }
  }
  backtrack(target, [], 0)
  return result
}
const candidates = [2,3,6,7], target = 7

const result = combinationSum(candidates, target);
console.log(result)

// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]