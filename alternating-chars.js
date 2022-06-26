function alternatingCharacters(s) {
    // Write your code here
    let temp = [];
    [...s].forEach((char, index) => {
        if (char != s[index + 1]) {
            temp.push(char);
        }
    })
    return s.length - temp.length;

}

console.log(alternatingCharacters('AABAAB'));