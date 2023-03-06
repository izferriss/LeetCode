// https://leetcode.com/problems/minimum-window-substring/

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every t[i] in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

var minWindow = function(s, t)
{
    let tfreq = {};
    for(let i = 0; i < t.length;i++)
    {
        if(tfreq[t[i]]){tfreq[t[i]]++;}
        else{tfreq[t[i]] = 1;}
    }

    let sfreq = {};
    let count = 0;
    let result = "";
    let left = 0;

    for (let right = 0; right < s.length; right++)
    {
        let curr = s[right];
        sfreq[curr] = sfreq[curr] === undefined ? 1 : sfreq[curr] + 1;
        if(tfreq[curr] && sfreq[curr] <= tfreq[curr])
        {
            count++;
        }
        while(count == t.length)
        {
            if(result == "" || result.length > right - left + 1)
            {
                result = s.slice(left, right + 1);
            }

            sfreq[s[left]]--;

            if(tfreq[s[left]] && sfreq[s[left]] < tfreq[s[left]])
            {
                count--;
            }
            left++;
        }
    }
    return result
}