// https://leetcode.com/problems/design-add-and-search-words-data-structure/

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
 

// Constraints:

// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 3 dots in word for search queries.
// At most 10^4 calls will be made to addWord and search.

class TrieNode
{
    constructor(char)
    {
        this.char = char;
        this.children = {};
        this.end = false;
    }
}

var WordDictionary = function()
{
    this.root = new TrieNode("");
}

WordDictionary.prototype.addWord = function(word)
{
    let node = this.root;
    for(let c of word)
    {
        if(!node.children[c])
        {
            node.children[c] = new TrieNode(c);
        }
        node = node.children[c];
    }
    node.end = true;
}

WordDictionary.prototype.search = function(word)
{
    return dfs(this.root, 0);
    function dfs(node, i)
    {
        if(i == word.length){return node.end;}
        if(word[i] == ".")
        {
            for(let key in node.children)
            {
                if(dfs(node.children[key], i + 1)){return true;}
            }
        }
        else
        {
            if(!node.children[word[i]]){return false;}
            return dfs(node.children[word[i]], i + 1);
        }
        return false;
    }
}