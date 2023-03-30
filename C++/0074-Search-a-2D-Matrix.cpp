// https://leetcode.com/problems/search-a-2d-matrix/

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4

#include <vector>

using namespace std;

class Solution
{
    public:
        bool searchMatrix(vector<vector<int>>& matrix, int target)
        {
            vector<int> flat = flatten(matrix);
            int n = flat.size();
            int l = 0;
            int r = n - 1;

            while(l <= r)
            {
                int mid = (l + r) / 2;
                if(flat[mid] < target)
                {
                    l = mid + 1;
                }
                else if(flat[mid] > target)
                {
                    r = mid - 1;
                }
                else
                {
                    return true;
                }
            }

            return false;
        }

        static vector<int> flatten(vector<vector<int>>& matrix)
        {
            vector<int> flattened;
            for(auto const &v : matrix)
            {
                flattened.insert(flattened.end(), v.begin(), v.end());
            }

            return flattened;
        }
};