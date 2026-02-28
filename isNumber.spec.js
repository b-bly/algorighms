const { isNumber } = require('./validNumber.js')

describe('isNumber - valid numbers', () => {
    test.each(['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789'])(
        'returns true for "%s"',
        (input) => {
            expect(isNumber(input)).toBe(true)
        }
    )
})

describe('isNumber - invalid numbers', () => {
    test.each(['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53'])('returns false for "%s"', (input) => {
        expect(isNumber(input)).toBe(false)
    })
})

describe('isNumber - example cases', () => {
    test('Example 1: "0"', () => {
        expect(isNumber('0')).toBe(true)
    })

    test('Example 2: "e"', () => {
        expect(isNumber('e')).toBe(false)
    })

    test('Example 3: "."', () => {
        expect(isNumber('.')).toBe(false)
    })
})
