// https://leetcode.com/problems/partition-labels/

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

let partitionLabels = function(s)
{
    let last = new Array(26);
    for(let i = 0; i < s.length; i++){last[s[i]] = i;}

    let result = [];
    let l = 0;
    let r = 0;
    for(let i = 0; i < s.length; i++)
    {
        r = Math.max(r, last[s[i]]);
        if(i == r)
        {
            result.push(r - l + 1);
            l = r + 1;
        }
    }

    return result;
}