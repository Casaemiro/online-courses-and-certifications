// //Code Wars // maximum subarray 5kyu
// //_____________________________________________________________________________________________
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
//steps//________________________________________________________________________________________________________________________________
//1.) 

var maxSequence = function(arr){
    let finalSum = 0;
    
    let trackValues = []
    if(arr.length == 0){
        console.log(finalSum)
        return finalSum
    }
    if(arr.every(element => {element < 0})){
        console.log(finalSum)
        return finalSum;
    }
    for(let i = 0; i < arr.length; i++){
        let sumTracker = 0;
        for(let j = i; j < arr.length; j++){
            sumTracker += arr[j]
            if(sumTracker > finalSum){
                finalSum = sumTracker
            }else{

            }
        }
        
    }
    console.log(finalSum)
    return finalSum;
  }

//TESTS//___________________________________________________________________________________________

maxSequence([])//, 0);
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])//, 6);