//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function filterPositiveNumbers(arr) {
    const positiveNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveNumbers.push(arr[i]);
      }
    }
    return positiveNumbers;
  }
  
  const numbers = [1, 2, 3, -4, -5,];
  const positiveNumbers = filterPositiveNumbers(numbers);
  console.log(positiveNumbers); 