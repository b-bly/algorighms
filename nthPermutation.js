var getPermutation = function (n, k) {
    let numbers = []
    let factorials = [1]
    k--
    for (let i = 1; i <= n; i++) {
        numbers.push(i)
        factorials[i] = factorials[i - 1] * i
    }
    // n = 3, k = 2
    // starting number | number of perms
    // 1               | 2
    // 2               | 2
    // 3               | 2
    let result = ''
    for (let i = n; i > 0; i--) {
        const factorial = factorials[i - 1]
        const index = Math.floor(k / factorial)
        result += numbers[index]
        numbers.splice(index, 1)
        k %= factorial
    }
    return result
}

// Example 1:

let n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

// Input: n = 3, k = 1
// Output: "123"
const result = getPermutation(n, k);
console.log(result)
