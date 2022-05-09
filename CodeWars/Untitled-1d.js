function bingo(a) {
  
    let aSet = [... new Set(a)]
    // your winning code here
    let s = [2, 7, 9, 14, 15];
    // c is a boolean counter
    let c = 0;
    for(i = 0; i < aSet.length; i++) {
      // checking
      if (s.includes(aSet[i])){c++;}
    }
    return c == 5 ? "WIN" : "LOSE";
  }



// TEST
  
let arrayWithTenElements = [1,2,3,4,5,6,7,8,9,10]

  
console.log(bingo(arrayWithTenElements))