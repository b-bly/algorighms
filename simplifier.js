// https://www.codewars.com/kata/57f2b753e3b78621da0020e8
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

const innermostParenthesis = /(?:-*\d*)\(((?:"\(|\)"|[^()])+)\)/ // group 1: coeff group 2: expression
const innermostParenthesisWithCoeff = /(-*\d+)\((?:"\(|\)"|[^()])+\)/ // group 1: coeff group 2: expression
const innermostParenthesisAndSign = /(?:[+-])?(?:\d+)?\((?:"\(|\)"|[^()])+\)/ // /(?:[+-]\d+)?(?:\d+)?\((?:"\(|\)"|[^()])+\)/ // /(?:[+-])?(?:\d+)?\((?:"\(|\)"|[^()])+\)/;
const leftSideRegex = /(.+)(=.+)/
const rightSideRegex = /(.+=)(.+)/

class Simplifier {
    constructor(equalities, formula) {
        this.equalities = equalities.map((equality) => this.simplifyEquation(equality.trim()))
        this.formula = formula.trim()
        const expressionArray = this.splitExpression(formula)
    }

    // probably don't need
    validateExpression(expression) {
        // const variables = this.getVariables(expressionArray)
        // const uniqueVariables = this.getUniqueVariables(expressionArray)
        // const counts = {};
        // for (const variable of variables) {
        //     counts[variable] = counts[variable] ? counts[variable] + 1 : 1;
        // }
        // for (let key of counts) {
        //     if (counts[key] > 1) { throw new Error('There is more than one ')}
        // }
    }

    /**
     * Return a simplified expression by substitution with equations.
     * @param {string} expression
     * @param {string[]} equations
     */
    substituteAll(expression, equations, times = equations.length) {
        // substitute
        // assume var is on the right of equation
        // substitute for the var
        // sign and coef can be taken into account by simplify method?  Replace using parenthesis
        // try equations.length times to make a substitution and unshift each time an eq is used?
        let updatedExpression
        let remainingEquations
        equations.forEach((equation) => {
            const variable = this.getRightSideVariable(equation)
            if (this.canSubstitute(expression, variable)) {
                const result = this.substitute(expression, equation, variable)
                
            } else {
                remainingEquations.push(equation)
            }
        })
        return this.substituteAll(expression, remainingEquations, --times)

        // repeat until options exhausted and select simplest iteration
        // simplify resulting expression
        // Maybe will refactor to look for simplest expression.
    }

    // assume right side is a variable with no coefficient or sign
    getRightSideVariable(equation) {
        const variable = equation.match(rightSideRegex[0])
        if (variable.length > 1) {
            throw new Error(`Right side of equation has more than one character: ${equation}`)
        }
        return variable
    }

    // replaces the variable in the expression with the left side of the equation given wrapped in ()
    // x - y, y = 2x, y => x - (2x)
    substitute(expression, equation, variable) {
        const substitution = equation.match(leftSideRegex)[0]
        if 
        return expression.replace(variable, '(' + substitution + ')')
    }

    canSubstitute(expression, equation, variable) {
        return expression.includes(variable)
    }

    // need to refactor to handle * and / terms
    add(expression) {
        const expressionArray = this.splitExpression(expression)
        const variables = this.getUniqueVariables(expressionArray)
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
    simplifyExpression(expression) {
        // while still parenthesis, add
        if (this.hasParenthesis(expression)) {
            // evaluate innermost parenthesis
            const evaluatedExpression = this.evaluateParenthesis(expression)
            expression = this.replaceParentheticalExpression(expression, evaluatedExpression)
            console.log(expression)
            if (innermostParenthesis.test(expression) === true) {
                return this.simplifyExpression(expression)
            }
        }
        // final adding terms if needed
        return this.add(expression)
    }

    simplifyEquation(equation) {
        function replacer(match, p1, p2, offset, string, groups) {
            const replacement = this.simplifyExpression(p1) + p2
            return replacement
        }
        const simplifiedEquation = equation.replace(replacer)
        return simplifiedEquation
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
    solve(variable, expression) {
        if (!this.canSolve(variable, expression)) {
            throw new Error('Unsolvable for this var.')
        }
    }

    // check if there is only one occurance variable
    canSolve(variable, expression) {
        const expressionArray = this.splitExpression(expression)
        const variables = this.getVariables(expressionArray)
        return variables.includes(variable) !== -1
    }

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
     * returns an array of variables in the expression [2x, -3y, y] => [x, y, y]
     * @param {array} expressionArray array returned by splitExpression
     * This does not handle terms with multiple variables
     */
    getVariables(expressionArray) {
        return expressionArray.map((term) => this.parseVariable(term))
    }

    // returns uniqu array [2x, -3y, y] => [x, y]
    getUniqueVariables(arr) {
        return this.getVariables(arr).filter(onlyUnique)
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
const result = simplifier.simplifyExpression('4(b-2(-2a-a))')
console.log(result)

module.exports = Simplifier
