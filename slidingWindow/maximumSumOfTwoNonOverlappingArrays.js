/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */


let nums = [0, 6, 5, 2, 2, 5, 1, 9, 4]
let firstLen = 1
let secondLen = 2
// Output: 20
// Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
// Example 2:

;(nums = [3, 8, 1, 3, 2, 1, 8, 9, 0]), (firstLen = 3), (secondLen = 2)
// Output: 29
// Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
// Example 3:

// nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
// Output: 31

const result = maxSumTwoNoOverlap(nums, firstLen, secondLen)
console.log(result)
