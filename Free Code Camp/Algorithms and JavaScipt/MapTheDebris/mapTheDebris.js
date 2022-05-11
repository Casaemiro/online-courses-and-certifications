// //Free Code Camp   MAP THE DEBRIS CHALLENGES//
// //_______________________________________________________________________________________________


// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


//STEPS
//__________________________________________________________________________________________________

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    finalArr = [];
    let a
    for(let i = 0;i < arr.length; i++){

        let a = earthRadius + arr[i]["avgAlt"]
        let orbitalP = Math.round((2*Math.PI)*(Math.sqrt(((a*a*a)/GM))))
        let tempObj = {
            "name" : arr[i]["name"],
            "orbitalPeriod": orbitalP
        }
        finalArr.push(tempObj)
        console.log(arr[i]["avgAlt"])
        console.log(orbitalP)

    }
    console.log(finalArr)
    return finalArr;
  }
  

//TESTS
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);