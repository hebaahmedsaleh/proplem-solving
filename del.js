var removeElement = function(nums, val) {
    let filt = nums.filter(e=> e !== val)
     return filt;
 };

console.log(removeElement([0,1,2,2,3,0,4,2], 2));