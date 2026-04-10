/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const buildList = require("./util/buildList")
const ListNode = require("./util/ListNode")
const listToArray = require("./util/listToArray")

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let smallDummy = new ListNode(0)
    let bigDummy = new ListNode(0)
    let small = smallDummy
    let big = bigDummy

    while (head) {
        let next = head.next // save next
        head.next = null // detach node

        if (head.val < x) {
            small.next = head
            small = small.next
        } else {
            big.next = head
            big = big.next
        }

        head = next
    }

    small.next = bigDummy.next
    return smallDummy.next
}

let head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

let list = buildList(head)
let result = partition(list, x)
console.log(listToArray(result))