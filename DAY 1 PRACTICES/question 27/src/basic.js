// separate.js
function separateOddEven(arr) {
    let odd = [];
    let even = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    return { odd, even };
}

module.exports = separateOddEven;
