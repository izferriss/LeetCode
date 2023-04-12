// https://leetcode.com/problems/merge-k-sorted-lists/

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10^4.

var mergeKLists = function(lists)
{
    let merged;
    
    if(lists.length != 0)
    {
        merged = lists[0];
    }
    else
    {
        let node = new ListNode();
        return node.next;
    }
    
    for(let i = 1; i < lists.length; i++)
    {
        merged = mergeTwoLists(merged, lists[i]);
    }   

    return merged;
}

var mergeTwoLists = function(list1, list2)
{
    if(list1 === null){return list2;}
    if(list2 === null){return list1;}

    if(list1.val < list2.val)
    {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else
    {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}