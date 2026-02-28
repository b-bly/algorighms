/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let count = 0;
  const columns = new Set()
  const diagF = new Set() // diagonal / row + col
  const diagB = new Set() // diagonal backslash \
  const backtrack = (row) => {
    if (row === n) {
      count ++
      return
    }
    for (let col = 0; col < n; col ++) {
      if (columns.has(col) || diagF.has(row + col) || diagB.has(row - col)) {
        continue
      }
      // valid placement
      columns.add(col)
      diagF.add(row + col)
      diagB.add(row - col)
      backtrack(row + 1)
      columns.delete(col)
      diagF.delete(row + col)
      diagB.delete(row - col)
    }
  }
  backtrack(0)
  return count
}

const n = 4
// 2
const result = solveNQueens(n)
console.log(result)