// oddNumbers.js
function printOddNumbers() {
    let count = 0;
    let num = 1;

    while (count < 20) {
        console.log(num);
        num += 2;   
        count++;
    }
}

module.exports = printOddNumbers;
