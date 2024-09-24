const morseCode = {
    'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..',  'E': '.',
    'F': '..-.', 'G': '--.',  'H': '....',  'I': '..',   'J': '.---',
    'K': '-.-',  'L': '.-..', 'M': '--',    'N': '-.',   'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',  'V': '...-',  'W': '.--',   'X': '-..-', 'Y': '-.--',
    'Z': '--..', 
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

const mnemonicToMorse = (word) => {
    if (!word) return '';
    return word.split('').map(char => {
        const upperChar = char.toUpperCase();
        return morseCode[upperChar] || '';
    }).join(' ');
};

const reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));

document.getElementById('convert').addEventListener('click', () => {
    const input = document.getElementById('inputText').value.trim();
    const conversionType = document.getElementById('conversionType').value;

    if (input) {
        let output = '';
        if (conversionType === 'morse') {
            output = mnemonicToMorse(input);
        } else if (conversionType === 'texto') {
            output = input.split(' ').map(code => reverseMorseCode[code] || '').join('');
            output = output.replace(/Á/g, 'A').replace(/É/g, 'E').replace(/Í/g, 'I').replace(/Ó/g, 'O').replace(/Ú/g, 'U');
        } else {
            alert('Por favor selecciona un tipo de conversión.');
            return;
        }

        document.getElementById('outputText').value = output;
        document.getElementById('outputContainer').classList.remove('hidden');
    } else {
        alert('Por favor, introduce texto o código Morse.');
    }
});
