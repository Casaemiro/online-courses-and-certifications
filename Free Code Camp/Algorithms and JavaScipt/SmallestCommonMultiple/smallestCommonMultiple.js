// //Free Code Camp challenge | SmallestCommonMultiple
// //__________________________________________________________________________________________________


// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. The answer here would be 6.


//STEPS
//1.) get multiples of first number
//2.) get multiples of second number
//3.) return the smallest number that appears in both sets.
//______________________________________________________________________________________________

function smallestCommonslocal(arr1,arr2) {
    let tempLC;
    let obvious = arr1 * arr2;
    let ObviousCommonFactor1 = []
    let ObviousCommonFactor2 = []

    for(let i = 1; i<=obvious; i++){
        ObviousCommonFactor1.push(arr1 * i)
        if(ObviousCommonFactor1[i] > obvious){
            break
        }
    }
    for(let i = 1; i<=obvious; i++){
        ObviousCommonFactor2.push(arr2 * i)
        if(ObviousCommonFactor2[i] > obvious){
            break
        }
    }

    for(let i = 0; i<ObviousCommonFactor1.length;i++){
        if(ObviousCommonFactor2.includes(ObviousCommonFactor1[i])){
            return ObviousCommonFactor1[i];
        }
    }
    return tempLC;
  }
function smallestCommons(arr) {
    let max = Math.max(arr[0],arr[1])
    let min = Math.min(arr[0],arr[1])
    let between = []
    var tempLC;
    for(let i = min+1; i<max;i++){
        between.push(i);
    }
    let obvious = arr[0] * arr[1];
    let ObviousCommonFactor1 = []
    let ObviousCommonFactor2 = []
    for(let i = 1; i<=obvious; i++){
        ObviousCommonFactor1.push(arr[0] * i)
        if(ObviousCommonFactor1[i] > obvious){
            break
        }
    }
    for(let i = 1; i<=obvious; i++){
        ObviousCommonFactor2.push(arr[1] * i)
        if(ObviousCommonFactor2[i] > obvious){
            break
        }
    }

    for(let i = 0; i<ObviousCommonFactor1.length;i++){
        if(ObviousCommonFactor2.includes(ObviousCommonFactor1[i])){
            tempLC = ObviousCommonFactor1[i];
        }
    }
    for(let i = 0;i<between.length;i++){
        tempLC = smallestCommonslocal(between[i],tempLC);
    }
    console.log(ObviousCommonFactor1)
    console.log(ObviousCommonFactor2)
    console.log(between)
    console.log(tempLC)

  }
  
  smallestCommons([23, 18]);