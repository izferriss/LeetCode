// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let longestPalindrome = function(s)
{
    let table = new Array(s.length);

    for(let i = 0; i < s.length; i++)
    {
        table[i] = new Array(s.length);
    }

    let maxLen = 1;
    for(let i = 0; i < s.length; i++){table[i][i] = true;}
        
    let start = 0;
    for(let i = 0; i < s.length - 1; i++) 
    {
        if (s[i] == s[i + 1])
        {
            table[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }
    for (let k = 3; k <= s.length; k++)
    {
        for (let i = 0; i < s.length - k + 1; i++) 
        {
            let j = i + k - 1;
            if(table[i + 1][j - 1] && s[i] == s[j])
            {
                table[i][j] = true;

                if (k > maxLen)
                {
                    start = i;
                    maxLen = k;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
}