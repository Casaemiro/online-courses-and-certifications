// //Free Code Camp MISSING LETTERS
// //____________________________________________________________________________________________________


// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

//_______________________________________________________________________________________________________

function fearNotLetter(str) {
    let strlength = str.length;
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let firstLetter = str[0];
    let alphabetIndex = alphabet.indexOf(firstLetter);
    for(let i=0;i<strlength;i++){
        
        console.log(alphabetIndex); 
        if(str[i] == alphabet[alphabetIndex]){
            alphabetIndex++;
            console.log(alphabetIndex);
        }else{
            console.log(alphabet[alphabetIndex]);
            return alphabet[alphabetIndex];
        }
    }
    return undefined;
  }
  
  fearNotLetter("abce");
