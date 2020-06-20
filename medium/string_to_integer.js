/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let spaceChars = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') spaceChars++;
    else break;
  }
  str = str.slice(spaceChars);
  const INT_MIN = -(Math.pow(2, 31));
  const INT_MAX = Math.pow(2, 31) - 1;
  const converted = parseInt(str, 10);

  if (Number.isNaN(converted)) return 0;
  if (converted > INT_MAX) return INT_MAX;
  if (converted < INT_MIN) return INT_MIN;

  return converted;
};
