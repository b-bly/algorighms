// const TreeNode = require("./TreeNode")
function TreeNode(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
//      \
//       5

//     1
//    / \
//       2
//      / \
//     3   4
//          \
//           5
//            \
//             6

//     1
//    / \
//       2
//      / \
//     3
//       \
//         4
//          \
//           5
//            \
//             6

//     1
//    / \
//       2
//        \
//         3
//          \
//            4
//             \
//              5
//               \
//                6
// curr 2  prev 4
// Connect right subtree to the rightmost node
// 4.right = 5
// 3.right = 4

// Move left subtree to right
// 1.right = 2
// 2.right = 3
const flatten = (root) => {
    let curr = root
    while (curr !== null) {
        if (curr.left !== null) {
            let prev = curr.left
            while (prev.right !== null) {
                prev = prev.right
            }

            prev.right = curr.right

            curr.right = curr.left
            curr.left = null
        }
        curr = curr.right
    }

    // return root
}

// let root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]

// const node = TreeNode(root)

// Build this tree:

let _root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)))

let result = flatten(_root)
console.log(result)
while (result !== null) {
    console.log(result.val)
    result = result.right
}
