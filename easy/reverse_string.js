/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let char;
  let halfWay = Math.floor(s.length / 2);
  for (let i = 0; i < halfWay; i++) {
    char = s[s.length - i - 1];
    s[s.length - i - 1] = s[i];
    s[i] = char;
  }

};
