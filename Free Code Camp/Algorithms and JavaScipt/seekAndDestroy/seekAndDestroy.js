//Free Code Camp Seek and Destroy


// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the
//  same value as these arguments.

// Note: You have to use the arguments object.


//______________________________________________________________________________________________________
function destroyer(arr, ...Arr) {
    for(let i = 0;i<Arr.length;i++){
      for(let j=0;j<arr.length;j++){
  
        if(Arr[i] == arr[j]){
          let n = arr.indexOf(Arr[i]);
          arr.splice(n,1);
          j--;
        }
  
      }
      // if(arr.includes(Arr[i])){
      //   let n = arr.indexOf(Arr[i]);
      //   arr.splice(n,1);
      //   console.log(arr)
      // }
    }
    console.log(arr);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);