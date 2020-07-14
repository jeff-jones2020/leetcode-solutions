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
var isSymmetric = function (root) {
  if (!root) return true;
  let curRow = [root.left, root.right];
  let nextRow;
  let rowIsValid = true;
  let curMid;

  while (rowIsValid) {
    rowIsValid = false;
    curMid = curRow.length / 2
    for (let i = 0; i < curMid; i++) {
      if (!curRow[i] && !curRow[curRow.length - i - 1])
        continue;
      else if (!curRow[i] || !curRow[curRow.length - i - 1])
        return false;
      if (curRow[i].val !== curRow[curRow.length - i - 1].val)
        return false;
      if (!rowIsValid && curRow[i])
        rowIsValid = true;
    }

    if (rowIsValid) {
      nextRow = [];

      curRow.forEach(node => {
        if (node)
          nextRow.push(node.left, node.right);
        else
          nextRow.push(null, null);
      });
      curRow = nextRow;
    }

  }

  return true;

};
