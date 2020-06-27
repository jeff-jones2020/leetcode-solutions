/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letLogs = logs.filter(item => isNaN(parseInt(item.split(' ')[1])));
  const numLogs = logs.filter(item => !isNaN(parseInt(item.split(' ')[1])));

  letLogs.sort((a, b) => {
    a = a.split(' ');
    b = b.split(' ');
    const aId = a[0];
    const bId = b[0];
    for (let i = 1; i < a.length; i++) {
      if (b[i] === undefined) {
        return -1;
      } else if (a[i] < b[i]) {
        return -1;
      } else if (a[i] > b[i]) {
        return 1;
      }
    }

    return aId < bId ? -1 : 1;
  });

  return letLogs.concat(numLogs);
};
