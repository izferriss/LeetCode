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

#include <vector>
#include <string>

using namespace std;

class Solution
{
    public:
        int n;
        
        void backtrack(vector<int>& visited, int r, vector<string>& curr, vector<vector<string>>& result)
        {
            if(r == n)
            {
                result.push_back(curr);
            }
            else
            {
                for(int c = 0; c < n; c++)
                {
                    if(!visited[c] && !visited[n + r - c + n - 1] && !visited[n + 2 * n - 1 + r + c])
                    {
                        curr[r][c] = 'Q';
                        visited[c] = visited[n + r - c + n - 1] = visited[n + 2 * n - 1 + r + c] = true;
                        
                        backtrack(visited, r + 1, curr, result);
                        
                        visited[c] = visited[n + r - c + n - 1] = visited[n + 2 * n - 1 + r + c] = false;
                        curr[r][c] = '.';
                    }
                }
            }
        };
        
        vector<vector<string>> solveNQueens(int n)
        {
            this -> n = n;
            vector<string> curr(n, string(n, '.'));
            vector<vector<string>> result;
            vector<int> visited(n + 2 * n - 1 + 2 * n - 1, false);
            
            backtrack(visited, 0, curr, result);
            
            return result;
        }
};