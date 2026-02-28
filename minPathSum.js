/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // const sums = []
    let min;
    const backtrack = (y, x, sum) => {
        sum += grid[y][x]

        if (y >= grid.length - 1 && x >= grid[0].length - 1) {
            // sums.push(sum)
            if (!min) {
              min = sum
            } else if (sum < min) {
              min = sum
            }
            return
        }
        if (y < grid.length - 1) {
            backtrack(y + 1, x, sum)
        }
        if (x < grid[0].length - 1) {
            backtrack(y, x + 1, sum)
        }
    }
    backtrack(0, 0, 0)
    // return Math.min(...sums)
    return min
}

let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

grid = [[1,2,3],[4,5,6]]
// Output: 12

const result = minPathSum(grid)
console.log(result)
