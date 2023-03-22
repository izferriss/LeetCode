// https://leetcode.com/problems/min-cost-climbing-stairs/

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.
 

// Constraints:

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

let getCost = function(cost, map)
{
    let calcCost = (dest) =>
    {
        if(dest == 1){return 0;}
        if(dest == 2){return Math.min(cost[0], cost[1]);}
        if(!map.has(dest - 2)){map.set(dest - 2, calcCost(dest - 2));}
        if(!map.has(dest - 1)){map.set(dest - 1, calcCost(dest - 1));}

        let p = map.get(dest - 2) + cost[dest - 2];
        let q = map.get(dest - 1) + cost[dest - 1];

        return Math.min(p, q);
    }

    return calcCost;
}

let minCostClimbingStairs = function(cost)
{
    let map = new Map();
    let calc = getCost(cost, map);
    return calc(cost.length);
}