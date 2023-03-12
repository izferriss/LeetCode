// https://leetcode.com/problems/word-search/

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

let exist = function(board, word)
{
    let rows = board.length;
    let cols = board[0].length;

    function dfs(board, row, col, rows, cols, word, cur)
    {
        if (row >= rows || row < 0) return false;
        if (col >= cols || col < 0) return false;
      
        let item = board[row][col];
      
        if(item != word[cur]){return false;}
      
        if(cur + 1 == word.length){return true;}
      
        board[row][col] = null;
      
        let result =    dfs(board, row + 1, col, rows, cols, word, cur + 1) || dfs(board, row - 1, col, rows, cols, word, cur + 1) ||
                        dfs(board, row, col - 1, rows, cols, word, cur + 1) || dfs(board, row, col + 1, rows, cols, word, cur + 1);

        board[row][col] = item;
        return result;
    }

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < cols; j++)
        {
            let found = dfs(board, i, j, rows, cols, word, 0);
            if(found){return true;}
        }
    }

    return false;
}