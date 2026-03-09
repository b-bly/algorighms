/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    // check if search is complete without finding a repeating char yet.  Return 0

    const findLongest = (start, end) => {
        // make freq dictionary
        const charFreq = {}

        // loop increasing left
        for (let left = start; left < end; left++) {
            // nextLeft = left + 1
            const char = s[left]
            if (charFreq[char] < k) {
                let nextLeft = left + 1
                while (nextLeft < end && charFreq[s[nextLeft]] < k) {
                    // while left char does not repeat at least k times (freq < k) and left < end, nextLeft++
                    nextLeft++
                }
                // leftSearch = findLongest(start, left)
                // rightSearch = findLongest(nextLeft)
                // return max of leftSearch, rightSearch
                const leftSearch = findLongest(start, left)
                const rightSearch = findLongest(nextLeft, end)
                return Math.max(leftSearch, rightSearch)
            }
        }
        // after loop means there were no chars that repeated < k times, so return end - start
        return end - start
    }
    return findLongest(0, s.length)
}

let s = 'aaabb',
    k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

s = 'ababbc',k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

const result = longestSubstring(s, k)
console.log(result)
