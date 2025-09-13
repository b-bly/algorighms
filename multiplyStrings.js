var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }

    const result = Array(num1.length + num2.length).fill(0)

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const intNum1 = num1.charCodeAt(i) - '0'.charCodeAt(0)
            const intNum2 = num2.charCodeAt(j) - '0'.charCodeAt(0)
            const p1 = i + j
            const p2 = i + j + 1
            const sum = intNum1 * intNum2 + result[p2]

            result[p2] = sum % 10
            result[p1] += Math.floor(sum / 10) // Accumulate carry
        }
    }

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift()
    }

    return result.join('')
}

const num1 = '2',
    num2 = '3'
// Output: '6'

const result = multiply(num1, num2)
console.log(result)
