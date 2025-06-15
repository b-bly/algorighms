/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 1st descending element from the end
    let i = nums.length - 2
    while (nums[i] >= nums[i + 1]) {
      i --
    }

    // find next larger element and swap

    if (i >= 0) {
      let j = nums.length - 1
      while (nums[j] <= nums[i]) {
        j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    // reverse suffix
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start ++
      end --
    }
}

let nums = [1, 2, 3]
nextPermutation(nums)
console.log(nums) // Output: [1, 3, 2]

nums = [3, 2, 1]
nextPermutation(nums)
console.log(nums) // Output: [1, 2, 3]

nums = [1, 1, 5]
nextPermutation(nums)
console.log(nums) // Output: [1, 5, 1]
