// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

#include <string>
#include <stack>

using namespace std;

class Solution
{
    public:
        bool isValid(string s)
        {
            stack<char> stk;
            char c;

            for(int i = 0; i < s.length(); i++)
            {
                if(s[i] == '(' || s[i] == '{' || s[i] == '[')
                {
                    stk.push(s[i]);
                    continue;
                }
                if(stk.empty()){return false;}
                switch(s[i])
                {
                    case ')':
                        c = stk.top();
                        stk.pop();
                        if(c == '{' || c == '['){return false;}
                        break;
                    case '}':
                        c = stk.top();
                        stk.pop();
                        if(c == '(' || c == '['){return false;}
                        break;
                    case ']':
                        c = stk.top();
                        stk.pop();
                        if(c == '(' || c == '{'){return false;}
                        break;
                }
            }

            return stk.empty();
        }
};