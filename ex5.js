// Calculate the sum of numbers in an array of numbers
function sumArray(array) {
    const myArray = [1, 2, 3, 4, 5];
    let sum = 0;
  
    for (let i = 0; i < myArray.length; i += 1) {
      sum += myArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4, 5]));