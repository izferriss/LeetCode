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

let subsetsWithDup = function(nums)
{
    let result = [];
    backtrack(result, [], nums, 0);
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
}

function backtrack(arr, tmpArr, nums, start)
{
    arr.push([...tmpArr].sort((a, b) => a - b));
    for(let i = start; i < nums.length; i++)
    {
        tmpArr.push(nums[i]);
        backtrack(arr, tmpArr, nums, i + 1);
        tmpArr.pop();
    }
}