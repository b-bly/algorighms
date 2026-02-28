/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = []
    const halfX = Math.floor(matrix[0].length / 2)
    const halfY = Math.floor(matrix.length / 2)
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    let x = 0
    let y = 0
    // TODO change matrix.length... min of x or y length?

    while (top <= bottom && left <= right) {
        x = left
        // exit when top < half x
        while (x <= right) {
            result.push(matrix[top][x])
            x++
        }
        top++

        y = top
        while (y <= bottom) {
            result.push(matrix[y][right])
            y++
        }
        right--
        // exit if right < half x

        x = right
        if (top <= bottom) {
            while (x >= left) {
                result.push(matrix[bottom][x])
                x--
            }
            bottom--
        }

        y = bottom
        if (left <= right) {
            while (y >= top) {
                result.push(matrix[y][left])
                y--
            }
            left++
        }
    }
    return result
}

// Input:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// const output = [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix = [
    [1, 2],
    [3, 4],
]

const output = [1, 2, 4]

const result = spiralOrder(matrix)
console.log(result)
// const pass = result.flat().reduce((acc, val, i) => {
//     if (acc === false) {
//         return false
//     }
//     return val === matrix.flat()[i]
// }, true)
// console.log(pass)
