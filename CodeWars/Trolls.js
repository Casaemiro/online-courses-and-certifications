// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
//_______________________________________________________________________________________________________________________

//STEPS
//____________________________________________________
//1.) set list of chacters to remove
//2.)Get text to disemvowel
//3.)loop through the text character after character and compare each character with the list of characters to remove
//4.)if there is a match, remove character and continue

function disemvowel(str) {
   
    let vowel = "AEIOU";   //01.) Set valid vowels
    let splicedStrFront;
    let splicedStrEnd;
    let final;
    let finalT;
//    console.log(vowel.indexOf("A"));
let newStr = str.split("");
for(let i=0;i<newStr.length;i++){
    if((newStr[i].toUpperCase() == "A" || newStr[i].toUpperCase() == "E" || newStr[i].toUpperCase() == "I" || newStr[i].toUpperCase() == "O" || newStr[i].toUpperCase() == "U") && typeof(newStr[i]) == "string"){
        // console.log(newStr[i]);
        if (i == 0){
            final = newStr.splice(1);
            console.log(final);
            newStr = final;
            console.log(newStr);
        }else{
            splicedStrFront = newStr.splice(0,i);
            splicedStrEnd = newStr.splice(1);
            newStr = splicedStrFront.concat(splicedStrEnd);
        }
            i--;
        
    }
}
console.log(newStr);
finalT = newStr.join("");
console.log(finalT);
return finalT;
  }


//Tests
disemvowel("auAeZYBaywMme HnIOzAKnP cyxlDN QAxDXb BDU etk");