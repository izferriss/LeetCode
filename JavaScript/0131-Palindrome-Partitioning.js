// https://leetcode.com/problems/palindrome-partitioning/

// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

let partition = function(s)
{
    let result = [];
    backtrack(s, result, [], 0);
    return result;
}

function backtrack(str, arr, temp, start)
{
    let slice = str.slice(start);

    if(isPalindrome(slice) && temp.join("").length == str.length)
    {
        arr.push([...temp]);
    }

    for(let i = 0; i < slice.length; i++)
    {
        let substr = slice.slice(0, i + 1);
        if(isPalindrome(substr)){temp.push(substr);}
        else{continue;}
        backtrack(str, arr, temp, start + i + 1);
        temp.pop();
    }
}

function isPalindrome(str)
{
    let l = 0;
    let r = str.length - 1;

    while(l < r && str[l] == str[r]){l++; r--;}
    return l >= r;
}