// https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

let generateParenthesis = function(n)
{
    if (n == 0)
    {
        return [""];
    }

    let result = [];

    for (let i = 0; i < n; i++)
    {
        let lefts = generateParenthesis(i);
        let rights = generateParenthesis(n - i - 1);

        for (var l = 0; l < lefts.length; l++)
        {
            for (var r = 0; r < rights.length; r++)
            {
                result.push("(" + lefts[l] + ")" + rights[r]);
            }
        }       
    }
    return result;
}