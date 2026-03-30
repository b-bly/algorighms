const buildList = require('./util/buildList')
const ListNode = require('./util/ListNode')

var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0)
    let current = dummy
    while ((list1 !== null) & (list2 !== null)) {
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
// fast
var mergeKLists = function (lists) {
    if (lists.length < 1) return null
    let interval = 1
    while (interval < lists.length) {
        for (let i = 0; i + interval < lists.length; i += 2 * interval) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval])
        }
        interval *= 2 // merging 2 lists at a time
    }
    return lists[0]
}

let lists = [
    buildList([1, 4, 5]),
    buildList([1, 3, 4]),
    buildList([2, 6]),
]
// Output: [1, 1, 2, 3, 4, 4, 5, 6]

let result = mergeKLists(lists)
while (result !== null) {
  console.log(result.val)
  result = result.next
}


// slow
var _mergeKLists = function (lists) {
    while (lists.length > 1) {
        const l1 = lists.shift()
        const l2 = lists.shift()
        const merged = mergeTwoLists(l1, l2)
        lists.push(merged)
    }
    return lists[0]
}