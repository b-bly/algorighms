const { expect } = require('chai')
const maxSubArray = require('./maximumSubArray')

describe('maxSubArray', () => {
    it('Example 1: [-2,1,-3,4,-1,2,1,-5,4] → 6', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6)
    })

    it('Example 2: [1] → 1', () => {
        expect(maxSubArray([1])).to.equal(1)
    })

    it('Example 3: [5,4,-1,7,8] → 23', () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).to.equal(23)
    })

    it('All negatives: [-1,-2,-3,-4] → -1', () => {
        expect(maxSubArray([-1, -2, -3, -4])).to.equal(-1)
    })

    it('All zeros: [0,0,0,0] → 0', () => {
        expect(maxSubArray([0, 0, 0, 0])).to.equal(0)
    })

    it('Mixed positives and negatives: [2,-1,2,3,-9,4] → 6', () => {
        expect(maxSubArray([2, -1, 2, 3, -9, 4])).to.equal(6)
    })

    it('Large values: [100,-50,200,-100,50] → 250', () => {
        expect(maxSubArray([100, -50, 200, -100, 50])).to.equal(250)
    })
})
