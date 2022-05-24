// //COdeWEars   //valid pparanthesis// 5kyu

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

//steps//_____________________________________________________________________________
//1.) Count the nubmer of entries in the
//2.) if the number of entries is odd then fails
//3.) begin from the left middle index and match itim to that on index n + 1 where n is the index of the opening parannthese and increment the index by two on each iteration.


//_____________________________________________________________________________________

function validParentheses(parens) {
    let arrayOfParens = parens.split("");
    let j = 0;
    let parenthesesLength = parens.length;
    if(parenthesesLength % 2 != 0){
        console.log('false1')
        return false
    }else if(parenthesesLength == 0){
        console.log(true)
        return true
    }else if(parens.match(/[(]/g).length > parenthesesLength/2){
        console.log('false2')
        return false
    }else if(parens.match(/[)]/g).length > parenthesesLength/2){
        console.log('false2')
        return false
    }else if(parens.match(/[(]/g).length != parens.match(/[)]/g).length){
        console.log('false2')
        return false
    }else if(parenthesesLength != parens.match(/[()]/g).length){
        console.log('false2')
        return false
    }else if(parenthesesLength % 2 == 0){
        
       for(let i = 0; i < arrayOfParens.length; i++){
           for(let j = 1; j < arrayOfParens.length; j++){
               if(arrayOfParens[i] == ")"){
                console.log('false3')
                   return false
               }else if(arrayOfParens.length == 0){
                console.log('true3')
                   return true
               }else if(arrayOfParens[i] == "(" && arrayOfParens[j] == ")"){
                arrayOfParens.splice(arrayOfParens.indexOf(")"),1);
                arrayOfParens.splice(0,1);
                i--;
                j--;
                break
           }
       } if(arrayOfParens.length == 0){
        console.log('true3')
           return true
       }
   
    }
    
  }
}
  //TESTS//________________________________________________________________________________

    validParentheses( "(" )//, false)
    validParentheses( ")" )//, false);
    validParentheses( "" )//, true));
    validParentheses( "()" )//, true));
    validParentheses("())") // false));