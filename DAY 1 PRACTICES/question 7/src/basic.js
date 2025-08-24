// oddSum.js
function sumOfOdds(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}

module.exports = sumOfOdds;
