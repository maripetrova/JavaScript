function triangle(n) {
    let startStar = "*";
    let plusStar = "**";
    let result = "";
    for ( let i = 0; i < n; i++) {
        let space = "";
        for (let j = 1; j < n - i; j++) {
            space += " ";
        }
    if (!i) {
        result += startStar;
    } else {
        result += plusStar;
    }
    console.log(space + result);
}
}
/* 
  *
 ***
*****

*/
triangle(15);



