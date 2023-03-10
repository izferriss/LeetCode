// https://leetcode.com/problems/binary-tree-right-side-view/

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

var rightSideView = function(root)
{
    let result = [];
    if(root == null){return result}
    
    let queue = [root];

    while(queue.length > 0)
    {
        let n = queue.length;
        let level = [];

        while(n > 0)
        {
            let top = queue.shift();
            level.push(top.val);

            if(top.left)
            {
                queue.push(top.left);
            }
            if(top.right)
            {
                queue.push(top.right);
            }

            n--;
        }
        result.push(level);
    }

    return result.map(level => level[level.length - 1]);
}