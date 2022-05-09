// //Free Code Camp search and replace challenge
// //________________________________________________________________________________________________



// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing 
// it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

//__________________________________________________________________________________________________

function myReplace(str, before, after) {
    let newStr = str;
    let newBef = before;
    let newAft = after;
    let returnFinal;
    //console.log(newBef[0].toLowerCase())
    if(newBef[0] == newBef[0].toLowerCase()){
        console.log(1);
        let newLowerArr = newAft.split("");
        newLowerArr[0] = newLowerArr[0].toLowerCase();
        let final = newLowerArr.join("")
        returnFinal = newStr.replace(newBef,final)
    }else{
        console.log(2);
        let newUpperArr = newAft.split("");
        newUpperArr[0] = newUpperArr[0].toUpperCase();
        let final = newUpperArr.join("")
        returnFinal = newStr.replace(newBef,final)
    }

    console.log(returnFinal);
    return returnFinal;
  }
  
  myReplace("This has a Spellngi error", "Spellngi", "spelling");









//   let firstCharIndex = newStr.indexOf(before);
//   console.log(firstCharIndex);
//   //newStr.replace(newBef, newAft);
//   console.log(newBef[0]);

//   if(newBef[0] === newAft[0]){
//       returnFinal = newStr.replace(newBef, newAft);
//       console.log(1);

//   }else{
//       let newSarr = after.split("");
//       newSarr[0].toUpperCase();
//       let newSarrStr = newSarr.join("");
//       if(newBef[0] === newSarrStr[0]){
//           returnFinal = newStr.replace(newBef, newSarrStr)
//           console.log(1);

//       }else{
//           let wow = newAft.split("");
//           wow[0].toLowerCase();
//           let final = wow.join("");
//          // returnFinal = newStr.replace(newBef, final);
//           console.log(1);

//       }

//   }