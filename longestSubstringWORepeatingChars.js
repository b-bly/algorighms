var lengthOfLongestSubstring = function (s) {
    // @start index of start of string
    // @end index of end of string
    let end = 1
    function findNextSliceLength(start) {
        if (end <= start) {
            end = start + 1
        }
       // set is from start to end, so we don't repeat previous checks
        const charSet = new Set(s.slice(start, end))
        for (let i = end; i < s.length; i++) {
            const char = s[i]
            if (charSet.has(char)) {
                break
            }
            // does not have repeating char yet
            charSet.add(char)
            end++
        }
        return end - start
    }
    // loop and find longest strings starting at i
    return s.split('').reduce((acc, _val, start) => {
        const candidate = findNextSliceLength(start)
        return candidate > acc ? candidate : acc
    }, 0)
}

const s = 'pwwkew'
// Output: 3
const result = lengthOfLongestSubstring(s)
console.log(result)
