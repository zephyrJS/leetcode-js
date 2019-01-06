/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  O(nlogn)
// https://www.youtube.com/watch?v=xF3TU-QlhJQ
var merge = function (nums1, m, nums2, n) {
    var i = m - 1,
        j = n - 1,
        k = m + n - 1;
    while (i > -1 && j > -1) nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    while (j > -1) nums1[k--] = nums2[j--]
};