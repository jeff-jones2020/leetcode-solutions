/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let base = '1';
  let output = '';
  let checkForIndex = 0;
  let curCount = 0;
  for (let i = 1; i < n; i++) {
    for (let k = 0; k < base.length; k++) {
      if (base[k] === base[checkForIndex]) {
        curCount++;
      } else {
        output += curCount + base[checkForIndex];
        curCount = 1;
        checkForIndex = k;
      }

      if (k === base.length - 1) {
        output += curCount + base[checkForIndex];
      }
    }
    base = output;
    checkForIndex = 0;
    curCount = 0;
    output = '';
  }

  return base;
};
