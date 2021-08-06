function largestElement(numbers){
    let largest = numbers[0];
    for(let i  = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -9, -5, -2]);
console.log("Oldest Age:", oldest2);