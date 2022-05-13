// //Code Wars// Two to one
// //__________________________________________________________________________________________________________

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//STEPS//____________________________________________________________________________________________________
//

function longest(s1, s2) {
   return [...new Set(s1.concat(s2).split(""))].sort().join("");
  }


//TESTS//____________________________________________________________________________________________________

console.log(longest("aretheyhere", "yestheyarehere"))//aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))//, "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions")//, "acefghilmnoprstuy")