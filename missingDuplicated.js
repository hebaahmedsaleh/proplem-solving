



let arr = [1,2,4,3,3];
let sorted = arr.sort((a, b) => a - b);
let temp =[];
sorted.forEach((elem, i) => {
if(elem === sorted[i+1]) {
    temp.push(elem);
    sorted.splice(i, 1);
}
});


for (let index = 1; index <= arr.length; index++) {
    if(!sorted.includes(index +1))
    {
        temp.push(index + 1)

    }
}


console.log({ temp });