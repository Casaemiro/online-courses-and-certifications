
//Free code Camp sum excercize

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of 
// all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 
// (both inclusive) is 10.

//____________________________________________________________________________________________

function sumAll(arr) {
    let sum = 0;
    let finalArr = [...arr];
    let n = Math.min(...finalArr);
    let m = Math.max(...finalArr);
    
    console.log(finalArr);
    Math.max(...arr)
    while(n <= m){
        sum += n;
        n++;
    }
    console.log(sum);
     return sum;
   }
   
   sumAll([1, 4]);