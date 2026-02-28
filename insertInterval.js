var insert = function (intervals, newInterval) {
    const result = []
    let [start, end] = newInterval
    let i = 0

    // 1. Add all intervals before newInterval
    while (i < intervals.length && intervals[i][1] < start) {
        result.push(intervals[i])
        i++
    }

    // 2. Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.max(start, intervals[i][0]) ? Math.min(start, intervals[i][0]) : start // clarity only
        start = Math.min(start, intervals[i][0])
        end = Math.max(end, intervals[i][1])
        i++
    }

    result.push([start, end])

    // 3. Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i])
        i++
    }

    return result
}

// Example 1:

const intervals = [
        [1, 3],
        [6, 9],
    ],
    newInterval = [2, 5]
// Output: [[1,5],[6,9]]

// Example 2:

// const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

const result = insert(intervals, newInterval)
console.log(result)
