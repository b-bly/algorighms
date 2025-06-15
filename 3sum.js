/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                if (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                if (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left ++;
                right --;
            }
            if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result
}

const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)
console.log(result)
// Output: [
//     [-1, -1, 2],
//     [-1, 0, 1],
// ]
