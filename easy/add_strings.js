/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sumStr = '';
  let sumPlace;
  let carry = 0;

  while (num1 !== '') {
    if (num2 === '') {
      return (num1 + sumStr);
    }
    sumPlace = Number(num1[num1.length - 1]) + Number(num2[num2.length - 1]) + carry;
    num1 = num1.slice(0, num1.length - 1);
    num2 = num2.slice(0, num2.length - 1);

    if (sumPlace - 10 >= 0) {
      sumPlace = sumPlace - 10;
      if (num1 === '') {
        num1 = "1";
        carry = 0;
      } else if (num2 === '') {
        num2 = "1";
        carry = 0;
      } else { carry = 1; }
    } else { carry = 0; }

    sumStr = sumPlace + sumStr;
  }

  sumStr = num2 + sumStr;
  return sumStr;
};
