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

var permute = function(nums)
{
    let result = [];

    if(nums.length == 0){return [];}
    if(nums.length == 1){return [nums];}

    for(let i = 0; i < nums.length; i++)
    {
        let curr = nums[i];
        let rem = nums.slice(0, i).concat(nums.slice(i + 1));
        let perm = permute(rem);
        for(let j = 0; j < perm.length; j++)
        {
            let temp = [curr].concat(perm[j]);
            result.push(temp);
        }
    }

    return result;
}