//Calculate the average of the numbers in an array of numbers.
function avArray(array) {
    // const myArray = [1, 2, 3, 4, 5];
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const average = sum / array.length;

    return average;
  }
  
  console.log(avArray([1, 2, 3, 4, 5]));