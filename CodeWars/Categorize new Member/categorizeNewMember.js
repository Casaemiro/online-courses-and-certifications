// //## Code Wars Challenge  Categorize New Member
// //____________________________________________________________________________________________________
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your 
// help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet 
// club, handicaps range from -2 to +26; the better the player the lower the handicap.
// ##Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.
// ##Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether
//  the respective member is to be placed in the senior or open category.
// ##Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//_______________________________________________________________________________________________________



//STEPS
//1.) get input dataset of information pairs.
//2.) Ensure each element in the given pairs is numerical.
//3.) for each pair, if age(first value) is greater than 55years and handicap(second value) greater than 7 then classify as "Senior" else "Open"
//4.) return list of categories in order.

//STEPS
//1.) for each pair, if age is greater than 55years and handicap greater than 7 then classify as "Senior" else "Open"
//2.) return list of categories in order.


//EXTRA PRECAUTION
//1.) Age cannot be less than 0
//2.) handicap must be between -2 and +26
//3.) 55 years is included to be a senior (>=55 years)




//Solution
//___________________________________________________________________________________________________





function openOrSenior(data){
    // ...
    //declare variables
    let category = [];
    let input = [...data]; //copy array in new variable to avoid side effect.
    console.log(input);
    // Validate input types
    // input = input.map(
    //   function(pair){
    //     if(typeof(pair[0]) != "number" || typeof(pair[1]) != "number"){
    //       return "Wrong input" 
    //     }});
       
    // Peform Check, categorize and add category to category array

    // Method one
    // for(let i=0;i<input.length;i++){
    //   if(input[i][0] >= 55 && input[i][1] > 7){
    //                 category.push("Senior")
    //               }else{
    //                 category.push("Open")
    //               }
    // }
    //Method Two
   input = input.map(function(elem){ if(elem[0] >= 55 && elem[1] > 7){category.push("Senior");}else{ category.push("Open");}} );
  // input = input.map(function(elem){ 
  //       if(elem[0] >= 55 && elem[1]>7){
  //             category.push("Senior");
  //           }else{
  //             category.push("Open");
  //           }}
  //           );
     console.log(category);
          return category;
  }


  //TESTS
  //_________________________________________________________________________________________________
  openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]); //[ 'Open', 'Open', 'Senior', 'Open', 'Open', 'Senior' ]
  openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])  //,['Open', 'Open', 'Open', 'Open'])
  openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])   //,['Senior', 'Open', 'Open', 'Open'])