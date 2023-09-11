//Create a function that will merge two arrays and return the result as one new array
const mergeResult = [].concat(array1, array2);
const even = [ 1, 3, 5];
const odd = [2, 4, 6];

const all1 = even.concat(odd);
const all2 = [].concat(even, odd);

console.log(all1);
console.log(all2); 