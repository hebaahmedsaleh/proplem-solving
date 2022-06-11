function lonelyinteger(a) {
    // Write your code here
    let temp = {};
    for(let i=0; i<a.length;i++){
        if(temp[a[i]]){
            temp[a[i]]++;
        } else {
            temp[a[i]] = 1;
        }
    }
    for(let key in temp){
        if(temp[key] === 1) {
            return key;
        }
    }
}


console.log(lonelyinteger([1,5,7,7,4,4,1]));