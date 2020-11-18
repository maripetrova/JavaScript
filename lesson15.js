/* 
Array - массив
Массив - упорядоченная последовательность значений, частный случай объекта
[] - пустой массив
["Печенька", 2, "Тралала", 0, 1, true, undefined, 23] - элементы массива
arr.length => длина массива
arr[0] => Обращение к первому элементу массива
arr[arr.length - 1] => Обращение к последнему 
*/
let iban = ["Печенька", 2, "Банан", 0, 1, true, undefined, 23]
let ibanObj = {
    word: "Печенька",
    num: 2
}
let ibanArr = {
    0: "Печенька",
    1: 2,
    2: "Банан"
}
//console.log(iban.length);
//console.log(iban[3]);
iban[13] = "Igor";
//console.log(iban[10]);
let numbers = [];
/* Наполнить массив 100 рандомными числами (1-100) и посчитать их сумму */
function getNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
let i = 0;
while (i < 100) {
    numbers[i] = getNumber(101, 1);
    i++;
}
//console.log(numbers);
let arrSum = 0;
//for (let i = 0; i < numbers.length; i++) {
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
arrSum += numbers[i];
}
//console.log(arrSum);

let fruits = [
    "Банан",
    "Манго",
    "Киви",
    "Яблоко",
    "Ананас",
    "Мандарин",
    "Груша"
];
/*
Методы массива:
.push(el) - добавить элемент в конце массива
.unshift(el) - добавить элемент в начано массива
.pop() - забрать последний элемент массива
.shift() - забрать первый элемент массива
*/
fruits.push("Помело");
fruits.unshift("Лимон");
console.log(fruits);
fruits.unshift("Абрикос");
let last = fruits.pop();
console.log(fruit, last);
/*
Дан массив из 100 чисел от 1 до 100;
Создать функцию, которая возвращает массив из простых чисел от 1 до n - рандомное число
*/
// [1, 2, 3, 4, , 6, , ...]






