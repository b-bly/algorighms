/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const board = []
    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push('.')
        }
        board.push(row)
    }
    const res = []
    const cols = new Set()
    const diag1 = new Set()
    const diag2 = new Set()

    function backtrack(row) {
        // check if done
        if (row === n) {
            res.push(board.map((row) => row.join('')))
            return
        }

        // loop through rows and place queens
        for (let i = 0; i < n; i++) {
            // i = col

            // check if conflict

            if (cols.has(i) || cols.has(row - i) || cols.has(row + i)) {
                continue
            }

            // place queen
            board[row][i] = 'Q'
            cols.add(i)
            diag1.add(row - i)
            diag2.add(col + i)

            // update cols, diags (don't need to check row because one queen per row)

            // backtrack
            backtrack(row + 1)
            board[row][i] = '.'
            cols.delete(i)
            diag1.delete(row - i)
            diag2.delete(col + i)
        }
    }
    backtrack(0)
    return res
}

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// Constraints:

// 1 <= n <= 9
