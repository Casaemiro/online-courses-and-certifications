// // //Code Wars // morse Code// 

// Breif

// You've just recieved a high priority transmission from the front lines but wait, what's this? It's in morse code! You'll need to decode this before you pass it on to the commander, and I guess he'll probably want to send a reply!

// In order to complete this mission (Kata) you'll need to write a function to translate the encoded message into plain text and vice versa.
// Background

// In Morse Code each letter of the alphabet is replaced by a series of dots . and / or dashes -, each letter is separated by a space and each word is separated by a /.

// For example the letter k is represented by -.- and the phrase I am would be represented as .. / - ---
// Specifics

// The encode method should be case insensitive and the decode will always decode to lower case. We are only interested in converting letters. If given a null or empty string both methods should simply return the input.
// Morse Code Reference
// Letter 	Code
// a 	".-"
// b 	"-..."
// c 	"-.-."
// d 	"-.."
// e 	"."
// f 	"..-."
// g 	"--."
// h 	"...."
// i 	".."
// j 	".---"
// k 	"-.-"
// l 	".-.."
// m 	"--"
// n 	"-."
// o 	"---"
// p 	".--."
// q 	"--.-"
// r 	".-."
// s 	"..."
// t 	"-"
// u 	"..-"
// v 	"...-"
// w 	".--"
// x 	"-..-"
// y 	"-.--"
// z 	"--.."


//Steps//____________________________________________________________________________________________________________________

let morseCodeLookUpTable = {
    a :	".-",
    b :	"-...",
    c :	"-.-.",
    d :	"-..",
    e :	".",
    f :	"..-.",
    g :	"--.",
    h :	"....",
    i :	"..",
    j :	".---",
    k :	"-.-",
    l :	".-..",
    m :	"--",
    n :	"-.",
    o :	"---",
    p :	".--.",
    q :	"--.-",
    r :	".-.",
    s :	"...",
    t :	"-",
    u :	"..-",
    v :	"...-",
    w :	".--",
    x :	"-..-",
    y :	"-.--",
    z :	"--.."
}
let letterMorseLookUpTable = {
    ".-" :'a',
    "-..." :'b',
    "-.-." :'c',
    "-..": "d",
    "." : "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p", 
    "--.-":"q", 
    ".-.":"r", 
    "...":"s", 
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    " " : "/"
}


function encode(message){
    if(!Boolean(message)){
        return message
    }
    if(message == " "){
        return "/"
    }
    // let newMessage = message.trim()
    let lowerCaseMessage = message.toLowerCase();
    let arrayOfLowerCaseMessageWords = lowerCaseMessage.split(" "); //separate message into an array of Words
    let encodedMessageArray = []; //initializes an array which will be used to store the encoded message
    //_______________________________________________________________________________________________________
    for(let i = 0; i < arrayOfLowerCaseMessageWords.length; i++){
        let arrayOfLowerCaseArrayLetters = arrayOfLowerCaseMessageWords[i].split(""); //
        for(let j = 0; j < arrayOfLowerCaseArrayLetters.length; j++){
            encodedMessageArray.push(morseCodeLookUpTable[arrayOfLowerCaseArrayLetters[j]])
            encodedMessageArray.push(" ")
        }
        encodedMessageArray.push("/ ")
    }
    encodedMessageArray.pop();
    encodedMessageArray.pop();
    console.log(encodedMessageArray.join(""))
    return encodedMessageArray.join("");
}

function decode(codedMessage){
    if(!Boolean(codedMessage)){
        return codedMessage
    }
    // let trimedCodedeMessage = codedMessage.trim();
    let arrayOfCodedMessageWords = codedMessage.split("/"); //separate message into an array of Words
    let decodedMessageArray = []; //initializes an array which will be used to store the encoded message
    //_______________________________________________________________________________________________________
    for(let i = 0; i < arrayOfCodedMessageWords.length; i++){
        let arrayOfCodedArrayLetters = arrayOfCodedMessageWords[i].trim().split(" "); //
        for(let j = 0; j < arrayOfCodedArrayLetters.length; j++){

            decodedMessageArray.push(letterMorseLookUpTable[arrayOfCodedArrayLetters[j]])
            
        }
            decodedMessageArray.push(" ");
    }
    decodedMessageArray.pop()
    console.log(decodedMessageArray.join(""))
    return decodedMessageArray.join("");
}


//TESTS//____________________________________________________________________________________________________________________

encode('.. --.- --- -- -. .... -.- .-. -..- .-. .-- ..-. -.- .... / --.- -.- -.-- - ..-. . --. --.. ... --. ...- .- .... -.-. --- / --- .--. ... ')//, 
     // ".. / -.-. .- -. / .-- .-. .. - . / .. -. / -- --- .-. ... . / -.-. --- -.. .",