const buildTree = require('./BuildTree')
const printPrettyTree = require('./printPrettyTree')

var recoverTree = function (root) {
  let prev = null
  let first = null
  let second = null

  function inOrder(node) {
    if (!node) return
    inOrder(node.left)

    if (prev && prev.val > node.val) {
      if (!first) {
        first  = prev
      }
      second = node
    }
    prev = node
    inOrder(node.right)
  }
  inOrder(root)
  let temp = first.val
  first.val = second.val
  second.val = temp
  return root
}

 _root = [1, 3, null, null, 2]
// Output: [3, 1, null, null, 2]
let root = buildTree(_root)


const result = recoverTree(root)
console.log(result)
printPrettyTree(result)
