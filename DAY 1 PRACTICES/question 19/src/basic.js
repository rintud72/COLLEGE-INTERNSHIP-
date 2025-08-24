// primeCount.js
function countPrimes(arr) {
    let count = 0;
    for (let num of arr) {
        if (num > 1) {
            let prime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) count++;
        }
    }
    return count;
}

module.exports = countPrimes;
