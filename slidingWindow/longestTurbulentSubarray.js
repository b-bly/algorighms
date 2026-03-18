/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let left = 0
    let prev = 0
    let max = 1
    for(let right = 1; right < arr.length; right++) {
      let curr = 0
      if (arr[right - 1] < arr[right]) curr = 1
      else if (arr[right - 1] > arr[right]) curr = -1
      if (curr === 0) {
        // a === b
        left = right
      } else if (curr === prev) {
        // a > b > c
        left = right - 1
      } else {
        max = Math.max(max, right - left + 1)
        prev = curr
      }
    }
    return max
}

let arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]
// Output: 5
// Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
// Example 2:

// Input: arr = [4,8,12,16]
// Output: 2
// Example 3:

// Input: arr = [100]
// Output: 1
const result = maxTurbulenceSize(arr)
console.log(result)