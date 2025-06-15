const { expect } = require('chai')
const searchRange = require('./searchRange.js')

describe('searchRange', () => {
    it('Example 1: target in middle', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).to.deep.equal([3, 4])
    })

    it('Example 2: target not found', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).to.deep.equal([-1, -1])
    })

    it('Example 3: empty array', () => {
        expect(searchRange([], 0)).to.deep.equal([-1, -1])
    })

    it('All same elements', () => {
        expect(searchRange([2, 2, 2, 2, 2], 2)).to.deep.equal([0, 4])
    })

    it('Target at edges', () => {
        expect(searchRange([1, 2, 3, 4, 5], 1)).to.deep.equal([0, 0])
        expect(searchRange([1, 2, 3, 4, 5], 5)).to.deep.equal([4, 4])
    })

    it('Single element cases', () => {
        expect(searchRange([2], 2)).to.deep.equal([0, 0])
        expect(searchRange([2], 3)).to.deep.equal([-1, -1])
    })

    it('Multiple occurrences', () => {
        expect(searchRange([1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6], 5)).to.deep.equal([7, 10])
    })

    it('Large input array', () => {
        const nums = Array(100000).fill(1).concat(Array(100000).fill(2)).concat(Array(100000).fill(3))
        expect(searchRange(nums, 2)).to.deep.equal([100000, 199999])
        expect(searchRange(nums, 4)).to.deep.equal([-1, -1])
    })
})
