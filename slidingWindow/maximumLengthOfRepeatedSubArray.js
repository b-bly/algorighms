// Note: dynamic programming solution as well as sliding window solution

/**
 * @param {number[]} numsM
 * @param {number[]} numsN
 * @return {number}
 */
var findLength = function (numsM, numsN) {
    const mLength = numsM.length
    const nLength = numsN.length

    const findLongest = (arrM, arrN) => {
        const len = Math.min(arrM.length, arrN.length)
        let count = 0
        let max = 0
        for (let i = 0; i < len; i++) {
            if (arrM[i] === arrN[i]) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0 // reset for longest contiguous
            }
        }
        return max
    }

    let max = 0
    for (let offset = 0; offset < mLength; offset++) {
        const mSlice = numsM.slice(offset, mLength)
        const currMax = findLongest(mSlice, numsN)
        max = Math.max(currMax, max)
    }
    for (let offset = 0; offset < nLength; offset++) {
        const nSlice = numsN.slice(offset, nLength)
        const currMax = findLongest(numsM, nSlice)
        max = Math.max(currMax, max)
    }
    return max
}

let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:

nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
// Explanation: The repeated subarray with maximum length is [0,0,0,0,0].

const result = findLength(nums1, nums2)
console.log(result);
