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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let max = arguments[1] ? arguments[1] : Infinity;
  let min = arguments[2] ? arguments[2] : -Infinity;
  let isValid = true;

  if (root.left) {
    if (root.left.val >= root.val)
      return false;
    if (root.left.val >= max || root.left.val <= min)
      return false;
    else
      isValid = isValidBST(root.left, root.val, min);
  }
  if (!isValid) return false;

  if (root.right) {
    if (root.right.val <= root.val)
      return false;
    if (root.right.val >= max || root.right.val <= min)
      return false;
    else
      isValid = isValidBST(root.right, max, root.val);
  }

  return isValid;

};
