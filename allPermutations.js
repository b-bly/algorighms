/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (true === used[i]) {
        continue;
      }
      path.push(nums[i])
      used[i] = true
      backtrack(path, used)

      // backtrack
      path.pop();
      used[i] = false
    }
  }
  backtrack([], Array.from(nums.length).fill(false))
  return result;
}
// Example 1:

const nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
const result = permute(nums);
console.log(result);
