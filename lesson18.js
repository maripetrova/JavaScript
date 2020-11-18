/*


*/
function Fruit(d, f) {
this.diameter = d;
this.weight = +(this.diameter * 12).toFixed(2);
this.deffect = f;
}
let tree = {
    name: "Яблоня",
    fruitCnt: 200,
    fruits: [

    ],
    showStat: function(cost) {
        let weight = 0;
        let cnt = 0;
        for(let i = 0; i < this.fruitCnt; i++) {
          if(!this.fruits[i].deffect) {
              weight += this.fruits[i].weight;
              cnt++;
          }
        }
        weight = +(weight / 1000).toFixed(3);
        return `Можно продать ${cnt} яблок весом ${weight} кг за ${(weight * cost).toFixed(2)} рублей`; 
    },
    getFruits: function() {
        const getNumber = function(max = 11, min = 0) {
            return Math.random()* (max-min) + min;
        }
        let percent = 20;
        let perArr = [];
        let n = 0;
        while(n < 100) {
            if (n < percent) {
           perArr.push(true);
         } else {
            perArr.push(false);
         }
         n++;
        }
        for (let i = 0; i < this.fruitCnt; i++) {
            let fr = new Fruit(+getNumber(10,4).toFixed(2), perArr[Math.floor(getNumber(perArr.length))]);
            this.fruits.push(fr);
        }
    }
}
tree.getFruits();
console.log(tree.fruits);
console.log(tree.showStat(87));








