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