// // Free Code Camp .every() excercise
// Use the some method inside the checkPositive function to check if any element in arr is
//  positive. The function should return a Boolean value.

//______________________________________________________________________________________________

function checkPositive(arr) {
    // Only change code below this line
    let newArray = arr;
    return newArray.some(element => element > 0);
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);