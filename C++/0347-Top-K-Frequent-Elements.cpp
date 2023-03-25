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

#include <vector>
#include <map>
#include <algorithm>

using namespace std;

class Solution 
{
    public:
        vector<int> topKFrequent(vector<int>& nums, int k)
        {
            vector<int> result;
            map<int, int> m;
            for(int i = 0; i < nums.size(); i++)
            {
                m[nums[i]]++;
            }

            vector<pair<int,int>> freq(m.begin(), m.end());
            sort(freq.begin(), freq.end(), compare);
            for(int i = 0; i < k; i++)
            {
                result.push_back(freq[i].first);
            }

            return result;
        }

        static bool compare(pair<int, int> p1, pair<int, int> p2)
        {
            if(p1.second == p2.second)
            {
                return p1.first > p2.first;
            }
            return p1.second > p2.second;
        }
};