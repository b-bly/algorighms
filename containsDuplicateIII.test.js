const { expect } = require('chai')
const containsNearbyAlmostDuplicate = require('./containsDuplicateIII')

it('indecies 0, 3 meet criteria', () => {
    let nums = [1, 2, 3, 1],
        indexDiff = 3,
        valueDiff = 0
    const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
    expect(result).to.equal(true)
})

it('5 length array - does not meet criteria', () => {
    let nums = [1, 5, 9, 1, 5, 9],
        indexDiff = 2,
        valueDiff = 3
    const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
    expect(result).to.equal(false)
})
