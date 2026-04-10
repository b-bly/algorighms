const ListNode = require('./util/ListNode')
const buildList = require('./util/buildList.js')
const listToArray = require('./util/listToArray.js')

var deleteDuplicates = function (head) {
    let dummy = new ListNode(0)
    dummy.next = head

    let prev = dummy

    while (head) {
        // Detect duplicate sequence
        if (head.next && head.val === head.next.val) {
            let dupVal = head.val

            // Skip all nodes with this value
            while (head && head.val === dupVal) {
                head = head.next
            }

            // Connect prev to the next distinct node
            prev.next = head
        } else {
            // Move prev if current is unique
            prev = prev.next
            head = head.next
        }
    }

    return dummy.next
}
let head = [1, 1, 2, 3, 3, 3, 4]

// let head = [1, 2, 3, 3, 4, 4, 5]
// Output: [1, 2, 5]

let list = buildList(head)
let result = deleteDuplicates(list)

console.log(listToArray(result))
