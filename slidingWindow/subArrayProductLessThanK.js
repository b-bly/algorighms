/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// double loop version
var _numSubarrayProductLessThanK = function (nums, k) {
    let count = 0

    for (let left = 0; left < nums.length; left++) {
        let product = 1

        for (let right = left; right < nums.length; right++) {
            product *= nums[right]

            if (product < k) {
                count++
            } else {
                break
            }
        }
    }

    return count
}

// # sub arrays = arr.length + 1 removes second loop ( right - left + 1)
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0
    let left = 0
    let product = 1
    let count = 0
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]

        while (product >= k) {
            product /= nums[left]
            left++
        }

        count += right - left + 1
    }

    return count
}

let nums = [10, 5, 2, 6],
    k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

nums = [1, 2, 3]
k = 0
// Output: 0

nums = [1,1,1]
k = 2
// 6

const result = _numSubarrayProductLessThanK(nums, k)
console.log(result)
