/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = BigInt(0);
  let multiplier = BigInt(1);
  let currentNode = l1; // {val:2 , next: 4}

  while (currentNode !== null) {
    sum += BigInt(currentNode.val) * BigInt(multiplier);
    currentNode = currentNode.next;
    multiplier *= 10n;
  }
  multiplier = BigInt(1);
  currentNode = l2;

  while (currentNode !== null) {
    sum += BigInt(currentNode.val) * BigInt(multiplier);
    currentNode = currentNode.next;
    multiplier *= 10n;
  }

  sum = sum.toString();
  const newHead = new ListNode(parseInt(sum[sum.length - 1], 10));
  currentNode = newHead;
  for (let i = sum.length - 2; i >= 0; i--) {
    currentNode.next = new ListNode(parseInt(sum[i], 10));
    currentNode = currentNode.next;
  }

  return newHead;
};
