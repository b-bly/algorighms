/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// ? !results.includes does not work
var _subsetsWithDup = function (nums) {
  const results = []
  const backtrack = (subset) => {
    if (!results.includes(subset)) results.push([...subset])
    
    if (subset.length === nums.length) return

    for (let j = 0; j < nums.length; j++) {
      const cand = nums[j]
      subset.push(cand)
      backtrack(subset)
      subset.pop()
    }
  }
  backtrack([])
  return results
}

var subsetsWithDup = function (nums) {
  const results = []
  nums.sort((a, b) => a - b)
  const backtrack = (start, path) => {
    results.push([...path])
    for (let i = start; i < nums.length; i++) {
      // only allow repeated numbers for the first for loop iteration
      // 2nd and on will not pass
      if (i > start && nums[i] === nums[i - 1]) continue
      path.push(nums[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return results
}

let  nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

const result = subsetsWithDup(nums)
console.log(result)