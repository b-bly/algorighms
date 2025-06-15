var firstMissingPositive = function (nums) {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        const curr = n[i]
        while ((curr > 0, curr <= n, nums[curr - 1] !== curr)) {
            // swap if not negative or zero,
            // if less than or equal to the number of nums
            // and if the index...
            const temp = nums[curr - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = temp
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }

    return n + 1
}
const example = [4, 3, 2, 1]

const result = firstMissingPositive(example)
console.log(result)
