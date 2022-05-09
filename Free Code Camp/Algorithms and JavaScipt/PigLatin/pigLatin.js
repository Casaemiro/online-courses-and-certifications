//Free Code Camp Pig Latin exercise

//______________________________________________________________________________________________

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move 
// it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words 
// in all lowercase.
//______________________________________________________________________________________________

function translatePigLatin(str) {
    let regex = /^[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]+/i;
    let ifConsonant = "ay";
    let final;
    let ifVowel = "way";
    let finalStr;
    let newStr = str.split("");
    if(regex.test(newStr[0])){
        let regexResult = (str.match(regex))[0];
        console.log(str);
        console.log(regexResult);
        
        let newRegexResult = regexResult.split("");
        console.log(newStr);
        console.log(newRegexResult);
        let tocut = newRegexResult.length;
        newStr.splice(0,tocut)
        console.log(newStr)
        finalStr = newStr.join("");
        console.log(finalStr);
        final = (finalStr.concat(regexResult)).concat(ifConsonant)
        console.log(final)
        // for(let i=0;i<newRegexResult.length;i++){
        //     if()
        // }
    }else{
        final = str.concat(ifVowel);
        console.log(final);
    }
    return final;
  }
  
  translatePigLatin("consonant");
  translatePigLatin("onsonant");