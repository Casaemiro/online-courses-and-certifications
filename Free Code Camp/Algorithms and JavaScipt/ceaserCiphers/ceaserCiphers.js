// //Free Code Camp CEASER CIPHERS
// //_______________________________________________________________________________________________



// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//STEPS
//___________________________________________________________________________________________________

function rot13(str) {
    let alphabetArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let finalArr =[];
    let newStr = str.split("");
    for(let i = 0; i<newStr.length;i++){
        // console.log(alphabetArr.indexOf(newStr[i]))
        if(alphabetArr.indexOf(newStr[i]) == -1){
            finalArr.push(newStr[i]);
        }else{
            if(alphabetArr.indexOf(newStr[i])<13){
                finalArr.push(alphabetArr[alphabetArr.indexOf(newStr[i]) + 13])
            }else(
                finalArr.push(alphabetArr[alphabetArr.indexOf(newStr[i]) - 13])
            )
        }
    }
    let finalStr = finalArr.join("");
    console.log(finalStr)
    return finalStr;
  }

//TESTS

rot13("SERR PBQR! PNZC");