// https://leetcode.com/problems/number-of-islands/

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

let numIslands = function(grid)
{
    let result = 0;
    let r = grid.length;
    if(r == 0){return 0;}
    let c = grid[0].length;
    for(let i = 0; i < r; i++)
    {
        for(let j = 0; j < c; j++)
        {
            if(grid[i][j] == "1")
            {
                util(grid, i, j, r, c);
                result++;
            }
        }
    }

    return result;
}

function util(grid, i, j, r, c)
{
    if(i < 0 || j < 0 || i > r - 1 || j > c - 1 || grid[i][j] == "0"){return;}
    grid[i][j] = "0";

    util(grid, i + 1, j, r, c);
    util(grid, i, j + 1, r, c);
    util(grid, i - 1, j, r, c);
    util(grid, i, j - 1, r, c);
}