let x;
console.log("Привет!");
try {
    let y = 5 + x;
} catch (e) {
   //console.log(e);
   console.log("\tОшибочка в коде! ЫЫЫЫ!!!")
} finally {
    console.log("\tOonononon");
}
console.log("Пока!");

// let n = Math.floor(Math.random() * 6);
// let zeroSplitter = new Error("На ноль делить нельзя!");
// try {
//     if (n === 0) {
//         throw zeroSplitter
//     }
//     console.log(n, 12 / n);
// } catch (e) {
//     console.error(e.message);
// }

// console.log(n, 12 * n);

let numbers = [];
const getN = (max = 101) => {
    return Math.floor(Math.random() * max);
}


while (true) {
    numbers.push(getN());
    if (numbers.length >= 100) {
        break;
    }
}

console.time("for");
// Задача: Посчитать сумму значений в цикле.
let result = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
    result += numbers[i];
}
console.log(result);
console.timeEnd("for");

console.time("forin");
let result1 = 0;
for (let key in numbers) { // плохо использовать для массивов!
    result1 += numbers[key];
}
console.log(result1);
console.timeEnd("forin");

console.time("forof");
let result2 = 0;
for (let val of numbers) { // Один из крутейших способов прогнаться по массиву
    result2 += val;
}
console.log(result2);
console.timeEnd("forof");