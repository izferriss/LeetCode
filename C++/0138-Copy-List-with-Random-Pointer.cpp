// https://leetcode.com/problems/copy-list-with-random-pointer/

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or NULL.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or NULL if it does not point to any node.
// Your code will only be given the head of the original linked list.

 

// Example 1:


// Input: head = [[7,NULL],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,NULL],[13,0],[11,4],[10,2],[1,0]]
// Example 2:


// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:



// Input: head = [[3,NULL],[3,0],[3,NULL]]
// Output: [[3,NULL],[3,0],[3,NULL]]
 

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 10^4
// Node.random is NULL or is pointing to some node in the linked list.


// Definition for a Node.

using namespace std;

class Node
{
    public:
        int val;
        Node* next;
        Node* random;
        
        Node(int _val)
        {
            val = _val;
            next = NULL;
            random = NULL;
        }
};

class Solution
{
    public:
        Node* copyRandomList(Node* head)
        {
            Node* curr = head;
            while(curr != NULL)
            {
                Node* next = curr -> next;
                Node* copy = new Node(curr -> val);
                curr -> next = copy;
                copy -> next = next;
                curr = next;
            }

            curr = head;
            while(curr != NULL)
            {
                curr -> next -> random = curr -> random == NULL ? NULL : curr -> random -> next;
                curr = curr -> next -> next;
            }

            Node* node = new Node(0);
            curr = node;
            Node* copy = new Node(0);
            Node* currCopy = copy;
            bool flag = false;
            while(head != NULL)
            {
                if(flag)
                {
                    currCopy -> next = head;
                    currCopy = currCopy -> next;
                }
                else
                {
                    curr -> next = head;
                    curr = curr -> next;
                }
                flag = !flag;
                head = head -> next;
            }

            curr -> next = NULL;
            return copy -> next;
        }
};