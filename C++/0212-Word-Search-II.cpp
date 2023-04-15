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

#include <string>
#include <vector>

using namespace std;

class TrieNode
{
    public:
        vector<TrieNode*> children;
        string word;
        
        TrieNode()
        {
            children = vector<TrieNode*>(26, nullptr);
        }
};

class Trie
{
    public:
        TrieNode* root;
        
        Trie()
        {
            root = new TrieNode();
        }
        
        void add(string word)
        {
            TrieNode* curr = root;
            
            for(char c : word)
            {
                if(curr -> children[c -'a'] == nullptr)
                {
                    curr -> children[c -'a'] = new TrieNode();
                }

                curr = curr -> children[c - 'a'];
            }

            curr -> word = word;
        }
        
        bool find(string word)
        {
            TrieNode* curr = root;

            for(char c : word)
            {
                curr = curr -> children[c - 'a'];

                if(curr == nullptr)
                {
                    return false;
                }
            }
            
            return true;
        }
};

class Solution
{
    public:
        Trie* trie;
        
        void dfs(vector<vector<char>>& board, int m, int n, int i, int j, TrieNode* node, vector<string>& result)
        {
            char c = board[i][j];

            if(c == '#')
            {
                return;
            }

            if(node -> children[c - 'a'] == nullptr)
            {
                return;
            }
            
            node = node -> children[c - 'a'];

            if(node->word != "")
            {
                result.push_back(node -> word);

                node -> word = "";
            }
            
            board[i][j] = '#';
            
            if(i > 0)
            {
                dfs(board, m, n, i - 1, j, node, result);
            }
            if(i + 1 < m)
            {
                dfs(board, m, n, i + 1, j, node, result);
            }
            if(j > 0)
            {
                dfs(board, m, n, i, j - 1, node, result);
            }
            if(j + 1 < n)
            {
                dfs(board, m, n, i, j + 1, node, result);
            }
                    
            board[i][j] = c;
        };
        
        vector<string> findWords(vector<vector<char>>& board, vector<string>& words)
        {
            int m = board.size();

            if(m == 0)
            {
                return vector<string>();
            }

            int n = board[0].size();
            
            trie = new Trie();
            
            for(string& word : words)
            {
                trie -> add(word);
            }
            
            vector<string> result;
            
            for(int i = 0; i < m; ++i)
            {
                for(int j = 0; j < n; j++)
                {
                    dfs(board, m, n, i, j, trie -> root, result);
                }
            }
            
            return result;
        }
};