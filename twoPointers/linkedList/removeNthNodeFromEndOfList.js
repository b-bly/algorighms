var removeNthFromEnd = function (head, n) {
    const dummy = { val: 0, next: head }

    let slow = dummy
    let fast = dummy

    // Step 1: move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }

    // Step 2: move both pointers
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }

    // Step 3: delete node
    slow.next = slow.next.next

    return dummy.next
}

function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

function buildList(arr) {
    const dummy = new ListNode(0)
    let current = dummy

    for (let num of arr) {
        current.next = new ListNode(num)
        current = current.next
    }

    return dummy.next
}

function listToArray(head) {
    const result = []
    let current = head

    while (current) {
        result.push(current.val)
        current = current.next
    }

    return result
}
let head = buildList([1,2,3,4,5]);
let n = 2;

console.log(head)

let result = removeNthFromEnd(head, n);

console.log(listToArray(result)); // [1,2,3,5]