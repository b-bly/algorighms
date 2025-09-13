/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//     let result = x
//     const index = Math.abs(n)
//     if (n === 0) {
//         return 1
//     } else  {
    
//     for (let i = 1; i < index; i++) {
//         result *= x
//     }
//     if (n < 0) {
//       result = 1/result;
//     }
  
//   }
//   return result
// }

var myPow = function (x, n) {
    let result = x
    let exp = n
    if (n < 0) {
      x = 1/x
      exp = -exp
    }
    while (exp > 0) {
      if (exp % 2 === 1) {
        result *= x // multiply if rightmost bit = 1 (if num is odd)
      }
      x *= x // square base
      exp = Math.floor(exp / 2) // shift right
    }

    return result
}



const answer = myPow(2, -2)
console.log(answer)

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
