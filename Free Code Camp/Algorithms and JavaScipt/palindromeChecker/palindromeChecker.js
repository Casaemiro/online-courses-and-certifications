// //Free Code Camp  Palondrome Checker
// //_________________________________________________________________________
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2

//STEPS
//_________________________________________________________________________

function palindrome(str) {
    let regex = /[A-Za-z0-9]/g;
    let matchedStr = str.match(regex).join("").toLowerCase();
    let reversedStr = [...matchedStr].reverse().join("").toLowerCase();
    console.log(matchedStr)
    console.log(reversedStr)
    if(matchedStr == reversedStr){
        return true
    }else{
        return false
    }
  }
  


//TESTS
palindrome("e,ye");
palindrome("_eye") //should return true.
palindrome("0_0 (: /-\ :) 0-0") //should return true.