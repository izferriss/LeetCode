// https://leetcode.com/problems/top-k-frequent-elements/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

package Java;

import java.util.*;

class Solution
{
    public int[] topKFrequent(int[] nums, int k)
    {
        int[] result = new int[k];
        Map<Integer, Integer> m = new HashMap<>();

        // populate the map
        for(int n : nums)
        {
            m.put(n, m.getOrDefault(n, 0) + 1);
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> m.get(a) - m.get(b));

        for(int n : m.keySet())
        {

            pq.offer(n);

            if(pq.size() > k)
            {
                pq.poll();
            }
        }

        for(int i = 0; i < k; i++)
        {
            result[i] = pq.poll();
        }

        return result;
    }
}