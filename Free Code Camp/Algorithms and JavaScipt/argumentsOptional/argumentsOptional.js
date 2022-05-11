// //Free Code Camp "ARGUMENTS OPTIONAL CHALLENGE"
// //_______________________________________________________________________________________________



// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

//STEPS
//___________________________________________________________________________________________________

function addTogether(...a) { 
    if(typeof(a[0]) == 'string'){
        console.log("wow")
        return undefined;
    }
   if(a.length > 1){
   
       if(typeof a[0] == "string" || typeof a[1] == "string" ){
           return undefined
       }else{
        console.log(a[0] + a[1])
           return +a[0] + +a[1];
       }
   }else{
       return function(b){
        if(typeof a == "string" || typeof b == "string" ){
            return undefined
        }else{
            console.log(+a + +b)
            return +a + +b;
        }
       }
   }
    
  }
  
  

//TESTS
addTogether(5)(7);