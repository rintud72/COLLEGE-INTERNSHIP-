// checkNumber.js
function checkNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            
            return "number found";
        }
    }
   
    return "number not found";        
}

module.exports = checkNumber;
