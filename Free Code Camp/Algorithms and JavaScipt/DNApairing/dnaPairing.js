// //Free Code Camp DNA PairingProject

// //_________________________________________________________________________________________________


// The DNA strand is missing the pairing element. Take each character, get its pair, and return the
//  results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one 
// encapsulating array.

//____________________________________________________________________________________________________

function pairElement(str) {
    let finalArr = [];
    let newStr = str.split("");
    for(let i=0;i<newStr.length;i++){
        if(newStr[i] == "A"){
            finalArr.push(["A","T"])
        } else if(newStr[i] == "T"){
            finalArr.push(["T","A"])
        }else if(newStr[i] == "C"){
            finalArr.push(["C","G"])
        }else if(newStr[i] == "G"){
            finalArr.push(["G","C"])
        }
    }
    console.log(finalArr);
    return finalArr;
  }
  
  pairElement("GCG");