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

#include <vector>
#include <string>

using namespace std;

class Solution
{
    public:
        vector<string> generateParenthesis(int n)
        {
            if(n == 0)
            {
                return {""};
            }

            vector<string> result;

            for(int i = 0; i < n; i++)
            {
                vector<string> lefts = generateParenthesis(i);
                vector<string> rights = generateParenthesis(n - i - 1);

                for(int l = 0; l < lefts.size(); l++)
                {
                    for(int r = 0; r < rights.size(); r++)
                    {
                        result.push_back("(" + lefts[l] + ")" + rights[r]);
                    }
                }
            }

            return result;
        }
};