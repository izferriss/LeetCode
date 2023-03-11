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

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000

var serialize = function(root)
{
    let result = [];
    let queue = root ? [root] : [];

    while(queue.length)
    {
        let node = queue.shift();
        if(node)
        {
            result.push(node.val);
            queue.push(node.left || null);
            queue.push(node.right || null);
        }
        else
        {
            result.push(null);
        }
    }

    while(result[result.length - 1] === null)
    {
        result.pop();
    }

    return result;
}

var deserialize = function(data)
{
    if(!data.length){return null;}

    let root = new TreeNode(data.shift());
    let queue = [root];

    while(queue.length)
    {
        let node = queue.shift(), val;
        node.left = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
        node.right = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;

        if(node.left){queue.push(node.left);}
        if(node.right){queue.push(node.right);}
    }

    return root;
}