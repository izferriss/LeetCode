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

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

var checkInclusion = function(s1, s2)
{
    let left = 0;
    let windowSize = s1.length;

    let split = s1.split("");

    while(left <= s2.length - windowSize)
    {
        let sub = s2.substring(left, left + windowSize);

        for(let c of split)
        {
            if(!sub.includes(c))
            {
                break;
            }
            else
            {
                sub = sub.substring(0, sub.indexOf(c)) + sub.substring(sub.indexOf(c) + 1);
                if(sub == ""){return true;}
            }
        }

        left++;
    }

    return false;
}