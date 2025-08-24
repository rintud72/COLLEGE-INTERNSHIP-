// evenNumbers.js
function printEvenNumbers() {
    let count = 0;
    let num = 2;

    while (count < 20) {
        console.log(num);
        num += 2;  
        count++;
    }
}

module.exports = printEvenNumbers;
