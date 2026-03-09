/**
 * @param {string} s
 * @return {string[]}
 */
// too slow
var _findRepeatedDnaSequences = function (s) {
    let left = 0
    let right = 10
    const result = []
    let window = ''
    // slide a 10 char window
    for (let i = 0; i <= s.length - 10; i++) {
        left = i
        right = left + 10
        window = s.substring(left, right)
        for (let j = 0; j <= s.length - 10; j++) {
            if (i !== j) {
                const cLeft = j
                const cRight = j + 10
                const candidate = s.substring(cLeft, cRight)

                if (candidate === window) {
                    // does reverse count as a match?  Assuming no.
                    // no dupes
                    if (result.indexOf(candidate) === -1) {
                        const ind = result.indexOf(candidate)
                        result.push(candidate)
                    }
                }
            }
        }
    }
    return result
}

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const seen  = new Set()
  const repeated = new Set()
  for (let i = 0; i <= s.length - 10; i++) {
    const candidate = s.substring(i, i + 10)
    if (seen.has(candidate)) {
      repeated.add(candidate)
    } else {
      seen.add(candidate)
    }
  }
  return Array.from(repeated)
}
// AAAAACCCCC
// AAAAACCCCC
let s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
const result = findRepeatedDnaSequences(s)
console.log(result)
