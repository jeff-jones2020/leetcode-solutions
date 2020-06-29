/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let intersection = [];

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = map[nums1[i]] === undefined ? 1 : ++map[nums1[i]];
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] !== undefined && map[nums2[i]] > 0) {
      intersection.push(nums2[i]);
      map[nums2[i]]--;
    }
  }

  return intersection;

};
