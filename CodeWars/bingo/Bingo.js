// BINGO game challenge
// For this game of BINGO, you will receive a single array of 10 
// numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//__________________________________________________________________________________________________________________
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).
//  Write a function where you will win the game if your numbers can spell "BINGO". They 
//  do not need to be in the right order in the input array). Otherwise you will lose. Your outputs 
//  should be "WIN" or "LOSE" respectively.
//_____________________________________________________________________________________________________________________



function bingo(a) {
    var bingo = "BINGO";
    //Create an array of letters on the word BINGO
    var bingo2 = bingo.split("");
    console.log(bingo2);
    var num = 0;
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    console.log(letters);
    let newLetterArray = [];
    for (let n = 0;n<a.length;n++){
        newLetterArray.push(letters[a[n]-1]);
    }
    console.log("Array of equivalent letters is : ");
    console.log(newLetterArray);
    for(let i = 0;i<bingo2.length;i++){
        //num ++;
        for(let j=0;j<newLetterArray.length;j++){
            if(bingo2[i] == newLetterArray[j]){
                
                num ++;
                break;
                //console.log(num);

            }
        }

        // if(newLetterArray.indexOf(bingo.charAt(i))){

        // }else{
        //     return "LOSE";
        // }
    }
    console.log(num);
    if(num >= bingo.length){
        console.log("Nunber of matches found is : " + num);
        return "WIN";
    }else{
        console.log("Nunber of matches found is : " + num);
        return "LOSE";
    }
  }

  console.log(bingo([2,2,2,2,2,2,2,2,2,2,2,2,2]));