/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = []

  const backtrack = (path, n) => {
    result.push([...path])
    for(let i = n; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(path, i + 1)
      path.pop()
    }
  }
  backtrack([], 0)
  return result
}

// Example 1:

let nums = [1, 2, 3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
const result = subsets(nums)
console.log(result)