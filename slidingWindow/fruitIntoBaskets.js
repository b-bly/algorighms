/**
 * @param {number[]} fruits
 * @return {number}
 */
// Too slow
var _totalFruit = function (fruits) {
    // keep track of max
    // count each window and update max
    let max = 0
    let types = []
    let needThirdBasket = false
    for (let left = 0; left < fruits.length; left++) {
        let right = left
        types = []
        needThirdBasket = false
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

const totalFruit = (fruits) => {
    let max = 0
    let count = new Map()
    let left = 0
    for (let right = 0; right < fruits.length; right++) {
        const type = fruits[right]
        const number = count.get(type) || 0
        count.set(type, number + 1)
        while (count.size > 2) {
            const leftFruit = fruits[left]
            count.set(leftFruit, count.get(leftFruit) - 1)
            const leftCount = count.get(leftFruit) || 0
            if (leftCount === 0) {
                count.delete(leftFruit)
            }
            left++
        }
        max = Math.max(right - left + 1, max)
    }
    return max
}

let fruits = [1, 2, 1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// fruits = [0, 1, 2, 2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// fruits = [1, 2, 3, 2, 2]
// Output: 4

const result = totalFruit(fruits)
console.log(result)
