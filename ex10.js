//Reverse a string. 
const string = "hello world"

const reversedString = 
string.split("").
reduce((acc, char) => char + acc, "");
console.log(reversedString);

// const reversed = string.reverse();
// console.log('reversed:', reversed);