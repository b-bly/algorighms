/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let zeros = 0
  let left = 0
  let max = 0
  for(let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros ++
    while(zeros > k) {
      if (nums[left] === 0) zeros --
      left ++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10

const result = longestOnes(nums, k)
console.log(result)
