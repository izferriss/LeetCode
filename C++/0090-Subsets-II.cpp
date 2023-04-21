// https://leetcode.com/problems/subsets-ii/

// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

#include <vector>
#include <algorithm> // sort()

using namespace std;

class Solution
{
    public:
        void backtrack(vector<vector<int>>& result, vector<int>& subset, vector<int>& nums, int start)
        {
            result.push_back(subset);

            for(int i = start; i < nums.size(); i++)
            {
                if(i > start && nums[i] == nums[i - 1])
                {
                    continue;
                }
                subset.push_back(nums[i]);
                backtrack(result, subset, nums, i + 1);
                subset.pop_back();
            }
        };
        vector<vector<int>> subsetsWithDup(vector<int>& nums) 
        {
            vector<vector<int>> result;
            vector<int> curr;
            
            sort(nums.begin(), nums.end());
            backtrack(result, curr, nums, 0);
            
            return result;
        }
};