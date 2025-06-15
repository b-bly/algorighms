/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return []
  }
  const dictionary = {}
  const fourLetters = [7, 9]
  let offset = 0

  for (let i = 2; i <= 9; i++) {
    const index = i - 2;
    // 97 = a
    let numberCharsForNumber = 3
    if (fourLetters.includes(i)) {
      numberCharsForNumber = 4
    }
    for (let j = 0; j < numberCharsForNumber; j++) {
      const code = 97 + offset + j;
      const letter = String.fromCharCode(code);
      if (dictionary[i]) {
        dictionary[i].push(letter);
      } else {
        dictionary[i] = [letter]
      }
    }
    offset += numberCharsForNumber
  }
  const result = []
  function recursivelyBuildString(i, curr) {
    if (i === digits.length) {
      result.push(curr);
      return;
    }
    const digit = digits[i]
    const letters = dictionary[digit]
    for (const letter of letters) {
      recursivelyBuildString(i + 1, curr + letter)
    }
  }
  recursivelyBuildString(0, '')
  return result
}

const digits = '23'
const result = letterCombinations(digits)
console.log(result)
// Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']