/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0

    // first window
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    let maxSum = sum
    let left = 0

    for (let right = k; right < nums.length; right++) {
        left = right - k
        sum += nums[right]
        // slide window
        sum -= nums[left]
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
}

let nums = [1, 12, -5, -6, 50, 3],
    k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// nums = [5], k = 1
// Output: 5.00000

;(nums = [-1]), (k = 1)
// -1



nums =[8860,-853,6534,4477,-4589,8646,-6155,-5577,-1656,-5779,-2619,-8604,-1358,-8009,4983,7063,3104,-1560,4080,2763,5616,-2375,2848,1394,-7173,-5225,-8244,-809,8025,-4072,-4391,-9579,1407,6700,2421,-6685,5481,-1732,-8892,-6645,3077,3287,-4149,8701,-4393,-9070,-1777,2237,-3253,-506,-4931,-7366,-8132,5406,-6300,-275,-1908,67,3569,1433,-7262,-437,8303,4498,-379,3054,-6285,4203,6908,4433,3077,2288,9733,-8067,3007,9725,9669,1362,-2561,-4225,5442,-9006,-429,160,-9234,-4444,3586,-5711,-9506,-79,-4418,-4348,-5891]
k = 93
// -594.58065
const result = findMaxAverage(nums, k)
console.log(result)
