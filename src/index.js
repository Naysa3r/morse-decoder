const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrCodeLetters = []; // Array of code letters of the encoded phrase
    let arrKeyLetters = [] // Array of key letters of the encoded phrase
    let resultString = '';

    for (let i = 0; i < expr.length; i += 10) {
        arrCodeLetters.push(expr.slice(i, i + 10));
    }
    
    arrKeyLetters = arrCodeLetters.map(value => {
        if (value === '**********') return ' ';
        let buffer = '';
        for (i = 0; i < value.length; i += 2) {
            if (value[i] === '1' && value[i + 1] === '1') {
            buffer += '-';
            } else if (value[i] === '1' && value[i + 1] === '0') {
                buffer += '.';
            }
        }
        return buffer;
    });

    arrKeyLetters.forEach(element => {
        return (element !== ' ') ? resultString += MORSE_TABLE[element] : resultString += element;
    });
    return resultString;
}

module.exports = {
    decode
}