// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
//_______________________________________________________________________________________________________________________


function disemvowel(str) {
    //Declaring global variables
    str
    let finalStr;
    let splicedStrFront;
    let splicedStrEnd;
    let vowelList = "AEIOU";
    let vowelList2 = /[aeiou]/i;
    let newVowelList = vowelList.split(""); //creating array of characters to remove
    console.log(newVowelList);
    let newStr = str.split(""); //Creating array of characters from original string to prevent side effects.
    console.log(newStr);

    //_______________________________________________________________________________________________________________

    //We loop through each character in our text and compare each of them to all the characters 
    //in our "characters to remove"(VOWELS; A, E, I, O, U) array.
    //if any element matches we remove them using a series of splice comands.
    //

    //_______________________________________________________________________________________________________________

    for(let i=0;i<newStr.length;i++){
        //console.log(newStr);
        for(let j=0;j<newVowelList.length;j++){
           //________________________________________________________________________________________________________
            // console.log(newStr);
           //Before comparing the character, it is first of all converted to uppercase because characters to be 
           //matched (VOWELS) where stored in Caps.
           //________________________________________________________________________________________________________
            if(typeof(newStr[i]) == "string"){
                if (newStr[i].toUpperCase() == newVowelList[j]){
                    if (i == 0){
                        splicedStrFront = newStr.splice(0,1);
                    }else{
                        splicedStrFront = newStr.splice(0,i);
                    }
                        
                    splicedStrEnd = newStr.splice(1);
                    newStr = splicedStrFront.concat(splicedStrEnd);
                    console.log(newStr);
                    i--;
                }
            }
        }
            
    }
    finalStr = newStr.join("");
    //console.log(typeof("e"));
    console.log(finalStr);
    return finalStr;
  }


//Tests


  disemvowel("auAeZYBaywMme HnIOzAKnP cyxlDN QAxDXb BDU etk");
  //disemvowel("s aa oof");