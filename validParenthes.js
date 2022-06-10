/**
 * @param {string} s
 * @return {boolean}
 */

 const isOpening = bracket => ['{', '[', '('].includes(bracket);
 const isClosing = bracket => ['}', ']', ')'].includes(bracket);
 
 const closingObject = {
     '{': '}',
     '[': ']',
     "(" : ")"
 }
 
 var isValid = function(s) {
     let temp=[];
     for(let i=0; i< s.length; i++){
         if(isOpening(s[i])) {
             temp.push(s[i])
         } else {
             if(s[i] === closingObject[temp[temp.length-1]]){
                 temp.pop();
             } else
                 return false;
         }
     }
     return !temp.length;
 };
 
 console.log(isValid("()[]{}"));
 console.log(isValid("{()[]{}"));
 
 