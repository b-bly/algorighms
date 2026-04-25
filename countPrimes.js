/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0

    const isPrime = new Array(n).fill(true)
    isPrime[0] = false
    isPrime[1] = false

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++
    }

    return count
}
let n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// n = 0 
// Output: 0
// Example 3:

// n = 1
// Output: 0

const result = countPrimes(n)
console.log(result)
