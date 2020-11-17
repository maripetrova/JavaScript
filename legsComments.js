let n = 4; s = 6;
let rightFoot = ['.oooO ', '(   ) ', ' \\ (  ', '  \\_) ']; leftFoot = ['Oooo. ', '(   ) ', ' ) /  ', '(_/   ']; space = '      '; 
let foots = ''; isItRight=false; r = 2; l = 0;
// в первой строке можно поменять n и s

for (i=0 ; i<2 ; i++) {
    foots += (rightFoot[i] + space).repeat(n) + '\n' // тут пишутся первые 2 строки (т.е. пыльцы и 2 скобки)
}

if (s%2==1) {
    s=(s-1)*2; isItRight=true
} else { 
    s=s*2-2
    } // тут через математику определяется сколько строк (соответственно и лап) будет писаться и на какой лапе будет оканчиваться
for (i=0 ; i<s ; i++) {
    if (r==4) {
        r=0
    }
    if (l==4) {
        l=0
    }
    foots += (rightFoot[r] + leftFoot[l]).repeat(n) + '\n' // а тут они пишутся
    r++
    l++
}

for (i=2 ; i<4 ; i++) {
    if (isItRight==true) { // тут условие если окончание на правой лапе (определение на 10 строке)
        foots += (rightFoot[i] + space).repeat(n) + '\n' // тут пишутся последние 2 строки, т.е. пятка
    } else {
        foots += (space + leftFoot[i]).repeat(n) + '\n' // тут пишутся последние 2 строки, т.е. пятка
    }
}

console.log(foots);