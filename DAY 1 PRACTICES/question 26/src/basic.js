// allPrime.js
function allPrime(arr) {
    for (let num of arr) {
        if (num <= 1) return "Not all prime";
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return "Not all prime";
        }
    }
    return "All prime";
}

module.exports = allPrime;
