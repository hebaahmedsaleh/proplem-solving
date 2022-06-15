
const isUpperCase = code => code  > 66 &&  code <= 90;
const isLowerase = code => code < 123 &&  code >= 97;

function caesarCipher(s, iterations) {
    let k = iterations % 26;
    // Write your code here
    let charCode;
    let result ='';
    for(let i=0; i< s.length; i++){
        charCode = s[i].charCodeAt(0);
        if(/^[a-zA-Z]+$/.test(s[i])){ 
            if(charCode + k > 122 || (isUpperCase(charCode) && charCode + k > 90)) {
                charCode = charCode - 26 + k
            } else {
                charCode = charCode +  k;    
            }
        }

        result =  result + String.fromCharCode(charCode);
    }
    return result;
}

console.log(caesarCipher('World!', 4));