// https://leetcode.com/problems/word-ladder/

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

let ladderLength = function(beginWord, endWord, wordList)
{
    if(wordList.length == 0){return 0;}
    if(wordList.indexOf(endWord) == -1){return 0;}
    let dict = new Set(wordList);
    let barr = [beginWord];
    let earr = [endWord];
    let result = 2;

    while(barr.length)
    {
        if(barr.length > earr.length)
        {
            let temp = barr;
            barr = earr;
            earr = temp;
        }

        let narr = [];
        for(let word of barr)
        {
            let warr = word.split('');
            for(let i = 0; i < warr.length; i++)
            {
                let old = warr[i];
                for(let char of 'abcdefghijklmnopqrstuvwxyz')
                {
                    if(char == warr[i]){continue;}
                    warr[i] = char;
                    let w = warr.join('');
                    if(earr.indexOf(w) > -1){return result;}
                    if(dict.has(w))
                    {
                        narr.push(w);
                        dict.delete(w);
                    }
                }

                warr[i] = old;
            }
        }

        barr = narr;
        result++;
    }

    return 0;
}