// //Code Wars // Perimeter of squares in a rectangle// 5kyu
// //_______________________________________________________________________________________________
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text
// Hint:

// See Fibonacci sequence
// Ref:

// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

//Steps
//1.)  should return
//2.) should return
//3.) 
//_________________________________________________________________________________________________________________________________

function perimeter(n) {
    let fibNumberSet = [1]
    let perim = 0
    for(let i = 1; i <= n; i++) {
        if(i == 1){
            fibNumberSet.push(1)
        }else{
            fibNumberSet.push(fibNumberSet[i - 2] + fibNumberSet[i - 1])
        }
    }
    fibNumberSet.map(elem => perim += 4 * elem)
    console.log(perim)
    return perim
}

//TESTS//___________________________________________________________________________________________________________________________

    perimeter(0)//, 4)
    perimeter(5)//, 80)
    perimeter(7)//, 216)
    perimeter(20)//, 114624)
    perimeter(30)//, 14098308)