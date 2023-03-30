// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4
 

// Constraints:

// 1 <= heights.length <= 10^5
// 0 <= heights[i] <= 10^4

var largestRectangleArea = function(heights)
{
    // stack will only contain indices of heights
    let stack = [];
    let max = 0;
    let i = 0;

    // if heights is empty, return 0
    if(heights.length == 0 || heights == null){return max;}

    // iterate through heights
    while(i <= heights.length)
    {
        // if stack is empty or the value of the height index stored at the top of stack is <= heights[i]
        // then push the index onto the stack
        if(stack.length == 0 || heights[stack.at(-1)] <= heights[i])
        {
            stack.push(i++);
        }
        else // stack has the current largest iterative value on top
        {
            // assign the value of the index on the stack to height
            // assign the current iteration index to width or calculate the width of the largest height from
            // the top of the stack
            let h = heights[stack.pop()];
            let w = stack.length == 0 ? i : i - stack.at(-1) - 1;

            // update max (either max is bigger, or w * h is)
            max = Math.max(max, w * h);
        }
    }

    return max;
}