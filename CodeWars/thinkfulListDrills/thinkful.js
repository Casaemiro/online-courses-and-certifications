// //CodesWarsChallenge THINKFUL >> 8kyu
// //______________________________________________________________________________________________

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7

// Do not modify the input list.


//STEPS
//1.) Assume first element is the longestWord
//2.) loop through given set and if any element is longer than longestWord, set new longestWord to length of element
//_________________________________________________________________________________________________

function longest(words) {
    let newWords = [...words];
    let longestWord = newWords[0].length;
    newWords.map(elem =>{   //looping through words and comparing thier lengths
        if(elem.length > longestWord){
            longestWord = elem.length;
        }
    })
    console.log(longestWord);//prints longest word length.
    return longestWord; 
  }


//TESTS

longest(['simple', 'is', 'better', 'than', 'complex'])//, 7);
longest(['explicit', 'is', 'better', 'than', 'implicit'])//, 8);
longest(['beautiful', 'is', 'better', 'than', 'ugly'])//, 9)