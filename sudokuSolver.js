/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
    const isValid = (row, col, candidate) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === candidate) {
                return false
            }
            if (board[i][col] === candidate) {
                return false
            }
        }
        const boxRowStart = Math.floor(row / 3) * 3
        const boxColStart = Math.floor(col / 3) * 3
        for (let i = 0; i < 3; i++) {
            const y = i + boxRowStart
            for (let j = 0; j < 3; j++) {
                const x = j + boxColStart
                if (board[y][x] === candidate) {
                    return false
                }
            }
        }
        return true
    }
    const backtrack = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let cand = 1; cand < 10; cand++) {
                        const _cand = cand.toString()
                        if (isValid(row, col, _cand)) {
                            board[row][col] = _cand
                            if (backtrack()) { return true }
                            board[row][col] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    backtrack()
    return board
}


const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
// Output: [
//     ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
//     ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
//     ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
//     ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
//     ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
//     ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
//     ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
//     ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
//     ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
// ]

const result = solveSudoku(board)
console.log(result)
