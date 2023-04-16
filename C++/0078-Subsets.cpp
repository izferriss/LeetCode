// https://leetcode.com/problems/subsets/

// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

#include <vector>

using namespace std;

class Solution
{
    public:
        vector<vector<int>> subsets(vector<int>& nums)
        {
            vector<vector<int>> result;
            vector<int> subset;
            backtrack(result, subset, nums, 0);
            return result;
        }

        void backtrack(vector<vector<int>>& result, vector<int>& subset, vector<int>& nums, int start)
        {
            result.push_back(subset);
            for(int i = start; i < nums.size(); i++)
            {
                subset.push_back(nums[i]);
                backtrack(result, subset, nums, i + 1);
                subset.pop_back();
            }
        }
};