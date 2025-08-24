// checkFibonacci.js
function isFibonacci(num) {
    if (num === 0 || num === 1) return "Number is in Fibonacci series";

    let a = 0, b = 1, c = 0;
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
        if (c === num) {
            return "Number is in Fibonacci series";
        }
    }
    return "Number is NOT in Fibonacci series";
}

module.exports = isFibonacci;
