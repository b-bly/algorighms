/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    const sumsAtOrLessThanGoal = (nums, goal) => {
        if (goal < 0) return 0
        let left = 0
        let sum = 0
        let count = 0
        for (let right = 0; right < nums.length; right++) {
            sum += nums[right]
            while (sum > goal) {
                sum -= nums[left]
                left++
            }
            count += right - left + 1
        }
        return count
    }

    return sumsAtOrLessThanGoal(nums, goal) - sumsAtOrLessThanGoal(nums, goal - 1)
}

let nums = [1, 0, 1, 0, 1],
    goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

const result = numSubarraysWithSum(nums, goal)
console.log(result)
