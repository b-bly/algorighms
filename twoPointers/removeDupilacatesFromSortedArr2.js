
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 2
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== nums[left - 2]) {
      // duplicate (if left === right, there's no swap)
      nums[left] = nums[right]
      left ++
    }
  }
// left = k
  return left
};


let nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]

const result = removeDuplicates(nums)
console.log(result)