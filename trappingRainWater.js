/**
 * @param {number[]} height
 * @return {number}
 */
var trapSlow = function (height) {
    let result = 0
    // for each position, find left and right max starting search at current index
    // amount of rain = min of left, right - height of current index

    const getLeft = (i) => {
        let j = i
        if (j - 1 < 0) {
            return 0
        }
        let leftMax = height[j - 1]
        while (j > 0) {
            j--
            // new max height
            if (leftMax < height[j - 1]) {
                leftMax = height[j - 1]
            }
        }
        return leftMax
    }

    const getRight = (i) => {
        let j = i
        if (j + 1 > height.length - 1) {
            return 0
        }
        let rightMax = height[j + 1]
        while (j < height.length - 1) {
            j++
            // rightMax = height[j]
            // new max height
            if (rightMax < height[j + 1]) {
                rightMax = height[j + 1]
            }
        }
        return rightMax
    }
    height.forEach((height, i) => {
        const leftMax = getLeft(i)
        const rightMax = getRight(i)
        const water = Math.min(leftMax, rightMax) - height
        console.log(`i ${i} left ${leftMax} right ${rightMax}`)
        if (water > 0) {
            result += water
        }
    })

    return result
}

// rewrite with 2 pointer soltn
var trap = function (height) {
    let left = 0
    let right = height.length - 1
    let leftMax = 0
    let rightMax = 0
    let waterTrapped = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left]
            } else {
                waterTrapped += leftMax - height[left]
            }
            left += 1
        } else {
          if (height[right] > rightMax) {
            rightMax = height[right]
          } else {
            waterTrapped += rightMax - height[right]
          }
          right -= 1
        }
    }

    return waterTrapped
}

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const height = [4, 2, 0, 3, 2, 5]
// Output: 6
const result = trap(height)
console.log(result)
