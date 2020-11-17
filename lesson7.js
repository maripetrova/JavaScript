// /*
// while - цикл
// */
// let apples = 5;
// let people = 15;
// while (apples < people) {
//     console.log("Не хватает яблок! Купим еще.")
//     apples = apples + 1;
// }
// console.log("Все получили по одному яблоку!")

/*
Есть девочка Клава. Ей random лет (от 0 до 18)
Клаве каждый день рождения папа дарит на 10$ больше, чем в прошлом году. Папа обеспечавает подарками Клаву до 18 лет! Сколько накопит клава за свои дни рождения до 18 лет?

*/
let age , present = 0 , piggy = 0 , oldment = 18;
age = Math.floor(Math.random()*18);
console.log("Папа решил спонсировать Клаву, когда ей было " + age + " лет.") // Конкатенация
while(age < oldment) {
present +=10;
piggy += present;
age++;
console.log(`Клаве исполнилось ${age} лет!\nПапа подарил Клаве ${present}$ \nТеперь у Клавы есть ${piggy}$.\n`)

}
console.log(`За всю папину щедрость Клава смогла накопить ${piggy}$.`);









