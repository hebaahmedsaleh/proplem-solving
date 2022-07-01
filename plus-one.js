var plusOne = function(digits) {
    let length = digits.length;
    let last = digits[length - 1] + 1;
    digits.pop();
    if (length === 1) {
        if (digits[0] == 9) {
            return [1, 0]
        } else
            return [last];
    }
    return [...digits, last]
};

console.log(plusOne([9]));