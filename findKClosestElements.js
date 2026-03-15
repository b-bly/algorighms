/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0
    let right = arr.length - k
    while (left < right) {
        const mid = Math.floor((right + left) / 2)
        const leftSideDiff = x - arr[mid]
        const rightSideDiff = arr[mid + k] - x
        if (leftSideDiff > rightSideDiff) {
            // right side is closer
            left = mid + 1
        } else {
            // left side is closer
            right = mid
        }
    }
    return arr.slice(left, left + k)
}

let arr = [1, 2, 3, 4, 5],
    k = 4,
    x = 3

// Output: [1,2,3,4]

// Example 2:

;(arr = [1, 1, 2, 3, 4, 5]), (k = 4), (x = -1)

// Output: [1,1,2,3]
const result = findClosestElements(arr, k, x)
console.log(result)
