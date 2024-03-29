// https://leetcode.com/problems/rotting-oranges/

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-dirally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-dirally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

let orangesRotting = function(grid)
{
    let queue = [];
    let freshOranges = 0;
    let result = 0;

    for(let i = 0; i < grid.length; i++)
    {
        for(let j = 0; j < grid[0].length; j++)
        {
            if(grid[i][j] === 1){freshOranges += 1;}
            else if(grid[i][j] === 2){queue.push([[i, j], 0]);}
        }
    }
    let dir = [-1, 0, 1, 0, -1];
    while(freshOranges > 0 && queue.length > 0)
    {
        const [position, minute] = queue.shift();
        for(let d = 0; d < 4; d++)
        {
            const dx = position[0] + dir[d];
            const dy = position[1] + dir[d + 1];
            if(dx >= 0 && dx < grid.length && dy >= 0 && dy <= grid[0].length && grid[dx][dy] == 1)
            {
                queue.push([[dx, dy], minute + 1]);
                grid[dx][dy] = 2;
                freshOranges -= 1;
            }
        }
        result = minute + 1;
    }

    return freshOranges > 0 ? -1 : result;
}