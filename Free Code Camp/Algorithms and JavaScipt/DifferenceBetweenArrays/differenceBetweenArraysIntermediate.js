// Free Cde Camp Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

//__________________________________________________________________________________________

//1.) Get elements in arr1 not in arr2 and keep
//2.) Get elements in arr2 not in arr1 and combine with those from arr1.


function diffArray(arr1, arr2) {
    const newArr = [];
    let max = Math.max(arr1.length,arr2.length);
    let min = Math.min(arr1.length,arr2.length);

// if(max == arr2.length){
    for(let i=0; i<arr2.length ; i++){
        if (arr1.includes(arr2[i])){
            console.log(i+1);
        }else{
            newArr.push(arr2[i]);
        }
    }
// }else{
    for(let i=0; i<arr1.length ; i++){
        if (arr2.includes(arr1[i])){
            console.log(i+1);
        }else{
            newArr.push(arr1[i]);
        }
    }
// }
console.log(newArr);
  
    
    
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

  // console.log(Math.max(2,2))