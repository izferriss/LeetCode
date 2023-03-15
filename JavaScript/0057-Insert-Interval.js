// https://leetcode.com/problems/insert-interval/

// ou are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

// Constraints:

// 0 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^5
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 10^5

let insert = function(intervals, newInterval)
{
    let n = intervals.length;
    let start = [];
    let end = [];
    let result = [];

    for(let i = 0; i < n; i++)
    {
        start.push(intervals[i][0]);
        end.push(intervals[i][1]);
    }

    start.push(newInterval[0]);
    end.push(newInterval[1]);

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let interval = start[0];
    let temp = [];
    for(let i = 1; i <= n; i++)
    {
        if(start[i] > end[i - 1])
        {
            temp.push([interval, end[i - 1]]);
            interval = start[i];
        }
    }

    temp.push([interval, end[n]]);
    for(let i = 0; i < temp.length; i++)
    {
        result.push(temp[i]);
    }

    return result;
}