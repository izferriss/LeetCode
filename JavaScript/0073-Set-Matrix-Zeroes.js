// https://leetcode.com/problems/set-matrix-zeroes/

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -2^31 <= matrix[i][j] <= 2^31 - 1

let setZeroes = function(matrix)
{
    let row = [];
    let col = [];
    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[0].length; j++)
        {
            if(matrix[i][j] == 0)
            {
                row.push(i);
                col.push(j);
            }
        }
    }
    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[0].length; j++)
        {
            if(row.includes(i) || col.includes(j)){matrix[i][j] = 0;}
        }
    }

    return matrix;
}