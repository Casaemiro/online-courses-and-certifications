// //codeWars

// A format for expressing an ordered list of integers is to use a comma separated list of either

//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


// Steps
//1.) for each element , check if the next element is an increment from it
//2.) if true, update the range. else add element to a precreated array an repeate step 1
//_____________________________________________________________________________________________

function solution(arr){
    console.log(arr)
    finalArr = [];
    let index = 0;
    finalArr.push([arr[0]])
    for(let i = 0 ; i < arr.length - 1;i++){
        
      if(arr[i + 1] - arr[i] == 1){
          finalArr[index].push(arr[i + 1])
      }else{
        finalArr.push([arr[i + 1]])
         index++
      }
    }
    let finalFinal = []
    for (let i = 0; i < finalArr.length; i++) {
        if(finalArr[i].length >=3){
            finalFinal.push(finalArr[i][0] + "-" + finalArr[i][finalArr[i].length - 1])
        }else{
            finalFinal.push(...finalArr[i])
        }
        
    }
    console.log(finalArr)
    console.log(finalFinal)
    return finalFinal.join(",");
}

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

exports.solution = solution();