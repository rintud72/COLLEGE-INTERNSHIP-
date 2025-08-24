// countEven.js
function countEvenGreater50(arr) {
    let count = 0;
    for (let num of arr) {
        if (num > 50 && num % 2 === 0) {
            count++;
        }
    }
    return count;
}

module.exports = countEvenGreater50;
