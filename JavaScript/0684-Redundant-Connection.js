// https://leetcode.com/problems/redundant-connection/

// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

// Example 1:


// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
// Example 2:


// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]
 

// Constraints:

// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.

class UnionFind
{
    constructor(edges)
    {
        this.ranks = new Array(edges.length).fill(1);
        this.parents = Array.from(Array(edges.length).keys());
    }

    find(index)
    {
        let parent = this.parents[index];
        while(parent != this.parents[parent]){parent = this.parents[this.parents[parent]];}
        return parent;
    }

    union(p, q)
    {
        let pp = this.find(p);
        let pq = this.find(q);

        if(pp == pq){return false;}
        if(this.ranks[pp] > this.ranks[pq])
        {
            this.parents[pq] = pp;
            this.ranks[pq] += this.ranks[pp];
        }
        else
        {
            this.parents[pp] = pq;
            this.ranks[pp] += this.ranks[pq];
        }

        return true;
    }
}

let findRedundantConnection = function(edges)
{
    let uf = new UnionFind(edges);
    for(let [node, edge] of edges)
    {
        if(!uf.union(node, edge)){return [node, edge];}
    }
}