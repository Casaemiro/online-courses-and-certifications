// //Code War // CAESER CIPHER
// //______________________________________________________________________________________________________
// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher
// Your task

// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
// Examples

// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.



//STEPS//

//1.) Create 2 arrays of uppercase and lowercase alphabets
//2.) ____________________________________________________________________________________________________

function encryptor(key, message) {
    let alphabetArrUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let alphabetArrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let finalArr =[];
    let splittedMessage = message.split("");
    console.log(splittedMessage)

    let newKey; //to store indec of each messsage character


    for(let i = 0; i<splittedMessage.length;i++){
        // console.log(alphabetArr.indexOf(splittedMessage[i]))
       
        if(alphabetArrUpper.indexOf(splittedMessage[i]) == -1 && alphabetArrLower.indexOf(splittedMessage[i]) == -1){
            finalArr.push(splittedMessage[i]);
        }else if(alphabetArrUpper.indexOf(splittedMessage[i]) != -1){
            // if(alphabetArr.indexOf(splittedMessage[i])<13){
            //     finalArr.push(alphabetArr[alphabetArr.indexOf(splittedMessage[i]) + 13])
            // }else(
            //     finalArr.push(alphabetArr[alphabetArr.indexOf(splittedMessage[i]) - 13])
            // ) 
            newKey = alphabetArrUpper.indexOf(splittedMessage[i]) + key
        while(newKey < 0){
            newKey = newKey + 26
        }
        while(newKey > 25){
            newKey = newKey - 26
        }
            finalArr.push(alphabetArrUpper[newKey])
        }else if(alphabetArrLower.indexOf(splittedMessage[i]) != -1){
            // if(alphabetArr.indexOf(splittedMessage[i])<13){
            //     finalArr.push(alphabetArr[alphabetArr.indexOf(splittedMessage[i]) + 13])
            // }else(
            //     finalArr.push(alphabetArr[alphabetArr.indexOf(splittedMessage[i]) - 13])
            // ) 
            newKey = alphabetArrLower.indexOf(splittedMessage[i]) + key
        while(newKey < 0){
            newKey = newKey + 26
        }
        while(newKey > 25){
            newKey = newKey - 26
        }
            finalArr.push(alphabetArrLower[newKey])
        }
    }
    let finalStr = finalArr.join("");
    console.log(finalStr)
    return finalStr;
  }


//TESTS//____________________________________________________________________________________________________
encryptor(1,"Caesar Cipher")