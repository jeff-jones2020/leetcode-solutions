/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let happyMaybe = n;
  let sum = 0;
  let foundNums = [n];

  do {
    foundNums.push(happyMaybe);
    happyMaybe = happyMaybe.toString();
    for (let i = 0; i < happyMaybe.length; i++) {
      sum += happyMaybe[i] * happyMaybe[i];
    }

    if (sum === 1) {
      return true;
    }

    happyMaybe = sum;
    sum = 0;
  } while (!foundNums.includes(happyMaybe));

  return false;
};
