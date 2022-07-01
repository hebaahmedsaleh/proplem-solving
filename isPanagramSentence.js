var checkIfPangram = function(sentence) {
    let arr = new Array(26).fill(0)
    for (let i = 0; i < sentence.length; i++) {
        let asci = sentence[i].charCodeAt(0) - 97;
        arr[asci] = arr[asci] + 1;
    }

    return arr.every(i => i >= 1);
};