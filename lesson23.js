/*
RegExp
Регулярные выражения
*/
//let word = new String("Подушка");
//let reg = new RegExp("ду");

let word = "Кукуруза";
let reg = /ку/ig; // i - ignoring case, g - global search

//console.log(word.search(reg)); //Есть ли сопоставление регулярного выражения в строке?
//console.log(word.match(reg));// Массив со всеми совпадениями 

//console.log(reg.test(word));
//console.log(reg.exec(word));

let mail = "mariPetrova27@gmail.com"
let check = /^[a-z]{4,}[0-9]*@[a-z]+\.[a-z]{2,3}$/i;
/* + предыдуший символ будет находиться в строке в кол-ве 1+
. любой символ
{2,3} - не менее двух, не более трех
$ конец строки
*/
console.log("Соответствие почты требованиям: " + check.test(mail));
/*
Составить регулярное выражение для проверки телефонного номера
*/


