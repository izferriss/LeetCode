// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -1000 <= Node.val <= 1000

#include <string>
#include <sstream> // istringstream
#include <queue>

using namespace std;

// Definition for a binary tree node.
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec
{
    public:

        // Encodes a tree to a single string.
        string serialize(TreeNode* root)
        {
            string s;
            preorder(root, s);
            return s;
        }

        // Decodes your encoded data to tree.
        TreeNode* deserialize(string data)
        {
            istringstream iss(data);
            queue<string> q;
            for(string s; iss >> s;)
            {
                q.push(s);
            }

            return preorder(q);
        }

    private:
        void preorder(TreeNode* root, string& s)
        {
            if(!root)
            {
                s += "n ";
                return;
            }

            s += to_string(root -> val) + " ";
            preorder(root -> left, s);
            preorder(root -> right, s);
        }

        TreeNode* preorder(queue<string>& q)
        {
            const string s = q.front();
            q.pop();

            if(s == "n")
            {
                return nullptr;
            }

            TreeNode* root = new TreeNode(stoi(s));
            root -> left = preorder(q);
            root -> right = preorder(q);
            return root;
        }
};