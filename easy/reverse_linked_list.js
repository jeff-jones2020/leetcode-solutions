/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return null;
  let prevNode = head;
  let currentNode = prevNode.next;
  let nextNode = currentNode === null ? null : currentNode.next;
  prevNode.next = null;

  while (currentNode !== null) {
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = currentNode === null ? null : currentNode.next;
  }

  return prevNode;
};
