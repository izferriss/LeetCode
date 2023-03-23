// https://leetcode.com/problems/spiral-matrix/

// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

let spiralOrder = function(matrix)
{
    let result = [];
    let l = 0;
    let t = 0;
    let r = matrix[0].length - 1;
    let b = matrix.length - 1;
    let dir = "right";

    while(l <= r && t <= b)
    {
        if(dir == "right")
        {
            for(let i = l; i <= r; i++)
            {
                result.push(matrix[t][i]);
            }
            t++;
            dir = "down";
        }
        else if(dir == "down")
        {
            for(let i = t; i <= b; i++)
            {
                result.push(matrix[i][r]);
            }
            r--;
            dir = "left";
        }
        else if(dir == "left")
        {
            for(let i = r; i >= l; i--)
            {
                result.push(matrix[b][i]);
            }
            b--;
            dir = "up";
        }
        else if(dir == "up")
        {
            for(let i = b; i >= t; i--)
            {
                result.push(matrix[i][l]);
            }
            l++
            dir = "right";
        }
    }

    return result;
}