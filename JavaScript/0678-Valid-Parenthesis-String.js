// https://leetcode.com/problems/valid-parenthesis-string/

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true
 

// Constraints:

// 1 <= s.length <= 100
// s[i] is '(', ')' or '*'.


let checkValidString = function(s)
{
    let minl = 0;
    let maxl = 0;
    
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(')
        {
            minl++;
            maxl++;
        }
        else if (s[i] === ')')
        {
            maxl--;
            minl > 0 && minl--;
        }
        else
        {
            maxl++;
            minl > 0 && minl--;
        }
        if (maxl < 0)
        {
            return false;
        }
    }
    
    return minl === 0;
}