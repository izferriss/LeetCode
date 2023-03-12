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

let combinationSum2 = function(candidates, target)
{
    let result = [];
    candidates.sort((a, b) => a - b);

    function backtrack(arr, t, idx, res, tmp)
    {
        if(t < 0){return;}
        if(t == 0)
        {
            res.push(tmp.slice());
            return;
        }

        for(let i = idx; i < arr.length; i++)
        {
            if(i > idx && arr[i] == arr[i - 1]){continue;}
            tmp.push(arr[i]);
            backtrack(arr, t - arr[i], i + 1, res, tmp);
            tmp.pop();
        }
    }


    backtrack(candidates, target, 0, result, []);

    return result;
}
