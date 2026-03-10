// too slow
/**
 * @param {number[]} nums
 * @return {number}
 */
const _numberOfArithmeticSlices = function (nums) {
    let count = 0
    const isValid = (subArr) => {
        let diff = subArr[0] - subArr[1]
        const result = subArr.reduce((_acc, n, i) => {
            if (i === 0) return true
            const nextDiff = subArr[i - 1] - n
            return nextDiff === diff && _acc === true
        }, 0)
        return result
    }
    // slide window for subarrays starting with 3
    for (let windowLength = 3; windowLength <= nums.length; windowLength++) {
        let start = 0
        let end = start + windowLength // index + 1 over for slice
        while (end <= nums.length) {
            const subArr = nums.slice(start, end)
            // check if valid (a - b should be b - c...)
            // increment number of arrays
            const valid = isValid(subArr)
            if (valid === true) {
                count++
            }
            start++
            end = start + windowLength // index + 1 over for slice
        }
    }
    return count
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  let count = 0
  let runningTotal = 0
  for (let i = 2; i < nums.length; i++) {
    const c = nums[i]
    const b = nums[i - 1]
    const a = nums[i - 2]
    if (c - b === b - a) {
      runningTotal += 1
      count += runningTotal
    } else {
      runningTotal = 0
    }
  }
  return count
}

let nums = [1, 2, 3, 4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0
const result = numberOfArithmeticSlices(nums)
console.log(result)

module.exports = numberOfArithmeticSlices
