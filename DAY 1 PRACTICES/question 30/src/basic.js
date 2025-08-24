// avgEvenOdd.js
function avgEvenOdd(arr) {
  let evenSum = 0, evenCount = 0;
  let oddSum = 0, oddCount = 0;

  for (let n of arr) {
    if (n % 2 === 0) { evenSum += n; evenCount++; }
    else { oddSum += n; oddCount++; }
  }

  return [evenCount ? evenSum / evenCount : 0, oddCount ? oddSum / oddCount : 0];
}

module.exports = avgEvenOdd;