var fizzBuzz = function(n) {
    let temp = [];
    temp = [...Array(n)].map((_elem,i) => {
        const elem = i+1;
        if(elem %5 === 0 && elem %3 !== 0){
           return "Buzz";
        }
         if(elem %3 === 0 && elem %5 !== 0){
           return "Fizz";
        }
          if(elem %3 === 0 && elem %5 === 0){
           return "FizzBuzz";
        } else {
           return elem;
        }
    });
    
    return temp;
};


console.log(fizzBuzz(15));