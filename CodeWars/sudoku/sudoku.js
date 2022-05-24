// //Code WArs// SUDOKU kyu

// Sudoku Background

// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)
// Sudoku Solution Validator

// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
// Examples

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

//Steps//_____________________________________________________________________________

function validSolution(board){
    // let flatArray = board.flat()
    // console.log(board.flat())
    // if(flatArray.includes(0)){
    //     console.log("false1")
    //     return false
    // }

    for(let i = 0; i < board.length; i++){
        if(board[i].includes(0)){
            console.log("false1")
            return false
        }
        if(board[i].includes(1) &&board[i].includes(2) &&board[i].includes(3) && board[i].includes(4) && board[i].includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9)){

        }else{
            console.log("false2")
            return false;
        }
        let rowArray = [board[0][i],board[1][i],board[2][i],board[3][i],board[4][i],board[5][i],board[6][i],board[7][i],board[8][i]]
        if(rowArray.includes(1) && rowArray.includes(2) && rowArray.includes(3) && rowArray.includes(4) && rowArray.includes(5) && rowArray.includes(6) && rowArray.includes(7) && rowArray.includes(8) && rowArray.includes(9)){

        }else{
            console.log("false3")
            return false;
        }
    }
    for(let i = 3; i <= 9; i+=3){
        for(let j = 3; j <= 9; j+=3){
           let sumOfSubGrid = board[i - 3][j - 3] + board[i - 3][j - 2] + board[i - 3][j - 1] + board[i - 2][j - 3] + board[i - 2][j - 2] + board[i - 2][j - 1] + board[i - 1][j - 3] + board[i - 1][j - 2] + board[i - 1][j - 1];
           if(sumOfSubGrid != 45){
            console.log("false4 " + sumOfSubGrid)
            console.log(i + " " + j)
               return false;
           }
        }
    }
    console.log("true")
    return true
  }



//TESTS//_______________________________________________________________________________

validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])//, true);
    
// validSolution([
//      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//      [6, 7, 2, 1, 9, 0, 3, 4, 8],
//      [1, 0, 0, 3, 4, 2, 5, 6, 0],
//      [8, 5, 9, 7, 6, 1, 0, 2, 0],
//      [4, 2, 6, 8, 5, 3, 7, 9, 1],
//      [7, 1, 3, 9, 2, 4, 8, 5, 6],
//      [9, 0, 1, 5, 3, 7, 2, 1, 4],
//      [2, 8, 7, 4, 1, 9, 6, 3, 5],
//      [3, 0, 0, 4, 8, 1, 1, 7, 9]])//, false)