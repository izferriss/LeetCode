// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

using namespace std;

// Definition for singly-linked list.
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
    public:
        ListNode* removeNthFromEnd(ListNode* head, int n)
        {
            int count = 0;
            ListNode* curr = head;

            while(curr)
            {
                curr = curr -> next;
                count++;
            }

            curr = head;
            count -= n;

            if(count == 0)
            {
                curr = curr -> next;
                return curr;
            }

            while(count > 1)
            {
                count--;
                curr = curr -> next;
            }

            curr -> next = curr -> next -> next;
            return head;
        }
};