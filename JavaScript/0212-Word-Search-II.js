// https://leetcode.com/problems/word-search-ii/

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

// Example 1:


// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Example 2:


// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 10^4
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

/**
 * Initialize your data structure here.
 */
class Trie
{
    constructor()
    {
        this.root = new TrieNode();
    }

    insert(word)
    {
        let curr = this.root;
        for(let i = 0; i < word.length; i++)
        {
            if(!curr.children[word[i]])
            {
                curr.children[word[i]] = new TrieNode(word[i]);
            }
            curr = curr.children[word[i]];
            if(i == word.length - 1)
            {
                curr.end = true;
            }
        }
    }

    search(word)
    {
        let curr = this.root;
        for(let i = 0; i < word.length; i++)
        {
            if(!curr.children[word[i]]){return false;}
            curr = curr.children[word[i]];
            if(i == word.length - 1)
            {
                if(!curr.end){return false;}
            }
        }
        return true;
    }

    startsWith(prefix)
    {
        let curr = this.root;
        for(let c of prefix)
        {
            if(!curr.children[c]){return false;}
            curr = curr.children[c];
        }
        return true;
    }
}

class TrieNode
{
    constructor(val, end)
    {
        this.val = val;
        this.children = {};
        this.end = end || false;
    }
}

let findWords = function (board, words)
{
    let result = new Set();
    let trie = new Trie();

    for(let word of words){trie.insert(word);}

    let dirX = [0, 1, 0, -1];
    let dirY = [1, 0, -1, 0];

    function dfs(i, j, word)
    {
        if(!trie.startsWith(word)){return;}
        if(trie.search(word)){result.add(word);}
        for(let k = 0; k < 4; k++)
        {
            let x = i + dirX[k];
            let y = j + dirY[k];
            if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] == "#"){continue;}
            let c = board[x][y];
            board[x][y] = "#";
            dfs(x, y, word + c);
            board[x][y] = c;
        }
    }

    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[0].length; j++)
        {
            let c = board[i][j];
            board[i][j] = "#";
            dfs(i, j, c);
            board[i][j] = c;
        }
    }

    return [...result];
}