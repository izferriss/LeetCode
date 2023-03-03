// // https://leetcode.com/problems/group-anagrams/

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

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

var groupAnagrams = function(strs)
{
    let map = new Map();
    for(let i = 0; i < strs.length; i++)
    {
        let sorted = strs[i].split("").sort().join("");
        if(!map.get(sorted))
        {
            let list = [];
            list.push(strs[i]);
            map.set(sorted, list);
        }
        else
        {
            let list = map.get(sorted);
            list.push(strs[i]);
            map.set(sorted, list);
        }
    }

    return Array.from(map.values());
};