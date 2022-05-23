// //CodeWars// DOES MY NUMBER LOOK BIG IN THIS//  6kyu
// //_______________________________________________________________________________________________________________
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
//STEPS
//_______________________________________________________________________________________________________________________________
//1.) get number of digits in the given numbers
//2.) seperate the given number into an array of digits
//3.) loop through the array and for each number raise it to the power of (number of digits in the given numbers)
//4.) sum all the numbers after raising to the power and compare to the original number
//5.) if there is a match then the number is Narcissistic number.


function narcissistic(value) {
    let valueLength = value.toString().length
    let valueArray = value.toString().match(/[\d]/g)
    let sum = (valueArray.map(x => x**valueLength).reduce((sm,elm) =>  sm += elm))
    if(sum === value){
        return true
    }else{
        return false
    }
  }
  


//TESTS
narcissistic( 371 )//, true, "371 is narcissistic" 