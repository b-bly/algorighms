/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1
        } else if (a[0] > b[0]) {
            return 1
        }
        return 0
    })
    if (intervals.length < 2) {
        return intervals
    }
    const result = []
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i]
        
        if (prev[1] >= curr[0]) {
            // overlap with right number greater
          if (curr[1] > prev[1]) {
            prev = [prev[0], curr[1]]
          } else {
            // no change to prev (it absorbs curr)
          }
        } else {
          // no overlap
            result.push([...prev])
            prev = curr
        }
    }
    result.push(prev);
    return result
}

// Example 1:

// const intervals = [
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
// ]
const intervals = [
    [1, 4],
    [2, 3],
] // expect [[1,4]]
const result = merge(intervals)
console.log(result)  
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]`.
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.
