
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

function encryptChar(char, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (alphabet.includes(char)) {
        let newIndex = (alphabet.indexOf(char) + shift) % 26;
        if (newIndex < 0) newIndex += 26;
        let newChar = alphabet[newIndex];
        return isUpperCase ? newChar.toUpperCase() : newChar;
    }
    return char;
}


function encryptPhrase(phrase, shift) {
    return phrase.split('').map(char => encryptChar(char, shift)).join('');
}


const encryptedPhrase = encryptPhrase(phrase, shift);
console.log(encryptedPhrase);
