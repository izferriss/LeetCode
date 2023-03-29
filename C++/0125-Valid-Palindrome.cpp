// https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

#include <string>
#include <algorithm>
#include <locale>

using namespace std;

class Solution
{
    public:
        bool isPalindrome(string s)
        {
            // remove non-alphanumerical characters
            s.erase(remove_if(s.begin(), s.end(), [](char c){ return !isalnum(c); }), s.end());

            // convert to lowercase
            transform(s.begin(), s.end(), s.begin(), ::tolower);

            // make a copy and reverse it
            string copy = s;
            reverse(copy.begin(), copy.end());

            // return the comparison of the copy and the mutated input parameter
            return copy == s;
        }
};