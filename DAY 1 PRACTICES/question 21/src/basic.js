// palindrome.js
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "Not a palindrome";
        }
    }
    return "Palindrome";
}

module.exports = isPalindrome;
