// https://leetcode.com/problems/palindrome-partitioning/

// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

#include <string>
#include <vector>

using namespace std;

class Solution
{
    public:
        bool isPalindrome(string s)
        {
            int n = s.size();
            
            string rev = s.substr(n - n / 2);

            reverse(rev.begin(), rev.end());
            
            return s.substr(0, n / 2) == rev;
        };
        
        void backtrack(vector<vector<string>>& parts, vector<string>& part, string s, int start)
        {
            if(start >= s.size())
            {
                bool flag = true;

                for(string token : part)
                {
                    if(!isPalindrome(token))
                    {
                        flag = false;
                        break;
                    }
                }
                if(flag)
                {
                    parts.push_back(part);
                }
            }
            else
            {
                for(int i = 1; start + i <= s.size(); i++)
                {
                    string token = s.substr(start, i);
                    part.push_back(token);
                    backtrack(parts, part, s, start + i);
                    part.pop_back();
                }
            }
        };
        vector<vector<string>> partition(string s)
        {
            int n = s.size();
            vector<vector<string>> parts;
            vector<string> part;
            
            backtrack(parts, part, s, 0);
            
            return parts;
        }
};