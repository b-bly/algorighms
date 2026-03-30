 const ListNode = require('./ListNode.js')
 function buildList(arr) {
    const dummy = new ListNode(0)
    let current = dummy

    for (let num of arr) {
        current.next = new ListNode(num)
        current = current.next
    }

    return dummy.next
}

module.exports = buildList