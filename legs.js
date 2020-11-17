let n = 7; s = 7;
let rightFoot = ['.oooO ', '(   ) ', ' \\ (  ', '  \\_) ']; leftFoot = ['Oooo. ', '(   ) ', ' ) /  ', '(_/   ']; space = '      '; 
let foots = ''; isItRight = false; r = 2; l = 0;
for (i = 0;  i < 2; i++) {
    foots += (rightFoot[i] + space).repeat(n) + '\n'
}
if (s % 2 == 1) {
    s = ( s - 1 ) * 2; isItRight = true
} else { 
    s = s * 2 - 2
    } 
for (i = 0; i < s; i++) {
    if (r == 4) {
        r = 0
    }
    if (l == 4) {
        l = 0
    }
    foots += (rightFoot[r] + leftFoot[l]).repeat(n) + '\n'
    r++
    l++
}
for (i = 2; i < 4; i++) {
    if (isItRight == true) { 
        foots += (rightFoot[i] + space).repeat(n) + '\n'
    } else {
        foots += (space + leftFoot[i]).repeat(n) + '\n' 
    }
}
console.log(foots);