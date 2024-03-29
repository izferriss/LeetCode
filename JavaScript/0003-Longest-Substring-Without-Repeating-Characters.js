// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.


var lengthOfLongestSubstring = function(s)
{
    let map = {};
    let start = 0;
    let result = 0;
    let arr = s.split("");
    for(let i = 0; i < s.length; i++)
    {
        let curr = map[arr[i]];
        if(curr != null && start <= curr){start = curr + 1;}
        else{result = Math.max(result, i - start + 1);}

        map[arr[i]] = i;
    }

    return result;
}