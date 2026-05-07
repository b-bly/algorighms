var calculate = function (s) {
    let stack = []
    let result = 0
    let num = 0
    let sign = 1

    for (let i = 0; i < s.length; i++) {
        const ch = s[i]

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0')
        } else if (ch === '+') {
            result += sign * num
            num = 0
            sign = 1
        } else if (ch === '-') {
            result += sign * num
            num = 0
            sign = -1
        } else if (ch === '(') {
            stack.push(result)
            stack.push(sign)

            result = 0
            sign = 1
        } else if (ch === ')') {
            result += sign * num
            num = 0

            let prevSign = stack.pop()
            let prevResult = stack.pop()

            result = prevResult + prevSign * result
        }
    }

    // final number
    result += sign * num

    return result
}

let s = '1 + 1'
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

s = '(1+(4+5+2)-3)+(6+8)'
// Output: 23

s = '5+(2+3)'

const result = calculate(s)
console.log(result)
