// too slow
var _rotate = function (nums, k) {
  for(let i = 0; i < k; i++) {
    const num = nums.pop()
    nums.unshift(num)
  }
  return nums
}

const rotate = (nums, k) => {
  const n = nums.length
  k = k % n
  let rNums = [
    ...nums.slice(-k),
    ...nums.slice(0, n - k)
  ]
  for (let i = 0; i < n; i++) {
    nums[i] = rNums[i]
  }
  return nums
}

let nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

const result = rotate(nums, k)
console.log(result)