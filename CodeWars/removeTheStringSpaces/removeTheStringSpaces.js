//CodeWars 8kkyu
// Simple, remove the spaces from the string, then return the resultant string.

///Steps
//1.) remove spaces from the front and back
//2.) split sentence at spaces
//3.) Join at no spaces


function noSpace(x){
let newX = x.trim();
let finalX = newX.split(" ").join("");
return finalX;
}

module.exports = noSpace