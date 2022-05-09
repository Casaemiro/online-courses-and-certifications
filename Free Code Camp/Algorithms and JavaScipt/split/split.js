//Free Code Camp excercise on the split function 
// Use the split method inside the splitify function to split str into an array of words. The
//  function should return the array. Note that the words are not always separated by spaces, 
//  and the array should not 
// contain punctuation.
//_________________________________________________________________________________________________

function splitify(str) {
    // Only change code below this line
  let newStr = str;
  
    newStr = str.split(/\W+/);
    console.log(newStr);
    return newStr
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");