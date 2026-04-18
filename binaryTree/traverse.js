const buildTree = require("./BuildTree")
const printPrettyTree = require("./printPrettyTree")

var inorderTraversal = function (root) {
    const result = []

    function traverse(node) {
      if (!node) return
      traverse(node.left)
      result.push(node.val)
      traverse(node.right)
    }
    traverse(root)
    return result
}

let root = buildTree([1, null, 2, 3])

root = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])

// Output: [4, 2, 6, 5, 7, 1, 3, 9, 8]

const result = inorderTraversal(root)
console.log(result)
printPrettyTree(root)
