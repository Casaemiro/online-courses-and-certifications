// // Free Code Camp exercise ###SUM ALL ODD FIBBONACCI NUMBERS 
// //_____________________________________________________________________________________________________



// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the 
// sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 
// 1, 1, 3, and 5.

//________________________________________________________________________________________________________

//STEPS

//1.) Create and store set of Fibonacci numbers following given rules
//2.) Sum all Fib numbers less than specified number


function sumFibs(num) {
    let fibArr = [];
    let fibSum = 0;
    for(let i=0;i<num;i++){
      if(i<2){
        fibArr.push(1);
        fibSum += 1;
      }else{
          let tempSum = fibArr[i-2] + fibArr[i-1];
          fibArr.push(tempSum);
          if(((tempSum % 2) != 0) && tempSum <= num){
              fibSum += tempSum;
          }
      }
    }
    console.log(fibSum);
    return fibSum;
  }
  

    //TESTS
    //______________________________________________________________________________________________________________
  
    sumFibs(10)
    sumFibs(1) // return a number.

    sumFibs(1000) // return 1785.

    sumFibs(4000000) // return 4613732.

    sumFibs(4) // return 5.

    sumFibs(75024) // return 60696.

    sumFibs(75025) // return 135721.