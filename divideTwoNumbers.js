/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// TOO SLOW
var _divide = function (dividend, divisor) {
    // min max
    const INT_MAX = 2 ** 31 - 1
    const INT_MIN = -(2 ** 31)

    // Handle overflow
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX
    }
    // negatives to avoid overflow
    let negatives = 2
    if (dividend < 0) {
        negatives--
        dividend = -dividend
    }
    if (divisor < 0) {
        negatives--
        divisor = -divisor
    }

    let quotient = 0
    while (dividend >= divisor) {
        multiple = 1
        temp_divisor = divisor
        while (dividend >= temp_divisor << 1) {
            temp_divisor <<= 1
            multiple <<= 1
        }
        dividend -= temp_divisor
        quotient += multiple
    }
    return negatives !== 1 ? quotient : -quotient
}

var divide = function (dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Handle overflow
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    // Determine sign
    const negative = (dividend < 0) !== (divisor < 0);

    // Convert to positive values using Math.abs (careful with INT_MIN)
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let result = 0;

    for (let i = 31; i >= 0; i--) {
        if ((dvd >>> i) >= dvs) {
            result += 1 << i;
            dvd -= dvs << i;
        }
    }

    return negative ? -result : result;
};
// Example 1:

const dividend = 7
const divisor = -3
const result = divide(dividend, divisor)
console.log(result)
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// const dividend = 7, divisor = -3;
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.
