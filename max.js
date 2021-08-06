const business = 1650;
const minister = 550;
const army = 600;

//With if else condition
// if (business > minister) {
//     console.log("Business person er pola is bigger");
// }
// else {
//     console.log("Minister er pola is bigger");
// }


//for three numbers
// if (business > minister && business > army){
//     console.log("Business is bigger");
// }
// else if(minister > business && minister > army){
//     console.log("Minister is bigger");
// }
// else{
//     console.log("Army is bigger");
// }

// //Using Math.max
// var max = Math.max(business, minister, army);

// console.log(max);

function findLargest(a, b, c){
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else {
        return c;
    }
}
console.log(findLargest(business, minister, army));