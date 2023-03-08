// https://leetcode.com/problems/sliding-window-maximum/

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length

var maxSlidingWindow = function (nums, k)
{
    let subarr = [];
    let result = [];

    for(let i = 0; i < nums.length; i++)
    {
        // remove elements from the front of subarr while subarr contains indices before our window
        while(subarr[0] < i - k + 1)
        {
            subarr.shift();
        }
        
        // pop last elements from subarr if they are less than the next incoming element
        while(nums[subarr[subarr.length - 1]] < nums[i])
        {
            subarr.pop();
        }

        // push the next index to subarr
        subarr.push(i);

        // if the current index is greater than the index of the last element in the window
        // then push the first nums value using the first index in subarr
        if (i >= k - 1)
        {
            result.push(nums[subarr[0]]);
        }
    }
    return result;
}