/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const permutations = []
  function permute(current, remaining) {
    if (remaining.length === 0) {
      const candidate = current.join('')
      permutations.push(candidate);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const _remaining = remaining.slice();
      const nextString = _remaining.splice(i, 1);
      return permute(nextString, _remaining)
    }
  }
  const indecies = []
  permute([], words)
  loop1:
  for (let i = 0; i < s.length; i++) {

    const subString = s.slice(i);
    loop2:
    for (let j = 0; j < permutations.length; j++) {
      // check only the length of the concatenation
      const perm = permutations[j]
      if (subString.includes(perm)) {
        indecies.push(i)
        break
      }
    }
  }
  return indecies
}

const s = 'barfoothefoobarman'
const words = ['foo', 'bar']

// Output: [0, 9]

const result = findSubstring(s, words)
console.log(result)