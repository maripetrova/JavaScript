let now = new Date();
//console.log(now);

let someDay = new Date(1239028493240932); // число - милисикунды, прошедшие с 1 января 1970 года
//console.log(someDay);

let start = new Date(0);
//console.log(start);

//console.log(now.getTime()); // получит ms
//console.log(now.getDay()); // номер дня недели
let daysOfWeek = now.getDay();
switch (daysOfWeek) {
    case 0: daysOfWeek = "Воскресенье"; break;
    case 1: daysOfWeek = "Понедельник"; break;
    case 2: daysOfWeek = "Вторник"; break;
    case 3: daysOfWeek = "Среда"; break;
    case 4: daysOfWeek = "Четверг"; break;
    case 5: daysOfWeek = "Пятница"; break;
    case 6: daysOfWeek = "Суббота"; break;
    default: daysOfWeek = "Несуществующий день"
}
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"] // now.getMonth() - месяца начинаются с 0
//console.log(`Сегодня - ${daysOfWeek}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} года`)

//let birthday = new Date("2020-09-02T10:00:25")
let wtf = new Date(2020, 5, 45, 78, 100); //Задание даты min - 2 параметры, max
// год, месяц, день, часы, минуты, секунды, милисекунды
//console.log(wtf);
//console.log(`Сегодня - ${wtf}, ${wtf.getDate()} ${months[wtf.getMonth()]} ${wtf.getFullYear()} года`)

/*
Сколько дней, часов и минут осталось до Нового года?!
*/
function getReduceTime(day) {
let newYear = new Date(2021,0).getTime();
let countdown = Math.abs(now.getTime() - newYear);
let days, hours, minutes, seconds;

seconds = Math.floor(countdown / 1000);
minutes = Math.floor(seconds / 60);
seconds = seconds - minutes * 60;
hours = Math.floor(minutes / 60);
minutes = minutes - hours * 60;
days = Math.floor(hours / 24);
hours = hours - days * 24;

console.log(`До Нового года осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`)
}


setInterval(function() {
    getReduceTime(new Date(2021,0))
}, 1000)


