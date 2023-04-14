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

#include <string>
#include <vector>

using namespace std;

class TrieNode
{
    public:
        vector<TrieNode*> links;
        string item;
        
        TrieNode()
        {
            links = vector<TrieNode*>(26);
            item = "";
        }
};

class WordDictionary
{
public:
    TrieNode* root = new TrieNode();
    
    WordDictionary() {}
    
    void addWord(string word)
    {
        TrieNode* node = root;
        for(char c : word)
        {
            if(node->links[c -'a'] == NULL)
            {
                node->links[c -'a'] = new TrieNode();
            }
            node = node->links[c -'a'];
        }

        node -> item = word;
    }
    
    bool match(string word, int depth, TrieNode* node)
    {
        if(depth == word.size())
        {
            return (node->item != "");
        }

        char c = word[depth];

        if(c != '.')
        {
            return (node -> links[c - 'a'] != NULL) && match(word, depth + 1, node->links[c-'a']);
        }
        else
        {
            //search for all its children
            for(int i = 0; i < node->links.size(); i++)
            {
                if(node->links[i] != NULL)
                {
                    if(match(word, depth+1, node->links[i]))
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    bool search(string word)
    {
        return match(word, 0, root);
    }
};