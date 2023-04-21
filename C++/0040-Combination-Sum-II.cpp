// https://leetcode.com/problems/combination-sum-ii/

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

#include <vector>
#include <algorithm> // sort()
#include <numeric> // accumulate()

using namespace std;

class Solution
{
    public:

        int t;

        void backtrack(vector<vector<int>>& combinations, vector<int>& curr, vector<int>& candidates, vector<bool>& visited, int start)
        {
            int cursum = accumulate(curr.begin(), curr.end(), 0);

            if(cursum > t){}
            else if(cursum == t)
            {
                combinations.push_back(curr);
            }
            else
            {
                for(int i = start; i < candidates.size(); i++)
                {
                    if(visited[i])
                    {
                        continue;
                    }
                    if(i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1])
                    {
                        continue;
                    }
                    curr.push_back(candidates[i]);
                    visited[i] = true;
                    backtrack(combinations, curr, candidates, visited, i + 1);
                    curr.pop_back();
                    visited[i] = false;
                }
            }
        };

        vector<vector<int>> combinationSum2(vector<int>& candidates, int target)
        {
            int n = candidates.size();
            vector<vector<int>> combinations;
            vector<int> curr;
            vector<bool> visited(n, false);
            t = target;
            
            sort(candidates.begin(), candidates.end());
            
            backtrack(combinations, curr, candidates, visited, 0);
            
            return combinations;
        }
};