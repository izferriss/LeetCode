// https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is 
// height-balanced
// .

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4

#include <cmath> // abs()
#include <algorithm> // max()

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
        bool isBalanced(TreeNode* root)
        {
            if(!root){return true;}
    
            int ld = maxDepth(root -> left);
            int rd = maxDepth(root -> right);

            if(abs(ld - rd) <= 1 && isBalanced(root -> left) && isBalanced(root -> right)){return true;}

            return false;
        }

        int maxDepth(TreeNode* root)
        {
            if(!root)
            {
                return 0;
            }

            int ld = maxDepth(root -> left);
            int rd = maxDepth(root -> right);
            return max(ld, rd) + 1;
        }
};