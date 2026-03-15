/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    // keep track of max
    // count each window and update max
    let max = 0
    for (let left = 0; left < fruits.length; left++) {
        let right = left
        let basketAHasFruit = false
        let basketBHasFruit = false
        let types = []
        let needThirdBasket = false
        while (right < fruits.length) {
            const type = fruits[right]
            if (!types.includes(type)) types.push(type)
            if (types.length > 2) {
                needThirdBasket = true
                break
            } else {
                right++
            }
        }
        max = Math.max(right - left, max)
    }
    return max
}

let fruits = [1, 2, 1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4

const result = totalFruit(fruits)
console.log(fruits)
