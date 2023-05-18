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

package Java;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

class Solution
{
    public List<List<String>> groupAnagrams(String[] strs)
    {
        List<List<String>> result = new ArrayList<>();
        HashMap<String,Integer> m = new HashMap<>();

        for(String str : strs)
        {
            char[] c = str.toCharArray();
            Arrays.sort(c);
            String s = new String(c);
            if(m.containsKey(s))
            {
                List<String> substr = result.get(m.get(s));
                substr.add(str);
            }
            else
            {
                List<String> substr = new ArrayList<>();
                substr.add(str);
                result.add(substr);
                m.put(s, result.size() - 1);
            }
        }

        return result;
    }
}