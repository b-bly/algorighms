// too slow
var _containsNearbyAlmostDuplicate = function (nums, indexDiffMax, valueDiffMax) {
    // i != j,
    // window: abs(i - j) <= indexDiff.
    // check if valueDiff is valid
    // return true if yes
    for (let i = 0; i < nums.length; i++) {
        let left = i
        let right = i + 1
        let _indexDiff = Math.abs(right - left)
        while (_indexDiff <= indexDiffMax) {
            const leftVal = nums[left]
            const rightVal = nums[right]
            valueDiff = Math.abs(rightVal - leftVal)
            if (valueDiff <= valueDiffMax) {
                return true
            }
            // else
            right++
            _indexDiff = Math.abs(right - left)
        }
    }
    return false
}
// POJO is difficult to work with becuase 'if (buckets[id])' doesn't work for 0
const __containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    const size = valueDiff + 1
    const buckets = {}
    getBucketId = (num) => {
        return Math.floor(num / size)
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const id = getBucketId(num)
        if (buckets[id] !== undefined) {
            return true
        }
        const prevNum = buckets[id - 1]
        if (prevNum !== undefined) {
            if (Math.abs(num - prevNum) <= valueDiff) {
                return true
            }
        }
        const nextNum = buckets[id + 1]
        if (nextNum !== undefined) {
            if (Math.abs(nextNum - num) <= valueDiff) {
                return true
            }
        }
        buckets[id] = num
        if (i >= indexDiff) {
            // remove bucket out of window
            const oldIndex = i - indexDiff
            const oldBucketId = getBucketId(nums[oldIndex])
            delete buckets[oldBucketId]
        }
    }
    return false
}

const containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    const size = valueDiff + 1
    const buckets = new Map()
    const getBucketId = (num) => {
        return Math.floor(num / size)
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const id = getBucketId(num)
        if (buckets.has(id)) {
            return true
        }

        if (buckets.has(id - 1)) {
            const prevNum = buckets.get(id - 1)
            if (Math.abs(num - prevNum) <= valueDiff) {
                return true
            }
        }

        if (buckets.has(id + 1)) {
            const nextNum = buckets.get(id + 1)
            if (Math.abs(nextNum - num) <= valueDiff) {
                return true
            }
        }
        buckets.set(id, num)
        if (i >= indexDiff) {
            // remove bucket out of window
            const oldIndex = i - indexDiff
            const oldBucketId = getBucketId(nums[oldIndex])
            buckets.delete(oldBucketId)
        }
    }
    return false
}

module.exports = containsNearbyAlmostDuplicate
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.

// Example 1:

let nums = [1, 2, 3, 1],
    indexDiff = 3,
    valueDiff = 0
// Output: true
// Explanation: We can choose (i, j) = (0, 3).
// We satisfy the three conditions:
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// Example 2:

// Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// Output: false
// Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
console.log(result)
