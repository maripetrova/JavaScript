/*
Типы данных
Number (4 NaN)
String ("Хехехе")
Boolean (false)
undefined
null
Object {}
       []

Управляющие конструкции 

if () {

} else if (true) {

} else {

}
Циклы

while (true) {

} do {

} while (true);

for(;true;) {

}

Функции
function (n) {
    return n + n;
}
*/
let words = ["банан" , "капуста" , "тыква"];
const getWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//console.log(words[1]); получание элемента массива по индексу
//console.log(getWord(words));

// Декларированная функция(можно вызвать в любой части кода)
function a() {
    console.log("Функция А");
}
// Функциональное выражение
const b = function() {
    console.log("Функция В");
}
// Стрелочная функция(всегда что-то возвращает, не использовать this)
const c = () => {
    console.log("Функция С");
}

/*
1, 2, 3, 4, 5, 6, 7
2 - 2 - 2
1 - 4 - 5

*/
const getNumber = max => Math.ceil(Math.random() * max); // 0 < x <= 7
const changeChar = function(char) {
    switch(char) {
        case 1:
            char = "🥰";
            break;
        case 2:
            char = "💦";
            break;
        case 3:
            char = "🍌";
            break;
        case 4:
            char = "😏";
            break;
        case 5:
            char = "🧟";
            break;
        case 6:
            char = "🥵";
            break;
    }
    return char;
}
let money = 1000, bet = 100;
const game = function(money, bet) {
let coint = 0;
while (money >= 100) {
let slot1 = getNumber(7), 
    slot2 = getNumber(7), 
    slot3 = getNumber(7);
    console.log(slot1, changeChar(slot1));
    money -= bet;
    let info = "";
    if (slot1 === slot2 && slot1 === slot3) {
        coint += 2;
        money += bet * 2
        info = "Большой куш!!!!!!!!!!!!!!!"
    } else if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
        coint += 1;
        money += bet * 1.5
        info = "Вы почти выиграли:)"
    } else {
        info = "Ставка не зашла:(";
    }
    console.log(`${changeChar(slot1)} - ${changeChar(slot2)} - ${changeChar(slot3)} ${info}, ваш счет - ${coint}`);
}
}
game(200,50);







