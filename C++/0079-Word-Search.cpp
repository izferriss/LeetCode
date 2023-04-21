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

#include <vector>
#include <string>

using namespace std;

class Solution
{
    public:
        bool findWord(vector<vector<char>>& board, string& word, int i, int j, int pos, int& rows, int& cols)
        {
            if(i < 0 || i >= rows || j < 0 || j >= cols)
            {
                return false;
            }
            
            if(pos == word.size() - 1)
            {
                return true;
            }
            
            char tempChar = board[i][j];
            board[i][j] = '$';
            
            bool found = false;

            if(i + 1 < rows && board[i + 1][j] == word[pos + 1])
            {
                found = found || findWord(board, word, i + 1, j, pos + 1, rows, cols);
            }

            if(i - 1 >= 0 && board[i - 1][j] == word[pos + 1])
            {
                found = found || findWord(board, word, i - 1, j, pos + 1, rows, cols);
            }

            if(j + 1 < cols && board[i][j + 1] == word[pos + 1])
            {
                found = found || findWord(board, word, i, j + 1, pos + 1, rows, cols);
            }

            if(j - 1 >= 0 && board[i][j - 1] == word[pos + 1])
            {
                found = found || findWord(board, word, i, j - 1, pos + 1, rows, cols);
            }
            
            board[i][j] = tempChar;
            
            return found;
        }

        bool exist(vector<vector<char>>& board, string word)
        {
            int rows = board.size();

            if(rows == 0)
            {
                return false;
            }

            int cols = board[0].size();
            int pos = 0;

            for(int i = 0; i < rows; i++)
            {
                for(int j = 0; j < cols; j++)
                {
                    if(board[i][j] == word[pos])
                    {
                        if(word.size() == 1)
                        {
                            return true;
                        }

                        bool found = findWord(board, word, i, j, pos, rows, cols);

                        if(found)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
};