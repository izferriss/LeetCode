// https://leetcode.com/problems/find-the-duplicate-number/

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

var findDuplicate = function(nums)
{
    let fast = 0;
    let slow = 0;
    while(true)
    {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if(fast === slow)
        {
            let ptr = 0;
            while(ptr != slow)
            {
                ptr = nums[ptr];
                slow = nums[slow];
            }

            return ptr;
        }
    }
}