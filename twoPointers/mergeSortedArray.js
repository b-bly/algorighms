/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// I think nums1 wasn't mutated somehow
var _merge = function (nums1, m, nums2, n) {
    let _m = 0
    let _n = 0

    const shiftOneRight = (arr, val, i) => {
        let prev = val
        let target = prev
        return arr.map((curr, _i) => {
            target = curr
            if (_i >= i) {
                target = prev
                prev = curr
            }
            return target
        })
    }
    while (_m < nums1.length && _n < n) {
        if (nums1[_m] === 0) {
            nums1[_m] = nums2[_n] // faster than shiftOneRight
            _n++
            _m++
        } else if (nums2[_n] < nums1[_m]) {
            nums1 = shiftOneRight(nums1, nums2[_n], _m)
            _n++
            _m++
        } else if (nums2[_n] >= nums1[_m]) {
            _m++
        }
    }
    return nums1
}
var merge = function (nums1, m, nums2, n) {
    let _m = m - 1
    let _n = n - 1
    let i = m + n - 1 // nums1.length - 1
    while (_m >= 0 && _n >= 0) {
        // while (i >= 0) { // fails if the else block is called too many times
        if (nums1[_m] > nums2[_n]) {
            nums1[i] = nums1[_m]
            _m--
        } else {
            nums1[i] = nums2[_n]
            _n--
        }
        i-- // = _m + n + 1
    }

    while (_n >= 0) {
        nums1[i] = nums2[_n]
        i--
        _n--
    }
}

let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

const result = merge(nums1, m, nums2, n)
console.log(nums1)
