const buildList = require('./util/buildList.js')
const ListNode = require('./util/ListNode.js')

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0)
  let current = dummy
  while(list1 !== null & list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  current.next = list1 !== null ? list1 : list2
  return dummy.next
}

let list1 = buildList([1, 2, 4])
let list2 = buildList([1, 3, 4])
// Output: [1, 1, 2, 3, 4, 4]

const result = mergeTwoLists(list1, list2)
console.log(result)
