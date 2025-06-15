/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const sorted = nums1.concat(nums2).sort((a, b) => a - b)
    // const uniqueArray = [...new Set(sorted)]
    // if array length is even, calculate middle value between a and b
    if (sorted.length % 2 === 0) {
        const halfLength = sorted.length / 2
        const a = sorted[halfLength]
        const b = sorted[halfLength - 1]
        return (a + b) / 2
    }
    const middleIndex = (sorted.length - 1) / 2
    return sorted[middleIndex];
}

const nums1 = [1, 3],
    nums2 = [2]
// Output: 2.0
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);
