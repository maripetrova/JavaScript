/*
Создать класс Tree
Дерево растет(возраст увеличивается)
Каждый год дерево производит n фруктов
У дерева есть конечный возраст 
Дерево начинает плодоносить с какого-то возраста
У дерева есть фрукты и их цена за кг
Сколько фруктов (шт / кг / цена) производит дерево каждый год
*/
function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
class Fruit {
    constructor(d) {
    this.diameter = d;
    this.weight = +(this.diameter * 12).toFixed(2);
    }
}
class fruitTree {
    constructor(fa,da, na, cost, maxCnt = 800, minCnt = 100) {
        this.age = 0;
        this.fruitAge = fa;
        this.deadAge = da;
        this.fruits = [];
        this.fruitCnt = {
            max: maxCnt,
            min: minCnt
        };
        this.name = na;
        this.cost = cost;
    }
// Каждый год дерево растет   
growUp() {
    this.age++;
} 
getFruits() {
   if (this.age >= this.fruitAge && this.age < this.deadAge) {
       let cnt = getNumber(this.fruitCnt.max, this.fruitCnt.min);
       while(cnt) {
           let fr = new Fruit(+getNumber(10,4).toFixed(2));
           this.fruits.push(fr);
           cnt--;
       }
     }
  }
showStat() {
    let weight = 0;
    for(let i = 0; i < this.fruits.length; i++) {
          weight += this.fruits[i].weight;
      }
    
    weight = +(weight / 1000).toFixed(3);
    return `За год было произведено ${this.fruits.length} фруктов весом ${weight} кг. Общая цена ${(weight * this.cost).toFixed(2)} рублей`; 
    }
setYear() {
    this.fruits = [];
    this.growUp()
    this.getFruits();
    console.log(this.showStat());
    }
}
let tree = new fruitTree(4,20, "Fruit", 80);
for(let year = 0; year < 30; year++) {
    tree.setYear();
}


















