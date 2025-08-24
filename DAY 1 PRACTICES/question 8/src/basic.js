// countEvenOdd.js
function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return { even: evenCount, odd: oddCount };
}

module.exports = countEvenOdd;
