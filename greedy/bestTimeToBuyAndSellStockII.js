/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const b = prices[i]
    const a = prices[i - 1]
    const diff = b - a
    if (diff > 0) {
      profit += diff
    }
  }
  return profit
}

let  prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

prices = [7,6,4,3,1]
// Output: 0

const result = maxProfit(prices)
console.log(result)