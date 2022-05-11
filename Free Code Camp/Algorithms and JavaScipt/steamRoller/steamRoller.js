//Free Code Camp STEAMROLLER Challenges
//________________________________________________________________________________________
// Flatten a nested array. You must account for varying levels of nesting.


//STEPS
//1.) For each element in the array, check if it is of type "object" or not
//2.) If it is an Object, loop through object and repeat step 1 else return entry
//________________________________________________________________________________________

function steamrollArray(arr) {
    console.log(arr)
    let finalArr = [];
   function Check(arr2){ 
    // console.log(arr2.map(elem => elem.length == undefined ? elem 
    //     : typeof(elem) == "object" ? Check(elem) 
    //     : typeof(elem)!="object"? console.log("wow" + elem) 
    //     : elem ))
        // return arr2.map(elem => elem.length == undefined ? elem 
        //     : typeof(elem) == "object" ? Check(elem) 
        //     : typeof(elem)!=="object"? elem 
        //     : elem )
       for(let i = 0;i < arr2.length;i++){
        if(arr2[i].length == undefined){
            finalArr.push(arr2[i]);
        }else if(arr2.length == 0){

        }else if(typeof(arr2[i]) == "object"){
            Check(arr2[i])
        }else{
            finalArr.push(arr2[i]);
        }
    }
}
Check(arr);
console.log(finalArr)
    return finalArr;
  }
  
//TESTS
 steamrollArray([1, [2], [3, [[4]]]]);
 steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]])// should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]])// should return [1, {}, 3, 4].