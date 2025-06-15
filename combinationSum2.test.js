const { expect } = require('chai')
const combinationSum2 = require('./combinationSum2.js')

describe('combinationSum2', () => {
    it('should return all unique combinations that sum to target (example 1)', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5]
        const target = 8
        const result = combinationSum2(candidates, target)
        const expected = [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ]

        expect(result.map((a) => a.sort((x, y) => x - y)).sort()).to.deep.equal(
            expected.map((a) => a.sort((x, y) => x - y)).sort()
        )
    })

    // it('should return all unique combinations that sum to target (example 2)', () => {
    //     const candidates = [2, 5, 2, 1, 2]
    //     const target = 5
    //     const result = combinationSum2(candidates, target)
    //     const expected = [[1, 2, 2], [5]]

    //     expect(result.map((a) => a.sort((x, y) => x - y)).sort()).to.deep.equal(
    //         expected.map((a) => a.sort((x, y) => x - y)).sort()
    //     )
    // })

    // it('should return empty array when no combination matches', () => {
    //     const candidates = [3, 4, 5]
    //     const target = 2
    //     const result = combinationSum2(candidates, target)
    //     expect(result).to.deep.equal([])
    // })

    // it('should handle empty candidates array', () => {
    //     const candidates = []
    //     const target = 7
    //     const result = combinationSum2(candidates, target)
    //     expect(result).to.deep.equal([])
    // })
})
