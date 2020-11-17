/* Игра - виселица (угадай слово) 
Слово - коллайдер
Количество ошибок = 6
1) Ввести букву
2) Сравниваем букву со словом
3) Если в слове есть буква -  играем дальше
4) Если буквы нет - вычитаем кол-во попыток
5) Игра заканчивается, когда собрано слово, либо кол-во ошибок = 0
*/
const word = "Коллайдер";
let guessWord = "";
let errCnt = 6;
console.log(word);
console.log(word.charAt(5)); /* Находит букву по номеру от нуля */
console.log(word.length);/* Покажет, сколько всего символов в строке*/
for ( let i = 0; i < word.length; i++) {
    guessWord += "-"
}
console.log(guessWord);
console.log(word.length === guessWord.length);



while (errCnt ) {
let char = prompt("Введите букву"); /* Работает только в БРАУЗЕРЕ! НЕ РАБОТАЕТ в Node.js! */
let newWord = "";
/*
К = л? => false => "" + "-" => "-"
о = л? => false "-" + "-" => "--"
л = л? => true => "--" + "л" => "--л"
л = л? => true => "--" + "л" => "--лл"
а = л? => false => "--" + "-" => "--лл-"
*/
/*
// "Коллайдер"
// "--лл-----" => "" "--лла----"
*/
for (let i =0; i < word.length; i++) {
    if(char.toLowerCase() === word.charAt(i).toLowerCase()) {
        newWord += char; // newWord = newWord + char;
        //guessWord.charAt(i) = char;
    } else {
        newWord += guessWord.charAt(i);
    }

}
if(guessWord === newWord) {
    errCnt--;
} else {
    guessWord = newWord;
}
/* word.toLowerCase() => все буквы маленькие
word.toUpperCase() => все буквы большие
*/
if (guessWord.toLowerCase() === word.toLowerCase()) {
    console.log("You win!");
    break;
}
console.log(guessWord);
// guessWord = newWord;
// console.log(guessWord);
// errCnt--;
}
console.log("Game over!");











