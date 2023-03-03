// https://leetcode.com/problems/top-k-frequent-elements/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

let topKFrequent = function(nums, k)
{
    let freq = {};
    let result = [];
    for (let i = 0; i < nums.length; i++)
    {
        if(freq[nums[i]])
        {
            freq[nums[i]]++;
        }
        else
        {
           freq[nums[i]] = 1;
        }
    }

    Object.keys(freq).sort((a,b) => freq[b] - freq[a]).slice(0, k).forEach(function(x){result.push(parseInt(x));});
    return result;
}