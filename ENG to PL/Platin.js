
const phrase = process.argv.slice(2).join(' ');


function toPigLatin(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word[0].toLowerCase())) {
        return word + 'way';
    } else if (!vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    } else {
        return word.slice(1) + word[0] + 'ay';
    }
}

const pigLatinPhrase = phrase.split(' ').map(toPigLatin).join(' ');


console.log(pigLatinPhrase);
