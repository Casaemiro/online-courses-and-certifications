// //Free Code Camp SORTED UNION
// //___________________________________________________________________________________________________
// Write a function that takes two or more arrays and returns a new array of unique values in the 
// order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be
//  sorted in numerical order.

// Check the assertion tests for examples

//______________________________________________________________________________________________________

function uniteUnique(...arr) {
    let finalArr = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(finalArr.includes(arr[i][j])){

            }else{
                finalArr.push(arr[i][j]);
            }
        }
    }
    console.log(finalArr)
    return finalArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);