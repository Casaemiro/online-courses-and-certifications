// //Wherefore art thou

//____________________________________________________________________________________________________

// Make a function that looks through an array of objects (first argument) and returns an array of 
// all objects that have matching name and value pairs (second argument). Each name and value pair
//  of the source object has to be present in the object from the collection if it is to be included
//   in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio",
//  last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
//  then you must return the third object from the array (the first argument), because it contains the 
//  name and its value, that was passed on as the second argument.

//____________________________________________________________________________________________________

function whatIsInAName(collection, source) {
  const arr = [];
let newCollection = collection;
let sourceKeys = Object.keys(source);
    console.log(sourceKeys);
    console.log(newCollection)
    for(let i=0;i<sourceKeys.length;i++){
      for(let j=0;j<newCollection.length;j++){
          if(newCollection[j].hasOwnProperty(sourceKeys[i])){
            if(source[sourceKeys[i]] == newCollection[j][sourceKeys[i]]){
            // console.log(source[sourceKeys[i]])
            // console.log(newCollection[j][sourceKeys[i]])
            //console.log("wow " + (j+1))
          }else{
            newCollection.splice(j,1)
            console.log(newCollection)
            j--;
          }
        }else{
          newCollection.splice(j,1)
          j--;
        }
      }
    }
          console.log("\n\n")

    console.log(newCollection)
  return newCollection;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
  
  //TESTS
  //_____________________________________________________________________________________________________________________________________________
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt"}], {first: "Mercutio"});