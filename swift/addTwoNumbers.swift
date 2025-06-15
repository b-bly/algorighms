#!/usr/bin/env swift

import Swift
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var n1 = l1.joined(separator: "") 
        var n2 = l2.joined(spearator: "")
        return n1
    }
}
var l1 = [2,4,3]
var l2 = [5,6,4]

var result = Solution.addTwoNumbers()
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.