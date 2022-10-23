const sumAll = function (int1, int2) {

  if (Number.isInteger(int1) && Number.isInteger(int2)) {

    if (int1 > 0 && int2 > 0) {
      let finalSum = 0;
      if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
          finalSum += i;
        }
      } else if (int2 > int1) {
        for (let i = int1; i <= int2; i++) {
          finalSum += i;
        }
      }
      return finalSum;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = sumAll;
