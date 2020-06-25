/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let list = [];
  let queue = [];
  let current = root;
  let count = 0;
  let nextCount = 1;
  queue.push(current);

  while (queue.length > 0) {
    count = nextCount;
    nextCount = 0;
    let result = [];
    while (count > 0) {
      current = queue.shift();
      if (current.left) {
        queue.push(current.left);
        nextCount++;
      }
      if (current.right) {
        queue.push(current.right);
        nextCount++;
      }
      result.push(current.val);
      count--;
    }
    list.push(result);
  }
  return list;
};
