const nums = [44, 23, 34, 32, 54, 5, 78];

let sum = 0;

//console.log(sum);

function arrayTotal(array){
    
    for(let i = 0; i < nums.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(arrayTotal(nums));