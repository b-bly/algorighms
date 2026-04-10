const buildList = require("./util/buildList")
const ListNode = require("./util/ListNode")
const listToArray = require("./util/listToArray")

var deleteDuplicates = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  while(head) {
    if (head.next && head.val === head.next.val) {
      const dup = head.val
      while(head && head.next && head.next.val === dup) {
        head = head.next
      }
      prev.next = head
    } else {
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
