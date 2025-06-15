/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    if (nums[mid] === target) {
      return mid;
    }

    // left is sorted
    if(nums[left] <= nums[mid])  {
      // target is on left
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        // target on right
        left = mid + 1
      }
    } else {
      // right is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // it's on right side
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
   }
  return -1
}
module.exports = search;