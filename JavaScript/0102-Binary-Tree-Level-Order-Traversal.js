// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

let levelOrder = function(root)
{
    let result = [];
    let currLevel = [];
    let h = maxDepth(root);

    for(let i = 1; i <= h; i++)
    {
        pushLevel(root, i, currLevel);
        result.push(currLevel);
        currLevel = [];
    }

    return result;
}

let maxDepth = function(root)
{
    if(root == null)
    {
        return 0;
    }

    let ld = maxDepth(root.left);
    let rd = maxDepth(root.right);
    return Math.max(ld, rd) + 1;
}

let pushLevel = function(root, level, currLevel)
{
    if(root == null){return;}
    if(level == 1){currLevel.push(root.val);}
    else if(level > 1)
    {
        pushLevel(root.left, level - 1, currLevel);
        pushLevel(root.right, level - 1, currLevel);
    }
}