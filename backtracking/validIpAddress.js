/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let results = []

    const backtrack = (start, path) => {
        if (path.length === 4) {
            if (start === s.length) {
                results.push(path.join('.'))
            }
            return
        }
        for (let i = 1; i <= 3; i++) {
            if (start + i > s.length) break
            const candidate = s.slice(start, start + i)
            if (Number(candidate) > 255) break
            if (i > 1 && candidate[0] === '0') break
            path.push(candidate)
            backtrack(start + i, path)
            path.pop()
        }
    }
    backtrack(0, [])

    return results
}

let s = '25525511135'
const result = restoreIpAddresses(s)
console.log(result)

// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
