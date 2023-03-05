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

// 1 <= s.length <= 10&5
// s consists of only uppercase English letters.
// 0 <= k <= s.length

var characterReplacement = function(s, k)
{
    let freq = {};
    let max = 0;

    let left = 0;
    let windowSize = 0;
    let maxFreq = 0;

    for(let right = 0; right < s.length; right++)
    {
        // update window size
        windowSize = right - left + 1;

        // update freq map
        if(freq[s[right]]){freq[s[right]]++;}
        else{freq[s[right]] = 1;}

        maxFreq = Math.max(maxFreq, freq[s[right]]);

        // while windowSize minus the most freq value is greater than the most characters we can replace
        while(windowSize - maxFreq > k)
        {
            // update freq map
            freq[s[left]]--;

            // move left pointer up (shrink the window)
            left++;

            // update window size
            windowSize = right - left + 1;
        }

        // update max
        max = Math.max(max, windowSize);
    }

    return max;
}