/*
Object - Объект - набор неупорядоченных пар "ключ-значения"
*/
let obj = {}; // это пустой объект
let capitals = {
    "Российская Федерация": "Moscow", 
    italy: "Rome",
    spain: "Madrid",
    china: "Beijing" // "Пекин" 
}
capitals.china = "Пекин";
capitals.USA = "Washington D.C";

delete capitals.italy;
console.log(capitals);

let cntr = "spain";

console.log(capitals["Российская Федерация"]);
console.log(capitals[cntr]);

let mazda = {
    model: "Mazda MX5",
    color: "white",
    year: 1999,
    automat: false,
    user: {
        name: "Олег",
        rights: 23078591
    },
    benzin: "dt",
    showInfo: function() {
        return `${this.user.name} обладает ${this.model} ${this.year} года цвета ${this.color} с ${this.automat ? "автоматической" : "механической"} КПП.`;
    }
}
/*
Вывесли в консоль фразу :
"У Олега есть Mazda MX5 1999 года белого цвета с механической коробкой передач"
*/

 //let str = `${car.user.name} обладает ${car.model} ${car.year} года цвета ${car.color} с ${car.automat ? "автоматической" : "механической"} КПП.`;
 
// if (car.automat) {
//     str += "автоматической";
// } else {
//     str += "механической";
// }
// str += " КПП";
console.log(mazda.showInfo());





