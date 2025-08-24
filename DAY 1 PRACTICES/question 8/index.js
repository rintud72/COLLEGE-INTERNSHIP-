// index.js
const countEvenOdd = require("./src/basic");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = countEvenOdd(numbers);

console.log("Even numbers:", result.even);
console.log("Odd numbers:", result.odd);
