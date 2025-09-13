/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const results = []
    nums.sort((a, b) => a - b)

    function backtrack(path, used) {
        // check for success
        if (path.length === nums.length) {
            results.push([...path])
            return
        }
        // loop and avoid duplicates
        for (let i = 0; i < nums.length; i++) {
            if (used[i] === true) {
                continue
            }
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue
            }
            used[i] = true
            path.push(nums[i])

            backtrack(path, used)
            path.pop()
            used[i] = false
        }
    }
    const used = Array(nums.length).fill(false)
    backtrack([], used)
    return results
}

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

const nums = [1, 1, 2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const result = permuteUnique(nums)
console.log(result)
