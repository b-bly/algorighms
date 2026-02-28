// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   let ways = 0;
//   function backtrack(stepsTaken, stepChoice) {
//     stepsTaken += stepChoice
//     if (stepsTaken > n) {
//       return;
//     }
//     if (stepsTaken === n) {
//       ways++
//       return;
//     }
//     backtrack(stepsTaken, 1)
//     backtrack(stepsTaken, 2)
//   }
//   backtrack(0, 0)
//   return ways
// }

const climbStairs = (n) => {
  if (n <= 2) {
    return n
  }
  let a = 1
  let b = 2
  for(let i = 3; i <=n; i++) {
    const curr = a + b;
    a = b;
    b = curr;
  }
  return b
}


// Example 1:

// const n = 2
const n = 3
const result = climbStairs(n);
console.log(result)

// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 