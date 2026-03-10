// incomplete.  Need to search from right also: example s = 'ABBB'
var _characterReplacement = function (s, k) {
    // loop
    // while samre char and _k > 0, right ++
    // if not, decrease _k
    // update longest
    let longest = 1
    let right = 1
    for (let left = 0; left < s.length; left++) {
        right = left + 1
        a = s[left]
        b = s[right]
        let count = right - left
        let kCount = k
        while (a === b || kCount > 0) {
            // console.log(`left ${left}`)
            // console.log(`right ${right}`)
            count++
            if (a !== b) {
                kCount--
            }
            if (right >= s.length - 1) {
                break
            }
            right++
            b = s[right]
        }
        if (count > longest) {
            longest = count
        }
    }
    return longest
}

var characterReplacement = function (s, k) {
    let count = {}
    let left = 0
    let maxFreq = 0
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        count[char] = count[char] ? count[char] + 1 : 1

        maxFreq = Math.max(maxFreq, count[char])

        while (right - left + 1 - maxFreq > k) {
            const _char = s[left]
            count[_char] --
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

let s = 'ABAB',
    k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

s = 'AABABBA', k = 1
// Output: 4

s = 'AAAA'
k = 2
// 4

s = 'ABBB'
k = 2
// 4

const result = characterReplacement(s, k)
console.log(result)
