var singleNumber = function (nums) {
  if (!nums.length) return nums;

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) delete map[nums[i]];
    else map[nums[i]] = false;
  }

  for (const num in map) return num;

}
