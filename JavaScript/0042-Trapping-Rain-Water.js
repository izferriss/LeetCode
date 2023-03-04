// https://leetcode.com/problems/trapping-rain-water/

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:

// _______#____
// ___#ooo##o#_
// _#o##o######

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 10^4
// 0 <= height[i] <= 10^5

var trap = function(height)
{
    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let count = 0;

    while(left < right)
    {
        left_max = Math.max(left_max, height[left]);
        right_max = Math.max(right_max, height[right]);

        if(left_max < right_max)
        {
            count += left_max - height[left];
            left++;
        }
        else
        {
            count += right_max - height[right];
            right--;
        }
    }

    return count;
}