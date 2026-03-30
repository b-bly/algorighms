const buildList = require("./util/buildList")
const ListNode = require("./util/ListNode")

var _swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  while(prev.next && prev.next.next) {
    // >1, 2, 3, 4
    let a = prev.next
    // > 2, 3, 4
    let b = prev.next.next
    // >1, 3, 4
    a.next = b.next
    // b  > 2, 1, 3, 4
    // a >1, 3, 4
    b.next = a
    // 2, 1, 3, 4   mutates dummy
    prev.next = b
    // 1, 3, 4   advances head
    prev = a
  }
  return dummy.next
}

let head = buildList([1, 2, 3, 4])

// Output: [2, 1, 4, 3]
let result = swapPairs(head)
while (result !== null) {
  console.log(result.val)
  result = result.next
}