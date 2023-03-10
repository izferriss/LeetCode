// https://leetcode.com/problems/n-queens/

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]
 

// Constraints:

// 1 <= n <= 9

var solveNQueens = function(n)
{
    let cols = new Set();
    let posDiag = new Set();
    let negDiag = new Set();

    let result = [];

    let board = Array(n);
    for(let i = 0; i < n; i++)
    {
        board[i] = Array(n).fill(".");
    }

    let backtrack = function(row)
    {
        if(row == n)
        {
            let copyBoard = [];
            for(let i = 0; i < board.length; i++)
            {
                copyBoard.push(board[i].join(""));
            }

            result.push(copyBoard);

            return;
        }

        for(let col = 0; col < n; col++)
        {
            if(cols.has(col) || posDiag.has(row + col)|| negDiag.has(row - col)){continue;}
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = "Q";

            backtrack(row + 1);

            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = ".";
        }
    }

    backtrack(0);
    return result;
}