/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    function dec2bin(dec) {
        return (dec >>> 0).toString(2)
    }
    s = s.replace(/(\d+)(\D.*)?$/, '$1')
    s = s.trim()
    if (s.length < 1) { return 0 }
    if (/^[^0-9+\-]+/.test(s)) { return 0 }
    if (/^[+-]{2,}/.test(s)) { return 0 }
    if (!/\d/.test(s)) {return 0}
    console.log(s)
    // if no digits
    if (/\D+/.test(s.slice(1))) { return 0 }
    const num = parseInt(s)
    const MIN_INT = -Math.pow(2, 31) // -2^31
    const MAX_INT = Math.pow(2, 31) - 1 // 2^31 - 1

    if (num < 0 && num < MIN_INT) {
        return MIN_INT
    } else if (num > 0 && num > MAX_INT) {
        return MAX_INT
    }
    return num
}

// const s = '  +413'
const s = '   -042'
const result = myAtoi(s)
console.log(result)
// Output: -42
