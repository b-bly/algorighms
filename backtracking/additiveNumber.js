/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const search = (start, a, b) => {
    if (start === num.length) return true
    const sum = (BigInt(a) + BigInt(b)).toString()
    const cand = num.slice(start, start + sum.length)
    if (sum !== cand) return false
    return search(start + sum.length, b, sum)  
  }
  for(let i = 0; i <= num.length - 2; i++) {
    for (let j = 0; j <= num.length - 1; j++) {
      const a = num.slice(0, i)
      const b = num.slice(i, j)
      if (a.length > 1 && a[0] === 0) continue
      if (b.length > 1 && b[0] === 0) continue
      if (search(j, a, b) === true) return true
    }
  }
  return false
}

let num = '112358'
// Output: true
// Explanation:
// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:

num = '199100199'
// Output: true
//1, 99, 100, 199.

const result = isAdditiveNumber(num)
console.log(result)
