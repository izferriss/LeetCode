// https://leetcode.com/problems/permutations/

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

#include <vector>

using namespace std;

class Solution
{
    public:
        void backtrack(vector<vector<int>>& permutations, vector<int>& curr, vector<int>& nums)
        {
            if(curr.size() == nums.size())
            {
                permutations.push_back(curr);
            }
            else
            {
                for(int perm : nums)
                {
                    if(find(curr.begin(), curr.end(), perm) != curr.end())
                    {
                        continue;
                    }
                    curr.push_back(perm);
                    backtrack(permutations, curr, nums);
                    curr.pop_back();
                }
            }
        };
        
        vector<vector<int>> permute(vector<int>& nums)
        {
            vector<vector<int>> permutations;
            vector<int> curr;
            
            backtrack(permutations, curr, nums);
            
            return permutations;
        }
};