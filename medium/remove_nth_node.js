/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let currentNode = head;

  if (n === 1) {
    if (currentNode.next === null) return null;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return head;
  }

  let count = 0;
  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }

  currentNode = head;

  while (count > n) {
    currentNode = currentNode.next;
    count--;
  }

  currentNode.val = currentNode.next.val;
  currentNode.next = currentNode.next.next;
  return head;
};
