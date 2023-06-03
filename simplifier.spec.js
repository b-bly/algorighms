const Simplifier = require("./simplifier");

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
    })

    describe('subtract', () => {
        
        it('Should subtract terms without coefficients', () => {
            const actual = simplifier.subtract('b-b')
            expect(actual).toBe('')
        })

        it('Should subtract terms with coefficients', () => {
            const actual = simplifier.subtract('2a-3a')
            expect(actual).toBe('-a')
        })

        it('Should subtract terms with one negative coefficient', () => {
            const actual = simplifier.subtract('-2a-a')
            expect(actual).toBe('-3a')
        })
    })
})