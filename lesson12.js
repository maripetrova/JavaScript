/*
Мария - управляющая Кофейни StarCoffe
Цикорий: 120 / 0,3       39 - 100г
Американо: 120 / 0,2      зерна - 580 / 500г
Латте: 300 / 0,5          молоко 85 / л
Чай: 120 / 0,3            пачка 345 / 100шт
Аренда помещения - 380 000 / мес
Кофемашина - 299 000
Ежедневное посещение людей от 10 до 150

*/
let bill = 0;
let rent = 380000;
let months = 12;
let menu = {
    zikoriy: {
        price: 120,
        v: 0.3,
        order: +((15 * 39) / 100).toFixed(2)
    },
    americano: {
        price: 120,
        v: 0.2,
        order: +((7 * 580) / 500).toFixed(2)
    },
    latte: {
        price: 300,
        v: 0.5,
        order: +((7 * 580) / 500).toFixed(2) + +((300 * 85) / 950).toFixed(2)
    },
    tea: {
        price: 120,
        v: 0.3,
        order: +(345 / 100).toFixed(2)
    }
}
function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
let order = ["zikoriy", "americano", "latte", "tea"];
function getOrder() {
    // order.length длинна массива orderа = 4
   let  product = order[getNumber(order.length)];
   bill -= menu[product].order;
   bill += menu[product].price;
   //console.log(`Купили чашку ${product}`);
   let chance = getNumber(3);
   if (chance >= 2) {
       bill = getOrder(bill);
   }
   return bill;
}
bill -= 299000;
while (months) {
    bill -= rent;
    for(let i = 0; i < 29; i++) {
       let ppl = getNumber(151,10);
        for ( let j = 0; j < ppl; j++ ) {
           bill = getOrder(bill);
       }
       console.log(`Сегодня в кафе побывало ${ppl} человек\nСумма на счету: ${bill} рублей.`)
    }
    months--;
}





