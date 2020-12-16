let abc = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const changeLetter = (char, key = 3, index = abs.indexOf(char)) => {
    if (index !== -1) {
        let deff = index + key;
        if (deff >= 0 && deff < abc.length) {
            return abc[deff];
        } else if (deff < 0) {
            return changeLetter(char, 0, abc.length + deff);
        } else {
            return changeLetter(char, 0, abc.length - deff);
        }
    } else {
        return char;
    }
}

const getN = (ma = 11, mi = 0) => Math.floor(Math.random() * (ma - mi) + mi);


let newWord = "Привет, Николя!";

let newWord = "", key = getN(-50, 50);
const cipher = (phrase, key = getN()) => {
for (let i = 0; i < phrase.length; i++) {
    newWord += changeLetter(phrase[i], key);
    }
    return newWord;
}


console.log(cipher(word));



