
let n = 40;
let s = "10";
let name = " Хорошего человека" ///РП
let fruit = "бананов"
console.log(n + s); ///20
let str = "y" + name + " было " + n + " " + fruit;
str = `y ${name} было ${n+1} ${fruit}`;
console.log(str);
console.log("B" + "a" + + "a" + "a");


/*
Boolean Логический тип данных
true = правда - 1
false = ложь - 0

Операторы для Boolean
>
<
>=
<=
=
!=(не равно)
==(сравнение)
===(строгое сравнение)
*/
console.log(7 > 4); /// true
console.log(4 == 4); /// true
console.log("4" == 4); ///true
console.log("a" <= "A"); /// false
console.log("4" === 4); /// false
console.log(+"4" == 4); /// true
/*
Логические операторы
! - НЕ - Логическое отрицание
!true => false
!0 => 1
!1 => 0
|| - ИЛИ - логическое сложение 
&& - И - логическое умножение 

*/
let a = true; /// есть зонт
let b = false /// не идет дождь
let result = a || b; /// пойду гулять
console.log(result);



