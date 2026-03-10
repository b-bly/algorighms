const { expect } = require('chai')
const numberOfArithmeticSlices = require('./arithmaticSlices.js')

it('Should find subarrays for valid 4 member array', () => {
  let nums = [1, 2, 3, 4]
  const result = numberOfArithmeticSlices(nums)
  expect(result).to.equal(3)
})

it('Should return zero for arrays less than 3 in length', () => {
  const result = numberOfArithmeticSlices([1])
  expect(result).to.equal(0)
})

// let nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0