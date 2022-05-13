// // CODE WARS // multiples of 3 or 5
// //________________________________________________________________________________________________

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

//STEPS//______________________________________________________________________________________________
//1.) return 0 if input is negative
//2.) get multiples of 3 less than given number
//3.) get multiples of 5 which are not multiples of 3 and which are less than given number.
//4.) combine the multiples into a single set and sum them
//5.) return sum as a number

function solution(number){
  let multThree = []
  let multFive = []
  let combinedArr;
  let sum;
  if(number < 0){
      return 0;
  }
  for(let i = 3; i < number ; i++){
    if(i % 3 == 0){
        multThree.push(i)
    }else if(i % 5 == 0){
        multFive.push(i)
    }
  }
 
  combinedArr = multThree.concat(multFive);
   if(combinedArr.length == 0){
      return 0
  }
  sum = combinedArr.reduce((add,elem) => +add + +elem)
  console.log(sum)
  return +sum;
}

//TESTS//______________________________________________________________________________________________
solution(10)