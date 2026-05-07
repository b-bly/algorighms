/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.map(n => String(n))
  nums.sort((a, b) => (b + a) - (a + b))
  if (nums[0] === '0') return '0'
  return nums.join('') 
}

let nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

const result = largestNumber(nums)
console.log(result)