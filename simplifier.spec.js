const Simplifier = require('./simplifier')

let simplifier

describe('Simplifier', () => {
    beforeEach(() => {
        simplifier = new Simplifier([], '')
    })

    describe('add', () => {

        it('Should add terms without coefficients', () => {
            const actual = simplifier.add('b+b')
            expect(actual).toBe('2b')
        })

        it('Should add terms with coefficients', () => {
            const actual = simplifier.add('2a+3a')
            expect(actual).toBe('5a')
        })

        it('Should add terms with one negative coefficient', () => {
            const actual = simplifier.add('-2a+a')
            expect(actual).toBe('-a')
        })

        it('Should subtract terms without coefficients', () => {
            const actual = simplifier.add('b-b')
            expect(actual).toBe('')
        })

        it('Should subtract terms with coefficients', () => {
            const actual = simplifier.add('2a-3a')
            expect(actual).toBe('-a')
        })

        it('Should subtract terms with one negative coefficient', () => {
            const actual = simplifier.add('-2a-a')
            expect(actual).toBe('-3a')
        })
    })

    describe('simplify', () => {
        it('Should simplify expressions with more than one term', () => {
            const actual = simplifier.simplify('-2a-a')
            expect(actual).toBe('-3a')
        })

        it('Should simplify expressions with parenthesis', () => {
            const actual = simplifier.simplify('(-2a-a)')
            expect(actual).toBe('-3a')
        })

        it('Should simplify expressions with a leading -', () => {
            const actual = simplifier.simplify('-(-2a-a)')
            expect(actual).toBe('3a')
        })

        it('Should simplify expressions with parenthesis and distribute a coeff to parenthesis', () => {
            const actual = simplifier.simplify('2(-2a-a)')
            expect(actual).toBe('-6a')
        })

        it('Should simplify expressions with multiple parenthesis.', () => {
            const actual = simplifier.simplify('4(b+2(-2a-a))')
            expect(actual).toBe('4b-24a')
        })

        it('Should simplify expressions with multiple parenthesis.', () => {
            const actual = simplifier.simplify('4(b-2(-2a-a))')
            expect(actual).toBe('4b+24a')
        })
    })
})
