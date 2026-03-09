/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let nSet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (nSet.has(nums[i])) {
      return true
    }
    nSet.add(nums[i])
    if (i >= k) {
      nSet.delete(nums[i - k])
    }
  }
  return false
}

// Example 1:

let nums = [1,2,3,1], k = 3

// Output: true
// Example 2:

nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

nums = [1,2,3,1,2,3], k = 2
// Output: false
const result = containsNearbyDuplicate(nums, k)
console.log(result)