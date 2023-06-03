// identify left and right sides

// look for innermost parenthesis

// add
// split into array of + or - terms?
// add terms with same var
// sort into object with keys of each var (ignore multivar terms at first)
// add

// subtract

// multiply (including negatives)
// distribute multiplier 2(x+1)

// divide

// substitue var from eqation

// solve for var
// eval parenthesis
// if outside parenthesis
// add/subtract from both sides
// divide/multiply by constant

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
const left = /(.*)=.*/;
const right = /.*=(.*)/;
const innermostParenthesis = /\(((?:"\(|\)"|[^()])+)\)/;

class Simplifier {
  constructor(equalities, formula) {
    this.equalities = equalities.map((equality) => equality.trim());
    this.formula = formula.trim();
  }

  /**
   * Split into an array of + and - terms, ie: [-x, 3y, z]
   * @param {string} expression
   */
  splitExpression(expression) {
    return expression.split(/(?!^)-|\+/);
  }

  /**
   * returns an array of variables in the expression [2x, -3y, y] => [x, y]
   * @param {array} expressionArray array returned by splitExpression
   * This does not handle terms with multiple variables
   */
  getVariables(expressionArray) {
    return expressionArray.map((term) => term.match(/[a-zA-Z]{1}/)[0]).filter(onlyUnique);
  }

  getRightSide(expression) {
    return expression.match(right)[1];
  }

  getLeftSide(expression) {
    return expression.match(left)[1];
  }

  getInnerMostParenthesis(expression) {
    return expression.match(innermostParenthesis);
  }

  // need to refactor to handle * and / terms
  add(expression) {
    const expressionArray = this.splitExpression(expression);
    const variables = this.getVariables(expressionArray);
    console.log(variables)
    return variables
      .map((variable) => {
        // get terms containing variable
        let terms = expressionArray.filter((expression) =>
          expression.includes(variable)
        );
        console.log("terms", terms);
        const coefficientGroup = terms.map((term) => {
          let sign = "";
          if (/-/.test(term)) {
            sign = "-";
          }
          let value = 1;
          if (/\d/.test(term) === true) {
            value = term.match(/\d+/)[0];
          }
          return parseInt(sign + value);
        });
        console.log("coefficientGroup", coefficientGroup);
        const coefficientSum = coefficientGroup.reduce(
          (acc, number) => (acc += number),
          0
        );
        console.log("coefficientSum");
        console.log(coefficientSum);
        let term = coefficientSum.toString() + variable;
        if (!/-/.test(term)) { term = '+' + term }
        return term
      })
      .join("");
    // const additionSymbol = '\\+'
    // const [left, right] = this.getTerms(expression, additionSymbol)
    // const leftCoefficient = this.getCoefficient(left)
    // const rightCoefficient = this.getCoefficient(right)
    // const leftVariable = this.getVariable(left)
    // const rightVariable = this.getVariable(right)
    // if (rightVariable === leftVariable) {
    //     const sum = (leftCoefficient + rightCoefficient).toString()
    //     if (sum === '0') {
    //         return ''
    //     } else if (sum === '-1') {
    //         return '-' + leftVariable
    //     } else {
    //         return sum + leftVariable
    //     }
    // } else {
    //     return expression
    // }
  }

  getVariable(term) {
    return term.match(/[a-zA-Z]+/)[0];
  }

  /**
   * returns an array of two terms
   * @param {string} expression simple expression like 2a+b
   * @param {string} symbol \\+ for example.  Symbol that separates the terms
   */
  getTerms(expression, symbol) {
    const termsRegex = new RegExp(`(.+)${symbol}(.+)`);
    const termsMatch = expression.match(termsRegex);
    const left = termsMatch[1];
    const right = termsMatch[2];
    return [left, right];
  }

  getCoefficient(term) {
    let numberMatch = term.match(/\d+/);
    const negative = /^-/.test(term);
    let number = 1;
    if (numberMatch !== null) {
      number = numberMatch[0];
    }
    return negative ? parseInt("-" + number) : parseInt(number);
  }

  subtract(expression) {
    const subtractionSymbol = "-";
    const [left, right] = this.getTerms(expression, subtractionSymbol);
    const leftCoefficient = this.getCoefficient(left);
    const rightCoefficient = this.getCoefficient(right);
    const leftVariable = this.getVariable(left);
    const rightVariable = this.getVariable(right);
    if (rightVariable === leftVariable) {
      const sum = (leftCoefficient - rightCoefficient).toString();
      if (sum === "0") {
        return "";
      } else if (sum === "-1") {
        return "-" + leftVariable;
      } else {
        return sum + leftVariable;
      }
    } else {
      return expression;
    }
  }
}

const simplifier = new Simplifier([], "");
const result = simplifier.add("-2a-a+5x");
console.log(result);

module.exports = Simplifier;
