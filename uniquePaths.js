/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (y, x) {
    const board = []
    for (let i = 0; i < y; i++) {
        board.push([])
        for (let j = 0; j < x; j++) {
            board[i][j] = 1
        }
    }
    for (let i = 1; i < y; i++) {
        for (let j = 1; j < x; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1]
        }
    }
    return board[y - 1][x - 1]
}

let m = 3,
    n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3

const result = uniquePaths(m, n)
console.log(result)
