const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    
    
    var str = new String(str);
    str = '';
    let inf = expr.split("**********");
  for (i = 0; i < inf.length; i++) {
    var it_Num = inf[i].length / 10;
    var arr = [];
    var pos = 0;
    for (j = 0; j < it_Num; j++) {
      var buf = inf[i].substr(pos, 10);
      buf = buf.replace(/00/gi, "");
      buf = buf.replace(/10/gi, ".");
      buf = buf.replace(/11/gi, "-");
      pos += 10;
      arr[j] = buf;
    }
    for (k = 0; k < arr.length; k++) {
      str += MORSE_TABLE[arr[k]];
    }
    str += " ";
  }
  str = str.replace(/\s$/, "");
  return str;
}

module.exports = {
    decode
}