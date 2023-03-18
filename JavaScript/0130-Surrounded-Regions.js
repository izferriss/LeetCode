// https://leetcode.com/problems/surrounded-regions/

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

let solve = function(board)
{
    let r = board.length;
    if(r == 0){return [];}
    let c = board[0].length;

    for(let i = 0; i < r; i++)
    {
        for(let j = 0; j < c; j++)
        {
            if(i == 0 || i == r - 1 || j == 0 || j == c - 1){util(board, i, j, r, c);}
        }
    }

    for(let i = 0; i < r; i++)
    {
        for(let j = 0; j < c; j++)
        {
            if(board[i][j] === "O"){board[i][j] = "X";}
            else if(board[i][j] === "@"){board[i][j] = "O";}
        }
    }

    return board;
}

function util(board, i, j, r, c)
{
    if(i < 0 || i > r - 1 || j < 0 || j > c - 1 || board[i][j] != "O"){return;}
    board[i][j] = "@";

    util(board, i + 1, j, r, c);
    util(board, i - 1, j, r, c);
    util(board, i, j - 1, r, c);
    util(board, i, j + 1, r, c);
}