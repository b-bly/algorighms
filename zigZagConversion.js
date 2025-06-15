/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    const reading = []
    const n = 2 * (numRows - 1)
    if (n == 0) {
      return s;
    }
    for (let rowNumber = 0; rowNumber < numRows; rowNumber++) {
        // zig starting index
        let a = rowNumber

        // zag starting index
        let b = n - rowNumber

        // alternate zig and zag adding n
        while (a < s.length) {
            // zig
            reading.push(a)
            a += n

            // no zag for end rows
            if (rowNumber == 0 || rowNumber == numRows - 1) {
                continue
            }

            // zag
            reading.push(b)
            b += n
        }
    }

    return reading.map((i) => s[i]).join('')
}

// rows = 3
// row 1: 0, 4, 8    i + n(2(numRows - 1))
// row 2: 1, 3...13
// row 3: 2, 6, 10

// Example 2:

const input = 'PAYPALISHIRING'
const numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N    i + 2(numRows - 1)
// A   L S  I G    i + 2(numRows - 1)
// Y A   H R
// P     I

// row 1: 0, 6, 12...
// row2:  1, 5, 7, 11, 13
// row 3: 2, 4, 8, 10

// n =  2(numRows - 1)   @n number of characters between repeating pattern
// starting index A = row number
// starting index B =  (numRows - 1) + (numRows - rowNumber - 1)
// or n - (rowNumber - 1) ?
// 6 - 1 = 5
// 6 - 2 = 4
// 6 = (4 - 1) + (4 - 2)

const result = convert(input, numRows)
console.log(result)
