/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   function backtrack(i) {
//     if (i === nums.length - 1) {
//       return true;
//     }
//     const maxJump = Math.min(i + nums[i], nums.length - 1);
//     for(let j = i + 1; j <= maxJump; j++) {
//       if(backtrack(j)) {
//         return true
//       }
//     }
//     return false;
//   }
//   return backtrack(0)
// }

const canJump = function (nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxJump < i) {
      // impossible to solve
      return false;
    }
    maxJump = Math.max(maxJump, i + nums[i]);
    if (maxJump >= nums.length - 1) {
      return true
    }
  }
  return false
}

// Example 1:

const nums = [2, 3, 1, 1, 4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// const nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const result = canJump(nums)
console.log(result)
