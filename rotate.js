/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var _rotate = function (matrix) {
    // loop over length//2 = number of onion layers. Skip center
    const layers = Math.floor(matrix.length / 2)
    // handle if matrix.length = 1

    for (let iLayer = 0; iLayer < layers; iLayer++) {
        const first = iLayer
        const last = matrix.length - iLayer - 1
        // loop over each side (4)

        // if matrix.length = 1 it should skip loop
        for (let iSide = first; iSide < last; iSide++) {
          // console.log(`iSide ${iSide}`)
          const offset = iSide - first;
            // const sideLength = matrix.length - iLayer
            // iterate each side up to s - 2 (for sideLength = 3, 0 to 1)
            // top x = 0 - s, y = 0
            const tOld = matrix[first][iSide]
            // right x =  s - 1, y = 0 to s - 1
            const rOld = matrix[iSide][last]
            // bottom x = 1 - s, y = s - 1
            const bOld = matrix[last][last - offset]
            // left x = 0, y = 1 to s - 1
            const lOld = matrix[last - offset][first]
            // console.log(`tOld ${tOld} rOld ${rOld} bOld ${bOld} lOld ${lOld}`)

            matrix[iSide][last] = tOld // r = t
            matrix[last][last - offset] = rOld // b = r
            matrix[last - offset][first] = bOld // l = b
            matrix[first][iSide] = lOld // t = l
        }
    }
    return matrix
}

const matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
]

// onst matrix = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]



// const matrix = [
//     [5, 11],
//     [2,10]
// ]

// [
//   [2, 5],
//   [10,11]
// ]

// const matrix = [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
// ]
// Output: [
//     [15, 13, 2, 5],
//     [14, 3, 4, 1],
//     [12, 6, 8, 9],
//     [16, 7, 10, 11],
// ]

const result = _rotate(matrix)
console.log(result)

// chat gpt
function rotate(matrix) {
    const n = matrix.length

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
}
