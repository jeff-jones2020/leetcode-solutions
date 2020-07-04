/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 1) return;
  if (k > nums.length) k = k % nums.length;
  let lastEls = nums.splice(nums.length - (k), k);
  for (let i = k - 1; i >= 0; i--) {
    nums.unshift(lastEls[i]);
  }

};
