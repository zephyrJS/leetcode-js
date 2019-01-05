/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划问题
// maxSubArray(array, i) = maxSubArray(array, i-1) > 0 ? maxSubArray(array, i-1) : 0 + array[i]
var maxSubArray = function(nums) {
    const n = nums.length;
    const dp = []; //dp[i] means the maximum subarray ending with A[i];
    dp[0] = nums[0];
    let max = dp[0];

    for(let i = 1; i < n; i++){
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(max, dp[i]);
    }

    return max;
};