
// Slow
var _minSubArrayLen = function (target, nums) {
    if (nums.reduce((n, acc) => n + acc, 0) < target) {
        return 0
    }
    let min = nums.length
    let left = 0
    let right = 1
    let sum = nums[0]
    while (left < nums.length && right <= nums.length) {
        // check if sum of sub array >= target
        const subArray = nums.slice(left, right)

        // if valid, update min and left++
        if (sum >= target) {
            if (subArray.length < min) {
                min = subArray.length
            }
            sum -= nums[left]
            left++
        } else {
            sum += nums[right]
            right++
        }

        // if not valid, right ++
    }
    return min
}

var minSubArrayLen = function (target, nums) {
    let left = 0
    let sum = 0
    let minLength = Infinity

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }

    return minLength === Infinity ? 0 : minLength
}

let target = 7,
    nums = [2, 3, 1, 2, 4, 3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

//  target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

//  target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// nums = [2, 3, 1, 1, 1, 1, 1]
// target = 5
// output 2

const result = minSubArrayLen(target, nums)
console.log(result)
