// Классы
//  let a = {
//      x: 20,
//      y: 10,
//      moveTo: function(newX, newY) {
//          this.x = newX;
//          this.y = newY;
//      }
//  }
//  let b = {
//     x: 15,
//     y: 23,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }
// let c = {
//     x: -20,
//     y: 1,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }
// console.log(a.x, a.y);
// a.moveTo(10, 5);
// console.log(a.x, a.y);

// Создание прототипа объекта (типа класса, но на JS)

function Point(x, y) {
this.x = x;
this.y = y;
}
Point.prototype.moveTo = function(newX, newY) {
    this.x = newX;
    this.y = newY;  
}
Point.prototype.toString = function() {
    return `Точка (${this.x}; ${this.y})`;
}
let n = 4; // new Number (4); Number() => Object() => Global
let word = "Hello!"; // new String("Hello!");

let A = new Point(12, 20);
let B = new Point(2, 8);
A.moveTo(10, 10);
console.log(A.toString());
console.log(B.toString());

/*
Фруктовый сад
Дано 1 дерево(яблоня)
Яблоня каждый год дает 200 яблок
tree = {
    name: "Яблоня",
    fruits: [{d:6, w:70, deffect:false}, {d:4, w:50, deffect:true}, ...] //200
}
1) Создать класс с фруктом
Фрукт имеет диаметр от 4см до 10см
Фрукт имеет вес 4см - 50г, 10см - 120г (посчитать в зависимости от диаметра)
Фрукт может иметь деффект (20%) true
2) Напилнить яблоню массивом фруктов в зависимости от их параметров
*/