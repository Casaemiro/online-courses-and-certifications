// //CodeWars
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
// Examples

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// Help
// Symbol 	Value
// I 	1
// IV 	4
// V 	5
// X 	10
// L 	50
// C 	100
// D 	500
// M 	1000

//Steps
//__________________________________________________________________________________________________________________________

class Numerals {


    fromRoman (num) {

        let romanArr = {
            "MMM": 3000,"MM": 2000,"M": 1000,"CM": 900,"DCCC": 800,"DCC": 700,"DC": 600,"D": 500,"CD": 400,"CCC": 300,"CC": 200,"C": 100,"XC": 90,"LXXX": 80,"LXX": 70,"LX": 60,"L": 50,"XL": 40,"XXX": 30,"XX": 20,"X": 10,"IX": 9,"VIII": 8,"VII": 7,"VI": 6,"V": 5,"IV": 4,"III": 3,"II": 2,"I": 1,
            }
        let roman = num.split("");
        let tempArr = [];
        let romanNumber;
        for(let i in romanArr){
            
            if(num.slice(0,i.length) == i){
                tempArr.push(romanArr[i]);
                roman.splice(0,i.length)//
                num = roman.join("")
                console.log(romanArr[i]);
                console.log(tempArr);
            }
            
        }
        romanNumber = tempArr.reduce((sum,elem)=>+sum + +elem)
        console.log(romanNumber)
        return +romanNumber;
       }


       toRoman(num) {

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
}


    const RomanNumerals = new Numerals()
