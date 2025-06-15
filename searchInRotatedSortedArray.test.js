const { expect } = require('chai')
const search = require('./searchInRotatedSortedArray')

describe('Rotated Sorted Array Search', () => {
    it('should find target 0 at index 4', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2]
        expect(search(nums, 0)).to.equal(4)
    })

    it('should return -1 when target 3 is not present', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2]
        expect(search(nums, 3)).to.equal(-1)
    })

    it('should return -1 when target is not in single-element array', () => {
        const nums = [1]
        expect(search(nums, 0)).to.equal(-1)
    })

    it('should find target in non-rotated sorted array', () => {
        const nums = [1, 2, 3, 4, 5]
        expect(search(nums, 3)).to.equal(2)
    })

    it('should find target when pivot is at the end', () => {
        const nums = [2, 3, 4, 5, 1]
        expect(search(nums, 1)).to.equal(4)
    })

    it('should find target when pivot is at the start', () => {
        const nums = [5, 1, 2, 3, 4]
        expect(search(nums, 5)).to.equal(0)
    })

    it('should find target when array contains only one element and it matches', () => {
        const nums = [7]
        expect(search(nums, 7)).to.equal(0)
    })

    it('should return -1 for empty array', () => {
        const nums = []
        expect(search(nums, 5)).to.equal(-1)
    })
})
