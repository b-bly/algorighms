const buildList = require('./util/buildList.js')
const ListNode = require('./util/ListNode.js')
const listToArray = require('./util/listToArray.js')

var rotateRight = function (head, k) {
  if (!head || k === 0) return head
  let n = 0
  let curr = head
  while (curr) {
    curr = curr.next
    n++
  }
  k = k % n

    let dummy = new ListNode(0)
    dummy.next = head
    let fast = dummy
    let slow = dummy
    // advance k + 1 ahead
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }
    while (fast.next !== null) {
        // find tail
        fast = fast.next
        slow = slow.next
    }
    // tail.next = head
    // tailMinusK.next = null
    // fast >5
    // slow > 3, 4, 5  
    // connect 5 to one
    fast.next = dummy.next

    // new head at 4
    dummy.next = slow.next
    // define tail at 3
    slow.next = null

    // return 4, 5, 1, 2, 3
    return dummy.next
}


let head = buildList([1,2,3,4,5]);
let k = 7;
let result = rotateRight(head, k);
console.log(listToArray(result)); // [1,2,3,5]
