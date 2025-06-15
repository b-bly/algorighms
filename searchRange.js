/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */function searchRange(nums, target) {
     function findLeft() {
         let left = 0,
             right = nums.length - 1
         while (left <= right) {
             const mid = Math.floor((left + right) / 2)
             if (nums[mid] < target) {
                 left = mid + 1
             } else {
                 right = mid - 1
             }
         }
         return left
     }

     function findRight() {
         let left = 0,
             right = nums.length - 1
         while (left <= right) {
             const mid = Math.floor((left + right) / 2)
             if (nums[mid] <= target) {
                 left = mid + 1
             } else {
                 right = mid - 1
             }
         }
         return right
     }

     const leftIndex = findLeft()
     const rightIndex = findRight()

     if (leftIndex <= rightIndex && nums[leftIndex] === target && nums[rightIndex] === target) {
         return [leftIndex, rightIndex]
     }

     return [-1, -1]
 }
 

module.exports = searchRange
