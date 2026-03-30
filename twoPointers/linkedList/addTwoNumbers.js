
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0)
    let current = dummy
    let carry = 0
    while(l1 !== null || l2 !== null || carry !== 0) {
      let val1 = l1 ? l1.val : 0
      let val2 = l2 ? l2.val : 0
      const sum = val1 + val2 + carry
      carry = Math.floor(sum / 10)
      let digit = sum % 10
      current.next = new ListNode(digit)
      current = current.next
      if (l1) l1 = l1.next
      if (l2) l2 = l2.next
    }
    return dummy.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node3 = new ListNode(3);
const node2 = new ListNode(4, node3); // Node 2 points to node 3
const l1 = new ListNode(2, node2);  // Head points to node 2
const _node3 = new ListNode(4)
const _node2 = new ListNode(6, _node3)
const l2 = new ListNode(5, _node2)
// The list now represents 2 -> 4 -> 3

// l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

let result = addTwoNumbers(l1, l2)
console.log(result)