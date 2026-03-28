/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = (n) => {
      let sum = 0
      while (n > 0) {
        const digit = n % 10
        sum += digit * digit
        n = Math.floor(n / 10)
      }
      return sum
    }
    let fast = getNext(n)
    let slow = n
    while (fast !== 1 && fast !== slow) {
      slow = getNext(slow)
      fast = getNext(getNext(fast))
    }
    return fast === 1
};

let n = 19
// Output: true

n = 2
// false

const result = isHappy(n)
console.log(result)
