/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - 1 - i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = temp
        }
    }
};

// 好的命名
const rotate = m => {
    if (!m.length) return m
    const dim = m.length
    for (let layer = 0; layer < dim / 2; layer++) {
        const first = layer
        const last = dim - 1 - layer

        for (let i = first; i < last; i++) {
            let offset = i - first

            const top = m[layer][i]
            m[layer][i] = m[last - offset][layer] // left -> top
            m[last - offset][layer] = m[last][last - offset] // bottom -> left
            m[last][last - offset] = m[layer + offset][last] // right -> bottom
            m[layer + offset][last] = top // top -> right
        }
    }
    return m
}