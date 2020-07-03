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
var hasCycle = function (head) {
  if (head === null) return false;
  const nodes = [head];
  let cur = head;

  while (cur.next) {
    cur = cur.next;
    if (nodes.includes(cur)) {
      return true;
    }
    nodes.push(cur);
  }

  return false;

};
