/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = []
    if(numRows === 0) return triangle
    triangle[0] = [1]
    for(let i = 1; i<numRows; i++) {
        triangle[i] = []
        triangle[i].push(1)
        const pre = triangle[i-1]
        for(let j=1; j<pre.length;j++) {
            triangle[i].push(pre[j-1] + pre[j])
        }
        triangle[i].push(1)
    }
    return triangle
};