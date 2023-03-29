// https://leetcode.com/problems/trapping-rain-water/

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


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

#include <vector>
#include <algorithm> // max()

using namespace std;

class Solution
{
    public:
        int trap(vector<int>& height)
        {
            int l = 0;
            int r = height.size() - 1;
            int lmax = 0;
            int rmax = 0;
            int count = 0;

            while(l < r)
            {
                lmax = max(lmax, height[l]);
                rmax = max(rmax, height[r]);

                if(lmax < rmax)
                {
                    count += lmax - height[l];
                    l++;
                }
                else
                {
                    count += rmax - height[r];
                    r--;
                }
            }

            return count;
        }
};