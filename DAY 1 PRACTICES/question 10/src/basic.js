// smallest.js
function findSmallest(arr) {
    let smallest = arr[0];   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

module.exports = findSmallest; 
