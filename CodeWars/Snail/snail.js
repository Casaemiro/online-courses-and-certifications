//Codewars 4kyu
//__________________________________________________________________________________________________________________________
// Given an n x n array, return finalArray the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//_______________________________________________________________________________________________________________________



snail = function (array) {
    lengthOfArray = array[0].length
    let arrr = []
    for (let i = 0; i < array.length; i++) {
        arrr.push(...array)
        
    }
    let lengthOfTotalArray = arrr.length
    console.log(lengthOfTotalArray);
    let finalArray = []
    let startRow = 0;
    let lastElementIndex = lengthOfArray - 1;
    let lastRowIndex = array.length - 1;
    let rowVarry = 0;



    for (let i = startRow; i < array.length; i++) {
        if(lengthOfTotalArray == 1){
    console.log("finalArray")
    finalArray.push(...array[i])
    console.log(finalArray)

            return finalArray
        }
        console.log(i);
        console.log(array);
        
        if (i == 0) {
            finalArray.push(...array[i])
        }
        if (i > 0 && i < lastRowIndex) {
            finalArray.push(array[i][lastElementIndex])
            console.log(finalArray);
        }
        if (i == lastRowIndex) {
            finalArray.push(...array[i].reverse())
            if (finalArray.length == lengthOfTotalArray) {
    console.log("finalArray")
    console.log(finalArray)
                return finalArray
            }
            if(array[i].length > 1) {
                for (let j = lastRowIndex - 1; j > startRow; j--) {
                finalArray.push(array[j][0])
                console.log("array");
                console.log(finalArray);
                if (finalArray.length == lengthOfTotalArray) {
    console.log("finalArray")
    console.log(finalArray)
                    return finalArray
                }
            }
            }
            
            array.pop()
            array.shift()

            for (let j = 0; j < array.length; j++) {
                array[j].pop()
                array[j].shift()
                console.log(array);
                console.log(finalArray);
            }
            i = -1
            startRow = 0;

            lastElementIndex -= 2;
            lastRowIndex = array.length - 1;
            if (finalArray.length == lengthOfTotalArray) {
    console.log("finalArray")
    console.log(finalArray)
                return finalArray
            }
        }
        console.log(finalArray)
    }


    console.log(finalArray)
    console.log("finalArray")
}
// snail([[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]])
    snail([[]])
    //  snail([[1, 2, 3],
    //     [8, 9, 4],
    //     [8, 9, 4],
    //     [7, 6, 5]])