// const buildList = require('./util/buildList')
const ListNode = require('../twoPointers/linkedList/util/ListNode')
const printPrettyTree = require('../binaryTree/printPrettyTree')


var reorderList = function (head) {
    if (!head || !head.next) return
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // slow 1 >2 3 4
    // slow 1 2 >3 4 5
    let second = slow.next
    slow.next = null
    let prev = null
    let curr = second
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    second = prev
    first = head
    while (second) {
        firstNext = first.next
        secondNext = second.next
        first.next = second
        second.next = firstNext
        first = firstNext
        second = secondNext
    }
}
let head = new ListNode([1, 2, 3, 4])
// Output: [1,4,2,3]       
// Example 2:

// head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
reorderList(head)
const pretty = printPrettyTree(head)
console.log(pretty)
