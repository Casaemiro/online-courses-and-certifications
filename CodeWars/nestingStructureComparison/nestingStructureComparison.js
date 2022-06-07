// //CodeWars 4kyu
// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
// Steps

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    // console.log(this.flat().length)
    // console.log(other.flat().length)
    if(this.length != other.length){
        return false
    }else{
        for (let i = 0; i < this.length; i++) {
            if(typeof(this[i]) == typeof(other[i])){
                if(this[i].length != other[i].length){
                    return false
                }else{
                    if(isArray(this[i])){
                        if(typeof(this[i][0]) == typeof(other[i][0])){

                    }else{
                        return false
                    }
                    }
                }
            }else{
                return false
            }
            
        }
        for (let i = 0; i < other.length; i++) {
            if(typeof(other[i]) == typeof(this[i])){
                if(other[i].length != this[i].length){
                    return false
                }else{
                    if(isArray(other[i])){
                        if(typeof(other[i][0]) == typeof(this[i][0])){

                    }else{
                        return false
                    }
                    }
                    
                }
            }else{
                return false
            }
            
        }
    }
    for(let i=0;i< other.length; i++){
        console.log(this[i])
        if(typeof(other[i]) != typeof(this[i])){
            return false
        }
    }
    return true
};


console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// should return true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// should return false
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));     

// [1,'[',']'] same as ['[',']',1]
