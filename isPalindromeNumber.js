/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindromeNumber = function(x) {
    const reversed = x.toString().split('').reverse().join('');
    return reversed == x;
};

var isPalindrome = function(x) {
    let temp='';
    let s= x.toString();
    for(let i=s.length - 1; i>=0; i--){
        temp= temp + s[i];

    }
    return temp == s;
};

console.log(isPalindromeNumber(121));
console.log(isPalindrome(121));
console.log(isPalindrome(1241));