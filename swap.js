let a = 5;
let b = 7;
console.log(a, b);

//Swap nums using temp var
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//without temp (destructuring)
[a, b] = [b, a];
console.log(a, b);