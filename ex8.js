//Find the maximum number in an array of numbers.
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  
  const numbers = [1, 2, 3, -4, -5,];
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
