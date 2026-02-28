/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const result = []
  for(let x = 0; x < n; x++) {
    const row = []
    for(let y = 0; y < n; y++) {
      row.push(0)
    }
    result.push(row)
  }
  let top = 0;
  let right = n - 1
  let bottom = n - 1
  let left = 0
  let value = 1
  while(top <= bottom && left <= right) {
    for (let x = left; x <= right; x++) {
      result[top][x] = value
      value++
    }
    top++
    for(let y = top; y <= bottom; y++) {
      result[y][right] = value
      value++
    }
    right--
    if (top <= bottom) {
      for(let x = right; x >= left; x--) {
        result[bottom][x] = value
        value++
      }
    }
    bottom--
    if (left <= right) {
      for (let y = bottom; y >= top; y--) {
        console.log(y)
        result[y][left] = value
        value++
      }
    }
    left++
  }
  return result;
}

let n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// n = 1
// Output: [[1]]
const result = generateMatrix(n);
console.log(result)