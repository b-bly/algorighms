/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const __sortColors = function (nums) {
    let left = 0
    let right = left + 1
    while (left < nums.length - 1) {
        right = left + 1
        if (nums[left] > nums[left + 1]) {
            while (left >= 0) {
                if (nums[left] > nums[left + 1]) {
                    const a = nums[left]
                    const b = nums[left + 1]
                    nums[left] = b
                    nums[left + 1] = a
                }
                left--
            }
            left = right - 1
        }
        left++
    }

    return nums
}

const sortColors = (nums) => {
    let left = 0
    let mid = 0
    let right = nums.length - 1;

    while (mid <= right) {
        if (nums[mid] === 0) {
            ;[nums[left], nums[mid]] = [nums[mid], nums[left]]
            left ++
            mid ++
        } else if (nums[mid] === 1) {
          mid ++
        } else {
          [nums[mid], nums[right]] = [nums[right], nums[mid]]
          right--
        }
    }
    return nums
}

// faster
var _sortColors = function (nums) {
    let low = 0 // Boundary for 0s
    let mid = 0 // Current element
    let high = nums.length - 1 // Boundary for 2s

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap 0 to the front
            ;[nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++
            mid++
        } else if (nums[mid] === 1) {
            // 1s stay in the middle
            mid++
        } else if (nums[mid] === 2) {
            // Swap 2 to the back
            ;[nums[mid], nums[high]] = [nums[high], nums[mid]]
            // IMPORTANT: Don't increment mid here because the new
            // nums[mid] from the back hasn't been checked yet!
            high--
        }
    }
    return nums
}

// https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=two-pointers
let nums = [2, 0, 2, 1, 1, 0]
// Output: [0,0,1,1,2,2]
// Example 2:

// nums = [2, 0, 1]
// Output: [0,1,2]

const result = sortColors(nums)
console.log(result)
