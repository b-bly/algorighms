/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const cols = board[0].length
    const rows = board.length
    const backtrack = (c, r, i) => {
        if (word.length === i) return true
        if (c >= cols || r >= rows || c < 0 || r < 0 || word[i] !== board[r][c]) return false
        const temp = board[r][c]
        board[r][c] = '#'

        const right = backtrack(c + 1, r, i + 1)
        const left = backtrack(c - 1, r, i + 1)
        const up = backtrack(c, r - 1, i + 1 )
        const down = backtrack(c, r + 1, i + 1)

        board[r][c] = temp
        return right || left || up || down
    }
    for (let i = 0; i < cols; i++) {
      for(let j = 0; j < rows; j++) {
        if (backtrack(i, j, 0)) return true
      }
    }
    return false
}

let board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    word = 'ABCCED'
// Output: true

const result = exist(board, word)
console.log(result)
