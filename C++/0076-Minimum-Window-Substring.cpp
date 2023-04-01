// https://leetcode.com/problems/minimum-window-substring/

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

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
// 1 <= m, n <= 10^5
// s and t consist of uppercase and lowercase English letters.

#include <string>
#include <map>

using namespace std;

class Solution
{
    public:
        string minWindow(string s, string t)
        {
            int start = 0;
            int match = 0;
            int l = 0;
            int r = 0;
            int n = INT_MAX;
            map<char, int> window;
            map<char, int> contains;

            for(auto c : t)
            {
                contains[c]++;
            }
            while(r < s.length())
            {
                char ch1 = s[r++];
                window[ch1]++;
                if(contains.count(ch1) && contains[ch1] == window[ch1])
                {
                    match++;
                }
                while(match == contains.size())
                {
                    if(r - l < n)
                    {
                        start = l;
                        n = r - l;
                    }
                    char ch2 = s[l++];
                    if(contains.count(ch2))
                    {
                        if(--window[ch2] < contains[ch2])
                        {
                            match--;
                        }
                    }
                }
            }

            return n == INT_MAX ? "" : s.substr(start, n);
        }
};