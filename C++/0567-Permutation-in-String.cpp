// https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.

#include <string>
#include <map>

using namespace std;

class Solution
{
    public:
        bool checkInclusion(string s1, string s2)
        {
            map<char, int> mp;

            for(int i = 0; i < s1.size(); i++)
            {
                mp[s1[i]]++;
            }

            int start = 0;
            int end = 0;
            int n = s1.size();
            int count = 0;

            while(end < s2.size())
            {
                if(mp[s2[end]] != 0)
                {
                    mp[s2[end]]--;
                    count++;
                    end++;
                }
                else
                {
                    mp[s2[start]]++;
                    count--;
                    start++;
                }

                if(count == n)
                {
                    return true;
                }
            }
            return false;
        }
};