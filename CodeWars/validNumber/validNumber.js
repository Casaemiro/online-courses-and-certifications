// //Code Was //Valid NUMBER TO 2 DECIMAL PLACES
// //_________________________________________________________________________________________________________

// Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

// Please check the criteria for a valid number:

// optional + or - symbol in front

// optional digits before a decimal point (digits are characters ranging from '0' to '9')

// a decimal point

// exactly two digits after the point

// nothing else

// Examples of valid and non-valid numbers

// List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

// List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]

//STEPS//____________________________________________________________________________________________________


function validNumber(num){
    console.log(num)
    if(typeof(+num) != "number"){
        console.log(false)
        return false;
    }
    let numArr = num.match(/[.]\d+[-]*/g);
    let numArr2 = num.match(/[A-Za-z]/g);
    let decimalPtArr = num.match(/[.]/g);
    if(numArr == null){
        console.log(false)
        return false;
    }
    if((numArr[0].length == 3) && decimalPtArr.length == 1 && numArr2 == null){
        console.log(true)
        return true;
    }else{
        console.log(false)
        return false
   }
  }


//TESTS//____________________________________________________________________________________________________

validNumber("w.00")