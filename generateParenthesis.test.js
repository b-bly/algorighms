// test/generateParenthesis.test.js
const generateParenthesis = require('./generateParenthesis')
const { expect } = require('chai')

function sortArray(arr) {
    return arr.slice().sort()
}

describe('generateParenthesis', () => {
    it('should return ["()"] when n = 1', () => {
        const result = generateParenthesis(1)
        expect(sortArray(result)).to.eql(sortArray(['()']))
    })

    it('should return ["(())", "()()"] when n = 2', () => {
        const result = generateParenthesis(2)
        expect(sortArray(result)).to.eql(sortArray(['(())', '()()']))
    })

    it('should return all valid combinations for n = 3', () => {
        const expected = ['((()))', '(()())', '(())()', '()(())', '()()()']
        const result = generateParenthesis(3)
        expect(sortArray(result)).to.eql(sortArray(expected))
    })

    it('should return [""] when n = 0', () => {
        const result = generateParenthesis(0)
        expect(result).to.eql([''])
    })
})
