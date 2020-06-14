/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const map = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false };

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      if (map[board[i][k]] === false) map[board[i][k]] = true;
      else if (board[i][k] === '.') continue;
      else return false;
    }
    resetMap(map);
  }

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      if (map[board[k][i]] === false) map[board[k][i]] = true;
      else if (board[k][i] === '.') continue;
      else return false;
    }
    resetMap(map);
  }

  for (let i = 0; i < 9; i += 3) {
    for (let k = 0; k < 3; k++) {
      if (map[board[i][k]] === false) map[board[i][k]] = true;
      else if (board[i][k] === '.') continue;
      else return false;
    }
    for (let k = 0; k < 3; k++) {
      if (map[board[i + 1][k]] === false) map[board[i + 1][k]] = true;
      else if (board[i + 1][k] === '.') continue;
      else return false;
    }
    for (let k = 0; k < 3; k++) {
      if (map[board[i + 2][k]] === false) map[board[i + 2][k]] = true;
      else if (board[i + 2][k] === '.') continue;
      else return false;
    }
    resetMap(map);
  }

  for (let i = 0; i < 9; i += 3) {
    for (let k = 3; k < 6; k++) {
      if (map[board[i][k]] === false) map[board[i][k]] = true;
      else if (board[i][k] === '.') continue;
      else return false;
    }
    for (let k = 3; k < 6; k++) {
      if (map[board[i + 1][k]] === false) map[board[i + 1][k]] = true;
      else if (board[i + 1][k] === '.') continue;
      else return false;
    }
    for (let k = 3; k < 6; k++) {
      if (map[board[i + 2][k]] === false) map[board[i + 2][k]] = true;
      else if (board[i + 2][k] === '.') continue;
      else return false;
    }
    resetMap(map);
  }

  for (let i = 0; i < 9; i += 3) {
    for (let k = 6; k < 9; k++) {
      if (map[board[i][k]] === false) map[board[i][k]] = true;
      else if (board[i][k] === '.') continue;
      else return false;
    }
    for (let k = 6; k < 9; k++) {
      if (map[board[i + 1][k]] === false) map[board[i + 1][k]] = true;
      else if (board[i + 1][k] === '.') continue;
      else return false;
    }
    for (let k = 6; k < 9; k++) {
      if (map[board[i + 2][k]] === false) map[board[i + 2][k]] = true;
      else if (board[i + 2][k] === '.') continue;
      else return false;
    }
    resetMap(map);
  }

  return true;

  function resetMap(map) {
    for (const num in map) {
      map[num] = false;
    }
  }
};
