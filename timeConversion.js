function timeConversion(s) {
    // Write your code here
    const isAm = s.substr(s.length - 2) === 'AM';
    if(isAm){
        if(s.substr(0, 2) === '12'){
            return '00'+ s.slice(2, s.length - 2);
        } 
            return s.slice(0, s.length - 2)
    }
    else {
        if(s.substr(0, 2) === '12') {
            return '12'+ s.slice(2, s.length - 2);
        } else {
        const hour = s.substr(0, 2);
        return (12 + Number(hour)) + s.slice(2, s.length - 2);;   
        }
    }
}


console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('12:05:45PM'));
