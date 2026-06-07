/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b)
    let endIndex = nums.length - 1
    let midIndex = Math.floor((nums.length - 1) / 2)
    for (let i = 0; i < nums.length; i++) {
        if (i % 2) {
            nums[i] = sorted[endIndex--]
        } else {
            nums[i] = sorted[midIndex--]
        }
    }
}

// Example 1:

// Input: nums = [1,5,1,1,6,4]
// Output: [1,6,1,5,1,4]
// Explanation: [1,4,1,5,1,6] is also accepted.
// Example 2:

// Input: nums = [1,3,2,2,3,1]
// Output: [2,3,1,3,1,2]
