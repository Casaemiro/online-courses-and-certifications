// // Code Wars //SUM of INTERGERS IN STRING
// //________________________________________________________________________________________________________

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

//STEPS//____________________________________________________________________________________________________


function sumOfIntegersInString(s){
    let strRegexPeriod = s.match(/[0-9]+/g);
    if(strRegexPeriod == null){
        return 0;
    }
    console.log(strRegexPeriod);
    let sum = strRegexPeriod.reduce((sum, num) => +sum + +num)
    console.log(sum);
    return +sum// what the function name says
  }

//TESTS//____________________________________________________________________________________________________
