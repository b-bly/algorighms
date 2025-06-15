/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let results = [];
  candidates.sort((a, b) => a - b); // Sort to handle duplicates

  function backtrack(start, path, remaining) {
      if (remaining === 0) {
          results.push([...path]);
          return;
      }

      for (let i = start; i < candidates.length; i++) {
          if (i > start && candidates[i] === candidates[i - 1]) continue; // skip duplicates
          if (candidates[i] > remaining) break;

          path.push(candidates[i]);
          backtrack(i + 1, path, remaining - candidates[i]);
          path.pop();
      }
  }

  backtrack(0, [], target);
  return results;
};

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8
const result = combinationSum2(candidates, target)
console.log(result)
module.exports = combinationSum2
