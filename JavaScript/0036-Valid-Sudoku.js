// https://leetcode.com/problems/valid-sudoku/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function(board)
{
    return checkRows(board) && checkCols(board) && checkSquares(board);
}

function checkRows(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let row = arr[i].join("").replace(/[.]/g, "").split("");
        if(new Set(row).size != row.length)
        {
            return false;
        }
    }

    return true;
}

function checkCols(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let col = arr.map(function(value,index){return value[i];}).join("").replace(/[.]/g, "").split("");
        if(new Set(col).size != col.length)
        {
            return false;
        }
    }

    return true;
}

function checkSquares(arr)
{
    let grp_1 = [arr[0][0], arr[0][1],arr[0][2], arr[1][0], arr[1][1], arr[1][2], arr[2][0], arr[2][1], arr[2][2]].join("").replace(/[.]/g, "").split("");
    let grp_2 = [arr[0][3], arr[0][4],arr[0][5], arr[1][3], arr[1][4], arr[1][5], arr[2][3], arr[2][4], arr[2][5]].join("").replace(/[.]/g, "").split("");
    let grp_3 = [arr[0][6], arr[0][7],arr[0][8], arr[1][6], arr[1][7], arr[1][8], arr[2][6], arr[2][7], arr[2][8]].join("").replace(/[.]/g, "").split("");
    let grp_4 = [arr[3][0], arr[3][1],arr[3][2], arr[4][0], arr[4][1], arr[4][2], arr[5][0], arr[5][1], arr[5][2]].join("").replace(/[.]/g, "").split("");
    let grp_5 = [arr[3][3], arr[3][4],arr[3][5], arr[4][3], arr[4][4], arr[4][5], arr[5][3], arr[5][4], arr[5][5]].join("").replace(/[.]/g, "").split("");
    let grp_6 = [arr[3][6], arr[3][7],arr[3][8], arr[4][6], arr[4][7], arr[4][8], arr[5][6], arr[5][7], arr[5][8]].join("").replace(/[.]/g, "").split("");
    let grp_7 = [arr[6][0], arr[6][1],arr[6][2], arr[7][0], arr[7][1], arr[7][2], arr[8][0], arr[8][1], arr[8][2]].join("").replace(/[.]/g, "").split("");
    let grp_8 = [arr[6][3], arr[6][4],arr[6][5], arr[7][3], arr[7][4], arr[7][5], arr[8][3], arr[8][4], arr[8][5]].join("").replace(/[.]/g, "").split("");
    let grp_9 = [arr[6][6], arr[6][7],arr[6][8], arr[7][6], arr[7][7], arr[7][8], arr[8][6], arr[8][7], arr[8][8]].join("").replace(/[.]/g, "").split("");

    if(new Set(grp_1).size != grp_1.length || new Set(grp_2).size != grp_2.length || new Set(grp_3).size != grp_3.length ||
       new Set(grp_4).size != grp_4.length || new Set(grp_5).size != grp_5.length || new Set(grp_6).size != grp_6.length ||
       new Set(grp_7).size != grp_7.length || new Set(grp_8).size != grp_8.length || new Set(grp_9).size != grp_9.length)
    {
        return false;
    }
    else
    {
        return true;
    }
}