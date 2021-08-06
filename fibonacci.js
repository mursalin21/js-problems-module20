// const fibo = [0, 1];

// for(let i = 2; i <= 20; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibonacciSeries(num){
    const fibo = [0, 1];
    if(typeof(num) != "number"){
        return "Error: Please return a number."
    }

    for (let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const ans = fibonacciSeries("hlkas d");
console.log(ans);