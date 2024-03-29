// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
 

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

#include <vector>

using namespace std;

// Definition for a binary tree node.
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
 
class Solution
{
    public:
        TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder)
        {
            if(preorder.empty())
            {
                return nullptr;
            }
            
            TreeNode* root = new TreeNode(preorder[0]);
            
            int split = find(inorder.begin(), inorder.end(), preorder[0]) - inorder.begin();
            
            vector<int> lio(inorder.begin(), inorder.begin() + split);
            vector<int> lpo(preorder.begin() + 1, preorder.begin() + 1 + lio.size());
            root -> left = buildTree(lpo, lio);
            
            vector<int> rpo(preorder.begin() + 1 + lio.size(), preorder.end());
            vector<int> rio(inorder.begin() + split + 1, inorder.end());
            root -> right = buildTree(rpo, rio);
            
            return root;
        }
};