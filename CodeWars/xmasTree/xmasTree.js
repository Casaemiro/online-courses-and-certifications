// //Code Wars //XMAS TREE
// //_________________________________________________________________________________________________________
// Complete the function that returns a christmas tree of the given height. The height is passed through to the function and the function should return a list containing each line of the tree.

// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
// XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']

// Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.
// Examples

// The final idea is for the tree to look like this if you decide to print each element of the list:

// n = 5 will result in:

// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1      
// ____#____        2 - Trunk/Stem of Tree

// n = 3 will result in:

// __#__                  1
// _###_                  2
// #####          ----->  3 - Height of Tree
// __#__           1
// __#__           2 - Trunk/Stem of Tree

//STEPS//____________________________________________________________________________________________________
//1.) get xmas tree width by (n * 2) - 1   //where n is the given dept of type number
//2.) add # and '_'s to an empty list to form the stem such that the '#' is surrounded by '_'s
//    the number of '_' on each side is gotten by (n - 1) //where n is the given dept of type number
//3.) repeat step 2
//4.) add ((n * 2) - 1) '#'s to the list
//5.) repeat step  4 (n - 1) more times but each time droping the number of '#' by 2 and adding the number of '_' by 2.
//___________________________________________________________________________________________________________

function xMasTree(n){
    let hash = "#";
    let underscore = "_";
    let finalArr = [];
    let temp = (n * 2) - 1;
    tmpN = temp;
    finalArr.unshift(underscore.repeat(n - 1).concat("#").concat(underscore.repeat(n - 1)))
    finalArr.unshift(underscore.repeat(n - 1).concat("#").concat(underscore.repeat(n - 1)))
    while(tmpN > 0){
        finalArr.unshift(underscore.repeat((temp - tmpN) / 2).concat(hash.repeat(tmpN)).concat(underscore.repeat((temp - tmpN) / 2)));
        tmpN -= 2;
    }
    //complete this code
    console.log(finalArr)
    return finalArr;
 }


//TESTS//____________________________________________________________________________________________________
xMasTree(5);