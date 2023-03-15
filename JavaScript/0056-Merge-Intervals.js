// https://leetcode.com/problems/merge-intervals/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

var merge = function(intervals)
{
    if(intervals.length <= 1){return intervals;}
    intervals.sort(function(a, b)
    {
        if(a[0] > b[0]){return 1;}
        else if(a[0] < b[0]){return -1;}
        return 0;
    });

    let result = [];
    let start = intervals[0];

    for(let i = 1; i < intervals.length; i++)
    {
        let curr = intervals[i];
        if(start[1] >= curr[0])
        {
            let merged = [];
            if(start[1] <= curr[1]){merged = [start[0], curr[1]];}
            else{merged = [start[0], start[1]];}
            start = merged;
        }
        else
        {
            result.push(start);
            start = curr;
        }
    }

    result.push(start);
    return result;
}