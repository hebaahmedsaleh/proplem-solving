function diagonalDifference(arr) {
    // Write your code here
    let sumr=0;
    let suml=0;
    for(let i=0; i<arr.length; i++){
            sumr = sumr + arr[i][i];
            suml= suml + arr[i][arr.length - i - 1];
    }
    return Math.abs(sumr - suml);
}

var items = [
    [6, 2, 3],
    [3, 4, 5],
    [5, 6, 7]
  ];

  console.log(diagonalDifference(items));