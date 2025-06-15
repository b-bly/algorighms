/**
 * @param {number} n
 * @return {string[]}
 */
module.exports = generateParenthesis = function (n) {
  const result = []
  const backtrack = (current, open, closed) => {
    if (current.length === n * 2) {
      return result.push(current);
    }
    if (open < n) {
      backtrack(current + '(', open + 1, closed)
    }
    if (closed < open) {
      backtrack(current + ')', open, closed + 1);
    }
  }
  backtrack('', 0, 0)
  return result
}

// Input: n = 3
// Output: ['((()))', '(()())', '(())()', '()(())', '()()()']