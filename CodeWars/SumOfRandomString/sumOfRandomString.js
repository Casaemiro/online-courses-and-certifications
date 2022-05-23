// //Free Code Camp SUM OF RANDOM STRING CHALLENGES
// //________________________________________________________________________________________________

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

// Note:

//     Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
//     All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
//     If no number was given in the string, it should return 0

// Example:

// str = "In 2015, I want to know how much does iPhone 6+ cost?"

//STEPS
//1.) get seperate numbers from given string
//2.) return 0 if no number
//3.) Add numbers and return sum
//_________________________________________________________________________________________________


function sumFromString(str){
    let strRegexPeriod = str.match(/[0-9]+/g);
    if(strRegexPeriod == null){
        return 0;
    }
    console.log(strRegexPeriod);
    let sum = strRegexPeriod.reduce((sum, num) => +sum + +num)
    console.log(sum);
    //console.log(typeof(strRegexPeriod[0]))
    return +sum;
  }



//TESTS

sumFromString("In 2015, I want  to know how much does iPhone 6+ cost?");
sumFromString("1+1=2")// == 4
sumFromString("e=mc^2") //== 2)