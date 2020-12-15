let abc = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const changeLetter = (char, key) => {
    let index = abc.indexOf(char);
    if (index !== -1) {
        let deff = index + key;
        if (deff >= 0 && deff < abc.length) {
            return abc[deff];
        } else if (deff < 0) {
            return abc[abc.length + deff];
        } else {
            return abc[deff - abc.length];
        }
    } else {
        return char;
    }
}

const getN = (ma = 11, mi = 0) => Math.floor(Math.random() * (ma - mi) + mi);

let newWord = "", key = getN(-50, 50);
}
console.log(newWord);


const cipher = (phrase, key = getN()) => {
let newWord = "Привет, Николя!";
for (let i = 0; i < phrase.length; i++) {
    newWord += changeLetter(phrase[i], key);
    }
    return newWord;
}


console.log(cipher(word));



