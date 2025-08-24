// primeOnly.js
function showPrimes(arr) {
  for (let n of arr) {
    if (n < 2) continue;
    let prime = true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) { prime = false; break; }
    }
    if (prime) console.log(n);
  }
}

module.exports = showPrimes;
