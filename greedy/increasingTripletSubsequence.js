var increasingTriplet = function (nums) {
    if (nums.length < 3) return false

    let first = nums[0]
    let second = null

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]

        if (num <= first) {
            first = num
        } else if (second === null || num <= second) {
            second = num
        } else {
            return true
        }
    }

    return false
}

let nums = [1, 2, 3, 4, 5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

nums = [5, 4, 3, 2, 1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

nums = [2, 1, 5, 0, 4, 6]
// Output: true
// Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
nums = [1, 2, 3, 4, 5]

const result = increasingTriplet(nums)
console.log(result)
