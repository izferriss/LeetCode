// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10^6 <= nums1[i], nums2[i] <= 10^6

#include <vector>
#include <algorithm> // sort()

using namespace std;

class Solution
{
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2)
        {
            vector<int> merged = merge(nums1, nums2);

            if(merged.size() % 2 == 0)
            {
                return (merged[merged.size() / 2] + merged[(merged.size() / 2) - 1]) / 2.f;
            }
            else
            {
                return merged[merged.size() / 2];
            }
        }
        static vector<int> merge(vector<int>& nums1, vector<int>& nums2)
        {
            vector<int> result;
            result.reserve(nums1.size() + nums2.size());
            result.insert(result.end(), nums1.begin(), nums1.end());
            result.insert(result.end(), nums2.begin(), nums2.end());
            sort(result.begin(), result.end());

            return result;
        }
};