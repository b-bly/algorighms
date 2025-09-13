/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let min = nums.length - 1
  // remaining = remaining distance to jump
  function backTrack(i, jumps, remaining) {
    // check success
    if (remaining === 0) {
      if (jumps < min) {
        min = jumps;
      }
    }

    // check failure
    if (remaining < 0 || i >= nums.length) {
      return;
    }

    // loop advance with next jump
    while(i < nums.length && remaining > 0) {
      const jump = nums[i]
      // remaining -= jump;
      i++
      // jumps++
      backTrack(i, jumps + 1, remaining - jump)
    }
  }
  backTrack(0, 0, nums.length - 1)
  return min;
}

/* You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1: */

// const nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

const nums = [2,3,0,1,4]
// Output: 2
const result = jump(nums);
// console.log(result)

// correct
var jump2 = function (nums) {
    let jumps = 0
    let currentEnd = 0
    let farthest = 0

    for (let i = 0; i < nums.length - 1; i++) {
      // 2, 4, 4, 4, 8
        farthest = Math.max(farthest, i + nums[i])

        if (i === currentEnd) {
          // currEnd 2, 8
          // jumps = 1, 2
            jumps++
            currentEnd = farthest
        }
    }

    return jumps
}

const nums2 = [2, 3, 1, 1, 4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// const nums = [2,3,0,1,4]
// Output: 2
const result2 = jump2(nums2)
console.log(result2)