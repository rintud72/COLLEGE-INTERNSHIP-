// divisibleBy5.js
function divisibleBy5() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

module.exports = divisibleBy5;
