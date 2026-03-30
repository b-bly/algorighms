const buildList = require('./util/buildList.js')
const listToArray = require('./util/listToArray.js')
const ListNode = require('./util/ListNode')


var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head)
  let slow = dummy
  let fast = dummy
  // move fast n+1 ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  // slow is at end - (n + 1)
  slow.next = slow.next.next
  return dummy.next
}

let head = buildList([1,2,3,4,5]);
let n = 2;

console.log(head)

let result = removeNthFromEnd(head, n);

console.log(listToArray(result)); // [1,2,3,5]