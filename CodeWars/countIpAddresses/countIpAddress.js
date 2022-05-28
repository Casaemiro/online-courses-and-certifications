// //codewars// 5 kyu
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
// Examples

// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

//steps


function ipsBetween(start, end){
    let startArrNumbers = start.match(/[0-9]+/g);
    let endArrNumbers = end.match(/[0-9]+/g);
    let differenceArr = []
    console.log(startArrNumbers)
    console.log(endArrNumbers)
    for(let i = 0; i < startArrNumbers.length; i++){
        // for(let j = startArrNumbers[i]; j < endArrNumbers[i]; j++){
           
        // }
        differenceArr.push(+endArrNumbers[i] - +startArrNumbers[i])
    }
    for(let i = 0; i < differenceArr.length; i++){

    }
    let last = differenceArr[3]
    let second = differenceArr[2] * 256
    let third = differenceArr[1] * 256 * 256
    let fourth = differenceArr[0] * 256* 256 * 256
    let final = last + second + third + fourth;
    console.log(differenceArr);
    console.log(final);
    return final
    //TODO
  }


//tests


      ipsBetween("150.0.0.0", "150.0.0.1")//, 1);
      ipsBetween("10.0.0.0", "10.0.0.50")//, 50);
      ipsBetween("20.0.0.10", "20.0.1.0")//, 246);
      ipsBetween("10.11.12.13", "10.11.13.0")//, 243);
    ipsBetween("160.0.0.0", "160.0.1.0")//, 256);
    ipsBetween("170.0.0.0", "170.1.0.0")//, 65536);
    ipsBetween("50.0.0.0", "50.1.1.1")//, 65793);
    ipsBetween("180.0.0.0", "181.0.0.0")//, 16777216);
    ipsBetween("1.2.3.4", "5.6.7.8")//, 67372036);
    ipsBetween("0.0.0.0", "255.255.255.255")//, 2 ** 32 - 1);