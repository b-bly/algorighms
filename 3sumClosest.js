/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return sum;
      }
      const closestMargin = Math.abs(closest - target);
      const sumMargin = Math.abs(sum - target)
      if (sumMargin < closestMargin) {
        closest = sum;
      }
      if (sum < target) {
        left ++;
      } else {
        right --
      }
    }
  }
  return closest;
}

const nums = [-1, 2, 1, -4]
const target = 1
const result = threeSumClosest(nums, target);
console.log(result)


//  Output: 2
