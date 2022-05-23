// //CodeWars// pete the baker // 5 kyu
// //____________________________________________________________________________________

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

//STEPS//_________________________________________________________________________________________
//1.) search if all ingredients in the recipe are available
//2.) if any isn't, return 0;
//3.) else devide all the total quantities of the needed ingreedients by the  quantity needed in the recipe
//4.) get the smallest quotient and round down.


function cakes(recipe, available) {
    let finalArr = []
    for (ingre in recipe) {//checking if all ingredients needed are available
        if(available.hasOwnProperty(ingre)){
            console.log(ingre + " is present")
            finalArr.push(Math.floor(available[ingre]/recipe[ingre]))//step 3
        }else{
            return 0;
        }
    }
    let min = Math.min(...finalArr) // getting smallest number
    console.log(min)
    return min
  }



//TESTS

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 