function longestValidParentheses(s) {
    let maxLen = 0
    let stack = [-1] // Initialize stack with a base index

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i) // Push index of '('
        } else {
            stack.pop() // Pop the last '(' or base
            if (stack.length === 0) {
                stack.push(i) // Push current ')' index as new base
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1])
            }
        }
    }

    return maxLen
}

// Input:
const s = '(()'
// Output: 2
const result = longestValidParentheses(s)
console.log(result)
