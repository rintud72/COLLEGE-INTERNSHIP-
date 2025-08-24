// allEven.js
function allEven(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            return "Not all numbers are even";
        }
    }
    return "All numbers are even";
}

module.exports = allEven;
