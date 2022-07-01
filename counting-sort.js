function countingSort(arr) {
    // Write your code here
    let freqArr = new Array(arr.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
        freqArr[arr[i]] = (freqArr[arr[i]] || 0) + 1;
    }
    console.log(freqArr);
    let temp = [];
    const length = Math.max(...freqArr)
        // push index occurness time 0,3,1,1
    for (let i = 0; i < freqArr.length; i++) {
        for (let j = 0; j < freqArr[i]; j++) {
            temp[j] = i;
        }
    }
    return temp;

}


console.log(countingSort([1, 1, 3, 2, 1]));