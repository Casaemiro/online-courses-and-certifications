// //Code Wars// Simple pig latin  5 kyu
// //_______________________________________________________________________________________

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//STEPS
//1.) seperate given string into seperate words of valid symbols
//2.) seperate each word to an array of characters and move the first element to the end.
//3.) Add "ay" to the array of characters
//4.) Join the array of characters and replace the coresponding words in the original text.
//____________________________________________________________________________________
function pigIt(str){
    let newStr2 = str.split(" ");
    let finalString;
    let ArrayOfWords = str.match(/[\w]+/g) //Matching different words in text
    for(let i = 0;i < ArrayOfWords.length;i++){
        let word = ArrayOfWords[i];
        let newWordArray = word.split("");//seperating each word into separate characters
        newWordArray.push(newWordArray[0], "ay")
        newWordArray.splice(0,1)//taking the first character to the end, adding "ay" and removing the first character
        let finalWord = newWordArray.join("")
        newStr2[i] = newStr2[i].replace(word,finalWord)
    }
    finalString = newStr2.join(" ")//joining words to form original text
    return finalString
  }


  //TESTS//_____________________________________________________________________________
  pigIt('Pig latin is cool !')//,'igPay atinlay siay oolcay'
  pigIt('This is my string') //,'hisTay siay ymay tringsay'