// prime.js
function checkPrime(n) {
  if (n < 2) {
    console.log(n + " is not prime");
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(n + " is not prime");
        return;
    }
  }

  console.log(n + " is prime");
}

module.exports = checkPrime;