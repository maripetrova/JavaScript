/*
Функции 
*/
// f(x) = 2x + 10
function alg (x = 5) {
    let y = 2 * x + 10;
    //console.log(x,y);
    return x;
}
let n = alg(2);
console.log(n);
console.log(alg(getNumber(100,50)));
alg(10);
alg();
alg(5);
const getNumber function getNumber(max = 101, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getNumber(10));









