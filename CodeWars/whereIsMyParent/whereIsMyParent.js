// //CodeWars WHERE IS MY PARENT 6 KYU
// //______________________________________________________________________________________________________

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb"

//STEPS
//1.) Create an List of letters in alphabetical order
//2.) LOOP through letterArr and for each element compare with all characters in given string.
//3.) if match is found add the letter to array holding final string.
//_________________________________________________________________________________________________________

function findChildren(dancingBrigade) {
    //Initialize and assign variables
    //_______________________________________________________________________________________________________
    let letterArr = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]
    let dancingBrigadeArr = dancingBrigade.split("")
    let sortedDancingBrigadeArr = dancingBrigadeArr.sort()
    let finalDancingBrigadeArr = []
    //LOOP through letterArr and for each element compare with all characters in given string.
    //if match is found add the letter to finalDancingBrigadeArr
    for(let i = 0; i<letterArr.length;i++){
        for(let j = 0;j < sortedDancingBrigadeArr.length; j++){
            if(letterArr[i] == sortedDancingBrigadeArr[j]){
                finalDancingBrigadeArr.push(sortedDancingBrigadeArr[j])
            }
        }
    }
    //Combine array entries to form a single string.
    let finalDancingBrigade = finalDancingBrigadeArr.join("");
    console.log(sortedDancingBrigadeArr);
    console.log(finalDancingBrigadeArr);
    console.log(finalDancingBrigade);

	return finalDancingBrigade;
}

//TESTS

findChildren("AbaBCccddD");