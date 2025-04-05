/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = new Set()
  let skip = false
  nums.forEach((n1, i) => {
    skip = false

    nums.forEach((n2, j) => {
      if (i == j) {
        skip = true;
      }
      nums.forEach((n3, k) => {
        if (k == j || k == i) {
          skip == true
        }
        if (!skip && n1 + n2 + n3 === 0) {
          const arr = ([n1, n2, n3].sort((a, b) => b - a))
          result.add(arr)
        }
      })
    })
  })
  const uniqueArrays = Array.from(result).map(str => console.log(str))
  return uniqueArrays;
}

const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums);
console.log(result)
// Output: [
//     [-1, -1, 2],
//     [-1, 0, 1],
// ]
