/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const board = []
    for (let i = 0; i < m; i++) {
      board.push([])
        for (let j = 0; j < n; j++) {
            board[i][j] = 0
        }
    }
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
      return 0
    }
    board[0][0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                board[i][j] = 0
            } else {
                if (i > 0) {
                    board[i][j] += board[i - 1][j]
                }
                if (j > 0) {
                    board[i][j] += board[i][j - 1]
                }
            }
        }
    }
    return board[m-1][n-1]
}
let obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
]
// Output: 2
const result = uniquePathsWithObstacles(obstacleGrid)
console.log(result)