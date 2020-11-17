//Типы данных: Number, Boolean, String

// let a;
// console.log(a+c);
// null
// let age = 16;

// let access = age >= 18 ? "yes" : "no";
// console.log(access);


/* Условные выражения (условия) */
let $ = 50;
// if ( $ < 100 ) console.log("Выживем!")
// if ( $ ) console.log("Выживем!")
if ( $ > 50 ) {
    $ -= 50; 
    console.log($);
} else {
    console.log(`Бедный доллар - стоит ${$}`);
}

let cash = 500;
if (cash >= 20000000) {
    console.log("Ура! Я буду без денег, но с Lambirghini")
} else if (cash >= 25000) {
    console.log("Я стану бременским музыкантом!");

} else {
    console.log("Мечт нет, копим дальше!");
}

let age = 59;
if (age <=17) {
    console.log("Вам еще рано работать");
} else if (age >=18 && age <=59) {
    console.log("Вам еще работать и работать");
} else if (age >59) {
    console.log("Вам пора на пенсию");
} 








