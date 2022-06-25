function superDigit(n, k) {
    // Write your code here
    let test = n;
    for(let i=0; i<k; i++) {
        const nums = test.toString().split('');
        test = nums.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue),0);
    }
    return test;
   
}


console.log(superDigit('148', 3));