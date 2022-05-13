// //Free Code Camp ROMAN NUMERAL CONVERTER
// //_____________________________________________________________________________

function convertToRoman(num) {

    let romanArr = {
        "MMM": 3000,"MM": 2000,"M": 1000,"CM": 900,"DCCC": 800,"DCC": 700,"DC": 600,"D": 500,"CD": 400,"CCC": 300,"CC": 200,"C": 100,"XC": 90,"LXXX": 80,"LXX": 70,"LX": 60,"L": 50,"XL": 40,"XXX": 30,"XX": 20,"X": 10,"IX": 9,"VIII": 8,"VII": 7,"VI": 6,"V": 5,"IV": 4,"III": 3,"II": 2,"I": 1,
        }
    let tempNum = num;
    let tempArr = [];
    let romanNumber;
    for(let i in romanArr){
        
        if(tempNum >= romanArr[i]){
            tempArr.push(i);
            tempNum = tempNum - romanArr[i]
            console.log(romanArr[i]);
            console.log(tempArr);
        }
        
    }
    romanNumber = tempArr.join("")
    console.log(romanNumber)
    return romanNumber;
   }
   
   convertToRoman(3234);

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
