/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    for (let k = 0; k < words[i].length; k++) {
      if (order.indexOf(words[i][k]) < order.indexOf(words[i + 1][k])) {
        break;
      }
      if (order.indexOf(words[i][k]) > order.indexOf(words[i + 1][k]) || words[i + 1][k] === undefined) {
        return false;
      }

    }
  }

  return true;
};
