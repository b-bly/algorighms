/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    nums.sort((a, b) => a - b)
    let longest = 0
    let left = 0
    for(let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > 1) {
        left++
      }
      if (nums[right] - nums[left] === 1) {
        longest = Math.max(longest, right - left + 1)
      }
    }
    return longest
}

let nums = [1, 3, 2, 2, 5, 2, 3, 7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

nums = [1, 2, 3, 4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// nums = [1, 1, 1, 1]

// Output: 0

nms = [1, 2, 2, 1]
// 4
const result = findLHS(nums)
console.log(result)
