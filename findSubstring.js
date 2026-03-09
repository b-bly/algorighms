/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    // make word frequency expected object
    const expectedFreq = {}
    const result = []
    let seen = {}

    words.forEach((word) => {
        expectedFreq[word] = expectedFreq[word] ? expectedFreq[word] + 1 : 1
    })
    const wordLength = words[0].length
    // const getCount = (wordObj) => {
    //     let count = 0
    //     for (let key in wordObj) {
    //         count += wordObj[key]
    //     }
    //     return count
    // }

    // loop from 0 to word[0].length - each valid offset
    for (let i = 0; i < wordLength; i++) {
        let left = i
        let right = i
        let count = 0
        while (right + wordLength <= s.length) {
            // while window is valid (not over words.length)
            // get word
            let word = s.substring(right, right + wordLength)
            right += wordLength

            // if word in expected
            if (expectedFreq[word]) {
                seen[word] = seen[word] ? seen[word] + 1 : 1
                count++
                // update seen
                // if word seen too many times, advance left index
                while (seen[word] > expectedFreq[word]) {
                    const leftWord = s.substring(left, left + wordLength)
                    left += wordLength
                    seen[leftWord]--
                    count--
                }
                if (count === words.length) {
                    result.push(left)
                }
            } else {
                // else (if word is not in expected)
                // reset window: seen, count, left
                seen = {}
                left = right
            }
        }
    }
    return result
}

let s = 'barfoothefoobarman',
    words = ['foo', 'bar']

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

const result = findSubstring(s, words)
console.log(result)
