/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const last = {}
  for(let i = 0; i < s.length; i++) {
    last[s[i]] = i
  }
  const seen = new Set()
  const stack = []
  for(let i = 0; i < s.length; i++) {
    const ch = s[i]
    if(seen.has(ch)) continue
    while(stack.length > 0 && ch < stack[stack.length - 1] && i < last[stack[stack.length - 1]]) {
      seen.delete(stack.pop())
    }
    seen.add(ch)
    stack.push(ch)
  }
  return stack.join('')
}

let s = "bcabc"
// Output: "abc"
// Example 2:

s = "cbacdcbc"
// Output: "acdb"
const result = removeDuplicateLetters(s)
console.log(result)