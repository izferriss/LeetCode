// https://leetcode.com/problems/longest-consecutive-sequence/

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

#include <vector>
#include <algorithm>
#include <iostream>
#include <set>

using namespace std;

class Solution
{
    public:
        int longestConsecutive(vector<int>& nums)
        {
            int result = 0;
            set<int> s(nums.begin(), nums.end());
            for(int x : nums)
            {
                if(s.find(x - 1) == s.end())
                {
                    int count = 1;
                    int conseq = x + 1;

                    while(s.find(conseq++) != s.end())
                    {
                        count++;
                    }
                    result = max(result, count);

                }
            }

            return result;
        }
};