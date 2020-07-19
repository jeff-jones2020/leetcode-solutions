/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length || !strs[0].length) return '';
  let prefix = strs[0][0];
  let charIndex = 0;
  let outOfBounds = false;
  // in a real world scenario, I would consider using setTimeout as a safeguard to set outOfBounds to true after a significant amount of time has passed

  while (!outOfBounds) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].slice(0, charIndex + 1) !== prefix) {
        return (prefix.slice(0, charIndex));
      }
    }
    if (strs[0][charIndex + 1] === undefined) {
      return (prefix.slice(0, charIndex + 1));
    }
    prefix += strs[0][++charIndex];
  }
};
