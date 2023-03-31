// https://leetcode.com/problems/longest-repeating-character-replacement/

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
 

// Constraints:

// 1 <= s.length <= 10^5
// s consists of only uppercase English letters.
// 0 <= k <= s.length

#include <string>
#include <algorithm> // max(), max_element()

using namespace std;

class Solution 
{
    public:
        int characterReplacement(string s, int k)
        {
            int nums[26] = {};
            int result = 0;
            int n = s.size();
            int i = 0;
            int j = 0;

            while(j < n)
            {
                nums[s[j++] - 'A']++;
                while(j - i - *max_element(nums, nums + 26) > k)
                {
                    nums[s[i++] - 'A']--;
                }
                result = max(result, j - i);
            }

            return result;
        }
};