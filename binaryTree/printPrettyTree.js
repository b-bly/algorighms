function printPrettyTree(node, prefix = '', isLeft = true) {
    if (!node) return

    if (node.right) {
        printPrettyTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)
    }

    console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.val)

    if (node.left) {
        printPrettyTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)
    }
}

module.exports = printPrettyTree