// https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.

var search = function(nums, target)
{
    let sorted = Array.from(nums);
    sorted.sort((a, b) => a - b);
    let len = nums.length;
    let l = 0;
    let r = len - 1;
    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2);
        if(sorted[mid] < target)
        {
            l = mid + 1;
        }
        else if(sorted[mid] > target)
        {
            r = mid - 1;
        }
        else
        {
            return nums.indexOf(sorted[mid]);
        }
    }

    return -1;
}