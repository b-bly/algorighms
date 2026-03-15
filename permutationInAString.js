/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (p, s) {
    if (p.length > s.length) return false

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

        if (needed === 0) return true

        if (right - left + 1 >= p.length) {
            const lChar = s[left]

            if (count[lChar] >= 0) needed++

            count[lChar] = (count[lChar] || 0) + 1
            left++
        }
    }

    return false
}

let s1 = 'ab',
    s2 = 'eidbaooo'
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

Input: (s1 = 'ab'), (s2 = 'eidboaoo')
// Output: false

const result = checkInclusion(s1, s2)
console.log(result)
