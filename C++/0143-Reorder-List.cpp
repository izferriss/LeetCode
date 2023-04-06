// https://leetcode.com/problems/reorder-list/

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 10^4].
// 1 <= Node.val <= 1000

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
        void reorderList(ListNode* head)
        {
            if(!head || !head -> next)
            {
                return;
            }

            ListNode* n1 = head;
            ListNode* n2 = head;

            while(n2 -> next && n2 -> next -> next)
            {
                n1 = n1 -> next;
                n2 = n2 -> next -> next;
            }

            ListNode* n3 = n1;
            ListNode* n4 = n1 -> next;

            while(n4 -> next)
            {
                ListNode* curr = n4 -> next;

                n4 -> next = curr -> next;
                curr -> next = n3 -> next;

                n3 -> next = curr;
            }

            n1 = head;
            n2 = n3 -> next;

            while(n1 != n3)
            {
                n3 -> next = n2 -> next;
                n2 -> next = n1 -> next;
                n1 -> next = n2;
                n1 = n2 -> next;
                n2 = n3 -> next;
            }
        }
};