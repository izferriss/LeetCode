// https://leetcode.com/problems/group-anagrams/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

#include <vector>
#include <string>
#include <map>
#include <algorithm>

using namespace std;

class Solution
{
    public:
        vector<vector<string>> groupAnagrams(vector<string>& strs)
        {
            map<string, vector<string>> m;
            vector<vector<string>> result;

            for(string& str : strs)
            {
                string sorted = str;
                sort(sorted.begin(), sorted.end());
                m[sorted].push_back(str);
            }

            for(auto x:m)
            {
                result.push_back(x.second);
            }

            return result;
        }
};