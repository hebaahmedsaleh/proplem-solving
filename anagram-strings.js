function makeAnagram(a, b) {
    // Write your code here
    let duplicates =  new Array(26).fill(0);
    for(let i=0; i< a.length;i++){
        // 97 --> 122
        const asci = a[i].charCodeAt(0);
        duplicates[asci - 97] = duplicates[asci - 97] + 1;          
    }
       for(let i=0; i< b.length;i++){
        // 97 --> 122
        const asci = b[i].charCodeAt(0);
        duplicates[asci - 97] = duplicates[asci - 97] - 1;          
    }
    return duplicates.reduce((prev, curr) => { 
        return Math.abs(prev) + Math.abs(curr)
    }, 0); 
}


console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));