// https://scribbler.live/2023/10/10/Generating-Primes-JavaScript.html

function sieveOfEratothenes(n) {
    const primes = []
    const arr = Array(n - 1)
        .fill(0)
        .map((x, i) => i + 2)
    // console.log(arr)
    const sieve = new Set(arr)
    // console.log('sieve')
    // console.log(sieve)
    const outer = Array(n)
        .fill(1)
        .map((x, i) => x + 1 + i)
        .filter((x) => x * x <= n)
    // console.log('outer')
    // console.log(outer)

    outer.forEach((p) => {
        const inner = Array(n)
            .fill(0)
            .map((z, i) => p * p + p * i)
            .filter((x) => x <= n)
        inner.forEach((x) => {
            if (sieve.has(x)) {
                sieve.delete(x)
            }
        })
        // console.log('inner')
        // console.log(inner)
    })
    // console.log(sieve)
}
const result = sieveOfEratothenes(20)
// 1) Need to get arr of primes up to n * 10.
// Example: If n = 109, then largest possible prime might be 109, and then 901, so
// if we get primes up to 1090, this would cover that.

function getEmrips(n) {
    const emrips = []
    const primes = sieveOfEratothenes(n * 10)
    const nPrimes = primes.filter((x) => x <= n)
    nPrimes.forEach((prime) => {
        const _isPalendrome = isPalendrome(prime)
        if (_isPalendrome) {
            return
        }
        const reversed = parseInt(prime.toString().reverse())
        const isPrime = primes.includes(reversed)
        if (isPrime) {
            emrips.push(reversed);
        }

    })
}

function isPalendrome(n) {
    const reversed = parseInt(n.toString().reverse())
    if (n === reversed) {
        return true
    }
    return false
}
// 2) For each prime

// check if it's a palendrome.

// reverse it and if prime, add to results

// emripsBelowN - filter

// (number_of_emirps_below_n, - reduce?

//  largest_emirp_below_n, -  max?

// sum_of_emirps_below_n) - reduce
