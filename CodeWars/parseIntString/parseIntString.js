// //Code Wars// 4kyu

// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:
  
//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Additional Notes:

//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
//     All tested numbers are valid, you don't need to validate them



//steps
//
//
//
//
//__________________________________________________________________________________________

function parseInt(string) {
  let numberDictionary = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90,
    "hundred": 100,
    "thousand": 1000,
    "million":1000000
  }
  let stringArr = string.replace(/\s+and/,"").split(/[\s-]/);
  console.log(stringArr)
  
  
  let amount = 0;
  console.log(stringArr)
  if(stringArr.length == 5){
    stringArr = string.split(/\s+and\s+/)
   return parseInt(stringArr[0]) + parseInt(stringArr[1]);
  }
  if(stringArr.length == 6){
    return parseInt(stringArr[0] + " " + stringArr[1]) + parseInt(stringArr[2] + " " + stringArr[3]) + parseInt(stringArr[4] + " " + stringArr[5]);
  }
  if(stringArr.length == 7){
    return parseInt(stringArr[0] + " " + stringArr[1] + " " + stringArr[2]) + parseInt(stringArr[3] + " " + stringArr[4] + " " + stringArr[5] + " " + stringArr[6]);
  }
  if(stringArr.length == 8){
    return parseInt(stringArr[0] + " " + stringArr[1] + " " + stringArr[2] + " " + stringArr[3] + " " + stringArr[4]) + parseInt(stringArr[5] + " " + stringArr[6] + " " + stringArr[7]);
  }
  if(stringArr.length == 9){
    return parseInt(stringArr[0] + " " + stringArr[1] + " " + stringArr[2] + " " + stringArr[3] + " " + stringArr[4]) + parseInt(stringArr[5] + " " + stringArr[6] + " " + stringArr[7] + " " + stringArr[8]);
  }
  for(let i = 0; i<stringArr.length; i++) {
    let numberreturn = numberDictionary[stringArr[i]]
    if(numberreturn == 100 || numberreturn == 1000 || numberreturn == 1000000){
      amount *= numberreturn;
    }else{
      amount += numberreturn;
    }
  }
  console.log(amount)
    return amount;
  }
  module.exports = parseInt;

//Tests
parseInt("twenty-two thousand two hundred and fifty-five");