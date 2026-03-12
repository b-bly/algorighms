/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const result = []
    if (p.length > s.length) return result

    const count = {}

    for (let i = 0; i < p.length; i++) {
        const char = p[i]
        count[char] = (count[char] || 0) + 1
    }

    let left = 0
    let needed = p.length

    for (let right = 0; right < s.length; right++) {
        const char = s[right]

        if (count[char] > 0) needed--

        count[char] = (count[char] || 0) - 1

        if (needed === 0) result.push(left)

        if (right - left + 1 >= p.length) {
            const lChar = s[left]

            if (count[lChar] >= 0) needed++

            count[lChar] = (count[lChar] || 0) + 1
            left++
        }
    }

    return result
}

let s = 'cbaebabacd',
    p = 'abc'
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]

const result = findAnagrams(s, p)
console.log(result)
