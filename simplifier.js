// identify left and right sides

// look for innermost parenthesis

// add terms (positive and negative terms)
// split into array of + or - terms?
// add terms with same var
// sort into object with keys of each var (ignore multivar terms at first)
// add

// multiply (including negatives)
// distribute multiplier 2(x+1)

// divide

// substitue var from eqation

// solve for var
// eval parenthesis, combine terms
// if outside parenthesis, distribute
// add/subtract from both sides of eq
// divide/multiply by constant

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
}

const innermostParenthesis = /(?:\d*)\(((?:"\(|\)"|[^()])+)\)/ // group 1: coeff group 2: expression
const innermostParenthesisWithCoeff = /(\d+)\((?:"\(|\)"|[^()])+\)/ // group 1: coeff group 2: expression
const innermostParenthesisAndSign = /(?:[+-])?(?:\d+)?\((?:"\(|\)"|[^()])+\)/ // /(?:[+-]\d+)?(?:\d+)?\((?:"\(|\)"|[^()])+\)/ // /(?:[+-])?(?:\d+)?\((?:"\(|\)"|[^()])+\)/;

class Simplifier {
    constructor(equalities, formula) {
        this.equalities = equalities.map((equality) => equality.trim())
        this.formula = formula.trim()
    }

    // need to refactor to handle * and / terms
    add(expression) {
        const expressionArray = this.splitExpression(expression)
        const variables = this.getVariables(expressionArray)
        return variables
            .map((variable, i) => {
                // get terms containing variable
                let terms = expressionArray.filter((expression) => expression.includes(variable))
                const coefficientGroup = terms.map((term) => {
                    return this.parseCoefficient(term)
                })
                const coefficientSum = coefficientGroup.reduce((acc, number) => (acc += number), 0)
                const term = this.formatCoefficient(coefficientSum, variable, i)
                return term
            })
            .join('')
    }

    // position is order in the equation.  0 = 1st.
    // a + b // a is position 0, b position 1
    formatCoefficient(coefficientSum, variable, position) {
        let term = coefficientSum.toString() + variable
        if (coefficientSum === 0) {
            term = ''
        } else if (coefficientSum === 1) {
            term = variable
        } else if (coefficientSum === -1) {
            term = '-' + variable
        }
        if (!/-/.test(term) && position !== 0) {
            term = '+' + term
        }
        return term
    }

    /**
     * Distribute multiplier to parenthesis and add like terms
     * @param {number} multiplier
     * @param {string} expression 2a-1
     */
    simplify(expression) {
        // while still parenthesis, add
        if (this.hasParenthesis(expression)) {
            // evaluate innermost parenthesis
            const evaluatedExpression = this.evaluateParenthesis(expression)
            expression = this.replaceParentheticalExpression(expression, evaluatedExpression)
            console.log(expression)
            if (innermostParenthesis.test(expression) === true) {
                return this.simplify(expression)
            }
        }
        // final adding terms if needed
        return this.add(expression)
    }

    replaceParentheticalExpression(expression, evaluatedExpression) {
        // add + if no negative and there is no term to the left
        // 3x+2(2y), 4y => 3x+4y
        // 2(2y), 47 => 4y
        if (innermostParenthesis.test(expression) === true && !/^\-/.test(evaluatedExpression)) {
            evaluatedExpression = '+' + evaluatedExpression
        }
        expression = expression.replace(innermostParenthesisAndSign, evaluatedExpression)
        return expression
    }

    hasParenthesis(expression) {
        return /\(|\)/.test(expression)
    }

    getInnerMostParenthesis(expression) {
        const match = expression.match(innermostParenthesis)
        let coeff = expression.match(innermostParenthesisWithCoeff)
        console.log('coeff', coeff)
        if (coeff?.length > 1) {
            return [coeff[1], match[1]]
        }
        // There is no sign in front of coeff
        coeff = 1
        const signMatch = expression.match(/(-)\(("\(|\)"|[^()])+\)/)
        if (signMatch !== null) {
            coeff = -1
        }
        return [coeff, match[1]]
    }

    // Distribute, add
    evaluateParenthesis(expression) {
        const [parenthesisCoefficient, innerExpression] = this.getInnerMostParenthesis(expression)
        const simplifiedExpression = this.add(innerExpression)
        const distributed = this.distribute(parenthesisCoefficient, simplifiedExpression)
        return distributed
    }

    distribute(multiplier, expression) {
        const distributed = this.splitExpression(expression)
            .map((term, i) => {
                let coefficient = this.parseCoefficient(term)
                coefficient = coefficient * multiplier
                const variable = this.parseVariable(term)
                term = this.formatCoefficient(coefficient, variable, i)
                return term
            })
            .join('')
        return distributed
    }

    // Solve for variable
    // Check espression with canSolve first
    solve(variable, expression) {}

    // check if there is only one occurance variable
    canSolve(variable, expression) {}

    parseTermSign(term) {
        let sign = ''
        if (/-/.test(term)) {
            sign = '-'
        }
        return sign
    }

    parseTermValue(term) {
        let value = 1
        if (/\d/.test(term) === true) {
            value = term.match(/\d+/)[0]
        }
        return value
    }

    parseCoefficient(term) {
        let sign = this.parseTermSign(term)
        let value = this.parseTermValue(term)
        return parseInt(sign + value)
    }

    /**
     * Split into an array of + and - terms, ie: [-x, 3y, z]
     * @param {string} expression
     */
    splitExpression(expression) {
        if (/(?!^)[-]/.test(expression) === true || /\+/.test(expression) === true) {
            const keepSign = /(?=[-+])/g
            return expression.split(keepSign) // (/(?!^)-|\+/)
        }
        console.log('Expression has only one term.')
        return [expression]
    }

    /**
     * returns an array of variables in the expression [2x, -3y, y] => [x, y]
     * @param {array} expressionArray array returned by splitExpression
     * This does not handle terms with multiple variables
     */
    getVariables(expressionArray) {
        return expressionArray.map((term) => this.parseVariable(term)).filter(onlyUnique)
    }

    parseVariable(term) {
        return term.match(/[a-zA-Z]{1}/)[0]
    }

    /**
     * returns an array of two terms
     * @param {string} expression simple expression like 2a+b
     * @param {string} symbol \\+ for example.  Symbol that separates the terms
     */
    getTerms(expression, symbol) {
        const termsRegex = new RegExp(`(.+)${symbol}(.+)`)
        const termsMatch = expression.match(termsRegex)
        const left = termsMatch[1]
        const right = termsMatch[2]
        return [left, right]
    }

    getCoefficient(term) {
        let numberMatch = term.match(/\d+/)
        const negative = /^-/.test(term)
        let number = 1
        if (numberMatch !== null) {
            number = numberMatch[0]
        }
        return negative ? parseInt('-' + number) : parseInt(number)
    }
}

const simplifier = new Simplifier([], '')
const result = simplifier.simplify('-(-2a-a)')
console.log(result)

module.exports = Simplifier
