/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const array = []
    while(head) {
        array.push(head.val)
        head = head.next
    }
    const len = array.length;
    for(let i=0; i<len/2; i++) {
        if(array[i] !== array[len - i - 1]) {
            return false
        }
    }
    return true
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = slow = head
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    if(fast !== null) {
        slow = slow.next
    }
    slow = reverse(slow)
    fast = head
    
    while(slow !== null) {
        if(slow.val !== fast.val) {
            return false
        }
        fast = fast.next
        slow = slow.next
    }
    return true
};

function reverse(head) {
    let prev = null
    while(head !== null) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}