const printPrettyTree = require("./printPrettyTree")
const TreeNode = require("./TreeNode")

function generateTrees(n) {
    if (n === 0) return []
    return build(1, n)
    function build(start, end) {
      const result = []
      if (start > end) {
        result.push(null)
        return result
      }
      for (let i = start; i <= end; i++) {
        const leftTrees = build(start, i - 1)
        const rightTrees = build(i + 1, end)
        for (let left of leftTrees) {
          for (let right of rightTrees) {
            const root = new TreeNode(i)
            root.left = left
            root.right = right 
            result.push(root)
          }
        }
      }
      return result
    }
}



let n = 3
let result = generateTrees(3)
console.log(result)
result.forEach((r) => printPrettyTree(r))
